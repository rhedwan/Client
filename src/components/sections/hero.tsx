"use client";

import { Container } from "@/components/Container";
import { FadeIn } from "../uis/FadeIn";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import YouTube from "react-youtube";
import {
  BookOpen,
  Users,
  Heart,
  Info,
  ChevronLeft,
  ChevronRight,
  Calendar,
  CheckCircle,
  Facebook,
} from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface RequiredDocument {
  document: string;
  notes: string[];
}

interface ScholarshipData {
  title: string;
  subtitle: string;
  about: string;
  benefits: string[];
  eligibleInstitutions: string[];
  eligibilityCriteria: string[];
  requiredDocuments: RequiredDocument[];
  applicationDetails: {
    portal: string;
    openDate: string;
    closeDate: string;
  };
}
const scholarshipData = {
  title: "Undergraduate Learning Support Programme (Male) 2025",
  subtitle:
    "For male undergraduates in selected public universities in Nigeria",
  about:
    "Undergraduate Learning Support Programme (Male) is a scholarship and mentorship programme for male Muslim undergraduate students who demonstrates excellent academic abilities. The programme provides Islamic mentorship as well as academic support, in the form of stipends, to selected scholars in a bid to enhance the building of academically excellent students with good Islamic and moral background.",
  benefits: [
    "Islamic Development Mentorship Sessions and Training",
    "Academic and Career Development Mentorship",
    "Monthly Stipends amongst others",
  ],
  eligibleInstitutions: [
    "University of Lagos, Akoka",
    "Lagos State University, Ojo",
    "Lagos State University of Science & Technology",
    "Lagos State University of Education",
  ],
  eligibilityCriteria: [
    "100 level male Muslim undergraduates",
    "Full time student at the eligible institutions",
    "Between 16 and 19 years old",
    "Have minimum of six credit passes in SSCE in one sitting",
    "Scored minimum of 250 in last UTME taken before admission",
    "Physically, mentally and psychologically stable",
    "Good moral conducts and leadership abilities",
  ],
  requiredDocuments: [
    {
      document: "JAMB Admission Letter",
      notes: [],
    },
    {
      document:
        "Evidence of Current Studentship of Institution (ID Card, Biodata Form e.t.c)",
      notes: [],
    },
    {
      document:
        "Reference letter from a reputable Islamic Organization (Institution-based Students Organizations are not acceptable)",
      notes: [
        "Letter must be on letterheaded paper and be addressed to The Executive Director, First Class Muslim Foundation, Lagos, Nigeria.",
        "Letters should genuinely speak to the character of the applicants and should not be generic.",
        "Improperly addressed letters or generic letters will lead to disqualification.",
      ],
    },
    ,
    {
      document: "Birth Certificate or Affidavit of Age",
      notes: [],
    },
    {
      document: "Original WAEC Result",
      notes: [],
    },
    {
      document: "Original UTME Result",
      notes: [],
    },
    {
      document: "Current result slip showing student GPA (If available)",
      notes: [],
    },
    {
      document:
        "A Personal Statement to convince panellists as to why they should consider her for the scholarship.",
      notes: [
        "Word limit for Personal Statement is 300.",
        "Font type is Century Gothic and font size is 12.",
        "Spacing should be 1.5.",
        "Full name should be written at the top of the document.",
        "The unethical use of AI tools to generate or significantly adjust/review personal statements is prohibited. All personal statements submitted will be tested and evaluated for plagiarism or AI-derivation. AI detection beyond 20% is not acceptable. Applicants who disregard this will be disqualified from current and any future opportunities from the foundation.",
      ],
    },
  ],
  applicationDetails: {
    portal: "www.fcmfoundation.org",
    openDate: "15th December, 2024",
    closeDate: "5th January, 2025",
  },
};

