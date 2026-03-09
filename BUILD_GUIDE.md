# ArtFlow1440 Build Guide

This project is a modern web application built with **Next.js**, **React**, and **Tailwind CSS**.

## Prerequisites

- **Node.js**: Version 18.0.0 or higher.
- **npm**: Version 8.0.0 or higher.

## Installation

To install the project dependencies, run:

```bash
npm install
```

## Development

To start the development server, run:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

## Building for Production

To create an optimized production build, run:

```bash
npm run build
```

## Starting the Production Server

After building, start the production server with:

```bash
npm run start
```

## Project Structure

- `src/app/`: Next.js App Router directory.
- `src/app/api/`: API routes for the backend.
- `src/app/globals.css`: Global styles including Tailwind directives.
- `tailwind.config.js`: Tailwind CSS configuration.
- `tsconfig.json`: TypeScript configuration.
