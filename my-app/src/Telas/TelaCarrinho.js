import CardProduto from "../Componentes/CardProduto";
import { Main } from "./TelaCarrinho.styled"

function TelaCarrinho(props) {

    const {carrinho, aumentarQuantidadeNoCarrinho, diminuirQuantidadeNoCarrinho, deletarDoCarrinho} = props

    const valorTotal = carrinho.reduce(
        (acc, produto) => produto.value * produto.quantidade + acc,
        0
    )

    return (
        <Main>
            <h1>Carrinho</h1>
            <hr/>
            {carrinho.map((produto) => {
                <CardProduto
                    produto={produto}
                    key={produto.id}
                    estaNaTelaCarrinho={true}
                    aumentarQuantidadeNoCarrinho={aumentarQuantidadeNoCarrinho}
                    diminuirQuantidadeNoCarrinho={diminuirQuantidadeNoCarrinho}
                    deletarDoCarrinho={deletarDoCarrinho}                
                />
            })}
        </Main>
    )
}

export default TelaCarrinho