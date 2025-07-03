const ExplanationBox = ({ title, children }) => {
    return (
        <div className="bg-white border-l-4 border-darkpink p-4 rounded-md shadow-md my-4">
            <h3 className="font-bold text-darkpink mb-2">{title}</h3>
            <div>{children}</div>
        </div>
    )
}

export default ExplanationBox
