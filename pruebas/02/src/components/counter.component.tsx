import React from "react";
import { Col, Row } from "antd";

interface CounterProps {
    count: number;
    increment: () => void;
    decrement: () => void;
}

// Counter component only focuses on UI rendering.
// It receives the count, increment, and decrement logic through props.
const Counter: React.FC<CounterProps> = ({ count, increment, decrement }) => {
    return (
        <Row gutter={16}>
            <Col>
                <button onClick={decrement}>Decrement</button>
            </Col>
            <Col>
                <span>{count}</span>
            </Col>
            <Col>
                <button onClick={increment}>Increment</button>
            </Col>
        </Row>
    );
};

export default Counter;
