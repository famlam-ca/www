module.exports = {
  apps: [
    {
      script: "npm start",
    },
  ],

  deploy: {
    production: {
      key: "id_rsa.pub",
      user: "webadmin",
      host: "192.168.0.240",
      ref: "origin/main",
      repo: "https://github.com/SlickYeet/famlam.ca.git",
      path: "/var/www/famlam.ca/",
      "pre-deploy-local": "",
      "post-deploy":
        "source ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production",
      "pre-setup": "",
      ssh_options: "ForwardAgent=yes",
    },
  },
};
