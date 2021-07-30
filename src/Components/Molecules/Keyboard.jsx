import Key from "@Atoms/Key"
import KeyOperator from "@Atoms/KeyOperator"

const Keyboard = () => {
  return (
    <div className="keyboard">
      <div className="keyboard__keys">
        <Key>1</Key>
        <Key>2</Key>
      </div>
      <div className="keyboard__actions">
        <KeyOperator type="sum">+</KeyOperator>
        <KeyOperator type="subtraction">-</KeyOperator>
        <KeyOperator type="multiply">x</KeyOperator>
        <KeyOperator type="divide">&divide;</KeyOperator>
      </div>
    </div>
  )
}

export default Keyboard
