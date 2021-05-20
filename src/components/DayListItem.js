import React from "react";

import classNames from 'classnames/bind';

import "components/DayListItem.scss";

export default function DayListItem(props) {
  const { selected, spots, name, setDay } = props
  const dayListClass = classNames("day-list__item", {
    "day-list__item--selected" : selected,
    "day-list__item--full" : !spots
  });

  const formatSpots = () => (spots > 1) 
  ? `${spots} spots remaining` 
  : (spots === 1) 
  ? `${spots} spot remaining` 
  : "no spots remaining";

  return (
    <li className={dayListClass} data-testid="day" onClick={() => setDay(name)}>
      <h2 className="text--regular">{name}</h2>
      <h3 className="text--light">{formatSpots()}</h3>
    </li>
  );
}