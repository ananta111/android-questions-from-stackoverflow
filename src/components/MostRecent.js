import React, { Component } from "react";
import "../custom-styles.css"
import ResultRow from "./ResultRow";
import {getMostRecentQuestions} from "../api/api-requests";
import moment from "moment";
import Controls from "./Controls";

class MostRecent extends Component{

    state = {
        results: [],
        tags: "android",
        page: 1,
        acceptedAnswersOnly: false
    };

    fetchData = async (page, isAccepted) => {
        let res;
        try {
            res =  await getMostRecentQuestions(this.state.tags, page, isAccepted);
        } catch (e) {
            alert(e.message);
            return
        }
        res = res.data.items;
        let finalResult = [];
        let number = 0;

        res.forEach(item => {
            number++;
            const filteredItem = {
                number: number,
                title: item.title,
                link: item.link,
                creation_date: this.calculateCreatedAgo(item.creation_date),
                body: item.body,
                is_answered: item.is_answered,
                question_id: item.question_id
            }

            finalResult.push(filteredItem)
        });

        return finalResult;
    }

     componentDidMount = async () => {
         const results = await this.fetchData(this.state.page, this.state.acceptedAnswersOnly);
         this.setState({results})
    }

    calculateCreatedAgo = (creationDate) => {
        const time_diff = moment.unix(creationDate).fromNow();
        //console.log("Time Difference, time_diff)
        return time_diff
    };


    handleNextTen = async () => {
        const page = this.state.page + 1;
        const results = await this.fetchData(page, this.state.acceptedAnswersOnly);
        this.setState({results, page});
        //console.log(this.state)
    };

    handlePreviousTen = async () => {
        if (this.state.page > 1) {
            const page = this.state.page - 1;
            const results = await this.fetchData(page, this.state.acceptedAnswersOnly);
            this.setState({results, page})
        }
    };

    handleSwitch = async (e) => {
        if (e.target.checked){
            const acceptedAnswersOnly = true;
            const results = await this.fetchData(this.state.page, acceptedAnswersOnly);
            this.setState({results: results, acceptedAnswersOnly: acceptedAnswersOnly})
        } else {
            const results = await this.fetchData(this.state.page, false);
            this.setState({results: results, acceptedAnswersOnly: false})
        }
    }


    render() {
        return (
            <div className={"center"}>
                <h1>Newest android related questions from Stack OverFlow</h1>
                <Controls
                    handlePreviousTen={this.handlePreviousTen}
                    handleNextTen={this.handleNextTen}
                    page={this.state.page}
                    handleSwitch={e => this.handleSwitch(e)}
                />
                { this.state.results && this.state.results.map(item => <ResultRow key = {item.question_id} item = { item }/>) }<br/>
            </div>
        )
    }
}

export default MostRecent;