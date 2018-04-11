pageComponentry = {
    data: function() {
        return {
            pageTitle: 'The Training Program',
            image: '03.png',
            alt: ' ',
        }
    },
    computed:{

    },
    methods: {  

    },
    ready: function() {
      $("#para1").show();
      var count = 1;
      $("#nextPara").on("click",function(){
            if (count == 8){
                return
            } else {
                console.log(count)
                $("#para"+count).fadeOut("fast",function(){
                    count = count + 1;
                    $("#para"+(count)).fadeIn("fast");
                })
                console.log(count)
                if(count === 7){
                    $("#nextPara").hide();
                }
                
            } 
      });
    }
}