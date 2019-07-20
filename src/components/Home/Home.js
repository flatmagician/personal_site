import React, { Component } from 'react'
import Background from "../Background/Background"
import Nav from "../Nav/Nav"
import BodyText from "../BodyText/BodyText"
import Social from "../Social/Social"
import "./Home.css"


import { BrowserRouter as Router, Link } from "react-router-dom"

export default class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className="wrapper">
                <Background imgUrl="https://i.gifer.com/hsB.gif" />
                <Nav />
                <BodyText />
                <Social />
            </div>
        )
    }
}
