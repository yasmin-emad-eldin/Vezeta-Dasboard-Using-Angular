export interface Doctors {
    _id: String,
    doctorName: {
        
            arabicName: String,
       
            englishName: String,
        
    },
    doctorEmail: String,
     doctorGender: String,

     doctorSpecialization: 
        {
            specialization_english: String,
       
            specialization_arabic: String,
        },
    

    doctorLocation: String,
    doctorClinics: [
        {
            clinicAppointment: [
                {
                    time1:  String,
                    day1:  String,
                },
                {
                    time2:  String,
                    day2:  String,
                },
                {
                    time3: String,
                    day3:  String,
                }
            ],}
        ],
        place: [
            {
                placeEnglish: String,
                placeArabic:String,
            },
            {
                clinicEnglishName:String,
                clinicArabicName: String,
            }
        ]
        ///////
    doctorRating: Number,
    certificateImagePath: String,
    profileImagePath: String,
    profileStatus: String,
    fees: String,
    // doctorPadges: String,
    clinicWaitingTime: String,
    voting: Number,
    entity: String,
    createdAt: String,
    updatedAt: String,
    // doctorTitle: String,
        // password: String,

}
