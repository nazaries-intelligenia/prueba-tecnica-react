import { useCallback, useState } from "react";
import { Col, Divider, Row } from "antd";
import "./App.css";
import Counter from "./components/counter.component.tsx";

export const App = () => {
    console.info("App render")

    // We apply useCallback  to memoize the handle change functions,
    // so when the parent re renders, it doesn't change the reference to the functions
    // avoiding re rendering Counter components after using React.memo
    const [ valueOne, setValueOne ] = useState(0);
    const memoizedHandleChangeOne = useCallback((newValue: number) => {
        setValueOne(newValue);
    }, [valueOne]);

    const [ valueTwo, setValueTwo ] = useState(10);
    const memoizedHandleChangeTwo = useCallback((newValue: number) => {
        setValueTwo(newValue);
    }, [valueTwo]);


    return (
        <Row justify={"center"} align={"middle"} gutter={40}>
            <Col>
                <Counter name={"counter 1"} value={valueOne} onChange={memoizedHandleChangeOne}/>
            </Col>
            <Divider orientation={"center"}/>
            <Col>
                <Counter name={"counter 2"} value={valueTwo} onChange={memoizedHandleChangeTwo}/>
            </Col>
        </Row>
    );
}
