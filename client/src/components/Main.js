import React, { Component } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import axios from "axios";
import cookie from 'react-cookies';
import Swal from 'sweetalert2';
import $ from 'jquery';
import swipercontainer, { Navigation, Pagination, Autoplay } from 'swiper';

//WeeklyBest
import WeeklyProductList from './WeeklyProduct/WeeklyProductList';

//ProductList
import DisplayProductList from './DisplayProduct/DisplayProductList';


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


const displayProducts = [{
  productsName  : "1세라마이드 아토 여행용 키트",
  discountType  : "쿠폰할인가",
  discountRate  : "25%",
  discountPrice : "39,000",
  curreny       : "원",        
  price         : "29,900",
  deliveryType  : "무료배송"
},{
  productsName  : "NEW 센슈얼 파우더 매트",
  discountType  : "쿠폰할인가",
  discountRate  : "11%",
  discountPrice : "35,500",
  curreny       : "원",        
  price         : "31,500",
  deliveryType  : "무료배송"
},{
  productsName  : "더 비타민 C23",
  discountType  : "쿠폰할인가",
  discountRate  : "17%",
  discountPrice : "50,000",
  curreny       : "원",        
  price         : "59,000",
  deliveryType  : "무료배송"
},{
  productsName  : "크림스킨",
  discountType  : "쿠폰할인가",
  discountRate  : "20%",
  discountPrice : "22,400",
  curreny       : "원",        
  price         : "28,000",
  deliveryType  : "무료배송"
},{
  productsName  : "자음 2종 기획(쇼핑백포함)",
  discountType  : "쿠폰할인가",
  discountRate  : "12%",
  discountPrice : "120,000",
  curreny       : "원",        
  price         : "134,400",
  deliveryType  : "무료배송"
},{
  productsName  : "명작수(50EA)",
  discountType  : "쿠폰할인가",
  discountRate  : "5%",
  discountPrice : "260,000",
  curreny       : "원",        
  price         : "273,000",
  deliveryType  : "무료배송"
},{
  productsName  : "스킨유 에센스/크림 바디로션",
  discountType  : "쿠폰할인가",
  discountRate  : "33%",
  discountPrice : "12,860",
  curreny       : "원",        
  price         : "18,900",
  deliveryType  : "무료배송"
},{
  productsName  : "메타그린 슬림(60일분)",
  discountType  : "쿠폰할인가",
  discountRate  : "16%",
  discountPrice : "49,500",
  curreny       : "원",        
  price         : "59,000",
  deliveryType  : "무료배송"
},{
  productsName  : "슈퍼콜라겐",
  discountType  : "쿠폰할인가",
  discountRate  : "23%",
  discountPrice : "100,000",
  curreny       : "원",        
  price         : "130,000",
  deliveryType  : "무료배송"
},{
  productsName  : "자양윤모 탈모증상케어 두피모발 트리트먼트",
  discountType  : "쿠폰할인가",
  discountRate  : "75%",
  discountPrice : "2,690",
  curreny       : "원",        
  price         : "10,000",
  deliveryType  : "무료배송"
},{
  productsName  : "빈티지 싱글 익스트렉트 에센스 스타터세트",
  discountType  : "쿠폰할인가",
  discountRate  : "5%",
  discountPrice : "97,000",
  curreny       : "원",        
  price         : "101,900",
  deliveryType  : "무료배송"
},{
  productsName  : "[기획] 오가니언스 2종세트",
  discountType  : "쿠폰할인가",
  discountRate  : "15%",
  discountPrice : "51,900",
  curreny       : "원",        
  price         : "60,000",
  deliveryType  : "무료배송"
},{
  productsName  : "남성 본윤 2종세트(쇼핑백 포함)",
  discountType  : "쿠폰할인가",
  discountRate  : "8%",
  discountPrice : "125,000",
  curreny       : "원",        
  price         : "135,000",
  deliveryType  : "무료배송"
},{
  productsName  : "멀티 비타 큐브",
  discountType  : "쿠폰할인가",
  discountRate  : "28%",
  discountPrice : "70,000",
  curreny       : "원",        
  price         : "99,000",
  deliveryType  : "무료배송"
},{
  productsName  : "미쟝센 퍼펙트 리페어 세럼 6종",
  discountType  : "쿠폰할인가",
  discountRate  : "60%",
  discountPrice : "6,000",
  curreny       : "원",        
  price         : "15,000",
  deliveryType  : "무료배송"
},{
  productsName  : "슈퍼바이탈 크림 리치 기획세트",
  discountType  : "쿠폰할인가",
  discountRate  : "16%",
  discountPrice : "100,000",
  curreny       : "원",        
  price         : "120,000",
  deliveryType  : "무료배송"
}];

