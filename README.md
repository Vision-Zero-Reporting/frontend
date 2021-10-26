# frontend

## Configuration

### Environment variables
Set the following environment variables, either by using the command line, or by using a `.env` file locally.
 * `baseUrl` - the base URL of the backend analyzer service

Environment variables should be prefixed with `NUXT_ENV_` during the build phase.

## Branding
 * Font: Gadugi (bold)
 * Colors: https://colorhunt.co/palette/0a1931185adbffc947efefef

## Quality control
**Website**  
 * [W3C HTML Validator](https://validator.w3.org/) - Validates HTML
 * [W3C CSS Validator](http://jigsaw.w3.org/css-validator/) - Validates CSS
 * [GTMetrix](https://gtmetrix.com/) - Site speed and recommendations
 * [Nibbler](http://nibbler.silktide.com/en_US) - Complete site analysis, including experience, marketing, technology, and accessibility
 * [Structured Data Testing Tool](https://search.google.com/structured-data/testing-tool/u/0/#url=https%3A%2F%2Fbiaggeo.com) - Structured data analysis
 
**Security**  
 * [Observatory](https://observatory.mozilla.org/analyze.html?host=biaggeo.com) - Mozilla security audit tool
 * [Security Headers](https://securityheaders.io/?followRedirects=on&hide=on&q=biaggeo.com) - Security audit tool
 * [HSTS Preload](https://hstspreload.org/?domain=biaggeo.com) - Domain added to Google's HSTS preload list

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).


### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).
