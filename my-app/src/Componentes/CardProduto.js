import styled from "styled-components"

const Card = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    align-items: center;   
    height: 370px;
    width: 250px;
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
            <p>{produto.name}</p>
            <p>${produto.value}</p> 
            <ContainerBotoes>   
            {
                estaNaTelaCarrinho &&
                <span>Quantidade: {produto.quantidade}</span>
            }  
            {
                estaNaTelaCarrinho && produto.quantidade > 1
                && <button
                    onClick={() => diminuirQuantidadeNoCarrinho(produto)}
                >
                    -
                </button>
            }
            {
                estaNaTelaCarrinho &&
                <button
                    onClick={() => aumentarQuantidadeNoCarrinho(produto)}
                >
                    +   
                </button>
            }           
            {
                estaNaTelaCarrinho && 
                <button
                    onClick={() => deletarDoCarrinho(produto)}
                >
                    X
                </button>
            }
            </ContainerBotoes>
            {
                estaNaTelaProdutos &&
                <button
                    onClick={() => adicionarAoCarrinho(produto)}
                >
                    Adicionar ao Carrinho
                </button>
            } 
        </Card>
    )
}

export default CardProduto