import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";








@Injectable({ providedIn : "root" })
export class FoodModalService
{

    private food_modal_data = new BehaviorSubject({});

    private food_modal_active_status = new BehaviorSubject(false);

    private resturant_id : number = 0;

    constructor(){}


    set_modal_data(data : any)
    {

        // get resturant id
        this.get_resturant_id(data);
        
        this.food_modal_data.next(data);

        this.set_active_status(true);

    }


    get_modal_data()
    {
        return this.food_modal_data;
    }


    set_active_status(status : boolean)
    {
        this.food_modal_active_status.next(status);
    }

    get_active_state()
    {
        return this.food_modal_active_status;
    }



    get_resturant_id(food_item?: any) : number
    {
        // get resturant id
        if ( localStorage.getItem("restaurant_id") )
        {
            this.resturant_id = Number(localStorage.getItem("restaurant_id")) || 0;
            return this.resturant_id;
        }
        else
        {
            this.resturant_id = food_item.restaurantsId;
            return this.resturant_id;
        }

    }




}