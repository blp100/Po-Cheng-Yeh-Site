import { Box, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";

const IntroBox = styled.div` 
  --mountain-dark-color : #FBB6CE;

  .loop-wrapper {
    margin: 0 auto;
    position: relative;
    display: block;
    max-width: 600px;
    width:100%;
    height: 250px;
    overflow: hidden;
    color: #fff;
  }

  &.dark{ 
    .loop-wrapper{
        color: #000;
        border-bottom: none;
    }
  }

  .mountain {
    position: absolute;
    right: -900px;
    bottom: -20px;
    width: 2px;
    height: 2px;
    box-shadow: 
      0 0 0 50px #4DB6AC,
      60px 50px 0 70px #4DB6AC,
      90px 90px 0 50px #4DB6AC,
      250px 250px 0 50px #4DB6AC,
      290px 320px 0 50px #4DB6AC,
      320px 400px 0 50px #4DB6AC;
    transform: rotate(130deg);
    animation: mtn 20s linear infinite;
  }

  &.dark{ 
    .mountain{
        box-shadow: 
        0 0 0 50px var(--mountain-dark-color),
        60px 50px 0 70px var(--mountain-dark-color),
        90px 90px 0 50px var(--mountain-dark-color),
        250px 250px 0 50px var(--mountain-dark-color),
        290px 320px 0 50px var(--mountain-dark-color),
        320px 400px 0 50px var(--mountain-dark-color);
    }
  }

  .hill {
    position: absolute;
    right: -900px;
    bottom: -50px;
    width: 400px;
    border-radius: 50%;
    height: 20px;
    box-shadow: 
      0 0 0 50px #4DB6AC,
      -20px 0 0 20px #4DB6AC,
      -90px 0 0 50px #4DB6AC,
      250px 0 0 50px #4DB6AC,
      290px 0 0 50px #4DB6AC,
      620px 0 0 50px #4DB6AC;
    animation: hill 4s 2s linear infinite;
  }
  .tree, .tree:nth-of-type(2), .tree:nth-of-type(3) {
    position: absolute;
    height: 100px; 
    width: 35px;
    bottom: 0;
    background: url(/images/icons/icon-tree.svg) no-repeat;
  }
  &.dark{
    .tree, .tree:nth-of-type(2), .tree:nth-of-type(3) {
        background: url(/images/icons/icon-tree-dark.svg) no-repeat;
    }
  }
  .rock {
    margin-top: -17%;
    height: 2%; 
    width: 2%;
    bottom: -2px;
    border-radius: 20px;
    position: absolute;
    background: #4A5568;
  }
  &.dark{
    .rock {
        background: #FFFFFF80;
    }
  }
  .truck, .wheels {
    transition: all ease;
    width: 85px;
    margin-right: -60px;
    bottom: 0px;
    right: 50%;
    position: absolute;
    background: #eee;
  }
  .truck {
    background: url(/images/icons/icon-truck.svg) no-repeat;
    background-size: contain;
    height: 60px;
  }
  &.dark{
    .truck {
        background: url(/images/icons/icon-truck-dark.svg) no-repeat;
        transform: scaleX(-1);
    }
  }
  .truck:before {
    content: " ";
    position: absolute;
    width: 25px;
    box-shadow:
      -30px 28px 0 1.5px #fff,
       -35px 18px 0 1.5px #fff;
  }
  &.dark{
    .truck:before {
        display: none;
    }
  }
  .wheels {
    background: url(/images/icons/icon-wheels.svg) no-repeat;
    height: 15px;
    margin-bottom: 0;
  }
  &.dark {
    .wheels{
        display: none;
    }
  }
  
  .tree  { animation: tree 3s 0.000s linear infinite; }
  .tree:nth-of-type(2)  { animation: tree2 2s 0.150s linear infinite; }
  .tree:nth-of-type(3)  { animation: tree3 8s 0.050s linear infinite; }
  .rock  { animation: rock 4s   -0.530s linear infinite; }
  .truck  { animation: truck 4s   0.080s ease infinite; }
  .wheels  { animation: truck 4s   0.001s ease infinite; }
  .truck:before { animation: wind 1.5s   0.000s ease infinite; }
  

  @keyframes tree {
    0%   { transform: translate(1350px); }
    50% {}
    100% { transform: translate(-50px); }
  }
  @keyframes tree2 {
    0%   { transform: translate(650px); }
    50% {}
    100% { transform: translate(-50px); }
  }
  @keyframes tree3 {
    0%   { transform: translate(2750px); }
    50% {}
    100% { transform: translate(-50px); }
  }
  
  @keyframes rock {
    0%   { right: -200px; }
    100% { right: 2000px; }
  }
  @keyframes truck {
    0%   { }
    6%   { transform: translateY(0px); }
    7%   { transform: translateY(-6px); }
    9%   { transform: translateY(0px); }
    10%   { transform: translateY(-1px); }
    11%   { transform: translateY(0px); }
    100%   { }
  }
  @keyframes wind {
    0%   {  }
    50%   { transform: translateY(3px) }
    100%   { }
  }
  @keyframes mtn {
    100% {
      transform: translateX(-2000px) rotate(130deg);
    }
  }
  @keyframes hill {
    100% {
      transform: translateX(-2000px);
    }
  }

`;


const IntroAnimation = () => {

    const lightMountainStyles = `
    box-shadow: 
    0 0 0 50px #4DB6AC,
    60px 50px 0 70px #4DB6AC,
    90px 90px 0 50px #4DB6AC,
    250px 250px 0 50px #4DB6AC,
    290px 320px 0 50px #4DB6AC,
    320px 400px 0 50px #4DB6AC;
    `

    const darkMountainStyles = `
        box-shadow: 
        0 0 0 50px pink,
        60px 50px 0 70px pink,
        90px 90px 0 50px pink,
        250px 250px 0 50px pink,
        290px 320px 0 50px pink,
        320px 400px 0 50px pink;
    `

  return (
    <IntroBox className={useColorModeValue('', 'dark')}>
      <Box className="loop-wrapper">
        <Box className="mountain"></Box>
        <Box className="hill"></Box>
        <Box className="tree"></Box>
        <Box className="tree"></Box>
        <Box className="tree"></Box>
        <Box className="rock"></Box>
        <Box className="truck"></Box>
        <Box className="wheels"></Box>
      </Box>
      <Text textAlign="center" fontSize="2rem" mt={6} mb={4}>Way back into code</Text>
    </IntroBox>
  );
};

export default IntroAnimation;
