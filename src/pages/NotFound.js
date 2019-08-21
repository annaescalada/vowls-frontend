import React from 'react'
import styled from 'styled-components'

const NotFoundContainerSC = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
`;

const ImgContainerSC = styled.div`
    display:flex;
    margin-top: 30px;
    align-items:center;
    text-align:center;
    flex-direction:column;
`

const ImgSC = styled.img`
    width: 200px;
    margin-top: 20px;
`


function NotFound() {
  return (
    <>
    <NotFoundContainerSC>
      <h2>Pagina no encontrada</h2>
      <p><span>La página que buscas no existe</span>.</p>
      <ImgContainerSC>
        <ImgSC src="./images/Food-icons/Vowl.png"></ImgSC>
      </ImgContainerSC>
    </NotFoundContainerSC>
    </>
  )
}

export default NotFound;