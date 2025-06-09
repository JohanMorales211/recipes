import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Recipe } from '../models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipeSlugs: string[] = [
    'pollo-asado-con-vegetales',
    'alitas-bbq-caseras'
  ];

  private cachedRecipes: { [key: string]: Recipe } = {};
  private allRecipesLoaded: boolean = false;

  constructor(private http: HttpClient) { }

  getAllRecipes(): Observable<Recipe[]> {
    if (this.allRecipesLoaded && Object.keys(this.cachedRecipes).length === this.recipeSlugs.length) {
      console.log('Returning all recipes from cache.');
      return of(Object.values(this.cachedRecipes));
    }

    const recipeRequests: Observable<Recipe | undefined>[] = this.recipeSlugs.map(slug =>
      this.getRecipeBySlug(slug)
    );

    return forkJoin(recipeRequests).pipe(
      map(recipes => {
        const loadedRecipes = recipes.filter((recipe): recipe is Recipe => !!recipe);
        loadedRecipes.forEach(recipe => {
          this.cachedRecipes[recipe.slug] = recipe;
        });
        this.allRecipesLoaded = true;
        console.log('All recipes loaded and cached.');
        return loadedRecipes;
      }),
      catchError(error => {
        console.error('Error in forkJoin loading all recipes:', error);
        this.allRecipesLoaded = false;
        return of([]);
      })
    );
  }

  getRecipeBySlug(slug: string): Observable<Recipe | undefined> {
    if (this.cachedRecipes[slug]) {
      console.log(`Returning recipe "${slug}" from cache.`);
      return of(this.cachedRecipes[slug]);
    }

    const url = `assets/recipes/${slug}.json`;
    return this.http.get<Recipe>(url).pipe(
      tap(recipe => {
        this.cachedRecipes[slug] = recipe;
        console.log(`Recipe "${slug}" loaded and cached.`);
      }),
      catchError(error => {
        console.error(`Error loading recipe ${slug} from URL ${url}:`, error);
        return of(undefined);
      })
    );
  }
}