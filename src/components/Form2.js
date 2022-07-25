import {
  TextField,
  Button
} from '@mui/material'

import useFormStyles from '../styles/useFormFields'

const Form2 = (props) => {
  const { setStep } = props;
  const classes = useFormStyles()

  const onSubmit = (event) => {
    event.preventDefault()
  }

  const handleEmail = (e) => {
    if (e.target.value !== '@') {
      console.log('Falta el @')
    } else if (e.target.value.lenght < 7) {
      console.log('demasiado corto')
    } else if (e.target.value !== '.') {
      console.log('falta .')
    }

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
        onChange={(e) => {
          handleEmail(e)
        }}
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
