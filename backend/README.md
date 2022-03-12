# About the project
The Apenotic Backend is a fully functional backend for the Apenotic project. The backend is written in NodeJS & will use Prisma ORM -- with Postgres in the backend, though my fork will run MongoDB. The frontend will be written in NextJS + Tailwind CSS, and will communicate with the backend with some centralized containarized application.

# Getting started
In order to run this application locally you must:

1. Ensure `git & docker` are installed on your system.
2. Clone the repository `git clone {repo_url}`
3. Run `./scripts/build-run.sh `.
4. Check the status of the app on `http://localhost:8080`, & use `docker ps` for more info.

# Database
The project requires a Postgres database to be specified in the `.env` file. A filed such as `DB_HOST` is required, i.e. `DATABASE_URL="postgresql://postgres:testingpassword@localhost:5432/mydb?schema=public"`.

Soon, a docker-compose file will open all the necesary containers for you. In the mean time, `docker run --name postgres -e POSTGRES_PASSWORD=testingpassword -p 5432:5432 -d postgres` should suffice.

## Features
In order to consider the agreements stated in the SoW, the backend will have to pass the following tests:

### Mid-Late February 2022 [WIP] [⏳❗]

#### Account Creation:
- Users will be capable of creating a new account using traditional means (e.g. email, phone number, etc.) ().
- Users will be able to create an account with a social media account (e.g. Facebook, Google, etc.) (https://auth0.com/docs/api).
- Crypto Wallet connect to quickly generate a new account by signing an EVM-Compatible smart contract (https://walletconnect.com/).
- Users will be able to Link many wallets from different blockchains (e.g. Ethereum, Solana, Polygon, Avalanche, Polkadot, etc.).
- Wallet Masking: Users will be able to mask fiat digital wallets-- such as Apple Pay, Venmo, CashApp, Zelle --, to transact value with the platform & with other users.

### Import NFTs:
To create an application of some sort, likely a containerized restful application, to allow users to import & display NFTs from multiple blockchains.

- API must return individiual NFTs & their metadata, aswell as whole collections.
- Import all metadata from the blockchain, and allow users to display the properties they want & hide the ones they don't want.
- Some simple application that takes an URL as an input & returns a QR-Code pointing to that URI.
- Serch & Filter NFT Collections & their metadata.

### Mid-March 2022 [WIP]
404.

### Mid-Late April 2022 [WIP]
404.