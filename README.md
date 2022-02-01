# VolunteerApp

## Team Rockit

![teamLogo](pictures/astroscropped.jpg)

#

## Overview

#

Allow businesses to post needs for volunteers. And allow users to sign up for those events. Users and businesses will have separate account types and have different auth for types of posts they can create or comment on.

#

## Schemas

```

const userSchema = mongoose.Schema(
  {
    userName: { type: String, required: true, trim: true },
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    password: { type: String, required: true, trim: true },
    confirmPassword: { type: String, required: true, trim: true },
    isBusiness: false/true,
    posts: [postSchema],
  },
  { timestamps: true }
);

const postSchema = mongoose.Schema(	{
  title/event: { type: String, required: true, trim: true },
	body/content: { type: String, required: true, trim: true },
	numberNeeded: { type: Number, required: true, trim: true },
	Comments: [commentSchema]
}) {


const commentSchema = mongoose.Schema({
  content: { type: String, required: true, trim: true },
  likes: { type: Number, required: true, trim: true },
})

const contactSchema = mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  message: { type: String, required: true, trim: true }
})

```

#

## Whimsical

Components Architecture
![image](pictures/Volunteer-App-Architecture.png)

Design

Click [here](https://whimsical.com/FbrucgXMi7o6Qhh7sCikbL) to see our design concept for our app!

#

## Team Expectations

[Team Expectations](https://docs.google.com/document/d/1OMbooy7ycTiZydVZ8s6fbFBqBXZppMoQVW1LQgrxV6M/edit?usp=sharing)

This defines what each member will be responsible for as well as the coding practices everyone will be expected to follow. This will help create a work flow that will be easy and healthy for everyone involved.

#

## GitHub Project Board

This contains a list of our MVP's and post-MVP's. Each person will be assigned something that is posted on the to-do list. When that person starts to work on it, they will drag it from the to-do into the in progress board. Once they have finished this they will put it in the done board and delete the assignment entry in the assignment board. As the project becomes clearer things may be added to the to-do list. Before assigning someone a task we will check in with each other if thats okay.

[GitHub Project Board](https://github.com/users/ImmanuelCurrah/projects/1/views/1)

#
