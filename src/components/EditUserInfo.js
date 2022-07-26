import * as React from 'react';
import { useState, useEffect } from 'react'
import axios from 'axios'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';

export default function EditUserInfo(props) {
    const [ loading, setLoading ] = useState(false)
    let [ infoUser, setInfoUser ] = useState({})
    const url = process.env.REACT_APP_USERS_URL;

    const { 
        open,
        onClose, 
        user
    } = props;

    useEffect(() => {
        setInfoUser({})
    }, [user._id])

    const ChangeUserInfo = async () => {
        const { id } = user._id;
        setLoading(true)

        await axios.put(`${url}/${id}`, infoUser)
        onClose()
        setLoading(false)
    }

    const changeDataUser = (e) => {
        infoUser[e.target.id] = e.target.value
    }

    return (
        <Dialog
            open={open}
            onClose={onClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {"Change User Info"}
            </DialogTitle>
            <DialogContent
                sx={{display: 'flex'}}
            >
                <TextField 
                    id='name'
                    label='Name'
                    sx={{margin: '12px'}}
                    defaultValue={user.name}
                    onChange={changeDataUser}
                />
                <TextField 
                    id='lastName'
                    label='Last Name'
                    sx={{margin: '12px'}}
                    defaultValue={user.lastName}
                    onChange={changeDataUser}
                />
                <TextField 
                    id='email'
                    label='E-Mail'
                    sx={{margin: '12px'}}
                    defaultValue={user.email}
                    onChange={changeDataUser}
                />
                <TextField 
                    id='phoneNumber'
                    label='Phone Number'
                    sx={{margin: '12px'}}
                    defaultValue={user.phoneNumber}
                    onChange={changeDataUser}
                />
                <TextField 
                    id='cc'
                    label='CC'
                    sx={{margin: '12px'}}
                    defaultValue={user.cc}
                    onChange={changeDataUser}
                />
            </DialogContent>
            <DialogActions>
                <Button 
                    onClick={onClose}
                    variant='outlined'
                    color='error'
                >
                    Close
                </Button>
                { 
                    loading ?
                        <Button
                            disable
                            autoFocus
                            variant='outlined'
                            color='success'
                        >
                            <CircularProgress />
                        </Button>
                    :
                        <Button 
                            onClick={ChangeUserInfo}
                            autoFocus
                            variant='outlined'
                            color='success'
                        >
                            Apply
                        </Button>
                }
            </DialogActions>
        </Dialog>
    );
}