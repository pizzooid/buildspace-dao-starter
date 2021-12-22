import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x7bE43e3173fA15B962E7531a11ED6F8d995EA22B",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Ice Cream Waffle",
        description: "This Ice Cream Waffle NFT will give you access to the DAO of Ice Cream!",
        image: readFileSync("scripts/assets/waffle.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()