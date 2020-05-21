import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchLOEmployees } from '../actions'

class LOPayrollList extends Component {
  componentDidMount() {
    this.props.fetchLOEmployees()
  }

  renderList() {
    let employees = this.props.employees
    return employees.map(employee => {
      return (
        <div className="ui relaxed divided list">
          <div>Name: {employee.name}</div>
          <div>Salary: {employee.bigBenBucks} Big Ben Bucks</div>
        </div>
      )
    })
  }

  render() {
    return (
      <div className="ui sizer vertical segment">
        <div className="ui huge header">London Payroll</div>
        {this.renderList()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    employees: state.loEmployees
  }
}

const mapDispatchToProps = {
  fetchLOEmployees: fetchLOEmployees
}

export default connect(mapStateToProps, mapDispatchToProps)(LOPayrollList);
