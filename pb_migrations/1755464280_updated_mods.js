/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3827382900")

  // update collection data
  unmarshal({
    "listRule": "@request.auth.id != \"\" && @request.auth.id = createdBy && (publicApprovalStatus = 'approved' || isPublic = false)",
    "viewRule": "@request.auth.id != \"\" && @request.auth.id = createdBy && (publicApprovalStatus = 'approved' || isPublic = false)"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3827382900")

  // update collection data
  unmarshal({
    "listRule": "@request.auth.id != \"\" && @request.auth.id = createdBy && publicApprovalStatus = 'approved'",
    "viewRule": "@request.auth.id != \"\" && @request.auth.id = createdBy && publicApprovalStatus = 'approved'"
  }, collection)

  return app.save(collection)
})
