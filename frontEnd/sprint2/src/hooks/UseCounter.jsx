import { useState } from 'react'

const useCounter = (num) => {

    const [counter, setCounter] = useState({
        value:num
    })

    const handleSumar = () => {
        setCounter(counter + 1)
    }

    const handleRestar = () => {
        setCounter(counter - 1)
    }

    const handleReset = () => {
        setCounter(0)
    }

    return {
        counter,
        handleSumar,
        handleReset,
        handleRestar
    }
}

export default useCounter