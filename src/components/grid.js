import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Slider from "react-slick"

import "./layout.css"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {Square} from '../components/square'

import Image from "../components/image"
import SEO from "../components/seo"


const Container = styled.div`
    width: 98vw !important;
    height: 98vw;
    max-width: 500px;
    max-height: 500px;
    display: grid !important;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-gap: 1px;
    margin: 0 auto;
`
// const Square = styled.div`
//   height: auto;
//   width: auto;
//   display: flex;
//   background-color: grey;
//   justify-content: center;
//   align-items: center;

// `

const GenerateButton = styled.div`
    font-family: 'Calibre-Regular';
    color: blue;
    border: 1px solid white;
    border-radius: 50px;
    background-color: white;
    width: 50%;
    margin: 0 auto;
    padding: 10px 10px;
    line-height: 30px;

    text-align: center;

    span {
        position: relative;
        top: 4px;
        font-size: 2em;
    }
`

const CleanLocalStorageButton = styled.div`
    position: absolute;
    bottom: 0;
    color: white;
    text-decoration: underline
`

const ContainerOuter = styled.div`
    // display: flex !important;
    // width: 100%;
    // height: 100%;
    // justify-content: center;
    // align-items: center;
`

const SliderContainer = styled.div`
    // height: 100%;
    width: 100%
`




class Grid extends React.Component {
    constructor(){
        super();

        this.state = {
            grids: null,
            originalGrids: null,
            currentSlide: null,
            roundNumber: null,
        }

        this.intervalTimer = 0;
        this.touchDownTime = 0;

        this.updateInput = this.updateInput.bind(this);
        this.generateGrid = this.generateGrid.bind(this);
        this.cleanLocalStorage = this.cleanLocalStorage.bind(this);
        this._changedSlide = this._changedSlide.bind(this);
        this._onTouchStart = this._onTouchStart.bind(this);
        this._onTouchEnd = this._onTouchEnd.bind(this);

    }


    componentWillMount() {

    }

    componentDidMount() {

        this.hydrateStateWithLocalStorage();

        setTimeout(()=>{

            if(this.state.grids != null) {
                this.props.isVisible(true)
                this._changedSlide(0,0)
            }

        },200)

    }

    //Hydrate State With Local Storage

    hydrateStateWithLocalStorage() {

        // for all items in state
        for (let key in this.state) {
            //if the key exists in localStorage
            if (localStorage.hasOwnProperty(key)) {
                //get the key's value ferom localStorage
                let value = localStorage.getItem(key);

                //parse the localStorage string and setState
                try {
                    value = JSON.parse(value);
                    this.setState({ [key]: value });
                } catch(e) {
                    //handle empty string
                    this.setState({ [key]: value });
                }
            }
        }
    }

    //Update State With Shuffled Grids

    updateInput(shuffledGrids, originalGrids) {


        this.setState({
            grids: shuffledGrids
        });

        localStorage.setItem('grids', JSON.stringify(shuffledGrids));
        localStorage.setItem('originalGrids', JSON.stringify(originalGrids));


    }
    

    generateGrid() {

        let allGrids = [];

        function Grid(data) {
                this.roundName = data.round_name.text;
                this.tags = data.tags.text.split(',').map((tag) => {
                    return ( { tag: tag.trim(), isSelected: false } );
                });
        }

        const newGrid = (data) => {

            let grid = new Grid(data);

            allGrids.push(grid);

        };

        this.props.data.allPrismicBingogrids.edges.forEach( (item) => {

            let data = item.node.data;

            newGrid(data);

        });      

        this.setState({
            originalGrids: allGrids,
            currentSlide: allGrids[0].roundName,
            roundNumber: 0
        });

        this.props.currentRound(allGrids[0].roundName, 0);

        

        const shuffle = (array) => {

            var currentIndex = array.length, temporaryValue, randomIndex;

            // While there remain elements to shuffle...
            while (0 !== currentIndex) {
          
              // Pick a remaining element...
              randomIndex = Math.floor(Math.random() * currentIndex);
              currentIndex -= 1;
          
              // And swap it with the current element.
              temporaryValue = array[currentIndex];
              array[currentIndex] = array[randomIndex];
              array[randomIndex] = temporaryValue;
            }
          
            return array.splice(0,16);

        }

        let shuffledGrids = allGrids.map((grid) => {
            return shuffle(grid.tags);
        });

        let originalGrids = allGrids;

        this.updateInput(shuffledGrids, originalGrids);

        this.props.isVisible(true);

    

    }

