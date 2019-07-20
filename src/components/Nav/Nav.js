import React, { Component } from 'react'
import SideBar from "../Sidebar/Sidebar"
import TopBar from "../TopBar/TopBar"

export default class Nav extends Component {
    constructor(props) {
        super(props)

        this.state = {
            windowSmall: true
        }
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

    render() {
        return (
            this.state.windowSmall ?
                <TopBar />
                :
                <SideBar />
        )
    }
}
