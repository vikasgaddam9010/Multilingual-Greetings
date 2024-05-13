import styled from 'styled-components'

export const Div = styled.div`
widht: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center
`
export const UnorderedList = styled.ul`
width: 500px;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0px;
margin-top: 30px;
list-style-type: none;
`
export const Button = styled.button`
background-color: ${props => (props.isTrue ? '#db1c48' : '#ffffff')};
font-weight: bold;
color: ${props => (props.isTrue ? '#ffffff' : '#db1c48')};
padding: 10px;
padding-left: 20px;
padding-right: 20px;
border: 1px solid #db1c48;
border-radius: 20px`

export const Img = styled.img`
margin: 30px;
width: 400px;
height: 300px;
`
