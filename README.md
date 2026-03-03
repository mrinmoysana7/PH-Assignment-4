# PH-Assignment-4
1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll ?

ANSWER : These are the four DOM methods of JavaScript, with which we select HTML elements. With the help of getElementById, a specific ID can be found. On the other hand, with the help of getElementsByClassName, many classes with the same name can be found and it is displayed in the output as an HTML Collection. On the other hand, with the help of querySelector, any similar first Element can be found, it is displayed as a single element in the output and querySelectorAll helps to find all elements with a specific name and it is displayed in the output as a nodelist.



2. How do you create and insert a new element into the DOM ?

ANSWER : We can create a new element using this DOM Method -- createElement and these tasks are completed by using innerText to arrange or add content to the created element and setAttribute to add attributes. Then finally we have to use appendChild to place the newly created element inside another element.



3. What is Event Bubbling? And how does it work ?

ANSWER : Event Bubbling is an event mechanism in JavaScript where when an event occurs in a child element, that event is gradually passed up to its parent → grandparent → document.

* Event flow typically occurs in 3 phases:

Capturing Phase (top to bottom)

Target Phase (where the click occurred)

Bubbling Phase (bottom to top)

By default, the event listener operates in the bubbling phase.



4. What is Event Delegation in JavaScript? Why is it useful?

ANSWER : Event Delegation is a technique where we place a single event listener on their parent element, rather than having a separate event listener on each child element — and use Event Bubbling to detect the child.

*Performance is better

If there are many elements, you can just provide one listener instead of separate listeners.
Can handle Dynamic Elements
Code is Clean & Maintainable

Less code
Less memory use
Easy debugging  



5. What is the difference between preventDefault() and stopPropagation() methods?

ANSWER : preventDefault() → This disables the browser's default behavior.

stopPropagation() → This stops event bubbling or capturing.

That is, the event will not go to the parent element.