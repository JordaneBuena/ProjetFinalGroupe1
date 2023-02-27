import {AfterContentInit, AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {CalendarOptions} from "@fullcalendar/core";
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin, {Draggable} from '@fullcalendar/interaction';
import {NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {BsModalService, BsModalRef} from "ngx-bootstrap/modal";
import {CourseService} from "../course.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Course} from "../../model/course.model";
import {Days} from "../../model/days.enum";
import {Klass} from "../../model/klass.model";

@Component({

  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
//export class CalendarComponent implements OnInit, AfterViewInit {
  export class CalendarComponent implements OnInit {

  currentModal: NgbModalRef | undefined
  modalRef?: BsModalRef;

  title:any;

  clickedCourse!: Course

  start: any
  end: any
  eventStart : string | undefined;
  eventEnd: string | undefined;
  eventDay!: number

  @Input()
  klass!: Klass;

  day : string = '';
  @Input() startInput : any;
  @Input() endInput: any;

  courses: Course[] = []

  events: any[] = []

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
    select:this.addEventClick.bind(this),
    eventDrop:this.dropEvent.bind(this),
    eventResize:this.resizeEvent.bind(this)
  };

  config ={
    animated: true
  };
  @ViewChild('templateInfo') templateInfo!: string;

  @ViewChild('templateAdd') templateAdd!:string;

  constructor(private modalService:BsModalService,
              private cServ: CourseService,
              private route: ActivatedRoute,
              private router: Router,
              private courseServ: CourseService){
  }


  ngOnInit():void{
    const id = this.route.snapshot.paramMap.get('kId') || '';
    if (id != '') {
      this.cServ.findAll().subscribe(v => {
        this.courses = v.filter(c => c.klass.id === +id)
        console.log(v)
        console.log(Object.values(Days).indexOf(v[0].day) + 1)
        console.log(Object.values(Days).indexOf(v[1].day) + 1)
        this.CoursesToEvents()
        this.calendarOptions.events = this.events
      })
    }
  }

  //Edit en event by clicking
  handleDateClick(arg:any){
    console.log(arg);
    console.log(arg.event._def.title);
    console.log(arg.event.start)
    console.log(arg.event._def.publicId)
    this.courseServ.findOne(arg.event._def.publicId).subscribe(v => {
      this.clickedCourse = v
      console.log(v)
      this.modalRef = this.modalService.show(this.templateInfo, this.config)})
  }

 addEventClick(arg:any):void{
    console.log(arg)
    console.log(arg.end.toLocaleTimeString())
    console.log(arg.end.getDay())
   this.eventDay = arg.start.getDay()
   this.eventStart = arg.start.toLocaleTimeString()
   this.eventEnd = arg.end.toLocaleTimeString()
 //   show modal dialog
   this.modalRef = this.modalService.show(this.templateAdd, this.config);
  }

   dropEvent(info:any):void{
     if(!confirm("Etes-vous sûr.e de vouloir déplacer ce cours ?")){
     info.revert(); }
 }

   resizeEvent(arg:any):void{
     console.log(arg.event.end);
   }

/*  ngAfterViewInit(): void {
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
  }*/
  CoursesToEvents() {
    this.courses.map(c => this.events.push(
      {
        id: c.id,
        title: c.subject.name,
        startTime: c.start,
        endTime: c.end,
        backgroundColor: c.subject.color,
        daysOfWeek: [Object.values(Days).indexOf(c.day) + 1],
      }
    ))
  }
  closeModal() {
    this.modalRef?.hide()
    this.router.navigate([this.router.url])
  }

  deleteClickeddCourse() {
    this.courseServ.delete(this.clickedCourse?.id).subscribe(() => {
      this.closeModal()
    })
  }
}
