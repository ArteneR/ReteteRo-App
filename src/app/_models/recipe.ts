import { RecipeIngredient } from '@app/_models/recipe-ingredient';
import { RecipeDirection }  from '@app/_models/recipe-direction';
import { RecipeImage }      from '@app/_models/recipe-image';


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
    total_votes:        number;
    total_comments:     number;
    total_views:        number;
    rating:             number;
    ingredients:        RecipeIngredient[];
    preparation_method: RecipeDirection[];
    images:             RecipeImage[];
}
