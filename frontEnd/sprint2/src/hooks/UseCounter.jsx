import { useState } from 'react'

const useCounter = (value) => {
    //console.log(value);

    const [counter, setCounter] = useState(value)

    const handleSumar = () => {
        //console.log(counter);
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