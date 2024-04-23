import React from "react";
import Header from './../Header.js';
import Footer from './../Footer.js';
import './BookingPage.css';

function ConfirmedBooking(){
return(
    <>
    <Header/>
    <div className="confirmedBooking">
        <h1>Booking has been <span>confirmed</span></h1>
    </div>
    <Footer/>
    </>
);
}
export default ConfirmedBooking;