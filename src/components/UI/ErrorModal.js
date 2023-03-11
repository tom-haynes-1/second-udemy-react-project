import React from "react";
import ReactDOM from 'react-dom';

import Card from "./Card";
import Button from "./Button";
import classes from "../UI/ErrorModal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onDismissError} />
};

const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.errorTitle}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.errorMessage}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onDismissError}>Dismiss</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
    return (
      <>
        {ReactDOM.createPortal(
          <Backdrop onDismissError={props.onDismissError} />,
          document.getElementById("backdrop-root")
        )}
        {ReactDOM.createPortal(
          <ModalOverlay
            errorTitle={props.errorTitle}
            errorMessage={props.errorMessage}
            onDismissError={props.onDismissError}
          />,
          document.getElementById('overlay-root')
        )}
      </>
    );
};

export default ErrorModal;