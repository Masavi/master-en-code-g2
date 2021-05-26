const mongoose = require('mongoose');
const { PostSchema } = require('./Post');

const UserSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  role: {
    type: String,
    default: 'GUEST',
    enum: ['GUEST', 'ADMIN'],
  },
  profile_pic: {
    type: String,
    default: 'https://ca.slack-edge.com/TE1NJDVGU-UFLF10755-78d87551fb96-512'
  },
  posts: [ PostSchema ],
  is_active: {
    type: Boolean,
    default: true,
  },
}, {
  collection: 'users',
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});

/**
 * El modelo es el objeto que nos permite interactuar
 * con una colección dada.
 * 
 * En este caso, el modelo 'User' nos permitirá interactuar
 * con la colección 'Users'.
 */ 
const User = mongoose.model('User', UserSchema);

module.exports = { User };
