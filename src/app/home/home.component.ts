import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }
  imageUrls = [
    { url: 'https://via.placeholder.com/2040x1360', caption: 'The first slide', href: '#' },
    { url: 'https://via.placeholder.com/2040x1360', clickAction: () => alert('custom click function') },
    { url: 'https://via.placeholder.com/2040x1360', caption: '', href: '#' },
    'https://via.placeholder.com/2040x1360'
  ];
  height: string = '300px';
  minHeight: string;
  arrowSize: string = '30px';
  showArrows: boolean = true;
  disableSwiping: boolean = false;
  autoPlay: boolean = true;
  autoPlayInterval: number = 3333;
  stopAutoPlayOnSlide: boolean = false;
  debug: boolean = true;
  backgroundSize: string = 'cover';
  backgroundPosition: string = 'center center';
  backgroundRepeat: string = 'no-repeat';
  showDots: boolean = true;
  dotColor: string = '#FFF';
  showCaptions: boolean = true;
  captionColor: string = '#FFF';
  captionBackground: string = 'rgba(0, 0, 0, .35)';
  lazyLoad: boolean = false;
  width: string = '100%';
}
