import styled from "styled-components"
import colors from "../../colors"

const Button = styled.button`
  background: none;
  border: 1px solid ${colors.white};
  padding: 0.75rem 2.5rem;
  color: ${colors.white};
  border-radius: 0.5rem;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background: ${colors.white};
    color: ${colors.black};
  }

  @media print {
    display: none;
  }
`

export default Button
