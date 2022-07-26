import {
  TextField,
  Button
} from '@mui/material'
import { useForm } from '../hooks/useForm'
import { createUser } from '../useCases/index'
import useFormStyles from '../styles/useFormFields'

const Form2 = ({ setUser, setStep, user }) => {
  const classes = useFormStyles()
  const [values, handleInputChange, reset] = useForm({
    email: user.email,
    phoneNumber: user.phoneNumber,
    cc: user.cc
  })

  const onSubmit = (event) => {
    event.preventDefault()
    
    setUser((prep) => ({
      ...prep,
      ...values
    }))
    createUser(
      user.name,
      user.lastName,
      values.email,
      values.phoneNumber,
      values.cc
    )
    setStep(0)
    reset()
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
        name='email'
        onChange={handleInputChange}
        value={values.email}
      />
      <TextField
        className={classes.formField}
        fullWidth
        required
        id="phoneNumber"
        label="Teléfono"
        name='phoneNumber'
        onChange={handleInputChange}
        value={values.phoneNumber}
      />
      <TextField
        className={classes.formField}
        fullWidth
        required
        type="number"
        id="cc"
        label="Documento de identidad"
        name='cc'
        onChange={handleInputChange}
        value={values.cc}
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
