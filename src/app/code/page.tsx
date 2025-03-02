import React from "react";
import ProgramCard from "../components/code/ProgramCard";
import CodeTabs from "../components/code/CodeTab";
import SectionLayout from "../components/SectionLayout";

export default function Code() {
  return (
    <SectionLayout title="Code">
      <CodeTabs />
    </SectionLayout>
  );
}
