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
      description: 'Este clásico pollo asado es tierno y jugoso con piel crujiente, asado junto a una mezcla de vegetales de raíz. Los vegetales se caramelizan, absorbiendo los sabores del pollo. Un plato simple pero satisfactorio, perfecto para una cena entre semana o una reunión de fin de semana.',
      difficulty: 'Media',
      servings: '4 porciones',
      time: '90 min',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCE2Je2LqhemarmXV0m8BELfbdworF8slRmoUOM2gQT3nBJO_N-GkfOSJTU4GnSSwFIPLn8tqaU7P4DVl8Ydss88yZvlJ_613CgZDZM2TMdN-3IyQDJtBtnWdTmaujRZe_LlBRRaP_VOfimurJLjIe-CSOtoJJz06HtJFkD_UsvKaPDrfs4nzLBbbG4odtVWIyIUTsyWaO87CSiXUcyYG655dpKpMq5KWLs8HMhhJbx1c5QQofA1QFd9XY-unypbW06Jeq9yLEasLY',
      mainImageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCE2Je2LqhemarmXV0m8BELfbdworF8slRmoUOM2gQT3nBJO_N-GkfOSJTU4GnSSwFIPLn8tqaU7P4DVl8Ydss88yZvlJ_613CgZDZM2TMdN-3IyQDJtBtnWdTmaujRZe_LlBRRaP_VOfimurJLjIe-CSOtoJJz06HtJFkD_UsvKaPDrfs4nzLBbbG4odtVWIyIUTsyWaO87CSiXUcyYG655dpKpMq5KWLs8HMhhJbx1c5QQofA1QFd9XY-unypbW06Jeq9yLEasLY',
      gallery: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCbGkRbD5uQPW03z57w3YWWI1zfc38JlEDWi2pTH2g-7fKjcIrOv80mrNeZ7qEGx1uuJLu4jkhixfn_PeHrWuNY-3Do24l2pIS-J20qRWCsHux5JFiSMvECK5oDo3XMDuLzQTkLTLWE8dgI8S0QV86WnsGB9eDpMfXcursydf8SWOK_zAtDC7aL4Vnh5RYYKSVtZjsZCZJqkDf54A7hwFuzSRcjF7Ln1F2fXPAfWKEb2m1vlNCBK4wdoKG1c0dHiKAjxrSyJKrIDJQ',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDP_Z5MnDhI4MZ9T5M1saAj9m1-Z4F1vC1inCMEAEGt0q-I_qDGufzZi3lvzAJnVyy_hqlD_AkkbXFOeU9n9GOrYlq-HoeNgKzZMfLC_slJXXn2mH7J--3T_9yVydPdSmKDwn5NGPvzr4afe0TFEorIIB2Zj1nUg586MJ4O0DG3L0JyEUir73clROp2dpMTQPizI8PCBo4s3Wk2yelTdp_svtlALm_h1VMUqvYzVNnn8w23rz7tGBSJE384bzoYgP8a17CUGAj_5pY',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBUUSZiTteH02a2Zx2L5EZ7UBAz8HR-ahRG3Ozx16iTBgl47O_k3KQV7-gjbhVut3Y2ylhuU-dLCRF0LOIOCZqSE68Y3Kpi6PRSGGxLP9hBBaKxtOegMvVF5XRNlk7FgDkueie9gyr0gSwUm0DmofHhWh3-Mj9CWMkGiWhmXdjn44ANUdEoLbN3OCPzssiKdGQP-OlFI_l_sK2OoZDD5GxouJ-AceAh6rIoKg2akygGqbLBRYq_3luVCCJy40KdvWbt3mDWHes6mRs',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBh25VUNlJnPaV4X2QObNNh_aCjknan9y2crpuM1IzcpyBw2gV86nnrnYWDKkw7Dxqc9piCObJhVzQzQLQ4pEi64VcbVun-DJI40GRjrbUZwskdyhtjBzmyDduchk4M1ZqeZ6ghvdURvOsNSP-jJgvTtmTqlxBr8JBSr28x8NrrdLCZuyi4gqtoegEJSa2LEpMpVsjHLCsfa9i6MRwi3uZazYkQ328bx15Zyjv7HSD9j7mulKmiJvECzQGNq2iQ_fBgQnN_d0AawJE'
      ],
      ingredients: [
        '1 pollo entero (aprox. 1.5-2 kg)', '1 kg de vegetales de raíz mixtos', '4 cdas. de aceite de oliva', '2 cditas. de sal', '1 cdita. de pimienta negra', '1 cdita. de tomillo seco', '1 cdita. de romero seco', '4 dientes de ajo, picados', '1 limón, en cuartos', 'Perejil fresco, para decorar'
      ],
      instructions: [
        'Precalienta el horno a 200°C (400°F).', 'En un tazón grande, mezcla los vegetales troceados con aceite de oliva, sal, pimienta, tomillo y romero.', 'Coloca los vegetales en una sola capa en una bandeja para asar grande.', 'Seca el pollo con papel de cocina. Sazona por dentro y por fuera con sal y pimienta.', 'Rellena la cavidad con el ajo picado y los cuartos de limón.', 'Coloca el pollo sobre los vegetales en la bandeja de asar.', 'Asa durante 60-75 minutos, o hasta que el pollo alcance una temperatura interna de 74°C (165°F) y los vegetales estén tiernos.', 'Deja reposar el pollo durante 10 minutos antes de trinchar.', 'Decora con perejil fresco y sirve.'
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