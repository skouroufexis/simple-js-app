


var pokemonRepository = (function(){
    
    
    var repository = [];
    var charmeleon = {name:'charmeleon',height:1.1,types:['ground','rock','water']};
    var metapod = {name:'Metapod',height:0.7,types:['rock','fire','gas']};
    var bulbasaur = {name:'Bulbasaur',height:0.7,types:['fire','ice','electric']};
    var squirtle = {name:'Squirtle',height:0.5,types:['grass','electric','steel']};
    
    repository[0]= charmeleon;
    repository[1]= metapod ;
    repository[2]= bulbasaur;
    repository[3]= squirtle;
    
    
    function getAll(){
        return repository;
    }

    function add(item){
        if(typeof item==='object' && Object.keys(item)[0]==='name' && Object.keys(item)[1]==='height' && Object.keys(item)[2]==='types')
            {
                repository.push(item);        
                    
            }
    } 
    
    return {getAll:getAll, add:add};   
    
})();

var repository = pokemonRepository.getAll();

for2(repository);

function for2(repository){
    
    
//    function print(item,i){
//        
//        if(item.height>1)
//            {
//                 document.write('<div class="row"><b>Name:</b>'+item.name+' <b>height:</b> '+item.height+' <b><span class="span_highlight">Wow, that’s big!</span> types:</b> '+item.types+'</div><br>');       
//            }
//        else
//            {
//                document.write('<div class="row"><b>Name:</b>'+item.name+' <b>height:</b> '+item.height+' <b>types:</b> '+item.types+'</div><br>');
//            }
//        
//        
//    }
    
    function buttons(item){
        
        var listItem=document.createElement('li');
        var btn = document.createElement('button');
        btn.innerText=item.name;
        btn.classList.add('button_pokemon');
        listItem.appendChild(btn);
        plist.appendChild(listItem);
        
    }
    
    var plist=document.querySelector('.list_pokemon');
    repository.forEach(buttons);
    
}



 
