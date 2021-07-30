const operation = ({ type }) => {
  switch (type) {
    case "sum":
      return sum()
    case "subtraction":
      return subtraction()
    case "multiply":
      return multiply()
    case "divide":
      return divide()
  }
}

const sum = () => {}

const subtraction = () => {}

const multiply = () => {}

const divide = () => {}

export { operation }
