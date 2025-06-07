import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { RecipeCardComponent } from './components/recipe-card/recipe-card.component';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';
import { AiAssistantComponent } from './components/ai-assistant/ai-assistant.component';
import { AboutComponent } from './components/about/about.component'; // <-- 1. IMPORTAR

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    RecipeCardComponent,
    RecipeDetailComponent,
    AiAssistantComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }