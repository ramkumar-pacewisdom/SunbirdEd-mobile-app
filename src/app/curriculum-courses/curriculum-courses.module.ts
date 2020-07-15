import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CurriculumCoursesPage } from './curriculum-courses.page';
import { CommonConsumptionModule } from '@project-sunbird/common-consumption';
import { TranslateModule } from '@ngx-translate/core';
import { CurriculumCoursesRoutingModule } from './curriculum-courses-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommonConsumptionModule,
    CurriculumCoursesRoutingModule,
    TranslateModule.forChild(),
  ],
  declarations: [CurriculumCoursesPage]
})
export class CurriculumCoursesPageModule { }
