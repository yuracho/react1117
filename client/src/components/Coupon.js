import React, { Component } from 'react';


class Coupon extends Component {
    constructor(props) {
      super(props);
      this.state = {
      }
    }
  
  
    render () {
      return (
        <div className="coupon_banner">
            <div ClassName="banner_inner" >
                <div ClassName="inner_wrap">
                    <h2 className="coupon_zone">쿠폰</h2>
                </div>
            </div>
            
            <div className="coupon_benefit">
                <div className="title_inner">
                    <h3 className="coupon_benefit">
                        전 고객 쿠폰 혜택<br />
                        <b>이달의 쿠폰</b>
                    </h3>
                </div>
            </div>

            <div className="coupon_list">
                <ul className="coupon_inner">
                    <li>
                     <div className="coupon_box">
                         <div className="coupon_text">
                            <span class="coupon_title">첫 구매 고객 웰컴 할인</span>
                            <span class="coupon_sale">20%</span>
                            <span class="coupon_info">20,000원 이상 적용가능</span>
                        </div>
                        <div className="button_box">
                            <button type="button" name="coupon_btn"><span className="coupon_dw">쿠폰 다운받기</span></button>
                        </div>
                    </div>
                    </li>

                    <li>
                     <div className="coupon_box">
                         <div className="coupon_text">
                            <span class="coupon_title">VIP 고객 한번 더 할인</span>
                            <span class="coupon_sale">15%</span>
                            <span class="coupon_info">50,000원 이상 적용가능</span>
                        </div>
                        <div className="button_box">
                            <button type="button" name="coupon_btn"><span className="coupon_dw">쿠폰 다운받기</span></button>
                        </div>
                    </div>
                    </li>

                    <li>
                     <div className="coupon_box">
                         <div className="coupon_text">
                            <span class="coupon_title">카드 고객 장바구니 할인</span>
                            <span class="coupon_sale">11%</span>
                            <span class="coupon_info">30,000원 이상 적용가능</span>
                        </div>
                        <div className="button_box">
                            <button type="button" name="coupon_btn"><span className="coupon_dw">쿠폰 다운받기</span></button>
                        </div>
                    </div>
                    </li>

                    <li>
                     <div className="coupon_box">
                         <div className="coupon_text">
                            <span class="coupon_title">브랜드 할인 쿠폰</span>
                            <span class="coupon_sale">7%</span>
                            <span class="coupon_info">5,000원 이상 적용가능</span>
                        </div>
                        <div className="button_box">
                            <button type="button" name="coupon_btn"><span className="coupon_dw">쿠폰 다운받기</span></button>
                        </div>
                    </div>
                    </li>

                    <li>
                     <div className="coupon_box">
                         <div className="coupon_text">
                            <span class="coupon_title">브랜드 중복 할인 쿠폰</span>
                            <span class="coupon_sale">20%</span>
                            <span class="coupon_info">10,000원 이상 적용가능</span>
                        </div>
                        <div className="button_box">
                            <button type="button" name="coupon_btn"><span className="coupon_dw">쿠폰 다운받기</span></button>
                        </div>
                    </div>
                    </li>

                    <li>
                     <div className="coupon_box">
                         <div className="coupon_text">
                            <span class="coupon_title">전 고객 장바구니 할인</span>
                            <span class="coupon_sale">5%</span>
                            <span class="coupon_info">20,000원 이상 적용가능</span>
                        </div>
                        <div className="button_box">
                            <button type="button" name="coupon_btn"><span className="coupon_dw">쿠폰 다운받기</span></button>
                        </div>
                    </div>
                    </li>
                </ul>
            </div>
        </div>
      
      );
    }
  }

export default Coupon;