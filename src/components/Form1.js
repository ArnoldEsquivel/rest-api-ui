import {
  TextField,
  Button
} from '@mui/material'

import useFormStyles from '../styles/useFormFields'

const Form1 = (props) => {
  const classes = useFormStyles()
  const { 
    setStep,
    setUser
  } = props;

  const onSubmit = (event) => {
    event.preventDefault()
    // setUser({
    //   name: event.target[0].value,
    //   lastName: event.target[2].value
    // })
    // console.log(setUser)
    setStep(1)
  }

  return (
    <form
      onSubmit={onSubmit}
    >
      <TextField
        className={classes.formField}
        fullWidth
        required
        id="name"
        label="Nombre"
        defaultValue={''}
      />
      <TextField
        className={classes.formField}
        fullWidth
        required
        id="name"
        label="Apellido"
        defaultValue={''}
      />
      <Button
        variant="contained"
        type="submit"
      >
        Siguiente
      </Button>
    </form>
  )
}

export default Form1
