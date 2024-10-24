import { createApiClient } from "./schema";
import { ZodiosHooks } from "@zodios/react";
import { env } from "@/env";

const devAPI = "localhost:8000";

// This is the base endpoint of the server
const baseURL = import.meta.env.DEV ? devAPI : env.VITE_PROD_API;
const apiClient = createApiClient(baseURL);

export const api = new ZodiosHooks("archiveAPI", apiClient);
