import { NgModule} from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { RecipeBookComponent } from './components/recipe-book/recipe-book.component'
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component'
import { RecipeDetailComponent } from './components/recipe-book/recipe-detail/recipe-detail.component';

const appRoutes: Routes = [
  {path:'', redirectTo: '/recipes', pathMatch: 'full'},
  {path:'recipes', component: RecipeBookComponent, children: [
    {path:':name', component: RecipeDetailComponent}
  ]},
  {path:'shopping-list', component: ShoppingListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
