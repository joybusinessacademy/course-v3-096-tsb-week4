pageComponentry = {
    data: function() {
        return {
            questionsWrap: {
                //small for input boxes, large for textareas
                size: 'large',
                questions: [{
                        //must have unique id for each question
                        id: 'pg004a',
                        label: 'Create a list of opportunities you have today. Write list below.'
                    },
                    {
                        id: 'pg004b',
                        label: 'Create a list of opportunities you have in your business. Think about the specific work you do and your contribution to that work.'
                    },
                    {
                        id: 'pg004c',
                        label: 'Where do you personally want to be in the future with your work and business?'
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