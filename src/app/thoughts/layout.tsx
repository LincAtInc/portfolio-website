import { ThoughtsSubNav } from "@/components/ThoughtsSubNav";

export default function ThoughtsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ThoughtsSubNav />
      <div className="thoughts-content">
        {children}
      </div>
    </>
  );
}
