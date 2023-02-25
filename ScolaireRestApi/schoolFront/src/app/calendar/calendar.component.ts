import {Component} from '@angular/core';
import {CalendarOptions} from "@fullcalendar/core";
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

@Component({

  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {

  evenements = [{
    "title": "Philo",
    "startTime": "09:30:00",
    "endTime": "13:00:00",
    "backgroundColor": "orange",
    "daysOfWeek": [ '1' ]
  },
    {
    "title": "Musique",
    "startTime": "15:30:00",
    "endTime": "17:00:00",
    "backgroundColor": "salmon",
    "daysOfWeek": [ '5' ]
  },{
    "title": "Arts Plastique",
    "startTime": "10:30:00",
    "endTime": "16:00:00",
    "backgroundColor": "Lavender",
    "daysOfWeek": [ '3' ]
  }]
  calendarOptions: CalendarOptions = {
    initialView: 'timeGridWeek',
    weekends: false,
    nowIndicator: true,
    slotMinTime: "08:00:00",
    slotMaxTime: "21:00:00",
    locale: 'fr',
    headerToolbar: {left: 'prev today', center: 'title', right: 'next'},
    buttonText: {today:'Aujourd\'hui'},
    events : this.evenements,
    editable:true,
    plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin]
  };

}
