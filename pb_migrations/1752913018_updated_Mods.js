/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3827382900")

  // update collection data
  unmarshal({
    "name": "mods"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3827382900")

  // update collection data
  unmarshal({
    "name": "Mods"
  }, collection)

  return app.save(collection)
})
