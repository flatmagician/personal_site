import Social from '../Social/Social'
import "./BodyText.css"

import React, { Component } from 'react'

export default class BodyText extends Component {
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
            <div className="bodyText">
                <h1 className="header">Benjamin Taussig</h1>
                {
                    this.state.windowSmall ?
                        <div className="description" id="small">
                            <p>Software Developer</p><p>Full-stack Web Developer</p><p>Electrical Engineer</p>
                        </div>
                        :
                        <div className="description">
                            Software Developer | Full-stack Web Developer | Electrical Engineer
                        </div>
                }

            </div>
        )
    }
}