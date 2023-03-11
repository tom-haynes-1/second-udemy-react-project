import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {

    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();

        if (validateInputs()) {
            props.onAddUser(enteredUserName, enteredAge);
            clearInputs();
        }           
    };

    const userNameChangeHandler = (event) => {
        setEnteredUserName(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    const clearInputs = () => {
        setEnteredUserName('');
        setEnteredAge('');
    };

    const validateInputs = () => {
        if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0 || +enteredAge <= 0) {
            setError({
                title: 'Invalid input',
                message: 'Something went wrong! A username and age is required. Please check the fields and try again.'
            });
        } else {
            props.onAddUser(enteredUserName, enteredAge);
        }
            
    };

    const errorHandler = () => {
        setError(null);
    };

return (
    <>
    {
        error && 
        <ErrorModal 
           errorTitle={ error.title }
           errorMessage={ error.message }
           onDismissError={ errorHandler }
        />
    }
        <Card className={ classes.input }>
            <form onSubmit={ addUserHandler }>
                <label htmlFor="username">Username</label>
                <input
                    id="username"
                    type="text"
                    value={ enteredUserName }
                    onChange={ userNameChangeHandler } />
                <label htmlFor="age">Age (Years)</label>
                <input
                    id="age"
                    type="number"
                    value={ enteredAge }
                    onChange={ ageChangeHandler } />
                <Button type="submit">Add User</Button>
            </form>
        </Card>
        </>
    );
};

export default AddUser;