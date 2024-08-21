import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DetailsQuestion from '../DetailsQuestion/DetailsQuestion';

const Questions = () => {
    const questions = useLoaderData()
    // console.log(questions.data)
    return (
        <section>
            {
                questions.data.questions.map(question => <DetailsQuestion key ={question.id} questions ={question}></DetailsQuestion>)
            }
        </section>
    );
};

export default Questions;