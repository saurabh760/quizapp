import React from 'react'
import Layout from '../../Components/Layout'
import { Link } from "react-router-dom";
function HomePage() {
    return (
        <Layout>
            <div style={{ textAlign: "center", height: "1000px", backgroundPosition: "center", backgroundRepeat: "no-repeat",width:"100%",height :"700px", backgroundSize: "cover", backgroundImage: `url("https://static8.depositphotos.com/1003649/835/i/950/depositphotos_8354777-stock-photo-word-on-keyboard.jpg")` }}>
                <div style={{ paddingTop: "250px" }} className="container">
                    <div style={{ background: "transparent" }} className="jumbotron">
                        <h1 style={{ alignText: "center", color: "lightgrey", fontFamily: "Comic Sans MS" }} >Looking for Something?</h1>
                        <p style={{ alignText: "center", color: "lightgrey", fontFamily: "Comic Sans MS" }}>
                            Test your skills with Free online quizes
                        </p>
                        <button className="btn btn-primary">
                            <Link style={{ textDecoration: "none", color: "white" }} to="/deskboard">click for your quiz</Link>

                        </button>

                    </div>
                </div>
            </div>
        </Layout >
    )
}

export default HomePage