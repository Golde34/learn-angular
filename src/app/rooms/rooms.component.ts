import { Component } from '@angular/core';
import { Room } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent {
  
  hotelName = 'Golde Hotel';

  numberOfRooms = 10;
  
  hideRooms = true;

  rooms : Room =  { 
    totalRooms:20, 
    availableRooms: 10, 
    bookedRooms: 5, 
  };
  
  constructor() { }

  ngOnInit(): void {

  }
  toggle() {
    this.hideRooms = !this.hideRooms;    
  }  
} 