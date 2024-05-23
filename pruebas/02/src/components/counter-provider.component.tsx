import { ReactNode } from 'react';
import { useCounter } from '../hooks/useCounter';
import { CounterModel } from '../models/counter.model';

interface CounterProviderProps {
    render: (counter: CounterModel) => ReactNode
    initialValue?: number
}

export const CounterProvider = ({ render, initialValue = 0 }: CounterProviderProps) => {
    const counter = useCounter(initialValue);

    return <>
        {render(counter)}
    </>
};
