import dateFormat from "format-datetime";


let util = {};

/*
@params
date: 日期对象  new Date()
type: 类型  yyyy-MM-dd HH:mm:ss
*/
util.dateFormat = function(date=new Date(),type='yyyy-MM-dd HH:mm:ss'){
   return dateFormat(date,type);
}
