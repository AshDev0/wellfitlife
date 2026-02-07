# 📝 Blog Posts Management Guide

Welcome to the WellFitLife blog posts system! This guide will help you add, edit, and manage blog posts efficiently.

---

## 📁 Folder Structure

```
src/data/posts/
├── fitness/           # Fitness-related posts
├── diet/              # Diet & nutrition posts
├── wellness/          # Wellness & lifestyle posts
├── _POST_TEMPLATE.js  # Template for new posts
├── index.js           # Auto-loader (don't edit manually)
└── README.md          # This file
```

---

## ✨ Adding a New Post

### Step 1: Choose Category
Determine which category your post belongs to:
- **Fitness**: Workouts, exercises, training guides
- **Diet**: Nutrition, meal plans, recipes
- **Wellness**: Mental health, lifestyle, yoga, sleep

### Step 2: Copy Template
1. Copy `_POST_TEMPLATE.js`
2. Paste into the appropriate category folder
3. Rename to match your post slug (e.g., `my-awesome-post.js`)

### Step 3: Fill in Details

#### Required Fields:
```javascript
{
  id: "26",                    // Next available ID (check existing posts)
  title: "Your Post Title",    // 50-60 characters ideal
  slug: "your-post-slug",      // URL-friendly, lowercase-with-hyphens
  excerpt: "Short desc...",    // 120-150 characters for SEO
  category: "Fitness",         // Must match folder: Fitness, Diet, or Wellness
  publishedDate: "2025-12-30", // Format: YYYY-MM-DD
  readingTime: "8 min read",   // Estimate: ~200 words = 1 min
  tags: ["tag1", "tag2"],      // 3-5 tags, lowercase-with-hyphens
  featured: false,             // Set true to feature on homepage
  metaDescription: "...",      // SEO description (150-160 chars)
  metaKeywords: "..."          // Comma-separated keywords
}
```

### Step 4: Add to Auto-Loader
Open `index.js` and add your import:

```javascript
// Example for fitness post
import myAwesomePost from './fitness/my-awesome-post.js';

// Add to newPosts array
const newPosts = [
  muscleBuildingHome,
  officeWorkersFitness,
  myAwesomePost  // Add your post here
];
```

### Step 5: Test
1. Run `npm run dev`
2. Navigate to `/blog`
3. Verify your post appears
4. Check individual post page: `/blog/your-post-slug`

---

## 📊 Post ID Management

**Current Posts:** 25 (as of Dec 30, 2025)

**Next Available ID:** 26

**Finding Next ID:**
```bash
# Count existing posts
ls -R fitness/ diet/ wellness/ | grep .js | wc -l

# Or check index.js for highest ID
```

---

## 🎨 Content Formatting Guide

### HTML Structure
All content goes in the `content` template literal with HTML:

```javascript
content: `
  <div class="space-y-8">
    <section class="bg-blue-50 p-6 rounded-xl">
      <h2 class="text-2xl font-bold text-gray-800 mb-4">Section Title</h2>
      <p class="text-gray-700">Your content...</p>
    </section>
  </div>
`
```

### Available Color Themes
```javascript
// Background colors
bg-blue-50    // Light blue
bg-green-50   // Light green
bg-yellow-50  // Light yellow
bg-red-50     // Light red
bg-purple-50  // Light purple
bg-orange-50  // Light orange

// Border colors (use with border-l-4)
border-blue-500
border-green-500
border-purple-500
// ... etc
```

### Common Components

#### Info Box
```html
<div class="bg-white p-4 rounded-lg shadow-sm">
  <h3 class="font-bold text-blue-700 mb-2">Title</h3>
  <p class="text-gray-700">Content</p>
</div>
```

#### Bullet List
```html
<ul class="space-y-2 text-gray-700 ml-4">
  <li>• Point 1</li>
  <li>• Point 2</li>
</ul>
```

#### Table
```html
<table class="min-w-full bg-white rounded-lg shadow">
  <thead class="bg-blue-500 text-white">
    <tr>
      <th class="px-4 py-3 text-left">Column 1</th>
      <th class="px-4 py-3 text-left">Column 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="px-4 py-3">Data 1</td>
      <td class="px-4 py-3">Data 2</td>
    </tr>
  </tbody>
</table>
```

