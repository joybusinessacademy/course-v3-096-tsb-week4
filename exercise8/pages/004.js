pageComponentry = {
    data: function() {
        return {
            pageTitle: 'Answer the following',
            componentData1: {
                question: "How would you rate your adaptability to change?\"",
                id: "004a1",
                labels: ['1. Low', '2', '3', '4', '5. High'],
            },
            componentData2: {
                question: "How would you rate your ability to be innovative?",
                id: "004b1",
                labels: ['1. Low', '2', '3', '4', '5. High'],
            },
            saveData: {}
        };
    },
    events: {
        'data-recieved': function(data) {
            // Waits for componenets to send their data, and then adds it to the save data object on this page.
            Vue.set(this.saveData, data.key, data.value);
            // Sends to save data from this page to the view-embed file. There it looks for empty strings.
            this.$parent.progressLocked(this.saveData);
        }
    },
    computed: {},
    methods: {},
    ready: function() {
        var self = this;
    }
};