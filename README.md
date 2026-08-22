# tRPC Expo API Routes Demo

A full-stack mobile and web application demonstrating type-safe API communication using Expo Router API Routes, tRPC v10, and SWR.

## Overview

This project showcases how to implement end-to-end type safety between React Native (Expo) client code and serverless backend API routes within the same repository using Expo Router v4, tRPC server/client, and `@trpc-swr/client`.

## Tech Stack

- **Framework**: React Native (v0.82), Expo (SDK 52), Expo Router v4
- **API & RPC**: [tRPC](https://trpc.io/) (v10), `@trpc-swr/client`, SWR
- **Validation**: [Zod](https://zod.dev/)
- **Language**: TypeScript

## Prerequisites

- Node.js (v18 or higher recommended)
- Package manager (`pnpm` or `npm`)
- Expo Go mobile app or mobile emulator

## Getting Started

1. **Install dependencies**:
   ```bash
   pnpm install
   # or
   npm install
   ```

2. **Run the Development Server**:
   ```bash
   pnpm start
   # or
   npm start
   ```

3. **Launch on a Device / Emulator**:
   - Press `a` for **Android Emulator**.
   - Press `i` for **iOS Simulator**.
   - Press `w` for **Web**.
   - Scan the QR code using the **Expo Go** mobile app.

## Available Scripts

- `npm start` - Starts the Expo development server with API route handling.
- `npm run android` - Runs the application on Android.
- `npm run ios` - Runs the application on iOS.
- `npm run web` - Runs the application in the web browser.
- `npm test` - Launches Jest unit tests.

## Author

Created by [Mehfooz-ur-Rehman](https://github.com/MehfoozurRehman).
