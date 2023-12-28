import { useEffect, useState } from "react";
import "../src/index.css";

export default function Calculator() {
    const [inState, setInState] = useState([]);
    const [resState, setRState] = useState(0);
    [1, 2, 3, 4]
    useEffect(() => {
        // window.alert(inState);
        // for()
        const ob2 = [...inState];
        var result = 0;
        if (ob2.length >= 3) {
            if (ob2[1] === "*") {
                result = ob2[0] * ob2[2];
            }
            else if (ob2[1] === "/") {
                result = ob2[0] / ob2[2];
            }
            else if (ob2[1] === "+") {
                result = ob2[0] + ob2[2];
            }
            else if (ob2[1] === "-") {
                result = ob2[0] - ob2[2];
            }
        }
        setRState(result);
        // console.log(ob2[-1]);
        // const lastObject = ob2.pop();
        // if (lastObject == "/" || lastObject == "*" || lastObject == "+" || lastObject == "-") {
        //     window.alert("This is an expression!");
        // }

    }, [inState]);

    function addInput(val) {
        const obj1 = inState;
        obj1.push(val);
        setInState([...obj1]);
    }


    return (
        <>
            <div className="divf fdirc fullbg">
                <div className="divf fdirc calculator-div">
                    <div className="r1 inputS">
                        {inState.map((el) => {
                            return (
                                <span> {el} </span>
                            )
                        })}
                    </div>
                    <div className="r1 res1">Result: {resState}</div>
                    <div className="divf row">
                        <button onClick={() => { addInput(7) }}>7</button>
                        <button onClick={() => { addInput(8) }}>8</button>
                        <button onClick={() => { addInput(9) }}>9</button>
                        <button onClick={() => { addInput("*") }}>*</button>
                    </div>
                    <div className="divf row">
                        <button onClick={() => { addInput(4) }}>4</button>
                        <button onClick={() => { addInput(5) }}>5</button>
                        <button onClick={() => { addInput(6) }}>6</button>
                        <button onClick={() => { addInput("/") }}>/</button>
                    </div>
                    <div className="divf row">
                        <button onClick={() => { addInput(1) }}>1</button>
                        <button onClick={() => { addInput(2) }}>2</button>
                        <button onClick={() => { addInput(3) }}>3</button>
                        <button onClick={() => { addInput("+") }}>+</button>
                    </div>
                    <div className="divf row">
                        <button onClick={() => { addInput(0) }}>0</button>
                        <button>=</button>
                        <button onClick={() => { addInput("-") }}>-</button>
                        {/* <div>*</div> */}
                    </div>
                </div>
            </div>
        </>
    )


}