/* tslint:disable */
// @ts-nocheck
const { writeFile, existsSync, mkdirSync } = require('fs');
const { argv } = require('yargs');

require('dotenv').config();
const environment = argv.environment;

//Function used to write env secerts to enviroment files
function writeFileUsingFS(targetPath, environmentFileContent) {
  writeFile(targetPath, environmentFileContent, function (err) {
    if (err) {
      console.log(err);
    }
    if (environmentFileContent !== '') {
      console.log(`wrote variables to ${targetPath}`);
    }
  });
}


// Providing path to the `environments` directory
const envDirectory = './src/environments';

// creates the `environments` directory if it does not exist
if (!existsSync(envDirectory)) {
  mkdirSync(envDirectory);
}

//creates the `environment.development.ts` and `environment.ts` file if it does not exist
writeFileUsingFS('./src/environments/environment.development.ts', '');
writeFileUsingFS('./src/environments/environment.ts', '');


// Checks whether command line argument of `prod` was provided signifying production mode
const isProduction = environment === 'production';

// choose the correct targetPath based on the environment chosen
const targetPath = isProduction
  ? './src/environments/environment.ts'
  : './src/environments/environment.development.ts';

//actual content to be compiled dynamically and pasted into respective environment files
const environmentFileContent = `
  export const environment = {
    firebase: {
      projectId: '${process.env.projectId}',
      appId: '${process.env.appId}',
      storageBucket: '${process.env.storageBucket}',
      apiKey: '${process.env.apiKey}',
      authDomain: '${process.env.authDomain}',
      messagingSenderId: '${process.env.messagingSenderId}',
      measurementId: '${process.env.measurementId}',
    }
  };
`;

writeFileUsingFS(targetPath, environmentFileContent); // appending data into the target file

/* tslint:enable */