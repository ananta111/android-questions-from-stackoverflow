import React, { Component } from "react";
import "../custom-styles.css"
import Button from "@material-ui/core/Button";
import OpenDialog from "./OpenDialog";

class ResultRow extends Component{

    state = {
        number: null,
        title: "",
        link: "",
        creation_date: null,
        body: "",
        is_answered: null,
        showBody: false
    };

    componentWillMount() {
        const item = this.props.item;
        const keys = Object.keys(item);
        keys.forEach(key => this.setState({[key]: item[key]}));
    }


    handleButtonClick = () => {
        this.setState({showBody: true})
    }

    handleDialogClose = () => {
        this.setState({showBody: false})
    }

    isAnswered(is_answered) {
        if (is_answered){
            return "Answered"
        }

        return "Not Answered Yet"
    }

    render() {
        return (
            <div className={"resultrow"}>
                <div className={"resultrow-text"}>
                    <span className={"postdate-info"}>Posted {this.state.creation_date} ({this.isAnswered(this.state.is_answered)})</span>
                    <h4>{this.state.number}. {this.state.title} <span><Button onClick={this.handleButtonClick} color="secondary">Click here to read full question</Button></span></h4>
                    <p>Link: <a href={this.state.link} target={"_blank"}>{this.state.link} </a></p>
                    { this.state.showBody && <OpenDialog handleDialogClose= {this.handleDialogClose} showBody = {this.state.showBody} body = {this.state.body}/> }
                </div>
            </div>
        )
    }
}

export default ResultRow;