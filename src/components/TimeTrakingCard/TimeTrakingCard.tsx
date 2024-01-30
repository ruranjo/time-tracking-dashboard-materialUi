import { Box,  IconButton,  SxProps, Typography } from '@mui/material'
import React from 'react'
import { TimeTraking, metricTime } from '../../interfaces/TimeTraking.interface'
import { darkBlue, fontFamily, primaryWhite} from '../../styles/variables';
import iconEllipsis from '../../assets/images/icon-ellipsis.svg'

export interface Props {
  timeTracking: TimeTraking;  
  metricTime: metricTime;
}

export interface styledCard {
  containerStyle: SxProps;
  frontTimeInformation : SxProps;
  iconStyle: SxProps;
  TitleBox: SxProps;
  timeViewData: SxProps;
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
        marginLeft:'1rem',
        marginRight:'1rem',
        fontFamily:fontFamily,
        fontWeight:'500'
      },
      timeViewData:{
        color:primaryWhite,
        paddingLeft:'1.5rem',
        marginBottom:'1.5rem'
      }
    }

  

const TimeTrakingCard:React.FC<Props> = ({timeTracking, metricTime}) => {
  let numericValueCurrent = 0;
  let numericValuePrevius = 0;
  let stringValuePrevius = '';

  if (metricTime === 'daily' && timeTracking.timeframes.daily) {
    numericValueCurrent = timeTracking.timeframes.daily.current;
    numericValuePrevius = timeTracking.timeframes.daily.previous;
    stringValuePrevius = 'Day';

  } else if (metricTime === 'weekly' && timeTracking.timeframes.weekly) {
    numericValueCurrent = timeTracking.timeframes.weekly.current;
    numericValuePrevius = timeTracking.timeframes.weekly.previous;
    stringValuePrevius = 'Week';

  } else if (metricTime === 'monthly' && timeTracking.timeframes.monthly) {
    numericValueCurrent = timeTracking.timeframes.monthly.current;
    numericValuePrevius = timeTracking.timeframes.monthly.previous;
    stringValuePrevius = 'Month';
  }
 
 
  return (
    <Box  sx={{...TimeTRakingCardStyle.containerStyle,  backgroundColor:timeTracking.color}} >
      <Box sx={TimeTRakingCardStyle.iconStyle} >
        <img src={timeTracking.icon} alt={timeTracking.title} />
      </Box>
        
      
      <Box sx={TimeTRakingCardStyle.frontTimeInformation} >
          <Box sx={TimeTRakingCardStyle.TitleBox}>
            <Typography  color={'inherit'}>{timeTracking.title}</Typography>
            <IconButton >
              <img src={iconEllipsis} alt="" />
            </IconButton>
          </Box>
          
          <Box sx={TimeTRakingCardStyle.timeViewData}>
            <Typography variant='h3' color={'inherit'}>{numericValueCurrent}hrs</Typography>
            <Typography variant='subtitle1' color={'inherit'}>Last {stringValuePrevius} - {numericValuePrevius}hrs</Typography>
          </Box>
          
      </Box>
    </Box>
  )
}

export default TimeTrakingCard

