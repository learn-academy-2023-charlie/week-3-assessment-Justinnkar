# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is JSX? What is one syntax difference between HTML and JSX?

Your answer: JSX is a markup language that's a combination between JavaScript and HTML. One syntax difference in JSX is an attribute is written as a variable name or class tag in Pascal Case, while in HTML an attribute is written as an id tag in lower case.

Researched answer: JSX is a syntax extension for JavaScript that allows you to write HTML-like code within your JavaScript code. It was developed by Facebook to simplify the creation of complex user interfaces. One syntax difference between HTML and JSX is that in JSX, you can use JavaScript expressions inside curly braces {} to embed values dynamically. In HTML, you would have to use JavaScript to manipulate the DOM to achieve the same result.

2. What is yarn? What file(s) are modified when you run the command yarn in your terminal?

Your answer: Yarn is a package manager for JavaScript that was developed by Facebook. It allows you to manage your project's dependencies and installs packages from the npm registry. When you run the yarn command in your terminal, the yarn.lock file is modified to include the exact versions of your project's dependencies that were installed.

Researched answer: Yarn is a popular alternative to the npm package manager. It was created by Facebook to address some of the performance and security concerns of npm. Yarn uses a deterministic algorithm for installing packages, which means that it installs the exact same package versions every time, regardless of the order in which the packages were installed. This ensures that your project's dependencies are consistent across different machines and environments. 

3. What is a React component?

Your answer: A React component is a modular, reusable piece of code that represents a part of a user interface. It encapsulates the logic and rendering of a specific UI element, such as a button, input field, or entire page. React components are the building blocks of React applications, and they can be nested and combined to create complex user interfaces.

Researched answer: 
What is JSX? What is one syntax difference between HTML and JSX?
Your answer: JSX is a markup language that's a combination between JavaScript and HTML. One syntax difference in JSX is an attribute is written as a variable name or class tag in Pascal Case, while in HTML an attribute is written as an id tag in lower case.

Researched answer:

JSX is a syntax extension for JavaScript that allows you to write HTML-like code within your JavaScript code. It was developed by Facebook to simplify the creation of complex user interfaces. One syntax difference between HTML and JSX is that in JSX, you can use JavaScript expressions inside curly braces {} to embed values dynamically. In HTML, you would have to use JavaScript to manipulate the DOM to achieve the same result. Another syntax difference is that in JSX, you write attributes using camelCase naming convention, while in HTML, attributes are usually written in lowercase. For example, in JSX, you would write className instead of class, and onClick instead of onclick.

What is yarn? What file(s) are modified when you run the command yarn in your terminal?
Your answer:

Yarn is a package manager for JavaScript that was developed by Facebook. It allows you to manage your project's dependencies and installs packages from the npm registry. When you run the yarn command in your terminal, the yarn.lock file is modified to include the exact versions of your project's dependencies that were installed.

Researched answer:

Yarn is a popular alternative to the npm package manager. It was created by Facebook to address some of the performance and security concerns of npm. Yarn uses a deterministic algorithm for installing packages, which means that it installs the exact same package versions every time, regardless of the order in which the packages were installed. This ensures that your project's dependencies are consistent across different machines and environments. When you run the yarn command in your terminal, Yarn looks for the package.json file in your project's root directory and installs the packages listed in the dependencies and devDependencies sections. Yarn also creates a yarn.lock file, which includes the exact versions of your project's dependencies that were installed. This file is used to ensure that the same versions of the dependencies are installed on all machines and during deployments.

What is a React component?
Your answer:

A React component is a modular, reusable piece of code that represents a part of a user interface. It encapsulates the logic and rendering of a specific UI element, such as a button, input field, or entire page. React components are the building blocks of React applications, and they can be nested and combined to create complex user interfaces.

Researched answer:

A React component is a self-contained, reusable piece of code that represents a specific part of a user interface. It encapsulates the logic and rendering of a UI element, such as a button, input field, or entire page. React components are modular and composable, meaning they can be nested and combined to create more complex components and UI elements. React components can be either class components or function components.

4. What is the difference between state values and props in React?

Your answer: Props and state are both used to pass data from one component to another in a React application. The difference is that props are read-only and are passed from a parent component to a child component, while state is owned and managed by a component itself.

Researched answer:Props (short for properties) are used to pass data from a parent component to a child component. They are read-only and cannot be modified by the child component. Props are passed down the component tree in a unidirectional flow, meaning that data flows from parent to child components only. This allows for better encapsulation and separation of concerns.

State, on the other hand, is an object that contains data that is owned and managed by a component itself. It represents the internal state of a component and can be changed by the component using the setState() method. Unlike props, state can only be accessed and modified by the component that owns it. When the state of a component changes, React automatically re-renders the component and its children to reflect the new state.

5. What is the DOM?

Your answer: Document Object Model

Researched answer: The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM model represents the document as a tree structure of nodes and objects, allowing developers to interact with the content and structure of web pages using programming languages like JavaScript. With the DOM, developers can create, modify, and delete HTML and XML elements, change the style and properties of elements, and attach event handlers to respond to user actions.


6. STRETCH: Which is the difference between a div tag and a span tag?

Your answer:

Researched answer:

## Looking Ahead: Terms for Next Week

1. Object-oriented programming:Object-oriented programming (OOP) is a programming paradigm that uses objects, which are instances of classes, to represent and manipulate data. OOP focuses on encapsulation, inheritance, and polymorphism to organize code and make it more modular and reusable.

2. Ruby: Ruby is an object-oriented programming language known for its simplicity, flexibility, and elegant syntax. It was created in the mid-1990s by Yukihiro Matsumoto ("Matz") in Japan and has since gained popularity among developers for its ease of use and readability.

3. Implicit return: Implicit return is a feature in some programming languages, including Ruby, where a function or method automatically returns the value of the last evaluated expression. In other words, if there is no explicit return statement in the function, the last expression that is evaluated will be returned by default.

4. Ruby blocks: Ruby blocks are chunks of code that can be passed to methods as arguments, similar to functions in other programming languages. Blocks are enclosed in curly braces {} or between the keywords do and end, and can be used to iterate over collections, manipulate data, or define custom behavior for a method.

5. Ruby hashes: Ruby hashes are a data structure that allow you to store key-value pairs, similar to a dictionary in other programming languages. Hashes are denoted by curly braces {} and contain one or more key-value pairs separated by colons :. Keys in a hash must be unique and can be of any data type, while values can be any object.
