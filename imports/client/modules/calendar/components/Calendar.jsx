import React, {PropTypes} from 'react'
import ReactCalendar from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'

ReactCalendar.setLocalizer(
  ReactCalendar.momentLocalizer(moment)
)

const Calendar = () => {
  return (
    <div style={{height: '100vh'}}>
      <div style={{height: '90vh'}}>
        <ReactCalendar
          events={[]}
          defaultDate={new Date}
          selectable
          onSelectSlot={(e) => {console.log(e)}}
          view={'week'}
        />
      </div>
    </div>
  )
}


Calendar.propTypes = {
}

export default Calendar
