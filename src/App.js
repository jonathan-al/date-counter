import { useState } from "react"

const App = () => {
  const [count, setCount] = useState(0)
  const [step, setStep] = useState(1)

  const varDate = new Date()
  console.log(`${varDate.getDate()} + ${count}`)
  varDate.setDate(varDate.getDate() + count)

  return (
    <center>
      <p>
        <button onClick={() => setStep((s) => s - 1)}>-</button>
        Step:{step}
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </p>
      <p>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        Count:{count}
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
      </p>
    </center>
  )
}

export default App
