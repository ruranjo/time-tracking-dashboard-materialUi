import { Box,  SxProps, Typography } from '@mui/material'
import React from 'react'
import { TimeTraking } from '../../interfaces/TimeTraking.interface'
import { darkBlue, fontFamily, fontWeightLarge, primaryWhite } from '../../styles/variables';
import iconEllipsis from '../../assets/images/icon-ellipsis.svg'
export interface Props {
  timeTraking: TimeTraking;  
}

export interface styledCard {
  containerStyle: SxProps;
  frontTimeInformation : SxProps;
  iconStyle: SxProps;
  TitleBox: SxProps;
}
  
  const TimeTRakingCardStyle: styledCard = {
      containerStyle:{
        position:'relative',
        display:'flex',
        flexDirection:'column',
        justifyContent:'flex-end',
        borderRadius:'16px',
        width: '30%',
        minWidth: '200px',
        maxHeight: '200px',
        minHeight: '220px',
        '@media screen and (max-width: 870px)': {
            width: '90%',
            minWidth: '160px',
        },
      },
      frontTimeInformation:{
        position: 'absolute',
        backgroundColor: darkBlue,
        width:'100%',
        height:'70%',
        zIndex:10,
        borderRadius:'10px',
        '@media screen and (max-width: 870px)':{
           
        },
      },
      iconStyle:{
        position: 'absolute',
        right:'0px',
        top:'0px',
        '@media screen and (max-width: 870px)':{
           
        },
      },
      TitleBox:{
        display:'flex',
        paddingTop:'1.5rem',
        color:primaryWhite,
        justifyContent:'space-between',
        border:'1px solid red',
        marginLeft:'1rem',
        marginRight:'1rem',
        fontFamily:fontFamily,
        fontWeight:'500'
      }
    }

const TimeTrakingCard:React.FC<Props> = ({timeTraking}) => {
  return (
    <Box  sx={{...TimeTRakingCardStyle.containerStyle,  backgroundColor:timeTraking.color}} >
      <Box sx={TimeTRakingCardStyle.iconStyle} >
        <img src={timeTraking.icon} alt={timeTraking.title} />
      </Box>
        
      
      <Box sx={TimeTRakingCardStyle.frontTimeInformation} >
          <Box sx={TimeTRakingCardStyle.TitleBox}>
            <Typography  color={'inherit'}>{timeTraking.title}</Typography>
            <Box >
              <img src={iconEllipsis} alt="" />
            </Box>
          </Box>
      </Box>
    </Box>
  )
}

export default TimeTrakingCard

