// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = { 
  production: false,

  region: 'eu-central-1',

  identityPoolId: 'eu-central-1:253d4d3a-4be7-4bee-bb98-e2e8e162b98b',
  userPoolId: 'eu-central-1_PI8ep591h',
  clientId: '50i6ivq2q5ro90ihebnje78h45',

  ddbTableName: 'LoginTrail',

  cognito_idp_endpoint: '',
  cognito_identity_endpoint: '',
  sts_endpoint: '',
  dynamodb_endpoint: '',
  s3_endpoint: ''
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
