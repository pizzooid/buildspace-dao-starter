import sdk from "./1-initialize-sdk.js";

import dotenv from "dotenv";
dotenv.config();

if (!process.env.BUNDLE_DROP_ADDRESS || process.env.BUNDLE_DROP_ADDRESS == "") {
  console.log("🛑 Bundle Drop Address not found.")
}

const bundleDrop = sdk.getBundleDropModule(
  process.env.BUNDLE_DROP_ADDRESS,
);

(async () => {
  try {
    const claimConditionFactory = bundleDrop.getClaimConditionFactory();
    // Specify conditions.
    claimConditionFactory.newClaimPhase({
      startTime: new Date(),
      maxQuantity: 50_000,
      maxQuantityPerTransaction: 1,
    });
    
    
    await bundleDrop.setClaimCondition(0, claimConditionFactory);
    console.log("✅ Sucessfully set claim condition!");
  } catch (error) {
    console.error("Failed to set claim condition", error);
  }
})()