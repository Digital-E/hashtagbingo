import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'
import img from '../images/karlanders_logo_blue.svg'

const Styled = styled.div`
  z-index: 998;
  margin-right: 20px;
  align-self: center;
  justify-self: flex-end;

  img {
    height: 60px;
    width: auto;
  }

`


const Logo = (props) => (
    <Styled>
    <div className="logo" onClick={props.onClick}>
        <img alt="" src={img}/>
    </div>
    </Styled>
)

export default Logo;