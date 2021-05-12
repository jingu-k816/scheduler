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