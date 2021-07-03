import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addQuizData } from '../../Actions/QuizData.Action';
import Layout from '../../Components/Layout'
const CreateQuizPage = (props) => {
    const [quizName, setQuizName] = useState('');
    const [numOfQuestion, setNumOfQuestion] = useState(1);
    const [questionBody, setQuestionBody] = useState('');
    const [quizDetails, setQuizDetails] = useState();
    const [optionsDetails, setOptionsDetails] = useState([]);
    const dispatch = useDispatch();
    const temp = {
        quizName: "",
        questions: []
    }
    useEffect(() => {
        if (!quizDetails) setQuizDetails(temp);
        if (optionsDetails.length == 0) setOptionsDetails([...optionsDetails, ""])
    })
    const addOption = () => {
        var check = false;
        optionsDetails.map((item) => {
            if (item === "") {
                console.log("sjskslskjl")
                check = true;
            }
        })
        if (!check) setOptionsDetails([...optionsDetails, ""])
        console.log('next', optionsDetails);
    }
    const handleNext = () => {
        var sel;
        var error = false;
        if (document.querySelector("input[name=optionName]:checked"))
            sel = document.querySelector("input[name=optionName]:checked").value;
        else error = true;
        optionsDetails.map((item) => {
            if (item === "") {
                error = true;
            }
        })
        if (quizName == "" || questionBody == "") error = true;
        if (error) {
            console.log("fill all fields ")
            return false;
        }
        const ind = optionsDetails.indexOf(sel);
        console.log(sel, ind);
        const question = {
            questionBody: questionBody,
            options: [...optionsDetails],
            answer: ind,
        }
        var newQ = { ...quizDetails };
        console.log(newQ);
        console.log(quizName);
        newQ.quizName = quizName;
        newQ.questions.push(question);
        console.log(newQ);
        setQuizDetails(newQ);
        console.log(quizDetails);
        setOptionsDetails([]);
        setQuestionBody('');
        setNumOfQuestion(numOfQuestion + 1);
    }
    const handleSubmit = () => {
        console.log("seeeee");
        console.log(quizDetails);
        dispatch(addQuizData(quizDetails));
        setQuizDetails(temp);
        props.history.push('/home');
    }
    return (
        <Layout>
            <br />
            <br />
            <br />
            <div className="container">
                <div className="jumbotron">
                    {
                        (<div className="form-group">
                            <label>QuizName</label>
                            <input required type="text" value={quizName} onChange={(e) => setQuizName(e.target.value)} className="form-control" placeholder="Enter Quiz Name" />
                        </div>)
                    }
                    <div className="form-group">
                        <label>Question Number : {numOfQuestion}</label>
                        <input required type="text" value={questionBody} onChange={(e) => setQuestionBody(e.target.value)} className="form-control" placeholder="Enter Question" />
                    </div>
                    <div>Options</div>
                    {
                        optionsDetails.length > 0 &&
                        optionsDetails.map((item, index) => {
                            return <div style={{ marginTop: "4px" }} className="input-group">
                                <div className="input-group-text">
                                    <input name="optionName" className="form-check-input mt-0" type="radio" value={item} />
                                </div>
                                <input type="text" value={item} onChange={(e) => {
                                    var newArr = [...optionsDetails];
                                    newArr[index] = e.target.value
                                    setOptionsDetails(newArr)
                                }} className="form-control" />
                            </div>
                        })
                    }
                    <div style={{ marginTop: "10px" }}>
                        <button style={{ marginRight: "7px" }} onClick={addOption} className="btn btn-primary">
                            Add New Option
                        </button><br /><br />
                        <button style={{ marginRight: "5px" }} className="btn btn-primary" onClick={handleNext} >Add New Question </button>
                        {
                            numOfQuestion > 5 && <button onClick={handleSubmit} className="btn btn-danger">Submit Quiz </button>
                        }
                    </div>
                </div>
            </div>
        </Layout >
    )
}

export default CreateQuizPage