import pass from "password-hash-and-salt";

module.exports = app => {
    const Roles = app.db.models.Roles;
    app.route("/roles")
        .get((req, res) => {
            Roles.findAll({})
                .then(result => {
                    res.json(result);
                })
                .catch(error => {
                    res.status(412).json({ message: error.message });
                });
        })
        .post((req, res) => {
            const role = req.body.role;
            let new_role = { role }
            Roles.create(new_role)
                .then(result => res.json(result))
                .catch(error => {
                    res.status(412).json({ message: error.message });
                });
        })

    app.route("/roles/:id")
        .get((req, res) => {
            // Get: user
            Roles.findById(req.params.id, {
                attributes: ["role"]
            })
                .then(result => res.json(result))
                .catch(error => {
                    res.status(412).json({ message: error.message });
                });
        })
        .put((req, res) => {
            // Update a user
            res.json({ status: 200, message: "Update a single role", data: null })
        })
        .delete((req, res) => {
            // Delete a user
            Roles.destroy({ where: { roleid: req.params.id } })
                .then(result => res.sendStatus(204))
                .catch(error => {
                    res.status(412).json({ message: error.message });
                });
        })
};


const MakeHash = (secret) => {
    return new Promise((resolve, reject) => {
        pass(secret).hash(function (error, hash) {
            if (error) {
                reject(error);
            } else {
                resolve(hash);
            }
        });
    });
}
