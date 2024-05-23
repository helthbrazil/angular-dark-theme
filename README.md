# Angular Dark Theme

Click in this [link](https://helthbrazil.github.io/angular-dark-theme/gallery) to view the site.

Run the commands below to run the application locally:

```sh
// Install all the dependencies listed in package.json
npm install
```
```
// Start the application and serve it locally
npm start
```

```sh
// Add the CLI tool to integrate with GitHub Pages
ng add angular-cli-ghpages
```
```sh
// Build the application with a base href for GitHub Pages
node replace-api-key.js YOUR_API_KEY && ng build --configuration=production

```
```sh
// Deploy the application on GitHub Pages
ng deploy --base-href /angular-dark-theme/
```

* Ensure you have Angular CLI installed globally on your system before running these commands. You can install it using the following command:
```sh
npm install -g @angular/cli
```

The base href should match the repository name if deploying to GitHub Pages. Adjust the /angular-dark-theme/ part accordingly if your repository name is different.
