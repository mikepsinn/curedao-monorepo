import { SiteConfig } from "@/types"

import { env } from "@/env.mjs"

export const siteConfig: SiteConfig = {
  name: "FDAi",
  description:
    "Using a to determine the effects of every food and drug in the world!",
  keywords: [
  ],
  url: {
    base: env.NEXT_PUBLIC_APP_URL,
  },
  links: {
    github: "https://github.com/FDA-AI/FDAi",
  },
  ogImage: `${env.NEXT_PUBLIC_APP_URL}/og.png`,
}
