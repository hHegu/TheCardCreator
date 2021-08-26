import styled from "styled-components"

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
  width: 1.5mm;
  height: 1.5mm;
  border-radius: 0.25mm;
  background-color: ${({ gridType }: GridCellType) => {
    if (gridType === cellTypes.hit) {
      return "#b13e53"
    }
    if (gridType === cellTypes.hero) {
      return "#a7f070"
    }
    return "none"
  }};
  grid-column: ${(props: GridCellType) => props.columnIndex};
  grid-row: ${(props: GridCellType) => props.rowIndex};
  border: 0.2mm solid black;
`

const Grid: any = styled.div`
  display: grid;
  grid-template-columns: repeat(
    ${(props: GridType) => props.columnCount},
    auto
  );
  gap: 0.2mm;
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
            />
          ))
        )
        .flat()}
    </Grid>
  )
}

export default GridPreview
