import React, { Component } from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import './App.css';
//import { Header } from './components/Header'
//import { Users } from './components/Users'
//import { DisplayBoard } from './components/DisplayBoard'
import CreateUser from '../components/CreateUser'
import { getAllUsers, createUser } from '../services/UserService'
import styles from "../styles/login_styles.module.css"

/**
 * WILL UPDATE. THIS IS CURRENTLY ONLY REACT, BUT WE WANT TO CHANGE THIS TO NEXT.JS
 */
class Register extends Component {

  state = {
    user: {},
    users: [],
    numberOfUsers: 0
  }

  createUser = (e) => {
      createUser(this.state.user)
        .then(response => {
          console.log(response);
          this.setState({numberOfUsers: this.state.numberOfUsers + 1})
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
      this.setState({user})
  }

  render() {
    
    return (
      <main className={styles.main}>
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