import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base1-layout',
  templateUrl: './base1-layout.component.html',
  styleUrls: ['./base1-layout.component.scss']
})
export class Base1LayoutComponent implements OnInit {
  isMobile = false
  constructor(
    private breakpointObserver: BreakpointObserver
  ) { }

  ngOnInit(): void {
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(res => this.isMobile = res.matches)
  }

  onToggle(drawer: any){
    if(this.isMobile){
      drawer?.toggle()
    }
  }

}
