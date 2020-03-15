


var pokemonRepository = (function(){
    
    
    var repository=[];
    
    
    
//    var charmeleon = {name:'charmeleon',height:1.1,types:['ground','rock','water']};
//    var metapod = {name:'Metapod',height:0.7,types:['rock','fire','gas']};
//    var bulbasaur = {name:'Bulbasaur',height:0.7,types:['fire','ice','electric']};
//    var squirtle = {name:'Squirtle',height:0.5,types:['grass','electric','steel']};
    
    
    
    var plist=document.querySelector('.list_pokemon');
    var loadingMessage ='List loading...';
    
    
    function getAll(){
        
        return repository;
        
    }

    function addListItem(pokemon){
        
        var listItem=document.createElement('li');
        var btn = document.createElement('button');
        btn.innerText=pokemon.name;
        btn.classList.add('button_pokemon');
        listItem.appendChild(btn);
        plist.appendChild(listItem);
        btn.addEventListener('click',function(){
        
        showDetails(pokemon);
        });
        
    }
    
    function showDetails(pokemon){
        loadDetails(pokemon);
    }
    
    
    function loadList(){
        showLoadingMessage();
        var path='https://pokeapi.co/api/v2/pokemon/';
        fetch(path).then(function(response){
            return response.json();
        }).then(function(list){
            
            list.results.forEach(function(item){
                var pokemon = {name:item.name, detailsUrl:item.url};
                add(pokemon);
            })
            
            
            
        }).catch(function (e) {
            console.error(e);
        });
        
        hideLoadingMessage();
    }
    
    
    function add(pokemon){

            repository.push(pokemon);
            getAll().forEach(addListItem);
            
    } 
    
    function loadDetails(pokemon){
        showLoadingMessage();
        var path = pokemon.detailsUrl;
        
        fetch(path).then(function(response){
            return response.json();
        }).then(function(details){
            
            var height = details.height;
            var imgUrl =details.sprites.front_default;
            pokemon = {name:pokemon.name,detailsUrl:pokemon.detailsUrl, height:height, imgUrl:imgUrl}
            console.log(pokemon);
        });
        
        hideLoadingMessage();
    }
    
     function showLoadingMessage(){
         document.getElementById('div_loading').style.display='block';
     }   
    
    function hideLoadingMessage(){
        document.getElementById('div_loading').style.display='none';
    }
    
    return {loadList:loadList,add:add,getAll:getAll};  
    
    
    
})();


pokemonRepository.loadList();
//console.log(pokemonRepository.getAll());
















 
