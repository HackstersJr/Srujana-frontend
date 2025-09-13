# 🎨 Orb Customization Guide

## 🎯 Quick Settings Location

All orb customization settings are in: `/src/components/AIChat.tsx` around **line 120**

```tsx
<Orb
  hoverIntensity={isListening ? 0.8 : (isTyping ? 0.5 : 0.3)}
  rotateOnHover={true}
  hue={isListening ? 0 : 200} // ← CHANGE COLORS HERE
  forceHoverState={isListening || isTyping}
/>
```

## 🌈 Color Settings (Hue Values)

### Current Setup:
- **Mic Mode (Listening)**: `hue={0}` = Red
- **Chat Mode (Normal/Typing)**: `hue={200}` = Cyan/Blue

### Color Options:
```tsx
hue={0}    // Red (current mic mode)
hue={30}   // Orange  
hue={60}   // Yellow
hue={120}  // Green
hue={180}  // Cyan
hue={200}  // Light Blue (current chat mode)
hue={240}  // Blue
hue={270}  // Purple
hue={300}  // Magenta
hue={330}  // Pink
```

## ⚡ Animation Intensity Settings

### Current Setup:
```tsx
hoverIntensity={
  isListening ? 0.8 :     // High intensity when mic active
  (isTyping ? 0.5 : 0.3)  // Medium when typing, low when idle
}
```

### Intensity Options:
- `0.1` = Very subtle
- `0.3` = Gentle (current idle)
- `0.5` = Moderate (current typing)
- `0.7` = Active
- `0.8` = High (current mic)
- `1.0` = Maximum

## 🎛️ Advanced Orb Settings

The orb component itself is in: `/src/components/ui/Orb.tsx`

### Key Properties You Can Modify:
```tsx
// In AIChat.tsx, you can add these props:
<Orb
  hoverIntensity={0.5}      // Animation strength
  rotateOnHover={true}      // Enable rotation
  hue={200}                 // Color (0-360)
  forceHoverState={false}   // Force active state
  
  // Additional props you can add:
  speed={1.0}              // Animation speed multiplier
  scale={1.0}              // Size multiplier
  opacity={0.8}            // Transparency
/>
```

## 🔧 Easy Customization Examples

### Make it Purple in Chat Mode:
```tsx
hue={isListening ? 0 : 270}  // Red when mic, purple when chat
```

### Make it More Reactive:
```tsx
hoverIntensity={isListening ? 1.0 : (isTyping ? 0.7 : 0.2)}
```

### Change Typing Trigger Duration:
In the `onChange` handler (around line 155):
```tsx
setTimeout(() => setIsTyping(false), 2000);  // 2 seconds instead of 1
```

## 🎨 Text Color Settings

### Current Text Colors:
- **Chat Messages**: `text-gray-100` (light gray)
- **Input Text**: `color: '#f3f4f6'` (light gray)
- **Listening Overlay**: `text-gray-100` (light gray)

### To Change Text Colors:
1. **Chat messages** (line ~135): Change `text-gray-100` to:
   - `text-white` = Pure white
   - `text-gray-200` = Lighter gray
   - `text-blue-100` = Light blue tint

2. **Input text** (line ~160): Change `color: '#f3f4f6'` to:
   - `'#ffffff'` = Pure white
   - `'#e5e7eb'` = Light gray
   - `'#dbeafe'` = Light blue

## 🚀 Pro Tips

1. **Test Colors**: Change hue values in increments of 30 for distinct colors
2. **Smooth Transitions**: Keep intensity differences reasonable (0.2-0.3 apart)
3. **Performance**: Higher intensity values use more GPU resources
4. **Accessibility**: Ensure text colors have good contrast

## 📍 Exact File Locations

- **Main Settings**: `/src/components/AIChat.tsx` (lines 120-125)
- **Orb Component**: `/src/components/ui/Orb.tsx` (for advanced tweaks)
- **Typing Animation**: `/src/components/AIChat.tsx` (lines 155-160)
- **Text Styling**: `/src/components/AIChat.tsx` (lines 135, 160, 185)

Happy customizing! 🎉
