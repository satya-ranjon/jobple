import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          page: "var(--color-background-page)",
          component: "var(--color-background-component)",
        },
        brand: {
          primary: "var(--color-brand-primary)",
          hover: "var(--component-button-hover-primary)",
        },
        sidebar: {
          background: "var(--component-sidebar-background)",
        },
        semantic: {
          link: "var(--color-semantic-link)",
        },
        text: {
          black: "var(--color-text-black)",
        },
        border: {
          default: "var(--color-border-default)",
          component: "var(--color-border-component)",
          button: "var(--color-border-button)",
        },
        table: {
          header: "var(--color-table-header-background)",
        },
        status: {
          labelClosed: "var(--color-status-label-closed)",
        },
        component: {
          listBorder: "var(--component-list-border)",
        },
      },
      spacing: {
        xs: "var(--spacing-padding-xs)",
        s: "var(--spacing-padding-s)",
        m: "var(--spacing-padding-m)",
        l: "var(--spacing-padding-lg)",
        xl: "var(--spacing-padding-xl)",
        "3xl": "var(--spacing-padding-3xl)",
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        lg: "var(--radius-lg)",
      },
      fontSize: {
        xs: "var(--font-size-xs)",
        sm: "var(--font-size-sm)",
        md: "var(--font-size-md)",
        lg: "var(--font-size-lg)",
      },
      fontWeight: {
        regular: "var(--font-weight-regular)",
        semiBold: "var(--font-weight-semi-bold)",
        bold: "var(--font-weight-bold)",
      },
      borderWidth: {
        DEFAULT: "var(--component-border-width)",
        sm: "var(--component-border-width-sm)",
      },
      gap: {
        ss: "var(--spacing-gap-ss)",
        xs: "var(--spacing-gap-xs)",
      },
    },
  },
  plugins: [],
} satisfies Config;
