import React, { Component } from 'react';
import WeeklyProducts from './WeeklyProducts';

class WeeklyProductList extends Component {
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
              return (<WeeklyProducts productInfo={product}/>);
            });
          };

        return (
            <ul>
                {mapToComponent(this.state.productList)}
            </ul>
          )
     }
}

export default WeeklyProductList;
