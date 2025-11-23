# Backend

Routes:

- loginUser: POST
  There only needs to be one login route.
  It returns a JWT which is needed to access the admin panel.

  const admin = {
  username: String,
  password: String
  }
  -> This is going to be hardcoded.

- CreateBlog: POST

  const blog = {
  blogId: Number (incrementing),
  blogTitle: String,
  caption: String,
  blogDate: Date,
  timeToRead: Number,
  blogImage: String,
  blogContent: String,
  blogComments: [blogComment] (optional)
  }

- GetBlog: GET with ID as query param
  Get a specific blog

- GetBlogs: GET
  get multiple blogs

- DeleteBlog: DELETE
  delete a blog

- UpdateBlog: PUT
  update a blog

The other data for the portfolio is hardcoded in the frontend.

Middleware:

- errorHandler
- rateLimitErrorHandler
- validateTokenHandler

[] RateLimitHandler
[] Email, password, username checker through middleware
[] Cookie session handler
[] 2 Factor auth
[] Forgot password
