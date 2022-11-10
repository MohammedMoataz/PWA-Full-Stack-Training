import React from "react"
import {
    Route,
    BrowserRouter as Router,
    Routes
} from "react-router-dom"

import { Home } from "./home/home"
import { Account } from "./account/Account"
import { Reels } from "./reels/reels"
import { LoginForm } from "./login/loginForm"
import { RegistrationForm } from './registration/RegistrationForm'
import { CreateReel } from './create-reel/CreateReel'
import { ForgetPassword } from "./forget-password/forget-password"

export const Main = () => {
    return (
        <Router>
            <Routes>
                <Route exact path='/home' element={<Home />} />
                <Route exact path='/account' element={<Account />} />
                <Route exact path='/login' element={<LoginForm />} />
                <Route exact path='/registration' element={<RegistrationForm />} />
                <Route exact path='/createreel' element={<CreateReel />} />
                <Route exact path='/reels' element={<Reels />} />
                <Route exact path='/forgetpassword' element={<ForgetPassword />} />
                <Route path='*' element={() => "404 NOT FOUND"} />
            </Routes>
        </Router>
    )
}