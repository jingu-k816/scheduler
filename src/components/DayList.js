import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) {
  const dayItems = props.days.map(day => 
  <DayListItem 
    key={day.id} 
    selected={day.name === props.day}
    setDay={props.setDay} 
    {...day} 
  />);
  
  return (
    <ul>
      {dayItems}
    </ul>
  );
}