import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRouting } from './student.routing';
import { StudentListComponent } from './student-list/student-list.component';

@NgModule({
  declarations: [
    StudentListComponent
  ],
  imports: [
    CommonModule,
    StudentRouting
  ]
})
export class StudentModule {}
