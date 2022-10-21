import React from "react";
import { BarraFiltros } from "./styles";

function AsideFiltros() {   

    return(
        <BarraFiltros>
            <h3>Filtros</h3>
            <br/>
            <label>Valor Mínimo:
            <input id="valorMinimo" type="number" placeholder="R$"></input>
            </label>
            <br/>
            <br/>
            <label>Valor Máximo
            <input type="number" placeholder="R$"></input>
            </label>
            <br/>
            <br/>
            <label>Busca por nome:
            <input type="text" placeholder="Produto"></input>
            </label>
        </BarraFiltros>        
    )
}

export default AsideFiltros