# Shopping-Cart

This simple shopping cart shows how React with Typescript, React hooks, React Context and Styled Components can be used to build an app with instant updates.

<img src="./preview.png">

### Features

- Login and Register
- Add and remove products from the cart
- Update quantity in the cart
- Send confirmation email with EmailJS
- REST API with Json server for simulating a Backend for fetching Product and User data

## Build/Run

### Requirements

- Node.js

```javascript

/* Install the needed packages */
npm install

/* Start the json-server */
npx json-server -w data/data.json -p 3501

/* Start the app */
npm run dev

```

### Optional

EmailJS account and configuration:

- Providing 'Service_ID', 'Template_ID' and 'Public_Api_Key' in the SendEmail.tsx file.
- https://www.emailjs.com/docs/tutorial/overview/
- Without it will just console log the message.

## How to use

- In order to add products to the cart you need to register a new account and login with it.
- Clicking the 'Add To Cart' button multiple times increases the quantity.
- Clicking the 'View Cart' button displays the cart.
- In the cart you can delete items, update their quantity.
- Clicking the 'Place Order' button clears the cart and sends a confirmation email.
