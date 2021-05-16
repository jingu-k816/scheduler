import React from "react";

import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import Status from "./Status";
import Confirm from "./Confirm";
import Error from "./Error";

import "components/Appointment/styles.scss"
import useVisualMode from "hooks/useVisualMode";

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const CONFIRM = "CONFIRM";
const DELETING = "DELETING";
const EDIT = "EDIT";
const ERROR_SAVE = "ERROR_SAVE";
const ERROR_DELETE = "ERROR_DELETE";

export default function Appointment(props) {
  const { id, time, interview, interviewers, bookInterview, cancelInterview } = props;
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
    .then(() => transition(SHOW))
    .catch(() => transition(ERROR_SAVE, true));

  }

  function deleteInterview() {
    transition(DELETING, true)
    cancelInterview(id)
    .then(() => transition(EMPTY))
    .catch(() => transition(ERROR_DELETE, true));
  }
  return (
    <article className="appointment">
      <Header time={time} />

      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={interview && interview.student}
          interviewer={interview && interview.interviewer}
          onDelete={() => transition(CONFIRM)}
          onEdit={() => transition(EDIT)}
        />
      )}
      {mode === CREATE && (
        <Form
          interviewers={interviewers}
          onSave={save}
          onCancel={back}
        />
      )}
      {mode === EDIT && (
        <Form
          interviewers={interviewers}
          name={interview.student}
          interviewer={interview.interviewer.id}
          onSave={save}
          onCancel={back}
        />
      )}
      {mode === SAVING && (
        <Status message="Saving"/>
      )}
      {mode === CONFIRM && (
        <Confirm
          message="Are you sure you would like to cancel the Interview?"
          onConfirm={deleteInterview}
          onCancel={back}
        />
      )}
      {mode === DELETING && (
        <Status message="Deleting" />
      )}
      {mode === ERROR_SAVE && (
        <Error message="Could not save the appointment" onClose={back}/>
      )}
      {mode === ERROR_DELETE && (
        <Error message="Could not cancel the appointment" onClose={back}/>
      )}

    </article>
  );

}