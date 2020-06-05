<p align="center">
  <a href="https://www.esotericacap.com">
    <img alt="Gatsby" src="https://www.esotericacap.com/logos/share.png" width="480" />
  </a>
</p>

**Esoterica Capital Website Reference Guide**

# Site Architecture

This site is build using `React` framework `Gatsby` with `Redux` controlling state. It is hosted on `Netlfiy` and uses `Contentful` as the CMS with a build hook to this `Github`. 

# Accessing The Code Locally

To gain access to the code base:
1. Clone down this repository
2. `cd eosterica`
3. `yarn install`
4. `yarn start`
5. Local development will now be running on `localhost:8000`

## Packages, Dependencies and APIs

### State
This website uses `react-redux` to control global state objects 

### Email
This website uses `Mailchimp` as its email client

### Content Management
This website uses `Contentful` as it's headless CMS [see more on this below] 

### Firebase
This website uses `Firebase` as it's database for daily & historical financial record keeping

### APIs
This website utilizes the `Firebase SDK` to interact with the `Firebase` database storage. Files are queried on load from daily updated files and held statically on page after load. 

# Deploying Code

To deploy code to the production environment
1. Push directly to `master` or merge your brach into `master`
2. This will trigger the build hook set up in `Netlify`
3. No further development required. If changes are not reflected on the front end, check the build logs within `Netlify` for pipeline failures. 

# Interacting With The CMS

`esotericacap.com` interfaces with `Contentful` as a headless CMS. Updates published to `Contentful` trigger a build hook in `Netlify` similar to production deployments in Github. Any failures in this pipeline should be checked within the `Netlify` deploy logs. 

### Adding Users
Login to our blog’s [Organization Settings](https://app.contentful.com/account/organizations/61HctfN7WpF5bEH9KTpKBy/subscription_overview). Then, under the headline for `Users` select the `Manage users` link. Within the Manage Users page you will then be able to add individuals by their email, as well as set their permissions. Make sure that when you invite a new user you select Esoterica Capital Blog from the dropdown beneath `Add to spaces`. That’s it!

# Design & Style Guide

All design documents used for this site can be found [here](https://www.dropbox.com/sh/poh5lomudzgntoa/AABuAQGZTTWWMz3bfShwAo4sa?dl=0)
