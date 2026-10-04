// app/page.tsx
import Link from "next/link";
import Image from "next/image";
import LanguageToggle from "./components/LanguageToggle"; // client component

const profileCanvasRows = [
  [
    { src: "/images/canvas1.jpg", alt: "Yuto Kuroki canvas image 1", tilt: "-rotate-3" },
    { src: "/images/canvas2.JPEG", alt: "Yuto Kuroki canvas image 2", tilt: "rotate-2" },
    { src: "/images/canvas3.JPG", alt: "Yuto Kuroki canvas image 3", tilt: "-rotate-1" },
    { src: "/images/canvas4.JPG", alt: "Yuto Kuroki canvas image 4", tilt: "rotate-3" },
    { src: "/images/canvas5.JPG", alt: "Yuto Kuroki canvas image 5", tilt: "-rotate-2" },
    { src: "/images/canvas6.png", alt: "Yuto Kuroki canvas image 6", tilt: "rotate-2" },
    { src: "/images/canvas7.JPG", alt: "Yuto Kuroki canvas image 7", tilt: "-rotate-3" },
  ],
  [
    { src: "/images/canvas8.JPG", alt: "Yuto Kuroki canvas image 8", tilt: "rotate-1" },
    { src: "/images/canvas9.JPG", alt: "Yuto Kuroki canvas image 9", tilt: "-rotate-2" },
    { src: "/images/canvas10.JPG", alt: "Yuto Kuroki canvas image 10", tilt: "rotate-3" },
    { src: "/images/canvas11.png", alt: "Yuto Kuroki canvas image 11", tilt: "-rotate-1" },
    { src: "/images/canvas12.JPG", alt: "Yuto Kuroki canvas image 12", tilt: "rotate-2" },
    { src: "/images/canvas13.JPG", alt: "Yuto Kuroki canvas image 13", tilt: "-rotate-3" },
    { src: "/images/canvas14.jpg", alt: "Yuto Kuroki canvas image 14", tilt: "rotate-1" },
  ],
  [
    { src: "/images/canvas15.jpg", alt: "Yuto Kuroki with outdoor sculptures", tilt: "-rotate-2" },
    { src: "/images/canvas16.jpg", alt: "Yuto Kuroki beside a research poster", tilt: "rotate-2" },
    { src: "/images/canvas17.jpg", alt: "Yuto Kuroki looking at an aquarium tank", tilt: "-rotate-1" },
    { src: "/images/canvas18.png", alt: "Yuto Kuroki during a gait experiment in a research lab", tilt: "rotate-2" },
  ],
];

export const metadata = {
  title: "Yuto Kuroki",
  description: "Profile page of Yuto Kuroki, second-year computer science student at Waseda University working in AI research and development",
  openGraph: {
    locale: "en_US",
    url: "https://yutokuroki.vercel.app",
  },
};

