import React from 'react'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Purch from '../assets/Images/purchase.png'
import {Link} from 'react-router-dom'
import '../assets/Styles/Purchase.css'

const Purchase = () => {
    return (
        <div id="purchDiv">
            <Box id="purchase">
                <h1>{sessionStorage.getItem('@desafio-app/username')},</h1>
                <p>Sua Compra no valor 
                    <span> R$ {sessionStorage.getItem('@desafio-app/total')} </span>
                    foi finalizada com sucesso
                </p>
                <img src={Purch} alt="icone de compra finalizada"/>
                <Link to="/"><Button variant="contained" color="primary">
                    Iniciar nova compra
                </Button> </Link>
            </Box>
        </div>
    )
}

export default Purchase
