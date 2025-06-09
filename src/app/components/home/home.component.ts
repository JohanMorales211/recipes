import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
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

  allRecipes: Recipe[] = []; 
  popularRecipes: Recipe[] = [];
  fastFoodRecipes: Recipe[] = [];
  visibleRecipes: Recipe[] = []; 

  public categoryExpansionState: { [key: string]: boolean } = {
    popular: false,
    'fast-food': false
  };

  readonly initialDesktopCount = 6;
  readonly initialMobileCount = 4;
  
  searchTerm: string = '';

  private recipesSubscription: Subscription | undefined;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipesSubscription = this.recipeService.getAllRecipes().subscribe(
      (recipes: Recipe[]) => {
        this.allRecipes = recipes;
        
        this.popularRecipes = this.allRecipes.filter(r => r.category === 'popular');
        this.fastFoodRecipes = this.allRecipes.filter(r => r.category === 'fast-food');
      },
      error => {
        console.error('Failed to load all recipes in home component:', error);
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

  toggleCategoryExpansion(category: string): void {
    if (this.categoryExpansionState[category] !== undefined) {
      this.categoryExpansionState[category] = !this.categoryExpansionState[category];
    }
  }
  
  getInitialCount(): number {
    if (typeof window !== 'undefined') {
      return window.innerWidth >= 768 ? this.initialDesktopCount : this.initialMobileCount;
    }
    return this.initialDesktopCount; 
  }

  updateDisplayedRecipes(): void {
    if (this.searchTerm.trim() !== '') {
      const lowercasedTerm = this.searchTerm.toLowerCase().trim();
      this.visibleRecipes = this.allRecipes.filter(recipe =>
        recipe.name.toLowerCase().includes(lowercasedTerm)
      );
    } else {
      this.visibleRecipes = []; 
    }
  }
}