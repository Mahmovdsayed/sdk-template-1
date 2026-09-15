import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Certification from "@/components/sections/certification/Certification";
import Contact from "@/components/sections/contact/Contact";
import Education from "@/components/sections/edu/Education";
import Faqs from "@/components/sections/faq/Faqs";
import Footer from "@/components/sections/footer/Footer";
import Header from "@/components/sections/header/Header";
import Info from "@/components/sections/info/Info";
import Project from "@/components/sections/project/Project";
import Skills from "@/components/sections/skills/Skills";
import Work from "@/components/sections/works/Work";

import { hirely } from "@/lib/hirely";
import { SITE_URL } from "@/constant/constant";
async function getPortfolio() {
  return hirely.get();
}

export async function generateMetadata(): Promise<Metadata> {
  const {
    profile,
    userName,
  } = await getPortfolio();

  if (!profile) {
    return {
      title: "Portfolio Not Found | Hirely",
      description: "This portfolio could not be found.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const fullName = [profile.firstName, profile.lastName].filter(Boolean).join(" ");
  const name = fullName || userName || "Professional Portfolio";
  const position = profile.positionName || "Professional";
  const location = [profile.city, profile.country].filter(Boolean).join(", ");
  const description = profile.about || `${name} is a ${position}${location ? ` based in ${location}` : ""}. Explore their experience, education, projects, skills, certifications, and professional work.`;
  const title = `${name} — ${position} `;
  const canonical = `${SITE_URL}`;

  return {
    metadataBase: new URL(SITE_URL),

    title: {
      absolute: title,
    },

    description,
    keywords: [
      name,
      position,
      `${name} portfolio`,
      `${position} portfolio`,
      `${position} resume`,
      `${position} CV`,
      "professional portfolio",
      "Hirely portfolio",
      location,
    ].filter(Boolean),

    authors: [
      {
        name,
        url: canonical,
      },
    ],
    creator: name,
    alternates: {
      canonical,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      type: "profile",
      url: canonical,
      title,
      description,
      siteName: "Hirely",
      locale: "en_US",

      ...(profile.avatar?.url && {
        images: [
          {
            url: profile.avatar.url,
            width: 800,
            height: 800,
            alt: `${name} — ${position}`,
          },
        ],
      }),

      firstName: profile.firstName,
      lastName: profile.lastName,
      username: userName,
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(profile.avatar?.url && {
        images: [profile.avatar.url],
      }),
    },
    category: "portfolio",
  };
}

export default async function Home() {
  const {
    profile,
    work,
    education,
    certificates,
    skills,
    projects,
    faq,
    contact,
    email,
    userName,
  } = await hirely.get();

  if (!profile || !contact) {
    notFound();
  }

  const fullName = [profile.firstName, profile.lastName].filter(Boolean).join(" ");
  const name = fullName || userName || "Professional";
  const location = [profile.city, profile.country].filter(Boolean).join(", ");
  const canonical = `${SITE_URL}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",

    name,
    ...(profile.avatar?.url && {
      image: profile.avatar.url,
    }),

    ...(profile.about && {
      description: profile.about,
    }),

    ...(profile.positionName && {
      jobTitle: profile.positionName,
    }),

    ...(location && {
      address: {
        "@type": "PostalAddress",
        ...(profile.city && {
          addressLocality: profile.city,
        }),
        ...(profile.country && {
          addressCountry: profile.country,
        }),
      },
    }),

    url: canonical,

    ...(email && {
      email: `mailto:${email}`,
    }),

    sameAs:
      contact.socialLinks
        ?.map((social) => social.url)
        .filter(Boolean) || [],

    knowsAbout:
      skills
        ?.map((skill) => skill.name)
        .filter(Boolean) || [],

    worksFor: undefined,

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonical,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <main className="mx-auto z-10 w-full max-w-170">
        <Header profile={profile} />
        <Info profile={profile} />
        <Work works={work} />
        <Education education={education} />
        <Certification certification={certificates} />
        <Skills skills={skills} />
        <Project projects={projects} />
        <Faqs faqs={faq} />
        <Contact contacts={contact} email={email!} />
        <Footer />
      </main>
    </>
  );
}