  import { Component } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { HeroSectionComponent } from '../hero-section/hero-section.component';
  import { WhyChooseComponent } from '../why-choose/why-choose.component';
  import { HowItWorksComponent } from '../how-it-works/how-it-works.component';
  import { SnapshotsComponent } from '../snapshots/snapshots.component';
  import { DeveloperConversationComponent } from '../developer-conversation/developer-conversation.component';
  import { CallToActionComponent } from '../call-to-action/call-to-action.component';
import { AnimatedBackgroundComponent } from '../../../shared/components/animated-background/animated-background.component';
import { LandingNavbarComponent } from '../../../shared/components/landing-navbar/landing-navbar.component';
import { LandingFooterComponent } from '../../../shared/components/landing-footer/landing-footer.component';

  @Component({
    selector: 'app-landing-page',
    standalone: true,
    imports: [
      CommonModule,
      HeroSectionComponent,
      WhyChooseComponent,
      HowItWorksComponent,
      SnapshotsComponent,
      DeveloperConversationComponent,
      CallToActionComponent,
      AnimatedBackgroundComponent,
      LandingNavbarComponent,
      LandingFooterComponent
    ],
    templateUrl: './landing-page.component.html',
    styleUrls: ['./landing-page.component.css']
  })
  export class LandingPageComponent {}