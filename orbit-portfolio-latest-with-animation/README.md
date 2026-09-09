# ORBIT — Engineering portfolio

A responsive software engineering portfolio with six main pages, project case studies, a generated robot hero, and interactive Three.js scenes.

## Run locally

Use Node.js 22.13 or newer.

```sh
npm ci
npm run dev
```

Open the local address printed by the dev command. To verify a change:

```sh
npm run typecheck
npm run build
```

## Edit

| What                                                   | Where                                    |
| ------------------------------------------------------ | ---------------------------------------- |
| Name, bio, links, résumé, projects, skills, experience | `content/portfolio.ts`                   |
| Individual page layouts                                | `app/*/page.tsx`                         |
| Colors, fonts, spacing, mobile breakpoints             | `app/globals.css`                        |
| Header, mobile navigation, footer, motion control      | `components/portfolio/site-shell.tsx`    |
| 3D geometry, lighting, animation                       | `components/effects/orbital-renderer.ts` |
| Images and downloadable files                          | `public/`                                |

Add a project by copying an entry in `projects` and giving it a unique `slug`. Its case-study page is generated automatically. For a screenshot, add `imageUrl: "/images/my-project.webp"` and a descriptive `imageAlt`. Empty demo and source links stay hidden.

Put your PDF at `public/resume.pdf`, then set `resumeUrl: "/resume.pdf"`. Add your real email, GitHub, and LinkedIn URLs to enable contact actions. Email opens the visitor’s email app; this site does not collect messages.

Replace the example content, then set `exampleContent: false` to remove sample labels and enable search indexing. Review each page before making it public.

Run `npm run format` after editing. Comments explain the less obvious choices; everyday content needs no animation-code changes.

## Publish and update

This checkout is connected to its Sites source repository. The first publication is private for review. Ask to publish the Site publicly when your content is ready; a custom domain can be connected afterward. Subsequent code edits need a new publication before visitors see them. Local saves alone do not change the live site.

The source is a React/TypeScript project using the Next.js App Router conventions and Vinext for Cloudflare Workers. Keep `package-lock.json` with the code. Moving to another host is possible, but requires that host’s build/deployment configuration; the existing Sites integration is not an automatic GitHub deployment.

## Motion

The home hero moves from robot artwork into a 3D core as you scroll. Large desktop screens use a sticky scene; mobile keeps ordinary scrolling. Page navigation uses standard links, with native page transitions where supported.

Scenes load near the viewport, pause offscreen and in background tabs, and use lower rendering resolution on mobile. The footer motion control and system reduced-motion preference stop decorative animation. The Skills scene also supports dragging and arrow keys. Content remains accessible when WebGL is unavailable.

The robot is generated artwork. All project descriptions, roles, skill lists, and biography text are editable examples, not verified personal claims.
