# Features Dropdown Component

A React JSX component that replicates the DropCourse "Popular Features" dropdown exactly as specified.

## Features

- **Features Button**: Toggles the dropdown with a clean button design
- **Centered Dropdown**: 600px wide, white background, rounded corners, soft shadow
- **2-Column Grid**: 6 feature boxes with equal height and width
- **Consistent Styling**: ~90px tall cards with rounded corners and hover effects
- **Color-coded Icons**: Each feature has a distinct colored icon using lucide-react

## Features Included

1. **Courses** - "Premium courses built by experts" (Yellow icon)
2. **Communities** - "Instant 2k+ member community" (Yellow icon)  
3. **Landing Pages** - "Plug & play landing pages in 2 mins" (Red icon)
4. **Course Editor** - "Customise, white-label & make it yours" (Blue icon)
5. **Content Library** - "25k+ pre-edited videos to go viral" (Green icon)
6. **AI Instructors** - "Built-in AI course content assistants" (Purple icon)

## Usage

### 1. Import the component:
```jsx
import FeaturesDropdown from './components/FeaturesDropdown';
```

### 2. Use in your JSX:
```jsx
<FeaturesDropdown />
```

### 3. View the demo:
Navigate to `/features-demo` in your React app to see the component in action.

## Dependencies

- **React** (with hooks)
- **Tailwind CSS** (for styling)
- **lucide-react** (for icons)

## Styling

The component uses Tailwind CSS classes for:
- Responsive grid layout (`grid-cols-2`)
- Consistent spacing and padding
- Hover effects and transitions
- Color-coded backgrounds and icons
- Rounded corners and shadows

## Customization

You can easily customize the features by modifying the `features` array in the component:
- Change icons by importing different ones from lucide-react
- Modify colors using Tailwind color classes
- Update titles and descriptions
- Add or remove features (maintains 2-column grid)

## Demo

Visit `/features-demo` to see the component in action with a clean demo page.

