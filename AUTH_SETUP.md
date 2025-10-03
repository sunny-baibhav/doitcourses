# Authentication Setup Instructions

## 1. Create Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Create a new project
3. Get your project URL and anon key from Settings > API

## 2. Configure Environment Variables

Update `.env.local` with your actual Supabase credentials:

```
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-actual-anon-key-here
```

## 3. Configure Supabase Authentication

In your Supabase dashboard:

1. Go to Authentication > Settings
2. Add Site URL: `http://localhost:5177`
3. Add Redirect URLs: `http://localhost:5177/auth/callback`
4. Go to Authentication > Providers
5. Enable Google and GitHub providers
6. Configure OAuth credentials for each provider

## 4. Features Included

-  Email-only login (Magic Links)
-  Google OAuth
-  GitHub OAuth
-  Authentication context
-  Protected routes
-  Automatic session management

## 5. Usage

- Visit `/login` to access the login page
- Use email magic links or social login
- Authentication state is managed globally
- Protected routes automatically redirect to login

## 6. File Structure

```
src/
 lib/
    supabase.js          # Supabase client configuration
 pages/
    auth/
        Login.jsx        # Login page component
        Callback.jsx     # Auth callback handler
 contexts/
    AuthContext.jsx      # Global auth state management
 components/
     ProtectedRoute.jsx   # Route protection component
     AuthStatus.jsx       # User status display
```
