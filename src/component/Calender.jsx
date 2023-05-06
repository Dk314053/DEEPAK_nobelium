import  React from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';


export default function Calender() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
   
      <DemoContainer
        components={[ 'DesktopDatePicker']} sx={{textAlign:"center",marginLeft:"25rem",marginTop:"10%",color:"red",textDecoration:"underline"}}
      >
 
        <DemoItem label="Calender"  >
          <DesktopDatePicker defaultValue={dayjs('2022-04-17')} />
        </DemoItem>
      
      </DemoContainer>
    </LocalizationProvider>
  );
}