import { Component, NgModule, OnInit } from '@angular/core';
import { RoomList } from '../rooms';
import { RoomsService } from '../services/rooms.service';
import { FormsModule, NgForm } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-rooms-add',
  templateUrl: './rooms-add.component.html',
  styleUrls: ['./rooms-add.component.css']
})
export class RoomsAddComponent implements OnInit{
  
      room: RoomList = {
        roomType: '',
        amenities: '',
        checkinTime: new Date(),
        checkoutTime: new Date(),
        photos: '',
        price: 0,
        rating: 0,
      }

      successMessage: string = '';

      constructor(private roomService:RoomsService) { }
    
      ngOnInit(): void {
      }

      AddRoom(roomsForm: NgForm) {
        this.roomService.addRoom(this.room).subscribe(
          (response) => {
            console.log(response);
            this.successMessage = 'Room added successfully';
            roomsForm.reset();
          },
          (error) => {
            console.log(error);
            this.successMessage = 'Room not added';
          }
        );
      }
}
