import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRef, useState } from 'react'
import styled from 'styled-components'
import './App.css'
import colors from './colors'
import Button from './components/Button/Button'
import CardGallery from './components/CardGallery/CardGallery'
import FileDrop from './components/FileDrop/FileDrop'
import { ReactComponent as CardsIcon } from './icons/cards_multi.svg'
import { AbilityCardType } from './types/CardTypes'
import { toJpeg } from 'html-to-image'

const AppContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  @media print {
    background-color: white;
  }
`

const Header = styled.h1`
  color: ${colors.white};
  display: flex;
  align-items: center;
  gap: 1rem;

  @media print {
    display: none;
  }
`

const App = () => {
  const [cards, setCards] = useState<AbilityCardType[]>([])
  const [downloadableStyles, setDownloadableStyles] = useState(true)
  const galleryRef = useRef<HTMLDivElement>(null)

  // Prevent browser from opening dragged file
  // in a new tab if user accidentally misses FileDrop area
  const preventDefault = (e: any) => {
    e.preventDefault()
  }

  const convertHtmlToImage = () => {
    setDownloadableStyles(true)

    setTimeout(() => {
      if (galleryRef.current) {
        toJpeg(galleryRef.current).then(dataUrl => {
          var a = document.createElement('a')
          a.href = dataUrl
          a.download = 'output.png'
          document.body.appendChild(a)
          a.click()
          document.body.removeChild(a)
          setDownloadableStyles(false)
        })
      }
    }, 2)
  }

  return (
    <AppContainer onDrop={preventDefault} onDragOver={preventDefault}>
      <Header>
        <CardsIcon /> The Card Creator
      </Header>
      <FileDrop onJSONDropped={ob => setCards([...cards, ...ob.Abilities])} />
      {cards.length > 0 && (
        <Button style={{ marginBottom: '2rem' }} onClick={convertHtmlToImage}>
          Download cards as PNG
          <FontAwesomeIcon icon={faDownload} style={{ marginLeft: '0.5rem' }} />
        </Button>
      )}
      <CardGallery
        cards={cards}
        ref={galleryRef}
        className={downloadableStyles ? 'downloadable' : ''}
      />
    </AppContainer>
  )
}

export default App
