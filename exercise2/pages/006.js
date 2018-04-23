pageComponentry = {
    data: function() {
        return {
            pageTitle: 'Switch On',
            image: '4.png',
            alt: ' ',
            light: false
        }
    },
    computed:{

    },
    methods: {  

        lightOn: function(){
            this.light = true;
            $('.v3-template-fix').removeClass('off-switch');
        }

    },
    ready: function() {
      
    $('.v3-template-fix').addClass('off-switch');

    }
}