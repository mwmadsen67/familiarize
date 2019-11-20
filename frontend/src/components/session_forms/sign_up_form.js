import React from 'react';
import { withRouter,Link } from 'react-router-dom';
import login from "../../styles/session-signup/login.scss"
class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            username: '',
            password: '',
            password2: '',
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearedErrors = false;
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.signedIn === true) {
            this.props.history.push('/login');
        }

        this.setState({ errors: nextProps.errors })
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let user = {
            email: this.state.email,
            username: this.state.username,
            password: this.state.password,
            password2: this.state.password2
        };

        this.props.signup(user, this.props.history);
    }

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
                        <br />
                        <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            placeholder="Email"
                            className="input-field"
                        />
                        <br />
                        <input type="text"
                            value={this.state.username}
                            onChange={this.update('username')}
                            placeholder="Username"
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
                        <input type="password"
                            value={this.state.password2}
                            onChange={this.update('password2')}
                            placeholder="Confirm Password"
                            className="input-field"
                        />
                        <br />
                        <input className="submit-button" type="submit" value="Submit" />
                        <br/>
                        <div>Already have an account?</div>
                        <Link to="/login" >Login</Link>
                        <br/>
                        {this.renderErrors()}
                </form>
            </div>
        );
    }
}

export default withRouter(SignupForm);