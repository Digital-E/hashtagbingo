import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'
import img from '../images/karlanders_logo_blue.svg'

const Styled = styled.div`
  z-index: 998;
  margin-right: 20px;
  align-self: center;
  font-size: 8em;

  @media(min-width: 992px) {
  }

  img {
    height: 80px;
    width: 100%
  }
`


const Logo = (props) => (
    <Styled>
    <div onClick={props.onClick}>
        <img alt="" src={img}/>
    </div>
    </Styled>
)

export default Logo;