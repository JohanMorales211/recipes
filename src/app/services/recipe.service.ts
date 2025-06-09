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
      mainImageUrl: 'assets/images/recipes/pollo_asado_con_vegetales/imagen_principal.webp',
      imageUrl: 'assets/images/recipes/pollo_asado_con_vegetales/imagen_principal.webp',
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
        {
          section: 'Ingredientes principales',
          items: [
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
          ]
        }
      ],
      instructions: [
        'Precalienta el horno a 200°C (400°F).',
        'Lava y prepara todos los vegetales. Colócalos en una bandeja para horno formando una cama.',
        'Seca bien el pollo con papel de cocina y rellena su cavidad con limón y hierbas.',
        'En un bol, mezcla aceite de oliva, sal, pimienta, ajos machacados y hierbas.',
        'Unta el pollo generosamente con la mezcla de aceite y hierbas.',
        'Coloca el pollo sobre la cama de vegetales en la bandeja.',
        'Hornea durante aproximadamente 1 hora y 30 minutos.',
        'Comprueba que esté listo: pincha el muslo y los jugos deben salir claros.',
        'Saca del horno y deja reposar 10 minutos antes de servir.'
      ]
    },
    {
      slug: 'alitas-bbq-caseras',
      name: 'Alitas BBQ Caseras',
      description: 'Una receta clásica y deliciosa para preparar alitas de pollo con una salsa barbacoa casera, perfectas para cualquier ocasión. Quedan jugosas por dentro y con un exterior caramelizado y lleno de sabor.',
      difficulty: 'Fácil',
      servings: '4 porciones',
      time: '45 min',
      mainImageUrl: 'assets/images/recipes/alitas-bbq-caseras/imagen_principal.webp',
      imageUrl: 'assets/images/recipes/alitas-bbq-caseras/imagen_principal.webp',
      gallery: [
        'assets/images/recipes/alitas-bbq-caseras/paso1.webp',
        'assets/images/recipes/alitas-bbq-caseras/paso2.webp',
        'assets/images/recipes/alitas-bbq-caseras/paso3.webp',
        'assets/images/recipes/alitas-bbq-caseras/paso4.webp',
        'assets/images/recipes/alitas-bbq-caseras/paso5.webp',
        'assets/images/recipes/alitas-bbq-caseras/paso6.webp',
        'assets/images/recipes/alitas-bbq-caseras/paso7.webp',
      ],
      ingredients: [
        {
          section: 'Para sazonar las alitas:',
          items: [
            '1 kg de alitas de pollo',
            'Sal y pimienta al gusto',
            '½ cucharadita de ajo en polvo',
            '½ cucharadita de pimentón (paprika)',
            'Harina de trigo (opcional para freír)'
          ]
        },
        {
          section: 'Para la salsa BBQ casera:',
          items: [
            '1 taza de salsa de tomate (kétchup)',
            '2 cucharadas de miel',
            '1 cucharadita de mostaza',
            '2 cucharadas de azúcar',
            '1 cucharadita de pimentón (paprika)',
            '1 cucharadita de ajo en polvo',
            '3 cucharadas de vinagre',
            '3 cucharadas de salsa inglesa'
          ]
        }
      ],
      instructions: [
        'Lava bien las alitas de pollo y sécalas con papel de cocina. Opcionalmente, puedes cortarles la punta y separarlas en dos piezas.',
        'En un bol grande, sazona las alitas con sal, pimienta, el ajo en polvo y el pimentón. Mezcla bien para que se impregnen y deja marinar al menos 15 minutos.',
        'Para cocinar las alitas, elige una opción: A) Fritas: Pásalas por harina y fríelas en aceite caliente hasta que estén doradas. B) Al horno: Precalienta el horno a 200°C y hornéalas por 25-30 minutos, dándoles la vuelta a mitad de cocción.',
        'Mientras se cocinan las alitas, prepara la salsa. En una olla a fuego medio, combina todos los ingredientes de la salsa BBQ (kétchup, miel, mostaza, azúcar, pimentón, ajo en polvo, vinagre y salsa inglesa).',
        'Lleva la salsa a ebullición y luego baja el fuego. Deja que hierva suavemente durante unos 10-15 minutos, removiendo de vez en cuando, hasta que la salsa espese un poco.',
        'Cuando las alitas estén cocidas y crujientes, ponlas en un bol grande y limpio. Vierte la salsa BBQ caliente sobre ellas.',
        'Mezcla todo con cuidado hasta que cada alita esté perfectamente cubierta con la salsa. Sírvelas inmediatamente para disfrutar de todo su sabor y textura.'
      ]
    },
    {
      slug: 'pasta-cremosa-de-tomate', name: 'Pasta Cremosa de Tomate', difficulty: 'Fácil', servings: '4 porciones', time: '30 min', imageUrl: 'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', description: 'Una pasta deliciosa y fácil de preparar.', mainImageUrl: 'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', gallery: [], 
      ingredients: [{ section: 'Ingredientes', items: ['400g de pasta', '1 lata de tomate triturado', '200ml de nata (crema de leche)', '1 cebolla', '2 dientes de ajo', 'Queso parmesano', 'Albahaca fresca'] }], 
      instructions: ['Cocina la pasta según las instrucciones.', 'Sofríe la cebolla y el ajo, añade el tomate y cocina 10 min.', 'Añade la nata, mezcla y sirve sobre la pasta con queso y albahaca.']
    },
    {
      slug: 'tostada-de-aguacate', name: 'Tostada de Aguacate', difficulty: 'Fácil', servings: '1 porción', time: '10 min', imageUrl: 'https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', description: 'El desayuno o snack perfecto, rápido y nutritivo.', mainImageUrl: 'https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', gallery: [], 
      ingredients: [{ section: 'Ingredientes', items: ['2 rebanadas de pan', '1 aguacate maduro', 'Sal y pimienta al gusto', 'Un chorrito de zumo de limón', 'Opcional: hojuelas de chile'] }], 
      instructions: ['Tuesta el pan.', 'Macha el aguacate con un tenedor y mézclalo con el limón, sal y pimienta.', 'Unta el aguacate sobre las tostadas y añade hojuelas de chile si lo deseas.']
    }
  ];

  constructor() { }
  getRecipes(): Recipe[] { return this.recipes; }
  getRecipeBySlug(slug: string): Recipe | undefined { return this.recipes.find(recipe => recipe.slug === slug); }
}