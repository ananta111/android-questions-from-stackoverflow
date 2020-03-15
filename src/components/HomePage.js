import React, { Component } from "react";
import "../custom-styles.css"
import Button from "@material-ui/core/Button";

class HomePage extends Component{


    render() {
        return (
            <div className={"center"}>
                <h1>YOUR TOP ANDROID QUESTIONS FROM STACK OVERFLOW</h1>
                <Button variant={"outlined"} href={"/inventory"}>10 Most Recent Questions</Button>
                <Button variant={"outlined"} href={"/questionnaire"}>10 Most Voted Questions</Button>
            </div>
        )
    }
}

export default HomePage;