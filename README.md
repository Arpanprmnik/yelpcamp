Campin
A fully functional camping site application where users can browse, add, and review campgrounds. The app is deployed on Render and uses MongoDB Atlas for cloud database storage and Cloudinary for cloud-based image storage.

Website
Visit the live version of the site: [Campin](https://campin-o7hu.onrender.com/)

Features
User authentication with Passport.js
Campground creation and management
Review system for campgrounds
Secure user sessions with MongoStore
Sanitization of input to prevent NoSQL injection attacks
Cloud-based image uploads via Cloudinary
Database hosted on MongoDB Atlas
Error handling for improved user experience
Tech Stack
Node.js with Express.js for the backend
MongoDB Atlas for the database
Cloudinary for image storage
EJS for server-side templating
Passport.js for user authentication
MongoStore for session persistence
Setup Instructions
Clone the repository:

bash
git clone https://github.com/yourusername/campin.git
cd campin
Install dependencies:

bash
npm install
Environment Variables: Create a .env file in the root directory and add the following variables:

bash
DB_URL=<your-mongodb-atlas-url>
CLOUDINARY_CLOUD_NAME=<your-cloud-name>
CLOUDINARY_API_KEY=<your-api-key>
CLOUDINARY_API_SECRET=<your-api-secret>
Run the app:

bash
npm start
Access the app: Visit http://localhost:4000 in your browser.

Deployment
This project is deployed on Render. To deploy it yourself:

Create a new web service in Render.
Set up environment variables for DB_URL, CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, and CLOUDINARY_API_SECRET.
Deploy your app.
Cloud-Based Services
MongoDB Atlas: A cloud-hosted MongoDB database service used to store all campground, review, and user data.
Cloudinary: Cloud-based storage for uploading and managing campground images.

only issue remain is the image on the campground is causing a issue will solve soon 
