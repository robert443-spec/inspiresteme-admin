import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { FirbaseService } from '../services/firbase.service';
import { User } from '../shared/services/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user =""
 @Output() isLogout = new EventEmitter<void>()
  constructor( public firebase : FirbaseService) { }

  ngOnInit(): void {
  }
  logout(){
    this.firebase.logout()
    this.isLogout.emit()
  }

}
