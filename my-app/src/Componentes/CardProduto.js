import styled from "styled-components"

const Card = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    align-items: center;
    padding-bottom: 10px;
    gap: 7px;
    max-height: 340px;
`

const Image = styled.img`
    height: 250px;
    width: 250px;   
`

const AddToCartButton = styled.button`
    border: 1px solid black;
    width: fit-content;
    cursor: pointer;    
`

function CardProduto ({name, imageUrl, value}) {
    return (
        <Card>
            <Image src={imageUrl}></Image>
            <p>{name}</p>
            <p>${value}</p>
            <AddToCartButton>Adicionar ao carrinho</AddToCartButton>
        </Card>
    )
}

export default CardProduto