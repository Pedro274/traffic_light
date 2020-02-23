import React, {useState, Fragment} from 'react';
import useInterval from './customHooks/useInterval';
import './App.css';

function App() {

    const [activeRed,
        setActiveRed] = useState('red');
    const [activeYellow,
        setActiveYellow] = useState('yellow');
    const [activeGreen,
        setActiveGreen] = useState('green');
    const [autoButton,
        setAutoButton] = useState(false)

    const handleClick = (color) => {
        if (color === 'red') {
            setActiveRed(`${activeRed} animationRed`)
            setActiveYellow('yellow')
            setActiveGreen('green')
        } else if (color === 'yellow') {
            setActiveRed('red')
            setActiveYellow(`${activeYellow} animationYellow`)
            setActiveGreen('green')
        } else {
            setActiveRed('red')
            setActiveYellow('yellow')
            setActiveGreen(`${activeGreen} animationGreen`)
        }
    }

    const handleToggleAuto = () => {
        setAutoButton(!autoButton)
    }

    useInterval(() => {
        if (autoButton) {
            if (activeRed === `red animationRed`) {
                setActiveRed('red')
                setActiveYellow(`yellow animationYellow`)
                setActiveGreen('green')
            } else if (activeYellow === `yellow animationYellow`) {
                setActiveRed('red')
                setActiveYellow('yellow')
                setActiveGreen(`green animationGreen`)
            } else {
                setActiveRed(`red animationRed`)
                setActiveYellow('yellow')
                setActiveGreen('green')
            }
        }
    }, 3000)

    return (
        <Fragment>
            <div className="trafficlight">
                <div className="protector"></div>
                <div className="protector"></div>
                <div className="protector"></div>
                <div className={activeRed} onClick={() => handleClick('red')}></div>
                <div className={activeYellow} onClick={() => handleClick('yellow')}></div>
                <div className={activeGreen} onClick={() => handleClick('green')}></div>
            </div>
            <div className="buttonContainer">
                <input type="checkbox" id="switch" onClick={handleToggleAuto}/>
                <label for="switch">Toggle</label>
            </div>
        </Fragment>
    );
}

export default App;
