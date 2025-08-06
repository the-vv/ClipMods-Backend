/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3827382900")

  // update field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "bool3523658193",
    "name": "isPublic",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3827382900")

  // update field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "bool3523658193",
    "name": "private",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  return app.save(collection)
})
