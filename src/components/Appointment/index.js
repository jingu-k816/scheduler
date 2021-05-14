import React from "react";
import useVisualMode from "hooks/useVisualMode";

import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import Status from "./Status";

import "components/Appointment/styles.scss"

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";

export default function Appointment(props) {
  const { id, time, interview, interviewers, bookInterview } = props;
  const { mode, transition, back } = useVisualMode (
    interview ? SHOW : EMPTY
  );

  function save(name, interviewer) {
    const saveInterview = {
      student: name,
      interviewer
    };

    transition(SAVING);
    bookInterview(id, saveInterview)
    .then(() => transition(SHOW));

  }

  return (
    <article className="appointment">
      <Header time={time} />

      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={interview && interview.student}
          interviewer={interview && interview.interviewer}
        />
      )}
      {mode === CREATE && (
        <Form 
          interviewers={interviewers} 
          onSave={save}
          onCancel={back}
        />
      )}
      {mode === SAVING && (
        <Status message="Saving"/>
      )}
    </article>
  );

}