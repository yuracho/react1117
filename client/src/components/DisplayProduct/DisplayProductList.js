import React, { Component } from 'react';
import DisplayProducts from './DisplayProducts';

class DisplayProductList extends Component {
    constructor(props) {
        console.log(props)
        super(props);
        this.state = {
            productList : props.productList
        }
    }

    render () {
        const mapToComponent = data => {
            return data.map((product) => {
              return (<DisplayProducts productInfo={product}/>);
            });
          };

        return (
            <ul>
                {mapToComponent(this.state.productList)}
            </ul>
          )
     }
}

export default DisplayProductList;
