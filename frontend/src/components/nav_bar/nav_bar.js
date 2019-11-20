import React from "react"
import {withRouter} from "react-router-dom"

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
                <div>
                    <div onClick={this.logout}> Log out </div>
                </div>
            )
        }else{
            return(
                <div>
                    <div onClick={this.handleLogIn}> Log In</div>
                    <div onClick={this.handleSignUp}> Sign Up</div>
                </div>                
            )
        }
    }

    render(){
        const header = this.getLinks()

        return(
            <div>
                <div>Familiarize</div>
                {header}
            </div>
        )
    }
}
export default withRouter(NavBar)