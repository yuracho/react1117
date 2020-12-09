import React, { Component } from 'react';

//WeeklyBest
import WeeklyProductList from './WeeklyProduct/WeeklyProductList';

const weekBestProducts = [{
    productsName  : "딥 슬리핑 마스크",
    discountType  : "할인특가",
    discountPrice : "9,000",
    curreny       : "원",        
    price         : "18,000",
    deliveryType  : "무료배송"
  },{
    productsName  : "블랙 파운데이션 SPF15/PA+",
    discountType  : "할인특가",
    discountPrice : "60,900",
    curreny       : "원",        
    price         : "69,000",
    deliveryType  : "무료배송"
  },{
    productsName  : "자연을 닮은 립밤",
    discountType  : "할인특가",
    discountPrice : "9,000",
    curreny       : "원",        
    price         : "10,000",
    deliveryType  : "무료배송"
}];



class Best extends Component {
    constructor(props) {
      super(props);
      this.state = {
      }
    }
  
  
    render () {
      return (
        <div className="focus">
      <div className="focus_inner">
        <h2>WEEKLY BEST</h2>
          <WeeklyProductList productList={weekBestProducts}/>
      </div>
    </div>
      );
    }
  }

export default Best;