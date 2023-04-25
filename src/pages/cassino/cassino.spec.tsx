import { useImperativeHandle, forwardRef } from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import * as Sort from './components/Sort';
import Cassino from '.';

const newSort = Sort as any

describe('Test Cassino game', () => {
  test('Should run game', async () => {
    render(<Cassino />)
    const result = screen.getByTestId('message')
    expect(result.textContent).toEqual("Precione o botão pra jogar")
  })

  test('Should play game', async() => {
    render(<Cassino />)
    const button = screen.getByTestId('buttonPlayGame')

    await waitFor(async () => {
      await fireEvent.click(button)
    })

    const result = screen.getByTestId('message')
    expect(result.textContent).toEqual('Jogo iniciado, Boa sorte!!!!')
  })
  
  test('Should win the game', async () => {
    newSort.default = forwardRef((props: any, ref: any) => {
      useImperativeHandle(ref, () => {
        return {
          play: () => {
            return new Promise((resolve) => resolve(2))
          },
        };
      }, []);

      return <div>1</div>
    })
  
    render(<Cassino />)

    const button = screen.getByTestId('buttonPlayGame')

    await waitFor(async () => {
      await fireEvent.click(button)
      const result = screen.getByTestId('message')
      expect(result.textContent).toEqual("Jogo iniciado, Boa sorte!!!!")
    })

    const result = screen.getByTestId('message')
    expect(result.textContent).toEqual("Você ganhou!!!")
  })

  test('Should lose the game', async () => {
    let num = 1
    newSort.default = forwardRef((props: any, ref: any) => {
      useImperativeHandle(ref, () => {
        return {
          play: () => {
            num = num + 1
            return new Promise((resolve) => resolve(num))
          },
        };
      }, []);
      return <div>2</div>
    })

    render(<Cassino />)
  
    const button = screen.getByTestId('buttonPlayGame')

    await waitFor(async () => {
      await fireEvent.click(button)
      const result = screen.getByTestId('message')
      expect(result.textContent).toEqual("Jogo iniciado, Boa sorte!!!!")
    })

    const result = screen.getByTestId('message')
    expect(result.textContent).toEqual("Você perdeu")
  })
})