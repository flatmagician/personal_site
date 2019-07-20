import React, { Component } from 'react'
import tphb from "../../assets/tphb.png"
import { Link } from "react-router-dom"
import "./Sidebar.css"
import Social from "../Social/Social"

export default class Sidebar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showNav: false,
            windowSmall: true
        }
        this.mouseEnterHandler = this.mouseEnterHandler.bind(this);
        this.mouseLeaveHandler = this.mouseLeaveHandler.bind(this);
        this.contactClickHandler = this.contactClickHandler.bind(this);
    }

    updateDimensions() {
        if (window.innerWidth < 550) {
            this.setState({ windowSmall: true });
        } else {
            this.setState({ windowSmall: false });
        }
    }

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions.bind(this));
    }

    mouseEnterHandler() {
        this.setState({
            showNav: true
        })
    }

    mouseLeaveHandler() {
        this.setState({
            showNav: false
        })
    }

    contactClickHandler() {
        this.setState({
            page: "Contact"
        }, console.log(this.state))
    }

    render() {
        let navClass = this.state.showNav ? "navigationHover" : "navigationNoHover";
        if (this.state.showNav && window.innerWidth < 740) {
            navClass = "small";
        }
        let hbwrapperId = this.state.windowSmall ? "small" : "";

        return (
            <div className={navClass} id={"navigation"} onMouseLeave={this.mouseLeaveHandler}>
                {
                    this.state.showNav ?
                        <nav class="links" id="sidebar">
                            <div><Link to="/">Home</Link></div>
                            <div><Link to="/Contact">Contact</Link></div>
                            <div><Link to="#">Projects</Link></div>
                            <div><Link to="#">More Info</Link></div>
                        </nav>
                        :
                        <div></div>

                }
                <div class="hamburgerWrapper" id={hbwrapperId} >
                    <Link to="/">
                        <img onMouseEnter={this.mouseEnterHandler} src={tphb} alt="hamburger" className="hamburger"></img>
                    </Link>
                </div>
            </div >
        )
    }
}



//<nav>Hello</nav>