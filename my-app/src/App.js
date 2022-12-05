import styled,{createGlobalStyle} from 'styled-components';
import { useState } from 'react';
import Produtos from "./Produtos/Produtos.json"
import AsideFiltros from './Componentes/AsideFiltros/AsideFiltros';
import AsideCarrinho from './Componentes/AsideCarrinho/AsideCarrinho';
import CardCompra from './Componentes/CardCompra/CardCompra';
import { PaginaPrincipal } from './styles';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`
const Container = styled.div`
  display: flex;  
`

function App() {  

  const [filtroValorMin, setFiltroValorMin] = useState("")
  const [filtroValorMax, setFiltroValorMax] = useState("")
  const [buscaNome, setBuscaNome] = useState("")

  return (
    <>
      <GlobalStyle/>
      <Container>
        <AsideFiltros 
          filtroValorMin={filtroValorMin}
          setFiltroValorMin={setFiltroValorMin}
          filtroValorMax={filtroValorMax}
          setFiltroValorMax={setFiltroValorMax}
          buscaNome={buscaNome}
          setBuscaNome={setBuscaNome}
        />
        <PaginaPrincipal>
          {Produtos.map((produto) => {
            return (
              <CardCompra
                key={produto.id}
                imagem={produto.imageUrl}
                nome={produto.name}
                valor={produto.value}
              />
            );
          })}
        </PaginaPrincipal>        
        <AsideCarrinho/>        
      </Container>  
    </>   
  );
}

export default App;
