#  GameHub - A Game Library



## Project Purpose



**GameHub** is an engaging online library designed for discovering, exploring, and supporting indie game developers. It offers a vibrant, urban-themed interface where users can browse detailed information about various indie titles, access essential links, and manage their profile, all within a secure, authenticated environment.



##  Live URL



[Insert Your Hosted Application Link Here (e.g., ``)]



##  Key Features



### User Authentication & Profile Management

* **Email/Password and Google Authentication:** Secure login and registration with strong password validation (Min. 6 chars, required uppercase and lowercase).

* **Protected Routes:** Game detail pages are restricted, redirecting unauthenticated users to login.

* **My Profile:** Users can view their information and use the **Update Information** feature to change their name and profile picture URL.

* **Forgot Password:** Functional feature to send a password reset link to the user's email.



### Core Experience

* **Vibrant, Urban-Themed UI:** A high-contrast, engaging design using a dark palette with neon accents and an emphasis on user interaction.

* **Responsive Design:** Fully optimized layout for seamless browsing on mobile, tablet, and desktop devices.

* **Dynamic Page Titles:** The browser tab title changes dynamically to reflect the current page.

* **Game Discovery:**

    * **Banner Slider:** Highlights upcoming and popular titles.

    * **Popular Games Section:** Displays top-rated games in an engaging card layout.

* **Game Details Page:** Comprehensive information display (Title, Category, Ratings, Developer, Description, and Download Link) for each game.

* **Newsletter Section:** A prominent area on the homepage for email sign-ups.



### Technical Highlights

* **Single Page Application (SPA):** Built with React, ensuring smooth navigation without full page reloads.

* **Advanced Animation:** Implements **Framer Motion** for captivating UI transitions and micro-interactions.

* **Secure Configuration:** Firebase keys and other sensitive data are secured using **Environment Variables**.

* **SPA Route Fallback:** Hosting configuration ensures no 404 errors on direct route access or page reload.



## npm Packages Used



 Package  Purpose 



 `react-router-dom` = Managing routing and navigation within the SPA. 

 `firebase` = Handling user authentication (Email/Password, Google) and user profile updates. 

 `framer-motion` = Implementing animations and transitions for a highly engaging user experience. 

 `tailwindcss` = Utility-first CSS framework for rapid and responsive UI development. 

 `swiper` = Used for implementing the responsive and interactive banner slider. 

 `react-icons` = For high-quality, scalable vector icons across the application. 



