# Learning HTML

## Overview
This README file summarizes the key concepts and examples of HTML that were practiced and learned. HTML (HyperText Markup Language) is the standard language used to create web pages. It provides the structure and content of a webpage.

## Concepts Covered

### 1. Basic HTML Structure
- **Doctype Declaration**: `<!DOCTYPE html>` specifies the HTML version.
- **HTML Element**: `<html>` is the root element.
- **Head Element**: `<head>` contains meta-information, such as character encoding (`<meta charset="UTF-8">`) and the page title (`<title>`).
- **Body Element**: `<body>` contains the content of the page.

### 2. Headings
- HTML headings are defined with `<h1>` to `<h6>` tags.
- Example:
  ```html
  <h1 title="github">Lorem ipsum dolor sit amet consectetur.</h1>
  <h2 title="new tooltip">Lorem ipsum dolor sit amet.</h2>
  ```

### 3. Block vs. Inline Elements
- **Block-level elements**: Start on a new line and take up the full width.
  - Examples: `<h1>`, `<p>`, `<ol>`, `<ul>`, `<li>`
- **Inline elements**: Do not start on a new line and only take up as much width as necessary.
  - Examples: `<a>`, `<img>`, `<strong>`, `<em>`

### 4. Lists
- **Ordered List**: `<ol>` and `<li>`
- **Unordered List**: `<ul>` and `<li>`
- Example:
  ```html
  <ol>
    <li>Orange tea</li>
    <li>Black tea</li>
  </ol>
  ```

### 5. Tables
- Tables are created using the `<table>`, `<tr>`, `<th>`, and `<td>` tags.
- Example:
  ```html
  <table>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>DOB</th>
    </tr>
    <tr>
      <td>Christian</td>
      <td>chris34@gmail.com</td>
      <td>04/15/2000</td>
    </tr>
  </table>
  ```

### 6. Forms
- Forms are used to collect user input and are created using the `<form>` element.
- Common input elements: `<input>`, `<label>`, `<button>`, `<select>`, `<option>`, `<textarea>`
- Example:
  ```html
  <form>
    <label for="email">Email:
      <input type="email" name="email">
    </label>
    <button type="submit">Submit</button>
  </form>
  ```

### 7. Semantic HTML
- Semantic elements provide meaning to the content and structure.
- Common semantic elements: `<header>`, `<nav>`, `<article>`, `<section>`, `<footer>`
- Example:
  ```html
  <header>
    <hgroup>
      <h1>Learn to create websites</h1>
      <h2>You can learn and build your own website</h2>
    </hgroup>
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
    </nav>
  </header>
  ```

### 8. Hands-On HTML Challenges
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Challenges</title>
</head>
<body>
    <h1>Hands-On HTML Challenges</h1>

    <!-- Task: Create an HTML document with a heading that says "Welcome to the course"-->
    <h1>Welcome to the course</h1>

    <!-- Task: Create an HTML paragraph that contains a link to "www.example.com" with the text "Click here to visit." -->
    <p><a href="www.example.com">Click here to visit</a></p>
    
    <!-- Task: Create a text element that shows additional information in a tooltip when hovered over. -->
    <p><span title="This is a tooltip text">Hover over this text to see the tooltip</span>.
    </p>

    <!-- Task: Create a button that displays the text "Submit" -->
    <button type="submit">Submit</button>

    <!--Create an unordered list of three favorite fruits.  -->
    <ul>
        <li type="none">Apple</li>
        <br>
        <li type="none">Banana</li>
        <br>
        <li type="none">Cherry</li>
    </ul>

    <!-- Task: Create a table with two rows and two columns. The first row should contain the headings "Name" and "Age." The second and third row should contain the data "John", "30" and "Harry", "26" respectively. -->
    <table border="">
        <tr>
            <th>Name</th>
            <th>Age</th>
        </tr>
        <tr>
            <td>John</td>
            <td>30</td>
        </tr>
        <tr>
            <td>Harry</td>
            <td>26</td>
        </tr>
        
    </table>

    <!-- Task: Create a simple form with two input fields: one for "Username" and one for "Password." -->
    <form>
        <label for="text" name="Username">
            Username:
            <input type="text" name="Username" >
        </label>
        <br><br><br>
        <label for="text" name="Password">
            Password:
            <input type="password" name="Password" id="">
        </label>
    </form>

    <!-- Task: Create a form with a dropdown menu for selecting a country. Include three options: "India", "Canada", and "UK." -->
     <form action="">
        <label for="">
            Select your country:
        </label>
        <select name="" id="">
            <option value="India">India</option>
            <option value="UK">UK</option>
            <option value="Canada">Canada</option>
        </select>
     </form>
</body>
</html>
```


## Conclusion
This README provides an overview of the fundamental HTML concepts learned through practice. These examples cover the basics of HTML structure, headings, block and inline elements, lists, tables, forms, and semantic HTML.
```