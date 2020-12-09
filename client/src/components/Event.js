import React, { Component } from 'react';


class Event extends Component {
    constructor(props) {
      super(props);
      this.state = {
      }
    }
  
  
    render () {
      return (
        <div className="show">
      <div className="show_inner">
        <h2>EVENT</h2>
        <ul>
          <li>
            <a href=""><img src={require("../img/img2/brand1.jpg")} alt=""/>
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
            <a href=""><img src={require("../img/img2/brand2.jpg")} alt=""/>
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
            <a href=""><img src={require("../img/img2/brand3.jpg")} alt=""/>
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
        
        <ul>
          <li>
            <a href=""><img src={require("../img/img2/brand1.jpg")} alt=""/>
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
            <a href=""><img src={require("../img/img2/brand2.jpg")} alt=""/>
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
            <a href=""><img src={require("../img/img2/brand3.jpg")} alt=""/>
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
      );
    }
  }

export default Event;