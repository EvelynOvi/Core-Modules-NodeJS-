const fs = require('fs');
const path = require('path');



// // Create directory/folder named: “Students”

// Folder Name
const folderName = 'Students';

// Create the folder
// fs.mkdir(folderName, (err) => {
//     if (err) {
//         console.log('Error creating folder:', err);
//         return;
//     } else {
//         console.log(`Folder "${folderName}" created successfully`);
//     }

// }
// );



// // In the Students directory, create a file named user.js

// File Name
const fileName = 'user.js';

 //Create the file
const usersFilePath = path.join(__dirname, folderName, fileName);

// fs.writeFile(usersFilePath, ' ', (err) => {
//     if (err) {
//         console.log('Error creating file', err);
//         return
//     }
//     console.log(`File "${fileName}" created and written successfully`)
// })



// // Update the Students directory to “Names”

const newFolderName = 'Names'
const renamedFolderPath = path.join(__dirname, newFolderName)
// fs.rename(folderName, renamedFolderPath, (err) => {
//     if (err) {
//         console.log('Error renaming folder:', err);
//         return
//     }
//     console.log(`Folder "${folderName}" renamed to "${newFolderName}" successfully`)
// })



// Add your name as content to the file user.js

const myName = "'Evelyn'"; 
const newUsersFilePath = path.join(__dirname, newFolderName, fileName);

// fs.writeFile(newUsersFilePath, myName, (err) => {
//     if (err) {
//         console.log(`Error adding "${myName}" to file`, err);
//         return
//     }
//     console.log(`${myName} written successfully`)
// })



// // Update the file and add your age, sex, nationality, phone number and any other information about yourself

const content = "\n'My Age is 25, I am female and Nigerian and my phone number is 08012345678'\n";

// // Append to the file
// fs.appendFile(newUsersFilePath, content, (err) => {
//     if (err) {
//         console.log(`Error adding "${content}" to file`, err);
//         return
//     }
//     console.log('Updating file successful!')
// })



// // Update the file user.js to {your_name}.js eg daniel_adesoji.js

const newFileName = 'evelyn_ovi.js';
const renamedFilePath = path.join(__dirname, newFolderName, newFileName)
 
// fs.rename(newUsersFilePath, renamedFilePath, (err) => {
//     if (err) {
//         console.log('Error renaming file:', err);
//         return 
//     }
//     console.log(`File "${fileName}" renamed to "${newFileName}" successfully`)
// })



// // Delete the file {your_name}.js
// fs.rm(renamedFilePath, (err) => {
//     if (err) {
//         console.log(err)
//         return
//     }
//     console.log('File deleted successfully')
// })



// // // Delete the directory “Names”
// fs.rmdir(renamedFolderPath, (err) => {
//     if (err) {
//         console.log(err)
//         return
//     }
//     console.log('Folder deleted successfully')
// })
