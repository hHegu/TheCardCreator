import { faUser, faUserAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"
import colors from "../../colors"

enum cellTypes {
  empty,
  hit,
  hero,
}

type GridCellType = {
  gridType: cellTypes
  columnIndex: number
  rowIndex: number
}

type GridType = {
  columnCount: number
}

const GridCell: any = styled.span`
  width: 1.75mm;
  height: 1.75mm;
  border-radius: 0.25mm;
  background-color: ${({ gridType }: GridCellType) => {
    if (gridType === cellTypes.hit) {
      return colors.red
    }
    return "none"
  }};
  grid-column: ${(props: GridCellType) => props.columnIndex};
  grid-row: ${(props: GridCellType) => props.rowIndex};
  border: ${({ gridType }) => {
    if (gridType === cellTypes.hit) {
      return `1px solid ${colors.black}`
    }
    if (gridType === cellTypes.hero) {
      return `1px solid transparent`
    }
    return `1px solid ${colors.lightGrey}`
  }};
  display: flex;
  align-items: flex-start;
  justify-content: center;
`

const Grid: any = styled.div`
  display: grid;
  grid-template-columns: repeat(
    ${(props: GridType) => props.columnCount},
    auto
  );
  gap: 1px;
`

type GridPreviewType = {
  shape: number[][]
  className?: string
}

const GridPreview = ({ shape, className }: GridPreviewType) => {
  return (
    <Grid
      gridTemplate={shape}
      columnCount={shape[0].length}
      className={className}
    >
      {shape
        .map((row, rowIndex) =>
          row.map((column, columnIndex) => (
            <GridCell
              gridType={column}
              gridColumn={columnIndex}
              gridRow={rowIndex}
            >
              {column === cellTypes.hero && (
                <FontAwesomeIcon icon={faUserAlt} size="xs" color={colors.black} />
              )}
            </GridCell>
          ))
        )
        .flat()}
    </Grid>
  )
}

export default GridPreview
