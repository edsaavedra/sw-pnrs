import React from "react"
import { Link } from "react-router-dom"
import "../App.scss"

const About = () => {
    return (
        <div className="about">
            <p>Welcome to the other Page</p>
            <Link className ="App-link" to="/">Back</Link>
        </div>
    )
}

export default About