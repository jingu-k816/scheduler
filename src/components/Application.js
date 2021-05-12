//import dependencies
import React, { useState, useEffect } from "react";
import axios from "axios";

// import components
import DayList from "./DayList";
import Appointment from "components/Appointment/index";

//import css to the file
import "components/Application.scss";

const appointments = [
  {
    id: 1,
    time: "12pm",
  },
  {
    id: 2,
    time: "1pm",
    interview: {
      student: "Lydia Miller-Jones",
      interviewer: {
        id: 1,
        name: "Sylvia Palmer",
        avatar: "https://i.imgur.com/LpaY82x.png",
      }
    }
  },
  {
    id: 3,
    time: "2pm"
  },
  {
    id: 4,
    time: "3pm",
    interview: {
      student: "Jingu Kang",
      interviewer: {
        id: 3,
        name: "Mildred Nazir",
        avatar: "https://i.imgur.com/T2WwVfS.png"
      }
    }
  },
  {
    id: 5,
    time: "4pm",
    interview: {
      student: "Francis Bourgouin",
      interviewer: {
        id: 5,
        name: "Sven Jones",
        avatar: "https://i.imgur.com/twYrpay.jpg"
      }
    }
  }
];

export default function Application(props) {
  const [day, setDay ] = useState("Monday");
  const [days, setDays] = useState([]);
  
  useEffect(() => {
    const daysURL = 'http://localhost:8001/api/days';
    axios.get(daysURL).then(response => {
      setDays([...response.data]);
    })
  }, []);

  const parsedAppointment = appointments.map((appointment) => 
  <Appointment 
    key={appointment.id} 
    {...appointment}  
  />)
  return (
    <main className="layout">
      <section className="sidebar">
        <img className="sidebar--centered" src="images/logo.png" alt="Interview Scheduler"/>
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu"><DayList days={days} day={day} setDay={setDay} /></nav>
        <img className="sidebar__lhl sidebar--centered" src="images/lhl.png" alt="Lighthouse Labs"/>
      </section>
      <section className="schedule">
        {parsedAppointment}
        <Appointment key="last" time="5pm" />
      </section>
    </main>

    
  );
}
