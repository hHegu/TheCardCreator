import styled from "styled-components"
import { aoe, cross, diagonalCross, largeAoe, longMelee, melee, swipe } from "./abilityShapes"
import "./App.css"
import AbilityCard from "./components/card/AbilityCard"
import GridPreview from "./components/GridPreview/GridPreview"
import { ReactComponent as CardsIcon } from "./icons/cards_multi.svg"

const AppContainer = styled.div`
  background-color: #282c34;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
`

const Header = styled.h1`
  color: white;
  display: flex;
  align-items: center;
  gap: 1rem;
`

const App = () => {
  return (
    <AppContainer>
      <Header>
        <CardsIcon /> The Card Creator
      </Header>
      <AbilityCard
        description="This is a test card"
        name="Test Card 2"
        cost={2}
        produce={3}
      />
      <GridPreview shape={cross}/>
      <GridPreview shape={diagonalCross}/>
      <GridPreview shape={aoe}/>
      <GridPreview shape={largeAoe}/>
      <GridPreview shape={melee}/>
      <GridPreview shape={longMelee}/>
      <GridPreview shape={swipe}/>
    </AppContainer>
  )
}

export default App
