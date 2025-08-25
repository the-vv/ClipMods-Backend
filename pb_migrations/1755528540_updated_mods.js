/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3827382900")

  // update collection data
  unmarshal({
    "listRule": "(isPublic = true && publicApprovalStatus = 'approved') || (isPublic = false && @request.auth.id = createdBy)",
    "viewRule": "(isPublic = true && publicApprovalStatus = 'approved') || (isPublic = false && @request.auth.id = createdBy)"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3827382900")

  // update collection data
  unmarshal({
    "listRule": "@request.auth.id != \"\" && ((isPublic = true && publicApprovalStatus = 'approved') || (isPublic = false && @request.auth.id = createdBy))",
    "viewRule": "@request.auth.id != \"\" && ((isPublic = true && publicApprovalStatus = 'approved') || (isPublic = false && @request.auth.id = createdBy))"
  }, collection)

  return app.save(collection)
})