const slides = [
  {
    title: "Undergraduate Learning Support Programme (Male) 2025",
    description:
      "Undergraduate Learning Support Programme (Male) is a scholarship and mentorship programme for male Muslim undergraduate students who demonstrates excellent academic abilities. The programme provides Islamic mentorship as well as academic support, in the form of stipends, to selected scholars in a bid to enhance the building of academically excellent students with good Islamic and moral background.",
    status: "Ongoing",
    image: "/images/ulspmale-2025.jpg",
    eligibility: [
      "100 level male Muslim undergraduates",
      "Full time student at the eligible institutions",
      "Between 16 and 19 years old",
      "Have minimum of six credit passes in SSCE in one sitting",
      "Scored minimum of 250 in last UTME taken before admission",
      "Physically, mentally and psychologically stable",
      "Good moral conducts and leadership abilities",
    ],
    deadline: "Sunday 15th December, 2024 to Wednesday 5th January, 2025",
    link: "#ulsp-male",
  },
  {
    title: "Undergraduate Learning Support Programme (Female) 2025",
    description:
      "Undergraduate Learning Support Programme (Female) is a scholarship and mentorship programme for female Muslim undergraduate students who demonstrates excellent academic abilities. The programme provides Islamic mentorship as well as academic support, in the form of stipends, to selected scholars in a bid to enhance the building of academically excellent students with good Islamic and moral background.",
    status: "Past",
    image: "/images/ulspfemale.jpg",
    eligibility: [
      "100 level female Muslim undergraduates",
      "Full time student at the University of Lagos, Akoka or Lagos State University, Ojo",
      "Between 16 and 19 years old",
      "Have minimum of six credit passes in SSCE in one sitting",
      "Scored minimum of 250 in last UTME taken before admission",
      "Physically, mentally and psychologically stable",
      "Good moral conducts and leadership abilities",
    ],
    deadline: "Sunday 1st December, 2024 to Wednesday 14th December, 2024",
    link: "#ulsp-female",
  },
  {
    title: "FCM Foundation Board Scholarship",
    description:
      "The FCM Foundation Board Scholarship empowers the next generation of female leaders by supporting female undergraduates in selected public universities across Nigeria. This scholarship program aims to uplift and provide opportunities for young Muslim women to excel academically and professionally.",
    status: "Past",
    image: "/images/boardScholars.png",
    eligibility: [
      "Be a female undergraduate Muslim student",
      "Be currently in 200 or 300 level in one of the 22 eligible universities",
      "Have a minimum CGPA of 4.5 and above (or equivalence)",
      "Be ready to attend the one day mentorship session in person in Lagos, Nigeria in November 2024.",
    ],
    deadline: "Sunday 1st September, 2024 to Wednesday 25th September, 2024",
    link: "#fcm-foundation-board-scholarship",
  },
  {
    title: "STUDENTS’ MENTORSHIP PROGRAMME 2024",
    description:
      "Students’ Mentorship Programme is specially planned to drive undergraduate students towards academic excellence and future career fulfilment. The programme aims to create a supportive and enriching environment for students by exposing them to experienced mentors and experts who can provide guidance, and encouragement as they navigate their academic and professional journeys.",
    status: "Past",
    image: "/images/mentorship.png",
    eligibility: [
      "Undergraduate student at state and federal universities within Lagos State",
      "Must have a minimum CGPA of 4.0 out of 5.0 or equivalence",
    ],
    deadline: "N/A",
    link: "#",
  },
  {
    title: "M-First Leadership Training (M-First Series)",
    description:
      "M-First series is a leadership program design to groom and re- orientate Muslim First-Class Graduates in Nigeria. The overarching goal of M-First Series is to enhance scholastic and impactful future for first class Muslim graduates. The series ultimately prepares them for future career challenges and guides them to a purposeful future.",
    status: "Past",
    image: "/images/mFirst.png",
    eligibility: [
      "A first class graduate of state, federal, or Private universities or polytechnics.",
      "Be a muslim.",
    ],
    deadline: "N/A",
    link: "#",
  },
];

const trustees = [
  {
    name: "Sulaimon O. Ogumuyiwa (PhD)",
    role: "Chairman",
    image: "/images/chairman.png",
    bio: "Dr. Sulaimon Ogunmuyiwa is a distinguished Counsellor, Speaker, and Educational Administrator. His academic journey culminated in a Ph.D. in Education Administration and Planning from the University of Abuja.",
  },
  {
    name: "Abolore A. Shobayo",
    role: "Executive Director",
    image: "/images/executiveDirector.png",
    bio: "Abolore Sobayo, founder of Cowrie Studios, is a visual artist with a keen political consciousness.Sobayo’s dedication to art speaks clearly with a unique voice especially in light of his recent exhibitions both locally and internationally.",
  },
  {
    name: "Engr. Faheed Olajide",
    role: "Board Member",
    image: "/images/boardMember.png",
    bio: "Engr. Faheed Olajide, based in Nigeria, is currently the Chief Executive Officer of Omnicom Solutions Limited, bringing experience from previous roles at AVAS Technologies Limited, Payvantage Limited and Alcatel-Lucent.",
  },
  {
    name: "Qazeem Akinlotan (MSc)",
    role: "Programme & Administrative Head",
    image: "/images/adminHead.png",
    bio: "Qazeem is a Parasitologist, Vector Biologist and Bioinformatician. He has his first degree in Zoology (Parasitology) from the prestigious University of Lagos. He also holds a Masters in Parasitology and Bioinformatics from the same University.",
  },
];

