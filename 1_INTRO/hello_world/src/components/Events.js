const Events = () => {

    const renderSomething = (x) => {
        if (x) {

            return <h1>Renderizando isso!</h1>
        } else {

            return <h1>Também pode renderizar!</h1>
        }
    }

    const cliqueAqui = (e) => {
        console.log(e);
        console.log('clicado');
    }

    return (
        <div>
            <div>
                <button onClick={cliqueAqui}>Clieque aqui</button>
            </div>
            <div>
                <button onClick={() => console.log("Clicou!")}>Clique aqui também</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    )
}

export default Events;