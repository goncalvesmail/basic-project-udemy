import { NgModule} from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { RecipeBookComponent } from './components/recipe-book/recipe-book.component'
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component'
import { RecipeDetailComponent } from './components/recipe-book/recipe-detail/recipe-detail.component';
import { RecipeDetailContainerComponent } from './components/recipe-book/recipe-detail-container/recipe-detail-container.component';
import { RecipeEditComponent } from './components/recipe-book/recipe-edit/recipe-edit.component';

const appRoutes: Routes = [
  {path:'', redirectTo: '/recipes', pathMatch: 'full'},
  {path:'recipes', component: RecipeBookComponent, children: [
    {path:'', component: RecipeDetailContainerComponent},
    {path:'new', component: RecipeEditComponent},
    {path:':id', component: RecipeDetailComponent},
    {path:':id/edit', component: RecipeEditComponent},
  ]},
  {path:'shopping-list', component: ShoppingListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
