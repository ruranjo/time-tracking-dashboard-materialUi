import { Box, Container, SxProps } from '@mui/material'
import './App.css'
import React from 'react'

export interface styledCard {
  containerStyle: SxProps;
  boxStyle: SxProps;
  profileAndMenu: SxProps;
  timeFramers: SxProps;
}

const appStyle: styledCard = {
  containerStyle:{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      alignContent:'center',
      width:'100%',
      height:'100vh',
      border:'1px solid red'
    },

    boxStyle:{
      display: 'flex',
      width:'80%',
      height:'460px',
      border:'1px solid yellow'
    },

    profileAndMenu:{
      width:'20%',
      border:'1px solid blue'
    },

    timeFramers:{
      width:'80%',
      border:'1px solid purple'
    },
  }


const App:React.FC<{}> = () => {
  

  return (
    <Container maxWidth={false}  sx={appStyle.containerStyle}>
      <Box sx={appStyle.boxStyle}>
        <Box sx={appStyle.profileAndMenu}>
        hola
        </Box>
        <Box sx={appStyle.timeFramers}>
        hola
        </Box>
      </Box>
    </Container>
  )
}

export default App;
