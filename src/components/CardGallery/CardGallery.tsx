import styled from "styled-components"
import { AbilityCardType } from "../../types/CardTypes"
import AbilityCard from "../card/AbilityCard"

type CardGalleryType = {
  cards: AbilityCardType[]
}

const CardGalleryContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  width: 100%;
  padding-left: 2rem;
  box-sizing: border-box;
  max-width: 1920px;

  @media print {
    gap: 0;
    margin-top: 1cm;
  }
`

const CardGallery = ({ cards }: CardGalleryType) => (
  <CardGalleryContainer>
    {cards.map(({ name, cost, description, produce }) => (
      <AbilityCard
        name={name}
        cost={cost}
        produce={produce}
        description={description}
      />
    ))}
  </CardGalleryContainer>
)

export default CardGallery