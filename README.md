# Catering Search - Frontend

A simple web app to search and filter caterers by name and price.

## What's Inside

- **Search** - Find caterers by name
- **Filter** - Set max price to filter results  
- **View Cards** - See each caterer's info (name, location, price, cuisines, rating)
- **Live Updates** - Results update as you type
- **Mobile Friendly** - Works on phone and desktop

## Quick Start

### 1. Install
```bash
cd frontend
pnpm install
```

### 2. Setup Environment
Copy the example file:
```bash
cp .env.local.example .env.local
```

Edit `.env.local`:
```
NEXT_PUBLIC_API_BASE_URL=http://localhost:5000/api/v1
```

### 3. Start
```bash
pnpm dev
```

Go to: `http://localhost:3000/caterers`

## How It Works

1. You type a caterer name → Search filters results
2. You move the price slider → Results update
3. API fetches from backend → Shows loading skeletons
4. Results display as cards → Click to see more details
5. Data is cached → Fast on repeat searches

## Tech Used

- **Next.js** - Website framework
- **React Query** - Get and cache data
- **Tailwind** - Styling
- **TypeScript** - Type checking

## File Layout

```
src/
├── app/caterers/          - Main search page
├── components/caterers/   - Caterer search components
├── hooks/                 - Custom hooks for data
└── lib/                   - API calls & helpers
```

## Requirements

- Backend running on `http://localhost:5000`
- Database with caterer data
- Node.js 18+

## Issues?

- Make sure backend is running first
- Check `.env.local` has correct API URL
- Clear browser cache if styles look wrong

```
src/
  app/caterers/      the /caterers page
  components/caterers/ card, grid, filters, skeleton
  components/ui/      shadcn components
  lib/apiClient.ts  the shared axios instance
  lib/caterers.api.ts calls to the caterers endpoints
  hooks/             data fetching + debounce helpers
  types/             shared TypeScript types
```

## Scripts

- `pnpm dev` – start the dev server
- `pnpm build` – production build
- `pnpm start` – run the production build
- `pnpm lint` – run eslint
