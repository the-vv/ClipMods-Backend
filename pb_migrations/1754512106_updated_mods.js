/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3827382900")

  // add field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "number3206337475",
    "max": null,
    "min": null,
    "name": "version",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3827382900")

  // remove field
  collection.fields.removeById("number3206337475")

  return app.save(collection)
})
