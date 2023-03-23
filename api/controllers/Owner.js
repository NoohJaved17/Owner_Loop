const Owner = require("../models/Owner");

exports.getAllOwner = (req, res) => {
    Owner.find()
        .then((Owner) => res.json(Owner))
        .catch((err) =>
            res
                .status(404)
                .json({ message: "Owner not found", error: err.message })
        );
};

exports.postCreateOwner = (req, res) => {
    Owner.create(req.body)
        .then((data) => res.json({ message: "Owner added successfully", data }))
        .catch((err) =>
            res
                .status(400)
                .json({ message: "Failed to add Owner", error: err.message })
        );
};

exports.putUpdateOwner = (req, res) => {
    Owner.findByIdAndUpdate(req.params.id, req.body)
        .then((data) => res.json({ message: "updated successfully", data }))
        .catch((err) =>
            res
                .status(400)
                .json({ message: "Failed to update Owner", error: err.message })
        );
};

exports.deleteOwner = (req, res) => {
    Owner.findByIdAndRemove(req.params.id, req.body)
        .then((data) =>
            res.json({ message: "Owner deleted successfully", data })
        )
        .catch((err) =>
            res
                .status(404)
                .json({ message: "book not found", error: err.message })
        );
};