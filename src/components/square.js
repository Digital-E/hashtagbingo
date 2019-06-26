import React from "react"
import styled from "styled-components"
import posed from 'react-pose'

import "./layout.css"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import SEO from "../components/seo"


// const SquareDiv = posed.div({
//   selected: {
//     opacity: 1,
//     scale: 1,
//     backgroundColor: 'rgba(255, 255, 255, 0.2)',
//     transition: {
//       scale: {
//         type: 'keyframes',
//         values:[1, 0.5, 1],
//         duration: 500,
//       }
//     },
//     // applyAtEnd: {
//     //   scale: 1,
//     // }
//   },
//   notselected: {
//     opacity: 1,
//     scale: 1,
//     backgroundColor: 'rgba(255, 255, 255, 1)',
//     transition: {
//       scale: {
//         type: 'keyframes',
//         values:[1, 0.5, 1],
//         duration: 500,
//       }
//     },
//   }
// })

const SquareDiv = posed.div({
  selected: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    zIndex: 999,
    backgroundColor: 'rgba(249, 160, 49, 1)',
    transition: {
      scale: {
        type: 'keyframes',
        values:[1, 2.5, 1],
        duration: 500,
      },
      rotate: {
        type: 'keyframes',
        values:[0, 360],
        times: [0, 0.8],
        duration: 1500,
      }
    },
    // applyAtEnd: {
    //   scale: 1,
    // }
  },
  notselected: {
    opacity: 1,
    scale: 1,
    zIndex: 0,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    transition: {
      scale: {
        type: 'keyframes',
        values:[1, 0.5, 1],
        times: [0, 0.25, 1],
        duration: 500,
      }
    },
  }
})

const StyledSquareDiv = styled(SquareDiv)`
  font-size: 12px;
  height: auto;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  color: blue;
  background-color: rgba(255,255,255,1);
  border-radius: 3px;
  
  span {
    // transform: rotateZ(45deg);
    // transform-origin: center center;
    text-align: center
    margin: 10%;
  }
`

const PreSquare = (props) => {

  let touchHasMoved;

  const _handleOnTouchStart = () => {
    touchHasMoved = false;
  }

  const _handleOnTouchMove = () => {
    touchHasMoved = true;
  }

  const _handleOnTouchEnd = (e) => {
    if(touchHasMoved) return;
    props._onClickSquare(e);
  }


  return(
    <StyledSquareDiv pose={props.isSelected ? 'selected' : 'notselected'} onTouchStart={() => _handleOnTouchStart(props.gridIndex)} onTouchMove={() => _handleOnTouchMove()} onTouchEnd={() => _handleOnTouchEnd()}>
      {props.children}
    </StyledSquareDiv>  
  )
}


export const Square = (props) => (

    <PreSquare {...props}/>

);


