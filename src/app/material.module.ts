import { NgModule } from "@angular/core";

import { MatToolbarModule, 
          MatSidenavModule, 
          MatInputModule, 
          MatFormFieldModule, 
          MatButtonModule, 
          MatTableModule,
          MatSortModule,
          MatPaginatorModule,
          MatListModule,
          MatProgressSpinnerModule,
          
        } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  imports: [
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatListModule,
    MatProgressSpinnerModule
  ],
  exports:[
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatListModule,
    MatProgressSpinnerModule
  ]
})
export class MaterialModule {}
