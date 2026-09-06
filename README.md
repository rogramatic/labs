# Rogramatic Labs

Rogramatic Labs is the experimental product environment for Rogramatic.

It contains working software products, engineering experiments, demos, and case studies built to explore real business problems and demonstrate how Rogramatic approaches product engineering.

The public Labs directory lives on the main Rogramatic website:

**https://rogramatic.com/labs**

Individual products are hosted separately under the Labs subdomain:

```text
https://labs.rogramatic.com/<product>
```

For example:

```text
https://labs.rogramatic.com/revenueflow
```

---

## URL Structure

Rogramatic Labs deliberately separates the **Labs landing page** from the **individual lab applications**.

| URL                                       | Purpose                                                |
| ----------------------------------------- | ------------------------------------------------------ |
| `https://rogramatic.com/labs`             | Public Labs landing page and product directory         |
| `https://labs.rogramatic.com`             | Permanently redirects to `https://rogramatic.com/labs` |
| `https://labs.rogramatic.com/revenueflow` | RevenueFlow application                                |
| `https://labs.rogramatic.com/resolve`     | Resolve application                                    |
| `https://labs.rogramatic.com/settle`      | Settle application                                     |
| `https://labs.rogramatic.com/assist`      | Assist application                                     |

The intended user journey is:

```text
rogramatic.com
      │
      ▼
rogramatic.com/labs
      │
      ├── RevenueFlow
      │       │
      │       ▼
      │   labs.rogramatic.com/revenueflow
      │
      ├── Resolve
      │       │
      │       ▼
      │   labs.rogramatic.com/resolve
      │
      ├── Settle
      │       │
      │       ▼
      │   labs.rogramatic.com/settle
      │
      └── Assist
              │
              ▼
          labs.rogramatic.com/assist
```

A direct visit to:

```text
https://labs.rogramatic.com
```

must permanently redirect to:

```text
https://rogramatic.com/labs
```

with:

```text
301 Moved Permanently
```

---

## Products

Each product has its own README containing its architecture, engineering decisions, local development instructions, deployment process, demo configuration, safety limits, case study, and implementation roadmap.

| Product     | Description                                                                      | Documentation                                                        | Application                       |
| ----------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------- | --------------------------------- |
| RevenueFlow | Lead, quote, follow-up, and revenue intelligence platform for service businesses | [`products/revenueflow/README.md`](./products/revenueflow/README.md) | `labs.rogramatic.com/revenueflow` |
| Resolve     | Product documentation                                                            | [`products/resolve/README.md`](./products/resolve/README.md)         | `labs.rogramatic.com/resolve`     |
| Settle      | Product documentation                                                            | [`products/settle/README.md`](./products/settle/README.md)           | `labs.rogramatic.com/settle`      |
| Assist      | Product documentation                                                            | [`products/assist/README.md`](./products/assist/README.md)           | `labs.rogramatic.com/assist`      |

This root README intentionally stays general.

Product-specific implementation details belong in the respective product README.

---

## Repository Responsibility

This repository is responsible for the frontend applications served from:

```text
labs.rogramatic.com/<product>
```

It is **not responsible for the Labs landing page** at:

```text
rogramatic.com/labs
```

The Labs landing page belongs to the main Rogramatic website.

Its job is to:

1. explain what Rogramatic Labs is;
2. display the available products;
3. give each product a concise business-facing description;
4. provide a clear CTA;
5. direct visitors to the appropriate application on `labs.rogramatic.com`.

The Labs frontend repository begins taking responsibility after the visitor follows one of those links.

---

## Routing Architecture

The Labs subdomain uses path-based product routing.

```text
labs.rogramatic.com/
│
├── /revenueflow
├── /resolve
├── /settle
└── /assist
```

Each product owns its own route namespace.

For example, RevenueFlow can use:

```text
/revenueflow
/revenueflow/login
/revenueflow/dashboard
/revenueflow/leads
/revenueflow/quotes
/revenueflow/settings
```

Resolve can independently use:

```text
/resolve
/resolve/dashboard
/resolve/cases
```

without interfering with RevenueFlow.

The root route:

```text
/
```

is reserved and must permanently redirect to:

```text
https://rogramatic.com/labs
```

No independent Labs landing page should exist at:

