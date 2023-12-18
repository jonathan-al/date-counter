import { useState } from "react"

const App = () => {
  const [count, setCount] = useState(0)
  const [step, setStep] = useState(1)

  const varDate = new Date()
  console.log(`${varDate.getDate()} + ${count}`)
  varDate.setDate(varDate.getDate() + count)

  const handleReset = () => {
    setCount(0)
    setStep(1)
  }

  return (
    <center>
      <p>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
          // step="5"
        />
        {step}
      </p>
      <p>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => {
            setCount(Number(e.target.value))
          }}
        />
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </p>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
              ? `${count} days from today is `
              : `${count} days ago was `}
        </span>
        <span>{varDate.toLocaleDateString()}</span>

        <div>
          {count !== 0 || step !== 1 ? (
            <button
              onClick={() => {
                handleReset()
              }}
            >
              Reset
            </button>
          ) : null}
        </div>
      </p>
    </center>
  )
}

export default App
