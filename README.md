# Culture Stack

Culture Stack is a social media app that allows users to share their creative works and get feedback from other artists in their industry. We have created a platform for photographers to upload, categorize, and describe any challenges they are having with a particular technique or process.

This app was built on a MERN Stack - using MongoDB, Express, ReactJS, and NodeJS. The app is now hosted on Heroku, which does not allow local file storage. Because of this, I've set up cloud storage via Amazon Web Services S3 for all user uploaded content. This is done by using the AWS Software Development Kit NPM module as well as Busboy to handle the multi-part form data included with each user-generated post.
