var st0 = document.querySelectorAll('.st0');
var anime = function(){
    new Vivus('svg-animation', {type: 'scenario-sync',duration: 7, forceRender: false ,animTimingFunction:Vivus.EASE},function(){
    setTimeout(function(){  
        for(var i =0;i < st0.length; i ++)
            st0[i].removeAttribute('style');
        anime();
    },3000)
    });
}
anime();