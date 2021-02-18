# Valhalla

## Overview

This full stack MERN application allows users to browse a list of private islands for purchasing. General users will have the ability to browse and select islands, while authenticated users can create, update, and delete their products from the inventory. The goal of the site design is to be minimal, letting the images drive the page.

## Whimsical Diagram

[Click to view Whimsical](https://whimsical.com/p3-valhalla-UB6fmNiCVZ8fvwW4SZkdcx)

## Wireframes

<img src="https://user-images.githubusercontent.com/22455354/107276728-71c2f800-6a21-11eb-9fbc-8ec82bd573a1.jpg">

## Team Expectations

[Click to view team expectations](https://docs.google.com/document/d/1KEHPc6DgyiDW16G-FWy7QTTfUvIp7S4hKOQ1IDcrIRM/edit?usp=sharing)

## Git Project

[Click to view kanban board](https://github.com/Benjamin-Kuzava/valhalla/projects/1)

## Schema

##### Product

```
const Listing = new Schema(
  {
    name: { type: String, required: true },
    imgURL: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    location: {type: String, required: true},
    userId: { type: Schema.Types.ObjectId, ref: "users" },

  },
  { timestamps: true }
)
```

##### User

```
const User = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password_digest: { type: String, required: true },
    listings: [{ type: Schema.Types.ObjectId, ref: "listings" }],
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
- Experiment with mapbox api
