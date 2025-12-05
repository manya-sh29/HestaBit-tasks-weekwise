#Overview
This backend uses a clean layered architecture for scalability and maintainability.
Flow: Controller → Service → Repository → Model


#Folder Structure
src/
 |
 ├─ config/     
 |    
 ├─ loaders/  
 |     
 ├─ models/
 |         
 ├─ routes/  
 |       
 ├─ controllers/
 |
 ├─ services/    
 |   
 ├─ repositories/  
 |
 ├─ middlewares/   
 |
 ├─ utils/    
 |      
 ├─ jobs/  
 |         
 └─ logs/           


#Architecture Flow
Request → Route → Controller → Service → Repository → Model → MongoDB


#Loaders
app.js: Initialize Express, middlewares, routes, error handler
db.js: Connect MongoDB + log status


#Config
Supports multiple environments:
.env.local,
.env.dev,
.env.prod