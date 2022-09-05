import { tasksData } from "./utils/sample_data";
import TasksHeader from "./components/Header";
import TasksCalendarNav from "./components/CalendarNav";
// import { Calendar } from '@arco-design/web-react';
import { Calendar, momentLocalizer } from "react-big-calendar";
import dayjs from "dayjs";
import moment from 'moment'
// import { utils } from "./utils/Calendar.utils";

import "react-big-calendar/lib/css/react-big-calendar.css"
import { useCallback, useState } from "react";
import { getAllTasks } from "./utils/_utils";

// Setup the localizer by providing the moment (or globalize, or Luxon) Object
// to the correct localizer.

const TasksCalendar = (props) => {
  const [calendarScale, setCalendarScale] = useState('month')
  const localizer = momentLocalizer(moment);
  const events = getAllTasks(tasksData)
  const [defaultDate, setDefaultDate] = useState(tasksData.timeframe.start)
  const eventPropGetter = useCallback(
    (event, start, end, isSelected) => ({
      ...({className: event.status.color})
    }),
    []
  )
  return (
    <>
      <TasksHeader name={tasksData.projects[0].name} />
      <TasksCalendarNav calendarScale={calendarScale} setCalendarScale={setCalendarScale} defaultDate={defaultDate} setDefaultDate={setDefaultDate} start={tasksData.timeframe.start} end={tasksData.timeframe.end} />
      <div className="overflow-auto p-3 bg-gray-50" style={{ height: 800 }}>
        <Calendar
          className="gk-calendar"
          defaultDate={defaultDate.format('YYYY-MM-DD')}
          date={defaultDate.format('YYYY-MM-DD')}
          localizer={localizer}
          events={events}
          toolbar={false}
          startAccessor="start"
          endAccessor="end"
          eventPropGetter={eventPropGetter}
          view={calendarScale}
          onView={calendarScale}
          onNavigate={(newDate) => setDate(newDate)}
        />
      </div>
    </>
  );
};
export default TasksCalendar;
