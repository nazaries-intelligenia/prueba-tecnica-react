import { Col, Row } from "antd";
import { CounterModel } from "../models/counter.model";
import { CounterProvider } from "./counter-provider.component";

export const Counter = () => {
    return (
        <CounterProvider
            render={({ count, increment, decrement }: CounterModel) => {
                return <Row gutter={16}>
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
            }}
        />
    )
}
