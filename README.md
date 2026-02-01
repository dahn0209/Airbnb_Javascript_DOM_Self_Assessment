# Airbnb Listings – AJAX Demo Page

This  dynamic Airbnb listings page was built using **HTML, CSS, Bootstrap 5, and vanilla JavaScript**.
It demonstrates loading external JSON data asynchronously using **JavaScript `fetch` with `async/await`**.

The page displays the **first 50 Airbnb listings** from a dataset and renders them as responsive cards.

---

## 🔗 Live Deployment

👉 **GitHub Pages:**
[https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPO_NAME/](https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPO_NAME/)


---

## 📦 Data Source

* Dataset: `airbnb_sf_listings_500.json`
* Loaded asynchronously using:

  * `fetch()`
  * `async / await`
* Only the **first 50 listings** are rendered using `.slice(0, 50)`

---

## ✨ Features Implemented

Each listing card displays:

* **Listing name**
* **Price per night**
* **Description**
* **Thumbnail image**
* **Amenities** (first few, parsed from JSON)
* **Host information**

  * Host name
  * Host profile photo

---

## Creative Additions

To differentiate this project from the base class example, the following enhancements were added:

* **Rating badge** using review score and number of reviews
* **“Superhost” badge** for qualifying hosts
* **Graceful image fallback** for missing/broken listing images
*  **Responsive card layout** using Bootstrap grid
*  **Description clamping** to keep cards visually consistent

---

##  Technologies Used

* HTML5
* CSS3
* Bootstrap 5
* Vanilla JavaScript (ES6+)
* AJAX via `fetch` and `async/await`
* GitHub Pages for deployment

---

##  Getting Started

Because this project uses `fetch()`, it must be served over HTTP.

### 1️⃣ Clone the repository

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME
```

---

###  Install dependencies (optional)

This project does not require any build tools, but you will need a simple HTTP server.

If you don’t already have one installed:

```bash
npm install -g http-server
```


---

### 3️⃣ Run the project

From the project root directory:

```bash
http-server
```

You should see output similar to:

```text
Starting up http-server, serving ./
Available on:
  http://127.0.0.1:8080
```

---

### 4️⃣ Open in your browser

Open:

```
http://localhost:8080
```

The Airbnb listings should load automatically.

---



## 👤 Author

**David Ahn**
