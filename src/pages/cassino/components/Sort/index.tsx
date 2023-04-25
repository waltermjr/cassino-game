import { useEffect, useRef, useState, forwardRef, useImperativeHandle, ForwardedRef } from "react"
import { Container, Card } from "./style"
import Deferred from "../../../../helpers/deferred"

interface ISort {
  play: () => Promise<number>
}

const Sort = (props: any, ref: ForwardedRef<ISort>): JSX.Element => {
  const [numbers, setNumbers] = useState([
    {number: 1, order: -750},
    {number: 2, order: -550},
    {number: 3, order: -350},
    {number: 4, order: -150},
    {number: 5, order: 50},
    {number: 6, order: 250},
    {number: 7, order: 450},
    {number: 8, order: 650},
    {number: 9, order: 850}
  ])
  const [finishedSort, setFinishedSort] = useState(false)

  const sortTimeOut = useRef<number | null>(null) as React.MutableRefObject<any>
  const sortPromise = useRef(new Deferred());

  const startSort = () => {
    const order = [-750, -550, -350, -150, 50, 250, 450, 650, 850]
    sortTimeOut.current = setInterval(() => {
      setNumbers(number => number.map((number) => {
        const index = order.findIndex(num => num === number.order)

        if(index + 1 === order.length){
          return {
            ...number,
            order: -750
          }
        }

        return {
          ...number,
          order: order[index + 1]
        }
      }))

    }, 100)
  }

  useEffect(() => {
    if(finishedSort){
      setTimeout(() => {
        const result = numbers.filter((number) => number.order === 50)
        sortPromise.current.resolve(result[0].number)
      }, 200)
    }
  }, [finishedSort])
  
  useImperativeHandle(ref, () => {
    return {
      play: () => {
        setFinishedSort(false)
        const time =  Math.floor(Math.random() * 3 + 1);
        sortPromise.current = new Deferred();
        startSort()
        setTimeout(() => {
          clearInterval(sortTimeOut.current)
          setFinishedSort(true)
        }, parseInt(time + '000'))
        
        return sortPromise.current.promise
      },
    };
  }, []);

  useEffect(() => {
    return () => clearInterval(sortTimeOut.current)
  }, [])

  return(
    <>
      <Container>
        {numbers.map((number, index) => <Card key={index} order={number.order}>{number.number}</Card>)}
      </Container>
    </>
  )
}

export default forwardRef(Sort)