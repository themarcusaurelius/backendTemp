const passport = require('passport');

module.exports = app => {
   //Route handler to handle passport authentication flow
    app.get(
        '/auth/google', 
        passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    );

    //Route handler to handle if user visits /auth/google/callback
    app.get('/auth/google/callback', passport.authenticate('google')) 
}
