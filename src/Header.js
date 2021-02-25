import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <header>
                <NavLink to="/">Home</ NavLink>
                <NavLink to="/modules">List of Modules</ NavLink>
                <NavLink to="/create">Create Module</ NavLink>
            </header>
        )
    }
}
