import {
  TextField,
  Button
} from '@mui/material'

import useFormStyles from '../styles/useFormFields'

const Form2 = (props) => {
  const { 
    setStep,
    setUser
  } = props;

  const classes = useFormStyles()

  const onSubmit = (event) => {
    event.preventDefault()
    const email = event.target[0].value;
    const phoneNumber = event.target[2].value;
    const cc = event.target[4].value;

    setUser((prep) => ({
      ...prep,
      email,
      phoneNumber,
      cc
    }))
  }

  return (
    <form
      onSubmit={onSubmit}
    >
      <TextField
        className={classes.formField}
        fullWidth
        required
        type="email"
        id="email"
        label="E-mail"
        defaultValue={''}
      />
      <TextField
        className={classes.formField}
        fullWidth
        required
        id="phoneNumber"
        label="Teléfono"
        defaultValue={''}
      />
      <TextField
        className={classes.formField}
        fullWidth
        required
        type="number"
        id="cc"
        label="Documento de identidad"
        defaultValue={''}
      />
      <Button
        className={classes.formButtons}
        variant="outlined"
        onClick={() => setStep(0)}
      >
        Anterior
      </Button>
      <Button
        variant="contained"
        type="submit"
      >
        Enviar
      </Button>
    </form>
  )
}

export default Form2
