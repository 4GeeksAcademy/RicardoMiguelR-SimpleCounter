import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const SecondsCounter = (props) => {

    return (
        <>
            <div className="simple-counter mt-4 mx-5">
                <div className="icon-clock">
                    <img src="https://phoneky.co.uk/thumbs/screensavers/down/babes/neonclock_lwu3p17f.gif" height='160px' width='130px' />
                </div>
                <div className="seconds4">{props.counter1 % 10}</div>
                <div className="seconds3">{props.counter2 % 10}</div>
                <div className="seconds2">{props.counter3 % 10}</div>
                <div className="seconds1">{props.counter4 % 10}</div>
            </div>
        </>
    );
};

    SecondsCounter.propTypes = {
        counter1: PropTypes.number,
        counter2: PropTypes.number,
        counter3: PropTypes.number,
        counter4: PropTypes.number
    };
    
    function startCounter () {
        let counter = 0;
            setInterval(function(){
                const seconds1 = Math.floor(counter/1000);
                const seconds2 = Math.floor(counter/100);
                const seconds3 = Math.floor(counter/10);
                const seconds4 = Math.floor(counter/1);
                counter++;
                ReactDOM.render(<SecondsCounter counter1={seconds1} counter2={seconds2} counter3={seconds3} counter4={seconds4} />, document.querySelector('#app'));
            }, 1000)
    };

    startCounter()
export default SecondsCounter;