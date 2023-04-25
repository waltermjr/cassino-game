import styled, { keyframes } from "styled-components";

interface PropsCard {
  order: number
}

export const Container = styled('div')`
  overflow: hidden;
  height: 300px;
  width: 150px;
  position: relative;
  background-color: #fff3cd;
  border-radius: 5px;
  border: 5px solid #c9b67d;

  &:before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    width: 100%;
    height: 120px;
    box-shadow: inset 0px 119px 110px -117px rgba(173 ,152 ,90,0.85);
  }
  
  &:after {
    content: "";
    display: block;
    width: 100%;
    position: absolute;
    bottom: 0;
    height: 120px;
    box-shadow: inset 0px -119px 110px -117px rgba(173 ,152 ,90,0.85);
  }
`
export const Card = styled('div')<PropsCard>`
  font-family: 'Ultra', serif;
  width: 100%;
  top: ${props => `${props.order}px`};
  z-index: ${props => props.order < 0 ? -9 : 0};
  color: #e52315;
  height: 215px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: top 200ms linear;
  font-size: 145px;
  text-shadow: 2px 3px black
`
