require('dotenv').config()

module.exports = {

    /**
     * The runtime "environment" of your app is either typically
     * 'development' or 'production'.
    */

    env: process.env.NODE_ENV || 'development',

    server: {
        port: process.env.PORT || 8989,
        domain: '127.0.0.1',
        url: 'http://localhost:8989/'
    },

    port: process.env.PORT || 8989,

    mongo: {
        user_db: process.env.DB_USER,
        password_db: process.env.DB_PASSWORD,
        databaseURL: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@bobshop-cluster.koemv.mongodb.net/test?authSource=admin&replicaSet=atlas-ldh0ok-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true`,
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
