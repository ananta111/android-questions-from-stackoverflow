import React, { Component } from "react";
import "../custom-styles.css"
import Button from "@material-ui/core/Button";
import ResultRow from "./ResultRow";
import {getMostRecentQuestions, getMostVotedQuestions} from "../api/api-requests";
import moment from "moment";

class MostVoted extends Component{

    state = {
        results: [],
        tags: "android",
        page: 1
    }

    async componentDidMount() {
        let res = await getMostVotedQuestions();
        console.log("result", res);
        res = res.data.items;
        console.log(res);
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

    render() {
        return (
            <div className={"center"}>
                <h1>Here are your 10 most voted android questions from Stack Overflow</h1>
                { this.state.results && this.state.results.map(item => <ResultRow item = { item }/>) }<br/>
            </div>
        )
    }
}

export default MostVoted;