const mongoose = require('mongoose');
const cities = require('./cities');
const {places,descriptors} = require('./seedHelpers');
const Campground = require('../models/campground');

mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp');

const db=mongoose.connection;
db.on("error", console.error.bind(console,"connection error:"));
db.once("open",() =>{
    console.log("Database connected");
});

const sample = array => array[Math.floor(Math.random()*array.length)];

const seedDB= async() =>{
    await Campground.deleteMany({});
    for(let i=0;i<50;i++){
        const random1000 = Math.floor(Math.random()*1000);
        const camp = new Campground({
            author: '66f57fe3aa6ae3168e7228b1',
            location:`${cities[random1000].city},${cities[random1000].state}`,
            title:`${sample(descriptors)} ${sample(places)}`,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, doloremque.',
            price: Math.floor(Math.random()*20)+10,
            image: [
                {
                  url: 'https://res.cloudinary.com/dtodx6g2n/image/upload/v1728019506/YelpCamp/tdtt7vasckfgsfcf7ift.jpg',
                  filename: 'YelpCamp/tdtt7vasckfgsfcf7ift',
                },
                {
                  url: 'https://res.cloudinary.com/dtodx6g2n/image/upload/v1728019507/YelpCamp/wbdu6ovtymacccysd2gf.jpg',
                  filename: 'YelpCamp/wbdu6ovtymacccysd2gf',
                }
              ]

        }); 
        await camp.save().then();
    }
}
seedDB().then(() =>{
    mongoose.connection.close();
});