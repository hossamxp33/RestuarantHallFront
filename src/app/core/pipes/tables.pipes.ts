import { Pipe, PipeTransform } from "@angular/core";







@Pipe({
   name: "table_kind"
})
export class TablesPipe implements PipeTransform
{


   transform(value: number) 
   {

      switch ( value )
      {

         case 2:
            return "../../../assets/images/table_3.svg";
         break;

         case 4:
            return "../../../assets/images/table_2.svg";
         break;

         case 6:
            return "../../../assets/images/table_1.svg";
         break;

         default:
            return "../../../assets/images/table_2.svg";

      }

       
   }

}