import React from 'react'
import styled from 'styled-components'

const Vowl = styled.img`
  width:100%;
`
const ImgContainerSC = styled.div`
  position: absolute;
  left: -110px;
  height: 240px;
  bottom: -50px;
`

const VowlSC = styled.img`
  height: 100%;
  transform: rotate(180deg);
`

function ImageBottom() {
    return (
        <>
        <ImgContainerSC>
          <VowlSC src='images/vowl2.jpg'/>
        </ImgContainerSC>
        </>
    )
}

export default ImageBottom
