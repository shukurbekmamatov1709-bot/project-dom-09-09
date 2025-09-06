
import styled from "styled-components";

interface ToggleButtonProps{
text: string;
onClick: ()=>void;

}


 const ToggleButton=(props:ToggleButtonProps)=>{


return(
    <div>
        <Button onClick={props.onClick}>{props.text}</Button>
    </div>
)
 }
 export default ToggleButton;


const Button = styled.button`
  padding: 8px 16px;
  margin: 12px 0;
  border: 2px solid #3b82f6;
  border-radius: 6px;
  background-color: #3b82f6;
  color: white;
  font-weight: bold;
  cursor: pointer;
`;