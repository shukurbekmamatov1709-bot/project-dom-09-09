import styled from "styled-components";

interface CardProps {
  image: string;
  email: string;
  title: string;

  buttonText: string;
}

const Card = (props: CardProps) => {
  return (
    <CardContainer>
      <CardImage src={props.image} alt={props.title} />
      <h2>{props.title}</h2>
      <p>{props.email}</p>

     <CardButton>{props.buttonText}</CardButton>
    </CardContainer>
  );
};

export default Card;

// Стиль для карточки
const CardContainer = styled.div`
 
  border-radius: 10px;
  padding: 20px;
  margin: 12px;
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #333333;
  color: #ffffff;
`;

// Стиль для круглой картинки
const CardImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 12px;
   border: 5px solid #3b82f6;  
`;
// для кнопки
const CardButton = styled.button`
  padding: 8px 16px;
  margin-top: 12px;
  border: none;
  border-radius: 6px;
  background-color: #3b82f6;  
  color: white;             
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2563eb; 
  }

  &:active {
    background-color: #1d4ed8; 
  }
`;