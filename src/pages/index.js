import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Image from "../components/image"
import SEO from "../components/seo"

import ConfettiCanon from "../components/confetti"

import Grid from "../components/grid"

import Logo from "../components/logo"

import { Textfit } from "react-textfit"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  top: 0;
  left: 0;
  width: 100%;
`

const Footer = styled.div`
  display: grid;
  width: 100vw;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  bottom: 0;
  margin: 0;
  padding: 0;
`

const Header = styled.div`
  display: grid;
  width: 100vw;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  top: 0;
  margin: 0;
  padding: 0;
`

const Title = styled.div`
  position: relative;
  top: 10px;
  font-size: 3em;
  font-family: "Vroum-Lift";
  color: white;
  margin: 0;
  padding: 0;
  margin-left: 20px;
  align-self: center;

  @media (min-width: 375px) {
    font-size: 4em;
  }

  @media (min-height: 635px) {
    font-size: 8em;
  }
`

const RoundName = styled.div`
  position: relative;
  font-family: "Vroum-Lift";
  font-size: 3em;
  color: white;
  margin: 0;
  padding: 20px 0 0 20px;

  @media (min-width: 375px) {
    font-size: 4em;
  }

  @media (min-height: 635px) {
    font-size: 8em;
  }
`
const Round = styled.div`
  position: relative;
  justify-self: flex-end;
  font-size: 2em;
  align-items: top;
  font-family: "Vroum-Lift";
  color: white;
  margin: 0;
  padding: 20px 20px 0 0;

  @media (min-width: 375px) {
    font-size: 3em;
  }
`

const RoundInner = styled.div``

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 100vw;
  grid-template-rows: 1fr 1fr 1fr;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  position: absolute;
  overflow: hidden;
`

class IndexPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentRound: null,
      roundNumber: [
        { selected: false },
        { selected: false },
        { selected: false },
        { selected: false },
        { selected: false },
      ],
      isVisible: false,
    }

    this._currentRound = this._currentRound.bind(this)
    this._onClick = this._onClick.bind(this)
  }

  _currentRound(currentRound, roundNumber) {
    let rounds = this.state.roundNumber

    rounds.forEach(item => {
      item.selected = false
    })

    rounds[roundNumber].selected = true

    this.setState({
      currentRound: currentRound,
      roundNumber: rounds,
    })
  }

  _onClick() {
    this.setState(prevState => ({
      isVisible: !prevState.isVisible,
    }))
  }

  render() {
    return (
      <>
        <SEO title="Home" />
        <MainContainer>
          <Header className={this.state.isVisible ? "visible" : "invisible"}>
            <RoundName>{this.state.currentRound}</RoundName>
            <Round>
              {this.state.roundNumber.map((item, index) => (
                <span
                  className={
                    this.state.roundNumber[index].selected
                      ? "selected"
                      : "not-selected"
                  }
                >
                  #
                </span>
              ))}
            </Round>
          </Header>
          <Container>
            <Grid
              className={this.state.isVisible ? "visible" : "invisible"}
              currentRound={this._currentRound}
              isVisible={this._onClick}
            />
          </Container>
          <Footer>
            <Title className={this.state.isVisible ? "visible" : "invisible"}>
              #BINGO
            </Title>
            <Logo onClick={this._onClick} />
          </Footer>
        </MainContainer>
        <ConfettiCanon />
      </>
    )
  }
}

export default IndexPage
