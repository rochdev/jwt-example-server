'use strict';

var Datastore = require('nedb');

module.exports = {
  users: new Datastore({autoload: true}),
  products: new Datastore({autoload: true}),
  items: new Datastore({autoload: true}),
  seed: function() {
    this.users.insert([
      {username: 'user', password: 'user'},
      {username: 'admin', password: 'admin'}
    ]);

    this.products.insert([
      {
        name: 'Some product',
        description: 'Lorem Ipsum'
      },
      {
        name: 'Other product',
        description: 'Dolor Si Amet'
      }
    ]);

    this.items.insert([
      {
        name: 'Some item',
        description: 'Lorem Ipsum'
      },
      {
        name: 'Other item',
        description: 'Dolor Si Amet'
      }
    ]);
  }
};
