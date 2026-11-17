// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// Never set ssr.external or resolve.external: the Worker has no runtime module resolution, so
// the build fails. Never add compression (compressPublicAssets, vite-plugin-compression):
// hosting already compresses at the edge.
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { cloudflare } from "@cloudflare/vite-plugin";
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Lovable's preview and publish builds set these; there the built-in Nitro Cloudflare build is used.
// Everywhere else (local dev, CI, `wrangler deploy`) use Cloudflare's official Vite plugin instead,
// with Nitro switched off so the server bundle isn't built twice. Config lives in wrangler.jsonc.
const isLovableBuild =
  process.env["LOVABLE_SANDBOX"] === "1" || !!process.env["DEV_SERVER__PROJECT_PATH"];

export default defineConfig({
  ...(isLovableBuild
    ? {}
    : {
        nitro: false as const,
        plugins: [cloudflare({ viteEnvironment: { name: "ssr" } })],
      }),
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  vite: {
    // Pre-bundle deps used by the site shell so Vite doesn't re-optimize mid-session,
    // which can load two React copies and crash hooks ("reading 'useState'").
    optimizeDeps: {
      include: [
        "@radix-ui/react-dialog",
        "@radix-ui/react-slot",
        "@radix-ui/react-label",
        "class-variance-authority",
        "clsx",
        "tailwind-merge",
        "lucide-react",
        "sonner",
        "zod",
      ],
    },
  },
});
