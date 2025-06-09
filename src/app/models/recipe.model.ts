export interface IngredientSection {
  section: string;
  items: string[];
}

export interface Recipe {
  slug: string;
  name: string;
  description: string;
  difficulty: string;
  servings: string;
  time: string;
  mainImageUrl: string;
  imageUrl?: string;
  gallery: string[];
  ingredients: IngredientSection[];
  instructions: string[];
}