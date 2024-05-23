import * as React from "react";
import { Col, Row } from "antd";

const Counter = (props: { name: string, onChange: (newValue: number) => void, value: number }) => {
    console.info("render counter " + props.name)

    return (
        <Row gutter={16}>
            <Col>
                <button onClick={() => props.onChange(props.value - 1)}>Decrement</button>
            </Col>
            <Col>
                <span>{props.value}</span>
            </Col>

            <Col>
                <button onClick={() => props.onChange(props.value + 1)}>Increment</button>
            </Col>
        </Row>
    )
}

// We use React.memo, which is a higher-order component (HOC) that lets us optimize
// functional components. It functions by memoizing the render result of the component,
// so it won't re-render if the component gets the same props as previously
export default React.memo(Counter)
