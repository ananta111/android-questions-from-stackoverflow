import React, { Component } from "react";
import "../custom-styles.css"
import Typography from "@material-ui/core/Typography";

class ResultRow extends Component{

    state = {
        number: null,
        title: "",
        link: "",
        creation_date: null
    };

    componentWillMount() {
        const item = this.props.item;
        const keys = Object.keys(item);
        keys.forEach(key => this.setState({[key]: item[key]}));

    }

    render() {
        return (
            <div className={"resultrow"}>
                    <div className={"resultrowtext"}>
                        <label>{this.state.number}</label>
                        <span className={"postdate-info"}>Posted {this.state.creation_date}</span>
                        <h4>{this.state.title}</h4>
                        <p>Link: <a href={this.state.link}>{this.state.link} </a></p>
                    </div>
            </div>
        )
    }
}

export default ResultRow;