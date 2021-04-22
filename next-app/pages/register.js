import React, { Component } from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import './App.css';
//import { Header } from './components/Header'
//import { Users } from './components/Users'
//import { DisplayBoard } from './components/DisplayBoard'
import CreateUser from '../components/CreateUser'
import { getAllUsers, createUser } from '../services/UserService'
import styles from "../styles/login_styles.module.css"
import NavBar from "../components/NavBar"
import Router from "next/router"
import { useCookies, Cookies } from "react-cookie"

/**
 * WILL UPDATE. THIS IS CURRENTLY ONLY REACT, BUT WE WANT TO CHANGE THIS TO NEXT.JS
 */

function setUserCookie(user) {
  const cookies = new Cookies();
  /*setCookie("user", user, {
    path: "/",
    maxAge: -1, // 600 = Expires after 10 min
    sameSite: true,
  });*/
  let d = new Date();
  d.setTime(d.getTime() + 5000);
  cookies.set("user", user, { path: '/'});
  console.log(cookies.get("user"));
  console.log("Cookie set");
  Router.push("/");
}

class Register extends Component {

  state = {
    user: {},
    users: [],
    numberOfUsers: 0
  }

  createUser = (e) => {
    let user;
      createUser(this.state.user)
        .then(response => {
          console.log(response.user.username);
          user = response.user.username;
          setUserCookie(user);
      });
  }

  getAllUsers = () => {
    getAllUsers()
      .then(users => {
        console.log(users)
        this.setState({users: users, numberOfUsers: users.length})
      });
  }

  onChangeForm = (e) => {
      let user = this.state.user
      if (e.target.name === 'firstname') {
          user.firstName = e.target.value;
      } else if (e.target.name === 'lastname') {
          user.lastName = e.target.value;
      } else if (e.target.name === 'email') {
          user.email = e.target.value;
      } else if (e.target.name === 'username'){
          user.username = e.target.value;
      }
      else if(e.target.name === 'password') {
        user.password = e.target.value;
      }
      this.setState({user})
  }

  componentDidMount() {
    var cookies = new Cookies()
      if (cookies.get("user")) {
        Router.push("/");
    }
  }

  render() {
    
    return (
      <main className={styles.main}>
        <NavBar />
        {/*<Header></Header>*/}
        <div className={styles.body_register}>
          <div className="row">
            <div className="col-md-8">
                <CreateUser 
                  user={this.state.user}
                  onChangeForm={this.onChangeForm}
                  createUser={this.createUser}
                  >
                </CreateUser>
            </div>
            <div className="col-md-4">
                {/*<DisplayBoard
                  numberOfUsers={this.state.numberOfUsers}
                  getAllUsers={this.getAllUsers}
                >
                </DisplayBoard>*/}
            </div>
          </div>
        </div>
        {/*<div className="row mrgnbtm">
          <Users users={this.state.users}></Users>
            </div>*/}
      </main>
    );
  }
}

export default Register;