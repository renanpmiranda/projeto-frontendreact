import styled,{createGlobalStyle} from 'styled-components';
import { useState } from 'react';
import AsideFiltros from './Componentes/AsideFiltros/AsideFiltros';
import AsideCarrinho from './Componentes/AsideCarrinho/AsideCarrinho';
import { PaginaPrincipal } from './styles';
import CardCompra from './Componentes/CardCompra/CardCompra';

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

  const [foguete, setFoguete] = useState({
    id:1,
    name: "Foguete da Missão Apollo 11",
    value: 10000.0,
    imageUrl:"https://http2.mlstatic.com/D_NQ_NP_930070-MLB32517753646_102019-O.webp"
  })

  const [satelite, setSatelite] = useState({
    id:2,
    name: "Satélite Vanguard-1",
    value: 7000.0,
    imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Vanguard_1.jpg/300px-Vanguard_1.jpg"
  })

  const [trajeAstronauta, setTrajeAstronauta] = useState({
    id:3,
    name: "Traje de Yuri Gagarin",
    value: 5000.0,
    imageUrl:"https://i.pinimg.com/originals/79/6c/14/796c14a8cd245b6ae8d2fe90ba21d4ac.jpg"
  })

  const [camisetaSistemaSolar, setCamisetaSistemaSolar] = useState({
    id:4,
    name: "Camiseta Sistema Solar",
    value: 50.0,
    imageUrl:"https://img.elo7.com.br/product/main/2E93D52/camiseta-infantil-t-nasa-sistema-solar-nasa-sistema-solar.jpg"
  })

  const [viagemMarte, setViagemMarte] = useState({
    id:5,
    name: "Pacote Viagem a Marte",
    value: 50000.0,
    imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3SKBUnBygBIPiCY-1wn0u_mhW3_iV6Jk_YFK_y_bJrj0DqSK4FNvCMEx_mNYlwSVvoro&usqp=CAU"
  })

  const [rochaLunar, setRochaLunar] = useState({
    id:6,
    name: "Rocha Lunar",
    value: 2000.0,
    imageUrl:"https://t.ctcdn.com.br/efra-C_LAOLkR1OU2unO-T1BSL0=/27x24:522x477/i219728.jpeg"
  })

  const [legoEstacaoEspacial, setLegoEstacaoEspacial] = useState({
    id:7,
    name: "Lego Estação Espacial Int.",
    value: 800.0,
    imageUrl:"https://m.media-amazon.com/images/I/91g71Jc3KcL._AC_SX679_.jpg"
  })

  const [milleniumFalcon, setMilleniumFalcon] = useState({
    id:8,
    name: "Nave Millenium Falcon",
    value: 35000.0,
    imageUrl:"https://rotadeferias.com.br/wp-content/uploads/2019/09/SWGE_WDW_MillenniumFalcon_0813ZR_0490MS.jpg"
  })

  const [xWing, setXWing] = useState({
    id:9,
    name: "Nave X-Wing Restaurada",
    value: 20000.0,
    imageUrl:"https://d2kspx2x29brck.cloudfront.net/img/iea/9lwjZ711wE/star-warss-mighty-x-wing-fighter-comes-to-life-in-russia.jpg"
  })

  return (
    <>
    <GlobalStyle/>
    <Container>
      <AsideFiltros/>
      <PaginaPrincipal>
      <CardCompra 
        nome={foguete.name} 
        valor={foguete.value} 
        imagem={foguete.imageUrl}/>
      <CardCompra 
        nome={satelite.name} 
        valor={satelite.value} 
        imagem={satelite.imageUrl}/>
      <CardCompra 
        nome={trajeAstronauta.name} 
        valor={trajeAstronauta.value} 
        imagem={trajeAstronauta.imageUrl}/>
      <CardCompra 
        nome={camisetaSistemaSolar.name} 
        valor={camisetaSistemaSolar.value} 
        imagem={camisetaSistemaSolar.imageUrl}/>
      <CardCompra 
        nome={viagemMarte.name} 
        valor={viagemMarte.value} 
        imagem={viagemMarte.imageUrl}/>
      <CardCompra 
        nome={rochaLunar.name} 
        valor={rochaLunar.value} 
        imagem={rochaLunar.imageUrl}/>     
      <CardCompra 
        nome={legoEstacaoEspacial.name} 
        valor={legoEstacaoEspacial.value} 
        imagem={legoEstacaoEspacial.imageUrl}/>
      <CardCompra 
        nome={milleniumFalcon.name} 
        valor={milleniumFalcon.value} 
        imagem={milleniumFalcon.imageUrl}/>
      <CardCompra 
        nome={xWing.name} 
        valor={xWing.value} 
        imagem={xWing.imageUrl}/>
      </PaginaPrincipal>        
      <AsideCarrinho/>        
    </Container>  
    </>   
  );
}

export default App;
