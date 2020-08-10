import React, { Component } from 'react';
import './home.component.css'
import { ProductsComponent } from '../products.component/products.component';

export class HomeComponent extends Component{
    constructor(props){
        super(props);
        this.products=[

        ];
    }

    render(){
        return(
            <div>
               <ProductsComponent />
            </div>
        );
    }

}