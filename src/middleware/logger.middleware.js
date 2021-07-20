/*
|--------------------------------------------------------------------------
| Request Logger
|--------------------------------------------------------------------------
|
| Here is where you check every request in your server
|
*/

const logger = (req, res, next) => {
    console.log(
        `${req.protocol}://${req.get('host')}${req.originalUrl}`
    );
    next();
};

module.exports = logger