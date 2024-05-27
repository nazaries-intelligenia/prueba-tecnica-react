import React from 'react';
import { Col, Row } from 'antd';
import './App.css';
import CounterLogic from './components/counter-logic.component';
import Counter from './components/counter.component';
import FancyCounter from './components/fancy-counter.component';

// App component is the main entry point of the application.
// It integrates the CounterLogic component to provide counter logic to Counter and FancyCounter components.
const App: React.FC = () => {
    console.info("App render");

    return (
        <Row gutter={[16, 64]}>
            <Col span={24}>
                <Row justify="center">
                    <Col>
                        {/* Using CounterLogic to provide counter logic to Counter */}
                        <CounterLogic initialValue={0}>
                            {({ count, increment, decrement }) => (
                                <Counter count={count} increment={increment} decrement={decrement} />
                            )}
                        </CounterLogic>
                    </Col>
                </Row>
            </Col>
            <Col span={24}>
                <Row justify="center">
                    <Col>
                        {/* Using CounterLogic to provide counter logic to FancyCounter */}
                        <CounterLogic initialValue={10}>
                            {({ count, increment, decrement }) => (
                                <FancyCounter count={count} increment={increment} decrement={decrement} />
                            )}
                        </CounterLogic>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

export default App;
