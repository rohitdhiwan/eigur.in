# TOOLS.md - Local Notes

Skills define _how_ tools work. This file is for _your_ specifics — the stuff that's unique to your setup.

## What Goes Here

Things like:

- Camera names and locations
- SSH hosts and aliases
- Preferred voices for TTS
- Speaker/room names
- Device nicknames
- Anything environment-specific

## Examples

```markdown
### Cameras

- living-room → Main area, 180° wide angle
- front-door → Entrance, motion-triggered

### SSH

- home-server → 192.168.1.100, user: admin

### TTS

- Preferred voice: "Nova" (warm, slightly British)
- Default speaker: Kitchen HomePod
```

## Why Separate?

Skills are shared. Your setup is yours. Keeping them apart means you can update skills without losing your notes, and share skills without leaking your infrastructure.

---

## AI Model Strategy (User Preference)

- **Simple tasks** → Use local models (fast, no rate limits)
- **Complex tasks** → Use qwen (qwen-portal/coder-model)
- **Decision** → I decide strategically based on task complexity

### What counts as "simple":
- Basic Q&A, file reads, quick lookups
- Simple edits, formatting, organization
- Status checks, heartbeats

### What counts as "complex":
- Code generation/debugging
- Multi-step reasoning
- Creative work, analysis, synthesis
- Anything requiring deep understanding

---

## Local AI Setup

### Ollama
- **Status:** Running (background service)
- **Models available:**
  - `mistral:7b-instruct` (4.4 GB) - General purpose, good for most tasks
- **Usage:** Default for simple tasks

---

Add whatever helps you do your job. This is your cheat sheet.
