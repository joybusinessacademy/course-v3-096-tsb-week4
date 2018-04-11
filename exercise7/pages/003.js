pageComponentry = {
    data: function() {
        return {
            pageTitle: 'Things to consider',
            saveData: {},
            flipswitchData: {
                options: ['No', 'Yes'],
                name: "flipswitches",
                type: "flipswitches",
                // Sets whether the component is a quiz or not.
                quiz: false,
                // Sets whether the page should unlock and allow the user to progress regardless of the outcome of the quiz
                repeatOnFail: false, 
                questions: [{
                    text: 'Consistently works hard and thoroughly',
                    selected: false,
                },{
                    text: 'Never, Never, Never, Never gives up',
                    selected: false
                },{
                    text: 'Positive habits – so as to get the most out of every situation',
                    selected: false,
                }]
            }, modals: [{
                // The title text in the modal. Can be blank
                title: 'Consistently works hard and thoroughly',
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
                title: 'Never, Never, Never, Never gives up',
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
                title: 'Positive habits – so as to get the most out of every situation',
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