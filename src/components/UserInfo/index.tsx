import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import User from '../../types/User';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { Avatar } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import "./style.css"

interface CartInfoProps {
    open: boolean;
    handleClose(event: any): void;
    user: User;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  }),
);


const UserInfo: React.FC<CartInfoProps> = (props) => {
    const classes = useStyles();
    var username = ''
    var name = ""
    var email = ""
    var company = ""
    var id;
    var city = ""
    if (props.user !== undefined) {
        username = props.user.username
        name = props.user.name
        email = props.user.email
        company = props.user.company.name
        id = props.user.id
        city = props.user.address.city
    }

    return (
        <div>
            <Dialog
                open={props.open}
                onClose={props.handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    <Grid className={"items-dialog"} container spacing={2}>
                        <Grid item xs style={{display: 'flex'}}>
                            <Avatar alt="Remy Sharp" src={`https://picsum.photos/100?${id}`} className={classes.large}/>
                        </Grid>
                        <Grid item xs>
                            {username}
                        </Grid>
                    </Grid>
                </DialogTitle>
                <DialogContent>
                    <Box sx={{ width: '100%' }}>
                        <Grid container>
                            <Grid item xs={6}>
                                <DialogContentText id="alert-dialog-description">
                                    <b> Name: </b>
                                    {name}
                                </DialogContentText>
                            </Grid>
                            <Grid item xs={6}>
                                <DialogContentText id="alert-dialog-description">
                                    <b> Email: </b>
                                    {email}
                                </DialogContentText>
                            </Grid>
                            <Grid item xs={6}>
                                <DialogContentText id="alert-dialog-description">
                                    <b> City: </b>
                                    {city}
                                </DialogContentText>
                            </Grid>
                            <Grid item xs={6}>
                                <DialogContentText id="alert-dialog-description">
                                    <b> Company: </b>
                                    {company}
                                </DialogContentText>
                            </Grid>
                        </Grid>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.handleClose} color="primary" autoFocus>
                        Dismiss
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default UserInfo;


