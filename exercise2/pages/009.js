pageComponentry = {
    data: function() {
        return {
          pageTitle: 'Topic Two',
          questionsWrap: {
            //small for input boxes, large for textareas
            size: 'large',
            questions: [
              {
                //must have unique id for each question
               id: 'q4',
               label: 'Write topic you want to learn more about here.'
             },
              {
               id: 'q5',
               label: 'Explain how this will benefit you in your role as a leader or business owner.'
             },
              {
               id: 'q6',
               label: 'Outline your plan for gaining this knowledge.'
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
