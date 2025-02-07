# УБТЗ Эмнэлэг - Hospital Appointment System

A modern hospital appointment booking system built with Next.js and Supabase.

## Features

- Online appointment booking
- Doctor specialization selection
- User authentication
- Responsive design
- Dark mode support

## Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account and project

## Setup

1. Clone the repository:
```bash
git clone https://github.com/DembereltserenD/guy.git
cd guy
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory with your Supabase credentials:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Database Setup

The SQL migrations for setting up the database tables and functions are located in the `supabase/migrations` directory. Apply these migrations in your Supabase project in the following order:

1. Create tables (doctors, specializations, appointments)
2. Create functions (get_available_slots)
3. Add test data

## Tech Stack

- Next.js 13+ (App Router)
- TypeScript
- Tailwind CSS
- Supabase (Auth & Database)
- Radix UI Components
- Lucide Icons

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
