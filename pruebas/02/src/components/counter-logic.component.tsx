import React from 'react';
import { useCounter } from '../hooks/useCounter';

// CounterLogicProps interface defines the props for the CounterLogic component.
interface CounterLogicProps {
    initialValue?: number;
    children: (props: { count: number, increment: () => void, decrement: () => void }) => React.ReactNode;
}

// CounterLogic component abstracts the logic for a counter.
// Ues the useCounter hook to provide counter logic
// via render props pattern to its children..
const CounterLogic: React.FC<CounterLogicProps> = ({ initialValue = 0, children }) => {
    const { count, increment, decrement } = useCounter(initialValue);
    return (
        <>
            {children({ count, increment, decrement })}
        </>
    );
};

export default CounterLogic;
