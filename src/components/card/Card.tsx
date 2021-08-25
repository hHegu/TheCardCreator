import styled from "styled-components"

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
  width: 63mm;
  height: 88mm;
  background: ${(props: CardContainerType) => props.backgroundColor};
  color: ${(props: CardContainerType) => props.textColor};
  border-radius: 2mm;
  display: grid;
  grid-template:
    "tl tl tr tr"
    "im im im im" ${(props: CardContainerType) => props.imageSize}
    "de de de de" 1fr
    "fo fo fo fo";
  font-size: 3.5mm;
  box-shadow: 4px 4px 1px 0px rgba(0, 0, 0, 0.4);
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
  background-color: grey;
`

const Description = styled.div`
  grid-area: de;
  padding: 4mm;
`

const Footer = styled.div`
  grid-area: fo;
  padding: 2mm 4mm;
`

const Card = ({
  imageSize = "4cm",
  backgroundColor = "white",
  textColor = "black",
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
