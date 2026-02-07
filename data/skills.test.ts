import { describe, it, expect } from 'vitest';
import { skillsData } from './skills';

describe('Skills Data', () => {
  it('should export an array of skills', () => {
    expect(skillsData).toBeInstanceOf(Array);
    expect(skillsData.length).toBeGreaterThan(0);
  });

  it('should have valid skill strings', () => {
    skillsData.forEach((skill) => {
      expect(skill).toBeTypeOf('string');
      expect(skill.length).toBeGreaterThan(0);
      expect(skill.trim()).toBe(skill); // No leading/trailing whitespace
    });
  });

  it('should have no duplicate skills', () => {
    const uniqueSkills = new Set(skillsData);
    expect(uniqueSkills.size).toBe(skillsData.length);
  });
});
