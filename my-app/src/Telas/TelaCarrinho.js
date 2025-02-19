import CardProduto from "../Componentes/CardProduto"
import styled from "styled-components"
import { Heading } from "@chakra-ui/react"

const ContainerProdutos = styled.div`
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    row-gap:50px;
    column-gap: 25px;
`

function TelaCarrinho(props) {

    const {carrinho, aumentarQuantidadeNoCarrinho, diminuirQuantidadeNoCarrinho, deletarDoCarrinho} = props

    const valorTotal = carrinho.reduce(
        (acc, produto) => produto.value * produto.quantidade + acc,
        0
    )

    return (
        <>
            <Heading color={"blue"}>Carrinho</Heading>
                <hr/>
                <a>Valor total da compra: $ {valorTotal},00</a>
                <br/>
                <br/>
                <ContainerProdutos>
                    {carrinho.map((produto) => (
                        <CardProduto
                            produto={produto}
                            key={produto.id}
                            estaNaTelaCarrinho={true}
                            aumentarQuantidadeNoCarrinho={aumentarQuantidadeNoCarrinho}
                            diminuirQuantidadeNoCarrinho={diminuirQuantidadeNoCarrinho}
                            deletarDoCarrinho={deletarDoCarrinho}                
                        />
                    ))}    
                    </ContainerProdutos>
        </>
    )
}

export default TelaCarrinho