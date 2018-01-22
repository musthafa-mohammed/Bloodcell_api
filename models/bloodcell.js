var db=require('../dbconnection'); //reference of dbconnection.js




var bloodcell={

getUsersByGroup:function(id,callback){

return db.query("Select * from bloodcell",callback);

},
updateUser:function(body,callback){
  //console.log(body);

return db.query("Select * from bloodcell",callback);

}


};
 module.exports=bloodcell;
