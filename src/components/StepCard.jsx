const StepCard = ({ stepNumber, text }) => {
    return (
        <div className="bg-white border-l-4 border-cherry p-4 rounded-md shadow-md mb-4">
            <h3 className="font-semibold text-cherry">Step {stepNumber}</h3>
            <p>{text}</p>
        </div>
    )
}

export default StepCard
