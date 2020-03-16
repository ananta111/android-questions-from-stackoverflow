import React, { Component } from "react";
import "../custom-styles.css"
import ResultRow from "./ResultRow";
import { getMostVotedQuestions} from "../api/api-requests";
import moment from "moment";
import Controls from "./Controls";

class MostVoted extends Component{

    state = {
        results: [],
        tags: "android",
        page: 1,
        acceptedAnswersOnly: false
    }

    fetchData = async (page, isAnswered) => {
        let res;
        try {
            res =  await getMostVotedQuestions(this.state.tags, page, isAnswered);
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

    async componentDidMount() {
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
        console.log(this.state)
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
            this.setState({results, acceptedAnswersOnly})
            //console.log(this.state)
        } else {
            const results = await this.fetchData(this.state.page, false);
            this.setState({results: results, unanswered_only: false})
            //console.log(this.state)
        }
    }

    render() {
        return (
            <div className={"center"}>
                <h1>Most voted android related questions from Stack Overflow this week</h1>
                <Controls
                    handleNextTen={this.handleNextTen}
                    handlePreviousTen={this.handlePreviousTen}
                    page={this.state.page}
                    handleSwitch={e => this.handleSwitch(e)}
                    />
                { this.state.results && this.state.results.map(item => <ResultRow key={item.question_id} item = { item }/>) }<br/>
            </div>
        )
    }
}

export default MostVoted;