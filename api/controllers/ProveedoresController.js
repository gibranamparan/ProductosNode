/**
 * ProveedoresController
 *
 * @description :: Server-side logic for managing proveedores
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

//GET domain/Proveedores/:id
module.exports = {

	findOne:function(req,res){
		Proveedores.findOne({
			nombre:req.param('NombreProveedor')
		}).exec(function(err, proveedor){
			if(err) return res.negotiate(err);
			if(!proveedor)
				return res.notFound();

			Productos.find({
				proveedor:proveedor.id
			}).exec(function(err, productos){
				if(err) return res.negotiate(err);

				return res.view('inicio',{
					proveedor:proveedor,
					productos:productos,
				});
			});
		});
	},

};

