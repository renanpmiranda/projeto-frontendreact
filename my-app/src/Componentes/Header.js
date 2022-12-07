function Header(props) {
    const {
        irParaTelaDeProdutos,
        irParaCarrinho,
        itensNoCarrinho,
        buscaNome,
        onChangeBuscaNome,        
        valorMin,
        onChangeValorMin,
        valorMax,
        onChangeValorMax
    } = props

    return (
        <>
            <h1>Shop</h1>
            <div>
                <label>
                    Valor mínimo:
                    {" "}
                <input 
                    placeholder="$"                                  
                    value={valorMin}
                    onChange={onChangeValorMin}
                />    
                </label>            
            </div>
            <br/>
            <div>
                <label>
                    Valor máximo:
                    {" "}
                <input 
                    placeholder="$"                                  
                    value={valorMax}
                    onChange={onChangeValorMax}
                />    
                </label>            
            </div>
            <br/>
            <div>
                <label>
                    Buscar pelo nome:
                    {" "}
                <input 
                    placeholder="Digite aqui"                                  
                    value={buscaNome}
                    onChange={onChangeBuscaNome}
                />    
                </label>            
            </div>
            <br/>
            <div>
                <button onClick={irParaTelaDeProdutos}>
                    Produtos
                </button>
                
                <button onClick={irParaCarrinho}>
                    Carrinho                    
                </button>
                {
                    itensNoCarrinho > 0 
                    && <span>Itens no Carrinho: {itensNoCarrinho}</span>
                }                
            </div>            
        </>
    )

}

export default Header