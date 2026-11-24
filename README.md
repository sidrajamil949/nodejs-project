# CodeGig 💼💻

**CodeGig** is a full-stack job board web application built for software developers and coders. It allows users to browse available coding gigs/jobs, post new gig opportunities with requirements and budgets, and search for gigs by specific technologies (e.g., JavaScript, React, Node.js, Python).

---

## 🚀 Features & Functionality

1. **Landing Page (`/`)**:
   - Welcome banner with a quick search bar to immediately look up coding gigs by programming language or tech stack.
   - Clean, modern landing page layout.

2. **Browse All Gigs (`/gigs`)**:
   - Lists all posted jobs retrieved from PostgreSQL database via Sequelize ORM.
   - Shows job title, description, required technologies, budget, and a direct "Apply Now" mailto button linking to the employer's contact email.

3. **Post a New Gig (`/gigs/add`)**:
   - Form to submit new job listings.
   - Includes input validation:
     - Title, technologies, description, and contact email are required.
     - Budget is optional (defaults to "Unknown" or formats with `$` symbol).
     - Technologies are automatically formatted (lowercased and spaces stripped).
   - Dynamic error messaging if any required field is missing.

4. **Search Functionality (`/gigs/search?term=...`)**:
   - Case-insensitive search matching technology keywords (`Op.iLike`).
   - Renders matching gigs dynamically.

5. **Automated Database Table Sync**:
   - Automatically initializes and creates the `gigs` table in PostgreSQL upon startup using `Gig.sync()`.

---

## 🛠️ Tech Stack

- **Backend**: [Node.js](https://nodejs.org/), [Express.js](https://expressjs.com/) (v5)
- **Templating Engine**: [express-handlebars](https://github.com/express-handlebars/express-handlebars)
- **Database**: [PostgreSQL](https://www.postgresql.org/)
- **ORM**: [Sequelize](https://sequelize.org/) (v6) with `pg` & `pg-hstore`
- **Development Tooling**: [Nodemon](https://nodemon.io/) for live server reloading

---

## 📁 Project Structure

```text
codegig/
├── config/
│   └── database.js          # Sequelize connection configuration
├── models/
│   └── Gig.js               # Gig Sequelize model definition & sync
├── public/
│   ├── css/
│   │   └── style.css        # Stylesheet for UI & layouts
│   └── images/              # Static assets & background images
├── routes/
│   └── gigs.js              # Routing & controller logic for /gigs
├── views/
│   ├── layouts/
│   │   ├── landing.handlebars # Hero layout for home page
│   │   └── main.handlebars    # Standard layout with header & navigation
│   ├── add.handlebars       # Post new gig form
│   ├── error.handlebars     # Error page template
│   ├── gigs.handlebars      # Gig listings & search results
│   └── index.handlebars     # Home/landing search view
├── app.js                   # Application entry point & server setup
├── package.json             # Dependencies & scripts
└── README.md                # Project documentation
```

---

## ⚙️ Prerequisites & Setup

### 1. PostgreSQL Database Setup

Ensure PostgreSQL is installed and running on your machine (default port: `5432`).

Open **SQL Shell (psql)** or **pgAdmin** and run:

```sql
CREATE DATABASE codegig;
```

### 2. Configure Database Credentials

By default, the application connects using credentials in `config/database.js`:
- **Database Name**: `codegig`
- **User**: `postgres`
- **Password**: `abcd`
- **Host**: `localhost`
- **Port**: `5432`

You can update `config/database.js` directly with your actual PostgreSQL password, or supply environment variables when running:

```powershell
# Windows PowerShell example:
$env:DB_PASS="your_postgres_password"
$env:DB_USER="postgres"
$env:DB_NAME="codegig"
```

---

## 🏃 How to Run

### 1. Navigate to the project directory:
```bash
cd codegig
```

### 2. Install dependencies (if not already installed):
```bash
npm install
```

### 3. Start the application:

#### Development mode (auto-reload with Nodemon):
```bash
npm run dev
```

#### Production / Standard mode:
```bash
npm start
```

### 4. Open in browser:
Navigate to:
```
http://localhost:3000
```

---

## 🛣️ Application Endpoints

| Method | Route | Description |
|---|---|---|
| `GET` | `/` | Home / Landing page with search bar |
| `GET` | `/gigs` | View all posted gigs |
| `GET` | `/gigs/add` | Form to create and publish a new gig |
| `POST` | `/gigs/add` | Submit form and save new gig to PostgreSQL |
| `GET` | `/gigs/search?term=<query>` | Filter gigs matching technology keyword |
