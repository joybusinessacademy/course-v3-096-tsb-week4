pageComponentry = {
    data: function() {
        return {
          pageTitle: 'Coaching/Mentoring Catch Up Two',
          questionsWrap: {
            //small for input boxes, large for textareas
            size: 'large',
            questions: [
              {
                //must have unique id for each question
               id: 'q7',
               label: 'Choose someone, and write their name and relationship to you. '
             },
              {
               id: 'q8',
               label: 'Why have you chosen this person? You will use this reason as part of your approach.'
             },
              {
               id: 'q9',
               label: 'Now contact this person and ask them to be your mentor. Provide a summary of your first catch up. What area of personal development will they help you with?'
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