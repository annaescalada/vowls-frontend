import React from 'react'
import styled from 'styled-components'

const ImgContainerSC = styled.div`
  display:flex;
  justify-content:center;
`

const VowlSC = styled.img`
  width:300px;
`

function ImageBottom() {
    return (
        <>
        <ImgContainerSC>
          <VowlSC src='images/vowl2.png'/>
        </ImgContainerSC>
        </>
    )
}

export default ImageBottom
