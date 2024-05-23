import { useState } from "react";
import { Col, Divider, Row } from "antd";
import "./App.css";
import { Counter } from "./components/counter.component.tsx";

export const App = () => {
    console.info("App render")

    const [ valueOne, setValueOne ] = useState(0);
    const handleChangeOne = (newValue: number) => {
        setValueOne(newValue);
    }

    const [ valueTwo, setValueTwo ] = useState(10);
    const handleChangeTwo = (newValue: number) => {
        setValueTwo(newValue);
    }


    return (
        <Row justify={"center"} align={"middle"} gutter={40}>
            <Col>
                <Counter name={"counter 1"} value={valueOne} onChange={handleChangeOne}/>
            </Col>
            <Divider orientation={"center"}/>
            <Col>
                <Counter name={"counter 2"} value={valueTwo} onChange={handleChangeTwo}/>
            </Col>
        </Row>
    );
}
