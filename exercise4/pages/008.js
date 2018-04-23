pageComponentry = {
    data: function() {
        return {
          pageTitle: 'System/Process Three ',
          questionsWrap: {
            //small for input boxes, large for textareas
            size: 'large',
            questions: [
              {
                //must have unique id for each question
               id: 'q7',
               label: 'Explain what the system or process is.'
             },
              {
               id: 'q8',
               label: 'Analyse and then explain why it has become complicated.'
             },
              {
               id: 'q9',
               label: 'Describe how you will bring it back to the basics.'
              }
            ]
          },
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