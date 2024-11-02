module.exports = {
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['postcss-loader', 'sass-loader'],
            },
        ],
    },
};
