import React from 'react';
import { Col, Divider, Row } from 'antd';

import './App.css';
import { useCounter } from './hooks/useCounter';
import Counter from './components/counter.component';

// The App component serves as the main entry point of the application.
// It uses the custom hook useCounter to manage the state of two counters 
// and passes the appropriate props to the Counter components.
const App: React.FC = () => {
    console.info("App render");

    const counterOne = useCounter(0);  // Initializes the first counter with a value of 0.
    const counterTwo = useCounter(10); // Initializes the second counter with a value of 10.

    return (
        <Row justify="center" align="middle" gutter={40}>
            <Col>
                {/* The Counter component for counterOne, passing the value and increment/decrement handlers */}
                <Counter 
                    name="counter 1" 
                    value={counterOne.value} 
                    onIncrement={counterOne.increment} 
                    onDecrement={counterOne.decrement} 
                />
            </Col>
            <Divider orientation="center" />
            <Col>
                {/* The Counter component for counterTwo, passing the value and increment/decrement handlers */}
                <Counter 
                    name="counter 2" 
                    value={counterTwo.value} 
                    onIncrement={counterTwo.increment} 
                    onDecrement={counterTwo.decrement} 
                />
            </Col>
        </Row>
    );
};

export default App;
