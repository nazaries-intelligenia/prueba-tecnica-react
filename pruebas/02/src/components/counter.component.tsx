import { Col, Row } from "antd";
import { useState } from "react";

export const Counter = () => {
    const [count, setCount] = useState(0)

    const handleIncrement = () => {
        setCount(prev => prev + 1)
    }

    const handleDecrement = () => {
        setCount(prev => prev - 1)
    }

    return (
        <Row gutter={16}>
            <Col>
                <button onClick={handleDecrement}>Decrement</button>
            </Col>
            <Col>
                <span>{count}</span>
            </Col>

            <Col>
                <button onClick={handleIncrement}>Increment</button>
            </Col>
        </Row>
    )
}
