import { Component, OnInit, HostListener } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../models/recipe.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  isHowToUseVisible = false;

  allPopularRecipes: Recipe[] = [];
  visibleRecipes: Recipe[] = [];
  isExpanded = false;

  readonly initialDesktopCount = 6;
  readonly initialMobileCount = 4;
  totalRecipes = 0;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.allPopularRecipes = this.recipeService.getRecipes();
    this.totalRecipes = this.allPopularRecipes.length;
    this.updateVisibleRecipes();
  }

  toggleHowToUse(): void {
    this.isHowToUseVisible = !this.isHowToUseVisible;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.updateVisibleRecipes();
  }
  
  toggleRecipes(): void {
    this.isExpanded = !this.isExpanded;
    this.updateVisibleRecipes();
  }

  private updateVisibleRecipes(): void {
    if (this.isExpanded) {
      this.visibleRecipes = this.allPopularRecipes;
    } else {
      const isDesktop = window.innerWidth >= 768;
      const count = isDesktop ? this.initialDesktopCount : this.initialMobileCount;
      this.visibleRecipes = this.allPopularRecipes.slice(0, count);
    }
  }
}