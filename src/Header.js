import React from "react";
import {AppBar, IconButton, Toolbar} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import Typography from "@material-ui/core/Typography";
import {connect} from 'react-redux';
import withStyles from "@material-ui/core/styles/withStyles";

const styles = (theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
}));

class Header extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <AppBar position={'static'}>
                    <Toolbar>
                        <IconButton
                            edge='start'
                            className={classes.menuButton}
                            color={'inherit'}
                            aria-label="open drawer">
                            <MenuIcon/>
                        </IconButton>
                        <Typography className={classes.title} variant={'h6'} noWrap>
                            LReact
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        count: state.count
    }
}

export default withStyles(styles)(connect(mapStateToProps)(Header))