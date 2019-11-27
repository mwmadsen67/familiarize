import React from "react"
import {withRouter} from "react-router-dom"
import '../../styles/reset.scss';
import "../../styles/nav-bar/nav-bar.scss"
class NavBar extends React.Component{

    constructor(props){
        super(props)

        this.logout = this.props.logout.bind(this)
        this.handleLogIn = this.handleLogIn.bind(this)
        this.handleSignUp = this.handleSignUp.bind(this)
    }

    handleLogOut(){
        this.props.logout()
    }

    handleLogIn(){
        this.props.history.push("/login")
    }

    handleSignUp(){
        this.props.history.push("/signup")
    }

    getLinks(){
        if(this.props.loggedIn){
            return(
                <div className="link-buttons-container">
                    <div className="link-buttons" onClick={this.logout}> Log out </div>
                </div>
            )
        }else{
            return(
                <div className="link-buttons-container">
                    <div className="link-buttons" onClick={this.handleLogIn}> Log In</div>
                    <div className="link-buttons" onClick={this.handleSignUp}> Sign Up</div>
                </div>                
            )
        }
    }

    render(){
        const header = this.getLinks()

        return(
            <div className="navbar-container">
                <a className='logo' href='#/main'>Familiarize</a>
                {header}
            </div>
        )
    }
}
export default withRouter(NavBar)