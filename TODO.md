Iteration 1:
- Initialize the codebase for the frontend and backend

(Maybe use Supabase At The Start and Move to The Seperate Db) 
- Set up the basic core database schema and migrations and Basic Logging
- Set up Jest test configurations and TestContainers

- Create the Worker Onboarding API endpoint structure
- Create the React Native onboarding pages

- Set up cron jobs for periodic ingestion of external data sources

- Validate documentation and set up normalization of external data
- Platform API simulation:
  - Worker profile history mock
  - Real-time order simulation and worker order registration and delivery mock

- Risk assessment pipeline scaffolding
- Fraud detection pipeline scaffolding

- Set up PostGIS extensions and geospatial indexing
- Define zone-based schemas and geo queries
- Initialize TimescaleDB hypertables for time-series data

- Design feature store schema (risk features, earnings baseline, weather signals)
- Set up Redis for real-time feature access

- Worker dashboard endpoints structure and development
- React Native UI screens and integration

- Dockerize the frontend and backend

Iteration 2:
- Internal risk pool management
- (Optional) Move to Spark only if large-scale batch processing is required

- Define event schemas and Trigger events
- Kafka Partition setup and event streaming
- Implement producers/consumers for disruption and claim events

- Set up logging with Prometheus and Grafana
- Implement notification service (FCM/SMS triggers for claims/events)

- Define Api documentation and Swagger Docs

Iteration 3:
- Migrate to a monorepo using Bazel

- Move to cloud services and MLOps
  - Model versioning and registry setup (MLflow)
  - Batch training pipelines using Airflow
  - Model deployment via BentoML
  - Model monitoring (data drift / prediction drift)

- Feature pipeline automation (Need to search How to do This)

- Transition to microservices (if feasible)