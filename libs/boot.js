module.exports = app => {
    app.db.sequelize.sync().done(()=>{
        app.listen(app.get("port"), () =>{
            console.log(`Future Computing API - Port ${app.get("port")}`);
        })
    })
}