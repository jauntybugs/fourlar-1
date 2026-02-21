# FourLar Consulting Ltd - Website Source Code

This is a high-performance React application built with Vite and Tailwind CSS.

## 🚀 Local Development

To run this project on your computer:

1. **Install Node.js**: Ensure you have Node.js installed (v18 or higher recommended).
2. **Install Dependencies**:
   ```bash
   npm install
   ```
3. **Set Up Environment Variables**:
   Create a `.env` file in the root directory and add your Formspree IDs:
   ```env
   VITE_CONTACT_FORM_ID=mpqjywdn
   VITE_LEAD_FORM_ID=maqdpnjo
   VITE_RETAINER_FORM_ID=xykdnzjd
   ```
4. **Start Development Server**:
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:3000`.

## 📦 Deployment

To prepare the app for a live website:

1. **Build the Project**:
   ```bash
   npm run build
   ```
2. **Deploy**:
   The command above generates a `dist` folder. Upload the **contents** of this `dist` folder to your web hosting provider (Netlify, Vercel, GitHub Pages, or any standard web server).

## 🛠️ Tech Stack
- **Framework**: React 19
- **Routing**: React Router 7
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Forms**: Integrated with Formspree
