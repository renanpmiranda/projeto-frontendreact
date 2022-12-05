import AsideFiltros from './Componentes/AsideFiltros';
import PaginaProdutos from './Componentes/PaginaProdutos';
import AsideCarrinho from './Componentes/AsideCarrinho';
import { GlobalStyle , Container} from './styles';
import { useState } from 'react';

function App() {
  
    const [valorMin, setValorMin] = useState(0)
    const [valorMax, setValorMax] = useState(50000)
    const [buscaNome, setBuscaNome] = useState("")

    const onChangeValorMin = (e) => {
        setValorMin(e.target.value)
    }

    const onChangeValorMax = (e) => {
        setValorMax(e.target.value)
    }

    const onChangeBuscaNome = (e) => {
        setBuscaNome(e.target.value)
    }
  
  return (
    <>
      <GlobalStyle/> 
        <Container>     
          <AsideFiltros 
          valorMin={valorMin}          
          onChangeValorMin={onChangeValorMin}
          valorMax={valorMax}          
          onChangeValorMax={onChangeValorMax}
          buscaNome={buscaNome}               
          onChangeBuscaNome={onChangeBuscaNome}          
          />
          <PaginaProdutos
            valorMin={valorMin}
            valorMax={valorMax}
            buscaNome={buscaNome}/>
          <AsideCarrinho/>
      </Container>
    </>
  );
}

export default App;
