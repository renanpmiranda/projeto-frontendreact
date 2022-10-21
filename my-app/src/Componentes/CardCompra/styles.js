import styled from "styled-components";

export const Card = styled.div`
  background-color: ${(props) => props.color};
  border: 1px solid black;
  margin: 16px;
  max-width: 17rem;
  text-align: center;
  border-radius: 10px;
  box-shadow: 10px 10px 30px #bdbdbd;
`;

export const Imagem = styled.img`
    width: 200px;
    height: 200px;
`

export const NomeProduto = styled.p`
    border-top: 2px solid black;
    padding: 0.5rem 0;
`
export const BotaoAdicionar = styled.button`
    padding: 0.5rem;
    margin: 16px;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    box-shadow: 0 6px 30px -10px #000000;
`