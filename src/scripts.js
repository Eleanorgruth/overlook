// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';

// An example of how you tell webpack to use an image 
//(also need to link to it in the index.html)
import './images/turing-logo.png'
import './images/overlook-background-image.png'
import Customer from './classes/Customer';
import { displayWelcomeMessage } from './domUpdates';


console.log('This is the JavaScript entry file - your code begins here.');

//Other Functions
function randomizeUser(data) {
  randomUser = data[Math.floor(Math.random() * data.length)]
  customer = new Customer(randomUser)
  displayWelcomeMessage(customer.name)
  return user
}
