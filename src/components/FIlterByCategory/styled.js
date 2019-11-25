import styled from 'styled-components'

export const HorizontalScroll = styled.div`
	display: flex;
	height: 42px;
	flex-wrap: nowrap;
  overflow-x: auto;
	overflow-scrolling: touch;
	margin-top: 8px;

	&::-webkit-scrollbar {
    display: none;
	}
	
	& button {
		flex: 0 0 auto;
	}
`
export const Button = styled.button`
	border: none;
	background-color: #fff;
	font-size: 16px;
	letter-spacing: -0.39px;
	margin: 0 16px;
	color: black;
	&:focus {
		color: #e8222e;
		outline: none;
	}
`
