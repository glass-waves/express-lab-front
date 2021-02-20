import logo from './logo.svg';
import './App.css';
import request from 'superagent';
import React, { Component } from 'react'
import ModuleList from './ModuleList';

export default class App extends Component {
  state = {
    data: [],
  }
  componentDidMount = async () => {
    await this.fetchData('/modules');
  }

  fetchData = async (path) => {
    console.log('getting data!')
    const data = await request.get(`https://floating-bayou-37638.herokuapp.com/${path}`);
    this.setState({
      data: data.body,
    })
  }

  allResultsHandler = () => {
    this.fetchData('/modules');
  }
  sortResultsHandler = () => {
    this.fetchData('/sorted');
  }
  idResultsHandler = () => {
    this.fetchData('/module/single/1');
  }
  inStockResultsHandler = () => {
    this.fetchData('/instock');
  }

  render() {
    console.log(this.state.data)
    return (
      <div>
        <button onClick={this.allResultsHandler}>All Modules</button>
        <button onClick={this.sortResultsHandler}>Sort by Price</button>
        <button onClick={this.idResultsHandler}>Only One Module</button>
        <button onClick={this.inStockResultsHandler}>In Stock</button>
        <div >
          <ModuleList data={this.state.data} />
        </div>
      </div>
    )
  }
}

