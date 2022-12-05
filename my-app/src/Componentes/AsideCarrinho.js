import styled from "styled-components";

const ContainerCarrinho = styled.div`
    display: flex;
    flex-direction: column;
    width: 20%;
    border: 1px solid black;
    height: 100vh;
    padding: 15px;
`

function AsideCarrinho() {
    return(
        <ContainerCarrinho>
            <h1>Carrinho</h1>
        </ContainerCarrinho>
    )
}

export default AsideCarrinho