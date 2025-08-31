export interface SocialLinkItem {
  name: "GitHub" | "LinkedIn" | "Velog" | string;
  url: string;
}

export const socialLinks: SocialLinkItem[] = [
  { name: "GitHub", url: "https://github.com/parkkr-js" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/%EC%A7%80%EC%84%B1-%EB%B0%95-414b32328/" },
  { name: "Velog", url: "https://velog.io/@live_in_truth/posts" },
  { name: "Email", url: "mailto:parkkr.js@gmail.com" },
];
