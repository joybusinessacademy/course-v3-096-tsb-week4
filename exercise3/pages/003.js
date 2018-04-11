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
                    text: 'Progressive and proactive',
                    selected: false,
                },{
                    text: 'Recognises Opportunities',
                    selected: false
                },{
                    text: 'Stores information that may be useful later',
                    selected: false,
                }]
            },modals: [{
                // The title text in the modal. Can be blank
                title: 'Progressive and proactive',
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
                title: 'Recognises Opportunities',
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
                title: 'Stores information that may be useful later',
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