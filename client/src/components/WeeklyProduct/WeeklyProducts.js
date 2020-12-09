import React, { Component } from 'react';

class WeeklyProducts extends Component {
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
                <div>
                    <img src={require("../../image/img2/focus1.png")} alt=""/>
                    <strong>{this.state.productInfo.productsName}</strong>
                    <h4>{this.state.productInfo.discountType}</h4>
                    <p>{this.state.productInfo.discountPrice}</p>
                    <span>{this.state.productInfo.curreny}</span>
                    <em>{this.state.productInfo.price}</em>
                    <span class="free_de">
                        {this.state.productInfo.deliveryType}
                    </span>
                </div>
            </li>
          )
     }
}

export default WeeklyProducts;
