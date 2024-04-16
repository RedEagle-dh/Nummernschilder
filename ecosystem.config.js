module.exports = {
    apps: [
        {
            name: "German Carplates API",
            script: "./src/app/app.js",
            instances: 1,
            autorestart: true,
            watch: false,
            max_memory_restart: "500M",
            version: require('./package.json').version,
        },
    ],
};