```text
labs.rogramatic.com/
```

---

## Nuxt Pages and Routes

Nuxt generates application routes from the `pages/` directory.

Each lab should therefore have its own top-level directory inside `pages/`.

For example:

```text
pages/
├── index.vue
│
├── revenueflow/
│   ├── index.vue
│   ├── login.vue
│   ├── dashboard.vue
│   │
│   ├── leads/
│   │   ├── index.vue
│   │   └── [id].vue
│   │
│   ├── quotes/
│   │   ├── index.vue
│   │   ├── new.vue
│   │   └── [id].vue
│   │
│   └── settings/
│       └── index.vue
│
├── resolve/
│   ├── index.vue
│   ├── dashboard.vue
│   └── cases/
│       ├── index.vue
│       └── [id].vue
│
├── settle/
│   ├── index.vue
│   └── dashboard.vue
│
└── assist/
    ├── index.vue
    └── dashboard.vue
```

This produces routes such as:

```text
pages/revenueflow/index.vue
→ /revenueflow

pages/revenueflow/dashboard.vue
→ /revenueflow/dashboard

pages/revenueflow/leads/index.vue
→ /revenueflow/leads

pages/revenueflow/leads/[id].vue
→ /revenueflow/leads/:id

pages/revenueflow/quotes/new.vue
→ /revenueflow/quotes/new

pages/resolve/cases/[id].vue
→ /resolve/cases/:id
```

The `pages/index.vue` route corresponds to:

```text
/
```

and should not contain a Labs landing page.

The root redirect should preferably be handled at the routing or infrastructure layer.

---

## Application and API Paths

Each lab owns a path namespace under the Labs subdomain.

For example:

```text
Frontend:
labs.rogramatic.com/revenueflow

Frontend routes:
labs.rogramatic.com/revenueflow/*

API:
labs.rogramatic.com/revenueflow/api/*
```

Conceptually:

```text
Internet
   │
   ▼
labs.rogramatic.com
   │
   ├── /
   │    └── 301 → rogramatic.com/labs
   │
   ├── /revenueflow/*
   │    ├── Nuxt frontend
   │    └── /revenueflow/api/* → RevenueFlow backend
   │
   ├── /resolve/*
   │    ├── frontend
   │    └── backend/API
   │
   ├── /settle/*
   │    ├── frontend
   │    └── backend/API
   │
   └── /assist/*
        ├── frontend
        └── backend/API
```

The exact backend architecture for each product is documented in that product's README.

---

## Frontend Stack

The shared Labs frontend uses:

* **Nuxt**
* **Vue**
* **TypeScript**
* **Tailwind CSS**
* **pnpm**

Individual products may introduce additional dependencies where necessary.

Product-specific libraries should be documented in the corresponding product README rather than here.

---

## Repository Structure

```text
labs/
├── README.md
│
├── app.vue
│
├── assets/
│   └── css/
│       └── main.css
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
├── layouts/
│   ├── default.vue
│   ├── revenueflow.vue
│   ├── resolve.vue
│   ├── settle.vue
│   └── assist.vue
│
├── middleware/
│
├── pages/
│   ├── index.vue
│   │
│   ├── revenueflow/
│   │   ├── index.vue
│   │   ├── login.vue
│   │   ├── dashboard.vue
│   │   │
│   │   ├── leads/
│   │   │   ├── index.vue
│   │   │   └── [id].vue
│   │   │
│   │   ├── quotes/
│   │   │   ├── index.vue
│   │   │   ├── new.vue
│   │   │   └── [id].vue
│   │   │
│   │   └── settings/
│   │       └── index.vue
│   │
│   ├── resolve/
│   │   ├── index.vue
│   │   ├── dashboard.vue
│   │   └── cases/
│   │       ├── index.vue
│   │       └── [id].vue
│   │
│   ├── settle/
│   │   ├── index.vue
│   │   └── dashboard.vue
│   │
│   └── assist/
│       ├── index.vue
│       └── dashboard.vue
│
├── plugins/
│
├── public/
│
├── server/
│   ├── api/
│   └── routes/
│
├── types/
│
├── products/
│   ├── revenueflow/
│   │   └── README.md
│   │
│   ├── resolve/
│   │   └── README.md
│   │
│   ├── settle/
│   │   └── README.md
│   │
│   └── assist/
│       └── README.md
│
├── nuxt.config.ts
├── package.json
├── pnpm-lock.yaml
└── tsconfig.json
```

