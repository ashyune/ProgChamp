import { writable } from "svelte/store";

export type Submission = {
  id: string;
  title: string;
  description: string;
  url: string;
  thumbnail: File | null;
  status: "pending" | "approved" | "rejected";
};

export const submissions = writable<Submission[]>([]);
