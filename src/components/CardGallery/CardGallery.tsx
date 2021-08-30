import React from 'react'
import styled, { ThemedStyledFunction } from 'styled-components'
import { AbilityCardType } from '../../types/CardTypes'
import AbilityCard from '../card/AbilityCard'

type CardGalleryType = {
  cards: AbilityCardType[]
}

type Ref = HTMLDivElement

const CardGalleryContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  width: 100%;
  padding: 0 2rem;
  margin-bottom: 2rem;
  box-sizing: border-box;
  max-width: 1920px;

  @media print {
    gap: 0;
    padding: 0;
  }
`

const CardGallery = React.forwardRef<Ref, CardGalleryType>(({ cards }, ref) => (
  <CardGalleryContainer ref={ref}>
    {cards.map(({ name, cost, description, produce, shape }) => (
      <AbilityCard
        name={name}
        cost={cost}
        produce={produce}
        description={description}
        shape={shape}
      />
    ))}
  </CardGalleryContainer>
))

export default CardGallery
