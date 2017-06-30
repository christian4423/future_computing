import pass from "password-hash-and-salt";

module.exports = app => {
    const Users = app.db.models.Users;
    const Roles = app.db.models.Roles;
    const UserRole = app.db.models.UserRole;
    app.route("/users")
        .get((req, res) => {
            UserRole.findAll(
                {
                    include: [{
                        model: Roles,
                        as: "Role",
                        attributes: ["role"]
                    }, {
                        model: Users,
                        as: "User",
                        attributes: ["userid", "firstname", "lastname", "profilepic"]
                    }]
                })
                .then(result => {
                    res.json(result);
                })
                .catch(error => {
                    res.status(412).json({ message: error.message });
                });
        })
        .post((req, res) => {
            const data = req.body;
            const password = data.password;
            if (password === undefined) {
                let error = new Error("No Password Provided.");
                res.status(412).json({ message: error.message });
            } else {
                let hash = MakeHash(password);
                hash.then(secret => {
                    const firstname = data.firstname;
                    const lastname = data.lastname;
                    const email = data.email;
                    let new_user = { firstname, lastname, email, hash: secret }
                    Users.create(new_user)
                        .then(result => {
                            let role_obj = {
                                user_id: result.userid,
                                role_id: 3
                            }
                            UserRole.create(role_obj)
                                .then(role_result => { res.json(result) })
                                .catch(error => {
                                    res.status(412).json({ message: error.message });
                                });
                        })
                        .catch(error => {
                            res.status(412).json({ message: error.message });
                        });
                });
                hash.catch(error => {
                    res.status(412).json({ message: error.message });
                });
            }
        })

    app.route("/users/:id")
        .get((req, res) => {
            // Get: user
            Users.findById(req.params.id, {
                attributes: ["userid", "firstname", "lastname", "profilepic"]
            })
                .then(result => res.json(result))
                .catch(error => {
                    res.status(412).json({ message: error.message });
                });
        })
        .put((req, res) => {
            // Update a user
            res.json({ status: 200, message: "Update a single user", data: null })
        })
        .delete((req, res) => {
            // Delete a user
            UserRole.destroy(
                {
                    where: { user_id: req.params.id },
                    cascade: true
                })
                .then(result => {
                    Users.destroy({ where: { userid: req.params.id } })
                        .then(result => res.sendStatus(204))
                        .catch(error => {
                            res.status(412).json({ message: error.message });
                        });
                })
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
