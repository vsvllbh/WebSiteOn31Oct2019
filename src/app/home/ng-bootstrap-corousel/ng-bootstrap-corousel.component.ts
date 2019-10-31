import { Component, ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ng-bootstrap-corousel',
  templateUrl: './ng-bootstrap-corousel.component.html',
/*
  providers: [NgbCarouselConfig],
*/
  styleUrls: ['./ng-bootstrap-corousel.component.css']
})
export class NgBootstrapCorouselComponent {
  mimages: any[] = [{
    url: 'assets/student1.jpg'
  }, {
    url: 'assets/student2.jpg'
  }, {
    url: 'assets/student3.jpg'
  }, {
    url: 'assets/student4.jpg'
  },
    {
      url: 'assets/student5.jpg'
    }];
  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;

  @ViewChild('carousel', {static : true}) carousel: NgbCarousel;

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }


}
