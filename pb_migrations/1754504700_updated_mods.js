/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3827382900")

  // add field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "bool4024598060",
    "name": "publicApprovalStatus",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3827382900")

  // remove field
  collection.fields.removeById("bool4024598060")

  return app.save(collection)
})
