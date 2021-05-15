import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
  const [state, setState] = useState({
    day:"Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  const setDay = (day) => setState({ ...state, day});

  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview},
    };
    
    const appointments = {
      ...state.appointments,
      [id]: appointment
    }

    const URL = `http://localhost:8001/api/appointments/${id}`
    return axios.put(URL, {interview})
    .then(() => {
      setState({
        ...state,
        appointments
      })
    });
  }

  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null
    };
    
    const appointments = {
      ...state.appointments,
      [id]: appointment
    }

    const URL = `http://localhost:8001/api/appointments/${id}`
    return axios.delete(URL)
    .then(() => {
      setState({
        ...state,
        appointments
      })
    });
  }

  useEffect(() => {
    const daysURL = "http://localhost:8001/api/days";
    const appointmentsURL = "http://localhost:8001/api/appointments";
    const interviewersURL = "http://localhost:8001/api/interviewers";

    Promise.all([
      axios.get(daysURL),
      axios.get(appointmentsURL),
      axios.get(interviewersURL)
    ]).then((all) => {
      setState(prev => ({...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data}));
    });

  }, []);

  return { state, setDay, bookInterview, cancelInterview };
}