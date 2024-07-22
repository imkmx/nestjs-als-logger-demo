
# NestJS ALS Logger Demo

This is a demo project showcasing the usage of Async Local Storage (ALS) for logging in a NestJS application.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 14.x or later)
- [NestJS CLI](https://docs.nestjs.com/cli/overview)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/imxmx/nestjs-als-logger-demo.git
   ```

2. Navigate to the project directory:

   ```bash
   cd nestjs-als-logger-demo
   ```

3. Install the dependencies:

   ```bash
   yarn install
   ```

### Running the Application

To start the application, run the following command:

```bash
yarn start
```

The application will be available at `http://localhost:3000`.

### Project Modules

- **app.controller.ts**: Contains the main application controller.
- **app.module.ts**: The root module of the application.
- **app.service.ts**: Provides application-wide services.
- **main.ts**: The entry point of the application.

#### Common Modules

- **middleware/trace.middleware.ts**: Middleware for tracing requests.
- **interceptors/logging.interceptor.ts**: Interceptor for logging request and response data.
- **logger/app-logger.service.ts**: Custom logger service using ALS.
- **logger/logger.module.ts**: Logger module definition.
- **modules/als.module.ts**: Module for setting up Async Local Storage.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [NestJS](https://nestjs.com/)
- [Async Local Storage](https://nodejs.org/dist/latest-v14.x/docs/api/async_hooks.html#async_hooks_class_asynclocalstorage)
