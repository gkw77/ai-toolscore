// toolscore — live GitHub data fetcher.
// Discovery:  node scripts/gh-fetch.mjs search "<query>" [n]
//   prints candidate repos (name / stars / pushed / topics / desc) to eyeball.
// Stats:      node scripts/gh-fetch.mjs stats owner/repo owner/repo2 ...
//   writes src/data/github-stats.json { "owner/repo": { stars, pushedAt, fetchedAt } }
// Numbers here are NEVER hand-typed into curated files — they come from this script.

const API = "https://api.github.com";

function gh(path) {
  return fetch(API + path, {
    headers: {
      Accept: "application/vnd.github+json",
      "User-Agent": "toolscore-fetch",
    },
  }).then(async (r) => {
    if (!r.ok) throw new Error(`${r.status} ${path}: ${(await r.text()).slice(0, 160)}`);
    return r.json();
  });
}

async function search(query, n) {
  const j = await gh(
    `/search/repositories?q=${encodeURIComponent(query)}&sort=stars&order=desc&per_page=${n}`
  );
  for (const r of j.items ?? []) {
    const topics = (r.topics ?? []).join(",");
    console.log(
      [
        r.full_name,
        `stars=${r.stargazers_count}`,
        `pushed=${(r.pushed_at ?? "").slice(0, 10)}`,
        `forks=${r.forks_count}`,
        topics && `topics=${topics}`,
        (r.description ?? "").slice(0, 110).replace(/\s+/g, " "),
      ]
        .filter(Boolean)
        .join("  |  ")
    );
  }
  console.log(`# total_count=${j.total_count}`);
}

async function stats(names) {
  const out = {};
  for (const name of names) {
    const r = await gh(`/repos/${name}`);
    out[name] = { stars: r.stargazers_count, pushedAt: r.pushed_at, fetchedAt: new Date().toISOString() };
    console.log(`fetched ${name} -> ${out[name].stars}★`);
  }
  const fs = await import("node:fs");
  fs.writeFileSync("src/data/github-stats.json", JSON.stringify(out, null, 2) + "\n");
  console.log(`wrote src/data/github-stats.json (${names.length} repos)`);
}

const [, , cmd, arg, n = "15"] = process.argv;
if (cmd === "search") await search(arg, parseInt(n, 10));
else if (cmd === "stats") await stats(arg.split(",").map((s) => s.trim()).filter(Boolean));
else console.log("usage: gh-fetch.mjs search \"<q>\" [n]  |  gh-fetch.mjs stats owner/repo,...");
