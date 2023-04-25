import styled, { keyframes } from "styled-components";


const borderAnimation = keyframes`
  from{
    border-color: red;
  } to {
    border-color: yellow
  }
`

export const Container = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`

export const Content = styled('div')`
  padding: 10px;
  border-radius: 5px;
  display: flex;
  box-shadow: inset 0px 0px 8px -1px rgba(0,0,0,0.75);
  background: black;
  > div:nth-child(2) {
    margin: 0 10px;
  }
  `

export const ContentBorder = styled('div')`
  border-radius: 5px;
  border: 10px dotted #fff;
  padding: 10px;
`

export const Button = styled('button')`
  padding: 20px;
  background-color: rgb(229, 35, 21);
  color: white;
  border-radius: 20px;
  font-size: 40px;
  cursor: pointer;
  font-family: 'Ultra', serif;
  border: 5px dotted #b9160a;
  `

export const Result = styled('div')`
  font-family: 'Ultra', serif;
  border-radius: 30px;
  font-size: 22px;
  border: 15px dotted #ffc10778;
  //animation: ${borderAnimation} .5s infinite;
  color: red;
  padding: 30px;
`
