import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TablesPipe } from "../pipes/tables.pipes";











@NgModule({
   declarations: [
      TablesPipe
   ],
   imports: [],
   exports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      TablesPipe
   ]
})
export class SharedModule
{}