import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';
import { RoomsService } from './services/rooms.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})

export class RoomsComponent implements OnInit {
  
  hotelName = 'Golde Hotel';
  numberOfRooms = 20;
  hideRooms = true;
  role = 'public';
  selectedRoom!: RoomList;

  roomList: RoomList[] = [];

  rooms : Room =  { 
    totalRooms:20, 
    availableRooms: 10, 
    bookedRooms: 5, 
  };
  
  constructor(private roomService: RoomsService) { }

  ngOnInit(): void {
    this.roomService.getRooms().subscribe((rooms) => {this.roomList = rooms});
  }

  toggle() {
    this.hideRooms = !this.hideRooms;    
  }  

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
    console.log(room);
  }

  addRoom() {
    const room:RoomList = {
      roomType: 'Delux Room',
      amenities: 'TV, AC, Fridge',
      price: 2000,
      photos: "pic url",
      checkinTime: new Date('2022-12-06'),
      checkoutTime: new Date(),
      rating: 4.5
  } 
    this.roomService.addRoom(room).subscribe((room) => this.roomList.push(room));
  }
} 