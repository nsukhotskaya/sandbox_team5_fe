import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import dayjs from 'dayjs';
import { useDispatch } from 'react-redux';
import { setBestContactTime } from '../../store/commands';
import { getFieldLabel } from '../../utils';

const Calendar = (props) => {
  const [freeTime, setFreeTime] = useState();
  const [startTime, setStart] = useState();
  const [endTime, setEnd] = useState();
  const dispatch = useDispatch();
  const setTime = (time) => {
    setStart(dayjs(time.startStr, 'X'));
    setEnd(dayjs(time.endStr, 'X'));
    const interval = 1800000;
    function splitInterval(start, end, step) {
      const result = [];
      for (let ts = start; ts < end; ts += step) {
        result[result.length] = {
          startTime: dayjs(ts).toISOString(),
          endTime: dayjs(ts + step).toISOString(),
        };
      }
      if (result.length === 1) {
        result[result.length] = end;
      }
      return result;
    }
    const result = splitInterval(startTime, endTime, interval);
    setFreeTime(result);
  };
  const { email } = props;
  const { headerType } = props;
  return (
    <FullCalendar
      plugins={[
        timeGridPlugin,
        listPlugin,
        dayGridPlugin,
        googleCalendarPlugin,
        interactionPlugin,
      ]}
      customButtons={{
        approveButton: {
          text: getFieldLabel('profile.calendar.button'),
          click: () => {
            dispatch(setBestContactTime(freeTime));
            setFreeTime();
          },
        },
        textButton: {
          text: freeTime
            ? getFieldLabel('profile.calendar.buttonText.full')
                .replace(/%(\w*)%/, `${startTime}`)
                .replace(/%(\w*)%/, `${endTime}`)
            : getFieldLabel('profile.calendar.buttonText.empty'),
          click: () => {},
        },
      }}
      headerToolbar={headerType}
      footerToolbar={{
        start: 'textButton',
        center: '',
        end: 'approveButton',
      }}
      initialView="timeGridWeek"
      allDaySlot={false}
      height="100%"
      expandRows
      navLinks
      selectable
      select={setTime}
      listDayFormat={false}
      slotMinTime="08:00:00"
      editable
      googleCalendarApiKey="AIzaSyCN8PD2jFBb_K6p7U7PpWQ6JuYb_CAptkU"
      events={{ googleCalendarId: email }}
    />
  );
};

export default Calendar;
