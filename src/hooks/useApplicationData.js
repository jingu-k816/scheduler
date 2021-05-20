import { useState, useEffect } from "react";
import axios from "axios";

import {updateSpots} from "helpers/selectors";

export default function useApplicationData() {
  const [state, setState] = useState({
    day:"Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  const setDay = (day) => setState({ ...state, day});

  function bookInterview(id, interview) {
    //copy of the single appointment
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview},
    };
    //copy of the whole appointments JSON data updating the specific part of the data that somebody has booked the slot
    const appointments = {
      ...state.appointments,
      [id]: appointment
    }

    const days = updateSpots(state.days, appointments, state.day);

    const URL = `http://localhost:8001/api/appointments/${id}`

    //saves into the database (Scheduler API)
    return axios.put(URL, {interview})
    .then(() => {
      setState({
        ...state,
        appointments,
        days
      })
    });
  }

  function cancelInterview(id) {

    //copy of the single appointment
    const appointment = {
      ...state.appointments[id],
      interview: null
    };
    //copy of the whole appointments JSON data updating the deletion
    const appointments = {
      ...state.appointments,
      [id]: appointment
    }

    const days = updateSpots(state.days, appointments, state.day);

    const URL = `http://localhost:8001/api/appointments/${id}`

    //deletes the data from the database (scheduler API)
    return axios.delete(URL)
    .then(() => {
      setState({
        ...state,
        appointments,
        days
      })
    });
  }

  useEffect(() => {
    const daysURL = "/api/days";
    const appointmentsURL = "/api/appointments";
    const interviewersURL = "/api/interviewers";

    //GET request on data from /api/days , appointments and interviewers using Promise
    Promise.all([
      axios.get(daysURL),
      axios.get(appointmentsURL),
      axios.get(interviewersURL)
    ]).then((all) => {
      setState(prev => ({...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data}));
    });

  }, []);

  // this custom hook returns functions and states
  return { state, setDay, bookInterview, cancelInterview };
}