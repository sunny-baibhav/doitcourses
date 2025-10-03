# Prisma Database Setup

## Overview
This project now includes Prisma ORM with SQLite database for local development.

## Database Schema
The following tables have been created:

### Core Tables
- **users** - User accounts and profiles
- **posts** - Blog posts and content
- **comments** - Comments on posts
- **courses** - Course content and metadata
- **lessons** - Individual lessons within courses
- **enrollments** - User course enrollments

## Prisma Commands

### Generate Prisma Client
```bash
npx prisma generate
```

### Push Schema to Database
```bash
npx prisma db push
```

### Create Migration
```bash
npx prisma migrate dev --name migration_name
```

### Reset Database
```bash
npx prisma migrate reset
```

### View Database in Prisma Studio
```bash
npx prisma studio
```

### Seed Database
```bash
npx prisma db seed
```

## Usage in React Components

### Import Prisma Client
```javascript
import { prisma } from "../lib/prisma.js"
```

### Example API Functions
```javascript
import { userApi, courseApi } from "../api/database.js"

// Get all users
const users = await userApi.getAllUsers()

// Create new user
const newUser = await userApi.createUser({
  email: "user@example.com",
  name: "John Doe"
})

// Get all courses
const courses = await courseApi.getAllCourses()
```

## Database Demo
Visit `/database` to see a working example of Prisma integration with React.

## File Structure
```
src/
 lib/
    prisma.js          # Prisma client instance
    supabase.js        # Supabase client
 api/
    database.js        # Database API functions
 pages/
    DatabaseDemo.jsx   # Database demo component
 prisma/
     schema.prisma      # Database schema
```

## Environment Variables
Make sure your `.env` file contains:
```
DATABASE_URL="file:./dev.db"
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_key
```

## Next Steps
1. Customize the schema in `prisma/schema.prisma`
2. Run `npx prisma db push` to apply changes
3. Use the API functions in your React components
4. Add more complex queries and relationships as needed
