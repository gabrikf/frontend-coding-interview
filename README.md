# Frontend Coding Interview - Photo Gallery App

A React + TypeScript application that displays photos from the Pexels API with authentication functionality.

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd frontend-coding-interview
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory and add your Pexels API key:

```env
VITE_API_TOKEN=Mz0iC21IFLz9HuN8ypIbJ54l8OuGnpW2IsVoQrYBEyagQXt1YeBEA7H0
```

4. Start the development server:

```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📋 Project Overview

This application consists of two main pages:

- **Login Page**: Authentication form with email/password validation
- **Photos Page**: Protected route displaying nature photos from Pexels API

### Features

- ✅ Mobile-responsive design following Figma mockups
- ✅ Form validation with Zod schema validation
- ✅ Protected routes with authentication
- ✅ Infinite scroll pagination for photos
- ✅ Local storage-based authentication simulation
- ✅ TypeScript for type safety
- ✅ Clean component architecture

## 🛠 Technical Stack

- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4
- **Routing**: React Router DOM v7
- **State Management**: React Context API + TanStack Query
- **Form Handling**: React Hook Form + Zod validation
- **HTTP Client**: Axios
- **Icons**: Phosphor Icons

## 🏗 Architecture Decisions

### 1. **Project Structure**

```
src/
├── components/          # Reusable UI components
├── context/auth/        # Authentication context and provider
├── hooks/              # Custom hooks
│   └── query/          # TanStack Query hooks
├── interfaces/         # TypeScript type definitions
├── lib/               # Utility libraries and configurations
└── pages/             # Page components with co-located files
```

**Why this structure?**

- **Feature-based organization**: Groups related files together (e.g., login page with its schema)
- **Separation of concerns**: Clear distinction between UI components, business logic, and data fetching
- **Scalability**: Easy to extend with new features without file conflicts

### 2. **Authentication Strategy**

```typescript
// Context-based authentication with localStorage persistence
const AuthProvider = () => {
  const [user, setUser] = useState<User | null>(null);
  // localStorage for persistence across sessions
};
```

**Why this approach?**

- **Simple and effective**: Meets requirement for "spoofed" authentication
- **Persistent sessions**: User remains logged in across browser refreshes
- **Easy to extend**: Can be easily replaced with JWT tokens and real API calls
- **Type-safe**: Full TypeScript support for user state

### 3. **Data Fetching with TanStack Query**

```typescript
// Infinite query for photos with automatic pagination
export const useGetInfinityPhotos = () =>
  useInfiniteQuery({
    queryKey: ["items"],
    queryFn: ({ pageParam = 1 }) => fetchItems({ pageParam }),
    // Automatic background refetching and caching
  });
```

**Why TanStack Query?**

- **Built-in caching**: Reduces unnecessary API calls
- **Infinite scrolling**: Perfect for photo galleries
- **Background updates**: Keeps data fresh automatically
- **Error handling**: Robust error states and retry logic
- **DevTools**: Excellent debugging experience

### 4. **Form Management**

```typescript
// React Hook Form + Zod for validation
const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm<LoginData>({
  resolver: zodResolver(loginSchema),
});
```

**Why React Hook Form + Zod?**

- **Performance**: Minimal re-renders compared to controlled components
- **Type safety**: Full TypeScript integration with inferred types
- **Validation**: Runtime and compile-time validation
- **Developer experience**: Less boilerplate code

### 5. **Styling Strategy**

- **Tailwind CSS v4**: Latest version with improved performance
- **Component-based styles**: Reusable Button and Input components
- **Mobile-first**: Responsive design following Figma specifications
- **Utility classes**: Fast development with consistent spacing

### 6. **Type Safety**

```typescript
// Comprehensive interfaces for API responses
export interface Photo {
  id: number;
  photographer: string;
  src: PhotoSrc;
  // ... complete API type coverage
}
```

**Benefits:**

- **Compile-time error catching**: Prevents runtime bugs
- **Better IDE support**: Autocomplete and refactoring
- **Self-documenting code**: Types serve as documentation
- **Easier refactoring**: Safe changes across the codebase

## 🔄 Key Features Implementation

### Protected Routes

```typescript
const PrivateRoute = () => {
  const isLoggedIn = !!localStorage.getItem("token");
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};
```

### Infinite Scroll

- **Intersection Observer**: Detects when user scrolls near bottom
- **Automatic loading**: Fetches next page seamlessly
- **Loading states**: Visual feedback during data fetching

### Form Validation

- **Email validation**: Proper email format checking
- **Password requirements**: Minimum 6 characters
- **Real-time feedback**: Immediate error display

## 🚀 Production Readiness Improvements

If this were a production application, I would implement the following enhancements:

### Security

- **Environment variables**: Secure API key management
- **JWT authentication**: Proper token-based auth with refresh tokens

### Performance

- **Code splitting**: Route-based and component-based lazy loading
- **Image optimization**: WebP format, responsive images, lazy loading
- **Bundle analysis**: Optimize package sizes

### Testing

- **Unit tests**: Jest + React Testing Library for components
- **Integration tests**: User flow testing
- **E2E tests**: Cypress or Playwright for critical paths

### User Experience

- **Loading skeletons**: Better perceived performance
- **Push notifications**: User engagement
- **Internationalization**: Multi-language support
- **Dark mode**: User preference support

## 📱 Mobile Responsiveness

The application is fully responsive with:

- **Flexible layouts**: Grid and flexbox for various screen sizes
- **Touch-friendly**: Proper touch targets (44px minimum)
- **Viewport optimization**: Proper meta viewport configuration
- **Performance**: Optimized for mobile networks

## 🤝 Contributing

This project follows standard React development practices:

- **ESLint**: Code quality enforcement
- **TypeScript**: Type checking
- **Prettier**: Code formatting (recommended)
- **Conventional commits**: Clear commit messages
