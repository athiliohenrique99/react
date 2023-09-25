const TemplateExpressions = () => {

    const name = "Athilio";

    const data = {
        idade: "24",
        profissao: "Desenvolvedor"
    }

    return (
        <div>
            <h1>Olá {name}</h1>
            <p>Você atua como {data.profissao}</p>
            <p>{4 + 4}</p>
            <p>{console.log("Jsx React")}</p>
        </div>
    )
}

export default TemplateExpressions