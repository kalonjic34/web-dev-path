# Creating Beautiful Websites: Card Information

## Overview

In this project, I focused on creating a visually appealing card component using HTML and CSS. The card component showcases a subscription plan with detailed information and interactive elements. This project helped me enhance my skills in CSS styling, layout design, and user interaction.

## Key Learnings

### 1. CSS Variables

- **CSS Variables**: I used CSS variables to define a consistent color palette and font sizes. This approach makes it easier to maintain and update the styles across the project.
  ```css
  html {
      --color-grey-100: rgb(236, 236, 236);
      --color-grey-400: rgb(139, 139, 139);
      --color-grey-600: rgb(58, 58, 58);
      --color-grey-900: rgb(41, 41, 41);
      --color-primary-300: rgb(116, 209, 255);
      --color-primary-700: rgb(0, 170, 255);
      --size-1: 18px;
      --size-5: 50px;
  }
  ```

### 2. Card Layout and Design

- **Card Container**: I created a card container with a white background, centered alignment, and a subtle box shadow to give it a floating effect.
  ```css
  .card-container {
      background-color: rgb(255, 255, 255);
      width: 350px;
      margin: 50px auto;
      box-shadow: 3px 3px 10px rgb(201, 200, 200);
      transition: transform 0.5s ease-out;
  }

  .card-container:hover {
      transform: scale(1.05);
  }
  ```

### 3. Typography and Spacing

- **Typography**: I used Google Fonts to import 'Krub' and 'Zilla Slab' fonts for a modern and clean look. I applied these fonts to different elements to create a visual hierarchy.
  ```css
  h1 {
      color: var(--color-grey-600);
      text-align: left;
      padding: 30px 50px 0px 50px;
      margin: 10px 0;
      font-family: "Zilla Slab", serif;
      font-weight: 600;
  }

  .card-info {
      color: var(--color-grey-400);
      text-align: left;
      padding: 0 50px;
      margin: 10px 0 30px 0;
  }
  ```

### 4. Interactive Elements

- **Hover Effects**: I added hover effects to the card container and button to enhance user interaction. The card scales up slightly on hover, and the button changes color.
  ```css
  .button:hover {
      color: white;
      background-color: var(--color-primary-700);
      border: 2px solid rgb(255, 255, 255);
  }
  ```

### 5. Flexbox for Layout

- **Flexbox**: I used Flexbox to align the sub-features within the card. This approach ensures that the icons and text are properly aligned and spaced.
  ```css
  .sub-feature {
      display: flex;
  }

  .icon {
      display: flex;
      width: 10px;
  }

  .sub-feature-text {
      color: var(--color-grey-600);
      padding: 2px;
      margin: 5px;
  }
  ```

## Conclusion

This project allowed me to practice and improve my CSS skills, particularly in using CSS variables, Flexbox, and hover effects. I also gained experience in creating a cohesive and visually appealing design using consistent typography and spacing. The final result is a professional-looking card component that can be used in various web projects.