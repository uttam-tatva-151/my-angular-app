import { Component, OnDestroy } from '@angular/core';
import { PrimaryButtonComponent } from '../../../shared/components/Buttons/primary/primary.component';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports:[PrimaryButtonComponent],
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css']
})
export class HeroSectionComponent implements OnDestroy {

  // Property for template binding - displays the animated text
  heroSubtitleDisplay: string = '';

  // Configuration for animation - making it easily configurable
  private animationConfig = {
    text: 'Effortlessly track expenses, set budgets, and achieve your financial goals with ',
    typingSpeed: 60,
    spaceDelay: 350,
    pauseAfterTyping: 900,
    pauseSteps: 7,
    pauseStepDelay: 120,
    erasingSpeed: 35,
    pauseAfterErasing: 400,
    pauseAfterErasing2Steps: 3
  };

  // Animation state properties - encapsulated for testability
  private subtitleIdx = 0;
  private subtitleState: 'typing' | 'pause' | 'erasing' | 'pause2' = 'typing';
  private subtitleDelay = 0;
  
  // Store timeout IDs for cleanup
  private timeoutIds: number[] = [];

  ngAfterViewInit() {
    this.animateHeroSubtitle();
  }

  ngOnDestroy() {
    // Clear all timeouts to prevent memory leaks
    this.timeoutIds.forEach(id => clearTimeout(id));
    this.timeoutIds = [];
  }

  private animateHeroSubtitle() {
    if (this.subtitleState === 'typing') {
      if (this.subtitleIdx <= this.animationConfig.text.length) {
        // Update property instead of direct DOM manipulation
        this.heroSubtitleDisplay = this.animationConfig.text.slice(0, this.subtitleIdx);
        
        // typing speed: normal char = 60ms, space = 350ms
        const currentChar = this.animationConfig.text.charAt(this.subtitleIdx - 1);
        let delay = this.animationConfig.typingSpeed;
        if (currentChar === ' ') {
          delay = this.animationConfig.spaceDelay;
        }
        this.subtitleIdx++;
        
        const timeoutId = setTimeout(() => this.animateHeroSubtitle(), delay);
        this.timeoutIds.push(timeoutId);
      } else {
        this.subtitleState = 'pause';
        this.subtitleDelay = 0;
        const timeoutId = setTimeout(() => this.animateHeroSubtitle(), this.animationConfig.pauseAfterTyping);
        this.timeoutIds.push(timeoutId);
      }
    } else if (this.subtitleState === 'pause') {
      this.subtitleDelay++;
      if (this.subtitleDelay > this.animationConfig.pauseSteps) {
        this.subtitleState = 'erasing';
        const timeoutId = setTimeout(() => this.animateHeroSubtitle(), 40);
        this.timeoutIds.push(timeoutId);
      } else {
        const timeoutId = setTimeout(() => this.animateHeroSubtitle(), this.animationConfig.pauseStepDelay);
        this.timeoutIds.push(timeoutId);
      }
    } else if (this.subtitleState === 'erasing') {
      if (this.subtitleIdx > 0) {
        this.subtitleIdx--;
        // Update property instead of direct DOM manipulation
        this.heroSubtitleDisplay = this.animationConfig.text.slice(0, this.subtitleIdx);
        const timeoutId = setTimeout(() => this.animateHeroSubtitle(), this.animationConfig.erasingSpeed);
        this.timeoutIds.push(timeoutId);
      } else {
        this.subtitleState = 'pause2';
        this.subtitleDelay = 0;
        const timeoutId = setTimeout(() => this.animateHeroSubtitle(), this.animationConfig.pauseAfterErasing);
        this.timeoutIds.push(timeoutId);
      }
    } else if (this.subtitleState === 'pause2') {
      this.subtitleDelay++;
      if (this.subtitleDelay > this.animationConfig.pauseAfterErasing2Steps) {
        this.subtitleState = 'typing';
        const timeoutId = setTimeout(() => this.animateHeroSubtitle(), 60);
        this.timeoutIds.push(timeoutId);
      } else {
        const timeoutId = setTimeout(() => this.animateHeroSubtitle(), this.animationConfig.pauseStepDelay);
        this.timeoutIds.push(timeoutId);
      }
    }
  }

}
