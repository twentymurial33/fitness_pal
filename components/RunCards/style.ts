import styled from "styled-components"

export const StyledContainer= styled.div`
text-align: center;
margin: auto;
width: 50rem;
`

export const FlipWrapper= styled.div`
display: flex;
justify-content: center;
margin: auto;
`


export const StyledFlipInner= styled.div`
	width: 100%;
	height: 100%;
	transform-style: preserve-3d;
`

export const StyledFlipFront = styled.div`
background-color: black ;
color: green;
`

export const StyledBack= styled.div`
	background-color: #fbd7f8;
	color: blue;
	transform: rotateY(180deg);
`


export const StyledCardContent= styled.div`
	padding: 20px;
	text-align: center;
`

export const FlipButton= styled.button`
	width: 100px;
	padding: 10px;
	font-size: 16px;
	margin-top: 10px;
	background-color: #f5d9fa;
	border: none;
	border-radius: 5px;
	cursor: pointer;
`
