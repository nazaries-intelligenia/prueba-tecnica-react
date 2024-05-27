import { useState, useCallback } from 'react';

// useCounter hook abstracts the logic for a counter.
// This hook can be reused by any component that requires counter functionality.
// It returns the current count value and two functions to increment and decrement the count.
export const useCounter = (initialValue: number = 0) => {
    const [count, setCount] = useState(initialValue);

    // increment function increments the count by 1
    const increment = useCallback(() => {
        setCount(prev => prev + 1);
    }, []);

    //d ecrement function decrements the count by 1
    const decrement = useCallback(() => {
        setCount(prev => prev - 1);
    }, []);

    return { count, increment, decrement };
};
