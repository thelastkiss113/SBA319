




SBA 319
MongoDB Database Application

Description
This is a Node.js, Express, and MongoDB application that implements a CRUD API. The application allows users to create, read, update, and delete data in a MongoDB database. It manages three collections: Users, Posts, and Comments.

API Routes
Users



Use at least three different data collections within the database (such as users, posts, or comments).
✅ You have created at least two collections (Users and Posts), which fulfills this requirement. Consider adding one more collection (e.g., Comments) to meet this requirement more thoroughly.

Utilize reasonable data modeling practices.
✅ Your schema for users and posts is logically structured, linking posts to users through the userId field.

Create GET routes for all data that should be exposed to the client.
✅ You’ve implemented GET routes to retrieve data from the database.

Create POST routes for data, as appropriate, using appropriate insertion commands.
✅ You have implemented POST routes to allow client creation (users and posts).

Create PATCH or PUT routes for data, as appropriate, using appropriate update commands.
✅ You’ve implemented at least one of these routes (for updating users or posts).

Create DELETE routes for data, as appropriate.
✅ You have created DELETE routes to remove data from the database.

Include sensible indexes for any and all fields that are queried frequently.
✅ Consider reviewing your schemas and adding indexes for frequently queried fields (e.g., userId in posts).

Include sensible MongoDB data validation rules for at least one data collection.
✅ You have used Mongoose’s built-in validation for required fields like email, password, and username. This can be expanded with more specific rules if necessary (e.g., email format, password length).

Populate your application's collections with sample data illustrating the use case of the collections.
✅ You’ve populated the collections with sample users and posts (and comments if added).

Utilize reasonable code organization practices.
✅ Your code seems organized with clear separation of concerns between models, routes, and controllers.

Ensure that the program runs without errors.
✅ It appears your application runs correctly, with no errors when fetching or manipulating data (aside from small issues you've already resolved).

Commit frequently to the git repository.
✅ You mentioned frequent commits, so this is likely in place.

Include a README file that contains a description of your application.
✅ Ensure your README includes the API routes and their respective CRUD operations.

Bonus Objectives:
Use Mongoose to implement your application.
✅ You’re using Mongoose, which satisfies this requirement. Ensure that database-side validation is properly handled, and it looks like you've done this in your schemas.