import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../models/recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe | undefined;
  
  selectedImageUrl: string = '';
  imageLoaded: boolean = false;
  galleryImages: string[] = [];

  carouselIndex = 0;
  readonly thumbnailsToShow = 4;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const recipeSlug = params.get('id');
      if (recipeSlug) {
        this.recipe = this.recipeService.getRecipeBySlug(recipeSlug);
        
        if (this.recipe) {
          this.selectImage(this.recipe.mainImageUrl);
          this.galleryImages = [this.recipe.mainImageUrl, ...this.recipe.gallery];
        }
      }
      
      if (!this.recipe) {
        console.error('Receta no encontrada con el slug:', recipeSlug);
      }
    });
  }

  selectImage(imageUrl: string): void {
    if (this.selectedImageUrl === imageUrl) return;
    
    this.imageLoaded = false;
    
    setTimeout(() => {
      this.selectedImageUrl = imageUrl;
      setTimeout(() => {
        this.imageLoaded = true;
      }, 50);
    }, 200);
  }

  nextImage(): void {
    if (this.carouselIndex < this.galleryImages.length - this.thumbnailsToShow) {
      this.carouselIndex++;
    }
  }

  previousImage(): void {
    if (this.carouselIndex > 0) {
      this.carouselIndex--;
    }
  }
}