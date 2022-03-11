import "dotenv/config";
import express from "express";
import { prisma } from "../lib/prisma";

const app = express();
app.use(express.json());
let PORT = process.env.PORT || 8080;

/** Create a hello world endpoint. */
app.get("/get/:owner", async (req, res) => {
  const { owner } = req.params;
  // If request body is empty, return everything in the collection, othwerise query a specific owner.
  if (owner === null || owner === undefined) {
    // Return bad request.
    res.status(400).send("Bad Request");
  } else {
    // Querry a specific owner.
    let collection = await getOwnersNFTs(owner);
    res.json(collection);
  }
});

app.get("/", async (__, res) => {
  let collection = await prisma.nFT.findMany({
    select: {
      id: true,
      owner: true,
      name: true,
      onChainMeta: true,
    },
  });
  // Return everything in the collection.
  res.json(collection);
});

/** Create demo post endpoint */
app.post("/", async (req, res) => {
  // Short the function early if the request is not valid
  if (req.body === undefined) {
    res.status(400).send("Bad Request");
    return;
  }
  // Otherwise, create the NFT
  const nft = await createNFT(req.body);
  // Send back the result.
  res.json(nft);
});

/** Boot up the Rest API. */ app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// This is a fake function, currently it just writes to prisma, nothing fancy yet.
// Grabbing NFT Metadata from https://checkmynft.com.
async function createNFT(body: any) {
  const { name, description, owner, onChainMeta } = body;
  try {
    let result = await prisma.nFT.create({
      data: {
        name,
        description,
        owner,
        onChainMeta,
      },
    });
    // Return the newly added "fake" NFT
    return result;
  } catch (error) {
    console.log(error);
  }
}

async function getOwnersNFTs(owner: string) {
  try {
    let result = await prisma.nFT.findMany({
      select: {
        id: true,
        name: true,
        description: true,
        owner: true,
        onChainMeta: true,
      },
      where: {
        owner,
      },
    });
    return result;
  } catch (error) {
    console.log(error);
  }
}
