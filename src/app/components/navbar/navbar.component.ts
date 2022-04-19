import { Component, OnInit, Input } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() title: String = ''
  routeName: String = ''

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    this.router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        this.routeName = val.url
        console.log(val.url);
      }
    });
  }

  ngOnChanges(): void{

  }

}
