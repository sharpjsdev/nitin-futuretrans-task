import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  username;
  constructor(private modalService: NgbModal,private router: Router) {
    if(localStorage.getItem('userName')){
      this.username = localStorage.getItem('userName');
    }else{
      this.router.navigate(['/']);
    }
    

  }



  logout(){
    localStorage.clear();
    this.router.navigate(['/']);

  }
}
