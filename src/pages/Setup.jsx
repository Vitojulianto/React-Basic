import StepCard from "../components/StepCard"

const Setup = () => {
    const steps = [
        "Make folder: Right Click → New Folder → name it whatever you want 'mydei best boy'",
        "Open terminal: type code .",
        "In VsCode: cltr + shift + ` .",
        "Type: npm create vite@latest mydei_bestboy -- --template react",
        "Choose: React and then JavaScript",
        "cd [folder-name] → npm install",
        "Type: npm run dev"
    ]

    return (
        <div>
            <h2 className="text-2xl font-bold text-darkpink mb-4">✨ Setup React Project</h2>
            {steps.map((text, index) => (
                <StepCard key={index} stepNumber={index + 1} text={text} />
            ))}
        </div>
    )
}

export default Setup
