/**
 * By default, it changes the _id property to id and
 * removes the _id and __v properties when transforming the Schema into a JSON object.
 * @param {import('mongoose').Schema} schema Mongoose Schema to be transformed.
 * @param {string[]} deleteProperties Receives an array of properties to remove from the JSON object.
 */
function toJsonTransform(schema, deleteProperties = []) {
  schema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id
      delete returnedObject._id
      delete returnedObject.__v
      for (const i of deleteProperties) {
        if (i in returnedObject) {
          delete returnedObject[i]
        }
      }
    }
  })
}

module.exports = toJsonTransform