export const HomeHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(nextSlide, 10000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };
  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1,
      controls: 1,
    },
  };
  return (
    <div className="hero-container">
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <FadeIn className="md:w-1/2 max-w-2xl">
            <h1 className="font-display text-6xl sm:text-7xl md:text-8xl font-semibold tracking-tight text-purple-950 text-balance">
              Welcome to First Class Muslim Foundation
            </h1>
            <p className="mt-6 text-xl text-purple-600 text-balance">
              We provide holistic support systems for Muslim youths to thrive,
              excel, grow, and become individuals with great accomplishments and
              global impact.
            </p>
          </FadeIn>

          <FadeIn className="md:w-1/2 flex justify-center items-center">
            <Image
              src={"/images/heroFemale.JPG"}
              alt={"Hero Section Image"}
              width={600}
              height={400}
              objectFit="cover"
              className="rounded-lg"
            />
          </FadeIn>
        </div>
      </Container>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-purple-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
            Our Programs and Initiatives
          </h2>
          <div className="relative max-w-6xl mx-auto">
            <div className="overflow-hidden rounded-lg bg-white shadow-lg">
              <div className="flex flex-col md:flex-row">
                <div className="p-6 md:p-8 md:w-1/2 flex flex-col">
                  <div className="mb-4">
                    <span className="inline-block bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full">
                      {slides[currentSlide].status}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">
                    {slides[currentSlide].title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {slides[currentSlide].description}
                  </p>
                  <div className="space-y-6 flex-grow">
                    <div>
                      <h4 className="text-lg font-semibold mb-2 flex items-center">
                        <CheckCircle className="h-5 w-5 text-purple-600 mr-2" />
                        Eligibility Criteria
                      </h4>
                      <ul className="list-disc pl-6 space-y-2">
                        {slides[currentSlide].eligibility.map(
                          (criterion, index) => (
                            <li key={index} className="text-sm text-gray-600">
                              {criterion}
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 text-purple-600 mr-2" />
                      <span className="text-sm font-medium">
                        Deadline: {slides[currentSlide].deadline}
                      </span>
                    </div>
                    <div className="flex items-start">
                      <Info className="h-5 w-5 text-purple-600 mr-2 mt-0.5" />
                      <p className="text-sm text-gray-600">
                        NB: Only shortlisted applicants will be contacted.
                      </p>
                    </div>
                  </div>
                  <div className="mt-8">
                    <Link href={`${slides[currentSlide].link}`}>
                      <Button className="w-full sm:w-auto bg-purple-600 text-white hover:bg-purple-700">
                        Read More
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <Image
                    src={slides[currentSlide].image}
                    alt={slides[currentSlide].title}
                    width={400}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 border-purple-600 text-purple-600 hover:bg-purple-100"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-6 w-6" />
              <span className="sr-only">Previous slide</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 border-purple-600 text-purple-600 hover:bg-purple-100"
              onClick={nextSlide}
            >
              <ChevronRight className="h-6 w-6" />
              <span className="sr-only">Next slide</span>
            </Button>
          </div>
          <div className="flex justify-center mt-4 space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentSlide ? "bg-purple-600" : "bg-gray-300"
                }`}
                onClick={() => setCurrentSlide(index)}
              >
                <span className="sr-only">Slide {index + 1}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <div
        id="fcm-foundation-board-scholarship"
        className="container mx-auto p-4 bg-gray-50 min-h-screen"
      >
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#2f3497] mb-2">
            {scholarshipData.title}
          </h1>
          <p className="text-xl text-[#c93eac]">{scholarshipData.subtitle}</p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="border-[#2f3497] border-t-4">
            <CardHeader>
              <CardTitle className="text-[#2f3497]">About</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{scholarshipData.about}</p>
            </CardContent>
          </Card>

          <Card className="border-[#c93eac] border-t-4">
            <CardHeader>
              <CardTitle className="text-[#c93eac]">Benefits</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                {scholarshipData.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="md:col-span-2 border-[#2f3497] border-t-4">
            <CardHeader>
              <CardTitle className="text-[#2f3497]">
                Eligible Institutions
              </CardTitle>
            </CardHeader>
            <CardContent>
              {/* <ScrollArea className="h-[400px] w-full rounded-md border p-4"> */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {scholarshipData.eligibleInstitutions.map(
                  (institution, index) => (
                    <div key={index} className="flex items-start">
                      <span className="text-[#2f3497] font-bold mr-2 min-w-[1.5rem]">
                        {index + 1}.
                      </span>
                      <p>{institution}</p>
                    </div>
                  )
                )}
              </div>
              {/* </ScrollArea> */}
            </CardContent>
          </Card>

          <Card className="border-[#c93eac] border-t-4">
            <CardHeader>
              <CardTitle className="text-[#c93eac]">
                Eligibility Criteria
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                {scholarshipData.eligibilityCriteria.map((criteria, index) => (
                  <li key={index}>{criteria}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-[#2f3497] border-t-4">
            <CardHeader>
              <CardTitle className="text-[#2f3497]">
                Required Documents for Application
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                The following documents are to be provided and uploaded during
                the application:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                {scholarshipData.requiredDocuments.map((item, index) =>
                  item ? (
                    <li key={index}>
                      <p>
                        <strong>{item.document}</strong>
                      </p>
                      {item.notes.length > 0 && (
                        <ul className="list-disc pl-5">
                          {item.notes.map((note, noteIndex) => (
                            <li key={noteIndex}>{note}</li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ) : null
                )}
              </ul>
            </CardContent>
          </Card>

          <Card className="md:col-span-2 border-[#c93eac] border-t-4">
            <CardHeader>
              <CardTitle className="text-[#c93eac]">
                Application Details
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <div>
                <p className="font-semibold">Application Opens:</p>
                <p>{scholarshipData.applicationDetails.openDate}</p>
              </div>
              <div>
                <p className="font-semibold">Application Closes:</p>
                <p>{scholarshipData.applicationDetails.closeDate}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <Link href="/programs/ulsp-male" target="_blank">
            <Button className="bg-[#2f3497] hover:bg-[#c93eac] text-white font-bold py-2 px-4 rounded transition duration-300">
              Apply Now
            </Button>
          </Link>
        </div>
      </div>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
            Our Focus Areas
          </h2>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <BookOpen className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Islamic Education</h3>
              <p className="text-gray-600">
                Providing quality Islamic education to Muslims of all ages.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Users className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Community Service</h3>
              <p className="text-gray-600">
                Organizing initiatives to serve and uplift our local
                communities.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Heart className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Spiritual Growth</h3>
              <p className="text-gray-600">
                Fostering an environment for personal and spiritual development.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-purple-50">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-purple-800">
            Board of Trustees
          </h2>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {trustees.map((trustee, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center bg-white rounded-lg shadow-lg p-6 transition-transform duration-300 ease-in-out hover:scale-105"
              >
                <div className="relative w-40 h-40 mb-6">
                  <Image
                    src={trustee.image}
                    alt={trustee.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full border-4 border-purple-200"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-purple-800">
                  {trustee.name}
                </h3>
                <p className="text-purple-600 font-medium mb-3">
                  {trustee.role}
                </p>
                <p className="text-gray-600 text-sm mb-6">{trustee.bio}</p>
                {/* <div className="flex space-x-3">
                  <a
                    href="#"
                    className="text-purple-600 hover:text-purple-800 transition-colors duration-300"
                  >
                    <Facebook className="h-5 w-5" />
                    <span className="sr-only">Facebook</span>
                  </a>
                  <a
                    href="#"
                    className="text-purple-600 hover:text-purple-800 transition-colors duration-300"
                  >
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </a>
                  <a
                    href="#"
                    className="text-purple-600 hover:text-purple-800 transition-colors duration-300"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
