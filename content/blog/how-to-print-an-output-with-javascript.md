---
title: How to print an output with JavaScript
date: 2020-05-20T13:39:43.986Z
description: One of the first thing that you have to know when learning
  JavaScript or any sort of programming language
featuredpost: false
tags:
  - basic
  - javascript
  - programming
---
There are many ways of giving an output with JavaScript. One of the easiest way is with `console.log` function that built-in JavaScript Programming Language. This function takes an argument that you will print to the console. It can be browser console or NodeJS runtime console depends on where you use it.

## The Syntax

```
console.log("Hello World")

// console output
// Hello World
```

This `console.log` function is also often use as most basic debugging tools when you need to learn the flow of your program. You can use this function everywhere as you needed.

The other way is with `Alert` function, this function will show a pop-up alert on the browser with the content of its argument (just like the `console.log`). But, this function is rarely used nowadays. Most web application will just use their custom alert with certain styling instead of this default alert.

There are still many ways to give/show an output with JavaScript. If its user related, then we want to combine the JavaScript with the HTML using the DOM API that browser have. The output also can be in a form of API that you can create with NodeJS (and its framework) to allow another application to take the output.