
let environment = {
  plugins: [
    require('postcss-import'),
    require('postcss-flexbugs-fixes'),
    require('postcss-preset-env')({
      autoprefixer: {
        flexbox: 'no-2009'
      },
      stage: 3
    })
  ]
}

// dev is painful with purged CSS (you will be unable to use the cleaned selectors)
// but remove the "if" line below if you want to see how the purge works, once.
if (process.env.RAILS_ENV === "production") {
  environment.plugins.push(
    require("@fullhuman/postcss-purgecss")({
      content: [
        "./app/views/**/*.html.erb",
        "./app/helpers/**/*rb",
        "./frontend/**/*.js"
      ],
      defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
    })
  )
}


module.exports = environment