---

## 🖼️ Images

### Default Image
```javascript
import hero1 from "../../../../public/images/hero-fitness-girl.webp";

// In post object
image: hero1
```

### Custom Image
1. Add image to `/public/images/`
2. Import in your post file:
```javascript
import myImage from "../../../../public/images/my-custom-image.webp";
image: myImage
```

---

## 🏷️ Tags Best Practices

**Good Tags:**
- `weight-loss-tips` ✅
- `home-workout-beginner` ✅
- `indian-diet-plan` ✅

**Bad Tags:**
- `Weight Loss Tips` ❌ (use lowercase-with-hyphens)
- `workout` ❌ (too generic)
- `tips-for-losing-weight-at-home-quickly` ❌ (too long)

**Rules:**
- 3-5 tags per post
- Lowercase with hyphens
- Specific, not generic
- Relevant to content

---

## 📈 SEO Guidelines

### Title (50-60 chars)
✅ Good: "How to Build Muscle at Home Without Gym (Complete Guide)"
❌ Bad: "Muscle Building"

### Excerpt (120-150 chars)
✅ Good: "Complete guide to building muscle at home. Includes workout plans, diet tips, and recovery strategies for beginners."
❌ Bad: "Learn about muscle building."

### Meta Description (150-160 chars)
✅ Good: "Step-by-step guide to building muscle at home without equipment. Includes bodyweight exercises, meal plans, and proven strategies for muscle growth."

### Keywords
✅ Good: "build muscle home, bodyweight exercises, home workout muscle gain"
❌ Bad: "fitness, workout, health, tips"

---

## 🔄 Editing Existing Posts

1. Navigate to category folder
2. Open the post file
3. Make your changes
4. Save
5. Test in browser

**No need to edit index.js** - changes are automatic!

---

## 🚀 Quick Checklist

Before publishing a new post:

- [ ] Post file created in correct category folder
- [ ] Unique ID assigned (next available number)
- [ ] URL-friendly slug (no spaces, special chars)
- [ ] Title is compelling (50-60 chars)
- [ ] Excerpt is descriptive (120-150 chars)
- [ ] Content is well-formatted with sections
- [ ] Reading time estimated accurately
- [ ] 3-5 relevant tags added
- [ ] Meta description written (150-160 chars)
- [ ] Keywords added
- [ ] Image assigned (hero1 or custom)
- [ ] Post added to index.js newPosts array
- [ ] Tested in browser (/blog and individual page)

---

## 🎯 Current Stats

**Total Posts:** 25
- Fitness: 9 posts (IDs: 1, 5, 7, 11, 12, 14, 15, 19, 24)
- Diet: 13 posts (IDs: 2, 3, 4, 6, 8, 9, 10, 13, 16, 17, 18, 22, 23)
- Wellness: 3 posts (IDs: 20, 21, 25)

**Migration Status:** ✅ Complete
- All posts migrated to individual file format
- Legacy blogPosts.js no longer in use
- All 25 posts now in category folders

---

## 💡 Tips

1. **Copy-Paste:** Use existing posts as reference for formatting
2. **Word Count:** Aim for 1200-1800 words for good SEO
3. **Headers:** Use H2 for main sections, H3 for subsections
4. **Spacing:** Use `space-y-8` for section spacing
5. **Mobile:** All styles are mobile-responsive by default

---

## 🆘 Common Issues

### Post Not Showing
- ✅ Check ID is unique
- ✅ Verify post added to index.js
- ✅ Ensure category matches folder
- ✅ Clear browser cache

### Styling Broken
- ✅ Check for unclosed HTML tags
- ✅ Verify Tailwind class names are correct
- ✅ Ensure template literal backticks are proper

### Import Error
- ✅ Check file path in index.js
- ✅ Verify export default in post file
- ✅ Ensure no syntax errors in post file

---

## 📞 Need Help?

Check:
1. `_POST_TEMPLATE.js` - Working example
2. Existing posts - Reference implementations
3. This README - Complete guide

---

**Happy Blogging! 🎉**
