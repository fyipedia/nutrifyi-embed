/**
 * nutrifyi-embed — TypeScript declarations
 *
 * The embed script is self-executing. Simply import it to activate widgets.
 * All configuration is provided via data-* attributes on DOM elements.
 */

export {};

declare global {
  interface HTMLElement {
    dataset: DOMStringMap & {
      /** Widget type for NutriFYI */
      'nutrifyi'?: 'entity' | 'compare' | 'glossary' | 'guide' | 'search' | 'faq' | 'bmi-calculator' | 'nutrition-label' | 'macro-badge';
      /** Entity slug (e.g. "foods") */
      slug?: string;
      /** Visual theme */
      theme?: 'light' | 'dark' | 'sepia' | 'auto';
      /** Widget design style */
      styleVariant?: 'modern' | 'clean';
      /** Widget size */
      size?: 'default' | 'compact' | 'large';
      /** Search box placeholder text */
      placeholder?: string;
    };
  }
}
