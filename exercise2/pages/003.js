pageComponentry = {
    data: function() {
        return {
            pageTitle: '% Attitude',
            correct: "",
            feedback: {
                correct: false,
                show: false,
                text: ""
            },
            saveData: {
                complete003: ""
            },
        }
    },
    methods: {
        submitCorrect: function(){
            if ( this.saveData.page003 == 100 ) {
                this.feedback.correct = true;
                this.feedback.text = "Correct!"
                this.saveData.complete003 = true;
            } else {
                this.feedback.correct = false;
                this.feedback.text = "Not quite."
            }
            this.feedback.show = true;
            this.$parent.progressLocked(this.saveData);
        }
    },
    events: {
        'data-recieved': function (data) {
            // Waits for componenets to send their data, and then adds it to the save data object on this page.
            Vue.set(this.saveData, data.key, data.value);
            // Sends to save data from this page to the view-embed file. There it looks for empty strings.
            this.$parent.progressLocked(this.saveData);
        }
    },
    ready: function() {
        if (this.$root.exerciseData['complete003']) {
            this.saveData.complete003 = this.$root.exerciseData['complete003'];
            this.$parent.progressLocked(this.saveData);
        }
    }
}