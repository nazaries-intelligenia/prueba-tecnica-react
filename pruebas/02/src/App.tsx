import './App.css'
import { Counter } from "./components/counter.component.tsx";
import { Col, Row } from "antd";
import { FancyCounter } from "./components/fancy-counter.component.tsx";

function App() {

    return (
        <Row gutter={[ 16, 64 ]} >
            <Col span={24}>
                <Row justify={"center"}>
                    <Col>
                        <Counter/>
                    </Col>
                </Row>
            </Col>
            <Col span={24}>
                <Row justify={"center"}>
                    <Col >
                        <FancyCounter/>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default App
