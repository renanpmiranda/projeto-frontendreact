import React from "react";
import {Card, Imagem, NomeProduto, BotaoAdicionar} from "./styles";
import AsideFiltros from "../AsideFiltros/AsideFiltros";

const CardCompra = (props) => {
    return(
        <Card>
            <Imagem src={props.imagem} alt={props.imagem}/>
            <NomeProduto>{props.nome}</NomeProduto>
            <p>R${props.valor}</p>

            <BotaoAdicionar>Adicionar ao Carrinho</BotaoAdicionar>
        </Card>
    )
}

export default CardCompra