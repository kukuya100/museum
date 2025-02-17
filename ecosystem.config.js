module.exports = {
  apps: [
    {
      name: "goryeo-ro",
      script: "./app.js",
      watch: true,
      watch_delay: 1000,
      ignore_watch: [
        "./json",
        "./dummy",
        "README.md",
        "ecosystem.config.js",
        "package-lock.json",
        "package.json",
        "node_modules",
        "./.idea",
        "./public",
        "./storage",
      ],
      watch_options: {
        followSymlinks: false,
      },
    },
  ],
};
