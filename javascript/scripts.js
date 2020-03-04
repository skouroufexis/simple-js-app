var repository = [];





var charmeleon = {name:'charmeleon',height:1.1,types:['ground','rock','water']};
var metapod = {name:'Metapod',height:0.7,types:['rock','fire','gas']};
var bulbasaur = {name:'Bulbasaur',height:0.7,types:['fire','ice','electric']};
var squirtle = {name:'Squirtle',height:0.5,types:['grass','electric','steel']};


repository[0]= charmeleon;
repository[1]= metapod ;
repository[2]= bulbasaur;
repository[3]= squirtle;


//for1(repository);
for2(repository);

//function for1(repository){
//    
//    var l = repository.length;
//    var c;
//    var t="";
//    
//    
//    for(c=0;c<l;c++){
//    
//        if(repository[c].height>1)
//                {
//                    t='<div class="row">'+repository[c].name+' (height:'+repository[c].height+')'+'  <span class="span_highlight">Wow, that’s big!</span>'+'</div><br>';
//                }
//
//        else
//                {
//                    t='<div class="row">'+repository[c].name+' (height:'+repository[c].height+')'+'</div><br>';
//                }
//
//        document.write(t);
//    
//    }
//    
//}



function for2(repository){
    
    
    function print(item, i){
        document.write('<div class="row"><b>Name:</b>'+item.name+' <b>height:</b> '+item.height+' <b>types:</b> '+item.types+'</div><br>');
    }
    
    
    repository.forEach(print);
    
}



 
