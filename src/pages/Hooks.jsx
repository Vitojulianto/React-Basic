import { useState } from "react"
import ExplanationBox from "../components/ExplanationBox"

const Hooks = () => {
    const [count, setCount] = useState(0)

    return (
        <div>
            <h2 className="text-2xl font-bold text-darkpink">🤖 useState in React</h2>

            <ExplanationBox title="Apa itu useState?">
                <p>
                    useState is a temporary memory in React / phainon thing haha.
                    Like number, name, status.
                    The flow is the initial value is stored in the setter and the setter give the value to the variable.
                    The second variabel is called the setter, The first variabel is just a normal variabel
                </p>
                <p className="mt-2 bg-pink-100 px-2 py-1 rounded">
                    Example: <code>const [count, setCount] = useState(0)</code>
                </p>
            </ExplanationBox>

            <ExplanationBox title="Analogy">
                <p>
                    Just imagine that <code>count</code> is how much you hate Flame Reaver <br />
                    The Initial Value is  0 (zero), then when you click <code>setCount</code>, the number increase
                </p>
            </ExplanationBox>

            <div className="bg-white p-4 rounded shadow text-center mt-4">
                <p className="text-lg mb-2">How much you hate Flame Reaver: <span className="font-bold text-cherry">{count}</span></p>
                <button
                    className="bg-cherry text-black px-4 py-2 rounded shadow hover:bg-pink-600"
                    onClick={() => setCount(count + 1)}
                >
                    Add
                </button>
            </div>
        </div>
    )
}

export default Hooks
