import React from 'react'
import { useSelector } from 'react-redux'
import Layout from '../../Components/Layout'
import { Link } from "react-router-dom"

function DeskBoard() {
    const quizdata = useSelector((state) => state.quizData);
    console.log("quizdata", quizdata.quizData)
    const renderButtons = () => {
        return quizdata.quizData.map((item) => {
            return <div>
                <button style={{ marginTop: "10px" }} className="btn btn" >
                    <Link style={{ textDecoration: "none", color: "green" }} to={`/:${item.quizname}`} >
                        {
                            item.quizname
                        }
                    </Link>
                </button>
            </div>
        })
    }
    return (
        <Layout>
            <br />
            <br />
            <br />

            <div style={{ textAlign: "center" }}>
                {
                    renderButtons()
                }
            </div>
        </Layout>
    )
}

export default DeskBoard
