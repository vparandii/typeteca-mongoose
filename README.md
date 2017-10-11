# Typeteca-Mongoose

[![NPM](https://nodei.co/npm/typeteca-mongoose.png?downloads=true&downloadRank=true)](https://nodei.co/npm/typeteca-mongoose/)

Package helps easily integrate [Typeteca](https://github.com/walandemar/typeteca) Types into [Mongoose](https://github.com/Automattic/mongoose) Schema registry, using one tiny method.

## Installing
```bash
npm i typeteca-mongoose
```

## Usage
```js
const mongoose = require('mongoose')
const {Email, Password} = require('typeteca')
const {registerNewType} = require('typeteca-mongoose')

// register dynamically and get new type returned
const User = new mongoose.Schema({
  email: registerNewType(Email)
})

// ...or use new types through Schema registry
registerNewType(Password)
User.add({
  password: mongoose.Schema.Types.Password
})
```

## Note
* This package uses `mongoose` peer dependency, therefore it will use your locally installed version.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
