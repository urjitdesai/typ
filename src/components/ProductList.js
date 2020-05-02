import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import {ProductConsumer} from '../Context';
import Input from './Input';
class ProductList extends Component {

    render() { 

        //console.log(storeProducts);
        return ( 
            <React.Fragment>
                <Input></Input>
                <div className="py-5">
                    <div className="container">
                    <Title name="our" title=" Pizzas"></Title>

                    <div className="row">
                        <ProductConsumer>
                            {(value)=>{
                                return value.products.map(product=>{
                                    return <Product key={product.id} product ={product}/>;
                                });

                            }}
                        </ProductConsumer>

                    </div>
                </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default ProductList;