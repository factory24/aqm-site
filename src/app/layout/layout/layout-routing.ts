import { Routes } from '@angular/router';
import { HomeComponent } from 'src/app/modules/home/home.component';

const layoutRouting: Routes = [
    
    {
        path: '',
        loadChildren: () =>
            import('../../modules/home/home.module').then(
                (m) => m.HomeModule
            ),
    },
    
    { path: '**', redirectTo: '/' },
]

export { layoutRouting };