import styled from "styled-components"
import MealsItem from "./MealsItem"
import { MealsArray } from '../utils/constants'

const Meals = () => {
    return (
        <MealsList>
            {MealsArray.map((el) => {
                return <MealsItem price={el.price} title={el.title} description={el.description} key={el.id} id={el.id} />
            })}
        </MealsList>
    )
}
export default Meals
const MealsList = styled.ul`
width: 959px;
height: 564px;
background: #FFFFFF;
border-radius: 16px;
padding-right: 40px;
`