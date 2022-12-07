import styled from "styled-components"
import { Heading, Button } from "@chakra-ui/react"

const Card = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    align-items: center;   
    height: 370px;
    width: 250px;
    gap: 10px;
`

const Image = styled.img`
    height: 220px;
    width: 250px;   
`

const ContainerBotoes = styled.div`
    display: flex;
    gap: 10px;
`

function CardProduto (props) {

    const {produto, adicionarAoCarrinho, estaNaTelaProdutos, estaNaTelaCarrinho, aumentarQuantidadeNoCarrinho, diminuirQuantidadeNoCarrinho, deletarDoCarrinho} = props

    return (
        <Card>
            <Image src={produto.imageUrl}></Image>
            <Heading size="sm">{produto.name}</Heading>
            <p>$ {produto.value},00</p> 
            <ContainerBotoes>   
            {
                estaNaTelaCarrinho &&
                <span>Quantidade: {produto.quantidade}</span>
            }  
            {
                estaNaTelaCarrinho && produto.quantidade > 1
                && <Button
                    onClick={() => diminuirQuantidadeNoCarrinho(produto)}
                >
                    -
                </Button>
            }
            {
                estaNaTelaCarrinho &&
                <Button
                    onClick={() => aumentarQuantidadeNoCarrinho(produto)}
                >
                    +   
                </Button>
            }           
            {
                estaNaTelaCarrinho && 
                <Button
                    onClick={() => deletarDoCarrinho(produto)}
                >
                    X
                </Button>
            }
            </ContainerBotoes>
            {
                estaNaTelaProdutos &&
                <Button
                    onClick={() => adicionarAoCarrinho(produto)}
                >
                    Adicionar ao Carrinho
                </Button>
            } 
        </Card>
    )
}

export default CardProduto