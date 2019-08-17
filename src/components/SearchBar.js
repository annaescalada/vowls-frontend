import React from 'react'
import styled from 'styled-components'

const SearchContainerSC = styled.div`
display:flex;
align-items: center;
`;

const SearchIconContainerSC = styled.div`
display:flex;
align-items: center;
justify-content: space-between;
width:60px!important;
border-left: solid 1px #cacaca;
border-top: solid 1px #cacaca;
border-bottom: solid 1px #cacaca;
border-radius: 50px 0 0 50px ;
padding:10px;
`;

const SearchInputContainerSC = styled.div`
display:flex;
align-items: center;
justify-content: space-between;
border-top: solid 1px #cacaca;
border-bottom: solid 1px #cacaca;
border-right: solid 1px #cacaca;
border-radius: 0 50px 50px 0;
`;

const SearchIconSC = styled.img`
width:30px;
height:30px;
`;

const SearchInputSC = styled.input`
  border: none!important;
  border-radius: 50px!important;
  margin:0!important;
`;

function SearchBar(props) {
    return (
        <>
            <SearchContainerSC>
            <SearchIconContainerSC>
              <SearchIconSC src="./images/Menu-icons/Search.png" alt="search-icon"/>
            </SearchIconContainerSC>
            <SearchInputContainerSC>
              <SearchInputSC type="text" placeholder='Buscar' id='search' name='search' value={props.value} onChange={props.onChange}></SearchInputSC>
            </SearchInputContainerSC>
          </SearchContainerSC>
        </>
    )
}

export default SearchBar
