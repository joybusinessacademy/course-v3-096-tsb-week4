
pageComponentry = {
    data: function() {
        return {
            pageTitle: 'Personal Development',
            image: '2.png',
            saveData: {},
        }
    },
    methods: {},
    events: {
        'data-recieved': function (data) {
            // Waits for componenets to send their data, and then adds it to the save data object on this page.
            Vue.set(this.saveData, data.key, data.value);
            // Sends to save data from this page to the view-embed file. There it looks for empty strings.
            this.$parent.progressLocked(this.saveData);
        }
    },
    computed: {},
    ready: function() {
    
    }
}