import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { Routes, RouterModule } from '@angular/router';
import { layoutRouting } from './layout-routing';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: layoutRouting,
  },
];

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class LayoutModule { }
