import React from "react";
import { BarraFiltros } from "./styles";

function AsideFiltros(props) {
    
    const onChangeValorMin = (e) => {
        props.setFiltroValorMin(e.target.value)
    }

    const onChangeValorMax = (e) => {
        props.setFiltroValorMax(e.target.value)
    }

    const onChangeBuscaNome = (e) => {
        props.setBuscaNome(e.target.value)
    }

    return(
        <BarraFiltros>
            <h3>Filtros</h3>
            <br/>
            <label>Valor Mínimo:
            <input 
                id="valorMinimo" 
                type="number" 
                placeholder="R$"
                value={props.filtroValorMin}
                onChange={onChangeValorMin}
            ></input>
            </label>
            <br/>
            <br/>
            <label>Valor Máximo
            <input 
                id="valorMaximo"
                type="number" 
                placeholder="R$"
                value={props.filtroValorMax}
                onChange={onChangeValorMax}
            ></input>
            </label>
            <br/>
            <br/>
            <label>Busca por nome:
            <input 
                id="buscaNome" 
                type="text" 
                placeholder="Produto"
                value={props.buscaNome}
                onChange={onChangeBuscaNome}
            ></input>
            </label>
        </BarraFiltros>        
    )
}

export default AsideFiltros