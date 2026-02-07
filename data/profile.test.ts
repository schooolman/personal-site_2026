import { describe, it, expect } from 'vitest';
import { profileData } from './profile';

describe('Profile Data', () => {
  it('should export profileData with required schema.org fields', () => {
    expect(profileData).toBeDefined();
    expect(profileData['@context']).toBe('https://schema.org');
    expect(profileData['@type']).toBe('Person');
    expect(profileData.name).toBe('Jake Schoolmeesters');
    expect(profileData.jobTitle).toBeTypeOf('string');
    expect(profileData.email).toBeTypeOf('string');
  });

  it('should have valid social media links', () => {
    expect(profileData.sameAs).toBeInstanceOf(Array);
    expect(profileData.sameAs.length).toBeGreaterThan(0);
    profileData.sameAs.forEach((url: string) => {
      expect(url).toMatch(/^https?:\/\//);
    });
  });

  it('should have address information', () => {
    expect(profileData.address).toBeDefined();
    expect(profileData.address['@type']).toBe('PostalAddress');
    expect(profileData.address.addressLocality).toBeTypeOf('string');
  });

  it('should have skills array', () => {
    expect(profileData.knowsAbout).toBeInstanceOf(Array);
    expect(profileData.knowsAbout.length).toBeGreaterThan(0);
  });
});
