/**
 * ProductosController
 *
 * @description :: Server-side logic for managing productos
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	asociarConProveedor: function(req, res){
		console.log('ID producto: '+req.param('id'));
		console.log('ID Proveedor: '+req.param('ProveedorID'));
		Productos.update({id:req.param('id')},
		{
			proveedor:req.param('ProveedorID')
		}).exec(function(err){
			if(err) return res.negotiate(err);
			
			return res.ok();
		});
	}

};

