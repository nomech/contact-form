# Contact Form (Frontend Mentor Challenge)

A modern, accessible contact form built with React and Vite, styled with custom CSS modules. This project is a solution to a [Frontend Mentor](https://www.frontendmentor.io/) challenge.

## Features

-   Responsive and accessible contact form
-   Custom input components
-   Toast notifications for feedback
-   Modern design with custom fonts and icons

## Project Structure

```
src/
  App.jsx           # Main app component
  App.css           # Global styles
  main.jsx          # Entry point
  assets/           # Fonts and images
  components/
	 Button/         # Reusable button component
	 ContactForm/    # Main contact form logic and UI
	 InputField/     # Custom input field component
	 Toast/          # Toast notification component
public/
  assets/           # Static fonts and images
index.html          # App entry HTML
vite.config.js      # Vite configuration
eslint.config.js    # ESLint configuration
```

## Getting Started

1. **Install dependencies**

    ```bash
    npm install
    ```

2. **Run the development server**

    ```bash
    npm run dev
    ```

## Customization

-   Update form fields and validation in `src/components/ContactForm/ContactForm.jsx`.
-   Change styles in the respective `.module.css` files.
-   Replace fonts or images in `public/assets/` or `src/assets/` as needed.

## Credits

-   [Frontend Mentor](https://www.frontendmentor.io/) for the challenge
-   [Vite](https://vitejs.dev/) for the build tool
-   [React](https://react.dev/) for the UI library

---

**Feel free to use, modify, and share!**
