import { Injectable }              from '@angular/core';
import { HttpClient }              from '@angular/common/http';
import { Observable, of }          from 'rxjs';
import { catchError, map, tap }    from 'rxjs/operators';

import { environment }             from '@environments/environment';
import { AvailableRecipeCategory } from '@app/_models/available-recipe-category';
import { Recipe }                  from '@app/_models/recipe';


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
                                map((response: any) => response.data),
                                tap(recipes => console.log('Fetched all Recipes: ', recipes)),
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


        /********************  Auth  ********************/

        public authLogin(username, password): Observable<any> {
                return this.httpClient
                            .post<any>(API_URL + '/auth/login', { username, password }, { withCredentials: false })
                            .pipe(
                                map((response: any) => response.data),
                                tap(response => console.log('Response from auth/login: ', response)),
                                catchError(this.handleError<any>('authLogin', []))
                            );
        }


        public authLogout() {
                this.httpClient
                    .post<any>(API_URL + '/auth/logout', {}, { withCredentials: false })
                    .subscribe();
        }


        public authRefreshToken() {
                return this.httpClient
                            .post<any>(API_URL + '/auth/refresh-token', {}, { withCredentials: false })
                            .pipe(
                                map((response: any) => response.data),
                                tap(response => console.log('Response from refresh-token: ', response)),
                                catchError(this.handleError<any>('authRefreshToken', []))
                            );

                        // TODO:
                        //     if (response && (response.status == 'fail')) {
                        //         this.removeAccessToken();
                        //         return null;
                        // }
        }


        /********************  Users  ********************/



        /********************  Available Recipe Categories  ********************/

        public getAllAvailableRecipeCategories(): Observable<AvailableRecipeCategory[]> {
                return this.httpClient
                        .get<AvailableRecipeCategory[]>(API_URL + '/available-recipe-categories')
                        .pipe(
                            map((res: any) => res.data),
                            tap(categories => console.log('Fetched all Available Recipe Categories: ', categories)),
                            catchError(this.handleError<AvailableRecipeCategory[]>('getAllAvailableRecipeCategories', []))
                        );
        }




        /********************  Handle Errors  ********************/

        private handleError<T>(operation = 'operation', result?: T) {
                return (error: any): Observable<T> => {
                    console.error(error);
                    console.log(`${operation} failed: ${error.message}`);
                    return of(result as T);
                };
        }
}
