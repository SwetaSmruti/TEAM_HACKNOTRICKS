import pypandoc

content = r"""# ABTalks Redesign — AI Usage Prompts

This file documents the prompts used during the AI-assisted development of the ABTalks 60-Day Coding Challenge redesign.

## Prompt 1 — Initial Project Generation

Build a premium, mobile-first redesign of the ABTalks 60-Day Coding Challenge platform.

### Objective

Design and develop a modern, polished, mobile-first experience for Indian college students participating in a 60-day coding challenge.

The platform should help students:
- Choose a coding track
- Complete a daily coding task
- Submit a GitHub commit
- Submit a LinkedIn post
- Maintain a public learning streak
- Track challenge progress
- Build recruiter visibility

This is a UI/UX redesign challenge, not a production SaaS application.

### Required Routes

Implement exactly:

- `/`
- `/dashboard`
- `/day/12`

The application will primarily be evaluated at a 390px mobile viewport, so use a mobile-first approach.

### Technology Stack

Use:

- React
- Vite
- React Router DOM
- Tailwind CSS
- Framer Motion
- Lucide React
- Node.js
- Express.js

Use React Router with `BrowserRouter`, not `HashRouter`.

### Backend Constraints

Use Node.js + Express only as a lightweight mock API server.

Do NOT use:

- MongoDB
- MySQL
- PostgreSQL
- Firebase
- Supabase
- Prisma
- Sequelize
- Authentication
- Login
- Registration
- JWT
- Sessions
- User accounts
- Production database
- Payment gateway
- Admin panel
- Recruiter dashboard

All application data must be mocked.

Use local JSON files and mocked Express API responses.

### Mock APIs

Create endpoints such as:

- `GET /api/dashboard`
- `GET /api/day/12`
- `GET /api/leaderboard`
- `POST /api/submit`

The submission endpoint should return a mock success response and does not need to persist data.

### Landing Page `/`

Create a premium landing page that explains ABTalks to a student who has never heard of it.

Include:

- Hero section
- Strong challenge headline
- CTA
- Challenge statistics
- How it works
- Benefits
- Testimonials
- FAQ
- Footer

Core messaging:

"One Commit. One LinkedIn Post. Every Day."

The design should communicate trust, clarity, motivation, and consistency.

### Dashboard `/dashboard`

Include:

- Student greeting
- Avatar
- Current streak
- XP
- Level
- Rank
- Overall challenge progress
- Completion percentage
- Today's task
- Estimated time
- Deadline
- Achievements
- Recent activity
- Leaderboard preview
- Daily motivation
- Continue Challenge CTA

Handle edge cases:

- First day with no streak
- Missed day
- Empty profile
- Completed challenge
- No achievements
- Loading state
- Error state

### Challenge Day `/day/12`

Create a complete daily challenge experience.

Include:

- Day number
- Challenge title
- Difficulty
- Estimated time
- Description
- Learning objectives
- Requirements
- Deliverables
- Helpful tips/resources

Submission form:

- GitHub repository URL
- GitHub commit URL
- LinkedIn post URL
- Daily reflection
- Optional screenshot UI
- Submit button

After successful submission, display:

- Success animation
- XP earned
- Updated streak
- Completion state
- Continue to tomorrow CTA

### Thoughtful Feature

Implement at least one meaningful feature that improves the student experience.

Examples:

- AI Reflection Coach
- Daily Motivation
- Consistency Prediction
- XP rewards
- Focus timer
- Progress heatmap
- Weekly insights
- Recruiter visibility score

Choose the feature that best fits the product and implement it elegantly.

### Design Direction

Create a premium dark modern SaaS interface inspired by the quality and polish of products such as Linear, Vercel, GitHub, Notion, Stripe, Duolingo, and Raycast.

Do not copy their interfaces.

Use:

- Dark background
- Premium gradients
- Glass/soft surfaces
- Rounded cards
- Strong typography
- Subtle shadows
- Micro-interactions
- Smooth transitions
- Excellent spacing

Use Inter or Poppins.

Optimize the entire experience for 390px width.

### Code Quality

- Use reusable React components.
- Keep components modular.
- Separate UI and logic.
- Use Fetch API or Axios.
- Use mocked APIs only.
- Avoid unnecessary complexity.
- Keep the code easy to maintain.

Generate a complete project that can run locally with npm.

---

## Prompt 2 — Fix Hash-Based URLs

The application must use clean browser URLs.

Current behavior:

`http://localhost:5173/#/dashboard`

Required behavior:

`http://localhost:5173/dashboard`

Replace any `HashRouter` with `BrowserRouter`.

Do not use:

- `HashRouter`
- `createHashRouter`
- `window.location.hash`
- `#/dashboard`
- `navigate("#/dashboard")`

Use React Router navigation:

```tsx
const navigate = useNavigate();

navigate("/dashboard");
