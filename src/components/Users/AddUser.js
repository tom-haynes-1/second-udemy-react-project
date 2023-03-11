import React, { useState, useRef } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";
import classes from "./AddUser.module.css";

const AddUser = (props) => {

    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;
        console.log(nameInputRef.current.value, ageInputRef.current.value);

        if (validateInputs()) {
            props.onAddUser(enteredName, enteredUserAge);
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

        const enteredName = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;

        if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0 || +enteredUserAge <= 0) {
            setError({
                title: 'Invalid input',
                message: 'Something went wrong! A username and age is required. Please check the fields and try again.'
            });
        } else {
            props.onAddUser(enteredName, enteredUserAge);
        }
            
    };

    const errorHandler = () => {
        setError(null);
    };

return (
    <Wrapper>
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
                    onChange={ userNameChangeHandler }
                    ref={ nameInputRef } 
                />
                <label htmlFor="age">Age (Years)</label>
                <input
                    id="age"
                    type="number"
                    value={ enteredAge }
                    onChange={ ageChangeHandler }
                    ref={ ageInputRef }
                />
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    </Wrapper>
    );
};

export default AddUser;