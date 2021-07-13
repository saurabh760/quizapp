import React from 'react';
import Button from '@material-ui/core/Button';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addQuizScore } from '../../Actions/Quizdata.Action';


/**
* @author
* @function QuizAttemp
**/

const QuizPage = (props) => {
    const [selectedAnswers, setSelectedAnswers] = useState([]);
    const quizdata = useSelector((state) => state.quizData);
    var urll = props.location.pathname;
    var load_url = urll.substr(2, urll.length - 1);
    var quizIndex = 0;
    const data = quizdata.quizData.find((item) => item.quizname === load_url);
    quizdata.quizData.map((item, index) => {
        if (item.quizname === load_url) {
            quizIndex = index;
        }
        return true;
    })
    const [questionNum, setQuestionNum] = useState(0);
    const dispatch = useDispatch();
    var temp = [];
    for (var i = 0; i < data.questions.length; i++) temp.push(-1);
    if (!selectedAnswers.length) {
        setSelectedAnswers(temp);
    }
    const removeCheckedValue = () => {
        if (document.querySelector("input[name=optionName]")) {
            for (var i = 0; i < document.getElementsByName("optionName").length; i++) {
                document.getElementsByName("optionName")[i].checked = false;
            }
        }
    }
    const setCheckValue = () => {
        console.log("===>", selectedAnswers);
        if (selectedAnswers[questionNum] ===-1) {
            removeCheckedValue();
        }
        else {
            for (var i = 0; i < document.getElementsByName("optionName").length; i++) {
                if (i === selectedAnswers[questionNum]) document.getElementsByName("optionName")[i].checked = true;
                else document.getElementsByName("optionName")[i].checked = false;
            }
        }
    }
    const handleNextQuestion = () => {
        var sel, error = false;
        if (document.querySelector("input[name=optionName]:checked")) {
            sel = document.querySelector("input[name=optionName]:checked").value;
            var ind = data.questions[questionNum].options.indexOf(sel);
            selectedAnswers[questionNum] = ind;
            setSelectedAnswers(selectedAnswers);
            setQuestionNum(questionNum + 1);
        }
        else error = true;
        if (error) {
            return false;
        }
    }
    const handlePrevious = () => {
        setQuestionNum(questionNum - 1);
    }
    const add = () => {
        var sel;
        if (document.querySelector("input[name=optionName]:checked")) {
            sel = document.querySelector("input[name=optionName]:checked").value;
            var ind = data.questions[questionNum].options.indexOf(sel);
            selectedAnswers[questionNum] = ind;
            setSelectedAnswers(selectedAnswers);
            return true;
        }
        return false;
    }
    const handleSubmitQuiz = () => {
        if (!add()) return false;
        console.log("sel",data.questions);
        console.log("---->", selectedAnswers);
        var score = 0;
        for(var i=0;i<data.questions.length;i++) {
            console.log("as->",data.questions[i].answer);
            if (data.questions[i].answer[0] === selectedAnswers[i]) {
                console.log("here");
                score++;
            } 
        }
        dispatch(addQuizScore({ quizIndex, score }));
        console.log("\\\\\\\\\\")
        props.history.push(`/:${load_url}/result`);
    }

    return (
        <>
            <br />
            <br />
            <br />
            <div className="container">
                <div className="jumbotron">
                    {
                        <div className="form-group">
                            <h1 style={{textAlign:"center",color:"green"}}>{data.quizname}</h1>
                        </div>
                    }
                    <div className="form-group">
                        <label><i className="fas fa-envelope prefix"> Qu :</i>{questionNum + 1} </label>
                        {data.questions[questionNum] && (<input value={data.questions[questionNum].questionBody} style={{ backgroundColor: "white" }} type="text" disabled className="form-control" />)}

                    </div>
                    <div><i className="fas fa-envelope prefix">Options:</i></div>
                    {
                        data.questions[questionNum].options.map((item, index) => {
                            return <div style={{ marginTop: "4px" }} className="input-group">
                                <div className="input-group-text">
                                    <input name="optionName" className="form-check-input mt-0" type="radio" value={item} />
                                </div>
                                <input disabled style={{ backgroundColor: "white" }} type="text" value={item} className="form-control" />
                            </div>
                        })
                    }


                    <div style={{ marginTop: "10px" }}>
                        {
                            questionNum > 0 && (<Button style={{ marginLeft: "7px" }} variant="contained" color="primary" size="small"  onClick={handlePrevious}>
                                                        Previos Question
                           
                            </Button>)
                        }
                        {
                            questionNum < data.questions.length - 1 &&<Button style={{ marginLeft: "7px" }} variant="contained" color="primary" size="small"  onClick={handleNextQuestion}>
                                next Question
                            </Button>
                        }

                        <br /><br />
                        {
                            questionNum === data.questions.length - 1 && <Button style={{ marginLeft: "7px" }} variant="contained" color="secondary" size="large"  onClick={handleSubmitQuiz}>
                            Submit
                           </Button>
                            //  questionNum === data.questions.length - 1 && <button onClick={handleSubmitQuiz} className="btn btn-danger">Submit Quiz </button>
                        }

                    </div>
                </div>
           </div>
            {
                setCheckValue()
            }
        </ >
    )

}

export default QuizPage