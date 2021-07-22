




const color=[
   {
       name:'pink',
       code:'#fb839e',
       url:'css/skins/pink.css'
   },

   {
    name:'blue',
    code:'#3e99f4',
    url:'css/skins/blue.css'
   },

    {
      name:'light green',
     code:'#0dcebd',
      url:'css/skins/green.css'
   },

   {
    name:'red',
    code:'#cc3a3b',
    url:'css/skins/red.css'
   },
   
    {
      name:'orange',
      code:'#ff9800',
      url:'css/skins/orange.css'
   },
]

$(document).ready(function (){
    setColors();
    function setColors(){
        for(var i=0; i<color.length; i++){
           const span = document.createElement("span");
              span .style.backgroundColor = color[i].code;
           $(".colors").append(span);

        }
    }

    $(".colors span").click(function(){
       const index = $(this).index();
     $(".alternate-style").attr("href",color[index].url);
    })

})
