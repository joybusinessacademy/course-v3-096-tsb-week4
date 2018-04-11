pageComponentry = {
    data: function() {
        return {
            questionsWrap: {
                //small for input boxes, large for textareas
                size: 'large',
                questions: [{
                        //must have unique id for each question
                        id: 'pg004a',
                        label: 'Write down something you have given up on in the last 6 months – personally.'
                    },
                    {
                        id: 'pg004b',
                        label: 'Write down something you have given up on in the last 6 months - at work'
                    },
                    {
                        id: 'pg004c',
                        label: 'What would you do differently if you were to follow through on this again? Answer for both personally and work.'
                    }
                ]
            },
            saveData: {}
        }
    },
    methods: {},
    events: {
        'data-recieved': function(data) {
            // Waits for componenets to send their data, and then adds it to the save data object on this page.
            Vue.set(this.saveData, data.key, data.value);
            // Sends to save data from this page to the view-embed file. There it looks for empty strings.
            this.$parent.progressLocked(this.saveData);
        }
    },
    computed: {},
    ready: function() {}
}