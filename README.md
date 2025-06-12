# URL Shortener

A clean, modern, and secure full-stack web application for shortening URLs. Built with **Node.js**, **Express**, **MongoDB** on the backend and **vanilla HTML, CSS, and JavaScript** on the frontend. Includes comprehensive URL validation and a responsive design.

![URL Shortener Screenshot](https://github.com/NikhithaPatibandla/UrlShortener/blob/main/Url-Shortener-app.png)

---

## ✨ Features

### Core Functionality
- **URL Shortening**: Convert long URLs into short, shareable links via backend API
- **URL Redirection**: Visit short URLs and get redirected to original long URLs
- **One-Click Copy**: Copy shortened URLs to clipboard with visual feedback
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Real-time Validation**: Instant feedback on URL validity as you type
- **Persistent Storage**: URLs stored in MongoDB database

### Security & Validation
- **Comprehensive URL Validation**: Multi-layer validation system
- **Protocol Security**: Only allows HTTP/HTTPS protocols
- **Domain Validation**: Validates hostname format and structure
- **Length Limits**: Enforces URL length constraints (4-2048 characters)
- **Reachability Check**: Verifies if URLs are accessible

### User Experience
- **Modern UI**: Clean design with gradient backgrounds and smooth animations
- **Loading States**: Visual feedback during processing
- **Error Handling**: Clear, user-friendly error messages
- **Visual Validation**: Color-coded inputs with checkmark/X indicators
- **Accessibility**: Semantic HTML and proper ARIA labels

---

## 🛠 Tech Stack

| Layer     | Technology                    |
|-----------|-------------------------------|
| Frontend  | HTML, CSS, JavaScript         |
| Backend   | Node.js, Express.js           |
| Database  | MongoDB (local or Atlas)      |
| Utilities | nanoid, mongoose, cors        |

---

## 📁 File Structure

```
url-shortener/
├── client/
│   ├── index.html          # Main frontend UI
│   ├── style.css           # UI styling (optional separate file)
│   └── script.js           # Frontend logic (optional separate file)
│
├── server/
│   ├── index.js            # Express entry point
│   ├── models/
│   │   └── Url.js          # URL schema
│   └── routes/
│       └── shorten.js      # URL shorten and redirect logic
│
├── index.html              # Standalone frontend version
└── README.md               # This documentation
```

---

## ⚙️ Getting Started

### 📌 Prerequisites

- **Node.js & npm** (for backend)
- **MongoDB** (local installation or MongoDB Atlas)
- **Modern web browser** (Chrome 60+, Firefox 55+, Safari 12+, Edge 79+)

### 🚀 Quick Start Options

#### Option 1: Frontend Only (Standalone)
1. Download the `index.html` file
2. Open it in any modern web browser
3. Start shortening URLs immediately! (uses mock backend)

#### Option 2: Full-Stack Development

### 📦 Setup Steps

1. **Clone Repository**

```bash
git clone https://github.com/yourusername/url-shortener.git
cd url-shortener
```

2. **Start MongoDB**

- If using local MongoDB:
```bash
mongod
```

- Or set up MongoDB Atlas and get connection string

3. **Configure Environment**

Create `.env` file in server directory:
```env
MONGODB_URI=mongodb://localhost:27017/urlshortener
PORT=5000
BASE_URL=http://localhost:5000
```

4. **Run Backend**

```bash
cd server
npm install
node index.js
```

5. **Run Frontend**

```bash
cd ../client
# Open index.html in browser OR use Live Server
```

> The backend runs on `http://localhost:5000` by default

---

## 📋 Requirements

### Browser Support
- **Modern Browsers**: Chrome 60+, Firefox 55+, Safari 12+, Edge 79+
- **JavaScript**: ES6+ support required
- **Clipboard API**: For copy functionality (fallback provided)

### URL Requirements
- Must be a valid HTTP or HTTPS URL
- Domain must be publicly accessible
- Maximum length: 2048 characters
- No local/private IP addresses
- No malicious patterns or suspicious domains

---

## ✅ API Documentation

### Base URL
```
http://localhost:5000
```

### Endpoints

#### `POST /api/shorten`
Shorten a long URL

**Request Body:**
```json
{
  "originalUrl": "https://example.com/very/long/link"
}
```

**Response:**
```json
{
  "shortUrl": "http://localhost:5000/AbC123",
  "originalUrl": "https://example.com/very/long/link",
  "urlCode": "AbC123"
}
```

**Error Response:**
```json
{
  "error": "Invalid URL format"
}
```

#### `GET /:code`
Redirect to original URL

**Parameters:**
- `code`: The short URL code

**Response:**
- **302 Redirect** to original URL if code exists
- **404 Not Found** if code doesn't exist

---

## 🔧 Backend Integration

### Database Schema

```javascript
const urlSchema = new mongoose.Schema({
  originalUrl: {
    type: String,
    required: true
  },
  shortUrl: {
    type: String,
    required: true
  },
  urlCode: {
    type: String,
    required: true,
    unique: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});
```

### Environment Variables

```env
MONGODB_URI=your_mongodb_connection_string
PORT=5000
BASE_URL=http://localhost:5000
NODE_ENV=development
```

---

## 📋 Testing

### Manual Testing Checklist
- [ ] Valid URLs are accepted and shortened
- [ ] Invalid URLs show appropriate error messages
- [ ] Short URLs redirect correctly
- [ ] Copy functionality works across browsers
- [ ] Responsive design works on different screen sizes
- [ ] Loading states display correctly
- [ ] Error handling works for network issues
- [ ] Database operations work correctly

### Test URLs

#### ✅ Valid URLs
- `https://www.google.com`
- `http://example.com/path?query=value`
- `https://subdomain.example.org/page`

#### ❌ Invalid URLs
- `javascript:alert('xss')`
- `http://localhost:3000`
- `ftp://example.com`
- `not-a-valid-url`

---

## 🔮 Future Enhancements

Planned features for future versions:
- [ ] URL analytics and click tracking
- [ ] Custom short URL aliases
- [ ] QR code generation
- [ ] Bulk URL processing
- [ ] URL expiration dates
- [ ] Password protection
- [ ] User accounts and history
- [ ] API rate limiting
- [ ] Admin dashboard
- [ ] URL preview before redirect

---


