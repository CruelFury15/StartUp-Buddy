# Implementation Guide for Requested Features

## Summary of Requirements

1. **Merge Risk Assessment with Financial Advisor** ✓ (Completed in App.tsx)
2. **Design interactive pages for Financial Advisor buttons**
3. **Design Runway Calculator according to README**
4. **Design Co-founder Report pages with interactivity**
5. **Persist chat messages between Ask AI Mentor and AI Mentor page** ✓ (ChatContext created)
6. **Add "Start New Chat" button to both chatbots** 
7. **Design Settings page with Profile, Security, and inline options**

## Completed Changes

### 1. Chat Context (Shared Messages)
- Created `frontend/src/contexts/ChatContext.tsx`
- Provides shared message state across all chat interfaces
- Messages persist when switching between floating chatbot and Mentor page

### 2. Merged Risk Assessment with Financial Advisor
- Updated App.tsx to route both 'risk' and 'financial' to FinancialRunway page
- Updated page title to "Financial Advisor & Risk Assessment"

## Files That Need Updates

### Priority 1: Chat Components
**File**: `frontend/src/components/Chatbot.tsx`
- Import and use `useChat()` hook
- Add "Start New Chat" button in header
- Replace local messages state with context

**File**: `frontend/src/pages/Mentor.tsx` (ChatbotPage component)
- Import and use `useChat()` hook  
- Add "Start New Chat" button
- Replace local messages state with context

### Priority 2: Financial Runway Page
**File**: `frontend/src/pages/FinancialRunway.tsx`
- Add Risk Assessment section (merge from RiskAssessment.tsx)
- Add interactive buttons:
  - "Run Scenario Analysis" - opens modal with different scenarios
  - "Export Report" - downloads financial data
  - "Schedule Consultation" - opens contact form
  - "Calculate Break-Even" - shows break-even analysis

### Priority 3: Runway Calculator
**File**: `frontend/src/pages/RunwayPage.tsx`
- Enhance with revenue projections
- Add milestone tracking
- Add funding round calculator
- Interactive charts for different scenarios

### Priority 4: Co-Founder Page
**File**: `frontend/src/pages/CoFounderPage.tsx`
- Add "Find Co-Founders" button - opens matching interface
- Add "Assessment Quiz" button - personality/skills quiz
- Add "Compatibility Calculator" - input two profiles, show match %
- Add "Save Profile" button - saves co-founder preferences

### Priority 5: Settings Page
**File**: `frontend/src/pages/Settings.tsx`
- Create Profile Settings modal/section
- Create Security Settings modal/section
- Add inline toggles for:
  - Email notifications
  - Push notifications
  - Newsletter subscription
  - Data sharing preferences
  - Auto-save settings

## Implementation Steps

### Step 1: Update Chatbot.tsx
```typescript
import { useChat } from '../contexts/ChatContext';

export function Chatbot() {
  const { messages, addMessage, clearMessages } = useChat();
  // Remove local messages state
  // Update sendMessage to use addMessage
  // Add clear button in header
}
```

### Step 2: Update Mentor.tsx ChatbotPage
```typescript
function ChatbotPage({ onBack }: { onBack: () => void }) {
  const { messages, addMessage, clearMessages } = useChat();
  // Same changes as Chatbot.tsx
}
```

### Step 3: Enhance FinancialRunway.tsx
- Keep existing runway simulator
- Add Risk Assessment section below
- Add action buttons with modals/functionality

### Step 4: Enhance RunwayPage.tsx
- Add revenue input fields
- Add milestone markers on timeline
- Add funding round scenarios

### Step 5: Enhance CoFounderPage.tsx
- Add interactive buttons
- Create modal components for each feature

### Step 6: Redesign Settings.tsx
- Create modal components for Profile and Security
- Add inline settings with toggles
- Keep theme toggle as is

## Key Components to Create

1. **ScenarioModal.tsx** - For financial scenarios
2. **CoFounderMatchModal.tsx** - For co-founder matching
3. **ProfileSettingsModal.tsx** - For profile editing
4. **SecuritySettingsModal.tsx** - For security settings
5. **AssessmentQuiz.tsx** - For co-founder assessment

## Testing Checklist

- [ ] Chat messages persist between floating chatbot and Mentor page
- [ ] "Start New Chat" clears messages in both interfaces
- [ ] Financial Advisor shows both runway and risk assessment
- [ ] All interactive buttons work and show appropriate UI
- [ ] Settings page has working Profile and Security sections
- [ ] All modals open and close properly
- [ ] Theme persists across all new components

## Notes

- All new components should support dark/light theme
- Use Framer Motion for animations
- Follow existing design patterns
- Ensure mobile responsiveness
- Add proper TypeScript types
