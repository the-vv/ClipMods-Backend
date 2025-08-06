/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3827382900")

  // remove field
  collection.fields.removeById("bool4024598060")

  // add field
  collection.fields.addAt(6, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text4024598060",
    "max": 0,
    "min": 0,
    "name": "publicApprovalStatus",
    "pattern": "^'pending' | 'approved' | 'rejected'$",
    "presentable": false,
    "primaryKey": false,
    "required": true,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
}, (app) => {
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

  // remove field
  collection.fields.removeById("text4024598060")

  return app.save(collection)
})
