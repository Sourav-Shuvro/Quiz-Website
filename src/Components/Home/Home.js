import React from 'react';
import './Home.css'
import { useLoaderData } from 'react-router-dom';
import Courses from '../Courses/Courses';
import { Row } from 'react-bootstrap';

const Home = () => {
    const home = useLoaderData();
    // console.log(home.data)
    return (
        <section className='container '>
            <div className='text'>
                <h3 className='text-center mt-2'>Welcome to Quiz Exam</h3>
                <hr />
                <h5 className='p-2'>A React, JavaScript, and CSS quiz tests knowledge on front-end web development. It covers React components, hooks, state management, JavaScript syntax, DOM manipulation, and CSS layout techniques like Flexbox and Grid. </h5>
            </div>
            <div className='my-5'>
            <Row xs={1} md={4} className="g-4">
                {
                    home.data.map(item => <Courses key = {item.id} courses = {item}></Courses>)
                }
            </Row>
            </div>
        </section>
    );
};

export default Home;