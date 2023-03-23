const express = require("express");
const router = express.Router();

const {
    getAllOwner,
    postCreateOwner,
    putUpdateOwner,
    deleteOwner,
} = require("../controllers/Owner");

/**
 * @route GET api/Owner
 * @description get all Owner
 * @access public
 */
router.get("/", getAllOwner);

/**
 * @route POST api/Owner
 * @description add a new Owner
 * @access public
 */
router.post("/", postCreateOwner);

/**
 * @route PUT api/Owner/:id
 * @description update Owner
 * @access public
 */
router.put("/:id", putUpdateOwner);

/**
 * @route DELETE api/Owner/:id
 * @description delete Owner
 * @access public
 */
router.delete("/:id", deleteOwner);

module.exports = router;