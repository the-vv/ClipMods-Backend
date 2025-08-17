/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1032687501")

  // add field
  collection.fields.addAt(3, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_3827382900",
    "hidden": false,
    "id": "relation401888072",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "mod",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1032687501")

  // remove field
  collection.fields.removeById("relation401888072")

  return app.save(collection)
})
