import React, { Component } from 'react';
import { Route } from "react-router-dom";
import cookie from 'react-cookies';
import axios from "axios";

// css
import '../css/new.css';
import '../css/style.css';
import '../css/reset.css';

import Main from './Main';

// header
import Header from './Header/Header';

// footer
import Footer from './Footer/Footer';

// login
import LoginForm from './Register/LoginForm';

//register
import Register from './Register/Register';
import PwChangeForm from './PwChangeForm';


//notice
import SoftwareList from './SoftwareToolsManage/SoftwareList';
import SoftwareView from './SoftwareToolsManage/SoftwareView';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    if(window.location.pathname.indexOf('/myPage') > -1){
      axios.post('/api/LoginForm?type=SessionConfirm', {
        token1 : cookie.load('userid') 
        , token2 : cookie.load('username') 
      })
      .then( response => {
          this.state.userid = response.data.token1
          let password = cookie.load('userpassword')
          if(password !== undefined){
            axios.post('/api/LoginForm?type=SessionSignin', {
              is_Email: this.state.userid,
              is_Token : password
            })
            .then( response => {
              if(response.data.json[0].useremail === undefined){
                this.noPermission()
              }
            })
            .catch( error => {
              this.noPermission()
            });
          }else{
            this.noPermission()
          }
      })
      .catch( response => this.noPermission());
    }
  }

  noPermission = (e) => {
    if(window.location.hash != 'nocookie'){
      this.remove_cookie();
      window.location.href = '/main/#nocookie';
    }
  };

  remove_cookie = (e) => {
    cookie.remove('userid', { path: '/'});
    cookie.remove('username', { path: '/'});
    cookie.remove('userpassword', { path: '/'});
  }

  render () {
    return (
      <div className="App">
        <Header /> 
        <Route exact path='/' component={Main} />
        <Route path='/main' component={Main} />
        <Route path='/event' component={Event} />
        <Route path='/login' component={LoginForm} />
        <Route path='/Register' component={Register} />
        <Route path='/SoftwareList' component={SoftwareList} />
        <Route path='/SoftwareView/:swtcode' component={SoftwareView} />
        <Route path='/PwChangeForm/:email/:token' component={PwChangeForm} />
        <Footer/>
      </div>
    );
  }
}

export default App;