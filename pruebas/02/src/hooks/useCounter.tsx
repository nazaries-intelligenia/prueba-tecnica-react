import { useState } from "react";
import { CounterModel } from "../models/counter.model";

export const useCounter = (initialValue = 0): CounterModel => {
    const [count, setCount] = useState(initialValue);

    const increment = () => setCount(prev => prev + 1);
    const decrement = () => setCount(prev => prev - 1);

    return { count, increment, decrement };
};
