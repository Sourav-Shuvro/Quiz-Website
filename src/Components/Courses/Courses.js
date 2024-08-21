import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Courses = ({courses}) => {
    // console.log(courses)
    const {id, logo,name,total} = courses;

    const navigate = useNavigate();
    const quizQuestions = ()=>{
        navigate(`/quiz/${id}`)
    }
    return (
        <div className='text-center'>
            <Col>
                <Card>
                    <img src={logo} className='img-fluid' alt={name} />
                    <h4 className='mt-3'>{name}</h4>
                    <p>Total Questions: {total}</p>
                    <Button className='mx-5 mb-2' onClick={quizQuestions}>Start</Button>
                </Card>
            </Col>
        </div>
    );
};

export default Courses;