pageComponentry = {
    data: function() {
        return {
          pageTitle: 'Topic One  ',
          questionsWrap: {
            //small for input boxes, large for textareas
            size: 'large',
            questions: [
              {
                //must have unique id for each question
               id: 'q1',
               label: 'Write topic you want to learn more about here.'
             },
              {
               id: 'q2',
               label: 'Explain how this will benefit you in your role as a leader or business owner.'
             },
              {
               id: 'q3',
               label: 'Outline your plan for gaining this knowledge.'
              }
            ]
          }

        }
    },
    computed: {

    },
    methods: {
    },
    ready: function() {


    }



}
