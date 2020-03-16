import React, { Component } from "react";
import "../custom-styles.css"
import ResultRow from "./ResultRow";
import {getMostRecentQuestions} from "../api/api-requests";
import moment from "moment";

class MostRecent extends Component{

    state = {
        results: [],
        tags: "android",
        page: 1
    };

     async componentDidMount() {
        let res;
        try {
            res =  await getMostRecentQuestions(this.state.tags, this.state.page);
        } catch (e) {
            alert(e.message);
            return
        }
        res = res.data.items;
        let finalResult = [];
        let number = 0;
        res.forEach(item => {
            number++;
            const filteredItem = { number: number, title: item.title, link: item.link, creation_date: this.calculateCreatedAgo(item.creation_date), body: item.body }
            finalResult.push(filteredItem)
        });
        this.setState({ results: finalResult })
    }

    calculateCreatedAgo = (creationDate) => {
        const time_diff = moment.unix(creationDate).fromNow()
        //console.log("Time Difference, time_diff)
        return time_diff
    };

    render() {
        return (
            <div className={"center"}>
                <h1>Here are your 10 newest android related questions from Stack OverFlow</h1>
                { this.state.results && this.state.results.map(item => <ResultRow item = { item }/>) }<br/>
            </div>
        )
    }
}

export default MostRecent;