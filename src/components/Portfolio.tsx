"use client";

import Image from "next/image";
// Lightbox removed - using simple image display instead

const photos = [
  "/img/gallery/g1.jpg",
  "/img/gallery/g2.jpg",
  "/img/gallery/g3.jpg",
  "/img/gallery/g4.jpg",
  "/img/gallery/g5.jpg",
];

export default function Gallery() {
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Photo Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {photos.map((src, i) => (
            <div key={i} className="relative w-full h-60">
              <Image
                src={src}
                alt={`Gallery image ${i + 1}`}
                fill
                className="object-cover rounded-lg shadow-md"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
