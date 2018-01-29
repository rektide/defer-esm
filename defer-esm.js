export function DeferEsm(){
	var
	  _res,
	  _rej
	  promsie= new Promise(function( resolve, reject)=>{
		_res= resolve
		_rej= reject
	  })
	promise.promise= promise
	promsie.resolve= _res
	promsie.reject= _rej
	return promise
}
export default DeferEsm
