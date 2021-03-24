RESTful-blog-app
RESTful routing blog app from "The Web Developer Bootcamp" by Colt Steele: https://www.udemy.com/the-web-developer-bootcamp/

Summary
Blogging web app created to practice RESTful routing.

RESTful Routes:
Name	Path	HTTP Verb	Purpose	Mongoose Method
Index	/blogs	GET	List all blogs	Blog.find()
New	/blogs/new	GET	Show new blog form	N/A
Create	/blogs	POST	Create a new blog, then redirect somewhere	Blog.create()
Show	/blogs/:id	GET	Show info about one specific blog	Blog.findById()
Edit	/blogs/:id/edit	GET	Show edit form for one blog	Blog.findById()
Update	/blogs/:id	PUT	Update a particular blog, then redirect somewhere	Blog.findByIdAndUpdate()
Destroy	/blogs/:id	DELETE	Delete a particular blog, then redirect somewhere	Blog.findByIdAndRemove()
Steps Taken
Introduction
Define REST and explain WHY it matters
List all 7 RESTful routes
Show example of RESTful routing in practice
Blog Index
Setup the Blog App
Create the Blog model
Add INDEX route and template
Basic Layout
Add Header and Footer Partials
Include Semantic UI
Add Simple Nav
Putting the C in CRUD
Add NEW route
Add NEW template
Add CREATE route
Add CREATE template
SHOWtime
Add Show route
Add Show template
Add links to show page
Style show template
Edit/Update
Add Edit Route
Add Edit Form
Add Update Route
Add Update Form
Add Method-Override
DESTROYYYYYY
Add Destroy Route
Add Edit and Destroy Links
Final Updates
Sanitize blog body
Style Index
Update REST Table
Technologies Used
HTML
CSS
SemanticUI
JavaScript
NodeJS
ExpressJS
MongoDB
