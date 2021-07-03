import React from 'react'
import Layout from '../../Components/Layout'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const DeskBoard =(props) => {
    const quizdata =useSelector((state) => state.quizData);
    console.log("quizdata",quizdata.quizData)

    const renderb = () =>{
        return quizdata.quizData.map((item) =>{
            return (
                    <div>
                    <button onClick={submit} style ={{  marginTop:"8px", textAlign:'center', position:'center'}} className="btn btn-white">
                    <Link style={{  textDecoration: "none", textAlign:'center',color: "green", }} to={`/:${item.quizname}`}>
                        {
                            item.quizname
                        }
                    </Link>
                    </button>
                    </div>
                    
                     )   
                     
                        }
   
    ) 
}
const submit = () => {
    console.log("hello");
   
    props.history.push('/QuizAttemp');
     }

return (
<Layout>
<br/>
<br/>
<div style ={{textAlign:'center'}}>
{
    renderb()
}
</div>
</Layout>

)

}
export default DeskBoard
