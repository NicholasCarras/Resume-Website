"use client";

import { useState } from "react";
import { ArrowUpRight, Plus } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { skillGroups } from "@/content/portfolio";
import { OrbitalScene } from "@/components/effects/orbital-scene";

export function SkillsShowcase() {
  const [active, setActive] = useState(skillGroups[0].id);
  const selected =
    skillGroups.find((group) => group.id === active) ?? skillGroups[0];

  return (
    <div className="skills-showcase">
      <div className="skill-system">
        <div className="system-head mono">
          <span>ENGINEERING CORE</span>
          <span>{selected.number} / 04</span>
        </div>
        <OrbitalScene variant="core" color={selected.color} interactive />
        <div className="system-center-label">
          <span className="mono">LAYER {selected.number}</span>
          <strong>{selected.label}</strong>
        </div>
        <span className="scene-hint">Drag or use arrow keys to rotate</span>
      </div>
      <Tabs value={active} onValueChange={setActive} className="skill-tabs">
        <TabsList aria-label="Skill categories">
          {skillGroups.map((group) => (
            <TabsTrigger key={group.id} value={group.id}>
              {group.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {skillGroups.map((group) => (
          <TabsContent key={group.id} value={group.id} className="skill-panel">
            <h2>{group.title}</h2>
            <p>{group.description}</p>
            <ul className="skill-list">
              {group.skills.map((skill) => (
                <li key={skill}>
                  <Plus aria-hidden="true" />
                  {skill}
                </li>
              ))}
            </ul>
            <a href={`/projects/${group.projectSlug}`} className="text-link">
              See it in a project <ArrowUpRight aria-hidden="true" />
            </a>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
