import React from "react";
import GalleryTabs from "../components/gallery/GalleryTabs";
import SectionLayout from "../components/SectionLayout";

export default function Gallery() {
  return (
    <SectionLayout title="Gallery">
    <GalleryTabs />
  </SectionLayout>
  );
}
