import styled from "styled-components"
import Button from "../UI/Button"
import { useContext, useReducer } from "react"
import { CartContext } from "../store/CartContext"

const inputStateReducer = (state, action) => {
    console.log(state);
    if (action.type === AMOUNT) {
        return {
            ...state,
            inputState: action.inputState
        }
    }
    return state
}
const AMOUNT = "AMOUNT"
const MealsItem = ({ price, title, description, id, }) => {
    const context = useContext(CartContext)
    const [inputState, dispatchInputState] = useReducer(inputStateReducer, { inputState: 1 })
    console.log(inputState);
    function getInputValue(e) {
        dispatchInputState({ type: AMOUNT, inputState: e.target.value })
    }
    function addItem(e) {
        e.preventDefault()
        const data = {
            title: title,
            description: description,
            price: price,
            amount: +inputState.inputState,
            id: id
        }
        context.addItem(data)
    }
    return (
        <Container style={{ marginTop: id === 1 ? '16px' : '0px' }}>
            <TitleContainer>
                <Title >{title}</Title>
                <Description>{description}</Description>
                <Price>${price}</Price>
            </TitleContainer>
            <Form>
                <InputContainer>
                    <label htmlFor="amount">Amount</label>
                    <input onChange={getInputValue} name="amount" type="number" value={inputState.inputState} />
                </InputContainer>

                <Button circle={true} buttonState={true} plusState={true} onClick={addItem}>Add</Button>
            </Form>
        </Container>
    )
}
export default MealsItem
const Container = styled.li`
 display: flex;
 justify-content: space-between;
 list-style: none;
`
const TitleContainer = styled.div`
 display: flex;
 flex-direction: column;
 align-items: flex-start;

`
const Title = styled.h3`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    line-height: 27px;
    margin: 0;
    color: #222222;
    margin-bottom: 4px;
    margin-top: 24px;
`
const Description = styled.p`
font-family: 'Poppins';
font-style: italic;
font-weight: 400;
line-height: 24px;
color: #222222;
margin: 0;
margin-bottom:4px ;

`
const Price = styled.p`
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 30px;
color: #AD5502;
margin: 0;
margin-bottom: 20px;
`
const InputContainer = styled.div`
display: flex;
`
const Form = styled.form`
margin-top: 24px;
display: flex;
flex-direction: column;
align-items: flex-end;
label {
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 27px;
color: #222222;
margin-right: 20px;
}
input {
width: 44px;
height: 29px;
border: 1px solid #D6D6D6;
border-radius: 6px;
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
color: #222222;
padding: 0;
padding-left: 12px;
margin-bottom: 12px;
}
`