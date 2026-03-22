# 🎬 How to Add Your Videos to Tharde's Portfolio

## Quick Summary
Your portfolio now supports **YouTube videos** (perfect for large files!) and regular MP4 files.

---

## 📹 Option 1: YouTube (Recommended for Large Videos)

### Step 1: Upload to YouTube
1. Go to [YouTube Studio](https://studio.youtube.com)
2. Click **"Create"** → **"Upload video"**
3. Select your video file
4. **Important:** Set visibility to **"Unlisted"** (not Public, not Private)
5. Wait for upload to complete

### Step 2: Get Your Video ID
After upload, your video URL will look like:
```
https://www.youtube.com/watch?v=ABC123xyz
```
Copy the **Video ID**: `ABC123xyz` (the part after `v=`)

### Step 3: Convert to Embed URL
Change it to:
```
https://www.youtube.com/embed/ABC123xyz
```

### Step 4: Update Your Code on GitHub
1. Go to your GitHub repo
2. Click on `src/App.tsx`
3. Click the **pencil icon** ✏️ to edit
4. Find the `sampleVideos` array (around line 6-15)
5. Add your video like this:

```typescript
const sampleVideos = [
  // Your existing videos...
  { id: '7', title: 'My Awesome Video', url: 'https://www.youtube.com/embed/ABC123xyz', isYoutube: true },
  { id: '8', title: 'Another Project', url: 'https://www.youtube.com/embed/DEF456abc', isYoutube: true },
];
```

6. Click **"Commit changes"**

### Step 5: Wait for Vercel to Update
Vercel will automatically rebuild your site (~30 seconds). Your new videos will appear!

---

## 📁 Option 2: Direct MP4 Files (For Small Videos <50MB)

If you have small videos, you can host them directly:

1. Upload your video to a file host (Google Drive, Dropbox, etc.)
2. Get the **direct link** (must end in `.mp4`)
3. Add to your code:

```typescript
{ id: '9', title: 'My Video', url: 'https://example.com/video.mp4', isYoutube: false },
```

---

## 🎯 Example: Complete sampleVideos Array

```typescript
const sampleVideos = [
  { id: '1', title: 'Creative Edit 01', url: 'https://www.youtube.com/embed/VIDEO_ID_1', isYoutube: true },
  { id: '2', title: 'Music Video', url: 'https://www.youtube.com/embed/VIDEO_ID_2', isYoutube: true },
  { id: '3', title: 'Commercial', url: 'https://www.youtube.com/embed/VIDEO_ID_3', isYoutube: true },
  { id: '4', title: 'Short Film', url: 'https://www.youtube.com/embed/VIDEO_ID_4', isYoutube: true },
  { id: '5', title: 'Brand Story', url: 'https://www.youtube.com/embed/VIDEO_ID_5', isYoutube: true },
];
```

---

## ✅ Checklist

- [ ] Upload video to YouTube as "Unlisted"
- [ ] Copy the Video ID from the URL
- [ ] Convert to embed format: `https://www.youtube.com/embed/VIDEO_ID`
- [ ] Edit `src/App.tsx` on GitHub
- [ ] Add video to `sampleVideos` array with `isYoutube: true`
- [ ] Commit changes
- [ ] Wait for Vercel to rebuild
- [ ] Refresh your website!

---

## 🆘 Troubleshooting

**Video not showing?**
- Make sure you added `isYoutube: true` for YouTube videos
- Check that the URL is `https://www.youtube.com/embed/VIDEO_ID` (not `/watch?v=`)
- Wait 30 seconds for Vercel to rebuild

**Video shows but doesn't play?**
- Make sure the YouTube video is set to "Unlisted" (not "Private")
- Try refreshing the page

**Need help?**
- Check your Vercel deployment logs for errors
- Make sure you committed the changes on GitHub

---

## 🎉 That's It!

Now you can add unlimited videos to your portfolio without any file size limits! Just upload to YouTube and update your code.

**Your portfolio URL:** https://your-username.vercel.app
**Upload page:** https://your-username.vercel.app/upload (for reference)
