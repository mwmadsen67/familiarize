import React from "react"

import {Switch} from "react-router-dom"
import {AuthRoute, ProtectedRoute} from "../util/auth_util"
import MainPage from "./main/main_page"
import NavBarContainer from "./nav_bar/nav_bar_container"
import LoginFormContainer from "./session_forms/log_in_form_container"
import SignUpFormContainer from "./session_forms/sign_up_form_container"
import application from "../styles/application/application.scss"
import TreeIndexContainer from "./trees/tree_index_container";
import TreeShowContainer from '../components/trees/tree_show_container';

const App = () => {
    return(    
        <div className="application-container">
            <NavBarContainer/>
            <Switch>
                <AuthRoute exact path={"/"} component={MainPage}/>
                <AuthRoute path={"/login"} component={LoginFormContainer}/>
                <AuthRoute path={"/signup"} component={SignUpFormContainer}/>
                <ProtectedRoute exact path={'/main'} component={TreeIndexContainer} />
                <ProtectedRoute exact path={'/tree/:treeId'} component={TreeShowContainer} />
            </Switch>
        </div>
    )
}

export default App;