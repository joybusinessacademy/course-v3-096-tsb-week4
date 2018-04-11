pageComponentry = {
    data: function() {
        return {
            pageTitle: 'Things to remember',
                learnt: [
              {
                text: 'Completed all input fields'
              },
              {
                text: 'Made notes in your training diary'
              },
              {
                text: 'Have a good understanding of week three'
              }
            ]

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
    ready: function() {}
}