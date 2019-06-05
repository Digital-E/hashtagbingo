import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Image from "../components/image"
import SEO from "../components/seo"

import ConfettiCanon from '../components/confetti'

import Grid from "../components/grid"

const Container = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
`




const IndexPage = () => (
    <Container>
    <SEO title="Home" />
    <Grid/>
    <ConfettiCanon/>
    </Container>

)

export default IndexPage
