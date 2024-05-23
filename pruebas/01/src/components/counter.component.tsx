import { Col, Row } from "antd";

export const Counter = (props: { name: string, onChange: (newValue: number) => void, value: number }) => {
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
