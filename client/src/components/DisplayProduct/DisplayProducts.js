import React, { Component } from 'react';

class DisplayProduct extends Component {
    constructor(props) {
        console.log(props)
        super(props);
        this.state = {
            productInfo : props.productInfo
        }
    }

    render () {
        return (
            <li>
                <img src={require("../../image/img2/product6.png")} alt=""/>
                <p>{this.state.productInfo.productsName}</p>
                <i>{this.state.productInfo.discountType}</i>
                <em>{this.state.productInfo.discountPrice}</em><br/>
                <h4>{this.state.productInfo.discountRate}</h4>
                <strong>{this.state.productInfo.price}</strong>
                <span>{this.state.productInfo.curreny}</span>
            </li>
          )
     }
}

export default DisplayProduct;
