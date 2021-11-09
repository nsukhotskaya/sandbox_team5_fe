import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';

export default class DemoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <FullCalendar
        plugins={[
          timeGridPlugin,
          listPlugin,
          dayGridPlugin,
          googleCalendarPlugin,
          interactionPlugin,
        ]}
        headerToolbar={{
          start: 'title',
          center: '',
          end: 'today prev,next listDay,timeGridWeek,dayGridMonth',
        }}
        initialView="timeGridWeek"
        allDaySlot={false}
        height="100%"
        expandRows
        navLinks
        listDayFormat={false}
        slotMinTime="08:00:00"
        editable
        googleCalendarApiKey="AIzaSyCedd9kcRmZ5SDFy4ORMvC9NwDxtnwEAl4"
        events={{ googleCalendarId: 'ostroumov.alex.work@gmail.com' }}
      />
    );
  }
}
