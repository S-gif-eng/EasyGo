import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  currentSlide = 0;
  totalSlides = 3;

  constructor() {}

  ngOnInit(): void {
    this.startAutoChange();
  }

  ngOnDestroy(): void {
    this.stopAutoChange();
  }

  startAutoChange(): void {
    setInterval(() => {
      this.nextSlide();
    }, 3000); // Change slide every 3 seconds (adjust as needed)
  }

  stopAutoChange(): void {
    // Stop the automatic slide change (clear the interval)
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
