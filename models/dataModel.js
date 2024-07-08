const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const dataSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  mail: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        // Use a regular expression to enforce password requirements
        return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/.test(value);
      },
      message: 'Password must contain at least one letter, one number, and one special character.',
    },
  },
});

// Pre-save middleware to hash the password before saving to the database
dataSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }

  try {
    const hashedPassword = await bcrypt.hash(this.password, 10); // Hash the password with a salt factor of 10
    this.password = hashedPassword;
    next();
  } catch (err) {
    return next(err);
  }
});

module.exports = mongoose.model('Data', dataSchema);
