import React from 'react';
import { withRouter,Link } from 'react-router-dom';
import login from "../../styles/session-signup/login.scss"
class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    // Once the user has been authenticated, redirect to the Tweets page
    componentWillReceiveProps(nextProps) {
        if (nextProps.currentUser === true) {
            this.props.history.push('/main');
        }

        // Set or clear errors
        this.setState({ errors: nextProps.errors })
    }

    // Handle field updates (called in the render method)
    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    // Handle form submission
    handleSubmit(e) {
        e.preventDefault();

        let user = {
            email: this.state.email,
            password: this.state.password
        };

        this.props.login(user);
    }

    // Render the session errors if there are any
    renderErrors() {
        return (
            <div className="errors-container">
                {Object.keys(this.state.errors).map((error, i) => (
                    <div key={`error-${i}`}>
                        {this.state.errors[error]}
                    </div>
                ))}
            </div>
        );
    }

    render() {
        return (
            <div className="session-signup-form">
                <form onSubmit={this.handleSubmit} className="login-form">
                        <br/>
                        <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            placeholder="Email"
                            className="input-field"
                        />
                        <br />
                        <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            placeholder="Password"
                            className="input-field"
                        />
                        <br />
                        <input className="submit-button" type="submit" value="Submit" />
                        <br />
                        <div>Create an account</div>
                        <Link to="/signup" >Sign up</Link>
                        <br/>
                        {this.renderErrors()}
                </form>
            </div>
        );
    }
}

export default withRouter(LoginForm);