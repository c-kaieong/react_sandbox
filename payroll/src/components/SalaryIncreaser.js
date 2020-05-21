import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increaseAllSalary } from '../actions'

class SalaryIncreaser extends Component {
  constructor(props) {
    super(props)
    this.inputField = React.createRef()
  }

  doIncreaseSalary() {
    let increaseAmount = parseInt(this.inputField.current.value);
    this.props.increaseAllSalary(increaseAmount)
  }

  render() {
    return (
      <div className="ui input">
        <input ref={this.inputField}/>
        <button className="ui button" onClick={() => {this.doIncreaseSalary()}}>Increase Salary!</button>
      </div>
    )
  }
}

const mapDispatchToProps = {
  increaseAllSalary: increaseAllSalary
}

export default connect(null, mapDispatchToProps)(SalaryIncreaser);
