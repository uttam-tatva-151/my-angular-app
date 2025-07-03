import { Component, ElementRef, ViewChild } from '@angular/core';
import { PrimaryButtonComponent } from '../../../shared/components/Buttons/primary/primary.component';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports:[PrimaryButtonComponent],
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css']
})
export class HeroSectionComponent  {

  @ViewChild('heroSubtitle', { static: true }) heroSubtitleElem!: ElementRef<HTMLSpanElement>;

  private heroSubtitleText = 'Effortlessly track expenses, set budgets, and achieve your financial goals with ';
  private subtitleIdx = 0;
  private subtitleState: 'typing' | 'pause' | 'erasing' | 'pause2' = 'typing';
  private subtitleDelay = 0;

  ngAfterViewInit() {
    this.animateHeroSubtitle();
  }

  private animateHeroSubtitle() {
    const el = this.heroSubtitleElem.nativeElement;
    if (this.subtitleState === 'typing') {
      if (this.subtitleIdx <= this.heroSubtitleText.length) {
        el.textContent = this.heroSubtitleText.slice(0, this.subtitleIdx);
        // typing speed: normal char = 60ms, space = 350ms
        const currentChar = this.heroSubtitleText.charAt(this.subtitleIdx - 1);
        let delay = 60;
        if (currentChar === ' ') {
          delay = 350;
        }
        this.subtitleIdx++;
        setTimeout(() => this.animateHeroSubtitle(), delay);
      } else {
        this.subtitleState = 'pause';
        this.subtitleDelay = 0;
        setTimeout(() => this.animateHeroSubtitle(), 900);
      }
    } else if (this.subtitleState === 'pause') {
      this.subtitleDelay++;
      if (this.subtitleDelay > 7) {
        this.subtitleState = 'erasing';
        setTimeout(() => this.animateHeroSubtitle(), 40);
      } else {
        setTimeout(() => this.animateHeroSubtitle(), 120);
      }
    } else if (this.subtitleState === 'erasing') {
      if (this.subtitleIdx > 0) {
        this.subtitleIdx--;
        el.textContent = this.heroSubtitleText.slice(0, this.subtitleIdx);
        setTimeout(() => this.animateHeroSubtitle(), 35);
      } else {
        this.subtitleState = 'pause2';
        this.subtitleDelay = 0;
        setTimeout(() => this.animateHeroSubtitle(), 400);
      }
    } else if (this.subtitleState === 'pause2') {
      this.subtitleDelay++;
      if (this.subtitleDelay > 3) {
        this.subtitleState = 'typing';
        setTimeout(() => this.animateHeroSubtitle(), 60);
      } else {
        setTimeout(() => this.animateHeroSubtitle(), 120);
      }
    }
  }

}
