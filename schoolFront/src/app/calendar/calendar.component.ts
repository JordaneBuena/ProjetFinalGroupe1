import {AfterContentInit, AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {CalendarOptions} from "@fullcalendar/core";
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin, {Draggable} from '@fullcalendar/interaction';
import {NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {BsModalService, BsModalRef} from "ngx-bootstrap/modal";

@Component({

  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit, AfterViewInit {

  currentModal: NgbModalRef | undefined
  modalRef?: BsModalRef;

  title:any;

  start : any;
  end: any;

  day : string = '';
  @Input() startInput : any;
  @Input() endInput: any;


  events: any = [{
    "title": "Philo",
    "startTime": "09:30",
    "endTime": "13:00",
    "backgroundColor": "orange",
    "daysOfWeek": ['1']
  },
    {
      "title": "Musique",
      "startTime": "15:30:00",
      "endTime": "17:00:00",
      "backgroundColor": "salmon",
      "daysOfWeek": ['5']
    },
    {
      "title": "Arts Plastique",
      "startTime": "10:30:00",
      "endTime": "16:00:00",
      "backgroundColor": "Lavender",
      "daysOfWeek": ['3']
    }]

  container: any = this.events[0];

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
    headerToolbar: {
      left: 'prev today',
      center: 'title',
      right: 'next'
    },
    buttonText: {
      today: 'Aujourd\'hui'
    },
    initialView: 'timeGridWeek',
    weekends: false,
    nowIndicator: true,
    slotMinTime: "08:00:00",
    slotMaxTime: "21:00:00",
    locale: 'fr',
    editable: true,
    droppable: true,
    selectable: true,
    eventSources: [{events: this.events}],
    eventClick: this.handleDateClick.bind(this),
    select:this.addEventClick.bind(this)
  };

  config ={
    animated: true
  };
  @ViewChild('templateInfo') templateInfo!: string;

  @ViewChild('templateAdd') templateAdd!:string;

  constructor(private modalService:BsModalService){
  }


  ngOnInit():void{

  }

  handleDateClick(arg:any){
    console.log(arg);
    console.log(arg.event._def.title);
  this.title = arg.event._def.title;
    this.start= arg.event.start;
    this.end = arg.event.end;
    this.day = arg.event._def.recurringDef.typeData.daysOfWeek[0];
  switch(arg.event._def.recurringDef.typeData.daysOfWeek[0])
  {
    case '1': {
      this.day = "Lundi";
      break;
    }
    case '2': {
      this.day = "Mardi";
      break;
    }
  case '3': {
      this.day = "Mercredi";
      break;
    }
  case '4': {
      this.day = "Jeudi";
      break;
    }
  case '5': {
      this.day = "Vendredi";
      break;
    }
    default:
      {
        //statements;
        break;
      }
    }

    this.modalRef = this.modalService.show(this.templateInfo, this.config);
  }

 addEventClick(ard:any):void{
 //  this.modalRef = this.modalService.show('input[name=start]');
 //   this.modalRef = this.modalService.find('input[name=evtEnd]').val(
 //     this.end.format('YYYY-MM-DD HH:mm:ss')
 //   );
 //   show modal dialog
   this.modalRef = this.modalService.show(this.templateAdd, this.config);}

  ngAfterViewInit(): void {
    this.container = new ElementRef('external');
    new Draggable(this.container.nativeElement, {
      itemSelector: '.fc-event',
      eventData: (eventEl) => {
        console.log(eventEl);
        this.title = eventEl.getAttribute("title");

        return {
          title: eventEl.innerText,
        };
      },
    });
  }
}
