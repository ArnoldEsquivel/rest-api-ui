import React, { useState } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@mui/material'
import Button from '@mui/material/Button'
import useUsers from '../hooks/useUsers'
import EditUserInfo from './EditUserInfo'
import TheAlert from './Alert'

const TableData = () => {
  const { users } = useUsers()
  const [open, setOpen] = useState(false)
  const [openAlert, setOpenAlert] = useState(false)
  const [userSelected, setUserSelected] = useState({})

  const handleClose = () => {
    setOpen(!open);
  };

  const handleCloseAlert = () => {
    setOpenAlert(!openAlert);
  };

  const handleDeleteUser = (user) => {
    setOpenAlert(!openAlert);
    setUserSelected(user)
  };

  const handleStatusUser = (user) => {
		setUserSelected(user)
		handleClose()
	}

  return (
    <>
      <EditUserInfo 
        open={open}
        onClose={handleClose}
        user={userSelected}
      />
      <TheAlert 
        open={openAlert}
        onClose={handleCloseAlert}
        user={userSelected}
      />
      <TableContainer
        component={Paper}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <strong>Nombre</strong>
              </TableCell>
              <TableCell>
                <strong>Apellido</strong>
              </TableCell>
              <TableCell>
                <strong>E-mail</strong>
              </TableCell>
              <TableCell>
                <strong>Teléfono</strong>
              </TableCell>
              <TableCell>
                <strong>C.C.</strong>
              </TableCell>
              <TableCell>
                <strong>Edit</strong>
              </TableCell>
              <TableCell>
                <strong>Delete</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user, key) => (
              <TableRow
                key={key}
              >
                <TableCell>
                  {user.name}
                </TableCell>
                <TableCell>
                  {user.lastName}
                </TableCell>
                <TableCell>
                  {user.email}
                </TableCell>
                <TableCell>
                  {user.phoneNumber}
                </TableCell>
                <TableCell>
                  {user.cc}
                </TableCell>
                <TableCell>
                  <Button
                    variant='outlined'
                    color='success'
                    size='small'
                    onClick={() => {
                      handleStatusUser(user)
                    }}
                  >
                    Edit
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    variant='outlined'
                    color='error'
                    size='small'
                    onClick={() => {
                      handleDeleteUser(user)
                    }}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default TableData
