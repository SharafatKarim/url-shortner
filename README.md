# URL Shortener

A professional, minimal, and privacy-focused URL shortener built with Next.js and Firebase.

## Features

-   **Shorten URLs**: Create short, easy-to-share links.
-   **Custom Slugs**: Choose your own custom alias for your links.
-   **Analytics**: Track clicks and view top-performing links.
-   **QR Codes**: Generate QR codes for your short links.
-   **Dark Mode**: Fully supported dark mode.

## Tech Stack

-   **Framework**: [Next.js](https://nextjs.org/) (App Router)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **UI Components**: [Shadcn UI](https://ui.shadcn.com/)
-   **Database**: [Firebase Firestore](https://firebase.google.com/docs/firestore)
-   **Icons**: [Lucide React](https://lucide.dev/)

## Setup Instructions

### Prerequisites

-   Node.js (v18 or later)
-   npm or yarn
-   A Firebase account

### 1. Clone the Repository

```bash
git clone https://github.com/SharafatKarim/url-shortner.git
cd url-shortner
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Firebase Setup

1.  Go to the [Firebase Console](https://console.firebase.google.com/).
2.  Create a new project.
3.  Enable **Firestore Database** in test mode (or production mode with appropriate rules).
4.  Create a web app in your Firebase project settings.
5.  Copy the Firebase configuration keys.

### 4. Environment Variables

Create a `.env.local` file in the root directory. You can use the provided example file:

```bash
cp .env.example .env.local
```

Then, open `.env.local` and fill in your Firebase configuration:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

### 5. Run Locally

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

1.  Push your code to a GitHub repository.
2.  Import the project into Vercel.
3.  Add the environment variables (from step 4) in the Vercel project settings.
4.  Deploy!

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## License

This project is licensed under the MIT License.
