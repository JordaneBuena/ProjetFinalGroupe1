import {Component} from '@angular/core';
import {CalendarOptions} from "@fullcalendar/core";
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {SubjectService} from "../subject.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {

  currentModal: NgbModalRef | undefined

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
    headerToolbar: {
      left: 'prev today',
      center: 'title',
      right: 'next'},
    buttonText: {today:'Aujourd\'hui'
    },
    initialView: 'timeGridWeek',
    weekends: false,
    nowIndicator: true,
    slotMinTime: "08:00:00",
    slotMaxTime: "21:00:00",
    locale: 'fr',
    events : [{
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
      }],
    editable:true,
    selectable:true,

    eventClick: function(info) {
      alert('Event: ' + info.event.title + '\n' + info.event.start + '\n' + info.event.end);},

    select: function(date  ) {
      // set values in inputs
      date.start;
      date.end;


    }
  };


}
