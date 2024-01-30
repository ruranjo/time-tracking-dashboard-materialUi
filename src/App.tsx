import './App.css';
import React, { useState } from 'react';
import { Avatar, Box, Container, SxProps, Typography } from '@mui/material';
import avatarIcon from './assets/images/image-jeremy.png';
import dataUser from './utils/data.json'
import { darkBlue, desaturatedBlue, fontFamily, fontWeightSmall, primaryBlue, primaryGray, primaryWhite } from './styles/variables';
import { TimeTrakingCard } from './components';
import { metricTime } from './interfaces/TimeTraking.interface';


export interface styledCard {
  containerStyle: SxProps;
  boxStyle: SxProps;
  profileAndMenu: SxProps;
  timeFramers: SxProps;
  avatarIcon: SxProps;
  nameUser:SxProps;
  avatarAndText:SxProps;
  containerText:SxProps;
  buttonChangeMetricTime: SxProps;
  buttonStyle: SxProps;
  buttonSelectedStyle: SxProps;
}

const appStyle: styledCard = {
  containerStyle:{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      alignContent:'center',
      width:'100%',
      height:'100vh',
      '@media screen and (max-width: 870px)': {
        height:'auto',
      },
    },

    boxStyle:{
      display: 'flex',
      justifyContent:'space-between',
      width:'80%',
      
      '@media screen and (max-width: 440px)': {
        flexDirection:'column'
      },
    },

    profileAndMenu:{
      boxSizing:'border-box',
      display:'flex',
      flexDirection:'column',
      justifyContent:'space-between',
      width:'20%',
      minWidth:'220px',
      
      backgroundColor: darkBlue,
      borderRadius:'20px',
      '@media screen and (max-width: 870px)': {
        justifyContent:'flex-start',
        minWidth:'160px',
      },
      '@media screen and (max-width: 440px)': {
        width:'100%',
        marginTop:'1.5rem',
        marginBottom:'1.5rem',
        minWidth:'260px',
      },
      
    },

    timeFramers:{
      display:'flex',
      justifyContent:'center',
      flexWrap:'wrap',
      width:'78%',
      gap: '1.5rem',
      '@media screen and (max-width: 440px)': {
        width:'100%',
      },
    },

    avatarIcon:{
      width:'80px',
      height:'80px',
      marginLeft:'1.5rem',
      marginTop:'2rem',
      marginBottom:'2rem',
      border: "3px solid white",
      
      
    },
    avatarAndText:{
      
      borderRadius:'20px',
      backgroundColor:primaryBlue,
      height:'70%',
      fontWeight: fontWeightSmall,
      color: primaryWhite,
      marginBottom:'1rem',
      '@media screen and (max-width: 870px)': {
        height:'30%',
      },
      '@media screen and (max-width: 440px)': {
        display:'flex',
        width:'100%',
        justifyContent:'space-between',
        alignItems:'center'
      },
      
    },
    containerText:{
      marginLeft:'1.5rem',
    },
    nameUser:{
      fontSize: '2rem',
    },
    buttonChangeMetricTime:{
      color: primaryGray,
      marginLeft:'1.5rem',
      display:'flex',
      flexDirection:'column',
      alignItems:'flex-start',
      gap:'1rem',
      textAlign: 'left',
      marginBottom:'1.5rem',
      '@media screen and (max-width: 440px)': {
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        gap:'0rem',
        marginLeft:'0rem',
      },
    },
    buttonStyle:{
      display:'flex',
      alignItems:'flex-start',
      textAlign: 'left',
      textDecoration:'none',
      fontSize:'0.8rem',
      fontWeight:'700',
      textTransform: 'none',
      color: desaturatedBlue,
      cursor:'pointer',
      '&:hover': {
        color: 'white', // Cambiar el color de fondo al hacer hover
      },
    },
    buttonSelectedStyle:{
      display:'flex',
      alignItems:'flex-start',
      textAlign: 'left',
      textDecoration:'none',
      fontSize:'0.8rem',
      fontWeight:'700',
      textTransform: 'none',
      color: primaryWhite,
      cursor:'pointer',
      '&:hover': {
        color: 'white', // Cambiar el color de fondo al hacer hover
      } 
    }
    
  }

  


const App:React.FC<{}> = () => {
  const [timeShowSwetch, setTimeShowSwetch] = useState<metricTime>('daily'); 
  return (
    <Container maxWidth={false}  sx={appStyle.containerStyle}>
      <Box sx={appStyle.boxStyle}>
        <Box sx={appStyle.profileAndMenu}>
          
          <Box sx={appStyle.avatarAndText}>
            <Avatar alt=""  src={avatarIcon} sx={appStyle.avatarIcon}/>
            <Box sx={appStyle.containerText}>
              <Typography  fontFamily={fontFamily} color={primaryGray} fontSize={'12px'}  variant='subtitle1'>Report for</Typography>
              <Typography  variant='h2' fontFamily={fontFamily} sx={appStyle.nameUser}>Jeremy Robson</Typography>
            </Box>
          </Box>

          <Box sx={appStyle.buttonChangeMetricTime}>
          <Typography onClick={()=>{setTimeShowSwetch('daily')}} sx={timeShowSwetch ==='daily' ? appStyle.buttonSelectedStyle: appStyle.buttonStyle} color='inherit'>Daily</Typography>
    <Typography onClick={()=>{setTimeShowSwetch('weekly')}} sx={timeShowSwetch ==='weekly' ? appStyle.buttonSelectedStyle: appStyle.buttonStyle} color='inherit'>Weekly</Typography>
    <Typography onClick={()=>{setTimeShowSwetch('monthly')}} sx={timeShowSwetch ==='monthly' ? appStyle.buttonSelectedStyle: appStyle.buttonStyle} color='inherit'>Monthly</Typography>
          </Box>
        </Box>
        
        <Box sx={appStyle.timeFramers}>
          
        {
          dataUser.map((timeTrackingSingle, index)=>{
            
            return(
              <> 
                <TimeTrakingCard timeTracking={timeTrackingSingle} metricTime={timeShowSwetch} key={index}/>
              </>
            );
          })
        }
        </Box>
      </Box>
    </Container>
  )
}

export default App;
