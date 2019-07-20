import React, { Component } from 'react'
import github_img from "../../assets/Github.png"
import last_fm_img from "../../assets/lastfm.png"
import email_img from "../../assets/email.png"
import "./Social.css"

export default class Social extends Component {
    render() {
        return (
            <div className="social">
                <a className="stack" href="https://github.com/flatmagician">
                    <img className="icon" src={github_img} alt="Github"></img>
                    <div className="label">
                        Github
                    </div>

                </a>
                <a className="stack" href="https://www.last.fm/user/bentaussig">
                    <img className="icon" src={last_fm_img} alt="last.fm"></img>
                    <div className="label">
                        last.fm
                    </div>
                </a>
                <a className="stack" href="mailto:btaussig97@gmail.com">
                    <img className="icon" src={email_img} alt="email"></img>
                    <div className="label">
                        email
                    </div>
                </a>
            </div >
        )
    }
}
