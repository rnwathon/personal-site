---
title: Introduction to Programming and Programming Language
date: 2020-05-15T06:23:59.921Z
description: What programming really is and why we need programming language
featuredpost: false
tags:
  - Programming
  - Programming Language
  - Fundamental
  - Basic
---
**Programming** or **Computer Programming** is a **process** by someone called a Programmer in writing, testing, fixing, and maintaining codes in a **Computer Program** with certain **Programming Language.** So, it is clear that as a Programmer you're not just writing codes. You also test it, look out for some errors and then fix it, maintain it to keep it working in a long time. You have to be critical, logical, and rational.

What actually Programmer make? it's a **Computer Program** which basically a piece of text (or we call it code) that directing force that makes computer do what it does, it is data in the computer's memory, yet it controls the actions performed on the same memory.

Computer is just a dumb machine, it needs someone to tell it what to do, precisely what to do. But, its strength is it can do it million times faster than a human.

> Computer is just a dumb machine, it needs someone to tell it what to do, precisely what to do

So, how can we tell a computer what to do? 

Think of it as you ask your friend a favor to buy you a snack at a store, how do you tell him what to do? You use a **language** that he understand, you give him instructions, what snacks to look for, and so on.

The same goes to telling computer what to do, we use language. Unfortunately, computer is only understand one "language" which is **Binary** that only contains 1 and 0.

In the beginning, at birth of computing, programs looked something like this:

```
00110001 00000000 00000000
00110001 00000001 00000001
00110011 00000001 00000010
01010001 00001011 00000010
00100010 00000010 00001000
01000011 00000001 00000000
01000001 00000001 00000001
00010000 00000010 00000000
01100010 00000000 00000000
```

That program is to add the numbers from 1 to 10 and print out the result. That's how we used to tell computer what to do.

No, I didn't write that code myself. I copied and pasted it from the internet. As you can see, it's painful if we have to write that binary code when programming because it's not readable for a human.

That's why we need a Programming Language that readable to human to make our work more efficient. Something like this:

```javascript
let total = 0, count = 1;
while (count <= 10) {
  total += count;
  count += 1;
}
console.log(total);
```

The program above written in a programming language called **JavaScript** which does the same thing, add the numbers from 1 to 10 and print out the result. But it's more readable.

This human-readable programming language is called **High-Level Programming Language**. The other type is **Low-Level Programming Language** which is machine-readable just like the binary codes.

> But wait...

I said that the computer **only**  understand one language which is Binary. So, how can it understand this human-readable programming language?

Hhmmm...

for instance, you want to talk to Japanese person but he/she doesn't understand your language (e.g english) and you can't speak Japanese, what would you do?

You use **Translator.**

There is also a translator of programming languague. We will talk about this translator in the future post.