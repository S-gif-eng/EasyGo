// home.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  currentSlide = 0;
  totalSlides = 3;
  intervalId: any;

  ngOnInit(): void {
    this.startAutoChange();
  }

  ngOnDestroy(): void {
    this.stopAutoChange();
  }

  startAutoChange(): void {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 3000); // Change slide every 3 seconds (adjust as needed)
  }

  stopAutoChange(): void {
    clearInterval(this.intervalId);
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
  }

  prevSlide(): void {
    this.currentSlide = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
  }
}
