# Backend

Routes:

- loginUser
  There only needs to be one login, which returns a JWT for admin things like create blogs etc.

- CreateBlog
  blog = {
  blogId: number (incrementing),
  blogTitle: String,
  blogImage: String,
  blogContent: String,
  blogComments: [blogComment] (optional)
  }

- GetBlog
  Get a specific blog

- GetBlogs
  get multiple blogs

- DeleteBlog
  delete a blog

- UpdateBlog
  update a blog
