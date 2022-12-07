import Produtos from "../Produtos/Produtos.json"
import CardProduto from "../Componentes/CardProduto"
import { Main } from "./TelaProdutos.styled"

function TelaProdutos (props) {
    
    const { adicionarAoCarrinho, buscaNome } = props

    const buscarPeloNome = () => {
        return Produtos.filter(
            (produto) => produto.name.toLowerCase().includes(buscaNome.toLowerCase())
        )
    }

    return (
        <Main>
            <h1>Produtos</h1>
            <hr/>
            {
                buscarPeloNome()
                .map((produto) => (
                    <CardProduto
                        produto={produto}
                        adicionarAoCarrinho={adicionarAoCarrinho}
                        key={produto.id}
                        estaNaTelaProdutos={true}
                    />
                ))
            }
        </Main>
    )
}

export default TelaProdutos