    cleanLocalStorage() {

        this.props.isVisible(false);

        // for all items in state
        for (let key in this.state) {
            //if the key exists in localStorage
            if (localStorage.hasOwnProperty(key)) {
                //get the key's value ferom localStorage
                localStorage.removeItem(key);

                //parse the localStorage string and setState
                try {

                    this.setState({ [key]: null });
                } catch(e) {
                    //handle empty string
                    this.setState({ [key]: null });
                }
            }
        }

    }

    _onClickSquare({gridIndex, index}) {


        let grids = this.state.grids.slice();
        let square = grids[gridIndex][index];
        let squareSelect = !square.isSelected;

        grids[gridIndex][index].isSelected = squareSelect;

        this.setState({
            grids: grids
        });

        localStorage.setItem('grids', JSON.stringify(grids));
     
    }

    _changedSlide(oldIndex, newIndex){

        let originalGrids = this.state.originalGrids;

        this.setState({
            currentSlide: originalGrids[newIndex].roundName,
            roundNumber: newIndex
        });

        localStorage.setItem('currentSlide', JSON.stringify(originalGrids[newIndex].roundName));
        localStorage.setItem('roundNumber', JSON.stringify(newIndex));

        this.props.currentRound(originalGrids[newIndex].roundName, newIndex);

    }

    _onTouchStart(){
        
        let touchStart = new Date();

        this.intervalTimer = setInterval( () => {

            this.touchDownTime = new Date();

            console.log(this.touchDownTime);

            if(this.touchDownTime - touchStart > 5000) {

                this.cleanLocalStorage();

                this.touchDownTime = 0;

                clearInterval(this.intervalTimer);
            }

        },100);

    }

    _onTouchEnd(){

        this.touchDownTime = 0;

        clearInterval(this.intervalTimer);

        console.log(this.touchDownTime)

    }

    render() {


        const settings = {
            dots: true,
            // infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };

        return this.state.grids ? 
        

        <SliderContainer onTouchStart={this._onTouchStart} onTouchEnd={this._onTouchEnd} className={this.props.className}> 
        <Slider {...settings} beforeChange={this._changedSlide}>

            {
                this.state.grids.map((item, index) => {

                    let gridIndex = index;

                   return (
                    
                    
                    <Container>
                        {
                            item.map((item, index) => (
                                <Square className={'square'} key={index} isSelected={item.isSelected} gridIndex={gridIndex} _onClickSquare={() => this._onClickSquare({gridIndex, index})}>
                                    <span>{item.tag}</span>
                                </Square>
                            ))
                        }
                    </Container>
              

                    )   
                })
            }

        </Slider>
        {/* <CleanLocalStorageButton onClick={this.cleanLocalStorage}>
            Reset
        </CleanLocalStorageButton> */}
        </SliderContainer>


            :

        <GenerateButton onClick={this.generateGrid}>
            <span>Let's Play Bingo!</span>
        </GenerateButton>

            }

    }

export default props => (
    <StaticQuery
        query={graphql`
            query Data {
                allPrismicBingogrids(sort: { order: ASC, fields: [data___order___text] }) {
                    edges {
                    node {
                    id
                    uid
                    data {
                    order {
                        text
                    }
                    round_name {
                        text
                    }
                    tags {
                        text
                    }
                    }
                }
                }
            }
        }
        `}
        render={data => <Grid data={data} {...props}/>}
    />
)