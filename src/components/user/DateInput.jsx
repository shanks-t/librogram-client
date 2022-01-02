import React from 'react'

import TextField from '@mui/material/TextField'
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DateAdapter from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import DateFnsUtils from '@date-io/date-fns';
import StaticDatePicker from '@mui/lab/StaticDatePicker';
import CalenderPicker from '@mui/lab/CalendarPicker'

const DatePicker = ({ handleOnChange, date, setStart, children }) => {
    const [value, setValue] = React.useState(new Date());

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns} >
            <StaticDatePicker
                id='startDate'
                name='startDate'
                label={children}
                inputFormat="MM/dd/yyyy"
                value={date}
                onChange={(event) => { handleOnChange(event)}}
            />
        </LocalizationProvider>
    )
}

export default DatePicker