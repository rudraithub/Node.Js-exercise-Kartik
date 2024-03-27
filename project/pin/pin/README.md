========> PINTEREST <=======

/route me login and register.
/ profile me apako apaki profile dikhegi and and save pin dekhege.and edit section se fullname username or profile image edit karsakate he.
/feed par sari image dikhegi.
/click kaarke image open ho jayegi and save kar sakate ho.
/board/: boardname pura board dikhega 

pages:-                                          

1.login screen register
2.profile
3.pins
4.feeds
5.save pins
6.board creation
7.logout
8.protected routes

npm packages:-

express
express generator
passport
mongoose
multer
uuid

new post se image,title or Description save hota he
multer use image upload 
npm i uuid means uuid is given unique name to uploaded images.ex.facebook in post image download and you see download image name is very different and ocowrds

The register method used in this code is provided by the passport-local-mongoose plugin. This plugin extends the functionality of Mongoose models to handle user authentication and registration with Passport.js in Node.js applications.

User Registration: It takes a new user object (in this case, userData) and a password as arguments. It hashes the password and saves the user data, including the hashed password, to the MongoDB database. This method simplifies the process of user registration by automatically handling password hashing and database interaction.

Promise-based: The register method returns a promise that resolves when the user registration is successful and rejects if an error occurs during the registration process.

Usage: In the provided code, userModel.register(userData, req.body.password) is used to register a new user with the provided user data (username, full name, email) and password submitted through the registration form.

Error Handling: If an error occurs during the registration process (e.g., if the username or email is already in use), the promise is rejected, and the .catch block is executed to handle the error. In the error handling block, an error message is logged to the console, and a flash message is stored using req.flash to indicate the registration error. Finally, the user is redirected back to the login page ("/") to display the error message or handle the error further.


