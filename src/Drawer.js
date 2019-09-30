import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import GodfatherIcon from '@material-ui/icons/Loyalty';
import ScarfaceIcon from '@material-ui/icons/BugReport';
import Gumpicon from '@material-ui/icons/Rowing';
import {connect} from 'react-redux';
import withStyles from "@material-ui/core/styles/withStyles";
import clsx from "clsx";

const drawerWidth = 240;
const styles = (theme => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: theme.mixins.toolbar,
}));


class AppDrawer extends React.Component {

    closeDrawer = () => {
        this.props.dispatch({type: "TOGGLE_DRAWER", open: false})
    };

    sideList = () => (
        <List>
            {['Godfather', 'Scarface', 'Forrest'].map((text, index) => (
                <ListItem button key={text}>
                    <ListItemIcon>{this.getMenuIcon(index)}</ListItemIcon>
                    <ListItemText primary={text}/>
                </ListItem>
            ))}
        </List>
    );

    getMenuIcon = (index) => {
        switch (index) {
            case 0:
                return <GodfatherIcon/>;
            case 1:
                return <ScarfaceIcon/>;
            default:
                return <Gumpicon/>;
        }
    };

    render() {
        const {classes, open} = this.props;
        return (
            <div>
                <Drawer onClose={this.closeDrawer}
                        className={clsx(classes.drawer, {
                            [classes.drawerOpen]: open,
                            [classes.drawerClose]: !open,
                        })}
                        classes={{
                            paper: clsx({
                                [classes.drawerOpen]: open,
                                [classes.drawerClose]: !open,
                            }),
                        }}
                        variant={"permanent"}
                        open={open}>
                    <div className={classes.toolbar}/>
                    {this.sideList()}
                </Drawer>
            </div>
        )
    }
}

const mapStateToProps = (state) => (
    {open: state.open}
);
export default withStyles(styles)(connect(mapStateToProps)(AppDrawer))