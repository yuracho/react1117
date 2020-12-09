import React, { Component } from 'react';

class Footer extends Component {
  render () {
    return (
      <>
      <div className="footer">
      <div className="info_inner">
      <div className="footer_info">
        <ul>
          <li><a href="">기업소개</a></li>
          <li><a href="">기업블로그</a></li>
          <li><a href="">인재채용</a></li>
          <li><a href="">이용약관</a></li>
          <li><a href="">전자금융거래약관</a></li>
          <li><a href="">위치서비스 이용약관</a></li>
          <li><a href="">개인정보처리방침</a></li>
          <li><a href="">청소년보호정책</a></li>
          <li><a href="">입점제휴문의</a></li>
          <li><a href="">고객서비스</a></li>
          <li><a href="">지식재산권센터</a></li>
        </ul>
      </div>
    </div>


    <div className="company">
      <div className="company_inner">
      <a href=""><img src={require("../../image/img2/logo.png")} alt=""/></a>
      <div className="addr">
        <span>COSMETICS </span>
        <span>서울시 용산구 한강대로 32(한강로3가)</span>
          <div className="certificate">
          <span className="num1">사업자등록번호 : 100-10-10101</span>
          <span className="num2">통신판매업신고번호 : 2020-서울용산-1208</span>
          <p>개별 판매자가 입점하여 등록한 상품에 대한 광고, 상품주문, 배송, 환불의 의무와 책임은 각 입점판매자가 부담하고,<br/>
            이에 대하여 통신판매중개자로서 통신판매의 당사자가 아니므로 일체 책임을 지지 않습니다.</p>
          <p>COPYRIGHT &copy;COSMETICS CORPORATION. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </div>

    <div className="cust_center">
      <div className="cust_inner">
        <p>고객센터/전자금융거래분쟁처리담당</p>
        <span>쇼핑문의</span><strong>080-080-5252</strong>
        <em>평일 9:00 ~ 18:00</em>
        <em>주말/공휴일 10:00 ~ 17:00(콜백서비스)</em>
        <span>제품문의</span><strong>080-080-5252</strong>
        <em>평일 9:00 ~ 18:00 (점심 12:00 ~ 13:00)</em>
        <em>주말/공휴일 휴무</em>

      </div>
    </div>
    </div>
    </div>
    </>
    );
  }
}

export default Footer;