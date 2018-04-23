pageComponentry = {
    data: function() {
        return {
          pageTitle: 'Employee Five',
          questionsWrap: {
            //small for input boxes, large for textareas
            size: 'large',
            questions: [
              {
                //must have unique id for each question
               id: 'q13',
               label: 'First name and position of Employee. '
             },
              {
               id: 'q14',
               label: 'If I do this will it grow our business? Copy employee response here.'
             },
              {
               id: 'q15',
               label: ' Is what I am doing a return on investment activity or a distraction? Copy employee response here.'
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