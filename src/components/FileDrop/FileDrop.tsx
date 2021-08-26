import { faFileImport, faUpload } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import styled, { StyledComponent } from "styled-components"
import colors from "../../colors"
import { CardFileExportType } from "../../types/CardTypes"

type FileDropContainerType = {
  dragged: boolean
}

const FileDropContainer: StyledComponent<
  "div",
  any,
  FileDropContainerType,
  never
> = styled.div`
  width: 40rem;
  height: 5rem;
  border: 2px dashed ${colors.white};
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.white};
  font-size: 1.25rem;
  background-color: ${(props: FileDropContainerType) =>
    props.dragged ? "rgba(0, 0, 0, 0.4)" : "rgba(0, 0, 0, 0.2)"};
  @media print {
    display: none;
  }
`

const FileDrop = ({
  onJSONDropped,
}: {
  onJSONDropped: (ob: CardFileExportType) => void
}) => {
  const [dragged, setDragged] = useState(false)

  const onDrop: React.DragEventHandler<HTMLDivElement> = async ev => {
    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault()

    if (ev.dataTransfer.items) {
      // Use DataTransferItemList interface to access the file(s)
      for (var i = 0; i < ev.dataTransfer.items.length; i++) {
        // If dropped items aren't files, reject them
        if (ev.dataTransfer.items[i].kind === "file") {
          var file = ev.dataTransfer.items[i].getAsFile()
          const fileText = await file?.text()
          if (fileText) {
            onJSONDropped(JSON.parse(fileText))
          }
        }
      }
    } else {
      // Use DataTransfer interface to access the file(s)
      for (var i = 0; i < ev.dataTransfer.files.length; i++) {
        const fileText = await ev.dataTransfer.files[i].text()
        if (fileText) {
          onJSONDropped(JSON.parse(fileText))
        }
      }
    }
    setDragged(false)
  }

  const onDragOver: React.DragEventHandler<HTMLDivElement> = ev => {
    setDragged(true)

    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault()
  }

  const onDragExit: React.DragEventHandler<HTMLDivElement> = () => {
    setDragged(false)
  }

  return (
    <FileDropContainer
      id="drop_zone"
      onDrop={onDrop}
      onDragOver={onDragOver}
      onDragExit={onDragExit}
      dragged={dragged}
    >
      Drop JSON file here
      <FontAwesomeIcon icon={faFileImport} style={{ paddingLeft: "0.5rem" }} />
    </FileDropContainer>
  )
}

export default FileDrop
