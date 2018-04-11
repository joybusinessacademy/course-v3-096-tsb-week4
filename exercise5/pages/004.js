pageComponentry = {
    data: function() {
        return {
            questionsWrap: {
                //small for input boxes, large for textareas
                size: 'large',
                questions: [{
                        //must have unique id for each question
                        id: 'pg004a',
                        label: 'What problems do you have that you want to change?'
                    },
                    {
                        id: 'pg004b',
                        label: 'What have you done to develop your thinking?'
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