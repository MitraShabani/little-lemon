import {fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import BookingPage from './components/Booking/BookingPage';
import BookingForm from './components/Booking/BookingForm';

// test('Renders the Header heading', () => {
//   render(<BrowserRouter><App /></BrowserRouter>);
//   const headingElement = screen.getByText("Reserve Table");
//   expect(headingElement).toBeInTheDocument();

//   const reserveButton = screen.getByRole("button");
//   fireEvent.click(reserveButton);

//   const headingElementNew = screen.getByText("Choose Date");
//   expect(headingElementNew).toBeInTheDocument();
// });

// test('Initialize/Update Times', () => {
// render(<BrowserRouter><App /></BrowserRouter>);
// const reserveButton = screen.getByRole("button");
// fireEvent.click(reserveButton);
// });

const availableTimes = {
  times: ["16:00", "17:30", "18:50", "19:00", "20:00", "21:00"],
};
const bookingData = {
  date: "",
  time: "",
  guests: "",
  occasion: "",
  email: ""
};

test("check  Available Times", () => {
  expect(availableTimes.times[0]).toBe("16:00");
});

// test("it should test Date", () => {
//   render(
//       <BookingForm availableTimes={availableTimes} bookingData={bookingData} />
//   );

//   const headingElement = screen.getByText("Choose date");
//   expect(headingElement).toBeInTheDocument();
// });


// test("if submit is disabled", () => {

//   render(

//       <BookingForm availableTimes={availableTimes} bookingData={bookingData} />
//   );

//   const submit = screen.getByTestId("submit");
//   expect(submit).toBeInTheDocument();
//   expect(submit.textContent).toBe("Make Your Reservation");

//   expect(submit).toBeDisabled();
// });



test("if submit is disabled", () => {
  render(
      <BookingForm availableTimes={availableTimes} bookingData={bookingData} />
  );

  const submit = screen.getByTestId("submit");
  expect(submit).toBeInTheDocument();
  expect(submit.textContent).toBe("Make Your Reservation");

  expect(submit).toBeDisabled();
});

