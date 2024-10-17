const mongoose= require('mongoose');
const review = require('./review');
const { urlencoded } = require('express');
const Schema= mongoose.Schema;

const imageSchema = new Schema({
    url: String,
    filename: String
});
const CampgroundSchema = new Schema(
    {
        title: String,
        price: Number ,
        image: [{
            url: String,
            filename: String
        }],
        description: String,
        location: String,
        author:{
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        reviews: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Review'
            }
        ]
    }
);
imageSchema.virtual('thumbnail').get(function(){
    return this.url.replace('/upload','/upload/w_200');
});
CampgroundSchema.post('findOneAndDelete',async function(doc){
    if(doc){
        await review.deleteMany({
            _id:{
                $in: doc.reviews
            }
        })
    }
})
module.exports= mongoose.model('Campground',CampgroundSchema);