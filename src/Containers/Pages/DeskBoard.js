import React from 'react'
import { useSelector } from 'react-redux'
import Layout from '../../Components/Layout'
import { Link } from "react-router-dom"
// import Button from '@material-ui/core/Button';

function DeskBoard() {
    const quizdata = useSelector((state) => state.quizData);
    console.log("quizdata", quizdata.quizData)
    const renderButtons = () => {
        return quizdata.quizData.map((item) => {
            return <div>
             <button style={{ marginTop: "10px" }} className="btn btn" >
                {/* <Button href="#text-buttons" color="primary"> */}
 

               
                    <Link style={{ textDecoration: "none", color: "green" }} to={`/:${item.quizname}`} >
                        {
                            item.quizname
                        }
                    </Link>

                    {/* </Button> */}
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
