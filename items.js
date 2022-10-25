const router = require("express").Router();
const { request } = require("express");
let Item = require("../models/Item");

const ItemController = require("../controller/itemController");

router.post("/add", ItemController.createItem);

router.get("/get-item", ItemController.getItems);

router.delete("/delete/:id", ItemController.deleteItem);

router.put("/update/:id", ItemController.updateItem);


 

//localhost:/4000/Item/update


/*router.route('/delete/:id').delete(async (req, res) => {
  let userId = req.params.id;
  await Item.findByIdAndDelete(userId)
    .then(() => {
      res.status(200).send({ status: 'user deleted' });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ status: 'error with delete data' });
    });
});

router.route('/get/:id').get((req, res) => {
  let userId = req.params.id;
  Item.findById(userId)
    .then((user) => {
      res.status(200).send({ status: 'user fetched', user: user });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: 'Error with get user', error: err.message });
    });
});*/
module.exports = router;
