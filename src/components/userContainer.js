import React, { Component } from "react";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import logIn from "./components/logIn";


class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Please input user'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('A User was created ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    User:
          <textarea value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}