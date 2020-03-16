import React, { Component } from "react";
import "../custom-styles.css"
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";

class OpenDialog extends Component{

    render() {
        return (
            <div>
                <Dialog aria-labelledby="customized-dialog-title" open={this.props.showBody} onClose={this.props.handleDialogClose} maxWidth={"lg"}>
                    <DialogTitle id="customized-dialog-title">
                        Full Question
                    </DialogTitle>
                    <DialogContent>
                        <div dangerouslySetInnerHTML={{__html: this.props.body}}></div>
                    </DialogContent>
                    <DialogActions>
                    <Button autoFocus onClick={this.props.handleDialogClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default OpenDialog;