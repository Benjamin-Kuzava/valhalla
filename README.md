# Valhalla

## Overview

This full stack MERN application allows users to browse a list of private islands for purchasing. General users will have the ability to browse and select islands, while authenticated users can create, update, and delete their products from the inventory. The goal of the site design is to be minimal, letting the images drive the page.

## Whimsical Diagram

## Team Expectations

[Click to view team expectations](https://docs.google.com/document/d/1KEHPc6DgyiDW16G-FWy7QTTfUvIp7S4hKOQ1IDcrIRM/edit?usp=sharing)

## Git Project

[Click to view kanban board](https://github.com/Benjamin-Kuzava/valhalla/projects/1)

## Schema

##### Product

```

```

##### User

```
const User = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password_digest: { type: String, required: true },
  },
  { timestamps: true }
);
```

## MVP

- Deployed full-crud backend && frontend
- Landing page w/ Carousel and About section
- Product list page
- Functional search and sort
- Product detail page
- Authentication && authorization
- Display different routes for general users vs. authenticated users

## Post MVP

- Add video content to carousel
- Animating content on page scroll
- More detailed authentication
- Experiment with pop-ups, modals, and adding branding
- Refactor nav to be a two-part component
- UseContext for user
