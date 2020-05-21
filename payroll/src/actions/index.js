import FakeAPI from '../apis/fake'

export const fetchSFEmployees = () => {
  let response = FakeAPI.get("some_employees_endpoint/sf")

  return {
    type: "/employees/sf/fetch",
    payload: response
  }
}

export const fetchTOEmployees = () => {
  let response = FakeAPI.get("some_employees_endpoint/toronto")

  return {
    type: "/employees/to/fetch",
    payload: response
  }
}

export const fetchLOEmployees = () => {
  let response = FakeAPI.get("some_employees_endpoint/london")

  return {
    type: "/employees/lo/fetch",
    payload: response
  }
}

export const increaseAllSalary = (increaseAmount) => {
  let response = FakeAPI.post("some_employees_endpoint/increase_all_salary", increaseAmount)

  return {
    type: "employees/salary/increase",
    increaseAmount: increaseAmount
  }
}