export default function HomePageEn() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Sticky Banner */}
      <div className="w-full sticky top-0 z-50 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center relative md:pr-24 lg:pr-8 xl:pr-0">
          {/* ページトップ */}
          <a
            href="#top"
            className={
              "text-white font-medium hover:underline text-lg cursor-pointer select-none " +
              "text-left md:text-center " +
              "md:absolute md:left-1/2 md:-translate-x-1/2"
            }
            aria-label="scroll to top"
          >
            <span className="inline lg:hidden">Scroll to top</span>
            <span className="hidden lg:inline">Scroll to top — Yuto Kuroki&apos;s Profile</span>
          </a>

          {/* 右側のボタン群 */}
          <div className="ml-auto flex items-center gap-3 lg:mr-6 xl:mr-12">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/yutokuroki/"
              target="_blank"
              rel="noreferrer"
              className="px-3 py-2 text-sm md:text-base font-medium text-white bg-blue-900 rounded-full shadow-md transition-transform duration-200 hover:bg-blue-700 hover:scale-105 whitespace-nowrap"
              aria-label="external link: LinkedIn"
            >
              <span className="inline lg:hidden">LinkedIn</span>
              <span className="hidden lg:inline">See LinkedIn</span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/dronerd"
              target="_blank"
              rel="noreferrer"
              className="px-3 py-2 text-sm md:text-base font-medium text-white bg-blue-900 rounded-full shadow-md transition-transform duration-200 hover:bg-blue-700 hover:scale-105 whitespace-nowrap"
              aria-label="external link: GitHub"
            >
              <span className="inline md:hidden">GitHub</span>
              <span className="hidden md:inline">See GitHub</span>
            </a>
          </div>
        </div>
      </div>

      <main id="top" className="w-full min-h-screen bg-neutral-100 px-4 sm:px-6 pt-4 pb-12">
        {/* Use column layout on small screens and row on md+ */}
        <div className="flex flex-col md:flex-row w-full relative">
          {/* LEFT COLUMN */}
          <aside className="w-full md:w-1/4 md:sticky top-10 self-start p-4 md:p-6 bg-white md:bg-transparent rounded-lg md:rounded-none shadow-sm md:shadow-none text-center md:text-left">
            <div className="flex flex-col items-center md:items-start gap-4">
              <div className="mb-2 w-full flex justify-center md:justify-start">
                <LanguageToggle />
              </div>

              <h1 className="text-2xl sm:text-3xl font-semibold">Yuto Kuroki</h1>
              <p className="text-base sm:text-lg mt-1">
                AI Research and Development
              </p>

              {/* Profile image — fixed-size */}
              <div className="flex-shrink-0 h-28 w-28 sm:h-36 sm:w-36 rounded-3xl overflow-hidden bg-neutral-200 mx-auto md:mx-0">
                <Image
                  src="/images/profile4.png"
                  alt="Profile of Yuto Kuroki"
                  width={144}
                  height={144}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>

              <p className="text-sm sm:text-base leading-snug px-2 md:px-0">
                <strong className="block text-base">
                  Second Year student at Waseda University School of Computer Science and Engineering
                </strong>
                <span className="block mt-1">
                  Interested in AI for Healthcare, Information Retrieval, Personalization, LLMs, and Agentic AI. English C2 and German C2 proficiency.
                </span>
              </p>

              <div className="mt-2 flex flex-col gap-1 text-base">
                <a href="https://note.com/yutokuroki" target="_blank" rel="noopener noreferrer" className="underline">
                  note
                </a>
                <a href="https://github.com/dronerd" target="_blank" rel="noopener noreferrer" className="underline">
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/yutokuroki/" target="_blank" rel="noopener noreferrer" className="underline">
                  LinkedIn
                </a>
              </div>
            </div>
          </aside>

          {/* FULL-SCREEN VERTICAL LINE (only on md+) */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/4 w-px bg-gray-300"></div>

          {/* RIGHT COLUMN */}
          <section className="w-full md:w-3/4 md:ml-8 p-4 md:p-6 mt-6 md:mt-0">
            <section>
              <h2 className="text-xl font-medium">
                <strong>About Me</strong>
              </h2>
              <div className="mt-3 space-y-3 leading-7 text-neutral-800 text-sm sm:text-base">
                <p><strong>I am passionate about using AI research to help solve global challenges, and I aspire to become a researcher working internationally.</strong></p>
                <p>
                  In high school, I researched algorithms to optimize drone delivery of medical supplies. In my first year at university, I represented Japan at the <strong>International Science and Engineering Fair (ISEF 2025)</strong>. I also received the <strong>Special Award from the Minister of Education, Culture, Sports, Science and Technology</strong>.
                </p>
                <p>
                  At Rakuten AI for Business, I researched Agentic AI as part of an international team. During the summer of my second year at university, I was a Nakatani Foundation scholar at the Georgia Institute of Technology, where I researched deep learning models for time series and model personalization.
                </p>
                <p>
                  I have reached a near-native advanced level in both English and German. I hope to use these language skills to collaborate with researchers from diverse backgrounds and pursue AI research that benefits society.
                </p>
              </div>
              <br/>

              <h2 className="text-xl font-medium flex items-center gap-2">
                <strong>Project Fluence</strong>

                <Link href="https://projectfluence.vercel.app" aria-label="Project Fluence" target="_blank" className="ml-2">
                  <Image src="/images/logo.png" alt="Project Fluence logo" width={80} height={80} className="rounded-md object-cover" />
                </Link>
              </h2>

              <p className="mt-3 leading-7 text-neutral-800 text-sm sm:text-base">
                <Link aria-label="Project Fluence" href="https://projectfluence.vercel.app" className="underline" target="_blank">
                  <strong>Project Fluence</strong>
                </Link>{" "}
                is an English learning platform built on my own experience and methods for learning English. I developed it to help more people in Japan take on opportunities around the world by using their English skills and individual expertise. Please take a look!
              </p>
            </section>

            {/* Photo Canvas */}
            <section className="mt-6">
              <h2 className="text-xl font-medium">
                <strong>Photo Canvas</strong>
              </h2>
              <div className="mt-3 max-w-3xl rounded-lg bg-white px-3 py-4 shadow-sm">
                <div className="space-y-2 overflow-x-auto py-1">
                  {profileCanvasRows.map((row, rowIndex) => (
                    <div key={`canvas-row-${rowIndex}`} className="flex items-center gap-2">
                      {row.map((image, imageIndex) => (
                        <div
                          key={`${image.src}-${imageIndex}`}
                          className={`relative h-16 w-20 flex-none overflow-hidden rounded-md bg-neutral-200 shadow-sm ring-2 ring-white transition-transform hover:z-10 hover:scale-110 sm:h-20 sm:w-24 ${image.tilt}`}
                        >
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            sizes="96px"
                            className={`object-cover ${image.src === "/images/canvas18.png" ? "object-top" : ""}`}
                          />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Upcoming Activities & Articles */}
            <section className="mt-6">
              <h2 className="text-xl font-medium">
                <strong>Upcoming Activities</strong>
              </h2>
              <ul className="mt-3 list-disc pl-6 text-neutral-800 text-sm sm:text-base">        
                <li>
                  October 31, 2026: Scheduled to speak at <strong>TEDx WUSHS Youth Event</strong>.
                </li>
              </ul>

            {/* Latest note articles */}
              <h2 className="mt-6 text-xl font-medium">
                <strong>note articles</strong>
              </h2>
              <ul className="mt-2 list-disc pl-6 text-neutral-800 text-sm sm:text-base">
                <li key="note Article1" className="py-0.5">
                    <a href="https://note.com/yutokuroki/n/n05e8b127014f" className="underline" target="_blank" rel="noopener noreferrer">
                      大学生の自己紹介 ― 黒木勇人｜Project Fluence｜英語アプリ｜英検１級・TOEIC満点・TOEFL116/120・ドイツ語上級
                    </a>
                </li>
                <li key="note Article2" className="py-0.5">
                    <a href="https://note.com/yutokuroki/n/nd806d6fa00ec" className="underline" target="_blank" rel="noopener noreferrer">
                      日本にいながらネイティブ級へ─英語力を効果的に伸ばす学習方法｜英検１級・TOEIC満点・TOEFL116/120・ドイツ語上級
                    </a>
                </li>
                <li key="note Article3" className="py-0.5">
                    <a href="https://note.com/yutokuroki/n/n751ab984987a" className="underline" target="_blank" rel="noopener noreferrer">
                      英語学習にも応用できる！第２外国語（ドイツ語）から見えてきた効果的な言語学習法
                    </a>
                </li>  
                <li key="note Article4" className="py-0.5">
                    <a href="https://note.com/yutokuroki/n/nb5ee0137b415" className="underline" target="_blank" rel="noopener noreferrer">
                      世界最難関の英語検定試験：ケンブリッジ英検C2 Proficiency（CPE）に合格しました！（リーディング・リスニング満点）
                    </a>
                </li>  
                <li key ="note Article5" className="py-0.5">
                    <a href="https://note.com/yutokuroki/n/n71bd9003af29" className="underline" target="_blank" rel="noopener noreferrer">
                    （上級者向け）日本にいながら英語力をさらに高める効果的な方法
                    </a>
                </li>
              </ul>
            </section>

            {/* Research & Awards */}
            <section className="mt-6">
              <h2 className="text-xl font-medium">
                <strong>Research & Awards</strong>
              </h2>

              <ul className="mt-3 list-disc pl-6 text-neutral-800 text-sm sm:text-base">
                <li>
                  <strong>Nakatani RIES Scholar, Best Presentation Award</strong> — Conducted research at the Georgia Institute of Technology as a Nakatani Foundation scholar
                </li>
                <li>
                  <a
                    href="https://isef.net/project/robo024-novel-medical-drone-delivery-using-k-means-and-tsp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    <strong>ISEF 2025 Finalist</strong>
                  </a>
                  — Columbus, Ohio (Robotics &amp; Intelligent Machines Category)
                </li>
                <li>
                  <a href="https://manabu.asahi.com/jsec/2024/award/index.html" target="_blank" rel="noopener noreferrer" className="underline">
                    <strong>JSEC 2025 Finalist &amp; Sony Award </strong>
                  </a>
                  — Research on drone delivery optimization
                </li>
                <li>
                  <a href="https://www.ciec.or.jp/special/entry-1484.html" target="_blank" rel="noopener noreferrer" className="underline">
                    2025 CIEC Spring Conference 1st Place (U-18)
                  </a>
                  — Research on efficient autonomous drone deliveries
                </li>
                <li>
                  <a href="https://www.ciec.or.jp/special/entry-1436.html" target="_blank" rel="noopener noreferrer" className="underline">
                    2024 CIEC Spring Conference 3rd Place (U-18)
                  </a>
                  — Research on autonomous obstacle avoidance system based on ML
                </li>
                <li>
                  <a href="https://www.goethe.de/resources/files/pdf315/japanheute_2024.pdf" target="_blank" rel="noopener noreferrer" className="underline">
                    Jugendkurs Deutsch plus Beruf
                  </a>
                  — First Japansese scholarship recipient (Dieter Schwarz Foundation), visits to leading universities, companies, and AI seminars in Germany
                </li>
              </ul>

              <h2 className="mt-6 text-xl font-medium">
                <strong>Honors</strong>
              </h2>
              <ul className="mt-2 list-disc pl-6 text-neutral-800 text-sm sm:text-base">
                <li>
                  <strong>Okuma Memorial Scholarship Recipient (School of Fundamental Science and Engineering)</strong> — Selected as one of six scholarship recipients among approximately 1,800 second- to fourth-year students. First-year cumulative GPA: 3.94/4.00.
                </li>
                <li>
                  <a href="https://www.mext.go.jp/b_menu/houdou/2025/1416581_00001.htm" target="_blank" rel="noopener noreferrer" className="underline">
                    <strong>Minister of Education, Culture, Sports, Science and Technology Special Award</strong>
                  </a>
                </li>

                <li>Kato Yamazaki Scholarship Honor Recipient (with Special Commendation)</li>
                <li>Tokyo Metropolitan High School Cultural Federation Outstanding Cultural Activities Award</li>
                <li>Waseda University Senior High School Academic Excellence Award (1st among 485 students)</li>
              </ul>
            </section>

            {/* Skills & Languages */}
            <section className="mt-6 grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="text-xl font-medium">
                  <strong>Technical Skills</strong>
                </h2>
                <ul className="mt-3 list-disc pl-6 text-neutral-800 text-sm sm:text-base">
                  <li>Programming: Python, C++, TypeScript</li>
                  <li>AI・ML: Optimization, LLM application development, Agentic AI development, AI safety</li>
                  <li>Web &amp; App: React, FastAPI, Next.js (This page was created with Next.js)</li>
                  <li>Hardware &amp; Robotics: Drone programming, Raspberry Pi, Arduino</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-medium">
                  <strong>Language Skills</strong>
                </h2>
                <ul className="mt-3 list-disc pl-6 text-neutral-800 text-sm sm:text-base">
                  <li>
                    English — TOEFL iBT 116/120, TOEIC 990/990,
                    <br />
                    Eiken Grade 1 (top 1% score at 14 years old),
                    <br />
                    SAT 1530/1600
                    <br />
                    Cambridge C2 Exam (CPE) (Full scores in Reading and Listening)
                  </li>
                  <li>German — Goethe-Zertifikat C2 (CEFR C2) in Reading, Listening, and Speaking and C1 in Writing </li>
                </ul>
              </div>
            </section>

            {/* Education & Work Experience */}
            <section className="mt-6">
              <h2 className="text-xl font-medium">
                <strong>Education & International Experience</strong>
              </h2>
              <ul className="mt-3 list-disc pl-6 text-neutral-800 text-sm sm:text-base">
                <li><strong>Waseda University </strong> (Current) — School of Computer Science and Engineering</li>
                <li>Waseda University Senior &amp; Junior High School</li>
                <li>Novi Middle School, Michigan, USA</li>
                <li>Childhood in Singapore (2011-2013)</li>
              </ul>

              <h2 className="mt-6 text-xl font-medium">
                <strong>Work Experience</strong>
              </h2>
              <ul className="mt-2 list-disc pl-6 text-neutral-800 text-sm sm:text-base">
                <li>
                  <strong>Research Intern, Georgia Institute of Technology</strong> (Remote research: May 2026–August | On-site: Aug. 10–Sept. 23, 2026) — Conducted research at EPIC Lab, developing temporal deep learning models and personalization methods for stroke survivor rehabilitation.
                </li>
                <li>
                  <strong>Data Scientist Intern, Rakuten AI for Business</strong> (Feb 3, 2026 – Mar 31, 2026) — Conducted research on agentic AI safety, designed and executed evaluation experiments for AI agents, and presented findings to the full team. Collaborated in an international environment with English as the primary working language.
                </li>

                <li>
                  <strong>Staff Member, </strong>
                  <a
                    className="underline"
                    href="https://nss.or.jp/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <strong>NPO Nippon Science Service (NSS)</strong>
                  </a>
                  {" "} (Jul 2025 – Present) — Contributed to science outreach and event operations, including exhibitions at{" "}
                  <a
                    className="underline"
                    href="https://www.jst.go.jp/sis/scienceagora/2025/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Science Agora 2025
                  </a>, support for the final judging session of{" "}
                  <a
                    className="underline"
                    href="https://manabu.asahi.com/jsec/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    JSEC 2025
                  </a>, and assistance for Japanese finalists participating in ISEF 2026.
                </li>

                <li>
                  <strong>Editor (Redakteur), Goethe-Institut Student Newspaper</strong> (Sep 2025 – Nov 2025) — Served as a paid editor, revising student articles, authoring the concluding editorial (Schlusswort), and delivering a presentation at the Goethe-Institut Tokyo.
                </li>
              </ul>

              <h2 className="mt-6 text-xl font-medium">
                <strong>Past Activities & Presentations</strong>
              </h2>
              <ul className="mt-2 list-disc pl-6 text-neutral-800 text-sm sm:text-base">
                <li>
                  <strong>GTIE Student Entrepreneurship Program</strong> — Networking at CIC, MIT, and Harvard University with support from Waseda University and MEXT.
                </li>
                <li>Waseda University Senior Highschool Tennis club</li>
                <li>Toshiba Youth Club Asia (Team Leader)</li>
                <li>
                  <a href="https://spice.fsi.stanford.edu/fellowship/stanford-e-japan" target="_blank" rel="noopener noreferrer" className="underline">
                    <strong>Stanford E-Japan 2023 graduate</strong>
                  </a>
                </li>
                <li>Presentations at SAP Japan, Sony AI, Sony Corporation, Aerosense, Bosch Japan</li>
                <li>
                  <a href="https://www.hana.hs.kr/symposium/03_paper.html" target="_blank" rel="noopener noreferrer" className="underline">
                    Hana Academy Seoul International Symposium
                  </a>
                  — Presenter &amp; Moderator
                </li>
                <li>School representative speech at high school to 1000+ prospective students and families</li>
                <li>
                  Presentations at Goethe Institut Tokyo (&quot;Jugendkurs Deutsch plus Beruf&quot;, &quot;Der Wert des Deutschlernens, ein Rückblick&quot;)
                </li>
                <li>
                  Special Guest Speech at the Waseda University School of Political Science and Economics annual German Speech Contest
                </li>
              </ul>
            </section>

            {/* Media & Links */}
            <section className="mt-6">
              <h2 className="text-xl font-medium">
                <strong>Media &amp; Links</strong>
              </h2>
              <ul className="mt-3 list-disc pl-6 text-neutral-800 text-sm sm:text-base">
                <li>Asahi Newspaper, Morning Edition, December 10, 2024 and December 22, 2024</li>
                <li>
                  <a href="https://manabu.asahi.com/jsec/2024/actibook/?detailFlg=0&pNo=12" target="_blank" rel="noopener noreferrer" className="underline">
                    JSEC 2025 Newsletter
                  </a>
                </li>
                <li>August 2025 さぴあ magazine</li>
                <li>
                  <a href="https://www.youtube.com/watch?v=Vlgrx-uviHo" target="_blank" rel="noopener noreferrer" className="underline">
                    PASCH Goethe Institut official YouTube
                  </a>
                </li>
                <li>
                  <a href="https://www.asahi.com/articles/ASSDK2FK0SDKPLBJ001M.html" target="_blank" rel="noopener noreferrer" className="underline">
                    Asahi Newspaper Digital
                  </a>
                </li>

                <li>
                  Waseda University Senior High School website:{" "}
                  <a href="https://www.waseda.jp/school/shs/news/2024/04/05/8235/" target="_blank" rel="noopener noreferrer" className="underline mr-4">
                    CIEC2024 award,
                  </a>
                  <a href="https://www.waseda.jp/school/shs/news/2025/04/25/9556/" target="_blank" rel="noopener noreferrer" className="underline mr-4">
                    CIEC2025 award,
                  </a>
                  <a href="https://www.waseda.jp/school/shs/news/2024/12/27/9173/" target="_blank" rel="noopener noreferrer" className="underline">
                    JSEC Finalist Sony Award,
                  </a>
                  <a href="https://www.waseda.jp/school/shs/news/2025/10/01/10001/" target="_blank" rel="noopener noreferrer" className="underline">
                    Goethe Zertifikat C1 
                  </a>
                </li>
              </ul>
              <h2 className="mt-6 text-xl font-medium">
                <strong>Other Skills &amp; Hobbies</strong>
              </h2>
              <p className="mt-3 text-neutral-800 text-sm sm:text-base">
                Public speaking, language teaching, event organization, solving complex Rubik&apos;s cubes, juggling, cooking, jump rope
              </p>
            </section>

            {/* Footer */}
            <footer className="mt-12 border-t pt-6 text-sm text-neutral-500 md:text-left">
              All content © {currentYear} Yuto Kuroki
            </footer>
            <Link href="/privacy" target="_blank">
              Privacy Policy
            </Link>
          </section>
        </div>
      </main>
    </>
  );
}
