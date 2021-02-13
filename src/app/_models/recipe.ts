import { RecipeIngredient } from '@app/_models/recipe-ingredient';
import { RecipeDirection }  from '@app/_models/recipe-direction';


export class Recipe {
    id:                 number;
    author_id:          number;
    author:             string;
    title:              string;
    description:        string;
    createdAt:          string;
    category:           string;
    time:               string;
    difficulty:         string;
    portions:           number;
    cover_image:        string;
    votes:              number;
    comments:           number;
    views:              number;
    rating:             number;
    ingredients:        RecipeIngredient[];
    preparation_method: RecipeDirection[];
}
