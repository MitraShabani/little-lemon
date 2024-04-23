import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
import { useState, useReducer } from 'react';
// import io from 'socket.io.client';

function BookingForm(props){

    // contains the data of the user from the reservation page
    const [formData, setFormData] = useState({
        date: '', time: '', guests: '1', occasion: 'Birthday', email:''
    })
    const[isFormEmpty, setFormEmpty] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if(formData.date === ''||
            formData.time === '' ||
            formData.guests === '' ||
            formData.email ==='' ){

            setFormEmpty(true)
            }
            else{
        
                 fetch('http://localhost:27017/api/booking', {
                    method: 'POST',
                    // mode: 'no-cors',
                    headers:{
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData) //Convert formdata to JSON string
                })
                .then(response => {
                    console.log("response :", response.json()); // Log the response object
                    // return response.json();
                  })
            props.submitForm(formData);
            }

    }
    const handleChange = (type, data) => {

        setFormData({...formData, [type]: data})
        props.updateTimes(formData.date);
    }
    const renderEmptyWarning = () => {
        return (
          <div>
            <span className='empty-form-warning'>
                !All requested information is necessary to provide you with a better service, please fill in all options.
            </span>
          </div>
        )
      }


    return (
        <>
         <form className='BookingForm' onSubmit={handleSubmit}>
            <fieldset>
                <h2>Reserve a Table</h2>
                <div>
                <ul>
                <li>
                    <label for="date">Choose date:</label>
                    <input
                    id='date'
                    type='date'
                    value={formData.date}
                    onChange={(e) => handleChange("date",e.target.value)}
                    ></input>
                </li>
                 <li>
                    <label for="time">Choose time:</label>
                        <select
                        id='time'
                        type='time'
                        value={formData.time}
                        onChange={(e) => handleChange("time",e.target.value)}
                        >
                            <option value=''>Select a Time</option>
                    {
                        props.availableTimes.map((time, index) =>{
                            return <option key={index}>{time}</option>
                        })
                    }
                        </select>
                </li>
                <li>
                    <label for="guests">Number of guests: {formData.guests}</label>
                    <input
                    id='guests'
                    type='range'
                    max='20'
                    value= {formData.guests}
                    onChange={(e) => handleChange("guests",e.target.value)}
                    />
                </li>
                <li>
                    <label for="occasion">Occasion:</label>
                    <select
                    id='occasion'
                    value={formData.occasion}
                    onChange={(e) => handleChange("occasion",e.target.value)}
                    >
                        <option>Birthday</option>
                        <option>Anniversary</option>
                        <option>Business</option>
                    </select>
                </li>
                <li>
                    <label for="emailAddress">Email Address:</label>
                    <input
                    type='email'
                    id='emailAddress'
                    value={formData.email}
                    onChange={(e) => handleChange("email",e.target.value)}
                    required
                    />
                </li>
                </ul>
                </div>

                {isFormEmpty === true ? renderEmptyWarning() : null }

                <input className='submitButton'
                aria-label="on click"
                type='submit'
                value='Make your reservation'
                onClick={(e) => handleSubmit(e)}
                />
            </fieldset>
        </form>
        </>
    )
};

export default BookingForm;