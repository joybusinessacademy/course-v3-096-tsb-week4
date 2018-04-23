pageComponentry = {
    data: function() {
        return {
          pageTitle: 'What I Know - One ',
          questionsWrap: {
            //small for input boxes, large for textareas
            size: 'large',
            questions: [
              {
                //must have unique id for each question
               id: 'q1',
               label: 'Explain what you know.'
             },
              {
               id: 'q2',
               label: 'Explain how this will benefit you in your role as a leader or business owner.'
             },
              {
               id: 'q3',
               label: 'Give a brief overview of “what you know” on this topic.'
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