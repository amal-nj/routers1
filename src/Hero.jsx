import React, { Component } from 'react'
import {Card } from "react-bootstrap";

export default class Hero extends Component {
    render() {
        return (
            <div>
            <Card body bg="dark">
                <img src={this.props.image}/>
                <h1>{this.props.name}</h1>
            </Card>
            </div>
        )
    }
}
