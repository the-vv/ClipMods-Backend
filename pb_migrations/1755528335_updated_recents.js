/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1032687501")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.id != \"\" && @request.auth.id = user",
    "deleteRule": "@request.auth.id != \"\" && @request.auth.id = user",
    "listRule": "@request.auth.id != \"\" && @request.auth.id = user",
    "updateRule": "@request.auth.id != \"\" && @request.auth.id = user",
    "viewRule": "@request.auth.id != \"\" && @request.auth.id = user"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1032687501")

  // update collection data
  unmarshal({
    "createRule": "",
    "deleteRule": "",
    "listRule": "",
    "updateRule": "",
    "viewRule": ""
  }, collection)

  return app.save(collection)
})
