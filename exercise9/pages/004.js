pageComponentry = {
    data: function() {
        return {
            questionsWrap: {
                //small for input boxes, large for textareas
                size: 'large',
                questions: [{
                        //must have unique id for each question
                        id: 'pg004a',
                        label: 'Write a list of things that you believe make an environment exciting.'
                    },
                    {
                        id: 'pg004b',
                        label: 'What can you do to make your current environment more exciting?'
                    },
                    {
                        id: 'pg004c',
                        label: 'What can you do to make your communications more proactive and positive?'
                    },
                    {
                        id: 'pg004d',
                        label: 'How can you make yourself more dynamic?'
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