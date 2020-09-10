var bodyParser = require("body-parser"),
    methodOverride = require("method-override"),
    expressSanitizer = require("express-sanitizer"),
    mongoose = require("mongoose"),
    express = require("express"),
    app = express();

//App config
mongoose.connect('mongodb://localhost:27017/restful_blog_app', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressSanitizer()); // needs to be after bodyParser
app.use(methodOverride("_method"));


//Mongoose/model config
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: { type: Date, default: Date.now }
});

var Blog = mongoose.model("Blog", blogSchema);

//Restfull Routes
// Blog.create({
//     title: "Test Blog",
//     image: "https://images.unsplash.com/photo-1588818823793-74cf3d84551f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
//     body: "Hello This is a Blog Post!"
// });

app.get("/", function (req, res) {
    res.redirect("/blogs");
})
//Index Route
app.get("/blogs", function (req, res) {
    Blog.find({}, function (err, blogs) {
        if (err) {
            console.log("Error!");
        } else {
            res.render("index", { blogs: blogs });
        }
    })
});

//New Route
app.get("/blogs/new", function (req, res) {
    res.render("new");
});
//Create Route
app.post("/blogs", function (req, res) {
    // create blog
    req.body.blog.body = req.sanitize(req.body.blog.body);
    Blog.create(req.body.blog, function (err, newBlog) {
        if (err) {
            res.render("new");
        } else {
            //then, redirect to the index
            res.redirect("/blogs");
        }
    });
});
//Show route
app.get("/blogs/:id", function (req, res) {

    Blog.findById(req.params.id.trim(), function (err, foundBlog) {
        if (err) {
            console.log(err);
            res.redirect("/blogs");
        }
        else {
            res.render("show", { blog: foundBlog });
        }
    });
});
//Edit Route
app.get("/blogs/:id/edit", function (req, res) {
    Blog.findById(req.params.id.trim(), function (err, foundBlog) {
        if (err) {
            res.redirect("/blogs");
        } else {
            res.render("edit", { blog: foundBlog });
        }
    });
});
//Update Route
app.put("/blogs/:id", function (req, res) {
    req.body.blog.body = req.sanitize(req.body.blog.body);
    Blog.findByIdAndUpdate(req.params.id.trim(), req.body.blog, function (err, updatedBlog) {
        if (err) {
            res.redirect("/blogs");
        }
        else {
            res.redirect("/blogs/" + req.params.id);
        }
    })
});
//Delete Route
app.delete("/blogs/:id", function(req,res){
    Blog.findByIdAndRemove(req.params.id.trim(), function(err){
        if(err){
            res.redirect("/blogs");
        }
        else{
            res.redirect("/blogs");
        }
    })
});

app.listen(3000, () => console.log("RestfulBlogApp Server started !!!"))