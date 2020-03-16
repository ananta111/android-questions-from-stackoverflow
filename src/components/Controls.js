import React, { Component } from "react";
import "../custom-styles.css"
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

class Controls extends Component{


    render() {
        return (
            <div>
                <Button variant={"outlined"} onClick={this.props.handlePreviousTen}>Previous Ten</Button>
                <Button variant={"outlined"} onClick={this.props.handleNextTen}>Next Ten</Button>
                <FormControlLabel
                    className={"switch"}
                    control={<Switch onChange={this.props.handleSwitch} />}
                    label="Accepted Answers Only"
                />
                <span className={"pagenumber"}>Page {this.props.page}</span>
            </div>
        )
    }
}

export default Controls;