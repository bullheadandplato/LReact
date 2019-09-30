import React from "react";
import {AppBar, IconButton, Toolbar} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import Typography from "@material-ui/core/Typography";
import {connect} from 'react-redux';
import withStyles from "@material-ui/core/styles/withStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import clsx from "clsx";
import AppDrawer from "./Drawer";
import CloseIcon from '@material-ui/icons/ArrowBack';
import Counter from "./counter/Counter";

const drawerWidth = 240;
const styles = (theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },

    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

class Header extends React.Component {
    openDrawer = () => {
        this.props.dispatch({type: "TOGGLE_DRAWER", open: true});
    };
    closeDrawer = () => {
        this.props.dispatch({type: "TOGGLE_DRAWER", open: false});
    };

    render() {
        const {classes, open} = this.props;
        return (
            <div className={classes.root}>
                <CssBaseline/>
                <AppBar position={'fixed'}
                        className={clsx(classes.appBar, {
                            [classes.appBarShift]: open,
                        })}
                >
                    <Toolbar>
                        <IconButton
                            onClick={open ? this.closeDrawer : this.openDrawer}
                            edge='start'
                            className={classes.menuButton}
                            color={'inherit'}
                            aria-label="open drawer">
                            {open ? <CloseIcon/> : <MenuIcon/>}
                        </IconButton>
                        <Typography className={classes.title} variant={'h6'} noWrap>
                            LReact
                        </Typography>
                    </Toolbar>
                </AppBar>
                <AppDrawer/>
                <main className={classes.content}>
                    <div className={classes.toolbar}/>
                    <Counter/>
                </main>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        open: state.open
    }
}

export default withStyles(styles)(connect(mapStateToProps)(Header))