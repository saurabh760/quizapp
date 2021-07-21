import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom"
import './css/resultstyle.css'


/**
* @author
* @function ResultPage
**/

const ResultPage = (props) => {
    const quizData = useSelector(state => state.quizData);
    var urll = props.location.pathname;
    console.log(urll);
    var load_url = ""
    for (var i = 2; i < urll.length; i++) {
        if (urll[i] === '/') break;
        load_url = load_url + urll[i];
    }
    var score = 0;
    quizData.quizData.map((item) =>{
        if (item.quizname === load_url) {
            score = item.quizScore
        }
        return true
})
{
    return ( 
      <div >
          <div>
            <br />
            <br />
            <br />

            <div className="container" >
                <div style={{ textAlign: "center" }} className="jumbotron">
                                    <h4 style={{ color: "green" }}>
                        Your Score is : {score}
                    </h4><br />
                    <h3 style={{ color: "grey" }}>Create & Choose a tuff level to test yourself</h3>
                    <h1 style={{ color: "black" }}>Thank you for Visit our website !! </h1>
                    <br />
                    <button className="btn ">
                        <Link style={{ textDecoration: "none", color: "red" }} to="/home"> click here for home page</Link>
                    </button>
                </div>
           </div>
        </div>
        </div> 
    )

}
}

export default ResultPage