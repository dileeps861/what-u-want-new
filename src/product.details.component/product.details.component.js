import React, { Component } from 'react';
import './product.details.component.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../products';

export class ProductDetailsComponent extends Component {
    constructor(props) {
        super(props);

        this.state = { product: this.props.product };
    }

    render() {
        const product = this.state.product;


        const images = product.images.map((img, index) =>
            <span key={'sz' + index} className="product-img-span"><img src={img.src} alt={img.alt} className="product-img" /></span>
        );
        const sizes = product.sizes.map((size, index) =>
            <span key={'sz' + index} className="product-sizes" >
                <label>{size}</label>

            </span>
        );
        const colors = product.colors.map((color, index) =>
            <span key={'col' + index} className="product-colors" >
                <label>{color}</label>
            </span>
        );

        return (
            <div className="container-md">
                <h3>{product.name}</h3>
                <div>
                    {images}
                </div>
                <div>
                    {sizes}
                </div>
                <div>
                    {colors}
                </div>
                <h4>Product Description:</h4>
                <p>{product.desc}</p>

            </div>
        );
    }

}