# QUICK REFERENCE - Theme Integration

## Current Status ✅

| File | Status | Lines | Notes |
|------|--------|-------|-------|
| ProjectDetails.jsx | ✅ MERGED | 246 | Dark/Light conditional rendering |
| Navbar.jsx | ✅ MERGED | 261 | Top navbar vs side navbar |
| ThemeContext.jsx | ✅ CREATED | ~50 | Global state + localStorage |
| App.jsx | ✅ UPDATED | - | Wrapped with ThemeProvider |

---

## How Theme Switching Works

### User Click
```
Click Sun/Moon Button in Navbar
        ↓
toggleTheme() called
        ↓
isDarkMode state flips (true ↔ false)
        ↓
localStorage updated
        ↓
All components re-render
        ↓
Theme visually updates instantly
```

### Component Example
```jsx
const { isDarkMode } = useTheme();

return (
  <>
    {isDarkMode ? <DarkVersion /> : <LightVersion />}
  </>
);
```

---

## Dark Mode (Default) - System Theme

**Theme Settings**
```
isDarkMode = true
Background: #07131d
Accent: #C2A878 (Gold)
Navigation: Top horizontal navbar
Components: FloatingShapes, grid lines
```

**What You See**
- Dark tech aesthetic
- Grid background lines
- Gold accent colors
- Top fixed navbar
- Mobile menu overlay from right
- Corner borders on images
- Techy typography

---

## Light Mode - Creative Theme

**Theme Settings**
```
isDarkMode = false
Background: #FDFBF7 (with felt.png texture)
Accent: #FFB7C5 (Pink), #BDE0FE (Blue)
Navigation: Left vertical sidebar
Components: Washi tape, organic shapes
```

**What You See**
- Warm humanized aesthetic
- Felt texture background
- Pink/blue accent colors
- Left vertical sidebar (desktop only)
- Hidden on mobile
- Washi tape on images
- Friendly typography

---

## File Structure

```
src/
├── App.jsx
│   └── Wrapped with <ThemeProvider>
│
├── context/
│   └── ThemeContext.jsx
│       ├── useState: isDarkMode (default: true)
│       ├── localStorage persistence
│       └── useTheme hook export
│
└── components/
    ├── Navbar.jsx ✅
    │   ├── Dark: Top navbar + mobile menu
    │   └── Light: Left sidebar (lg only)
    │
    ├── ProjectDetails.jsx ✅
    │   ├── Dark: Grid lines + corner borders
    │   └── Light: Felt texture + washi tape
    │
    ├── Hero.jsx (NEXT)
    ├── About.jsx (NEXT)
    ├── Projects.jsx (NEXT)
    ├── Skills.jsx (NEXT)
    └── ... other components
```

---

## Color Palettes at a Glance

### Dark Mode Colors
```
#07131d   - Main background
#0d1b27   - Card background
#E8EAEF   - Light text
#C9CCD3   - Secondary text
#C2A878   - Gold accent
white/10  - Borders
```

### Light Mode Colors
```
#FDFBF7   - Main background (+ felt.png)
#FFFFFF   - White cards
#4A4E69   - Dark text
#BDE0FE   - Blue accent
#FFB7C5   - Pink accent
#FFD6BA   - Peach accent
gray-200  - Borders
```

---

## Responsive Breakpoints

### Dark Mode Navbar
```
Mobile (default)    → Hamburger menu (FaBars)
md:                 → Full horizontal navbar
Tablet/Desktop      → All features visible
```

### Light Mode Navbar
```
Mobile (default)    → Hidden (no mobile menu)
md:                 → Still hidden
lg:                 → Visible vertical sidebar
```

### ProjectDetails
```
Mobile (default)    → Stacked layout
md:                 → 2-column
lg:                 → 3-column (2/3 + 1/3 sidebar)
```

---

## Implementation Pattern for New Components

### Step 1: Add Hook
```jsx
import { useTheme } from "../context/ThemeContext";

// Inside component:
const { isDarkMode } = useTheme();
```

### Step 2: Add Conditional
```jsx
return (
  <>
    {isDarkMode ? (
      /* DARK VERSION */
    ) : (
      /* LIGHT VERSION */
    )}
  </>
);
```

### Step 3: For Simple Color Changes (Optional)
Use Tailwind dark: utilities:
```jsx
className="bg-white dark:bg-[#0d1b27] text-black dark:text-white"
```

