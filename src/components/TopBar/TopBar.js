import React, { Component } from 'react'
import "./TopBar.css"
import { Link } from "react-router-dom"

export default function TopBar() {
    return (
        <nav class="top_links" id="sidebar">
            <div><Link to="/">Home</Link></div>
            <div><Link to="/Contact">Contact</Link></div>
            <div><Link to="#">Projects</Link></div>
            <div><Link to="#">More Info</Link></div>
        </nav>
    )
}

