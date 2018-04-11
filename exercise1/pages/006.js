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
        var firstExerciseId = this.exercises[0].id;
        $.get( "/api/v2/course/96/data?exercise_id=" + firstExerciseId, function( data ) {
            var week1Questions = JSON.parse(data.CourseData.questions);
            for (var i = 0; i < week1Questions.length; i++) {
                console.log(week1Questions[i].selected);
                if(week1Questions[i].selected){
                    self.questions.push(week1Questions[i]);
                }
            }
        });

    }
}
