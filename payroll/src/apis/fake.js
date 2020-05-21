const SFData = {
  employees: [{
    name: "Marge Simpson",
    salary: 50000
  }, {
    name: "Homer Simpson",
    salary: 1000
  }, {
    name: "Maggie Simpson",
    salary: 200000
  }, {
    name: "Santa's Little Helper",
    salary: 50000
  }]
}

const TOData = {
  employees: [{
    name: "David Suzuki",
    ketchupChips: 11
  }, {
    name: "Dr. Roberta Bondar",
    ketchupChips: 33
  }, {
    name: "Giant Rubber Duck",
    ketchupChips: 857
  }]
}

const LOData = {
  employees: [{
    name: "George Livingstone",
    bigBenBucks: 1420000,
    gender: "M"
  }, {
    name: "Primrose Wordsworth II",
    bigBenBucks: 1365000,
    gender: "F"
  }, {
    name: "Aurelia Buckingham",
    bigBenBucks: 2527000,
    gender: "F"
  }, {
    name: "Benedict Cumberbatch",
    bigBenBucks: 1200000,
    gender: "M"
  }]
}

class FakeAPI {
  static get(endpoint) {
    switch(endpoint) {
      case 'some_employees_endpoint/sf':
        return SFData
      case 'some_employees_endpoint/toronto':
        return TOData
      case 'some_employees_endpoint/london':
        return LOData
      default:
        return { employees: [] }
    }
  }

  static post(endpoint, value) {
    switch(endpoint) {
      case 'some_employees_endpoint/increase_all_salary':
        return {status: 200, increaseAmount: value}
      default:
        return {status: 200}
    }
  }
}

export default FakeAPI
