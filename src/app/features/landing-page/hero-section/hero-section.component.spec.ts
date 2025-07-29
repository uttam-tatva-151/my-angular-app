/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HeroSectionComponent } from './hero-section.component';

describe('HeroSectionComponent', () => {
  let component: HeroSectionComponent;
  let fixture: ComponentFixture<HeroSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HeroSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with empty heroSubtitleDisplay', () => {
    expect(component.heroSubtitleDisplay).toBe('');
  });

  it('should start animation after view init', (done) => {
    // Wait a bit for the animation to start
    setTimeout(() => {
      expect(component.heroSubtitleDisplay.length).toBeGreaterThan(0);
      done();
    }, 100);
  });

  it('should display animated text in template', (done) => {
    // Wait for some animation to happen
    setTimeout(() => {
      fixture.detectChanges();
      const subtitleElement = fixture.debugElement.query(By.css('#heroSubtitle'));
      expect(subtitleElement.nativeElement.textContent).toBe(component.heroSubtitleDisplay);
      done();
    }, 100);
  });

  it('should cleanup timeouts on destroy', () => {
    spyOn(window, 'clearTimeout');
    component.ngOnDestroy();
    expect(window.clearTimeout).toHaveBeenCalled();
  });
});
