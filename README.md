# ABIR KHAN Portfolio

Welcome to my portfolio! This is a personal portfolio website showcasing my projects, skills, and experience in web development. Designed with a mobile-responsive layout, it provides an engaging and interactive experience for visitors.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)
- [License](#license)
  
## Features

- **Dark/Light Mode Toggle**: Switch between dark and light themes to match your preference.
- **Mobile-Responsive Navbar**: A responsive navigation bar that collapses on smaller screens.
- **Animated Components**: Smooth transitions and animations powered by Framer Motion.
- **Interactive Project Display**: Detailed project descriptions and images, with quick links to source code and live demos.

## Demo

You can view the live demo of this portfolio at: [https://abirhasankhan.github.io/portfolio/](https://abirhasankhan.github.io/portfolio/)

## Technologies Used

- **React**: For building the user interface.
- **React Router**: For seamless routing between pages.
- **Tailwind CSS**: For a custom, responsive UI design.
- **Framer Motion**: For animation effects.
- **GitHub Pages**: For deployment.

## Getting Started

To get a local copy up and running, follow these steps.

### Prerequisites

Make sure you have the following installed on your local machine:
- Node.js
- npm (Node Package Manager) or yarn

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/abirhasankhan/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```
   or if you're using yarn:
   ```bash
   yarn install
   ```

### Running the Application

To run the project in development mode:
```bash
npm run dev
```

Then, open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Project Structure

```bash
├── public/                    # Static files
├── src/                       # Source files
│   ├── assets/                # Assets
│   ├── components/            # Reusable components (e.g., Header, Footer, Postcard)
│   ├── context/               # Context API (Theme context for dark/light mode)
│   ├── data/                  # Project data
│   ├── images/                # Image folder (for project images)
│   ├── pages/                 # Pages (e.g., Home, About, Projects, Contact)
│   ├── App.jsx                # Main app component
│   └── main.jsx               # Entry point
└── README.md
```

## Available Scripts

In the project directory, you can run:

- **`npm run dev`**: Runs the app in development mode.
- **`npm run build`**: Builds the app for production in the `dist` folder.
- **`npm run preview`**: Serves the production build locally.

## Deployment

This project is deployed on GitHub Pages. To deploy it:

1. Create a production build by running:
   ```bash
   npm run build
   ```

2. Push the `dist` folder to your GitHub repository on a branch called `gh-pages`.

3. Enable GitHub Pages in your repository settings and set it to use the `gh-pages` branch.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.


