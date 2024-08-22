"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Next.js</li>
        <li>Laravel</li>
        <li>MySQL</li>
        <li>Tailwind css</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Software Engineering - SMKN 1 Surabaya </li>
        <li>Bachelor degree Computer Science UPN Veteran Jatim (upcoming)</li>
      </ul>
    ),
  },
  {
    title: "Experiences",
    id: "experiences",
    content: (
      <ul className="list-disc pl-2">
        <li>Internship PT. Floo.id</li>
        <li>Freelance project dengan Graha Mutu Persada Mojokerto (GMP)</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about.jpg" width={500} height={500} alt="" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          Saya adalah seorang pengembang web dengan ketertarikan mendalam di bidang web development. Dengan pengalaman yang luas dalam menggunakan Laravel, Tailwind CSS, Next.js, dan MySQL, saya telah membangun berbagai aplikasi dan situs web yang responsif dan berkinerja tinggi. Komitmen saya untuk terus berkembang dan belajar memastikan bahwa saya selalu mengikuti perkembangan terbaru dalam teknologi dan tren industri. Saya bersemangat untuk mengeksplorasi tantangan baru dan berkontribusi dalam menciptakan solusi inovatif yang memenuhi kebutuhan pengguna.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experiences")}
              active={tab === "experiences"}
            >
              {" "}
              Experiences{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
