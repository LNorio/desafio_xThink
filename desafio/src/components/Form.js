import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import {Link} from 'react-router-dom'
import '../assets/Styles/Form.css'

var nome = "";
var email = "";
var sexo = "";

const Form = () => {
    return (
        <>
            <div id="divDados">
                <h1>Dados do cliente</h1>
                <TextField 
                    required
                    className="TextMaior"
                    id="nome"
                    label="Nome" 
                    variant="outlined" 
                    placeholder="Nome do cliente aqui"
                    value={nome}
                    InputLabelProps={{
                        shrink: true
                    }} 
                />
                <TextField 
                    className={TextField}
                    id="email"
                    label="Email"
                    placeholder="Digite seu email aqui"
                    variant="outlined"
                    value={email}
                    InputLabelProps={{
                        shrink: true,
                    }} 
                />
                <FormControl variant="outlined" id="sexo">
                    <InputLabel>
                    Sexo
                    </InputLabel>
                    <Select
                    inputProps={{
                        name: 'age'
                    }}
                    >
                    <MenuItem value={10}>M</MenuItem>
                    <MenuItem value={20}>F</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div id="divConfirmar">
                <h2>Total: R$ 299,00</h2>
                <Link to="/purchase"><Button variant="contained" color="primary">
                    Finalizar Compra
                </Button> </Link>
            </div>
        </>
    )
}

export default Form
