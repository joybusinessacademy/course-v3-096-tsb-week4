pageComponentry = {
    data: function() {
        return {
          pageTitle: 'Learning Hour Session Four',
          questionsWrap: {
            //small for input boxes, large for textareas
            size: 'large',
            questions: [
              {
                //must have unique id for each question
               id: 'q22',
               label: 'Provide the title of the article or TED talk you watched.'
             },
              {
               id: 'q23',
               label: 'Explain the area of personal development this will help you with. '
             },
              {
               id: 'q24',
               label: 'Provide a summary of your learnings from the article/video and what you will change.'
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