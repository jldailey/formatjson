var isArray = function(a){
    return a &&
    typeof a === 'object' &&
    typeof a.length === 'number' &&
    typeof a.splice === 'function' &&
    !(a.propertyIsEnumerable('length'));
};
var tab=2;
var handleObj=function(obj){
    var str="";
    var type=typeof(obj);
    if(type!="object"){
        if(type=="number"||type=="boolean"){
            str=obj.toString();
        }else{
            str='"'+obj.toString()+'"';
        }
    }else{
        if(isArray(obj)){
            str+="[\n";
            for(var i=0;i<obj.length;i++){
                tab++;
                str+=new Array(tab).join("  ")+handleObj(obj[i])+",\n";
                tab--;
            }
            str=str.replace(/,\n$/,"\n");
            str+=new Array(tab).join("  ")+"]";
        }else if(obj===null){
            str+="null"
        }else{
            str+="{\n";
            for(var i in obj){
                tab++;
                str+=new Array(tab).join("  ")+i+":"+handleObj(obj[i])+",\n";
                tab--;
            }
            str=str.replace(/,\n$/,"\n");
            str+=new Array(tab).join("  ")+"}";
        }
    }
    return str;
}
module.exports=function(json){
    if(typeof(json)=="string"){
        json=JSON.parse(json);
    }
    tab=1;
    return handleObj(json);
}