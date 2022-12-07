import { Heading, Text, Input, Stack, Button } from "@chakra-ui/react"
import styled from "styled-components"

const ButtonContainer = styled.div`
    display: flex;
    gap: 10px;
`

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
            <Heading color="blue">The Lunar Shop</Heading>
            <Text>Seja bem vindo à loja de artigos espaciais mais famosa da galáxia!</Text>
            <br/>
            <ButtonContainer>
                <Button onClick={irParaTelaDeProdutos} colorScheme="blue">
                    Produtos
                </Button>
                
                <Button onClick={irParaCarrinho} colorScheme="blue">
                    Carrinho                    
                </Button>
                {
                    itensNoCarrinho > 0 
                    && <span>Itens no Carrinho: {itensNoCarrinho}</span>
                }                
            </ButtonContainer>
            <br/>
            <Stack>
                <Text fontSize='5x1'>
                    Valor mínimo:
                    {" "}
                    <Input 
                        size="xs"
                        width="auto" 
                        placeholder="$"                                  
                        value={valorMin}
                        onChange={onChangeValorMin}
                        type="number"
                    />    
                </Text>            
            </Stack>
            <br/>
            <Stack>
                <label>
                    Valor máximo:
                    {" "}
                <Input
                    size="xs" 
                    width="auto"
                    placeholder="$"                                  
                    value={valorMax}
                    onChange={onChangeValorMax}
                    type="number"
                />    
                </label>            
            </Stack>
            <br/>
            <div>
                <label>
                    Buscar pelo nome:
                    {" "}
                <Input
                    size="xs"
                    width="auto" 
                    placeholder="Digite aqui"                                  
                    value={buscaNome}
                    onChange={onChangeBuscaNome}
                    type="text"
                />    
                </label>            
            </div>                   
        </>
    )

}

export default Header