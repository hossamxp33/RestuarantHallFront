import { Injectable, OnInit } from "@angular/core";







@Injectable({ providedIn: 'root' })
export class ServiceWorkersService implements OnInit
{

   available: boolean = false;
   
   constructor() {}

   
   ngOnInit(): void 
   {
       
      this.check_if_available();

      this.register();

   }




   check_if_available()
   {

      if ( window.navigator.serviceWorker )
      {
         this.available = true;
      }

   }


   register()
   {

      if ( this.available )
      {

         window.navigator.serviceWorker.register("../serviceWorkers/sw.js").then(
            (registeration: any)=>{
               console.log(registeration);
            }
         ).catch(
            (err: any)=>{
               console.error(err);
            }
         );


      }


   }




}