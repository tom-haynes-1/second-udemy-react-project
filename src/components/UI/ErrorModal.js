import React from "react";

import Card from "./Card";
import Button from "./Button";
import classes from "../UI/ErrorModal.module.css";

const ErrorModal = (props) => {
    return (
      <div>
        <div className={classes.backdrop} onClick={props.onDismissError} />
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
      </div>
    );
};

export default ErrorModal;