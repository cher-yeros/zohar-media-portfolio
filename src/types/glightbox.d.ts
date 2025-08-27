declare module 'glightbox' {
  interface GLightboxOptions {
    selector?: string;
    touchNavigation?: boolean;
    loop?: boolean;
    autoplayVideos?: boolean;
    plyr?: {
      css?: string;
      js?: string;
      config?: {
        ratio?: string;
        muted?: boolean;
        hideControls?: boolean;
        youtube?: {
          noCookie?: boolean;
          rel?: number;
          showinfo?: number;
          iv_load_policy?: number;
        };
      };
    };
  }

  interface GLightboxInstance {
    destroy(): void;
  }

  function GLightbox(options?: GLightboxOptions): GLightboxInstance;
  export = GLightbox;
}
