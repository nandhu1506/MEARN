import React, { Component } from 'react'

export default class ClassDemo extends Component {
  constructor(props){
    super()
    console.log(props);
    this.state={data:'demo'}
  }
  getData = (e)=>{
    console.log(e.target.value);
    this.setState({data: e.target.value})
  }
  render() {
    return (
      <div>
      <h1>Class Component</h1>
      <p>Created by JS Class Component</p>
      <h3>{this.props.data} - using props</h3>
      <div className='my-3 d-flex'>
        <input onChange={e=>this.getData(e)} type="text" placeholder='Input Your Name !!!' className='form-control' />
      </div>
      <h1>User Input Data : <span>{this.state.data}</span></h1>
      </div>
    )
  }
}
