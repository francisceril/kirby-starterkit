# Kirby Starterkit

Kirby is a file-based CMS. Easy to setup. Easy to use. Flexible as hell.

## Requirements

- Local development server running PHP 7.2+ (e.g. Apache, nginx, MAMP).
- Nodejs 10+ (LTS release) + NPM

## Installation and setup

### Step 1: Clone the repo into an empty folder

```
git clone git@github.com:francisceril/kirby-starterkit.git
```

### Step 2: Install Kirby CMS

```
composer install
```

### Step 3: Install dependencies

```
npm install
```

### Step 3: Configuration

This uses [Laravel Mix](https://laravel-mix.com) as the build tool,
which also provides BrowserSync for an optimal developer experience. By default,
it expects a copy of the site to run at `http://kirby-starterkit.test`. The document root
of the site is the subfolder `public/`.

You can override the default domain if you prefer to run the site
at a different domain. To do so, just copy `config.default.json` to a file
named `config.json`. You can define a custom domain that new file.

## Start the build tool for development

```
cd [root folder of this repo]
npm build
```

This will run BrowserSync and watch your CSS, JS, and template files for changes.

Stop the server by pressing `CTR+C` or by closing the CLI window.

## Build for production

Before commiting anything back to the repo, make sure to run a production build to compress and concatenate all the assets.

```
npm run build
```