import { useState } from "react"

const ReactBasics = () => {
    const [name, setName] = useState("")
    const [names, setNames] = useState(["Sakura", "Hinata"])

    const handleAddName = () => {
        if (name.trim() === "") return
        setNames([...names, name]) // Spread operator
        setName("")
    }

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-darkpink">📚 Dasar React Lanjutan</h2>

            {/* Routing */}
            <div className="bg-white p-4 rounded shadow">
                <h3 className="text-lg font-semibold text-cherry mb-2">🔁 Routing</h3>
                <p>We can change between pages using <code>react-router-dom</code>.</p>
                <p className="mt-2 bg-pink-100 px-2 py-1 rounded">
                    For Example: <code>&lt;Link to="/setup"&gt;Setup&lt;/Link&gt;</code>
                </p>

            </div>

            {/* map */}
            <div className="bg-white p-4 rounded shadow">
                <h3 className="text-lg font-semibold text-cherry mb-2">🔁 map()</h3>
                <p>To show the data from lists:</p>
                <p className="mt-2 bg-pink-100 px-2 py-1 rounded">
                    Example: <code>
                        variabel.map()
                    </code>
                </p>
                <ul className="list-disc list-inside mt-2 text-pink-700">
                    {names.map((n, i) => (
                        <li key={i}>{n}</li>
                    ))}
                </ul>
            </div>

            {/* Spread */}
            <div className="bg-white p-4 rounded shadow">
                <h3 className="text-lg font-semibold text-cherry mb-2">📦 Spread Operator</h3>
                <p>
                    When we add new item to the list/array, we use: <br />
                    <p className="mt-2 bg-pink-100 px-2 py-1 rounded">
                        <code>setNames([...names, name])</code> so the previous datas don't dissapeared.
                    </p>

                </p>
            </div>

            {/* onChange + onClick */}
            <div className="bg-white p-4 rounded shadow">
                <h3 className="text-lg font-semibold text-cherry mb-2">✍️ onChange & 🖱️ onClick</h3>
                <p className="mt-2 bg-pink-100 px-2 py-1 rounded">
                    <code>onChange= (e) => setName(e.target.value) </code>
                </p>
                <p>Dont forget to put curly braces before (e) and after value</p>
                <input
                    type="text"
                    placeholder="Charcter Name"
                    className="border px-2 py-1 rounded mr-2"
                    value={name}
                    onChange={(e) => setName(e.target.value)} // onChange
                />
                <button
                    className="bg-cherry text-black px-3 py-1 rounded hover:bg-pink-500"
                    onClick={handleAddName} // onClick
                >
                    Add to List
                </button>
            </div>
        </div>
    )
}

export default ReactBasics
