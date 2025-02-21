# Adding Forms to Websites

## Overview

In this project, I focused on creating a functional and visually appealing form using HTML and CSS. The form collects user information, including personal details, preferences, and contact methods. This project helped me enhance my skills in form creation, styling, and user interaction.

## Key Learnings

### 1. HTML Form Structure

- **Form Elements**: I learned how to structure a form using various HTML elements such as `<form>`, `<input>`, `<textarea>`, `<select>`, and `<button>`. Each element serves a specific purpose in collecting user data.
  ```html
  <form action="/" method="GET">
      <section>
          <h2>Your personal details</h2>
          <ul>
              <li>
                  <label for="username">Your name</label>
                  <input type="text" name="user-name" id="username" required placeholder="Dylon Marks">
              </li>
              <li>
                  <label for="useremail">Your email address</label>
                  <input type="email" name="user-email" id="useremail">
              </li>
              <li>
                  <label for="userpassword">Your password</label>
                  <input type="password" name="user-password" id="userpassword" required minlength="7">
              </li>
          </ul>
      </section>
      ...
  </form>
  ```

### 2. CSS Styling for Forms

- **Form Styling**: I applied CSS to style the form elements, ensuring a clean and user-friendly design. This includes setting widths, margins, padding, and background colors.
  ```css
  body {
      background-color: rgb(193, 245, 52);
      font-family: "Roboto", sans-serif;
  }

  form {
      width: 30rem;
      margin: 3rem auto;
      background-color: rgb(255, 255, 255);
      padding: 1rem;
      border-radius: 6px;
  }

  input, textarea, select {
      width: 100%;
      display: block;
      margin-bottom: 1rem;
      box-sizing: border-box;
      font: inherit;
      border: 1px solid rgb(184, 184, 184);
      padding: 0.25rem;
      color: rgb(61, 58, 58);
  }
  ```

### 3. Interactive Elements

- **Focus and Hover Effects**: I added focus effects to input fields to improve user experience. When an input field is focused, its background color and border color change.
  ```css
  input:focus, textarea:focus {
      background-color: rgb(219, 190, 253);
      color: rgb(32, 5, 63);
      border-color: rgb(32, 5, 63);
  }

  button:hover {
      background-color: rgb(52, 14, 95);
      border-color: rgb(52, 14, 95);
  }
  ```

### 4. Form Control Layout

- **Inline Form Controls**: I used Flexbox to align form controls inline, such as radio buttons and checkboxes with their labels. This ensures a neat and organized layout.
  ```css
  .form-control-inline {
      display: flex;
  }

  .form-control-inline input {
      width: auto;
      margin-right: 0.5rem;
  }
  ```

## Conclusion

This project allowed me to practice and improve my skills in creating and styling HTML forms. I learned how to structure forms, apply CSS for a better user experience, and use Flexbox for layout alignment. The final result is a functional and visually appealing form that can be used in various web applications.
