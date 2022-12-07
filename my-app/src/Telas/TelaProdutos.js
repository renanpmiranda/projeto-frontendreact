import Produtos from "../Produtos/Produtos.json"
import CardProduto from "../Componentes/CardProduto"
import styled from "styled-components"

const ContainerProdutos = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    row-gap:50px;
    column-gap: 25px;
`


function TelaProdutos (props) {
    
    const { adicionarAoCarrinho, buscaNome, buscaOrdenado, onChangeOrdenado, valorMin, valorMax } = props   

    return (
        <>
            <h1>Produtos</h1>
            <hr/>
            <a>Quantidade de produtos: {Produtos.length}</a>
            <span>
                <select value={buscaOrdenado} onChange={onChangeOrdenado}>
                    <option value="">Ordenar</option>
                    <option value="Crescente">Crescente</option>
                    <option value="Decrescente">Decrescente</option>
                </select>
            </span>
            <br/>
            <br/>            
            <ContainerProdutos>
                {Produtos
                    .filter((produto) => {
                        return produto.name.toLowerCase().includes(buscaNome.toLowerCase())
                    })
                    .filter((produto) => {
                        return produto.value >= valorMin && produto.value <= valorMax
                    })
                    .sort((a, b) => {
                        if(buscaOrdenado === "Crescente"){
                            return a.name < b.name ? -1 : 1
                        } else if(buscaOrdenado === "Decrescente"){
                            return a.name > b.name ? -1 : 1
                        }
                    })               
                    .map((produto) => (
                        <CardProduto
                            produto={produto}
                            adicionarAoCarrinho={adicionarAoCarrinho}
                            key={produto.id}
                            estaNaTelaProdutos={true}
                        />
                    ))
                }
            </ContainerProdutos>
        </>
    )
}

export default TelaProdutos