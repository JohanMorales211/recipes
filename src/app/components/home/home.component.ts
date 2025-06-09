import { Component, OnInit, HostListener, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../models/recipe.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  
  @ViewChild('howToUseBlock') howToUseBlock!: ElementRef;
  isBlockVisible = false;

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

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.isBlockVisible = true;
          observer.unobserve(this.howToUseBlock.nativeElement);
        }
      });
    }, {
      threshold: 0.1
    });

    observer.observe(this.howToUseBlock.nativeElement);
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