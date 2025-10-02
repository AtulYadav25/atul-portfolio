export interface Blog {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  content: string;
}

export const blogs: Blog[] = [
  {
    slug: "building-scalable-web-apps",
    title: "Building Scalable Web Applications",
    subtitle: "Best practices for architecting apps that grow with your users",
    date: "2024-03-15",
    content: `
# Building Scalable Web Applications

When building web applications, scalability should be a primary concern from day one. Here's what I've learned from building production apps.

## Start with the Right Architecture

Choose your tech stack carefully:
- **Frontend**: React or Next.js for modern UI
- **Backend**: Node.js with Express or Next.js API routes
- **Database**: PostgreSQL for relational data, Redis for caching
- **Hosting**: Vercel, AWS, or similar cloud platforms

## Database Design Matters

Proper database design can make or break your app's performance:
- Normalize your data structure
- Add indexes on frequently queried fields
- Use database migrations for version control
- Implement connection pooling

## Implement Caching Early

Don't wait until you have performance issues:
\`\`\`javascript
// Example Redis caching
const cachedData = await redis.get(key);
if (cachedData) return JSON.parse(cachedData);

const data = await fetchFromDatabase();
await redis.setex(key, 3600, JSON.stringify(data));
return data;
\`\`\`

## Monitor Everything

Set up monitoring from the start:
- Application performance monitoring (APM)
- Error tracking (Sentry, Rollbar)
- Uptime monitoring
- User analytics

Remember: premature optimization is the root of all evil, but ignoring scalability from the start is worse.
    `,
  },
  {
    slug: "modern-react-patterns",
    title: "Modern React Patterns in 2024",
    subtitle: "Server components, hooks, and everything in between",
    date: "2024-02-28",
    content: `
# Modern React Patterns in 2024

React has evolved significantly. Here are the patterns I use in every project.

## Server Components

Next.js 13+ introduced Server Components, changing how we think about rendering:
\`\`\`tsx
// Server Component (default in app directory)
async function UserProfile({ id }: { id: string }) {
  const user = await fetchUser(id);
  return <div>{user.name}</div>;
}
\`\`\`

## Custom Hooks for Logic Reuse

Extract complex logic into custom hooks:
\`\`\`tsx
function useLocalStorage(key: string, initialValue: string) {
  const [value, setValue] = useState(() => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
\`\`\`

## Composition Over Props Drilling

Use composition to avoid prop drilling:
\`\`\`tsx
function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="layout">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
\`\`\`

These patterns keep your codebase clean, maintainable, and performant.
    `,
  },
  {
    slug: "typescript-tips-tricks",
    title: "TypeScript Tips & Tricks",
    subtitle: "Level up your TypeScript game with these practical tips",
    date: "2024-01-20",
    content: `
# TypeScript Tips & Tricks

TypeScript can feel overwhelming at first, but these tips will make you more productive.

## Use Type Inference

Let TypeScript do the work:
\`\`\`typescript
// ❌ Don't do this
const numbers: number[] = [1, 2, 3];

// ✅ Do this
const numbers = [1, 2, 3]; // TypeScript infers number[]
\`\`\`

## Utility Types Are Your Friends

Master these built-in utilities:
\`\`\`typescript
type User = {
  id: string;
  name: string;
  email: string;
};

// Pick specific properties
type UserPreview = Pick<User, 'id' | 'name'>;

// Make all properties optional
type PartialUser = Partial<User>;

// Make all properties readonly
type ReadonlyUser = Readonly<User>;
\`\`\`

## Discriminated Unions for Complex States

Handle complex state safely:
\`\`\`typescript
type RequestState =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: string }
  | { status: 'error'; error: string };

function handleRequest(state: RequestState) {
  switch (state.status) {
    case 'loading':
      return 'Loading...';
    case 'success':
      return state.data; // TypeScript knows data exists
    case 'error':
      return state.error; // TypeScript knows error exists
  }
}
\`\`\`

## Generic Constraints

Add constraints to generics:
\`\`\`typescript
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
\`\`\`

These patterns will help you write safer, more maintainable TypeScript code.
    `,
  },
];
