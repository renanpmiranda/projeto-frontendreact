import { useState } from "react";
import TelaProdutos from "./Telas/TelaProdutos.js"
import TelaCarrinho from "./Telas/TelaCarrinho.js"
import Header from "./Componentes/Header"

function App() {

  const [ telaAtiva, setTelaAtiva ] = useState("TelaProdutos")
  
  const [ carrinho, setCarrinho ] = useState([])

  const [ buscaNome, setBuscaNome ] = useState("")

  const [ buscaOrdenado, setBuscaOrdenado ] = useState("")

  const [ buscaTipo, setBuscaTipo ] = useState("")

  const [valorMin, setValorMin] = useState(0)

  const [valorMax, setValorMax] = useState(50000)

  const irParaTelaDeProdutos = () => {
    setTelaAtiva("TelaProdutos")
  }

  const irParaCarrinho = () => {
    setTelaAtiva("TelaCarrinho")
  }

  const adicionarAoCarrinho = (produtoAdicionar) => {
    const novoCarrinho = [...carrinho]

    const produtoEncontrado = novoCarrinho.find(
      (produtoNoCarrinho) => produtoNoCarrinho.id === produtoAdicionar.id
    )

    if(!produtoEncontrado){
      const novoProduto = {...produtoAdicionar, quantidade:1}
      novoCarrinho.push(novoProduto)
    } else {
      produtoEncontrado.quantidade++
    }

    setCarrinho(novoCarrinho)
  }

  const aumentarQuantidadeNoCarrinho = (produtoAumentar) => {
    const novoCarrinho = [...carrinho]

    const produtoEncontrado = novoCarrinho.find(
      (produtoNoCarrinho) => produtoNoCarrinho.id === produtoAumentar.id
    )

    produtoEncontrado.quantidade++

    setCarrinho(novoCarrinho)
  }
  
  const diminuirQuantidadeNoCarrinho = (produtoDiminuir) => {
    const novoCarrinho = [...carrinho]

    const produtoEncontrado = novoCarrinho.find(
      (produtoNoCarrinho) => produtoNoCarrinho.id === produtoDiminuir.id
    )

    produtoEncontrado.quantidade--

    setCarrinho(novoCarrinho)
  }

  const deletarDoCarrinho = (produtoDeletar) => {
    const novoCarrinho = [...carrinho]

    const indiceEncontrado = novoCarrinho.findIndex(
        (produtoNoCarrinho) => produtoNoCarrinho.id === produtoDeletar.id
    )

    novoCarrinho.splice(indiceEncontrado, 1)
    setCarrinho(novoCarrinho)
  }

  const onChangeBuscaNome = (e) => {
    setBuscaNome(e.target.value)
  }

  const onChangeOrdenado = (e) => {
    setBuscaOrdenado(e.target.value)
  }

  const onChangeValorMin = (e) => {
    setValorMin(e.target.value)
  }

  const onChangeValorMax = (e) => {
    setValorMax(e.target.value)
  }

  const renderizarTela = () => {
    switch (telaAtiva) {
      case "TelaProdutos":
        return (
          <TelaProdutos
            adicionarAoCarrinho={adicionarAoCarrinho}
            buscaNome={buscaNome}
            valorMin={valorMin}
            valorMax={valorMax}
            buscaOrdenado={buscaOrdenado}
            onChangeOrdenado={onChangeOrdenado}
          />)
      case "TelaCarrinho":
        return (
          <TelaCarrinho
            carrinho={carrinho}
            aumentarQuantidadeNoCarrinho={aumentarQuantidadeNoCarrinho}
            diminuirQuantidadeNoCarrinho={diminuirQuantidadeNoCarrinho}
            deletarDoCarrinho={deletarDoCarrinho}          
          />)
      default:
        return <div>Tela não encontrada!</div>
    }
  }

  return (
    <>
      <Header
        irParaTelaDeProdutos={irParaTelaDeProdutos}
        irParaCarrinho={irParaCarrinho}
        itensNoCarrinho={carrinho.length}
        buscaNome={buscaNome}
        onChangeBuscaNome={onChangeBuscaNome}        
        valorMin={valorMin}
        onChangeValorMin={onChangeValorMin}
        valorMax={valorMax}
        onChangeValorMax={onChangeValorMax}
      />
      {renderizarTela()}
    </>
  )
}

export default App;
