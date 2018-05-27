pageComponentry = {
    data: function() {
        return {
          pageTitle: 'Employee One',
          questionsWrap: {
            //small for input boxes, large for textareas
            size: 'large',
            questions: [
              {
                //must have unique id for each question
               id: 'q1',
               label: 'First name and position of Employee. '
             },
              {
               id: 'q2',
               label: 'If you do this ________ activity will it grow our business? Copy employee response here.'
             },
              {
               id: 'q3',
               label: 'Is what you are doing on this ________. activity a return on investment activity or a distraction? Copy employee response here.'
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