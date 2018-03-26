module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : 'React-test-dome',
      script    : './src/app.jsx',
      instances  :  4,
      exec_mode:  "cluster",
      max_memory_restart:"300M",
      env: {
        COMMON_VARIABLE: 'true'
      },
      env_production : {
        NODE_ENV: 'production'
      }
    },

    // Second application
    {
      name      : 'WEB',
      script    : 'web.js'
    }
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    production : {
      user : 'root',
      host : '45.32.73.24',
      ref  : 'origin/master',
      repo : 'git@github.com:ScottXiong/React-tutorial.git',
      path : '2018',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    },
    dev : {
      user : 'ScottXiong',
      host : '127.0.0.1',
      ref  : 'origin/master',
      repo : 'git@github.com:ScottXiong/React-tutorial.git',
      path : '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env dev',
      env  : {
        NODE_ENV: 'dev'
      }
    }
  }
};
