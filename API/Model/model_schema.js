const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ModelSchema = new Schema(
    {
        id: { type: Number || String },
        title: { type: String },
        rating: {
            stars: Number,
            average: Number,
            reviewCount: Number
        },
        imageURL: String,
        price: Number
    }
)


module.exports = mongoose.model('mSchema', ModelSchema);

// 
// "hotels": [
//     {
//         "hotel-name": [

//             {
//                 "id": Number || String,
//                 "title": String,
//                 "rating": {
//                     "stars": Number,
//                     "average": Number,
//                     "reviewCount": Number
//                 },
//                 "imageURL": String,
//                 "price": Number

//             }
//         ]
//     }
// ],
// "cars": [
//     {
//         "car-name": [
//             {
//                 "id": Number || String,
//                 "title": String,
//                 "rating": {
//                     "grade": String,
//                     "average": Number,
//                     "reviewCount": Number
//                 },
//                 "imageURL": {
//                     "car": String,
//                     "logo": String
//                 },
//                 "price": Number
//             }
//         ]
//     }
// ]
// 


// {
//     "hotels": {
//        "hotelName0": {
//            "id": 0,
//            "title": "Hotel Title Zero",
//            "rating": {
//                "stars": 4,
//                "averageRating": 4.7,
//                "reviewCount": 1000
//            },
//            "imageURL": "#",
//            "price": 50
//        },
//        "hotelName1": {
//            "id": 1,
//            "title": "Hotel Title One",
//            "rating": {
//                "stars": 4,
//                "averageRating": 4.7,
//                "reviewCount": 1000
//            },
//            "imageURL": "#",
//            "price": 50
//        },
//        "hotelName2": {
//            "id": 2,
//            "title": "Hotel Title Two",
//            "rating": {
//                "stars": 4,
//                "averageRating": 4.7,
//                "reviewCount": 1000
//            },
//            "imageURL": "#",
//            "price": 50
//        }
//    },
//    "cars": {
//        "carName0" :{
//            "id": 0,
//            "title": "Car Title Zero",
//            "rating": {
//                "grade": "Good",
//                "averageRating": 4.5,
//                "reviewCount": 1500
//            },
//            "imageURL": {
//                "car": "#",
//                "logo": "#"
//            },
//            "price": 7500
//        },
//        "carName1" :{
//            "id": 1,
//            "title": "Car Title One",
//            "rating": {
//                "grade": "Good",
//                "averageRating": 4.5,
//                "reviewCount": 1500
//            },
//            "imageURL": {
//                "car": "#",
//                "logo": "#"
//            },
//            "price": 7500
//        }
//    }


// }


// **************

// {
//     "hotels": {       
//            "id": 0,
//            "title": "Hotel Title Zero",
//            "rating": {
//                "stars": 4,
//                "averageRating": 4.7,
//                "reviewCount": 1000
//            },
//            "imageURL": "#",
//            "price": 50
//        },
//        "cars": {       
//            "id": 0,
//            "title": "Car Title One",
//            "rating": {
//                "stars": "Good",
//                "averageRating": 4.7,
//                "reviewCount": 1000
//            },
//            "imageURL": {
//                "car": "#",
//                "logo": "#"
//            },
//            "price": 50
//        }


// }