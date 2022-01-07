import React from "react"
<<<<<<< HEAD
import Index from "./components/index"

function App() {
    return (
        < Index />
=======
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./view/Dashboard"
import Settings from "./view/dashboard/Settings"
import Login from "./view/dashboard/Login"
import TotalManagement from "./view/dashboard/TotalManagement"

function App() {
    return (
        <Router>
            <Switch>
                <Route path="./dashboard/Login" component={Login} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/dashboard/TotalManagement" component={TotalManagement} />
                <Route path="/dashboard/:page" component={Dashboard} />
                <Route path="/dashboard/Settings" component={Settings} />
            </Switch>
        </Router>
>>>>>>> 356a4d32f924fc781a71d16b628599dc1fa606ca
    )
}

export default App
