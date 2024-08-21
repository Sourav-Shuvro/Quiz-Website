import React from 'react';
import './DetailsQuestion.css'
import { Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DetailsQuestion = ({questions}) => {
    // console.log(questions);

    const {correctAnswer,options,question} = questions;

    const handleToastResult = ()=>{
      toast.info(correctAnswer,{autoClose: 1000});
    }
    const handleToast = (e)=>{
      const option = e.target.innerText;
      e.currentTarget.disabled = true;
      const correct = option.includes(correctAnswer);
      if(correct){
        toast.success('Correct',{autoClose: 1000});
      }
      else{
        toast.error('Incorrect',{autoClose: 1000});
      }

    }
    return (
        <section className='container total p-2'>
                <div className='d-flex'>
                    <h5 className='pt-3'>{question}</h5>
                    <Button onClick={handleToastResult} className='ms-auto'>See Result</Button>
                </div>
                <div>
                    {
                        options.map((option,idx)=> 
                            <div className='m-2'>
                              <Button variant='light' className='btn' onClick={handleToast}>{idx+1}. {option}</Button>
                            </div>
                    ) 
                    }
                </div>
                <div></div>
                <ToastContainer/>
        </section>
    );
};

export default DetailsQuestion;