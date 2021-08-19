import React from 'react'


class Form extends React.Component {
    render() {
        return (
            <>
            
                <form onSubmit={this.props.handleSubmit} style ={{display: "flex", flexDirection: "column" ,alignItems: "center"}}>
                <h1>FORM</h1>
                    <input type="text" onChange={this.props.handleFirstName} className="first-name"></input>
                    <input type="text" onChange={this.props.handleLastName} className="last-name"></input>

                    <input type="email" 
                    className={`col-6 form-control ${this.props.emailIsValid ? 'is-valid' : 'is-invalid'}` }
                    onChange={this.props.handleEmailChange} 
                    value={this.props.email}></input>

                    <input type="password" 
                    className={`form-control col-6 ${this.props.passwordIsValid ? 'is-valid' : 'is-invalid' }`}
                     onChange={this.props.handlePasswordChange}
                      value={this.props.password}></input>

                    <input type="checkbox" 
                    onChange={this.props.handleRememberMeChange}></input>

                    <button type="submit"className="btn-primary col-6">Submit</button>
                </form>
            </>
        )
    }
}

export default Form