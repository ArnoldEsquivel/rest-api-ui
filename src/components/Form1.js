import {
  TextField,
  Button
} from '@mui/material'
import useFormStyles from '../styles/useFormFields'
import { useForm } from '../hooks/useForm'

const Form1 = ({ setUser, setStep, user }) => {
  const classes = useFormStyles()
  const [values, handleInputChange] = useForm({
    name: user.name,
    lastName: user.lastName
  })

  const onSubmit = (event) => {
    event.preventDefault()

    setUser((prep) => ({
      ...prep,
      ...values
    }))
    
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
        name='name'
        onChange={handleInputChange}
        value={values.name}

      />
      <TextField
        className={classes.formField}
        fullWidth
        required
        id="name"
        label="Apellido"
        name='lastName'
        onChange={handleInputChange}
        value={values.lastName}
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
