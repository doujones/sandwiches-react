import styled from "styled-components";
import {Title} from '../../CSS/title'

export const Nike = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
gap: 60px;
`
export const NikeOneLabel = styled(Title)`
position: absolute;
background-color: rgba(255, 255, 255, 0.8);
padding: 5px;
`

export const Nike1 = styled.div`
height: 100px;
padding: 10px;
font-size: 20px;
background-image: ${({img}) => `url(${img});`};
background-position: center;
background-size: cover;
filter: contrast(75%);
border-radius: 7px;
margin-top: 5px;
transition-duration: .1s;
transition-property: box-shadow margin-top filter;
box-shadow: 1px 0px 10px 0px orange;
&:hover{
  cursor: pointer;
  filter: contrast(100%);
  box-shadow: 0px 0px 10px 0px grey;
  margin-top: 0px;
  margin-bottom: 5px;
}
`

