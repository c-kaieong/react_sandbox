import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTOEmployees } from '../actions'

class TOPayrollList extends Component {
  componentDidMount() {
    this.props.fetchTOEmployees()
  }

  renderList() {
    let employees = this.props.employees
    return employees.map(employee => {
      return (
        <div className="ui relaxed divided list">
          <div>Name: {employee.name}</div>
          <div>Salary: {employee.ketchupChips} ketchup chips</div>
        </div>
      )
    })
  }

  render() {
    return (
      <div className="ui sizer vertical segment">
        <div className="ui huge header">Toronto Payroll</div>
        {this.renderList()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    employees: state.toEmployees
  }
}

const mapDispatchToProps = {
  fetchTOEmployees: fetchTOEmployees
}

export default connect(mapStateToProps, mapDispatchToProps)(TOPayrollList);
