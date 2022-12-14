import { Component, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {


  orderDetails : any;
  subTotal: any = 0;

  constructor() { }

  ngOnInit(): void 
  {

    this.orderDetails = {

      "ResName": " الشرقاوى ",
      "logo": "uploads/cities/logo-1666272951355-494269643.jpg",
      "latitude": 30.0578,
      "longitude": 31.3375907,
      "code": "KrI8oFoMX61982022",
      "cover": "uploads/cuisines/img-1663249742898-699416813.jpeg",
      "id": 2400,
      "total": 5,
      "user_id": 6002,
      "order_status_id": 7,
      "paymenttype_id": 2,
      "branch_id": 183,
      "taxes": 0,
      "created": "2022-12-04T11:28:45.000Z",
      "modified": "2022-12-04T11:29:11.000Z",
      "offer_id": 0,
      "wallets_id": 0,
      "notes": "",
      "billing_address_id": 0,
      "discount": 0,
      "commission": 0,
      "delivery_id": 0,
      "delivery_serivce": 0,
      "delivery_time": 0,
      "takeway": 1,
      "canceled_reason": "",
      "delivery_comment": "",
      "test_orders": 0,
      "offer_discount": 0,
      "wallet_discount": 0,
      "rated": 0,
      "area_id": 0,
      "sub_total": 5,
      "preparing_time": 0,
      "voucher_id": "",
      "voucher_discount": 0,
      "created_by": 6002,
      "modified_by": null,
      "accept_order_time": null,
      "OrderId": 2400,
      "BranchUserId": 6991,
      "restaurantsId": 247,
      "DateDiff": "0000-00-",
      "order_details": [
          {
              "id": 4668,
              "orderId": 2400,
              "menu_categories_itemId": 19623,
              "amount": 1,
              "total": 5,
              "created": "2022-12-04T11:28:45.000Z",
              "modified": "2022-12-04T11:28:45.000Z",
              "notes": "",
              "created_by": null,
              "modified_by": null,
              "menu_categories_items": {
                  "id": 19623,
                  "name": "ساندوتش فول",
                  "photo": "uploads/cities/img-1669538761345-558745182.jpg",
                  "descriptions": "",
                  "descriptions_en": "",
                  "name_en": "Foul Sandwich",
                  "menu_categories_id": 1137,
                  "price": 0,
                  "created": "2022-11-24T09:39:31.000Z",
                  "modified": "2022-11-24T09:39:31.000Z",
                  "active": 1,
                  "created_by": null,
                  "modified_by": null
              },
              "order_details_options": [
                  {
                      "id": 438,
                      "order_detailsId": 4668,
                      "menu_options_id": 21091,
                      "created": null,
                      "modified": null,
                      "created_by": null,
                      "modified_by": null,
                      "menu_options": {
                          "id": 21091,
                          "name": "خبز شامى",
                          "name_en": "Shami Bread",
                          "price": 5,
                          "created": null,
                          "modified": null,
                          "menu_options_topics_id": 8065,
                          "active": 0,
                          "tmp_price": 0,
                          "created_by": 6991,
                          "modified_by": null,
                          "menu_categories_items_id": 0
                      }
                  }
              ]
          }
      ],
      "paymenttype": {
          "id": 2,
          "name": "كاش",
          "photo": "",
          "name_en": "CASH",
          "created_by": null,
          "modified_by": null
      },
      "order_status": {
          "id": 7,
          "name": "ملغي من العميل",
          "name_en": "Client Cancel",
          "created_by": null,
          "modified_by": null
      },
      "users": {
          "id": 6002,
          "user_group_id": 0,
          "username": "elhawy2",
          "password": "$2b$10$7Brrxfm69/rEVbtod99UqehzcNgF7YLgThiJBC8QRYWtbbcvRBhxG",
          "active": 1,
          "email_verified": 1,
          "email": "mohamed@rest.food",
          "mobile": "01012532382",
          "created": "2022-12-14T13:43:29.000Z",
          "modified": "2022-10-23T23:01:42.000Z",
          "address": "",
          "facebook_id": "",
          "device_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjo2MDAyLCJpYXQiOjE2NzEwMjU0MDksImV4cCI6MTY3MzYxNzQwOSwiYXVkIjoiTW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV09XNjQpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS8xMDguMC4wLjAgU2FmYXJpLzUzNy4zNiIsImlzcyI6IlNhdGFGb29kIiwic3ViIjoic29tZUB1c2VyLmNvbSJ9.YX4MY-4sbcwYjpYozeAkOnlgykFPrdkiQLSCu27RO8nIEVYtISYo3QnqAc-IVfrM1ix3i5jFtls3zLi3m5_FxVNMgh0Di7gzpt16E8X0DGVNvhQieFO1EQ0Jhh2IsRTGja2p4VGFjERAn_h5g0paHmAKwqLTNKuum5VVAHdzXCcTy6Iaf1RGug2DEKMKYl4tqx0ME_U9az9akrm3V2Z73zC50xP6COI_xBid6BLIPgxbyWoccHKBwkOIzpSlMOXKg7lzt34HOVhxKNxjzX5Pg7KdU4b6p0JZhIwJi96g_zV0WqGnq2LyRB0sQaZBdqx0dxc-uoeTIOWFFoVG-GlI1w",
          "position": "",
          "branch_id": 0,
          "restaurant_id": 0,
          "name": "",
          "department_id": 0,
          "department_positions_id": 0,
          "room_id": "",
          "photo": "",
          "first_name": "king mohamed",
          "last_name": "elhawy",
          "code": "CQHHhGMNFE20820",
          "email_code": "5553",
          "new_pass": "",
          "google_id": "",
          "platform": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
          "ip": "127.0.0.1",
          "created_by": null,
          "modified_by": null
      },
      "billing_address": null
    };

  }



  print_transcript(print_transcript : any)
  {

    console.log(print_transcript);

    this.printPageArea(print_transcript);

  }



  printPageArea(print_transcript : any) 
  {

    let data = print_transcript;

    setTimeout(() => {
    let data = print_transcript;
    html2canvas(data as any, {
        imageTimeout: 50000,
        useCORS: true,
        proxy: "node.js",
    }).then((canvas) => {
        const imgWidth = 210;
        const imgHeight = 280;
        const contentDataURL = canvas.toDataURL("image/png");
        const pdfData = new jsPDF("p", "mm", "a4");
        const position = 0;
        pdfData.addImage(
        contentDataURL,
        "PNG",
        0,
        position,
        imgWidth,
        imgHeight
        );
        window.open(URL.createObjectURL(pdfData.output("blob")), "_blank");
    });
    }, 1000);

  }




}
