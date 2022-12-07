import Produtos from "../Produtos/Produtos.json"
import CardProduto from "../Componentes/CardProduto"
import styled from "styled-components"
import { Heading, Select } from "@chakra-ui/react"

const UpContainer = styled.div`
    display: flex;
    gap: 15px;
`
const ContainerProdutos = styled.div`
    display: flex;
    flex-wrap: wrap;
    row-gap:30px;
    justify-content: space-around;
`


function TelaProdutos (props) {
    
    const { adicionarAoCarrinho, buscaNome, buscaOrdenado, onChangeOrdenado, valorMin, valorMax } = props   

    return (
        <>            
            <Heading color="blue">Produtos</Heading>
                
                <UpContainer>
                    <hr/>
                    <br/>
                    <span>Quantidade de produtos: {Produtos.length}</span>
                    <span>
                        <Select value={buscaOrdenado} onChange={onChangeOrdenado} size="xs" width="100px">
                                <option value="">Ordenar</option>
                                <option value="Crescente">Crescente</option>
                                <option value="Decrescente">Decrescente</option>
                        </Select>
                    </span> 
                </UpContainer>           
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