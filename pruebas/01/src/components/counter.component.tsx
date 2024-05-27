import React from "react";
import { Col, Row } from "antd";


// The Counter component is memoized using React.memo to prevent unnecessary re-renders.
// It receives props to display its current value and to handle increment/decrement actions.
// The component displays a value and two buttons to increment and decrement the value.
interface CounterProps {
    name: string;
    value: number;
    onIncrement: () => void;
    onDecrement: () => void;
}

const Counter: React.FC<CounterProps> = React.memo(({ name, value, onIncrement, onDecrement }) => {
    console.info("render counter " + name);

    return (
        <Row gutter={16}>
            <Col>
                {/* Button to decrement the value */}
                <button onClick={onDecrement}>Decrement</button>
            </Col>
            <Col>
                {/* Display the value */}
                <span>{value}</span>
            </Col>
            <Col>
                {/* Button to increment the value */}
                <button onClick={onIncrement}>Increment</button>
            </Col>
        </Row>
    );
});

export default Counter;
