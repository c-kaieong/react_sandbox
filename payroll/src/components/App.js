import React, { Component } from 'react'
import SFPayrollList from '../components/SFPayrollList'
import TOPayrollList from '../components/TOPayrollList'
import LOPayrollList from '../components/LOPayrollList'
import SalaryIncreaser from '../components/SalaryIncreaser'


class App extends Component {
  render() {
    return (
      <div className="ui container">
        <SFPayrollList />
        <TOPayrollList />
        <LOPayrollList />
        <SalaryIncreaser />
      </div>
    );
  }
}

export default App;
