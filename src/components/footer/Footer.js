import React from 'react'
import { FaHeart } from 'react-icons/fa';
import './Footer.css'

export const Footer = () => {

    return (
        <footer>
            <small>
                © {new Date().getFullYear()} made with <FaHeart style={{ color: 'red' }} /> by -{' '}
                <a target="blank" href="https://github.com/shanks-t">
                    Trey Shanks
                </a>
            </small>
            <br />
            <div className="social-bagdes">
                <a target="blank" href="https://github.com/shanks-t" >
                    <img
                        alt="GitHub followers"
                        src="https://img.shields.io/github/followers/shanks-t?label=github&style=social"
                    />
                </a>
                <a href="https://twitter.com/sot_weedFactor" target="blank">
                    <img
                        alt="Twitter Follow"
                        src="https://img.shields.io/twitter/follow/sot_weedFactor?label=twitter&style=social"
                    />
                </a>
            </div>
        </footer>
    )
}