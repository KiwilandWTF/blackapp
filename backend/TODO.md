# General
- Fix the docker deployment to work with typescript.
- Add a docker-compose file to run both the postgres server & the backend in a single deployment.
- Add CI Pipelines to verify all commits automatically.
- Add Snyk to automatically scan all commits for security vulnerabilities.

# Prisma
- Figure out what the correct one-to-many & many-to-many relationships are between an NFT model, its owners, and the relation between that and the broader NFT collection they belong to on-chain.
- Implement some sort of daemon that ensures the contract metadata is always up to date.
- Implement a way to query the contract metadata.

# Hardhat | Smart Contracts
1. To compile the contracts under `contracts/`, run `npx hardhat compile`.
2. Then run `npx hardhat node` to start a local blockchain node.
3. Then `npx hardhat run scripts/deploy-name.ts --network local` to deploy the smart-contract.