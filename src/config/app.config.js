module.exports = {

    /**
     * The runtime "environment" of your app is either typically
     * 'development' or 'production'.
     */

    env: process.env.NODE_ENV || 'development',

    /**
     * The `port` setting determines which TCP port your app will be deployed on.
     */

    port: process.env.PORT || 3061,

    /**
     * The application base url
     */

    url: `http://localhost:${port}`,


    /**
     * The application base url
     */

    imageurl: `${url}/upload`,

    /**
     * The api url prefix
     */

    api_prefix: "api",

    websiteurl: 'http://localhost:3061',

    pagination_limit: 10,

    // gmail login info for sending mail
    gmailfrom : process.env.AUTH_GMAIL_USER,
    gmailpass: process.env.AUTH_GMAIL_PASSWORD,

};

