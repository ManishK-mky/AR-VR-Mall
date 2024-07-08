const Data = require('../models/dataModel');

// Handle form submission
const submitData = async (req, res) => {
  try {
    const { name, mail ,password} = req.body; // Destructure both name and data
    const newData = new Data({ name, mail , password }); // Create a new instance with both name and data
    await newData.save();
    res.redirect('/display');
  } catch (err) {
    console.error(err);
    res.status(500).send('Password must contain at least one letter, one number, and one special character.');
  }
};

// Display data
const displayData = async (req, res) => {
  try {
    const data = await Data.find();
    // res.render('index', { data }); //isme hum data ko bhej rhe hai aur index.ejs ko render karwa rhe hai (data bhej rhe hai taki index me render karwa sake)
    res.render('index') //isase kavel page ko render karwe hai
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = { submitData, displayData };
