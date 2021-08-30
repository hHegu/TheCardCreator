import React from 'react'
import styled, { ThemedStyledFunction } from 'styled-components'
import { AbilityCardType } from '../../types/CardTypes'
import AbilityCard from '../card/AbilityCard'

type CardGalleryType = {
  cards: AbilityCardType[]
  className?: string
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

  &.downloadable {
    gap: 0;
    padding: 0;
    max-width: 2420px;
    width: 2420px;
    min-width: 2420px;
  }
`

const CardGallery = React.forwardRef<Ref, CardGalleryType>(
  ({ cards, className }, ref) => (
    <CardGalleryContainer ref={ref} className={className}>
      {cards.map(({ name, cost, description, produce, shape }) => (
        <AbilityCard
          name={name}
          cost={cost}
          produce={produce}
          description={description}
          shape={shape}
          className={className}
        />
      ))}
    </CardGalleryContainer>
  )
)

export default CardGallery
