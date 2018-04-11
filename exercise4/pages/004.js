pageComponentry = {
    data: function() {
        return {
            questionsWrap: {
                //small for input boxes, large for textareas
                size: 'large',
                questions: [{
                        //must have unique id for each question
                        id: 'pg004a',
                        label: '“Can you trust your team and can they trust you?” Think about the people you trust at work. List some obstacles to trust at work. Look at this within your team, your reports and management.'
                    },
                    {
                        id: 'pg004b',
                        label: 'What can you do to enhance trust? What are the solutions to enhancing trust to the obstacles noted previously?'
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