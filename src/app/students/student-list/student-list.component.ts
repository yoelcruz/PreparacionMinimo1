import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  public students: Student[] = [];

  constructor(
    private studentService: StudentService
  ) { }

  ngOnInit(): void {
    this.setStudies(['telecos']);
  }
  setStudies(studies: string[]){
    this.studentService.getByStudies(studies).subscribe((students) => {
      this.students = students;
    });
  }

}