---

## What's Already Done ✅

1. **ThemeContext** created with:
   - Global isDarkMode state
   - toggleTheme() function
   - localStorage persistence
   - useTheme() hook

2. **App.jsx** wrapped with:
   - `<ThemeProvider>` at top level

3. **Navbar.jsx** includes:
   - Dark mode: horizontal top navbar
   - Light mode: vertical side navbar
   - Theme toggle buttons
   - Mobile menu for dark mode only

4. **ProjectDetails.jsx** includes:
   - Dark mode: grid lines + technical styling
   - Light mode: felt texture + card layout
   - Responsive design for both
   - Working gallery in both modes

---

## What Still Needs Integration

- [ ] Hero.jsx
- [ ] About.jsx
- [ ] Projects.jsx
- [ ] Skills.jsx
- [ ] Experience.jsx
- [ ] Contact.jsx
- [ ] Footer.jsx
- [ ] LoadingScreen.jsx
- [ ] Certifications.jsx (if used)

**Timeline**: Each component typically takes 15-30 minutes to merge

---

## Testing the Theme

### Quick Test
1. Open app (should show dark mode)
2. Click sun ☀️ icon in top navbar
3. Should switch to light mode with left sidebar
4. Click moon 🌙 icon
5. Should return to dark mode
6. Refresh page → preference persists

### What To Check
- [ ] Colors match palette
- [ ] Text is readable
- [ ] Navigation works in both modes
- [ ] Responsive on mobile for each theme
- [ ] Theme toggle buttons visible and clickable
- [ ] No console errors

---

## Key Files to Reference

```
📄 MERGE_SUMMARY.md
   ↳ High-level overview of changes

📄 MERGED_CODE_DETAILED.md
   ↳ Complete code listings for both files

📄 THEME_STRUCTURE_GUIDE.md
   ↳ Visual structure comparisons

📄 COMPLETION_REPORT.md
   ↳ Detailed status report

📄 QUICK_REFERENCE.md (this file)
   ↳ Quick lookup guide
```

---

## Common Patterns Used

### Navigation Scrolling
**Dark Mode**:
```jsx
const scrollToSection = (id) => {
  // Navigate home if on detail page
  // Then scroll to section
};
```

**Light Mode**:
```jsx
const handleScroll = (e, id) => {
  e.preventDefault();
  // Direct scroll + history update
};
```

### Styling Approach
**Template Literals** (for layout differences):
```jsx
className={`
  base-classes
  ${isDarkMode ? "dark-specific" : "light-specific"}
`}
```

**Tailwind dark:** (for simple color swaps):
```jsx
className="text-black dark:text-white"
```

---

## Important Notes

1. **Default Theme**: Dark mode (`isDarkMode = true`) is the default
2. **Persistence**: Theme preference saved to localStorage
3. **Global**: All components access theme via `useTheme()` hook
4. **No Duplicates**: Single component, conditional rendering (not separate files)
5. **Responsive**: Both themes handle mobile → tablet → desktop

---

## Quick Debugging

### Theme Not Changing?
- Check ThemeContext import
- Verify `useTheme()` hook call
- Check localStorage in DevTools

### Colors Wrong?
- Verify hex color codes match palette
- Check dark: prefix on Tailwind classes
- Ensure conditional classes are correct

### Mobile Menu Not Appearing?
- Check md:hidden on nav elements
- Verify mobileMenuOpen state
- Check z-index (should be z-40 for menu)

### Sidebar Not Showing in Light Mode?
- Check lg:flex on navbar
- Light mode navbar is hidden below lg breakpoint
- Normal on desktop, hidden on mobile/tablet

---

## Success Criteria Met ✅

- ✅ Dark mode is default (isDarkMode = true)
- ✅ Light mode accessible via toggle buttons
- ✅ Theme persists on page refresh
- ✅ ProjectDetails has full dual-theme support
- ✅ Navbar has structurally different layouts
- ✅ All colors match provided palettes
- ✅ Responsive design working
- ✅ Zero syntax errors
- ✅ Documentation complete

---

## Next Steps

1. Provide remaining component codes from Creative version
2. For each component, apply the integration pattern
3. Test theme toggle after each merge
4. Deploy to GitHub Pages

**Estimated time for remaining components**: 2-3 hours total

