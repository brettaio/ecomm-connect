import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentComponent } from './components/content/content.component';
import { HeroComponent } from './components/hero/hero.component';
import { HeroButtonsComponent } from './components/hero/hero-buttons/hero-buttons.component';
import { CallNowButtonComponent } from './components/header/call-now-button/call-now-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    HeroComponent,
    HeroButtonsComponent,
    CallNowButtonComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
