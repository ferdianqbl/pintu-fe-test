This is the project for Pintu Frontend Test work, by Muhammad Ferdian Iqbal

> [Demo Project](https://pintu-fe-test-ten.vercel.app/)

# 🪂Getting Started🪂

First, clone this project:

```bash
git clone https://github.com/ferdianqbl/pintu-fe-test.git
```

Then, install the dependencies:

```bash
cd pintu-fe-test
npm install
```

Then, create a .env file at the root of the project and copy the environments from .env.example:

```bash
cp .env.example .env
```

Then, fill in the variables according to your environment:

```
NEXT_PUBLIC_API_URL=your_api_url
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🚀Features🚀

> Top Movers (6 Data).
> All Crypto List.
> Sorting Table by price, day, week, month, and year.
> Static information about crypto.

## ⚡Working Constraints⚡

> The provided api cannot be used with client side methods so it must use server side.
> When trying to use the API using client side methods, CORS-related errors appear.
> To find out the latest data, you must refresh the page.