The top-level product folders under `pages/` act as the URL boundary for each Labs product.

For example:

```text
pages/revenueflow/
```

owns:

```text
/revenueflow/*
```

while:

```text
pages/resolve/
```

owns:

```text
/resolve/*
```

This makes the product boundary visible directly from the filesystem.

---

## Shared vs Product-Specific Code

Code that is genuinely reusable across several Labs products should live in shared application directories.

For example:

```text
components/shared/
composables/shared/
```

Product-specific code should remain grouped by product.

For example:

```text
components/revenueflow/
composables/revenueflow/
pages/revenueflow/
```

This avoids turning the repository into a collection of unrelated components while still allowing useful infrastructure to be shared.

A useful rule is:

```text
Used by multiple labs
        ↓
shared/

Used only by RevenueFlow
        ↓
revenueflow/
```

The same principle applies to other products.

---

## Local Development

Install dependencies:

```bash
pnpm install
```

Start the Nuxt development server:

```bash
pnpm dev
```

Build the application:

```bash
pnpm build
```

Preview the production build:

```bash
pnpm preview
```

Additional product-specific setup is documented inside each product README.

---

## Adding a New Lab

When adding a new product, first choose a stable URL slug.

For example:

```text
forecast
```

The public product URL becomes:

```text
https://labs.rogramatic.com/forecast
```

Create the route namespace:

```text
pages/
└── forecast/
    ├── index.vue
    └── ...
```

The root product page will automatically map to:

```text
/forecast
```

Additional pages will remain inside that namespace:

```text
pages/forecast/dashboard.vue
→ /forecast/dashboard

pages/forecast/reports/index.vue
→ /forecast/reports

pages/forecast/reports/[id].vue
→ /forecast/reports/:id
```

Then:

1. Create the product route under `pages/`.

2. Create:

   ```text
   products/forecast/README.md
   ```

3. Add product-specific components where necessary:

   ```text
   components/forecast/
   ```

4. Add product-specific composables where necessary:

   ```text
   composables/forecast/
   ```

5. Document the product's:

   * business problem;
   * target user;
   * architecture;
   * engineering stack;
   * local development process;
   * API architecture;
   * seeded demo data;
   * deployment pipeline;
   * guided demo;
   * safety limits;
   * testing strategy;
   * business-facing case study;
   * weekly engineering plan.

6. Add the product to this README.

7. Add the product to the Labs directory at:

   ```text
   rogramatic.com/labs
   ```

8. Link the CTA on the main website to:

   ```text
   labs.rogramatic.com/forecast
   ```

A product should not require its own hostname.

---

## Product Standards

Every Rogramatic Labs product should be usable as more than a code sample.

Each product should progressively provide:

* a working application;
* production-like architecture;
* automated tests;
* seeded demo data;
* a repeatable deployment pipeline;
* a publicly accessible deployment;
* a guided demo path;
* sensible safety limits;
* clear documentation;
* and a business-facing case study.

These are part of the product itself rather than cleanup work to be postponed until engineering is complete.

---

## Deployment

The Labs applications are published under:

```text
labs.rogramatic.com
```

The deployment layer must support path-based routing so that each product remains accessible through its assigned namespace.

For example:

```text
/revenueflow/*
/resolve/*
/settle/*
/assist/*
```

The root of the subdomain must not expose an additional landing page.

Instead:

```text
GET https://labs.rogramatic.com/
```

should return:

```text
301 Moved Permanently
Location: https://rogramatic.com/labs
```

This keeps the public discovery experience on the primary Rogramatic website while allowing the Labs infrastructure to focus exclusively on hosting the actual products.

---

## Design Principle

The distinction between the two domains is intentional:

```text
rogramatic.com/labs
        ↓
Discover and understand the products

labs.rogramatic.com/<product>
        ↓
Use and experience the products
```

**Rogramatic owns discovery. Labs owns the product experience.**

That separation keeps the main website responsible for marketing and navigation while allowing each lab to evolve as a real application without turning the Labs subdomain itself into another marketing site.
