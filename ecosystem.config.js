module.exports = {
  apps : [
    {
      name: 'benchmark',
      script: './server.js',
      exec_mode: 'cluster',
      instances: 3,
      watch: true,
      increment_var: 'PORT',
      env: {
        PORT: 3004,
        NODE_ENV: 'development'
      },
    }
  ]
};
