import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { deleteUser } from '../useCases/index'

export default function TheAlert({user, open, onClose}) {

    const handleCloseDelete = (user) => {
        deleteUser(user._id)
        onClose()
    };

    return (
        <Dialog
            open={open}
            onClose={onClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {"Are you shure you want to delete this user?"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {`Delete User ${user.name}`}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button 
                    variant='outlined'
                    color='success'
                    onClick={() => {
                        handleCloseDelete(user)
                    }}
                >
                    Delete</Button>
                <Button
                    onClick={onClose}
                    variant='outlined'
                    color='error'
                >
                    Cancel
                </Button>
            </DialogActions>
        </Dialog>
    );
}