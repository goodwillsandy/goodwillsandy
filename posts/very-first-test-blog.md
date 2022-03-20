---
title: 'JavaScript: Callback!'
desc: 'If we use our common sense, then we can break Callback to two words “Call” + “Back” and it simply points to “Calling something back!”.'
metaTitle: 'JavaScript: Callback!'
metaDesc: 'If we use our common sense, then we can break Callback to two words “Call” + “Back” and it simply points to “Calling something back!”.'
socialImage: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80'

date: '2021-09-22'
tags:
  - nextjs
---

# JavaScript: Callback!
![](https://miro.medium.com/max/1400/1*fO0dD8mTEfdYzuKAZWwN3w.jpeg)

What are Callbacks?
-------------------

If we use our common sense, then we can break Callback to two words “Call” + “Back” and it simply points to “Calling something back!”.

In the JavaScripts (a.k.a JS) context it refers to calling back a function maybe after completion of the certain procedure.

**But how JavaScripts engine will get to know who should I call after completion of the procedure?**

For that procedure to know who should I call, we need to pass or supply a callback function to that procedure as an argument & such function which take other function as arguments are called _Higher Order Function_ (HOF).

Why do I need a Callbacks?
--------------------------

Let us have a look at this simple snippet:

<img alt="" class="ef es eo ex w" src="https://miro.medium.com/max/1252/1\*buJJY29vMNc1\_NKh6Jf5Lw.png" width="626" height="236" srcSet="https://miro.medium.com/max/552/1\*buJJY29vMNc1\_NKh6Jf5Lw.png 276w, https://miro.medium.com/max/1104/1\*buJJY29vMNc1\_NKh6Jf5Lw.png 552w, https://miro.medium.com/max/1252/1\*buJJY29vMNc1\_NKh6Jf5Lw.png 626w" sizes="626px" role="presentation"/>

What do you think will be output?

As you expected,

<img alt="" class="ef es eo ex w" src="https://miro.medium.com/max/1280/1\*g7R8\_oBPzwna\_Ib2dubCpA.png" width="640" height="180" srcSet="https://miro.medium.com/max/552/1\*g7R8\_oBPzwna\_Ib2dubCpA.png 276w, https://miro.medium.com/max/1104/1\*g7R8\_oBPzwna\_Ib2dubCpA.png 552w, https://miro.medium.com/max/1280/1\*g7R8\_oBPzwna\_Ib2dubCpA.png 640w" sizes="640px" role="presentation"/>

An output of the code in the above image.

Alright, it was quite simple! What if _function A()_ in above deals with API call, in that case, will the execution stop till response come or continues execution? To understand this let us add _setTimeout()_ so we can mimic the scenario.

Let’s make it complicated by adding _setTimeout()_ to above script,

<img alt="" class="ef es eo ex w" src="https://miro.medium.com/max/1282/1\*0v0BBFvn5U8AY40oV2cClg.png" width="641" height="289" srcSet="https://miro.medium.com/max/552/1\*0v0BBFvn5U8AY40oV2cClg.png 276w, https://miro.medium.com/max/1104/1\*0v0BBFvn5U8AY40oV2cClg.png 552w, https://miro.medium.com/max/1280/1\*0v0BBFvn5U8AY40oV2cClg.png 640w, https://miro.medium.com/max/1282/1\*0v0BBFvn5U8AY40oV2cClg.png 641w" sizes="641px" role="presentation"/>

Script with setTimeout in js

What do you think will be the output? ……. Let us see.

<img alt="" class="ef es eo ex w" src="https://miro.medium.com/max/1286/1\*pZcvaasRxniw18DXywMw3A.png" width="643" height="132" srcSet="https://miro.medium.com/max/552/1\*pZcvaasRxniw18DXywMw3A.png 276w, https://miro.medium.com/max/1104/1\*pZcvaasRxniw18DXywMw3A.png 552w, https://miro.medium.com/max/1280/1\*pZcvaasRxniw18DXywMw3A.png 640w, https://miro.medium.com/max/1286/1\*pZcvaasRxniw18DXywMw3A.png 643w" sizes="643px" role="presentation"/>

The output of the code in the above scripts.

Did you notice that _“I am in B”_ is printed in the console before _“I am in A”?_ But didn’t we called _function A()_ first? And from what I know JavaScript is **Synchronous and Event-driven** language i.e. It will execute the code line by line and will keep listening to the other events simultaneously.

This paragraph will explain the above scenario. In the above snippet, we are actually using _setTimeout()_ which creates Timing event to execute code at a specified time interval. So code in function A() get executed after 1 second when an event occurs, till that time JavaScript engine keep executing other lines of code.

So we clarified that even if we add some function in particular order to execute it does not mean we will get output in the same order and even worst scenario is when the output of our Current function is dependent on the previous functions output. Callback makes sure certain function doesn’t execute until other has finished.

How do I create a Callback?
---------------------------

Easy to create just pass one function into others as an argument and call it. Didn’t get it, see this snippet:

<img alt="" class="ef es eo ex w" src="https://miro.medium.com/max/1264/1\*Kzt6FvDedLQgiEtYD7muuQ.png" width="632" height="317" srcSet="https://miro.medium.com/max/552/1\*Kzt6FvDedLQgiEtYD7muuQ.png 276w, https://miro.medium.com/max/1104/1\*Kzt6FvDedLQgiEtYD7muuQ.png 552w, https://miro.medium.com/max/1264/1\*Kzt6FvDedLQgiEtYD7muuQ.png 632w" sizes="632px" role="presentation"/>

Callback demonstration script

it will give output as:

<img alt="" class="ef es eo ex w" src="https://miro.medium.com/max/1268/1\*WSOtB5hLra2vl5jHOaMf8w.png" width="634" height="130" srcSet="https://miro.medium.com/max/552/1\*WSOtB5hLra2vl5jHOaMf8w.png 276w, https://miro.medium.com/max/1104/1\*WSOtB5hLra2vl5jHOaMf8w.png 552w, https://miro.medium.com/max/1268/1\*WSOtB5hLra2vl5jHOaMf8w.png 634w" sizes="634px" role="presentation"/>

An output of Callback demonstration script

Hurrah! you have successfully created your first callback. For more complex one go to this link: [https://jsbin.com/kuyacaparu/9/edit?js,console](https://jsbin.com/kuyacaparu/9/edit?js,console)

Callbacks are mostly used in handling Asynchronous Operation, like API calls (Fetching Movie data in Netflix, Fetching Location in Maps, Fetching Hotels in Airbnb, etc.) depending on response/error callback handle the functionality.

You have done it!
-----------------

Now you have gained a quite good knowledge of callback, but it’s not enough there is a whole lot of resource on a callback on the web. Happy Learning!

Don’t forget to clap for me if you found this article helpful follow me.
