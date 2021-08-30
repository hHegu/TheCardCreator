import { faTint } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import { AbilityCardType } from '../../types/CardTypes'
import GridPreview from '../GridPreview/GridPreview'
import Card from './Card'
import { shapes } from '../../abilityShapes'

const CostContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1mm;
  color: #3b5dc9;
  font-weight: bold;
`

const ProduceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1mm;
  width: 100%;
`

const DescriptionContainer = styled.div`
  font-size: 0.6rem;
  line-height: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`

const StyledGridPreview = styled(GridPreview)`
  margin-left: 3mm;
`

const AbilityCard = ({
  name,
  description,
  cost,
  produce,
  shape,
  className,
}: AbilityCardType & { className?: string }) => {
  const costElement = (
    <CostContainer>
      {cost}
      <FontAwesomeIcon icon={faTint} size="sm" color="#3b5dc9" />
    </CostContainer>
  )

  const produceElement = (
    <ProduceContainer>
      {Array(produce)
        .fill(null)
        .map((_val, i) => (
          <FontAwesomeIcon
            key={`${name}-produce-${i}`}
            icon={faTint}
            size="lg"
            color="#3b5dc9"
          />
        ))}
    </ProduceContainer>
  )

  const descriptionElement = (
    <DescriptionContainer>
      <span>{description}</span>
      {shape && <StyledGridPreview shape={shapes[shape]} />}
    </DescriptionContainer>
  )

  return (
    <Card
      description={descriptionElement}
      topLeft={name}
      topRight={costElement}
      footer={produceElement}
      className={className}
    />
  )
}

export default AbilityCard
