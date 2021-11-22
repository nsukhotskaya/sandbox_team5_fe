import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import dayjs from 'dayjs';
import { useDispatch } from 'react-redux';
import setBestContactTime from '../../store/commands/setBestContactTime';
import { getFieldLabel } from '../../utils';

const Calendar = (props) => {
  const [freeTime, setFreeTime] = useState();
  const [startT, setStart] = useState();
  const [endT, setEnd] = useState();
  const dispatch = useDispatch();
  const setTime = (time) => {
    const startTime = dayjs(time.startStr, 'X');
    const endTime = dayjs(time.endStr, 'X');
    setStart(startTime);
    setEnd(endTime);
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
          // eslint-disable-next-line
          text: freeTime
            ? getFieldLabel('profile.calendar.buttonText.full')
                .replace(/%(\w*)%/, `${startT}`)
                .replace(/%(\w*)%/, `${endT}`)
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
      googleCalendarApiKey="AIzaSyCedd9kcRmZ5SDFy4ORMvC9NwDxtnwEAl4"
      events={{ googleCalendarId: 'ostroumov.alex.work@gmail.com' }}
    />
  );
};

export default Calendar;
