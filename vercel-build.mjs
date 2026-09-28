import { cp, mkdir, rm } from "node:fs/promises";
import { spawn } from "node:child_process";
import { resolve } from "node:path";

const projectDir = resolve("fit-nation-shutter");
const command = process.platform === "win32" ? process.env.ComSpec : "npm";
const args =
  process.platform === "win32" ? ["/d", "/s", "/c", "npm run build"] : ["run", "build"];

await new Promise((resolvePromise, reject) => {
  const child = spawn(command, args, {
    cwd: projectDir,
    stdio: "inherit",
  });

  child.on("error", reject);
  child.on("exit", (code) => {
    if (code === 0) resolvePromise();
    else reject(new Error(`Application build exited with code ${code ?? "unknown"}`));
  });
});

const outputDir = resolve(".vercel", "output");
await rm(outputDir, { recursive: true, force: true });
await mkdir(resolve(".vercel"), { recursive: true });
await cp(resolve(projectDir, ".vercel", "output"), outputDir, { recursive: true });
