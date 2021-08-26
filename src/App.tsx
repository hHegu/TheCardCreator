import { useState } from "react"
import styled from "styled-components"
import "./App.css"
import colors from "./colors"
import Button from "./components/Button/Button"
import CardGallery from "./components/CardGallery/CardGallery"
import FileDrop from "./components/FileDrop/FileDrop"
import { ReactComponent as CardsIcon } from "./icons/cards_multi.svg"
import { AbilityCardType } from "./types/CardTypes"

const AppContainer = styled.div`
  background-color: ${colors.backgroundBlue};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  @media print {
    background-color: white;
  }
`

const Header = styled.h1`
  color: ${colors.white};
  display: flex;
  align-items: center;
  gap: 1rem;

  @media print {
    display: none;
  }
`

const App = () => {
  const [cards, setCards] = useState<AbilityCardType[]>([])

  return (
    <AppContainer>
      <Header>
        <CardsIcon /> The Card Creator
      </Header>
      <FileDrop onJSONDropped={ob => setCards([...cards, ...ob.Abilities])} />
      <Button style={{ marginBottom: "2rem" }}>Download cards as PNG</Button>
      <CardGallery cards={cards} />
    </AppContainer>
  )
}

export default App
