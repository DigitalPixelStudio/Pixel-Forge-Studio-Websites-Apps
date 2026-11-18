/**
 * Vercel AI Gateway + AI SDK Example
 * This demonstrates how to use the Vercel AI Gateway with the AI SDK
 * 
 * Make sure .env.local is set up with AI_GATEWAY_API_KEY
 * and the file is ignored by Git (it is - .gitignore includes /.env.local)
 */

import { generateText } from "ai";
import { startAuthorization } from "@vercel/connect";
import { getToken } from "@vercel/connect";

// ============================================================
// 1. GitHub Authorization Example
// ============================================================
//
// This demonstrates how to start a GitHub OAuth authorization flow.
// In a real app, you'd redirect the user to complete auth.
//
// stk_NbSfCgFTJlGfjhxC6tb2II is the model ID for Vercel AI Gateway.
//
async function githubAuthExample() {
  console.log("🔐 Starting GitHub authorization...\n");

  try {
    // Step 1: Start the authorization flow
    const authResult = await startAuthorization("github/pixel-forge-studio", {
      subject: { type: "user", id: "usr_123" }
    });

    console.log("✅ Authorization started:");
    console.log("   - Session:", authResult.sessionId);
    console.log("   - Redirect URL would be shown to user\n");

    // Step 2: Get a token for the GitHub integration
    const tokenResult = await getToken("github/pixel-forge-studio", {
      subject: { type: "app" }
    });

    console.log("✅ GitHub token obtained:");
    console.log("   - Token type:", tokenResult.tokenType);
    // Note: Never expose full tokens in client-side code
    // This is for server-side/secure usage only

    console.log("\n🎉 GitHub auth flow completed successfully!\n");

  } catch (error) {
    console.error("❌ Authorization failed:");
    console.error("   - Error:", error instanceof Error ? error.message : error);
    console.error(
      "   - This might be due to missing GitHub OAuth config or invalid subject"
    );
  }
}

// ============================================================
// 2. Text Generation Example
// ============================================================
//
// This uses the Vercel AI Gateway with your specified model.
//
// model: stk_NbSfCgFTJlGfjhxC6tb2II
//
async function textGenerationExample() {
  console.log("🤖 Generating text with Vercel AI Gateway...\n");

  try {
    const result = await generateText({
      model: "stk_NbSfCgFTJlGfjhxC6tb2II",
      prompt: "Write a compelling caption for a technology startup launch post:",
      // You can also use structured prompts:
      // system: "You are a marketing expert writing social media content.",
      // temperature: 0.7,
      // maxTokens: 150,
    });

    console.log("✅ Generated text:\n");
    console.log("```");
    console.log(result.text);
    console.log("```\n");

    console.log("📊 Usage metrics (if available):");
    if (result.finishReason) {
      console.log("   - Finish reason:", result.finishReason);
    }
    if (result.usage) {
      console.log("   - Tokens used:", result.usage);
    }
  } catch (error) {
    console.error("❌ Text generation failed:");
    console.error("   - Error:", error instanceof Error ? error.message : error);

    // Helpful troubleshooting
    console.error("\n🔧 Troubleshooting:");
    console.error(
      "   1. Verify AI_GATEWAY_API_KEY is set in .env.local"
    );
    console.error(
      "   2. Ensure the model ID 'stk_NbSfCgFTJlGfjhxC6tb2II' is correct"
    );
    console.error(
      "   3. Check your Vercel account has AI Gateway enabled"
    );
  }
}

// ============================================================
// 3. Main Entry Point
// ============================================================
//
export { githubAuthExample, textGenerationExample };

// If running directly (not as module)
if (import.meta.url === import.meta.resolve(import.meta.url)) {
  console.log("=".repeat(60));
  console.log("Vercel AI SDK - Pixel Forge Studio Example");
  console.log("=".repeat(60));
  console.log(
    "\nThis script demonstrates Vercel AI Gateway integration."
  );
  console.log(
    "\nRun individual examples:\n"
  );
  console.log("  1. githubAuthExample() - GitHub OAuth flow");
  console.log(
    "  2. textGenerationExample() - AI text generation\n"
  );
  console.log("Set AI_GATEWAY_API_KEY in .env.local first.\n");
}

// Default: run the text generation example
textGenerationExample();