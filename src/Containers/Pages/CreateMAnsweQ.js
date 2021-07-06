// import React from 'react'

// import {useDispatch} from 'react-redux'
// import { useState } from 'react'
// import { useEffect } from 'react'
// import Layout from '../../Components/Layout'
// import { addQuiz } from '../../Actions/Quizdata.Action';



// const CreateMAnswerQ = (props) =>{
// const [quizname, setquizname] = useState('');
// const [numOfQuestion, setNumOfQuestion] = useState(1);
// const [questionBody, setQuestionBody] = useState('')
// const [quizDetails, setQuizDetails] = useState();
// const [optionsDetails, setOptionsDetails] = useState([]);

// const dispatch = useDispatch();
// const temp = {
//     quizname: "",
//     questions: [],
//     score = 0
// }

// useEffect(() => {
//     if (!quizDetails) setQuizDetails(temp);
//     if (optionsDetails.length == 0) setOptionsDetails([...optionsDetails, ""])
// },[])

// const newOption = () => {
//     let check = false;
//     optionsDetails.map((item) => {
//         if (item === "") {
//             console.log("something wrong")
//             check = true;
//         }
//     })
//     if (!check) setOptionsDetails([...optionsDetails, ""])
//     console.log('next', optionsDetails);
// }


// const handleQuiz = () =>{
//     let sel;
//         let error = false;
//         if (document.querySelector("input[name=optionName]:checked"))
//             sel = document.querySelector("input[name=optionName]:checked").value;
//         else error = true;
//         optionsDetails.map((item) => {
//             if (item === "") {
//                 error = true;
//             }
//         })
//         if (quizname == "" || questionBody == "") error = true;
//         if (error) {
//             console.log("fill all fields ")
//             return false;
//         }
//         const nxt = optionsDetails.indexOf(sel);
//         console.log(sel, nxt);
//         const question = {
//             questionBody: questionBody,
//             options: [...optionsDetails],
//             answer: nxt,
//         }
//         var newQ = { ...quizDetails };
//         console.log(newQ);
//         console.log(quizname);
//         newQ.quizname = quizname;
//         newQ.questions.push(question);
//         console.log(newQ);
//         setQuizDetails(newQ);
//         console.log(quizDetails);
//         setOptionsDetails([]);
//         setQuestionBody('');
//         setNumOfQuestion(numOfQuestion + 1);
    
// }
//    const submit = () => {
//     console.log("hello");
//     console.log(quizDetails);
//     dispatch(addQuiz(quizDetails));
//     setQuizDetails(temp);
//     props.history.push('/home');
//      }
//   {
//     return (
//         <Layout>
//             <div className="container">  
//             <div className ="jumbotron">
//                 <br/>
//             <p><h1 style ={{textAlign:"center"}}>Add Quiz</h1></p>
//             <br/>
            
//             <div className="container">
//                         <div className="modal-body">
                          
//                         <div className="md-form form-sm mb-4">
//                           <i className="fas fa-envelope prefix"> Quiz_name :</i>
//                           <input type="text" value={quizname}  placeholder="Quizname" className="col-sm-5" onChange={(e) => setquizname(e.target.value)} className="form-control form-control-sm validate" required/>
//                           <label> </label>
                          

//                        <div className="md-form form-sm mb-5">
//                           <i className="fas fa-envelope prefix"> Question_No:{numOfQuestion}</i>
//                           <input type="text" value={questionBody} placeholder="enter your question here" onChange={(e) => setQuestionBody(e.target.value)} className="col-sm-5" class="form-control form-control-sm validate" required/>
//                           <label> </label>
                          
//                           </div>
//                           <div>Options:</div>
                         
//                     {
//                         optionsDetails.length > 0 &&
//                         optionsDetails.map((item, index) => {
//                             return <div style={{ marginTop: "4px" }} className="input-group mb-3">
//                             <div className="input-group-text">
//                                 <input  name="optionName" className="form-check-input " type="checkbox" value={item} />
//                             </div>
//                                 <input type="text" value={item} onChange={(e) => {
//                                     var newArr = [...optionsDetails];
//                                     newArr[index] = e.target.value
//                                     setOptionsDetails(newArr)
//                                 }} className="form-control" />
//                             </div>
                            
//                         })
//                     }</div>
//                  <div style={{ marginTop: "10px" }}>
//                      <button style={{ marginRight: "7px" }} onClick={newOption} className="btn btn-success">
//                             AddOption
//                         </button>
                        
//                         <br /><br />
//                         <button style={{ marginRight: "5px" }} className="btn btn-primary" onClick={handleQuiz} >Add New Question </button>
//                       {
//                        numOfQuestion > 5 && <button className="btn btn-danger" onClick={submit}>submit_quiz</button>
//                       }
//                 </div>
//                 </div>
//                 </div>
//                 </div>
//                 </div>

//         </Layout>
   
//     )}}

// export default CreateMAnswerQ

