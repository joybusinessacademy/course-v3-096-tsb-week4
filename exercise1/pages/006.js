pageComponentry = {
    data: function() {
        return {
            pageTitle: 'Reflection',
            saveData: {},
            questions: []
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