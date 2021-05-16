export function getAppointmentsForDay(state, day) {
  //filter the matching day
  const filteredDay = state.days.filter(result => result.name === day);
  /*
  filteredDay[0].appointments is a number of appointments in filteredDay's object
  Used ternary operator to return an empty array when there's no matching data available
  else map through the list of appointment and return the matching appointment
  */
  return filteredDay.length === 0 ? [] 
  : filteredDay[0].appointments.map(appointment => state.appointments[appointment]);
}

export function getInterviewersForDay(state, day) {
  //filter the matching day
  const filteredDay = state.days.filter(result => result.name === day);
  /*
  filteredDay[0].interviewers is a number of interviewers in filteredDay's object
  Used ternary operator to return an empty array when there's no matching data available
  else map through the list of interviewers and return the matching interviewers
  */
  return filteredDay.length === 0 ? [] 
  : filteredDay[0].interviewers.map(interviewer => state.interviewers[interviewer]);
}

export function getInterview(state, interview) {
  return !interview 
  ? null 
  : {
      ...interview, // only uses {student: } part of the object since interviewer is being used in the following line
      "interviewer" : state.interviewers[interview.interviewer]
    };
}

export function updateSpots(days, appointments, id) {
  //Ouputs the object matching with the day's id
  const dayFound = days.find(day => day.id === id);
  //Outputs the number of spots books 
  const nbSpots = dayFound.appointments.filter(appointmentId => appointments[appointmentId].interview === null).length;
  
  //Shallow copy of days JSON data
  const copyDays = [...days];

  return copyDays.map(day => day.id === id ? {...day, spots: nbSpots} : day);
}