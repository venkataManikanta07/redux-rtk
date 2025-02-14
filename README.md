# redux-rtk
Basics of Redux and RTK Query


# REDUX:
. Open source JS library for managing state in predictible way. 
. Used for building user interfaces. 
. More of a global object. 


# TOOLKIT
. Official, Opinioniated, batteries-included, toolset for efficient Redux- development. 

- Redux makes the state management easy.  
- Toolkit make the Redux easy to work with. 
- Redux makes us avoid prop drilling. 
- It's a global object. 


# STORE: 
. The central place where the state of the application is stored. 
. It can be created using configStore function.
. Holds entire state tree of our application.  

- Import the configureStore from @redux/toolkit 
- Then create a store with configure store function and then export it. 

# SLICE
. A piece of store state and the corresponding reducer login that updates the state. 
. create slice with name, initialvalue and redcers. 
. export the reducers as named functions sliceName.actions. 


# ADD SLICE TO THE STORE. 
# USE SELECTOR & USE DIPATCH IS USE TO GET THE STORE DATA & UPDATE THE STORE DATA RESPECTIVELY. 


# REDUX TOOLKIT QUERY: 
.It is specifically designed to simplify data fetching, caching and state management for API calls in React & Redux applications. 










