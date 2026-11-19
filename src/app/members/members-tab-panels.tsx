"use client";

import dynamic from "next/dynamic";

const ExecutiveBoard = dynamic(() => import("./executive_board"), {
  loading: () => <MembersPanelFallback />,
});

const Class2027 = dynamic(() => import("./gen_body_2027"), {
  loading: () => <MembersPanelFallback />,
});

const Class2028 = dynamic(() => import("./gen_body_2028"), {
  loading: () => <MembersPanelFallback />,
});

const Alumni = dynamic(() => import("./past_alumni"), {
  loading: () => <MembersPanelFallback />,
});

const Class2029 = dynamic(() => import("./gen_body_2029"), {
  loading: () => <MembersPanelFallback />,
});

function MembersPanelFallback() {
  return (
    <div
      className="flex min-h-[280px] items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-slate-50/80 text-sm text-slate-500"
      aria-busy="true"
    >
      Loading members…
    </div>
  );
}

export type MembersTabId =
  | "Executive Board"
  | "Class of 2027"
  | "Class of 2028"
  | "Class of 2029"
  | "Alumni";

export function MembersTabPanels({ active }: { active: MembersTabId }) {
  return (
    <>
      {active === "Executive Board" && <ExecutiveBoard />}
      {active === "Class of 2027" && <Class2027 />}
      {active === "Class of 2028" && <Class2028 />}
      {active === "Class of 2029" && <Class2029 />}
      {active === "Alumni" && <Alumni />}
    </>
  );
}
