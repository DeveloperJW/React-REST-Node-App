# Full Stack App with React and a REST API- Unit 10

- Purpose of this project: 

  - This project is created for the purpose of JavaScript Full Stack TechDegree - Unit 10 with TeamTreehouse. 
  
  - The app will be deployed to herokuapp: [Click here for live demo]()
  
  
- Project Description:
  - For this project, 
    - you’ll use React to create a client for your existing school database REST API. 
    - The full stack application will provide a way for users to administer a school database containing information 
    about courses: users can interact with the database by retrieving a list of courses, viewing detail for a specific course, 
    as well as creating, updating and deleting courses in the database.
    - will require users to create an account and sign in to make changes to the database.
    
  - Use JavaScript and JSX to build out the components for your application in a modular fashion.
  - Use React Router to set up your routes.
  -  Use the Fetch API or a tool like Axios to fetch data from your REST API.
  -  Allow users to sign up and use basic authentication to support users signing in.
  -  Add to the supplied CSS to personalize the project.
  

Extra Credit:
-
- Display user friendly messages:
    - Create the following stateless functional components:
    -   NotFound - Display a message letting the user know that the requested page can't be found.
    -  Forbidden - Displays a message letting the user know that they can't access the requested page.
    -  UnhandledError - Display a message letting the user know that an unexpected error has occurred.

- Persist user credentials
  - After successfully authenticating a user, persist their credentials using an HTTP cookie or local storage so that the user's 
  authenticated state is maintained even if the application is reloaded or loaded into a new browser tab.
  
- Redirecting the user after successfully signing in
    - After a user successfully signs in, redirect them back to the previous screen (whatever that happens to be).