module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a57a0212f537afb10dd3c3987dbb7ec5'),
  },
});
