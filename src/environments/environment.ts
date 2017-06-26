// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,

  firebaseConfig: {
    apiKey: "AIzaSyBaICYKfLHVtxmg6UGzsYLnSUD-t_pyE1U",
    authDomain: "nucleo-mamografiadev.firebaseapp.com",
    databaseURL: "https://nucleo-mamografiadev.firebaseio.com",
    projectId: "nucleo-mamografiadev",
    storageBucket: "nucleo-mamografiadev.appspot.com",
    messagingSenderId: "556834572734"
  }
};
