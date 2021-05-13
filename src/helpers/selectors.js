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

export function getInterview(state, interview) {
  return !interview 
  ? null 
  : {
      ...interview, // only uses {student: } part of the object since interviewer is being used in the following line
      "interviewer" : state.interviewers[interview.interviewer]
    };
}