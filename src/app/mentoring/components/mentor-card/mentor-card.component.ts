import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mentor-card',
  templateUrl: './mentor-card.component.html',
  styleUrls: ['./mentor-card.component.scss'],
})
export class MentorCardComponent implements OnInit {

  @Input() cardData: any;

<<<<<<< HEAD

  constructor(private router:Router) { }

  ngOnInit() {
   console.log(this.cardData);
  
  }

  openMentorDetails() {
    console.log("called route")
    this.router.navigate(['/mentoring/mentor-details'],{state:{mentor:this.cardData}})
=======
  constructor() { }

  ngOnInit() {
>>>>>>> kiran/hackathon
  }

}
