import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSliderModule } from '@angular/material/slider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs'; 
import { MatDivider } from '@angular/material/divider';

const MaterialComponents = [MatTabsModule, MatGridListModule, MatCardModule,
                            MatSliderModule,
                            MatToolbarModule,
                            MatButtonModule,
                            MatSidenavModule,
                            MatIconModule,
                            MatListModule,
                            MatButtonToggleModule,
                            MatDivider] 

@NgModule({
  imports: [MatTabsModule, 
            MatGridListModule,
            MatCardModule,
            MatSliderModule,
            MatToolbarModule,
            MatButtonModule,
            MatSidenavModule,
            MatIconModule,
            MatListModule,
            MatButtonToggleModule, 
            ],
  exports: [MatTabsModule, MatGridListModule, MatCardModule, MatSliderModule,
            MatToolbarModule,
            MatButtonModule,
            MatSidenavModule,
            MatIconModule,
            MatListModule,
            MatButtonToggleModule,
            MatDivider]
})
export class MaterialModule { }
