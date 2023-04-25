import { render, renderHook, waitFor } from '@testing-library/react'
import { useRef } from 'react'
import Sort from "."

interface ISort {
  play: () => Promise<number>
}

describe('Test Sort Component', () => {
  test('Expect to return number', async () => {
    const { result } = renderHook(() => useRef<ISort>(null))
    render(<Sort ref={result.current} />)
    const playReturn = await waitFor(() => result.current.current?.play(), { timeout: 10000 })
    expect(typeof playReturn).toBe('number')
  })
})