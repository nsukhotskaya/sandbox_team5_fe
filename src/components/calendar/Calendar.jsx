import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { getFieldLabel } from '../../utils';

export default class DemoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { headerType } = this.props;

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
          myCustomButton: {
            text: `${getFieldLabel('profile.calendar.button')}`,
            click() {},
          },
        }}
        headerToolbar={headerType}
        footerToolbar={{
          start: '',
          center: '',
          end: 'myCustomButton',
        }}
        initialView="timeGridWeek"
        allDaySlot={false}
        height="100%"
        expandRows
        navLinks
        selectable
        listDayFormat={false}
        slotMinTime="08:00:00"
        editable
        googleCalendarApiKey="AIzaSyCedd9kcRmZ5SDFy4ORMvC9NwDxtnwEAl4"
        events={{ googleCalendarId: 'ostroumov.alex.work@gmail.com' }}
      />
    );
  }
}
