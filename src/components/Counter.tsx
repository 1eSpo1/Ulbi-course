import React, { useState } from 'react'
import classes from './Counter.module.scss'

function Counter() {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }

  return (

    <div className={classes.h12}>
        <h1>{count}</h1>
        <button onClick={increment}>Счетчик</button>
    </div>
  )
}

export default Counter