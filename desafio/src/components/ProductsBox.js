import React, { Component } from 'react'
import { products } from '../models/Product.json'
import Box from '@material-ui/core/Box'
import SvgIcon from '@material-ui/core/SvgIcon'
import P1 from '../assets/Images/produto-01.jpeg'
import P2 from '../assets/Images/produto-02.jpeg'
import P3 from '../assets/Images/produto-03.jpeg'
import P4 from '../assets/Images/produto-04.jpeg'
import P5 from '../assets/Images/produto-05.jpeg'
import P6 from '../assets/Images/produto-06.jpeg'
import P7 from '../assets/Images/produto-07.jpeg'
import P8 from '../assets/Images/produto-08.jpeg'
/*import { bindActionCreators } from 'redux'
import * as ProdutcsActions from '../store/actions/Products'
import { connect } from 'react-redux'*/
import '../assets/Styles/ProductBox.css'


let imgProd = [P1, P2, P3, P4, P5, P6, P7, P8]



class ProductsBox extends Component {
    constructor(props) {
        super(props)
        sessionStorage.setItem('@desafio-app/total', 0)
        this.state ={
            0: {
                value: 0,
                press: false
            },
            1: {
                value: 0,
                press: false
            },
            2: {
                value: 0,
                press: false
            },
            3: {
                value: 0,
                press: false
            },
            4: {
                value: 0,
                press: false
            },
            5: {
                value: 0,
                press: false
            },
            6: {
                value: 0,
                press: false
            },
            7: {
                value: 0,
                press: false
            },
            total: 0
        }
    }

    clickBox(index) {
        if(this.state[index].press === false){
            this.setState({[index] : { ...this.state[index], press: true} })
            document.getElementById(index).style.border="1px solid rgba(0,0,0,0.1)"
            document.getElementById(index).style.boxShadow="0px 0px 8px 2px rgba(163,171,188,0.5)"
        }
        else{
            document.getElementById(index).style.border="none"
            document.getElementById(index).style.boxShadow="none"
            this.setState({[index] : { ...this.state[index], press: false} })
        }    
    }

    async contador(index, sinal, price){
        if(sinal === "mais"){
            this.setState({[index] : { ...this.state[index], value: this.state[index].value + 1} })
            await this.setState({total : this.state.total + parseFloat(price)})
            sessionStorage.setItem('@desafio-app/total', this.state.total)
        }
        else if(this.state[index].value > 0){
            this.setState({[index] : { ...this.state[index], value: this.state[index].value - 1} })
            await this.setState({total: this.state.total - parseFloat(price)})
            sessionStorage.setItem('@desafio-app/total', this.state.total)
        }
    }

    render(){
        return (
            <div id="divFlex">
                <h1>Produtos</h1>
                {products.map( (item, index) => {
                    return (
                            <Box  className="box" key={index} tabIndex="0" id={index} onFocus={() => this.clickBox(index)}>
                                <img src={imgProd[index]} alt="imagem do produto"/>
                                <div>
                                    <h2>{item.name}</h2>
                                    <h3>R$ {item.price}</h3>
                                    <p>Em até 12X de R$ {item.parcel}</p>
                                    <p>R$ {item.pay_up} à vista (10% de desconto)</p>
                                    <div>
                                        <button onClick={() => this.contador(index,"mais", item.price)} className="contador">
                                            <SvgIcon viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M 19 13 h -6 v 6 h -2 v -6 H 5 v -2 h 6 V 5 h 2 v 6 h 6 v 2 Z"/>
                                            </SvgIcon>
                                        </button>
                                        <p>{this.state[index].value}</p>
                                        <button onClick={() => this.contador(index,"menos", item.price)} className="contador">
                                            <SvgIcon viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M 19 13 H 5 v -2 h 14 v 2 Z"/>
                                            </SvgIcon>
                                        </button>
                                    </div>
                                </div>
                            </Box>  
                    )
                })}
                
            </div>
        )
    }
}

/*const mapDispatchToProps = dispatch =>{
    bindActionCreators(ProdutcsActions, dispatch);
}*/

export default /*connect(null, mapDispatchToProps)*/(ProductsBox)
