module.exports = (api) => {
    api.cache(false);

    return {
        presets: [
            ["@babel/preset-env", { modules: false }],
            "@babel/preset-react",
        ],
    };
};
