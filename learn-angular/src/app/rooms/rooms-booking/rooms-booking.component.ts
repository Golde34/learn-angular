import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-rooms-booking',
  templateUrl: './rooms-booking.component.html',
  styleUrls: ['./rooms-booking.component.css']
})
export class RoomsBookingComponent implements OnInit{

    id$ = this.router.paramMap.pipe(map(paramMap => paramMap.get('roomNumber')));

    constructor(private router: ActivatedRoute) { }
  
    ngOnInit(): void {
    }
}
