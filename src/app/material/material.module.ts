import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSliderModule } from '@angular/material/slider';

const MaterialComponents = [MatSliderModule,
                            MatToolbarModule,
                            MatButtonModule,
                            MatSidenavModule,
                            MatIconModule,
                            MatListModule,
                            MatButtonToggleModule] 

@NgModule({
  imports: [MatSliderModule,
            MatToolbarModule,
            MatButtonModule,
            MatSidenavModule,
            MatIconModule,
            MatListModule,
            MatButtonToggleModule],
  exports: [MatSliderModule,
            MatToolbarModule,
            MatButtonModule,
            MatSidenavModule,
            MatIconModule,
            MatListModule,
            MatButtonToggleModule]
})
export class MaterialModule { }
