//REQUIRE CONTROLLER TO HAVE ACCESS TO ROUTE LOGIC
const controller = require("./controller")

//EXPORT ROUTES SO OUR SERVER.JS CAN ACCESS IT
module.exports = function(app){
    app.get('/tasks', controller.index)
    app.get ( '/tasks/:id' , controller.show );
    app.post ( '/tasks' , controller.add );
    app.put( '/tasks/:id' , controller.updt );
    app.delete( '/tasks/:id' , controller.delete );
}