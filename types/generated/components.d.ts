import type { Schema, Struct } from '@strapi/strapi';

export interface SectionsHeroSlide extends Struct.ComponentSchema {
  collectionName: 'components_sections_hero_slides';
  info: {
    displayName: 'heroSlide';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    buttonLink: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    Rich_text: Schema.Attribute.Blocks;
    Text: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'sections.hero-slide': SectionsHeroSlide;
    }
  }
}
