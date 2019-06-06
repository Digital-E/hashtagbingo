import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Image from "../components/image"
import SEO from "../components/seo"

import ConfettiCanon from '../components/confetti'

import Grid from "../components/grid"

import Logo from "../components/logo"

const Container = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;

`

const Footer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    bottom: 0;
    margin: 0;
    padding: 0;
`

const Header = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    top: 0;
    margin: 0;
    padding: 0;
`

const Title = styled.div`
    font-family: 'Vroum-Lift';
    font-size: 13em;
    color: white;
    margin: 0;
    padding: 0;
    margin-left: 20px;
`

const RoundName = styled.div`
    font-family: 'Vroum-Lift';
    font-size: 7em;
    color: white;
    margin: 0;
    padding: 20px 0 0 20px;
`
const Round = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Vroum-Lift';
    font-size: 3em;
    color: white;
    margin: 0;
    padding: 20px 20px 0 0;
`

const RoundInner = styled.div`
`


const Colors = [
    '#FE0000',
    '#1300fe',
    '#fe00fb',
    '#f5fd33',
    'rgb(117, 250, 76)',
    'rgb(239, 164, 76)'
]






class IndexPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            currentRound: null,
            roundNumber: [{selected: false}, {selected: false}, {selected: false}, {selected: false}, {selected: false}],
            isVisible: false
        }

        this._currentRound = this._currentRound.bind(this);
        this._onClick = this._onClick.bind(this)
    }


    _currentRound(currentRound, roundNumber){

        let rounds = this.state.roundNumber;

        rounds.forEach((item) => {
           item.selected = false
        });
        
        rounds[roundNumber].selected = true;

        this.setState({
            currentRound: currentRound,
            roundNumber: rounds
        })

    }

    _onClick(){
        this.setState(prevState => ({
            isVisible: !prevState.isVisible
        }))
    }


    render(){
        return(
            <>
            <Container>
            <SEO title="Home" />
            <Header className={this.state.isVisible ? 'visible' : 'invisible'}>
                <RoundName>
                    {this.state.currentRound}
                </RoundName>
                <Round>
                    <RoundInner>
                    {
                        this.state.roundNumber.map((item, index) => (
                            <span className={this.state.roundNumber[index].selected ? 'selected' : 'not-selected'}>#</span>
                        ))
                    }
                    </RoundInner>
                </Round>
            </Header>
            <Grid className={this.state.isVisible ? 'visible' : 'invisible'} currentRound={this._currentRound} isVisible={this._onClick} />
            <Footer>
                <Title className={this.state.isVisible ? 'visible' : 'invisible'}>
                    #BINGO
                </Title>
                <Logo onClick={this._onClick}/>
            </Footer>
            </Container>
            <ConfettiCanon/>
            </>
        )
    }
}

export default IndexPage
