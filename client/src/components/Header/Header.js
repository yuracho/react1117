import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import cookie from 'react-cookies';
import $ from 'jquery';
import Swal from 'sweetalert2';


class Header extends Component {
    componentDidMount() {
        $('.menu').click(function(){
            $('.m_menu').animate({top: 0}, 500);
        })
        $('.m_menu .close').click(function(){
            $('.m_menu').animate({top: '-100%'}, 500);
        })
    }

    render () {
        return(
            <>
            <div className="header">
                <div className="header_inner">
                    <div className="menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
            
                    <div className="m_menu">
                      <span className="close">닫기</span>
                       <div className="m_menu_wrap">
                        <div className="menutext_wrap">
                            <strong>BEST</strong>
                            <span>전체보기</span>
                            <span>스킨케어</span>
                            <span>메이크업</span>
                            <span>ACC</span>
                        </div>

                        <div className="menutext_wrap">
                            <strong>EVENT</strong>
                            <a href="/event"><span>진행중인 이벤트</span></a>
                        </div>

                        <div className="menutext_wrap">
                            <strong>COUPON</strong>
                            <a href="/coupon"><span>바로가기</span></a>
                            <a></a>
                        </div>
            
                        <div className="menutext_wrap">
                            <strong>Q&A</strong>
                            <span>공지사항</span>
                            <span>1:1상담</span>
                        </div>
                      </div>
                    </div>
                    
                    <h1><a href="/main"><img src={require("../../image/img2/logo.png")} alt=""/></a></h1>
            
                    <script type="text/javascript">
                    $('.menu').click(function(){
                        $('.m_menu').animate({top: 0}, 500)
                    })
                    $('.m_menu .close').click(function(){
                        $('.m_menu').animate({top: '-100%'}, 500)
                    })
            
                    </script>
            
                    <div className="form_wrap">
                    <form className="" action="index.html" method="get">
                    <input type="text" />
                    <button type="button" name="button"><span>검색</span></button>
                    </form>
                    </div>
            
                    <div className="user_nav">
                    <a href="" className="user">사용자</a>
                    <a href="" className="delivery">배송</a>
                    <a href="" className="cart">장바구니</a>
                    <a href=""  className="history">히스토리</a>
                    </div>
                </div>
                <div className="gnb">
                <div className="gnb_inner">
                    <ul>
                    <li><a href="/best">BEST</a></li>
                    <li><a href="/event">EVENT</a></li>
                    <li><a href="/coupon">COUPON</a></li>
                    <li><a href="/SoftwareList">Q&A</a></li>
                    </ul>

                    <ul className="login">
                    <li><a href="/login">LOGIN</a></li>
                    <li><a href="/register">JOIN US</a></li>
                    </ul>
                 </div>
                 </div>
            </div>
            </>
        );
    }
}

export default Header;

