import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../models/recipe.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  
  isHowToUseVisible = false;

  allPopularRecipes: Recipe[] = [];
  visibleRecipes: Recipe[] = [];
  isExpanded = false;

  readonly initialDesktopCount = 6;
  readonly initialMobileCount = 4;
  totalRecipes = 0;

  private recipesSubscription: Subscription | undefined;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipesSubscription = this.recipeService.getAllRecipes().subscribe(
      (recipes: Recipe[]) => {
        this.allPopularRecipes = recipes;
        this.totalRecipes = this.allPopularRecipes.length;
        this.updateVisibleRecipes();
      },
      error => {
        console.error('Failed to load recipes in home component:', error);
      }
    );
  }

  ngOnDestroy(): void {
    if (this.recipesSubscription) {
      this.recipesSubscription.unsubscribe();
    }
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