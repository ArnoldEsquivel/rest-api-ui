import {
  TextField,
  Button
} from '@mui/material'

import useFormStyles from '../styles/useFormFields'

const Form1 = (props) => {
  const classes = useFormStyles()
  const { setStep } = props;

  const onSubmit = (event) => {
    event.preventDefault()

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
        onClick={() => setStep(1)}
      >
        Siguiente
      </Button>
    </form>
  )
}

export default Form1
