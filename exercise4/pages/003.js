pageComponentry = {
    data: function() {
        return {
            pageTitle: 'Things to consider',
            saveData:{},
            flipswitchData: {
                options: ['No', 'Yes'],
                name: "flipswitches",
                type: "flipswitches",
                // Sets whether the component is a quiz or not.
                quiz: false,
                // Sets whether the page should unlock and allow the user to progress regardless of the outcome of the quiz
                repeatOnFail: false, 
                questions: [{
                    text: 'Honesty towards others',
                    selected: false,
                },{
                    text: 'Integrity – honesty towards yourself',
                    selected: false
                },{
                    text: 'Concentration, Confidence, Composure',
                    selected: false,
                }]
            },
            modals: [{
                // The title text in the modal. Can be blank
                title: 'Honesty towards others',
                // Must be unique
                id: 'modalOne',
                // The text in the button
                buttonText: 'Click me',
                // Changes the styling of the modal to fit a full image.
                imageModal:false,
                // Will remove the button styling from the modal button if you want to use something other than text.
                imageButton: true
            },{
                // The title text in the modal. Can be blank
                title: 'Integrity – honesty towards yourself',
                // Must be unique
                id: 'modalTwo',
                // The text in the button
                buttonText: 'Click me',
                // Changes the styling of the modal to fit a full image.
                imageModal:false,
                // Will remove the button styling from the modal button if you want to use something other than text.
                imageButton: true
            },{
                // The title text in the modal. Can be blank
                title: 'Concentration, Confidence, Composure',
                // Must be unique
                id: 'modalThree',
                // The text in the button
                buttonText: 'Click me',
                // Changes the styling of the modal to fit a full image.
                imageModal:false,
                // Will remove the button styling from the modal button if you want to use something other than text.
                imageButton: true
            }]

        }
    },
    computed: {

    },
    methods: {   


    },
    events:{
        'data-recieved': function(data) {
            // Waits for componenets to send their data, and then adds it to the save data object on this page.
            Vue.set(this.saveData, data.key, data.value);
            // Sends to save data from this page to the view-embed file. There it looks for empty strings.
            this.$parent.progressLocked(this.saveData);
        }
    },
    
    ready: function() {
        $(".v3-image-modal-button").each(function(index){
            var switchElements = $(".switch-wrap");
            $(this).prependTo(switchElements[index])
        })
    }



}