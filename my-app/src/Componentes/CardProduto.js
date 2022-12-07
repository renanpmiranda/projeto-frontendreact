import styled from "styled-components"

const Card = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    align-items: center;
    padding-bottom: 10px;
    gap: 7px;
    max-height: 340px;
`

const Image = styled.img`
    height: 250px;
    width: 250px;   
`

const AddToCartButton = styled.button`
    border: 1px solid black;
    width: fit-content;
    cursor: pointer;    
`

function CardProduto (props) {

    const {produto, adicionarAoCarrinho, estaNaTelaProdutos, estaNaTelaCarrinho, aumentarQuantidadeNoCarrinho, diminuirQuantidadeNoCarrinho, deletarDoCarrinho} = props

    return (
        <Card>
            <Image src={produto.imageUrl}></Image>
            <p>{produto.name}</p>
            <p>${produto.value}</p>      
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
                estaNaTelaProdutos &&
                <button
                    onClick={() => adicionarAoCarrinho(produto)}
                >
                    Adicionar ao Carrinho
                </button>
            }     
            {
                estaNaTelaCarrinho &&
                <span>Quantidade: {produto.quantidade}</span>
            }
            {
                estaNaTelaCarrinho && 
                <button
                    onClick={() => deletarDoCarrinho(produto)}
                >
                    X
                </button>
            }
        </Card>
    )
}

export default CardProduto