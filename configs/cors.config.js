// cross origin resurce sharing - CORS is a W3C standard that allows you to get
// away from the same origin policy adopted by the browsers to restrict access
// from one domain to resources belonging to another domain

const cors = require("cors");

module.exports = (app) => {
  app.use(
    cors({
      // credentials=true recive a cookie from the front (client) to know with user is in session
      credentials: true,
      origin: [
        process.env.PUBLIC_DOMAIN,
        // must setup coors to alow your production webpage to acess information
        "https://vercel.com/jpsm83/my-recipes-library/9MekZfT9NcL1etSGQS6AEoU24fUT",
        "https://my-recipes-library.vercel.app",
        "https://my-recipes-library-3qe1ysojh-jpsm83.vercel.app",
      ],
    })
  );
};
