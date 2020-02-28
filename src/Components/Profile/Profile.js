import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import CSS from "./Profile.module.css";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import * as actions from "../../Redux/actions";

import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(actions.logOut())
});
export default connect(
  null,
  mapDispatchToProps
)(
  withRouter(
    class extends React.Component {
      state = {
        database: null,
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        oldEmail: "",
        oldPassword: "",
        render: "name"
      };

      componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
          if (user) {
            let ref = firebase.database().ref("users");
            ref
              .orderByChild("uid")
              .equalTo(user.uid)
              .on("value", snapshot => {
                this.setState({
                  email: snapshot.val()[Object.keys(snapshot.val())[0]].Email,
                  firstName: snapshot.val()[Object.keys(snapshot.val())[0]]
                    .firstName,
                  lastName: snapshot.val()[Object.keys(snapshot.val())[0]]
                    .lastName,
                  oldEmail: snapshot.val()[Object.keys(snapshot.val())[0]].Email
                });
              });
          }
        });
      }
      updateProfile = () => {
        switch (this.state.render) {
          case "name":
            this.updateName();
            break;
          case "password":
            this.updatePassword();
            break;
          case "email":
            this.updateEmail();
            break;
          default:
            return;
        }
      };
      updateEmail = () => {
        firebase
          .auth()
          .signInWithEmailAndPassword(
            this.state.oldEmail,
            this.state.oldPassword
          )
          .then(userCred => {
            let user = userCred.user;
            user.updateEmail(this.state.email);
          });
        let userRef = firebase.database().ref(`users`);
        userRef
          .orderByChild("Email")
          .equalTo(this.state.oldEmail)
          .on("value", snapshot => {
            snapshot.forEach(child => {
              let key = child.key;
              let objRef = firebase.database().ref(`users/${key}`);
              objRef.update({
                Email: this.state.email
              });
            });
          });
      };
      updatePassword = () => {
        firebase
          .auth()
          .signInWithEmailAndPassword(
            this.state.oldEmail,
            this.state.oldPassword
          )
          .then(userCred => {
            let user = userCred.user;
            user.updatePassword(this.state.password);
          });
      };
      updateName = () => {
        firebase
          .auth()
          .signInWithEmailAndPassword(
            this.state.oldEmail,
            this.state.oldPassword
          )
          .then(userCred => {
            let user = userCred.user;
            user.updateProfile({
              displayName: this.state.firstName
            });
          });
        let userRef = firebase.database().ref(`users`);
        userRef
          .orderByChild("Email")
          .equalTo(this.state.oldEmail)
          .on("value", snapshot => {
            snapshot.forEach(child => {
              let key = child.key;
              let objRef = firebase.database().ref(`users/${key}`);
              objRef.update({
                firstName: this.state.firstName,
                lastName: this.state.lastName
              });
            });
          });
      };
      render() {
        const name = (
          <div className={CSS.nameForm}>
            <FormGroup>
              <Label for="fN">First Name</Label>
              <Input
                type="text"
                name="fN"
                id="fN"
                value={this.state.firstName}
                onChange={e => this.setState({ firstName: e.target.value })}
                placeholder="Change First Name"
              />
            </FormGroup>
            <FormGroup>
              <Label for="lN">Last Name</Label>
              <Input
                type="text"
                name="lN"
                id="lN"
                value={this.state.lastName}
                onChange={e => this.setState({ lastName: e.target.value })}
                placeholder="Change Last Name"
              />
            </FormGroup>
          </div>
        );
        const email = (
          <FormGroup>
            <Label for="em">Email</Label>
            <Input
              type="email"
              name="email"
              id="em"
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
              placeholder="Change E-Mail Address"
            />
          </FormGroup>
        );
        const password = (
          <FormGroup>
            <Label for="pw">Password</Label>
            <Input
              type="password"
              name="password"
              id="pw"
              autoComplete="on"
              value={this.state.password}
              onChange={e => this.setState({ password: e.target.value })}
              placeholder="Enter New Password"
            />
          </FormGroup>
        );

        return (
          <div className={CSS.main}>
            <div className={CSS.innerLeft}>
              <Button
                className={CSS.button}
                onClick={() => this.setState({ render: "email" })}
              >
                Change Email
              </Button>

              <Button
                className={CSS.button}
                onClick={() => this.setState({ render: "name" })}
              >
                Change Name
              </Button>

              <Button
                className={CSS.button}
                onClick={() => this.setState({ render: "password" })}
              >
                Change Password
              </Button>
            </div>
            <div className={CSS.inner}>
              <Form className={CSS.Form}>
                {this.state.render === "email"
                  ? email
                  : this.state.render === "password"
                  ? password
                  : name}
                <div>
                  <FormGroup>
                    <Label for="pwO">Current Password</Label>
                    <Input
                      type="password"
                      name="passwordOld"
                      id="pwO"
                      autoComplete="on"
                      value={this.state.oldPassword}
                      onChange={e =>
                        this.setState({ oldPassword: e.target.value })
                      }
                      placeholder="Enter Old Password"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="em">Current Email</Label>
                    <Input
                      type="email"
                      name="emailO"
                      id="emO"
                      value={this.state.oldEmail}
                      onChange={e =>
                        this.setState({ oldEmail: e.target.value })
                      }
                      placeholder="Confirm E-Mail Address"
                    />
                  </FormGroup>
                </div>
              </Form>
              <div className={CSS.buttonDiv}>
                <Button className={CSS.button} onClick={this.props.logOut}>
                  LOGOUT
                </Button>
                <Button
                  className={CSS.button}
                  onClick={this.updateProfile}
                  disabled={!this.state.oldPassword}
                >
                  {this.state.oldPassword ? "Update Profile" : "Enter Password"}
                </Button>
              </div>
            </div>
          </div>
        );
      }
    }
  )
);
