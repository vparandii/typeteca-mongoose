const mongoose = require('mongoose')

module.exports.registerNewType = (Type, name) => {
  const typeName = name || `Typeteca${Type.name}`

  const type = mongoose.Schema.Types[typeName]

  if (type) return type

  const newTypes = {
    [typeName]: class extends mongoose.SchemaType {
      constructor(key, options){
        super(key, options, typeName)
      }
      cast(val){
        try {
          return new Type(val).valueOf()
        } catch (err) {
          throw new Error(err.message)
        }
      }
    }
  }

  mongoose.Schema.Types[typeName] = newTypes[typeName]

  return newTypes[typeName]
}
