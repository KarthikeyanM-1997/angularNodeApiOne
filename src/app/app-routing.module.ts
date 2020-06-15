import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponentComponent } from './create-component/create-component.component';
import { AssignComponentComponent } from './assign-component/assign-component.component';
import { ListComponentComponent } from './list-component/list-component.component';
import { IndexComponentComponent } from './index-component/index-component.component';


const routes: Routes = [
  { path: "create", component: CreateComponentComponent },
  { path: "assign", component: AssignComponentComponent },
  { path: "list", component: ListComponentComponent },
  { path: "", component: IndexComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
