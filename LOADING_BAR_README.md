# Modern Loading Bar Component

A sleek, modern loading indicator that shows as a progress bar at the top of the page during Next.js routing.

## Features

- 🚀 **Automatic Detection**: Automatically detects navigation events
- 🎨 **Modern Design**: Sleek progress bar with shimmer animation
- ⚡ **Fast Performance**: Lightweight and optimized
- 🎯 **Smart Filtering**: Only triggers for internal navigation
- 🔧 **Customizable**: Configurable color, height, and spinner
- 📱 **Responsive**: Works on all device sizes

## Usage

The loading bar is already integrated into your app's root layout. It will automatically show during navigation.

### Basic Usage

```tsx
import LoadingBar from "../components/LoadingBar";

// In your layout or page component
<LoadingBar />;
```

### Customization

```tsx
<LoadingBar
  color="#ff6b6b" // Custom color (default: #007bff)
  height={4} // Bar height in pixels (default: 3)
  showSpinner={true} // Show spinner overlay (default: false)
/>
```

## How It Works

1. **Navigation Detection**: The component overrides Next.js router methods and listens for:

   - Programmatic navigation (`router.push`, `router.replace`, etc.)
   - Link clicks (internal links only)
   - Browser back/forward buttons

2. **Progress Simulation**: Shows realistic progress with random increments

3. **Smart Filtering**: Automatically ignores:
   - External links
   - Email links (`mailto:`)
   - Phone links (`tel:`)
   - Hash links (`#`)

## Testing

Visit `/test-loading` to test the loading bar functionality with various navigation scenarios.

## Styling

The component includes built-in CSS animations:

- **Shimmer Effect**: Moving highlight across the progress bar
- **Smooth Transitions**: Fluid width changes
- **Box Shadows**: Subtle depth and glow effects

## Browser Support

- ✅ Chrome/Edge (modern versions)
- ✅ Firefox (modern versions)
- ✅ Safari (modern versions)
- ✅ Mobile browsers

## Performance

- Minimal bundle size impact
- No external dependencies
- Efficient event handling
- Automatic cleanup on unmount
