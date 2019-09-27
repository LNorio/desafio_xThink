import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom'
import '../assets/Styles/Form.css'

const currencies = [
    {
        value: '',
        label: ''
    },
    {
      value: 'M',
      label: 'M'
    },
    {
      value: 'F',
      label: 'F'
    }
  ];
  
const Form = () => {

    const useStyles = makeStyles( () => ({
        text: {
            marginBottom: 30,
            marginRight: 20
        }
    }))
  
    const classes = useStyles();
      
    const [values, setValues] = React.useState({
        name: '',
        email: '',
        sexo: ''
    });
 

    const handleChange = name => event => {
            setValues({ ...values, [name]: event.target.value });
    };

    return ( 
        <div id="divForm">
            <div id="divDados">
                <h1>Dados do cliente</h1>
                <TextField 
                    required
                    className={classes.text}
                    id="nome"
                    label="Nome" 
                    variant="outlined" 
                    placeholder="Nome do cliente aqui"
                    value={values.name}
                    onChange={handleChange('name')}
                    InputLabelProps={{
                        shrink: true
                    }} 
                />
                <TextField 
                    id="email"
                    label="Email"
                    placeholder="Digite seu email aqui"
                    className={classes.text}
                    variant="outlined"
                    value={values.email}
                    onChange={handleChange('email')}
                    InputLabelProps={{
                        shrink: true,
                    }} 
                />
                <TextField
                    id="sexo"
                    select
                    label="Sexo"
                    className={classes.text}
                    variant="outlined" 
                    value={values.sexo}
                    placeholder="Selecione"
                    onChange={handleChange('sexo')}
                    SelectProps={{
                    native: true
                    }}
                    InputLabelProps={{
                        shrink: true
                    }} 
                >
                    {currencies.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                    ))}
                </TextField>
            </div>
            <div id="divConfirmar">
                <h2 id="total" >Total: {sessionStorage.getItem('@desafio-app/total')}</h2>
                <Link to="/purchase">
                    <Button variant="contained" color="primary" onClick={sessionStorage.setItem('@desafio-app/username',values.name)}>
                        Finalizar Compra
                    </Button> 
                </Link>
            </div>
        </div>
    )
}

export default Form
