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
    const name = event.target[0].value;
    const lastName = event.target[2].value;

    setUser({
      name: name,
      lastName: lastName
    })
    
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
