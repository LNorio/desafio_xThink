import React from 'react'
import ProductsBox from '../components/ProductsBox'
import Form from '../components/Form'
import { Provider } from "react-redux";
import store from '../store/index.js'

const ProductPage = () => {
    return (
        <Provider store={store}>
            <div>
                <ProductsBox/>
                <Form />
            </div>
        </Provider>
    )
}

export default ProductPage
