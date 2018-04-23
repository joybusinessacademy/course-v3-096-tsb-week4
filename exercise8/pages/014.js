pageComponentry = {
    data: function() {
        return {
          pageTitle: 'Fitness Plan – Week Three',
          questionsWrap: {
            //small for input boxes, large for textareas
            size: 'large',
            questions: [
              {
                //must have unique id for each question
               id: 'q22',
               label: 'I will improve my fitness by ...'
             },
              {
               id: 'q23',
               label: 'What will I need to do to make this happen? Provide an outline of your plan.'
             },
              {
               id: 'q24',
               label: 'What will be the health benefits to my improved fitness?'
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