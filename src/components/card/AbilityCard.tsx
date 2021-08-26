import { faTint } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"
import { AbilityCardType } from "../../types/CardTypes"
import Card from "./Card"

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

const AbilityCard = ({ name, description, cost, produce }: AbilityCardType) => {
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

  return (
    <Card
      description={description}
      topLeft={name}
      topRight={costElement}
      footer={produceElement}
    />
  )
}

export default AbilityCard
