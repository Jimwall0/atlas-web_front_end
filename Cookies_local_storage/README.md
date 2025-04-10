# Cookies in Coding – General Outline

## I. Introduction to Cookies
- **Definition**: Small data files stored on the user's computer by the web browser.
- **Purpose**: Track, personalize, and save information about each user’s session.
- **Common Uses**:
  - Session management (e.g., login status)
  - Personalization (e.g., theme, language)
  - Tracking (e.g., analytics, ad targeting)

---

## II. How Cookies Work
- Stored in the browser; sent with HTTP requests to the server.
- Created using:
  - **Server-side languages** (e.g., PHP, Node.js)
  - **Client-side JavaScript**
- Contain:
  - Name-value pairs
  - Optional attributes (e.g., expiration, path, secure flag)

---

## III. Setting and Reading Cookies

### A. Client-Side (JavaScript)
```javascript
document.cookie = "username=JohnDoe; expires=Fri, 31 Dec 2025 23:59:59 GMT; path=/";
