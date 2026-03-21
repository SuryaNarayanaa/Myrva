// @ts-nocheck
import { browser } from 'fumadocs-mdx/runtime/browser';
import type * as Config from '../source.config';

const create = browser<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();
const browserCollections = {
  docs: create.doc("docs", {"ai-models.mdx": () => import("../content/docs/ai-models.mdx?collection=docs"), "architecture.mdx": () => import("../content/docs/architecture.mdx?collection=docs"), "index.mdx": () => import("../content/docs/index.mdx?collection=docs"), "policy-and-pricing.mdx": () => import("../content/docs/policy-and-pricing.mdx?collection=docs"), "problem-and-persona.mdx": () => import("../content/docs/problem-and-persona.mdx?collection=docs"), "roadmap.mdx": () => import("../content/docs/roadmap.mdx?collection=docs"), "tech-stack-and-data.mdx": () => import("../content/docs/tech-stack-and-data.mdx?collection=docs"), "workflow.mdx": () => import("../content/docs/workflow.mdx?collection=docs"), }),
};
export default browserCollections;