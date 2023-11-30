import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { MakeCallService } from '../make-call.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  username:any;
  fact:any;
  latitude:any;
  longitude:any;
  myDate:any;
  timeData:any;
  selectedLat:any;
  selectedLong:any;
  selectedDate:any;
  constructor(
    private modalService: NgbModal,
    private router: Router,
    private makeCall: MakeCallService
    ) {
    if(localStorage.getItem('userName')){
      this.username = localStorage.getItem('userName');
    }else{
      this.router.navigate(['/']);
    }
    if(localStorage.getItem('timeData')){
      this.timeData = JSON.parse(localStorage.getItem('timeData')  || '{}');
      this.latitude = localStorage.getItem('selectedLat');
      this.longitude = localStorage.getItem('selectedLong');
      this.myDate = JSON.parse(localStorage.getItem('selectedDate')  || '{}');
    }

  }

  ngOnInit(): void {
      this.getFact();
  }


  public open(modal: any): void {
    this.modalService.open(modal);
  }

  getFact(){
    this.makeCall.getFact().subscribe((result) => {
      this.fact = result;
    });
  }

  getTime(){
    if (!this.latitude || !this.longitude  || !this.myDate ) {
      alert('Please Fill Required Fields!');
      return;
    }

    let date = this.myDate.year+ '-' +this.myDate.month+ '-' +this.myDate.day;
    localStorage.setItem('selectedLat',this.latitude);
    localStorage.setItem('selectedLong',this.longitude);
    localStorage.setItem('selectedDate',JSON.stringify(this.myDate));
    this.getSunriseSunsetData(this.latitude, this.longitude, date);
  }

    // Example function to fetch sunrise/sunset data
    getSunriseSunsetData(lat: number, lon: number, date: string) {
      this.makeCall.getSunriseSunset(lat, lon, date).subscribe(
        (data) => {
          this.timeData = data.results;
          localStorage.setItem('timeData',JSON.stringify(data.results));
        },
        (error) => {
          console.error('Error fetching Sunrise/Sunset data:', error);
        }
      );
    }

}
