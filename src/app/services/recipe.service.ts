import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipes: Recipe[] = [
    {
      slug: 'pollo-asado-con-vegetales',
      name: 'Pollo Asado con Vegetales',
      description: 'Una receta ideal para una comida familiar, saludable y reconfortante. El horno hace la mayor parte del trabajo, dejando el pollo jugoso por dentro con una piel dorada y crujiente, mientras los vegetales se cocinan lentamente en sus deliciosos jugos.',
      difficulty: 'Media',
      servings: '4-6 porciones',
      time: '90 min',
      imageUrl: 'assets/images/recipes/pollo_asado_con_vegetales/imagen_principal.webp',
      mainImageUrl: 'assets/images/recipes/pollo_asado_con_vegetales/imagen_principal.webp',
      gallery: [
        'assets/images/recipes/pollo_asado_con_vegetales/paso1.webp',
        'assets/images/recipes/pollo_asado_con_vegetales/paso2.webp',
        'assets/images/recipes/pollo_asado_con_vegetales/paso3.webp',
        'assets/images/recipes/pollo_asado_con_vegetales/paso4.webp',
        'assets/images/recipes/pollo_asado_con_vegetales/paso5.webp',
        'assets/images/recipes/pollo_asado_con_vegetales/paso6.webp',
        'assets/images/recipes/pollo_asado_con_vegetales/paso7.webp',
        'assets/images/recipes/pollo_asado_con_vegetales/paso8.webp',
        'assets/images/recipes/pollo_asado_con_vegetales/paso9.webp'
      ],
      ingredients: [
        '1 pollo entero (1.5-2kg) o 4 muslos de pollo',
        '4 patatas medianas',
        '2 zanahorias grandes',
        '1 cebolla grande',
        '1 pimiento rojo',
        '200g de champiñones',
        '1 limón',
        '2 dientes de ajo',
        'Aceite de oliva virgen extra',
        'Sal y pimienta negra al gusto',
        'Hierbas aromáticas (tomillo, romero)',
        'Opcional: otros vegetales como calabacín o calabaza'
      ],
      instructions: [
        'Precalienta el horno a 200°C (400°F).',
        'Lava y prepara todos los vegetales (patatas, zanahorias, cebolla, pimiento, champiñones). Colócalos en una bandeja para horno formando una cama.',
        'Seca bien el pollo con papel de cocina. Si usas pollo entero, rellena su cavidad con medio limón y unas ramitas de hierbas.',
        'En un bol pequeño, mezcla un buen chorro de aceite de oliva, sal, pimienta, los ajos machacados y las hierbas aromáticas.',
        'Unta el pollo (entero o los muslos) generosamente por todas partes con la mezcla de aceite y hierbas.',
        'Coloca el pollo sobre la cama de vegetales en la bandeja.',
        'Hornea durante aproximadamente 1 hora y 30 minutos. A mitad de la cocción, baña el pollo con los jugos de la bandeja.',
        'Comprueba que esté listo: pincha el muslo y los jugos deben salir claros. Los vegetales deben estar tiernos y dorados.',
        'Saca del horno y deja reposar 10 minutos antes de cortar y servir. ¡A disfrutar!'
      ]
    },
    {
      slug: 'pasta-cremosa-de-tomate', name: 'Pasta Cremosa de Tomate', difficulty: 'Fácil', servings: '4 porciones', time: '30 min', imageUrl: 'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', description: '', mainImageUrl: '', gallery: [], ingredients: [], instructions: []
    },
    {
      slug: 'tostada-de-aguacate', name: 'Tostada de Aguacate', difficulty: 'Fácil', servings: '1 porción', time: '10 min', imageUrl: 'https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', description: '', mainImageUrl: '', gallery: [], ingredients: [], instructions: []
    },
    {
      slug: 'salmon-al-limon', name: 'Salmón al Limón y Hierbas', difficulty: 'Fácil', servings: '2 porciones', time: '25 min', imageUrl: 'https://images.pexels.com/photos/3296279/pexels-photo-3296279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', description: '', mainImageUrl: '', gallery: [], ingredients: [], instructions: []
    },
    {
      slug: 'galletas-chocolate', name: 'Galletas con Chips de Chocolate', difficulty: 'Fácil', servings: '24 galletas', time: '20 min', imageUrl: 'https://images.pexels.com/photos/2067423/pexels-photo-2067423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', description: '', mainImageUrl: '', gallery: [], ingredients: [], instructions: []
    },
    {
      slug: 'chili-vegetariano', name: 'Chili Vegetariano', difficulty: 'Media', servings: '6 porciones', time: '60 min', imageUrl: 'https://images.pexels.com/photos/5951833/pexels-photo-5951833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', description: '', mainImageUrl: '', gallery: [], ingredients: [], instructions: []
    },
    {
      slug: 'ensalada-cesar-clasica', name: 'Ensalada César Clásica', difficulty: 'Fácil', servings: '2 porciones', time: '20 min', imageUrl: 'https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', description: '', mainImageUrl: '', gallery: [], ingredients: [], instructions: []
    },
    {
      slug: 'sopa-de-lentejas', name: 'Sopa de Lentejas Casera', difficulty: 'Fácil', servings: '6 porciones', time: '50 min', imageUrl: 'https://images.pexels.com/photos/5182143/pexels-photo-5182143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', description: '', mainImageUrl: '', gallery: [], ingredients: [], instructions: []
    }
  ];

  constructor() { }
  getRecipes(): Recipe[] { return this.recipes; }
  getRecipeBySlug(slug: string): Recipe | undefined { return this.recipes.find(recipe => recipe.slug === slug); }
}