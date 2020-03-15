import React, { Component } from "react";
import "../custom-styles.css"
import Button from "@material-ui/core/Button";
import ResultRow from "./ResultRow";
import {getMostRecentQuestions} from "../api/api-requests";
import moment from "moment";

class Results extends Component{

    state = {
        results: []
    }

    async componentDidMount() {
        let res = await getMostRecentQuestions();
        console.log(res);
        res = res.data.items;
        let finalResult = [];
        let number = 0;
        res.forEach(item => {
            number++;
            const filteredItem = { number: number, title: item.title, link: item.link, creation_date: this.calculateCreatedAgo(item.creation_date) }
            finalResult.push(filteredItem)
        });
        this.setState({ results: finalResult })
    }

    calculateCreatedAgo = (creationDate) => {
        const time_diff = moment.unix(creationDate).fromNow()
        //console.log("Time Difference, time_diff)
        return time_diff
    }

    handleBack = () => {
        document.location = "/questionnaire"
    }

    render() {
        console.log("logged from results", this.state.results)
        return (
            <div className={"center"}>
                <h1>Here are your 10 most recent android questions</h1>
                { this.state.results && this.state.results.map(item => <ResultRow item = { item }/>) }<br/>
            </div>
        )
    }
}

export default Results;