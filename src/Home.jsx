import React, { Component } from "react";
import {Jumbotron, Card } from "react-bootstrap";


export default class Home extends Component {
  render() {
    return (
      <div>
        <Jumbotron fluid className="banner"></Jumbotron>
        <div className="container cards">
          <Card body bg="dark"></Card>
          <Card body bg="dark"></Card>
          <Card body bg="dark"></Card>
        </div>
      </div>
    );
  }
}
