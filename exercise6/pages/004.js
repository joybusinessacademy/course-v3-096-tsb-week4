pageComponentry = {
    data: function() {
        return {
            questionsWrap: {
                //small for input boxes, large for textareas
                size: 'large',
                questions: [{
                        //must have unique id for each question
                        id: 'pg004a',
                        label: 'Name one person you find inspiring from the sports or arts world and why?'
                    },
                    {
                        id: 'pg004b',
                        label: 'Name one person you find inspiring from the business world and why?'
                    },
                    {
                        id: 'pg004c',
                        label: 'Name one person from your family or friends you find inspiring and why?'
                    },
                    {
                        id: 'pg004d',
                        label: 'Name one person you find inspiring at work and why?'
                    },
                    {
                        id: 'pg004e',
                        label: 'What do you find inspiring about yourself?'
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