const eventInfo = [{
  EventLogo  : "EVENT",
  EventType  : "Brand Be Better -에어리블러 프라이밍 파우더",
  Date : "09.25~10.31",

},{
  EventLogo  : "EVENT",
  EventType  : "아이오페 비타민 출시 1주년 기획전",
  Date : "10.12~10.25",
  
},{
  productsName  : "EVENT",
  EventType  : "한율_BRAND BE BETTER",
  Date : "07.22~08.31",

}];


class main extends Component {
    

    render () {
        return (
            <>
            <main>
    <div className="main">
    <div className="main_container">
    <div className="main_inner">
    <div className="swiper-container main_img">
    <img src={require("../image/img2/main1.jpg")} alt=""/>
      {/* <ul className="swiper-wrapper">
        <li className="swiper-slide"><a href=""><img src={require("../image/img2/main1.jpg")} alt=""/></a></li>
        <li className="swiper-slide"><a href=""><img src={require("../image/img2/main2.jpg")} alt=""/></a></li>
        <li className="swiper-slide"><a href=""><img src={require("../image/img2/main3.jpg")} alt=""/></a></li>
        <li className="swiper-slide"><a href=""><img src={require("../image/img2/main4.jpg")} alt=""/></a></li>
        <li className="swiper-slide"><a href=""><img src={require("../image/img2/main5.jpg")} alt=""/></a></li>
      </ul> */}
    </div>
  </div>
  </div>

    <div className="focus">
      <div className="focus_inner">
        <h2>WEEKLY BEST</h2>
          <WeeklyProductList productList={weekBestProducts}/>
      </div>
    </div>

    <div className="show">
      <div className="show_inner">
        <h2>EVENT</h2>
        <ul>
          <li>
            <a href=""><img src={require("../image/img2/brand1.jpg")} alt=""/>
              <div className="hashtag">
                <span>#스파이시누드밤</span><br/>
                <span>#스파이시글로스</span><br/>
                <span>#파우더매트</span>
              </div>
            </a>
            <div className="text_wrap">
              <em>EVENT</em>
            <p>Brand Be Better -에어리블러 프라이밍 파우더-</p>
            <span>09.25~10.31</span>
            </div>
          </li>

          <li>
            <a href=""><img src={require("../image/img2/brand2.jpg")} alt=""/>
              <div className="hashtag">
                <span>#민감피부케어</span><br/>
                <span>#국민쿠션</span><br/>
                <span>#주름세럼</span>
              </div>
            </a>
            <div className="text_wrap">
              <em>EVENT</em>
            <p>아이오페 비타민 출시 1주년 기획전</p>
            <span>10.12~10.25</span>
            </div>
          </li>

          <li>
            <a href=""><img src={require("../image/img2/brand3.jpg")} alt=""/>
              <div className="hashtag">
                <span>#한국적자연주의</span><br/>
                <span>#일상적이로움</span><br/>
                <span>#자연을닮은한율</span>
              </div>
            </a>
            <div className="text_wrap">
              <em>EVENT</em>
            <p>한율_BRAND BE BETTER</p>
            <span>07.22~08.31</span>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div className="product_list">
      <div className="product_inner">
        <ul>
          <li></li>
        <DisplayProductList productList={displayProducts}/>
        </ul>
      </div>
     </div>
    </div>
  </main>
  </>
        );
    }
}

export default main;