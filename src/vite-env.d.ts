/// <reference types="vite/client" />

declare module "react-full-page";

interface Project {
  id: number;
  type: string;
  skill: string[];
  name: string;
  explan: string;
  summary: string;
  thumnail: string;
  image: string;
  deploy: string | null;
  github: string | null;
  figma: string | null;
  ppt: string | null;
  created_at?: string;
}

interface Skill {
  id: number;
  bg: string;
  color: string;
  deg: number;
  left: number;
  top: number;
  skill: string;
}