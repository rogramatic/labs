# Rogramatic Labs

Rogramatic Labs is a collection of small, publicly accessible products built to solve practical business problems while exploring different areas of software engineering.

Each product is independently documented and can be explored from the Labs site.

## Live Site

https://labs.rogramatic.com

## Products

| Product     | Problem                                                                              | Status      | Demo           | Documentation                              |
| ----------- | ------------------------------------------------------------------------------------ | ----------- | -------------- | ------------------------------------------ |
| RevenueFlow | Helps service businesses manage leads, follow-ups, quotations, and pipeline activity | In Progress | `/revenueflow` | [README](./products/revenueflow/README.md) |
| Resolve     | Helps support teams manage customer requests and response workflows                  | Planned     | `/resolve`     | [README](./products/resolve/README.md)     |
| Settle      | Helps businesses reconcile payments against invoices or orders                       | Planned     | `/settle`      | [README](./products/settle/README.md)      |
| Assist      | Uses AI to support customer operations, triage, and sales workflows                  | Planned     | `/assist`      | [README](./products/assist/README.md)      |

## Architecture

The Labs frontend provides the shared public entry point for all products.

```text
labs.rogramatic.com
│
├── /
│   └── Labs landing page
│
├── /revenueflow
│   └── RevenueFlow
│
├── /resolve
│   └── Resolve
│
├── /settle
│   └── Settle
│
└── /assist
    └── Assist
```

Each product may use a different backend stack, but the frontend exposes them under a consistent path-based URL structure.

Backend requests are proxied through product-specific server routes such as:

```text
/revenueflow/api/*
/resolve/api/*
/settle/api/*
/assist/api/*
```

The product READMEs contain the implementation details for each backend.

## Core Frontend Stack

* Nuxt
* Vue
* TypeScript
* Tailwind CSS
* pnpm

## Repository Structure

```text
.
├── pages/
│   ├── index.vue
│   ├── revenueflow/
│   ├── resolve/
│   ├── settle/
│   └── assist/
│
├── components/
│   ├── shared/
│   ├── revenueflow/
│   ├── resolve/
│   ├── settle/
│   └── assist/
│
├── composables/
│   ├── shared/
│   ├── revenueflow/
│   ├── resolve/
│   ├── settle/
│   └── assist/
│
├── server/
│   └── routes/
│       ├── revenueflow/
│       ├── resolve/
│       ├── settle/
│       └── assist/
│
├── products/
│   ├── revenueflow/
│   │   └── README.md
│   ├── resolve/
│   │   └── README.md
│   ├── settle/
│   │   └── README.md
│   └── assist/
│       └── README.md
│
├── public/
├── types/
├── nuxt.config.ts
├── package.json
└── README.md
```

## Local Development

### Requirements

* Node.js
* pnpm

### Install

```bash
pnpm install
```

### Environment

```bash
cp .env.example .env
```

### Start Development Server

```bash
pnpm dev
```

The application runs at:

```text
http://localhost:3000
```

## Common Commands

| Command          | Purpose                      |
| ---------------- | ---------------------------- |
| `pnpm dev`       | Start the development server |
| `pnpm build`     | Create a production build    |
| `pnpm preview`   | Preview the production build |
| `pnpm typecheck` | Run TypeScript checks        |
| `pnpm lint`      | Run linting                  |
| `pnpm test`      | Run tests                    |

## Product Standards

Every Labs product should provide:

* a public demo;
* realistic seeded demo data;
* a guided demo;
* no mandatory signup for evaluation unless signup is part of the product;
* clear loading, empty, and error states;
* safety and resource limits;
* a business-facing explanation;
* product-specific technical documentation.

Implementation details belong in the product's own README.

## Adding a New Product

1. Create its route under:

```text
pages/<product>/
```

2. Create product-specific components and composables.

3. Add its API proxy under:

```text
server/routes/<product>/api/
```

4. Create:

```text
products/<product>/README.md
```

5. Add the product to the table in this README.

6. Add it to the Labs homepage.

## Deployment

The Labs frontend is deployed to Hostinger and served from:

```text
https://labs.rogramatic.com
```

Each product may use a separate backend deployment. See the relevant product README for its infrastructure and deployment architecture.

## Roadmap

* [x] Labs landing page
* [ ] RevenueFlow
* [ ] Resolve
* [ ] Settle
* [ ] Assist
