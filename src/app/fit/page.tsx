import type { Metadata } from "next";
import FitPageClient from "./FitPageClient";

export const metadata: Metadata = {
  title: "Right Fit / Wrong Fit | Lincoln Mitchell",
  description:
    "A direct signal about who I work best with — and who I don't. Saves both sides time.",
};

export default function FitPage() {
  return <FitPageClient />;
}
