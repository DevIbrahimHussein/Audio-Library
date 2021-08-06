module.exports = {

    /**
     * The runtime "environment" of your app is either typically
     * 'development' or 'production'.
    */

    env: process.env.NODE_ENV || 'development',

    port: process.env.PORT || 8989,

    mongo: {
        user_db: process.env.DB_USER,
        password_db: process.env.DB_PASSWORD,
        databaseURL: `mongodb+srv:${this.user_db}:${this.password_db}@bobshop-cluster.koemv.mongodb.net/test`,
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        }
    },

    // gmail login info for sending mail

    mailer: {
        gmailfrom : process.env.AUTH_GMAIL_USER,
        gmailpass: process.env.AUTH_GMAIL_PASSWORD,
    },

    jwt: {
        secret: process.env.JwtSECRET,
        expiresIn: 31556926
    }

}
