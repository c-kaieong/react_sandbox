import { combineReducers } from 'redux';

const SFEmployeesReducer = (state = [], action) => {
  switch(action.type) {
    case "/employees/sf/fetch":
      return action.payload.employees
    case "employees/salary/increase":
      let increaseAmount = action.increaseAmount
      let newState = state.map(employee => {
        return {...employee, salary: employee.salary+increaseAmount}
      })
      return newState
    default:
      return state
  }
}

const TOEmployeesReducer = (state = [], action) => {
  switch(action.type) {
    case "/employees/to/fetch":
      return action.payload.employees
    case "employees/salary/increase":
      let increaseAmount = action.increaseAmount
      let exchangeRate = 0.5
      let newState = state.map(employee => {
        return {...employee, ketchupChips: employee.ketchupChips+(increaseAmount*exchangeRate)}
      })
      return newState
    default:
      return state
  }
}

const LOEmployeesReducer = (state = [], action) => {
  switch(action.type) {
    case "/employees/lo/fetch":
      let employees = action.payload.employees
      let fetchedState = employees.map(employee => {
        let title = employee.gender === "M" ? "Lord" : "Lady"
        return {...employee, name: `${title} ${employee.name}`}
      })
      return fetchedState
    case "employees/salary/increase":
      let increaseAmount = action.increaseAmount
      let exchangeRate = 200
      let newState = state.map(employee => {
        return {...employee, bigBenBucks: employee.bigBenBucks+(increaseAmount*exchangeRate)}
      })
      return newState
    default:
      return state
  }
}

export default combineReducers({
  sfEmployees: SFEmployeesReducer,
  toEmployees: TOEmployeesReducer,
  loEmployees: LOEmployeesReducer,
})
