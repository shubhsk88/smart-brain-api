const handleProfileGet=(req,res,db)=>{
	const {id}=req.params;
	let found=false;
	db.select('*').from('users').where({id})
	.then(user=>{
		if(user.length)
		{
		res.json(user[0])	
		}
		else {
			res.status(400).json('not found')
		}
		
	})
	
	// if(!found){
	// 	res.status(404).json('error')
	// }
}



module.exports={
	handleProfileGet:handleProfileGet
}
