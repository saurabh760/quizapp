import React from 'react'
import Layout from '../../Components/Layout'
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
{/* <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" /> */}
function HomePage() {
    return (
        <Layout>
            <div style={{ textAlign: "center", backgroundPosition: "center", backgroundRepeat: "no-repeat",width:"100%",height :"700px", backgroundSize: "cover", backgroundImage: `url("https://static.nc-img.com/pp/cms/home-reskinned-alternate/images/hero-decor-img-sm.bf16e76754312caf1bee0444ccf1c0d4.svg")` }}>
                <div style={{ paddingTop: "250px" }} className="container">
                    <div style={{ background: "transparent" }} className="jumbotron">
                        <h1 style={{ alignText: "center", color: "lightgrey", fontFamily: "Comic Sans MS" }} >Looking for Something?</h1>
                        <p style={{ alignText: "center", color: "lightgrey", fontFamily: "Comic Sans MS" }}>
                            Test your skills with Free online quizes
                        </p>
                        {/* <button className="btn btn-primary">
                            <Link style={{ textDecoration: "none", color: "white" }} to="/add-quiz">click for add quizes</Link>

                        </button> */}
                        <Button variant="contained" color="primary">
                        <Link style={{ textDecoration: "none", color: "white" }} to="/add-quiz">Click to Create quiz</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </Layout >
    )
}

export default HomePage