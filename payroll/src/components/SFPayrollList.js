import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchSFEmployees } from '../actions'

class SFPayrollList extends Component {
  componentDidMount() {
    this.props.fetchSFEmployeesBLAH()
  }

  renderList() {
    let employees = this.props.employees
    return employees.map(employee => {
      return (
        <div className="ui relaxed divided list">
          <div>Name: {employee.name}</div>
          <div>Salary: {employee.salary} USD</div>
        </div>
      )
    })
  }

  render() {
    return (
      <div className="ui sizer vertical segment">
        <div className="ui huge header">SF Payroll</div>
        {this.renderList()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    employees: state.sfEmployees
  }
}

const mapDispatchToProps = {
  fetchSFEmployeesBLAH: fetchSFEmployees
}

export default connect(mapStateToProps, mapDispatchToProps)(SFPayrollList);
