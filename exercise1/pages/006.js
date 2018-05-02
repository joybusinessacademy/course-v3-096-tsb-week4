pageComponentry = {
    data: function() {
        return {
            pageTitle: 'Your Business Performance Rating', 
            questions: []

        }
    },
    computed: {

    },
    methods: {
        
    },
   ready: function() {
        var self = this;
        var firstExerciseId = this.courseData[Object.keys(this.courseData)[0]];
        
        console.log(firstExerciseId);

            var week1Questions = JSON.parse(firstExerciseId.questions);
            for (var i = 0; i < week1Questions.length; i++) {
                if(week1Questions[i].selected){
                    self.questions.push(week1Questions[i]);
                }
            }
       
    }
}
