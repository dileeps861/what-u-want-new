import React, { Component } from 'react';
import './product.component.css';
import '../products';
import { products } from '../products';
import { ProductDetailsComponent } from '../product.details.component/product.details.component';
import 'bootstrap/dist/css/bootstrap.min.css';
export class ProductsComponent extends Component {
    constructor(props) {
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
        this.state = {
            prods: [...products],
            selectedProd: {},
            isSelected: false
        };
    }
    clickHandler(product) {
        this.setState({ selectedProd: { ...product }, isSelected: true });
    }
    render() {
        const prods = [...this.state.prods];

        const prds = prods.map(
            (product, index) => {
                return (
                    <div className="container">
                        <div key={index} className="row" style={{borderBottom:'1px solid', marginTop:'2%',
                         paddingBottom:'1%'}}>
                            <div style={{alignContent:'end', display:'-ms-inline-flexbox'}}>
                                <img src={product.images[0].src}
                                className="img-responsive mr-3 rounded product-img"
                                alt={product.images[0].alt} />
                            </div>
                            <div style={{alignContent:'start', display:'-ms-inline-flexbox'}}>
                                <button name="productName" className="btn btn-light" onClick={this.clickHandler.bind(this, { ...product })}
                                    title={product.name}>{product.name}
                                </button>
                                <label style={{display: 'block', color:'green', fontWeight:'bold'}}>{product.price}</label>
                            </div>
                        </div>
                    </div>
                );
            }
        );

        if (this.state.isSelected) {
            return (
                <div>
                    <ProductDetailsComponent product={{ ...this.state.selectedProd }} />
                </div>);
        }
        else return prds;
    }

}