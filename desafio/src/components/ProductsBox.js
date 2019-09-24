import React, { Component } from 'react'
import { products } from '../models/Product.json'
import Box from '@material-ui/core/Box'
import '../assets/Styles/ProductBox.css'

class ProductsBox extends Component {
    render(){
        return (
            <div id="divFlex">
                <h1>Produtos</h1>
                {console.log(products)}
                {products.map( (item, index) => {
                    return (
                                <Box className="box" key={index}>
                                    <img src={item.img} />
                                    <h2>{item.name}</h2>
                                    <h3>R$ {item.price}</h3>
                                    <p>Em até 12X de R$ {item.parcel}</p>
                                    <p>R$ {item.pay_up} à vista (10% de desconto)</p>
                                </Box>
                            )
                })}
            </div>
        )
    }
}

export default ProductsBox
