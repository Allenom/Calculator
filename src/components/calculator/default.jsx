import { useState, useRef } from "react"
import "./styles.css"

function Calculator() {
  const [inputvalue, setinputvalue] = useState("")
  const inputRef = useRef()

  function inputFocus() {
    inputRef.current.focus()
  }

  function display(value) {
    setinputvalue(inputvalue + value)
    inputFocus()
  }

  function calculate() {
    try {    
        const answers = eval(inputvalue)
        setinputvalue(answers)
    } catch {
        setinputvalue('')
    } finally {
        inputFocus()
    }

  }

  function clear() {
    setinputvalue("")
    inputFocus()
  }

  function handleSubmit(event) {
    event.preventDefault()
    calculate()
  }

  return (
    <form className="calculator" name="calc" onSubmit={e => handleSubmit(e)}>
      <input type="text" className="value" value={inputvalue} onChange={e => setinputvalue(e.target.value.replace(/[^0-9+/*-.]/g, ''))} ref={inputRef}/>
      <span className="num clear" onClick={() => clear()}>
        c
      </span>
      <span onClick={() => display("/")}>/</span>
      <span onClick={() => display("*")}>*</span>
      <span onClick={() => display("7")}>7</span>
      <span onClick={() => display("8")}>8</span>
      <span onClick={() => display("9")}>9</span>
      <span onClick={() => display("-")}>-</span>
      <span onClick={() => display("4")}>4</span>
      <span onClick={() => display("5")}>5</span>
      <span onClick={() => display("6")}>6</span>
      <span className="plus" onClick={() => display("+")}>
        +
      </span>
      <span onClick={() => display("1")}>1</span>
      <span onClick={() => display("2")}>2</span>
      <span onClick={() => display("3")}>3</span>
      <span onClick={() => display("0")}>0</span>
      <span onClick={() => display("00")}>00</span>
      <span onClick={() => display(".")}>.</span>
      <span className="num equal" onClick={() => calculate()}>
        =
      </span>
      
    </form>
  )
}

export default Calculator