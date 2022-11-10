import React from "react"
import {
    Route,
    BrowserRouter as Router,
    Routes
} from "react-router-dom"
import { Home } from "./shared/homePage/sections/home"
import { Login } from "./shared/login/login"
import { ForgetPassword } from "./shared/forgetpassword/forget-password"

export const Main = () => {
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/login' element={<Login />} />
                <Route exact path='/forgetpassword' element={<ForgetPassword />} />
                <Route path='*' element={() => "404 NOT FOUND"} />
            </Routes>
        </Router>
    )
}