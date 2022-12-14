// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.


let domain = "https://satatechnologygroup.net";

export const environment = {
  production: false,
  base_url: `${domain}:1111/api`,
  graph_url: `${domain}:1112/graphql`,
  img_url: `https://restaurant-satafood.s3.amazonaws.com`,
  vendor_id: 434,
  branch_id: 183
};




/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
