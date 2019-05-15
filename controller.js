////MODULARIZATION WITH MODELS:
const Task = require("./models")


//EXPORT OUR CONTROLLERS SO OUR ROUTES CAN ACCESS IT
module.exports = {
    index : ( req , res ) => {
        Task.find ( { } )
        .then ( data => {
            console.log ( 'displaying objects' , data );
            res.json ( { message : 'success' , data : data } );
        } )
        .catch ( err => {
            console.log ( 'query error' , err );
            res.json ( { message : 'Error' , error : err } );
        } )
    } ,
		

	show : ( req , res ) => {
		console.log ( req.params )
		Task.findById( req.params.id )
		.then ( data => {
			console.log ( 'reading data' , data );
			res.json ( { message : 'showing object' , data : data } )
		} )
		.catch ( err => {
			console.log ( 'error' , err );
			res.json ( {message: 'Could not find' , error : err } );
		} )
	} ,
		

	add : ( req , res ) => {
		console.log ( req.params )
		Task.create( {
			title : req.body.title,
			description : req.body.description,
			completed : req.body.completed,

		} )
		.then ( data => {
			console.log ( 'successfully added' , data );
			res.json ( { message : 'Object added' , data : data } )
		} )
		.catch ( err => {
			console.log ( 'error' , err );
			res.json ( {message: 'Could not add' , error : err } );
		} )
	} ,
		

	updt : ( req , res ) => {
		console.log ( req.params )
		Task.findByIdAndUpdate( req.params.id, {
			title : req.body.title,
			description : req.body.description,
			completed : req.body.completed,

		} )
		.then ( data => {
			console.log ( 'successfully updeted' , data );
			res.json ( { message : 'Object added' , data : data } )
		} )
		.catch ( err => {
			console.log ( 'error' , err );
			res.json ( {message: 'Could not add' , error : err } );
		} )
	} ,
		

    
    delete : ( req , res ) => {

		console.log ( req.params )
		Task.findOneAndDelete( req.params.id )
		.then ( data => {
			console.log ( 'successfully deleted' , data );
			res.json ( { message : 'Object deleted' , data : data } )
		} )
		.catch ( err => {
			console.log ( 'error' , err );
			res.json ( {message: 'Could not delete' , error : err } );
		} )
	} ,

    

    
}