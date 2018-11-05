pageComponentry = {
    data: function() {
        return {
            pageTitle: 'Health and Fitness',
            image: '5.png',
            activePdf: false,
            modalProps: {
                title: '',
                id: 'PDF-MODAL',
                imageModal: false,
                imageButton: false
            }
        }
    },
    computed: {

    },
    methods: {   
        showPdf: function (pdfType) {
            this.activePdf = pdfType
        }
    },
    events:{
        
    },
    ready: function() {
       
    }
}
