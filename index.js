
// task 1: Project instialization, (a) create new Node.js project folder (b) install the require packages:express and cors.

//task 2: Setup Express Server, (a) create an index.js  (b)set up a basic express server running on port 3000
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello');
});

app.listen(PORT, () => {
  console.log('Server is listening');
});


//task 3,blog CRUD Routes, implement the following routes:

//(a) GET/blogs:returns an array of blog object
const express = require('express');
const app = express();

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
const blogs = [
  { id: 1, title: "1st", author: "Naina", content: "hello" },
  { id: 2, title: "2nd", author: "ravi", content: "hello nodejs"                                                                                                                                                                                                                                                                                                                                                                                          , author: "Ravi", content: "AI and IoT are changing the world." },
  { id: 3, title: "3rd", author: "Aarav", content: "Eat well" }
];


app.get('/blogs', (req, res) => {
  res.json(blogs); 
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running `);
});

// (c)PUT/blogs/:id -> Update blog by id

app.put('/blogs/:id', (req, res) => {
  const blogId = parseInt(req.params.id);
  const { title, content } = req.body;

  const blog = blogs.find(b => b.id === blogId);

  if (!blog) {
    return res.status(404).json({ message: "Blog not found" });
  }

  
  if (title) blog.title = title;
  if (content) blog.content = content;

  res.json({ message: "Blog updated successfully", blog });
});


// (d)DELETE/blogs/:id -> delete blog by its id 

app.delete('/blogs/:id', (req, res) => {
  const blogId = parseInt(req.params.id);
  const index = blogs.findIndex(b => b.id === blogId);

  if (index === -1) {
    return res.status(404).json({ message: "Blog not found" });
  }

  blogs.splice(index, 1);
  res.json({ message: "Blog deleted successfully" });
});


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});






















