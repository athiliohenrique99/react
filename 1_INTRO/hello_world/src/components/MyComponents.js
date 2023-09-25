import './MyComponents.css';

const MyComponents = () => {
    return (
        <div>
            {/* CSS global */}
            <h1>Css de componente</h1>
            <p>Este é o parágrafo do componente</p>

            <p className="my-comp-paragraph">
                Este também é dp componente
            </p>
        </div>
    )
}

export default MyComponents