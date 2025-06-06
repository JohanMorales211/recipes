export interface Recipe {
  slug: string;
  name: string;
  description: string;
  difficulty: string;
  servings: string;
  time: string;
  mainImageUrl: string;
  imageUrl?: string; // Hacemos esta opcional, ya que la usaremos en home
  gallery: string[];
  ingredients: string[];
  instructions: string[];
}