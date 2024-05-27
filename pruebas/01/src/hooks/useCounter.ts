import { useState, useCallback } from 'react';

// Defining the return type for the useCounter hook
interface UseCounter {
    value: number;
    increment: () => void;
    decrement: () => void;
}

// The useCounter hook manages the state and logic for a counter component.
// It initializes the counter's value and provides increment and decrement functions.
export const useCounter = (initialValue: number = 0): UseCounter => {
    const [value, setValue] = useState<number>(initialValue);

    // The increment function increases the counter's value by 1.
    const increment = useCallback(() => {
        setValue((prev) => prev + 1);
    }, []);

    // The decrement function decreases the counter's value by 1.
    const decrement = useCallback(() => {
        setValue((prev) => prev - 1);
    }, []);

    return { value, increment, decrement };
};
