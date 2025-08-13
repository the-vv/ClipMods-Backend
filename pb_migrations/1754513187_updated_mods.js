/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3827382900")

  // add field
  collection.fields.addAt(8, new Field({
    "hidden": false,
    "id": "number1515233354",
    "max": null,
    "min": 1,
    "name": "inputCount",
    "onlyInt": true,
    "presentable": false,
    "required": true,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3827382900")

  // remove field
  collection.fields.removeById("number1515233354")

  return app.save(collection)
})
