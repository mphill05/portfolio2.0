import styled from "styled-components";

export const StyledButton = styled.button`
  padding-top: 10px;
  position: relative;
	padding: 10px 30px;
	color: #21ebff;
	text-decoration: none;
	text-transform: uppercase;
	letter-spacing: 2px;
	${'' /* font-size: 14px; */}
	overflow: hidden;
	transition: 0.5s;
	-webkit-box-reflect: below  1px linear-gradient(transparent,#0003);

  filter: hue-rotate(270deg);

  &:hover {
    transition-delay: 0.5s;
    background: #21ebff;
    color: #111;
    box-shadow: 0 0 50px #21ebff;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 10px;
    height: 10px;
    border-top: 2px solid #21ebff;
    border-left: 2px solid #21ebff;
    transition: 0.5s;
    transition-delay: 0.5s;
  }

  &:hover::before {
    width: 100%;
    height: 100%;
    transition-delay: 0s;
  }

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 10px;
    height: 10px;
    border-bottom: 2px solid #21ebff;
    border-right: 2px solid #21ebff;
    transition: 0.5s;
    transition-delay: 0.5s;
  }

  &:hover::after {
    width: 100%;
    height: 100%;
    transition-delay: 0s;
  }
`;