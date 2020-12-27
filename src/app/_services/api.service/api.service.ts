import { Injectable }           from '@angular/core';
import { HttpClient }           from '@angular/common/http';
import { Observable, of }       from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { environment }          from '@environments/environment';
import { Recipe }               from '@app/_models/recipe';


const API_URL = environment.apiUrl;


@Injectable({
  providedIn: 'root'
})
export class ApiService {
        constructor(private httpClient: HttpClient) { }


        /********************  Recipes  ********************/

        // API: GET /recipes
        public getAllRecipes(): Observable<Recipe[]> {
                return this.httpClient
                            .get<Recipe[]>(API_URL + '/recipes')
                            .pipe(
                                map((res: any) => res.data),
                                tap(recipes => console.log('Fetched all recipes: ', recipes)),
                                catchError(this.handleError<Recipe[]>('getAllRecipes', []))
                            );
        }


        // API: GET /recipes/:id
        public getRecipeById(recipeId: number) {
            // will use this.http.get()
        }


        // API: POST /recipes
        public createRecipe(recipe: Recipe) {
            // will use this.http.post()
        }


        // API: PUT /recipes/:id
        public updateRecipe(recipe: Recipe) {
            // will use this.http.put()
        }


        // DELETE /recipes/:id
        public deleteRecipeById(recipeId: number) {
            // will use this.http.delete()
        }


        /********************  Users  ********************/






        /********************  Handle Errors  ********************/

        private handleError<T>(operation = 'operation', result?: T) {
                return (error: any): Observable<T> => {
                    console.error(error);
                    console.log(`${operation} failed: ${error.message}`);
                    return of(result as T);
                };
        }
}
