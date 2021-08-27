import styled from 'styled-components'
import colors from '../../colors'

type CardContainerType = {
  imageSize?: string
  backgroundColor?: string
  textColor?: string
}

type CardType = {
  topLeft?: React.ReactNode | string | JSX.Element
  topRight?: React.ReactNode | string | JSX.Element
  image?: string
  description?: React.ReactNode | string | JSX.Element
  footer?: React.ReactNode | string | JSX.Element
} & CardContainerType

const CardContainer: any = styled.div`
  width: 2.5in;
  height: 3.5in;
  background: ${(props: CardContainerType) => props.backgroundColor};
  color: ${(props: CardContainerType) => props.textColor};
  border-radius: 2mm;
  display: grid;
  grid-template:
    'tl tl tr tr'
    'im im im im' ${(props: CardContainerType) => props.imageSize}
    'de de de de' 1fr
    'fo fo fo fo';
  font-size: 3.5mm;
  box-shadow: 4px 4px 1px 0px rgba(0, 0, 0, 0.4);
  border: 1px solid black;

  @media print {
    box-shadow: none;
    border-radius: 0;
    &:nth-child(9n + 0) {
      margin-bottom: calc(1.2in - 7px);
    }
  }
`

const TopLeft = styled.div`
  text-align: left;
  padding: 2mm 4mm;
  grid-area: tl;
`

const TopRight = styled.div`
  grid-area: tr;
  text-align: right;
  padding: 2mm 4mm;
`

const CardImage = styled.div`
  grid-area: im;
  background-color: ${colors.mediumGrey};
`

const Description = styled.div`
  grid-area: de;
  padding: 4mm;
  overflow: hidden;
`

const Footer = styled.div`
  grid-area: fo;
  padding: 0 4mm;
  padding-bottom: 2mm;
`

const Card = ({
  imageSize = '4cm',
  backgroundColor = 'white',
  textColor = 'black',
  topLeft,
  topRight,
  image,
  description,
  footer,
}: CardType) => (
  <CardContainer
    imageSize={imageSize}
    backgroundColor={backgroundColor}
    textColor={textColor}
  >
    <TopLeft>{topLeft}</TopLeft>
    <TopRight>{topRight}</TopRight>
    <CardImage />
    <Description>{description}</Description>
    <Footer>{footer}</Footer>
  </CardContainer>
)

export default Card
