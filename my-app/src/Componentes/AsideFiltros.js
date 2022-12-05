import styled from "styled-components";

const ContainerFiltros = styled.div`
    display: flex;
    flex-direction: column;
    width: 20%;
    height: 100vh;
    gap: 15px;
    border: 1px solid black;
    padding: 15px;
`

function AsideFiltros(props) {    

    const { valorMin, onChangeValorMin, valorMax, onChangeValorMax , buscaNome, onChangeBuscaNome} = props

    return(
        <ContainerFiltros>
            <h1>Filtros</h1>
                <label>Valor Mínimo:
                    <br/>
                    <input type={"number"} placeholder="R$" value={valorMin} onChange={onChangeValorMin}/>
                </label>
                <label>Valor Máximo:
                    <br/>
                    <input type={"number"} placeholder="R$" value={valorMax} onChange={onChangeValorMax}/>
                </label>
                <label>Busca por nome:
                    <br/>
                    <input type={"text"} placeholder="Digite aqui" value={buscaNome} onChange={onChangeBuscaNome}/>
                </label>                
        </ContainerFiltros>
    )
}

export default AsideFiltros;