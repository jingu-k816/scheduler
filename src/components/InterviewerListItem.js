import React from "react";
import classNames from 'classnames/bind';

import "components/InterviewerListItem.scss"

export default function InterviewerListItem(props) {
  const { selected, setInterviewer, avatar, name } = props
  const interviwerListItemClass = classNames("interviewers__item", {
    "interviewers__item--selected": selected
  })
  return(
  <li className={interviwerListItemClass} onClick={setInterviewer}>
  <img
    className="interviewers__item-image"
    src={avatar}
    alt={name}
  />
  {selected && name}
</li>
  );
}