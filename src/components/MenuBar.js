import React, { Component } from "react";
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Tab from "@material-ui/core/Tab";
import Link from "@material-ui/core/Link"

class MenuBar extends React.Component {
    render() {
        return (
            <div>
                <AppBar position={"static"}>
                    <Toolbar>
                        <Link href={"/"} variant={"title"} color={"inherit"}>
                            StackUtil
                        </Link>
                        <Tab label={"Most Recent Questions"} href={"/top-ten-recent"}/>
                        <Tab label={"Most Voted Questions"} href={"/top-ten-voted"}/>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default MenuBar;