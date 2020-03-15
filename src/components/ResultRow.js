import React, { Component } from "react";
import "../custom-styles.css"

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
                        <div className={"resultrow-text"}>
                            <span className={"postdate-info"}>Posted {this.state.creation_date}</span>
                            <h4>{this.state.number}. {this.state.title}</h4>
                            <p>Link: <a href={this.state.link}>{this.state.link} </a></p>
                        </div>
            </div>
        )
    }
}

export default ResultRow;