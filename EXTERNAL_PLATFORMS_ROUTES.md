# External Platform Routes - Swiggy Integration
**Last Updated:** March 31, 2026  
**Project:** Myrva - AI-Powered Parametric Income Insurance for Gig Workers

---

## Table of Contents
1. [Overview](#overview)
2. [Route Categories](#route-categories)
3. [Data Format Standards](#data-format-standards)
4. [Security & Authentication](#security--authentication)

---

## Overview

Myrva requires integration with Swiggy to fetch real-time and historical data about worker performance, earnings, and activity. This data is critical for:

- **Premium Calculation** - Computing weekly premiums using worker's expected earnings (`E_w`)
- **Risk Assessment** - Understanding disruption patterns and worker availability
- **Fraud Detection** - Cross-validating activity reports and detecting spoofed behavior
- **Claim Eligibility** - Determining if earnings loss is legitimate and claimable
- **Trigger Validation** - Correlating external disruptions with actual delivery work patterns

### Data Flow
```
Swiggy API → Core API (data ingestion layer) → Database → 
Risk Assessment Pipeline & Premium Calculation Engine
```

---

## Route Categories

**Swiggy** exposes 12 routes across 6 categories:

### Category 1: Worker Verification & Identity (3 Routes)

#### 1.1 Verify Worker Account
**Route:** `GET /api/v3/workers/{worker_id}/verify`  
**Purpose:** Validate that a worker exists on Swiggy and retrieve official profile data  
**Authentication:** Bearer Token (OAuth2)  

**Request:**
```json
{
  "worker_id": "uuid",
  "phone_no": "string",
  "platform_version": "v3"
}
```

**Response:**
```json
{
  "worker_id": "string",
  "name": "string",
  "phone_no": "string",
  "email": "string",
  "is_verified": "boolean",
  "verification_date": "ISO8601",
  "account_status": "active|inactive|suspended",
  "zone_code": "string",
  "vehicle_type": "bike|scooter|cycle",
  "onboarding_date": "ISO8601"
}
```

**Status Codes:** 200, 400, 401, 404

---

#### 1.2 Get Account Status
**Route:** `GET /api/v3/workers/{worker_id}/account-status`  
**Purpose:** Real-time account status to prevent claims from inactive/suspended workers  
**Authentication:** Bearer Token  

**Response:**
```json
{
  "worker_id": "string",
  "account_status": "active|inactive|suspended|banned",
  "status_reason": "string (optional)",
  "last_active_at": "ISO8601",
  "suspension_end_date": "ISO8601|null"
}
```

**Status Codes:** 200, 404

---

#### 1.3 Check Document Validity
**Route:** `GET /api/v3/workers/{worker_id}/documents-expiry`  
**Purpose:** Verify worker's verification documents (DL, Aadhar, PAN) are still valid  
**Authentication:** Bearer Token  

**Response:**
```json
{
  "worker_id": "string",
  "documents": [
    {
      "doc_type": "driving_license|aadhar|pan",
      "issue_date": "ISO8601",
      "expiry_date": "ISO8601",
      "is_valid": "boolean",
      "days_remaining": "integer"
    }
  ]
}
```

**Status Codes:** 200, 404

---

### Category 2: Earnings & Income Data (3 Routes)

#### 2.1 Get Weekly Earnings
**Route:** `GET /api/v3/workers/{worker_id}/earnings/weekly`  
**Purpose:** Fetch worker's weekly earnings baseline (crucial for `E_w` variable in premium formula)  
**Authentication:** Bearer Token  

**Response:**
```json
{
  "worker_id": "string",
  "week_start_date": "ISO8601",
  "week_end_date": "ISO8601",
  "total_earnings": "number",
  "earnings_breakdown": {
    "base_earnings": "number",
    "incentives": "number",
    "bonuses": "number",
    "deductions": "number",
    "net_earnings": "number"
  },
  "working_days": "integer",
  "average_daily_earnings": "number",
  "peak_hours_earnings": "number (12 PM - 3 PM)",
  "off_peak_hours_earnings": "number"
}
```

**Status Codes:** 200, 404

---

#### 2.2 Get Historical Earnings (Last 12 Weeks)
**Route:** `GET /api/v3/workers/{worker_id}/earnings/history`  
**Purpose:** Calculate 12-week rolling average for baseline `E_w` and detect earning trends  
**Authentication:** Bearer Token  

**Response:**
```json
{
  "worker_id": "string",
  "total_weeks": "integer",
  "weeks_data": [
    {
      "week_start_date": "ISO8601",
      "week_end_date": "ISO8601",
      "total_earnings": "number",
      "working_days": "integer",
      "average_daily_earnings": "number",
      "delivery_count": "integer"
    }
  ],
  "rolling_average_12w": "number",
  "rolling_average_4w": "number",
  "earning_trend": "increasing|stable|decreasing"
}
```

**Status Codes:** 200, 404

---

#### 2.3 Get Hourly Earnings Breakdown
**Route:** `GET /api/v3/workers/{worker_id}/earnings/daily`  
**Purpose:** Hourly earnings breakdown to understand peak vs off-peak patterns (for severity calculation `S_i`)  
**Authentication:** Bearer Token  

**Response:**
```json
{
  "worker_id": "string",
  "date": "ISO8601",
  "total_daily_earnings": "number",
  "online_hours": "number",
  "hourly_breakdown": [
    {
      "hour": "0-1|1-2|...|23-24",
      "earnings": "number",
      "deliveries_count": "integer",
      "online_duration_minutes": "integer"
    }
  ],
  "peak_hours_earnings": "number (12 PM - 3 PM)",
  "off_peak_earnings": "number",
  "hours_worked": "array of hour strings"
}
```

**Status Codes:** 200, 404

---

### Category 3: Order & Delivery Data (3 Routes)

#### 3.1 Get Order History (Last 100)
**Route:** `GET /api/v3/workers/{worker_id}/orders`  
**Purpose:** Retrieve recent order history for fraud detection and earning correlation  
**Authentication:** Bearer Token  

**Response:**
```json
{
  "worker_id": "string",
  "total_orders": "integer",
  "orders": [
    {
      "order_id": "string",
      "order_date": "ISO8601",
      "order_time": "HH:MM",
      "restaurant": "string",
      "customer_location": "string (lat,long)",
      "delivery_distance_km": "number",
      "delivery_value": "number",
      "acceptance_time": "ISO8601",
      "delivery_completion_time": "ISO8601",
      "delivery_duration_minutes": "integer",
      "status": "completed|cancelled|rejected",
      "cancellation_reason": "string (if cancelled)",
      "delivery_rating": "number (1-5)"
    }
  ],
  "completion_rate_percent": "number",
  "average_rating": "number"
}
```

**Status Codes:** 200, 404

---

#### 3.2 Get Real-time Active Orders
**Route:** `GET /api/v3/workers/{worker_id}/active-orders`  
**Purpose:** Get real-time active orders to verify worker is actually online during disruption claims  
**Authentication:** Bearer Token  

**Response:**
```json
{
  "worker_id": "string",
  "is_online": "boolean",
  "last_online_at": "ISO8601",
  "active_orders_count": "integer",
  "active_orders": [
    {
      "order_id": "string",
      "order_placed_time": "ISO8601",
      "customer_location": "string (lat,long)",
      "delivery_distance_km": "number",
      "time_since_assignment_minutes": "integer"
    }
  ],
  "online_duration_today_minutes": "integer",
  "orders_completed_today": "integer"
}
```

**Status Codes:** 200, 404

---

#### 3.3 Get Performance Metrics
**Route:** `GET /api/v3/workers/{worker_id}/order-metrics`  
**Purpose:** Calculate acceptance/rejection/on-time rates for fraud detection  
**Authentication:** Bearer Token  

**Response:**
```json
{
  "worker_id": "string",
  "period_start": "ISO8601",
  "period_end": "ISO8601",
  "total_orders_offered": "integer",
  "accepted_orders": "integer",
  "rejected_orders": "integer",
  "acceptance_rate_percent": "number",
  "cancellation_rate_percent": "number",
  "average_delivery_time_minutes": "number",
  "average_delivery_rating": "number"
}
```

**Status Codes:** 200, 404

---

### Category 4: Online Status & Availability (2 Routes)

#### 4.1 Get Online Status Timeline
**Route:** `GET /api/v3/workers/{worker_id}/online-status-timeline`  
**Purpose:** Get daily online/offline status to correlate with disruption windows  
**Authentication:** Bearer Token  

**Response:**
```json
{
  "worker_id": "string",
  "date": "ISO8601",
  "total_online_minutes": "integer",
  "online_sessions": [
    {
      "session_start": "ISO8601",
      "session_end": "ISO8601",
      "duration_minutes": "integer",
      "orders_in_session": "integer",
      "earnings_in_session": "number"
    }
  ],
  "is_online_now": "boolean",
  "last_online_time": "ISO8601",
  "online_status_changes_count": "integer"
}
```

**Status Codes:** 200, 404

---

#### 4.2 Get Weekly Activity Summary
**Route:** `GET /api/v3/workers/{worker_id}/activity-summary`  
**Purpose:** Weekly overview of work hours and availability for risk assessment  
**Authentication:** Bearer Token  

**Response:**
```json
{
  "worker_id": "string",
  "week_start_date": "ISO8601",
  "week_end_date": "ISO8601",
  "total_online_hours": "number",
  "working_days_count": "integer",
  "average_daily_online_hours": "number",
  "orders_completed": "integer",
  "total_earnings": "number",
  "total_deliveries": "integer",
  "peak_activity_hours": "array of hours (peak order times)"
}
```

**Status Codes:** 200, 404

---

### Category 5: Zone & Location Data (2 Routes)

#### 5.1 Get Worker Zone Information
**Route:** `GET /api/v3/workers/{worker_id}/zone`  
**Purpose:** Get assigned zone for weather and disruption data correlation  
**Authentication:** Bearer Token  

**Response:**
```json
{
  "worker_id": "string",
  "zone_code": "string",
  "zone_name": "string",
  "city": "string",
  "state": "string",
  "zone_coordinates": {
    "center_lat": "number",
    "center_long": "number",
    "polygon_boundaries": "array"
  },
  "zone_active_since": "ISO8601"
}
```

**Status Codes:** 200, 404

---

#### 5.2 Get Zone Peak Hours & Demand
**Route:** `GET /api/v3/zones/{zone_code}/peak-hours`  
**Purpose:** Understand peak demand hours for severity calculation  
**Authentication:** Bearer Token  

**Request:**
```json
{
  "zone_code": "string"
}
```

**Response:**
```json
{
  "zone_code": "string",
  "zone_name": "string",
  "peak_hours": [
    {
      "hour": "string (12 PM - 1 PM)",
      "average_orders": "integer",
      "average_earning": "number"
    }
  ]
}
```

**Status Codes:** 200, 404

---

### Category 6: Fraud Detection Signals (2 Routes)

#### 6.1 Get Location Tracking Data
**Route:** `GET /api/v3/workers/{worker_id}/location-history`  
**Purpose:** GPS coordinates to verify worker was in zone during claim (spoofing detection)  
**Authentication:** Bearer Token  

**Request:**
```json
{
  "worker_id": "uuid",
  "date": "YYYY-MM-DD",
  "resolution": "hourly|5min (default: hourly)"
}
```

**Response:**
```json
{
  "worker_id": "string",
  "date": "ISO8601",
  "location_points": [
    {
      "timestamp": "ISO8601",
      "latitude": "number",
      "longitude": "number",
      "accuracy_meters": "number",
      "source": "gps|network"
    }
  ],
  "stayed_in_zone": "boolean",
  "zone_percentage": "number (% of time in zone)"
}
```

**Status Codes:** 200, 404

---

#### 6.2 Get Device & Behavior Anomalies
**Route:** `GET /api/v3/workers/{worker_id}/device-behavior`  
**Purpose:** Detect spoofing via device rotation, acceleration anomalies, impossible speeds  
**Authentication:** Bearer Token  

**Response:**
```json
{
  "worker_id": "string",
  "date": "ISO8601",
  "device_model": "string",
  "device_change_detected": "boolean",
  "app_version": "string",
  "suspicious_patterns": [
    {
      "pattern_type": "impossible_speed|jump_location|device_swap",
      "detected_at": "ISO8601",
      "severity": "low|medium|high"
    }
  ]
}
```

**Status Codes:** 200, 404

---

## Data Format Standards

### Standard Date/Time Format
- **ISO8601 Format:** `2026-03-31T14:30:00Z`
- **Date Only:** `YYYY-MM-DD` (used in requests)
- **Hour Format:** `HH:MM` (24-hour format)

### Coordinates Format
- **Latitude/Longitude:** Decimal degrees (e.g., `28.6139, 77.2090` for Delhi)
- **Location Format:** `"{latitude},{longitude}"` (string for easy parsing)

### Currency
- **All amounts in INR** (Indian Rupees)
- Precision: 2 decimal places (e.g., `1234.50`)

### Vehicle Types (Enum)
- `bike` - Motorcycle/Scooter
- `cycle` - Bicycle
- `scooter` - Electric Scooter

---

## Security & Authentication

### Authentication Methods

#### Method 1: OAuth2 Bearer Token
```
Header: Authorization: Bearer {access_token}
```
**Refresh Token Flow:**
- Access tokens: **1 hour** expiry
- Refresh tokens: **30 days** expiry
- Token endpoint for refresh

#### Method 2: API Key (if provided)
```
Header: X-API-Key: {api_key}
Header: X-API-Secret: {api_secret}
```

### Rate Limiting
- **Per-endpoint limits:** Documented in each platform's API docs
- **Recommended strategy:** Implement exponential backoff with max 5 retries
- **Common limits:** 1000 requests/hour per endpoint

### Error Response Format

**400 Bad Request:**
```json
{
  "error_code": "INVALID_REQUEST",
  "message": "Invalid worker_id format",
  "timestamp": "ISO8601"
}
```

**401 Unauthorized:**
```json
{
  "error_code": "AUTH_FAILED",
  "message": "Invalid or expired token",
  "timestamp": "ISO8601"
}
```

**404 Not Found:**
```json
{
  "error_code": "RESOURCE_NOT_FOUND",
  "message": "Worker not found",
  "timestamp": "ISO8601"
}
```

**500 Server Error:**
```json
{
  "error_code": "INTERNAL_ERROR",
  "message": "Internal server error. Please try again later.",
  "timestamp": "ISO8601"
}
```

---

## Implementation Roadmap

### Phase 1: Core Routes (Iteration 1)
1. Worker verification (1.1, 1.2 for both platforms)
2. Weekly earnings (2.1 for both)
3. Order history (3.1 for both)
4. Zone info (5.1, 5.2 for both)

### Phase 2: Risk Assessment (Iteration 1-2)
5. Historical earnings (2.2 for both)
6. Online status (4.1, 4.2 for both)
7. Performance metrics (3.3 for both)
8. Location tracking (6.1 for both)

### Phase 3: Real-time Features (Iteration 2)
9. Active orders/deliveries (3.2 for both)
10. Real-time online status (4.1 for both)
11. Hourly breakdown (2.3 for both)
12. Anomaly detection (6.2 for both)

### Phase 4: Advanced (Iteration 3)
13. Behavior analytics
14. Device fingerprinting
15. Advanced fraud scoring

---

## Integration Points in Myrva System

| Myrva Component | Routes | Purpose |
|---|---|---|
| **Premium Calculator** | 2.1, 2.2 | Get `E_w` (expected weekly earnings) |
| **Risk Assessment** | 2.2, 4.1, 4.2 | Predict disruption impact, earnings baseline |
| **Fraud Detection** | 3.1, 4.1, 6.1, 6.2 | Verify claim legitimacy, detect spoofing |
| **Claim Eligibility** | 4.1, 4.2, 3.2 | Verify worker online/active during event |
| **Trigger Validation** | 5.1, 5.2 | Match zone to weather/disruption data |
| **Worker Onboarding** | 1.1, 1.2, 1.3 | Verify identity, account validity |

---

## Summary Statistics

| Metric | Value |
|---|---|
| **Total Routes** | 12 |
| **Route Categories** | 6 |
| **Routes per Category** | 2 |
| **Authentication Methods** | 2 (OAuth2, API Key) |
| **Data Points Collected** | 150+ |
| **Myrva Components Supported** | 6 |

---

**Version:** 1.0  
**Last Updated:** March 31, 2026  
**Owner:** Myrva Technical Team  
**Status:** Ready for API Integration Development
