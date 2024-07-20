const express = require('express');
const path = require('path')
const mongoose = require('mongoose');
const dataController = require('./controllers/dataController');
const loginController = require('./controllers/loginController');
const { log } = require('console');
// const express = require('express');
const stripe = require('stripe')("sk_test_51ODJjXSIZbfYCnS2dHElGdMa1hGpmfzfpoRSSlaUY7MDSYbmsBXLImdVQio54Le9NI3f7M79k909AYe2tQ297lfO00arg0Utux");

const app = express();
const port = 3000;

// app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/new_meta', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });



  app.get('/about', (req,res) => {
    res.render('about.ejs')
  })

  app.get('/' , (req,res) =>{
    res.render('home')
  })

  // app.get('/home' , (req,res) =>{
  //   res.render('home')
  // })

  app.get('/contact' , (req,res) =>{
    res.render('contact.ejs')
  })

  app.get('/signup', (req, res) => {
    console.log("this is the signup route")
    res.render('index', { data: [] });    //issi se purana wla data bhi dikh rha h
  });

  // app.get('/login' , (req,res) =>{
  //   console.log("This is login page");
  //   res.render('login',{ data:[] });
  // })

app.post('/submit', dataController.submitData);
app.get('/display', dataController.displayData);

app.post('/login', loginController.login);
// app.get('/display', loginController.displayData);

app.get('/scene' , (req,res) =>{
  console.log("this is your scene");
  res.render('scene')
})

app.get('/checkout' , async (req,res) => {
  res.render('checkout')
})

app.post('/payment', async (req, res) => {
  try {
      const session = await stripe.checkout.sessions.create({
          line_items: [
              {
                  price_data: {
                      currency: 'usd',
                      product_data: {
                          name: 'Mens stylish jacket',
                      },
                      unit_amount: 4500 * 100,
                  },
                  quantity: 1,
              },
              {
                  price_data: {
                      currency: 'usd',
                      product_data: {
                          name: 'Shirts for man',
                      },
                      unit_amount: 500 * 100,
                  },
                  quantity: 1,
              },
          ],
          mode: 'payment',
          shipping_address_collection: {
              allowed_countries: ['US', 'BR' ,'IN'],
          },
          success_url: "http://localhost:3000/complete?session_id={CHECKOUT_SESSION_ID}",
          cancel_url: "http://localhost:3000/cancel",
      });

      res.redirect(session.url);
  } catch (error) {
      console.error('Error creating checkout session:', error);
      res.status(500).send('Internal Server Error');
  }
});


app.get('/complete', async (req, res) => {
  try {
      const session = await stripe.checkout.sessions.retrieve(req.query.session_id, {
          expand: ['payment_intent.payment_method'],
      });
      const lineItems = await stripe.checkout.sessions.listLineItems(req.query.session_id);

      console.log(JSON.stringify({ session, lineItems }));

      res.render('payment-success')
  } catch (error) {
      console.error('Error retrieving session details:', error);
      res.status(500).send('Internal Server Error');
  }
});

app.get('/go-to-scene' , async(req,res)=>{
  res.render('scene')
})

app.get('/avatar' , async(req,res)=>{
  res.render("loginSuccess")
})

app.get('/cancel', (req, res) => {
  res.redirect('/');
});
// app.get('/payment' , (req,res) => {
//   res.render("linkpe")
// })


app.use(express.static(__dirname + '/public'));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
