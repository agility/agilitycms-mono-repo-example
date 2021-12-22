# Mono Repo Example for a Design System
The purpose of this repository is to showcase how you can share a design/code between multiple Agility CMS websites.

This repository contains two Next.js sites `agilitycms-nextjs-1` and `agiiltycms-nextjs-2` and a shared library `lib` project. 

## Features
Build a component once, and re-use across your websites.
- Uses `storybook` for the design system
- Uses `tailwindcss` for CSS theming 
- Uses `next.js` for the the websites
>**Note**: The two next.js sites provided are branches of our official Next.js starter based on the **Blog Starter**. You can connect both websites to the same Agility CMS instance for testing, or seperate instances if you wish.


## How does Agility CMS Play a Part?
The concept of sharing code across websites, is not unique to Agility CMS. However, given the powerful nature of Page Management in Agility CMS via **Page Modules** - you can visualize your **Page Modules** in Storybook outside of an Agility website. 

>**Note**: A Page Module in Agility CMS corresponds to a frontend component that is exposed in storybook.

 This will make it easier than ever to re-use code and assist other developers in getting started using your design system.

##  Getting Started
To run this locally:
1. Run `yarn install` in the root of the project
2. Run `yarn dev:site-1` to run the `agilitycms-nextjs-1` project
3. Run `yarn dev:site-2` to run the `agilitycms-nextjs-2` project
4. Run `yarn dev:storybook` to run the storybook interface and browser your components

> **Note**: This project uses `yarn workspaces` to manage linking local packages.


### Sharing Code with your Lib/Design System
The goal is to share as much code as possible between the two projects.

Therefore, all shared logic such as frontend components, or functions, should be defined in the `lib` folder. 

Your `lib` folder is its own NPM package. It is automatically accessible in your local environment (thanks to `yarn workspaces`) - however to use this in a deployed environment, you will need to publish your `lib` package.

#### Publishing your Design System (lib)
You can use `npm publish --access <public/private>` to publish this to NPM, so that your sites can reference specific versions of it.

### Page Modules
Any **Page Modules** that you want to share between your sites, should be defined in the `lib` folder along with any appropriate styles. In your websites, you would then import these modules from your design system as you need to.

### Components
Any frontend component that you want to re-use across sites (including Page Modules) should be defined in the `lib` folder along with appropriate styles. In your websites, you would then import these modules from your design system as you need to.


### Theming
Ideally, you style your components in a generic way, so that you can create themes based off of them which can override certain default styles. 

This will allow you to re-use components, but have them appear slightly differently across your properties.

>**Note**: In this specific example, using `tailwindcss`, each website has its own theme config, which inherits base styles, and allow you to override thing such as `colors`, `spacing`, and more.

### Functions and Utils
Any functions or utils should be defined in the `lib` folder so they can be imported into any website.

### Deploying your Website(s)
In a mono repo, you need set up build triggers in your dev ops pipeline to re-build and deploy your site when files change within the relevant directory in the repo.

For example, if `agilitycms-nextjs-1` had its code updated, when that code is checked in, that should kick off a build and release for that site specifically.

When your build is happening, your website will pull-in the dependencies from your design based on the version you are referencing.


