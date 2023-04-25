import { useRef, useState, useEffect } from 'react'
import Sort from "./components/Sort"
import { Button, Container, Content, ContentBorder, Result } from "./style"

interface ISort {
  play: () => Promise<number>
}

const Cassino = (): JSX.Element => {
  const [result, setResult] = useState('Precione o botão pra jogar')
  const Sort1 = useRef<ISort>(null)
  const Sort2 = useRef<ISort>(null)
  const Sort3 = useRef<ISort>(null)

  const playGame = async () => {
    setResult('Jogo iniciado, Boa sorte!!!!')
    const result  = await Promise.all([
      Sort1.current?.play(),
      Sort2.current?.play(),
      Sort3.current?.play()
    ])
    const isEqual = result.every( (val, i, arr) => val === arr[0] )
    setResult(isEqual ? "Você ganhou!!!" : "Você perdeu")
  }
  
  return(
    <Container>
      <Result data-testid="message">{result}</Result>
      <ContentBorder>
        <Content>
          <Sort ref={Sort1} />
          <Sort ref={Sort2} />
          <Sort ref={Sort3} />
        </Content>
      </ContentBorder>
      <Button data-testid="buttonPlayGame" onClick={playGame}>Jogar</Button>
    </Container>
  )
}

export default Cassino