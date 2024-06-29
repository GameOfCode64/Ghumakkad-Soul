declare module "tailwindcss/plugin" {
  interface PluginAPI {
    addUtilities: (
      utilities: object,
      options?: {
        variants?: string[];
        respectPrefix?: boolean;
        respectImportant?: boolean;
      }
    ) => void;
  }
}
