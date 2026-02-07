import { describe, it, expect } from 'vitest';
import { experienceData } from './experience';

describe('Experience Data', () => {
  it('should export an array of experience items', () => {
    expect(experienceData).toBeInstanceOf(Array);
    expect(experienceData.length).toBeGreaterThan(0);
  });

  it('should have valid structure for each experience item', () => {
    experienceData.forEach((job) => {
      expect(job.startYear).toBeTypeOf('string');
      expect(job.endYear).toBeTypeOf('string');
      expect(job.title).toBeTypeOf('string');
      expect(job.company).toBeTypeOf('string');
      expect(job.location).toBeTypeOf('string');
      expect(job.bullets).toBeInstanceOf(Array);
      expect(job.bullets.length).toBeGreaterThan(0);
    });
  });

  it('should have valid bullet points for each job', () => {
    experienceData.forEach((job) => {
      job.bullets.forEach((bullet) => {
        expect(bullet).toBeTypeOf('string');
        expect(bullet.length).toBeGreaterThan(0);
      });
    });
  });

  it('should be sorted by most recent first', () => {
    for (let i = 0; i < experienceData.length - 1; i++) {
      const currentYear = experienceData[i].endYear === 'Present'
        ? 9999
        : parseInt(experienceData[i].endYear);
      const nextYear = experienceData[i + 1].endYear === 'Present'
        ? 9999
        : parseInt(experienceData[i + 1].endYear);
      expect(currentYear).toBeGreaterThanOrEqual(nextYear);
    }
  });
});
