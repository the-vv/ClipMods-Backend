/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3827382900")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.id != \"\" && @request.auth.id = createdBy",
    "deleteRule": "@request.auth.id != \"\" && @request.auth.id = createdBy",
    "listRule": "@request.auth.id != \"\" && @request.auth.id = createdBy && publicApprovalStatus = 'approved'",
    "updateRule": "@request.auth.id != \"\" && @request.auth.id = createdBy",
    "viewRule": "@request.auth.id != \"\" && @request.auth.id = createdBy && publicApprovalStatus = 'approved'"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3827382900")

  // update collection data
  unmarshal({
    "createRule": "",
    "deleteRule": null,
    "listRule": "",
    "updateRule": "",
    "viewRule": ""
  }, collection)

  return app.save(collection)
})
