import './BookingPage.css';
import React, { useEffect } from 'react';
import { useState, useReducer } from 'react';
import Header from './../Header.js';
import Footer from './../Footer.js';
import BookingForm from './BookingForm.js'
import {fetchAPI, submitAPI} from './../../APIs/bookingAPI.js'
import { type } from '@testing-library/user-event/dist/type/index.js';
import { useNavigate } from 'react-router-dom';


const updateTimesState = (state, action) => {

    switch (action.type){
        case 'setTimes':
            return action.payload;
            default:
                return state;
    }
}

export default function BookingPage() {

// initialize availableTimes by using Reducer
const [availableTimes, dispatch] =
useReducer(updateTimesState, []);
const navigate = useNavigate();

// to set available times based on the selected date
const updateTimes = async (date) => {

    // using async feature to pause execution to wait for the result of thr fetchAPI
    const times = await fetchAPI(date);
    dispatch({type: 'setTimes', payload: times});
 }

// initialize available times just for once
useEffect(() => {
    const today = new Date();
    updateTimes(today);
},[])

const submitForm = (formData) => {
    const response = submitAPI(formData);
    if (response)
        navigate('/confirmed');
    else
        alert("Submission Failed");
}


return(
    <>
    <Header/>
    <div>
       <BookingForm
       availableTimes={availableTimes}
       updateTimes={updateTimes}
       submitForm={submitForm}
       ></BookingForm>
    </div>
    <Footer/>
    </>
);
}