import Produtos from "./Produtos/Produtos.json";
import CardProduto from "./CardProduto";
import styled from "styled-components";

const ContainerProdutos = styled.div`
    display: flex;
    padding: 10px;
    width: 60%;    
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 15px;
`    

function PaginaProdutos(props) {   

    const { buscaNome, valorMin, valorMax } = props

    const filtrarPorNome = () => {
        return Produtos.filter(
            (produto) => produto.name.toLowerCase().includes(props.buscaNome.toLowerCase())
        )
    }

    const filtrarPorValor = () => {
        return Produtos.filter(
            (produto) => produto.value >= valorMin && produto.value <= valorMax
        )
    }

    return(
        <ContainerProdutos>
            {filtrarPorNome() && filtrarPorValor()
             .map((produto) => {
                return <CardProduto 
                key={produto.name}
                id={produto.id}
                name={produto.name}
                imageUrl={produto.imageUrl}
                value={produto.value}
            />
            })}
        </ContainerProdutos>             
    )
}

export default PaginaProdutos