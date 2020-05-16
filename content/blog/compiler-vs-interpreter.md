---
title: Compiler vs Interpreter
date: 2020-05-16T13:01:11.386Z
description: We already know that a computer only understand binary, so how can
  we translate human-readable programming language into binary?
featuredpost: false
tags:
  - compiler
  - interpreted
  - hybrid
  - programming
  - fundamentals
  - basic
  - theory
---
From the previous post, we already know that computer is a dumb machine and we need to tell it what to do, precisely. We have a bunch of human-readable programming languages, but computer doesn't understand those languages, it only understand one language which is Binary.

So, we need a **translator.**

Generally, there are two methods of translation which are using:

1. Compiler
2. Interpreter

These translator will take the human-readable code (we call it *source code*) and turn it into binary code that machine understand. 

Every programming language often comes with their own translator so we as a programmer don't have to worry about it. Some of them use Compiler therefore we call them **compiled language,** others use Interpreter therefore we call them **interpreted language**.

So, what are the differences between both of them?

Imagine there are two computers, your computer where you write your source code and my computer where we want to run the code.



## Compiled Language

In compiled languages, they have the compiler that will take the source code in your computer and then translate it or we like to call it "compile it" into an executable code for my computer. Then, you can send me the *compiled code* and since it's already compiled, my computer just need to run it because it already understand the code.

This method of translation has some pros & cons.

### Pros:

1. The code that you gave me is ready to run therefore it is **more fast** because I don't need to translate it in my machine in order to run it.
2. The source code is **private.** Since you just sent me the compiled code therefore I don't know your actual source code and can't mess with it.

### Cons:

1. It is not **flexible and not cross-platform**. For instance, you compiled your code for specific CPU architecture like Windows, the compiled code can't run in Mac.
2. You need an **extra step** when you're still in development and need to **test** your code which is to compile it every time you make changes.



## Interpreted Language

In interpreted language, you don't compile your source code before hand. You just give me a copy of your source code and then in my computer I will interpret the source code. An interpreter is different with a compiler, it translate the source code on the fly. We can think of it as going through your source code line by line and processing it on the spot. It doesn't save it as separate machine code file.

This method of translation also has some pros & cons.

### Pros:

1. It is **more flexible and cross-platform**. You don't care what type of machine I have, because you don't provide a machine code. You just send me your source code and let me do the work as long as I have the interpreter in my machine/computer.
2. It is **more** **easier to test**. Because you just need to run your source code and let the interpreter do its thing on the fly. There is no extra step in between like compiling it first.

### Cons:

1. As you might guess, your source code is **public** since you need to send me your source code in other for me to interpret it. It makes me able to see your actual source code.
2. The computer that you want to send the code need to have the interpreter and it can be **more slower** since I need to interpret it every time I want to run the code.

Because there are a good things about compiled languages and also a good things about interpreted languages. There's actually the **third way** of doing the translation which is a bit of both.

Instead of compiled approach where the work is done upfront which makes it little bit inflexible or interpreted approach where all the work is done on the receiving end that can be little bit slower. We kinda do half and half. This is called **Intermediate Hybrid Approach**.

So, upfront we compile the source code part of the way to what is called **intermediate language** (also referred as byte code) which takes it far along the way to machine code as it can get while still being portable often across platforms. Then you send it to the people who need to run it and each person who runs it take the last step of translating it into machine code on their computer. This is sometimes referred to just-in-time or **JIT Compilation.**

Now, while theoretically all programming languages could use any of these method of translation, the normal usage of any one language tends to be one or the other. Here are the example of programming languages that use the approach above:

* **Compiled:** C, C++, Objective-C
* **Interpreted:** PHP, JavaScript (indeed most languages with the word "script" at the end)
* **Hybrid:** Java, C#, VB.Net, Python



Thanks for reading.