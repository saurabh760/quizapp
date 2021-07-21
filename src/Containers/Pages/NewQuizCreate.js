
import React from "react";
import Button from "@material-ui/core/Button";
import { Col, Row } from "react-bootstrap";
import SaveIcon from "@material-ui/icons/Save";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import Layout from "../../Components/Layout";
import { addQuiz } from "../../Actions/Quizdata.Action";

const CreateQuizPage = (props) => {
  const [quizname, setquizname] = useState("");
  const [numOfQuestion, setNumOfQuestion] = useState(1);
  const [questionBody, setQuestionBody] = useState("");
  const [quizDetails, setQuizDetails] = useState();
  const [optionsDetails, setOptionsDetails] = useState([]);
//   if(optionsDetails.length===0)setOptionsDetails([" "])
  const [questionType, setQuestionType] = useState(-1);
  // const [answerOfRadio, setAnswerOfRadio] = useState('');
  // const [ansOfCheck, setAnswerCheck] =useState('');
  // const [qcheck, setqcheck] = useState(true);
  const dispatch = useDispatch();
  const temp = {
    quizname: "",
    questions: [],
    quizScore: 0,
  };

  useEffect(() => {
    if (!quizDetails) setQuizDetails(temp);
    if (optionsDetails.length === 0) setOptionsDetails([...optionsDetails, ""]);
  });

  const newOption = () => {
    let check = false;
    console.log(optionsDetails,'op')
    
    optionsDetails.map((item) => {
      console.log(item,'item')
      if(item === "") {
        check = true;
        console.log('ghgghg')
      }
      // setNumOfOption( numOfOption + 1);
    return true
    })
    if (!check) setOptionsDetails([...optionsDetails, ""]);

  };

  const handleQuiz = () => {
    var sel;
          var error = false;
          var question;
          if (questionType == 1) {
         
              if (document.querySelector("input[name=optionNameSingle]:checked"))
                  sel = document.querySelector("input[name=optionNameSingle]:checked").value;
              else error = true;
              optionsDetails.map((item) => {
                  if (item === "") {
                      error = true;
                  }
              })
              if (quizname == "" || questionBody == "" ) error = true;
              if (error) {
                  console.log("there is some fields missing ")
                  return false;
              }
              const ind = optionsDetails.indexOf(sel);
              var ans = [];
              ans.push(ind);
              console.log(sel, ind);
              question = {
                  questionType: questionType,
                  questionBody: questionBody,
                  options: [...optionsDetails],
                  answer: ans
              }
          } else if (questionType == 2) {
      
              optionsDetails.map((item) => {
                  if (item === "") {
                      error = true;
                  }
              })
              if (quizname == "" || questionBody == "") error = true;
              if (error) {
                  console.log("there is some fields missing ")
                  return false;
              }
              var ind = [];
              console.log(sel, ind);
                console.log( document.querySelectorAll("input[name=optionName]:checked"))
              for (var i = 0; i < document.querySelectorAll("input[name=optionName]:checked").length; i++) {
                  ind.push(optionsDetails.indexOf(document.querySelectorAll("input[name=optionName]:checked")[i].value));
              }
              // if (ind.length===0) return false
              console.log("-->>>", ind);
              question = {
                  questionType: questionType,
                  questionBody: questionBody,
                  options: [...optionsDetails],
                  answer: ind
              }
          } 
         
          console.log(question);
          var newQ = { ...quizDetails };
          console.log(newQ);
          console.log(quizname);
          // var quizNameSlaged = quizName.replaceAll(' ', '-');
          // newQ.quizName = quizNameSlaged;
          newQ.questions.push(question);
          console.log(newQ);
          setQuizDetails(newQ);
          console.log(quizDetails);
          setOptionsDetails([""]);
          setQuestionBody('');
          setNumOfQuestion(numOfQuestion + 1);
      }
  const submit = () => {
    // console.log("hello");
    // console.log(quizDetails);
    dispatch(addQuiz(quizDetails));
    setQuizDetails(temp);
    props.history.push("/home");
  };
  const handleQuestionType = () => {
    var ind = null;
    if (document.querySelector("input[name=typeOfQuestion]:checked"))
      ind = document.querySelector("input[name=typeOfQuestion]:checked").value;
    if (ind === "singleAns") {
      setQuestionBody("");
      setOptionsDetails([]);
      setQuestionType(1);
    } else if (ind === "multiAns") {
      setQuestionType(2);
      setQuestionBody("");
      setOptionsDetails([]);
    }
  };

  return (
    <Layout>
      <div className="container">
        <div className="jumbotron">
          <p>
            <h1 style={{ textAlign: "center", color: "red" }}>Add Quiz</h1>
          </p>
          <br />
          <div className="modal-body">
            <div className="md-form form-sm mb-4">
              <i className="fas fa-envelope prefix"> Quiz_name :</i>
              <input
                type="text"
                value={quizname}
                placeholder="Quizname"
                className="col-sm-5"
                onChange={(e) => setquizname(e.target.value)}
                className="form-control form-control-sm validate"
                required
              />
            </div>{" "}
            <label> </label>
            <i className="fas fa-envelope prefix">Select A Type : </i>
           
            <div>
              <Row style={{ textAlign: "left" }}>
                <Col md={4}>
                  {" "}
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <div class="input-group-text">
                        <input
                          type="radio"
                          name="typeOfQuestion"
                          value="singleAns"
                          onChange={handleQuestionType}
                        />
                      </div>
                    </div>
                    <input
                      disabled
                      style={{ backgroundColor: "white" }}
                      placeholder="Single Answer Question"
                      type="text"
                      class="form-control"
                    />
                  </div>
                </Col>
                <Col md={4}>
                  {" "}
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <div class="input-group-text">
                        <input
                          type="radio"
                          name="typeOfQuestion"
                          value="multiAns"
                          onChange={handleQuestionType}
                        />
                      </div>
                    </div>
                    <input
                      disabled
                      style={{ backgroundColor: "white" }}
                      placeholder="Multi Answer Question"
                      type="text"
                      class="form-control"
                    />
                  </div>
                </Col>
              </Row>
            </div>
            <br />
            {
            questionType === 1 && (
              <div>
                <div className="md-form form-sm mb-5">
                  <i className="fas fa-envelope prefix">
                    {" "}
                    Question_No:{numOfQuestion}
                  </i>
                  <input
                    type="text"
                    value={questionBody}
                    placeholder="enter your question here"
                    onChange={(e) => setQuestionBody(e.target.value)}
                    className="col-sm-5"
                    class="form-control form-control-sm validate"
                    required
                  />           
                    </div><div><lebel className="fas fa-envelope prefix">Options:</lebel>
                               
                                  {  optionsDetails.length > 0 &&
                                    optionsDetails.map((item, index) => {
                                        return <div style={{ marginTop: "4px" }} className="input-group">
                                            <div className="input-group-text">
                                                <input name="optionNameSingle" className="form-check-input mt-0" type="radio" value={item} />
                                            </div>
                                            <input type="text" value={item} onChange={(e) => {
                                                var newArr = [...optionsDetails];
                                                newArr[index] = e.target.value
                                                setOptionsDetails(newArr)
                                            }} className="form-control" />
                                        </div>
                                    })
            }
                            </div>
                <div style={{ marginTop: "10px" }}>
                  <button
                    style={{ marginRight: "7px" }}
                    onClick={newOption}
                    className="btn btn-success"
                  >
                    AddOption
                  </button>
                </div>
                <br />
                <div>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={handleQuiz}
                  >
                    New Question
                  </Button>
                </div>
              </div>
            )}
            {questionType === 2 && (
              <div>
                <div className="md-form form-sm mb-5">
                  <i className="fas fa-envelope prefix">
                    {" "}
                    Question_No:{numOfQuestion}
                  </i>
                  <input
                    type="text"
                    value={questionBody}
                    placeholder="enter your question here"
                    onChange={(e) => setQuestionBody(e.target.value)}
                    className="col-sm-5"
                    class="form-control form-control-sm validate"
                    required
                  />
                  
                  </div><i className="fas fa-envelope prefix">Options:</i>
                
                {optionsDetails.length > 0 &&
                  optionsDetails.map((item, index) => {
                    return (
                      <div style={{ marginTop: "4px" }} className="input-group">
                        <div className="input-group-text">
                        {/* <i className="fas fa-envelope prefix">
                    {" "}
                    Op_No:{numOfOption}
                  </i>*/}
                          <input 
                            name="optionName"
                            className="form-check-input mt-0"
                            type="checkbox"
                            value={item}
                          />
                        </div>
                        <input
                          type="text"
                          value={item}
                          onChange={(e) => {
                            var newArr = [...optionsDetails];
                            newArr[index] = e.target.value;
                            console.log(newArr,'new')
                            setOptionsDetails(newArr);
                          }}
                          className="form-control" />
                      </div>
                    );
                  })}
                <div style={{ marginTop: "10px" }}>
                  <button
                    style={{ marginRight: "7px" }}
                    onClick={newOption}
                    className="btn btn-success"
                  >
                    AddOption
                  </button>
                </div>
                <br />
                <div>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={handleQuiz}
                  >
                    New Question
                  </Button>
                </div>
              </div>
            )}
            <br />
            {numOfQuestion > 2 && (
              <Button
                style={{ marginLeft: "7px" }}
                variant="contained"
                color="secondary"
                size="large"
                startIcon={<SaveIcon />}
                onClick={submit}
              >
                Save Quiz
              </Button>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateQuizPage;