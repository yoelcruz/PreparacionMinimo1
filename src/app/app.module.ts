import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//mport { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppRouting } from './app.routing';

// Componentes
import { AppComponent } from './app.component';
import { StudentModule } from './students/student.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouting,
    HttpClientModule,
    StudentModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
