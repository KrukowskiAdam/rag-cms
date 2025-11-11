import type { Schema, Struct } from '@strapi/strapi';

export interface SectionsCta extends Struct.ComponentSchema {
  collectionName: 'components_sections_ctas';
  info: {
    displayName: 'CTA';
  };
  attributes: {
    buttonLink: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionsFooter extends Struct.ComponentSchema {
  collectionName: 'components_sections_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    companyName: Schema.Attribute.Text;
    copyright: Schema.Attribute.Text;
  };
}

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

export interface SectionsItems extends Struct.ComponentSchema {
  collectionName: 'components_sections_items';
  info: {
    displayName: 'items';
  };
  attributes: {
    color: Schema.Attribute.String;
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface SectionsStats extends Struct.ComponentSchema {
  collectionName: 'components_sections_stats';
  info: {
    displayName: 'Stats';
  };
  attributes: {
    statItem: Schema.Attribute.Component<'sections.items', true>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionsTeaser extends Struct.ComponentSchema {
  collectionName: 'components_sections_teasers';
  info: {
    displayName: 'Teaser';
  };
  attributes: {
    backgroundColor: Schema.Attribute.String;
    buttonLink: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    description: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imagePosition: Schema.Attribute.Enumeration<['left', 'right']>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsTextBlock extends Struct.ComponentSchema {
  collectionName: 'components_sections_text_blocks';
  info: {
    displayName: 'TextBlock';
  };
  attributes: {
    alignment: Schema.Attribute.Enumeration<['left', 'center', 'right']>;
    backgroundColor: Schema.Attribute.String;
    content: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'sections.cta': SectionsCta;
      'sections.footer': SectionsFooter;
      'sections.hero-slide': SectionsHeroSlide;
      'sections.items': SectionsItems;
      'sections.stats': SectionsStats;
      'sections.teaser': SectionsTeaser;
      'sections.text-block': SectionsTextBlock;
    }
  }
}
