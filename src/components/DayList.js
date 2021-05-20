import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) {
  const { days, day, setDay } = props
  const dayItems = days.map(dayItem => 
  <DayListItem 
    key={dayItem.id} 
    selected={dayItem.name === day}
    setDay={setDay} 
    {...dayItem} 
  />);
  
  return (
    <ul>
      {dayItems}
    </ul>
  );
}