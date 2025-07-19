## 📘 Project Overview

**TrackMint** is a full-stack custom SaaS analytics platform that allows users (primarily product managers, startup founders, and developers) to integrate their applications via APIs and track live usage metrics, custom events, and alerts for anomalies. The platform is affordable, scalable, and developer-friendly — designed to provide deep insights into product behavior without the costs associated with enterprise-level analytics tools.

---

## 🎯 Goals

* Build a custom analytics solution tailored to small- to mid-sized SaaS products.
* Provide plug-and-play API integrations for real-time metric ingestion.
* Offer an intuitive dashboard for data visualization, alerts, and insights.
* Demonstrate the capability to design scalable systems, real-time data processing, and secure, robust authentication systems.

---

## 🧱 Core Features

### 1. User Management

* User Registration & Login
* JWT Authentication (Access & Refresh tokens)
* User Roles (Admin, Developer, Viewer)
* API Key Generation per project

### 2. Project & API Key Management

* Users can create multiple projects
* Each project gets a unique API key
* API key rotation and deactivation support

### 3. Metric Ingestion API

* REST endpoint for sending custom events/metrics
* JSON schema validation
* Request limiting and rate limiting
* Metrics ingestion pipeline (async with Celery + Redis)

### 4. Dashboard Interface

* Real-time metric visualizations (charts, counters, line graphs)
* Metric filtering by event, time range, tags
* Project selector for multi-project support
* Dark/Light mode support

### 5. Custom Event Tracking

* Define custom events (e.g., `user_signup`, `button_click`)
* Attach custom properties (e.g., browser, country, user\_id)
* Event grouping and session tracking

### 6. Alerting & Anomaly Detection

* Define thresholds for metrics (e.g., > 50 signups/hour)
* Alert types: Email, Slack webhook, In-app
* Anomaly detection using Z-score or rolling average spikes
* Scheduled detection tasks (Celery beat)

### 7. Analytics & Reporting

* Session analytics (unique users, average session length)
* Funnel tracking (custom multi-step events)
* Retention and churn metrics
* Export reports (CSV, PDF)

### 8. Developer Tools

* SDKs or sample code snippets (JavaScript, Python)
* API documentation (Swagger/OpenAPI or Redoc)
* Webhooks for downstream actions (e.g., send data to external apps)

---

## 🧪 Tech Stack

| Component      | Tech Used                           |
| -------------- | ----------------------------------- |
| Backend        | Django, Django Rest Framework       |
| Auth           | JWT (djangorestframework-simplejwt) |
| Frontend       | React + Tailwind CSS                |
| DB             | PostgreSQL                          |
| Cache/Queue    | Redis + Celery                      |
| Task Scheduler | Celery Beat                         |
| API Docs       | Swagger/OpenAPI                     |
| Deployment     | Docker + Gunicorn + Nginx           |
| Monitoring     | Prometheus + Grafana                |

---

## 📈 Key Metrics to Track

* **DAU/WAU/MAU**: Daily/Weekly/Monthly Active Users
* **Custom Events**: Defined by the user (e.g., product usage, conversions)
* **Session Time**: Average session duration
* **Bounce Rate**: Users leaving after one event
* **Conversion Rate**: Percentage completing a defined funnel
* **Anomalies**: Spikes/dips in defined events or metrics

---

## 🧩 System Design

### Architecture

* React frontend (SPA) communicates via HTTPS with Django backend
* Django API supports event ingestion (via rate-limited POST)
* Events are pushed to Redis queue
* Celery worker ingests Redis jobs, stores data into PostgreSQL
* Periodic anomaly checks run via Celery Beat
* PostgreSQL stores users, events, projects, and metrics

### Services

* `auth-service`: Handles login, registration, and token management
* `event-service`: Accepts and validates metric/event ingestion
* `alert-service`: Triggers alerts via email or webhooks
* `dashboard-service`: Provides data for frontend visualizations

---

## 📌 API Design

### Authentication Endpoints

* `POST /api/register`
* `POST /api/login`
* `POST /api/token/refresh`

### Project Management

* `GET /api/projects/`
* `POST /api/projects/`
* `DELETE /api/projects/{id}`

### Metrics/Event Ingestion

* `POST /api/events/`

  ```json
  {
    "event": "user_signup",
    "timestamp": "2025-07-16T13:00:00Z",
    "properties": {
      "user_id": 123,
      "plan": "premium"
    }
  }
  ```

### Alerts

* `POST /api/alerts/`
* `GET /api/alerts/`

### Dashboard Data

* `GET /api/dashboard/summary`
* `GET /api/metrics?event=user_signup&range=7d`

---

## 🔐 Security Considerations

* Use HTTPS and secure cookies
* JWT access + refresh tokens with expiry
* Rate limiting and abuse prevention on metric endpoint
* API keys stored securely with hashing
* CORS, CSRF protection
* Admin access for project ownership controls

---

## 📆 Development Roadmap

### Phase 1: MVP (Month 1)

* ✅ User registration/login
* ✅ API key management and project creation
* ✅ Event ingestion backend
* ✅ Simple real-time dashboard

### Phase 2: Core Features (Month 2)

* 🔲 Custom event tracking
* 🔲 Alert configuration
* 🔲 Anomaly detection pipeline
* 🔲 Enhanced dashboard graphs

### Phase 3: Polishing & Launch (Month 3)

* 🔲 API documentation + SDK
* 🔲 User roles and permissions
* 🔲 Exporting & reporting
* 🔲 Deployment with Docker + monitoring stack

---

## 🧪 Testing Strategy

* Unit tests for all models, serializers, views
* Integration tests for API ingestion pipeline
* Frontend component tests (Jest)
* End-to-end tests using Cypress or Playwright
* Load testing ingestion API (locust)

---

## 🚀 Deployment Strategy

* Dockerized deployment (Dockerfile + docker-compose.yml)
* PostgreSQL, Redis, Celery workers as services
* Nginx + Gunicorn stack for production
* Use CI/CD via GitHub Actions
* Environment variables for secrets/config

---

## 📄 Documentation

* Developer docs with setup instructions
* API docs (Swagger UI hosted)
* User guide for dashboard usage
* SDK documentation and sample code

---

### TODO: During development
---------------------------------
1. The navbar always shows the same navigation links, change it so it is custom to each user user.