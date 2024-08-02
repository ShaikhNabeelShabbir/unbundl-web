// Global configuration for the application is defined here.
// This is the only place where the global configuration is defined.

// Env variables are validated and exported from this singular file to be referenced throughout the application.

import { createEnv } from "@t3-oss/env-core"
import { z } from "zod"

export const env = createEnv({
	clientPrefix: "VITE_",

	client: {
		VITE_APP_ENV: z.enum(["local", "development", "production"]),
		VITE_API_URL: z
			.string()
			.url()
			.refine((url) => !url.endsWith("/")),
	},

	runtimeEnv: {
		VITE_APP_ENV: import.meta.env.VITE_APP_ENV,
		VITE_API_URL: import.meta.env.VITE_API_URL,
	},
})
