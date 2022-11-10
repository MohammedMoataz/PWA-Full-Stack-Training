import React from "react"
import {
    Route,
    BrowserRouter as Router,
    Routes
} from "react-router-dom"

import { Admin } from "../admin/admin"
import { User } from "../user/user"

export const Main = () => {
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<Admin />} />
                <Route exact path='/locations' element={<User />} />
                <Route path='*' element={() => "404 NOT FOUND"} />
            </Routes>
        </Router>
    )
}