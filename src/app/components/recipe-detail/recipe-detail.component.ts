import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../models/recipe.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit, OnDestroy {

  recipe: Recipe | undefined;
  
  pageChangeSound = new Audio('assets/audio/cambiar-pagina.mp3');
  openAssistantSound = new Audio('assets/audio/abrir-asistente.mp3');
  
  selectedImageUrl: string = '';
  imageLoaded: boolean = false;
  galleryImages: string[] = [];

  carouselIndex = 0;
  readonly thumbnailsToShow = 4;

  showChefBubble = false;
  private bubbleHasBeenShown = false;

  completedSteps: boolean[] = [];

  private routeSubscription: Subscription | undefined;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {
    this.pageChangeSound.volume = 0.5;
    this.openAssistantSound.volume = 0.5;
  }

  ngOnInit(): void {
    this.routeSubscription = this.route.paramMap.subscribe(params => {
      const recipeSlug = params.get('id');
      if (recipeSlug) {
        this.recipeService.getRecipeBySlug(recipeSlug).subscribe(
          (recipe: Recipe | undefined) => {
            this.recipe = recipe;
            if (this.recipe) {
              this.selectImage(this.recipe.mainImageUrl);
              this.galleryImages = [this.recipe.mainImageUrl, ...(this.recipe.gallery || [])];
              
              this.completedSteps = new Array(this.recipe.instructions.length).fill(false);
              
              if (!this.bubbleHasBeenShown) {
                this.bubbleHasBeenShown = true;
                setTimeout(() => {
                  this.showChefBubble = true;
                }, 1000); 
              }

            } else {
              console.error('Receta no encontrada con el slug:', recipeSlug);
            }
          },
          error => {
            console.error(`Error loading recipe ${recipeSlug}:`, error);
            this.recipe = undefined;
          }
        );
      } else {
        this.recipe = undefined;
      }
    });
  }

  ngOnDestroy(): void {
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }
  }

  playReturnSound(): void {
    this.pageChangeSound.currentTime = 0;
    this.pageChangeSound.play();
  }

  playOpenAssistantSound(): void {
    this.openAssistantSound.currentTime = 0;
    this.openAssistantSound.play();
  }

  toggleStep(index: number): void {
    if (this.completedSteps[index] !== undefined) {
      this.completedSteps[index] = !this.completedSteps[index];
    }
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