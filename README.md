 [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
 Demo: https://next-spotify-clone-eight.vercel.app/ 

 ## App Overview

This app is a personal project I developed to enhance my skills with cutting-edge web technologies like Next.js, Supabase, and Stripe. It's designed to replicate the core experience of Spotify, giving users a platform to:

 * Easily organize their music into playlists
 
 * Discover new music through a user-friendly search
 
 * Enjoy a sense of community by accessing music uploaded by other users

## Key Features

<img width="477" alt="Screenshot 2025-01-28 at 18 59 06" src="https://github.com/user-attachments/assets/d82094a4-16fa-463b-b325-249f1472c75b" />



## Architecture 

<img width="479" alt="Screenshot 2025-01-28 at 19 00 04" src="https://github.com/user-attachments/assets/afcc8587-b56e-4ca7-a833-ba8e6f9207fc" />

### Frontend

<img width="482" alt="Screenshot 2025-01-28 at 19 04 53" src="https://github.com/user-attachments/assets/b7d2d067-e33a-48f5-8f71-d2e66465ef36" />

#### Next.js (React-based):
This is the main framework, the blueprint of our house. It provides the structure and organization for all the visual elements you see on the screen.
Next.js helps make the app fast, user-friendly, and optimized for different devices.

#### Zustand (State Management):
"State management" simply means keeping track of all the changing information in the app, like which song is playing, the volume level, or what's in your playlist.
"Zustand helps organize and manage this information efficiently, ensuring a smooth and responsive experience.

#### Routing (Next.js built-in):
Next.js has built-in routing, which means it handles how you navigate between pages, like going from your playlist to the search screen.
This makes the app easy to use and ensures a seamless flow between different parts of the application." (Compare it to a well-organized museum with clear pathways between exhibits)

### Backend

<img width="482" alt="Screenshot 2025-01-28 at 19 05 25" src="https://github.com/user-attachments/assets/45766c95-1c2e-4caa-88e5-5132760b3034" />

#### Supabase (Backend as a Service):
Provides a complete set of tools to handle data storage, user accounts, and other important tasks, making it easier to build and maintain the app.

#### Supabase Authentication:
Manages user accounts, passwords, and permissions, keeping your data safe and secure.

#### Supabase Email Provider:
Allows the app to send emails for account verification, password resets, and other important notifications.

####  Database (PostgreSQL):
Stores all the app's data in a structured and efficient way, making it easy to access and manage.

####  Edge Functions:
They can handle tasks like data validation, image processing, or sending notifications, making the app more efficient and responsive.

### Stripe Payment service
It is an essential part of the app's payment and subscription system. t's a widely used among many businesses worldwide, so users can be confident their information is safe.

* How Stripe Works in the Frontend?

When user subscribes to premium features in the app, Stripe securely collects the payment information in their web browser, ensuring that sensitive information is never directly handled by the app.

* How Stripe Works in the Backend?

Behind the scenes, Stripe communicates with the app's backend to manage subscription, processing payments, and sending the receipts.


For demo :   https://next-spotify-clone-eight.vercel.app 


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
