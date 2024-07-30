// Import the configuration and Wisp CMS client components
import { config } from "@/config";
import {
  buildWispClient,
  GetPostsResult,
  GetPostResult,
} from "@wisp-cms/client";

// Check if blogId is defined before creating the client
if (!config.wisp.blogId) {
  throw new Error('Blog ID is not defined in the configuration.');
}

// Create a Wisp client instance using the blogId from the configuration
export const wisp = buildWispClient({
  blogId: config.wisp.blogId,
});

// Export the types for use in other parts of your application
export type { GetPostsResult, GetPostResult };
