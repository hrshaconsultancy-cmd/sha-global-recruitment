import type { Config } from "tailwindcss";
export default { content: ["./app/**/*.{js,ts,jsx,tsx}"], theme: { extend: { colors: { gold: "#D4AF37", ink: "#080808" }, fontFamily: { display: ["Georgia", "serif"] } } }, plugins: [] } satisfies Config;
