import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';
import { AiAssistantComponent } from './components/ai-assistant/ai-assistant.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'acerca-de', component: AboutComponent },
  { path: 'receta/:id', component: RecipeDetailComponent },
  { path: 'receta/:id/asistente', component: AiAssistantComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }