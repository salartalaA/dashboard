import { ElementType } from "react";

export type NavItemsT = {
  id: number;
  label: string;
  variant: "default" | "destructive";
  icon: ElementType;
};

export type MenuItemsT = {
  id: number;
  title: string;
  url: string;
  icon: ElementType;
};

export type FooterItemsT = {
  id: number;
  label: string;
};

export type HomeItemsT = {
  id: number;
  title?: string;
  component: ElementType | string;
  className: string;
};

export type popularContentT = {
  id: number;
  title: string;
  badge: string;
  image: string;
  count: number;
};

export type latestTransactionsT = {
  id: number;
  title: string;
  badge: string;
  image: string;
  count: number;
};
