import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Download, Eye, X, GraduationCap, Code2, Phone, Mail, Award, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS } from '../data/portfolioData';

export function ResumeSection({ isModalOpen, onToggleModal }) {
  const handleDownload = () => {
    // Generate formatted printable resume
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>Raghav_Sharma_Resume</title>
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; padding: 36px 40px; color: #111; line-height: 1.45; font-size: 13px; max-width: 800px; margin: auto; }
              h1 { margin: 0 0 4px 0; font-size: 22px; font-weight: 700; }
              .meta { font-size: 12px; color: #444; margin-bottom: 16px; line-height: 1.6; }
              .meta a { color: #111; text-decoration: none; border-bottom: 1px dotted #888; }
              h2 { font-size: 13px; border-bottom: 1.5px solid #222; padding-bottom: 3px; margin: 16px 0 8px 0; text-transform: uppercase; letter-spacing: 0.5px; }
              .item { margin-bottom: 10px; }
              .item-header { display: flex; justify-content: space-between; font-weight: 600; font-size: 13px; }
              .item-sub { font-style: italic; font-size: 12px; color: #444; }
              ul { margin: 4px 0 0 18px; padding: 0; }
              li { margin-bottom: 2px; }
            </style>
          </head>
          <body>
            <h1>Raghav Sharma</h1>
            <div class="meta">
              LinkedIn: <a href="${PERSONAL_INFO.linkedin}" target="_blank">linkedin.com/in/raghav-sharma-894716282</a> &nbsp;|&nbsp; 
              GitHub: <a href="${PERSONAL_INFO.github}" target="_blank">github.com/Raghavsharma-salva</a><br>
              Email: ${PERSONAL_INFO.email} &nbsp;|&nbsp; Mobile: ${PERSONAL_INFO.phone}
            </div>

            <h2>Skills Summary</h2>
            <div class="item">
              <div><strong>Languages:</strong> C, C++, Java, Python, HTML, CSS, JavaScript, SQL</div>
              <div><strong>Libraries & Frameworks:</strong> NumPy, Pandas, Matplotlib, FastAPI, React, Leaflet</div>
              <div><strong>Tools/Platforms:</strong> VS Code, Git, GitHub, Google Colab, Jupyter Notebook, PlatformIO, Linux</div>
              <div><strong>Backend & Databases:</strong> MySQL, PostgreSQL, SQLite</div>
              <div><strong>Soft Skills:</strong> Team Collaboration, Problem-Solving, Adaptability, Critical Thinking, Leadership</div>
            </div>

            <h2>Projects</h2>
            <div class="item">
              <div class="item-header"><span>MarketPulse 2.0 | Python, FastAPI, React, Postgres, ML</span><span>Aug 2026 – Present</span></div>
              <ul>
                <li>Built a full-stack web application with FastAPI and React, combining a Python backend with a modern front-end interface.</li>
                <li>Applied machine learning techniques to analyze data and generate predictive insights, working with multiple ML models.</li>
                <li>Designed and implemented a data tracking and reporting system with automated checks and structured logic.</li>
              </ul>
            </div>

            <div class="item">
              <div class="item-header"><span>FireWatch Nexus | JavaScript, TypeScript, Leaflet</span><span>Sep 2025</span></div>
              <ul>
                <li>Developed an interactive fire and environmental alert platform with incident reporting, searchable alerts, severity classification, and location-based visualization.</li>
                <li>Implemented an interactive Leaflet-based map with incident markers, popups, map controls, and synchronized alert-feed navigation for monitoring reported incidents.</li>
                <li>Added risk forecasting, incident analytics, and safety education features, including risk scores, forecast levels, incident statistics, and fire-prevention resources.</li>
              </ul>
            </div>

            <div class="item">
              <div class="item-header"><span>Food Freshness IoT System | IoT, Arduino, Multi-Sensors</span><span>Jan 2026 – Mar 2026</span></div>
              <ul>
                <li>Built an IoT-based monitoring system using multiple sensors (MQ Gas, pH probe, moisture) to track and report real-time conditions.</li>
                <li>Integrated hardware sensor data with a display and mobile application for real-time status updates.</li>
                <li>Designed an alert system using LED and buzzer notifications to flag important status changes to users.</li>
              </ul>
            </div>

            <div class="item">
              <div class="item-header"><span>File Compressor | C++, Huffman Coding, Bit-Level Streams</span><span>2026</span></div>
              <ul>
                <li>Implemented binary prefix tree Huffman compression algorithm in C++ achieving ~45% lossless reduction with custom bitstream serialization.</li>
              </ul>
            </div>

            <h2>Training & Experience</h2>
            <div class="item">
              <div class="item-header"><span>Python Programming – Infosys Springboard</span><span>Jun 2025 – Jul 2025</span></div>
              <ul>
                <li>Gained practical knowledge of fundamental Python concepts, including loops, OOP, and designing programs using a modular approach.</li>
                <li>Worked with Python data structures such as Lists, Tuples, and Dictionaries, along with functional programming methods like Lambda functions, map(), and filter() for effective data manipulation and algorithmic problem-solving.</li>
                <li>Built a strong understanding of logical thinking, exception handling, and regular expressions, creating a solid foundation for further work in data science and machine learning.</li>
              </ul>
            </div>

            <h2>Certificates & Credentials</h2>
            <ul>
              <li><strong>Coding for Everyone: C and C++ (Specialization)</strong> | UC Santa Cruz via Coursera (Mar 2026) — <a href="https://coursera.org/verify/specialization/PHZNKK2D4V8W" target="_blank">Verify: PHZNKK2D4V8W</a></li>
              <li><strong>Cyber Job Simulation</strong> | Deloitte via Forage (Dec 2025) — ID: DhguqBRt6gjHMKZGA</li>
              <li><strong>Infoverse.org: A 24 Hour Hackathon</strong> | GeeksforGeeks (Nov 2025) — Top 8 Finalist / Team Leader</li>
              <li><strong>Python Programming Training</strong> | Infosys Springboard (Jul 2025) — Completed with Distinction</li>
            </ul>

            <h2>Education</h2>
            <div class="item">
              <div class="item-header"><span>Lovely Professional University, Phagwara, Punjab</span><span>Aug 2025 – Present</span></div>
              <div class="item-sub">Bachelor of Technology – Computer Science and Engineering</div>
            </div>
            <div class="item">
              <div class="item-header"><span>CRC GSS Rehan Khas, Himachal Pradesh</span><span>Apr 2024 – Mar 2025</span></div>
              <div class="item-sub">Intermediate (State Board) — Mathematics & Science</div>
            </div>
          </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.focus();
      setTimeout(() => {
        printWindow.print();
      }, 250);
    }
  };

  return (
    <>
      <section id="resume" className="relative py-20 sm:py-28 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto z-10">
        <div className="relative overflow-hidden p-8 sm:p-12 md:p-16 rounded-3xl liquid-glass-elevated border border-white/20 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-[2px] bg-red-500 shadow-sm shadow-red-500/80" />
              <span className="font-mono text-xs font-semibold tracking-widest text-red-400 uppercase">
                CURRICULUM VITAE
              </span>
            </div>
            <h2 className="mt-1 font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white">
              Verified Technical Background
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-lg font-normal">
              Review my 2nd Year CSE academic qualifications, verified project architectures, Top 8 hackathon ranking, and technical toolkit.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4 shrink-0">
            <button
              onClick={() => onToggleModal(true)}
              className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-white text-black font-semibold text-sm sm:text-base hover:bg-zinc-200 transition-all hover:scale-[1.02] shadow-xl shadow-white/15"
              data-cursor="pointer"
            >
              <Eye size={17} />
              <span>View Resume</span>
            </button>

            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-full liquid-glass hover:bg-white/10 text-white font-medium text-sm sm:text-base transition-all hover:scale-[1.02]"
              data-cursor="pointer"
            >
              <Download size={16} />
              <span>Download PDF</span>
            </button>
          </div>
        </div>
      </section>

      {/* Interactive Full Resume Viewer Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => onToggleModal(false)}
              className="fixed inset-0 bg-[#050507]/90 backdrop-blur-2xl"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 26, stiffness: 300 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl liquid-glass-elevated p-6 sm:p-10 shadow-2xl z-10 border border-white/20"
            >
              {/* Modal Top Actions */}
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <FileText size={18} className="text-zinc-300" />
                  <span className="font-display font-bold text-base text-white">Raghav Sharma — Curriculum Vitae</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleDownload}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg liquid-glass text-xs font-mono text-zinc-200 transition-colors hover:bg-white/15"
                  >
                    <Download size={14} />
                    <span>Download</span>
                  </button>
                  <button
                    onClick={() => onToggleModal(false)}
                    className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-zinc-400 hover:text-white transition-colors"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* Resume Body */}
              <div className="mt-8 space-y-8 text-zinc-300">
                {/* Header */}
                <div>
                  <h1 className="font-display font-bold text-2xl sm:text-3xl text-white">Raghav Sharma</h1>
                  <p className="text-sm text-zinc-300 font-mono mt-1">
                    Computer Science Student & Systems Developer · 2nd Year B.Tech CSE (2025–2029)
                  </p>
                  <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-xs font-mono text-zinc-400">
                    <span className="flex items-center gap-1"><Mail size={13} className="text-zinc-300" /> {PERSONAL_INFO.email}</span>
                    <span className="flex items-center gap-1"><Phone size={13} className="text-zinc-300" /> {PERSONAL_INFO.phone}</span>
                    <span>LPU, Phagwara, Punjab</span>
                    <span>•</span>
                    <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-zinc-200 hover:underline">github.com/Raghavsharma-salva</a>
                  </div>
                </div>

                {/* Education */}
                <div className="pt-4 border-t border-white/10">
                  <h2 className="font-display font-semibold text-sm uppercase tracking-widest text-zinc-400 mb-3 flex items-center gap-2">
                    <GraduationCap size={16} className="text-zinc-300" />
                    <span>Education</span>
                  </h2>
                  <div className="space-y-3">
                    <div className="p-4 rounded-xl liquid-glass flex flex-col sm:flex-row justify-between sm:items-baseline gap-2">
                      <div>
                        <div className="font-semibold text-white text-base">Lovely Professional University (LPU), Phagwara, Punjab</div>
                        <div className="text-xs text-zinc-400 mt-0.5">Bachelor of Technology — Computer Science & Engineering</div>
                      </div>
                      <div className="font-mono text-xs text-zinc-300 px-2.5 py-1 rounded bg-white/5 border border-white/10 shrink-0">
                        Aug 2025 – Present
                      </div>
                    </div>

                    <div className="p-4 rounded-xl liquid-glass flex flex-col sm:flex-row justify-between sm:items-baseline gap-2">
                      <div>
                        <div className="font-semibold text-white text-base">CRC GSS Rehan Khas, Himachal Pradesh</div>
                        <div className="text-xs text-zinc-400 mt-0.5">Intermediate (State Board) — Mathematics & Science</div>
                      </div>
                      <div className="font-mono text-xs text-zinc-400 px-2.5 py-1 rounded bg-white/5 shrink-0">
                        Apr 2024 – Mar 2025
                      </div>
                    </div>
                  </div>
                </div>

                {/* Skills */}
                <div className="pt-4 border-t border-white/10">
                  <h2 className="font-display font-semibold text-sm uppercase tracking-widest text-zinc-400 mb-3 flex items-center gap-2">
                    <Code2 size={16} className="text-zinc-300" />
                    <span>Technical Capabilities</span>
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="p-3.5 rounded-lg liquid-glass">
                      <span className="font-mono text-zinc-400 block mb-1">Languages:</span>
                      <span className="text-white font-medium">C, C++, Java, Python, HTML, CSS, JavaScript, SQL</span>
                    </div>
                    <div className="p-3.5 rounded-lg liquid-glass">
                      <span className="font-mono text-zinc-400 block mb-1">Frameworks & Libraries:</span>
                      <span className="text-white font-medium">FastAPI, React, NumPy, Pandas, Matplotlib, Leaflet</span>
                    </div>
                    <div className="p-3.5 rounded-lg liquid-glass">
                      <span className="font-mono text-zinc-400 block mb-1">Backend & Databases:</span>
                      <span className="text-white font-medium">PostgreSQL, MySQL, SQLite, Relational Schemas</span>
                    </div>
                    <div className="p-3.5 rounded-lg liquid-glass">
                      <span className="font-mono text-zinc-400 block mb-1">Hardware & IoT:</span>
                      <span className="text-white font-medium">Arduino, PlatformIO, MQ Gas & pH Sensors, I2C LCD</span>
                    </div>
                  </div>
                </div>

                {/* Projects */}
                <div className="pt-4 border-t border-white/10">
                  <h2 className="font-display font-semibold text-sm uppercase tracking-widest text-zinc-400 mb-3 flex items-center gap-2">
                    <FileText size={16} className="text-zinc-300" />
                    <span>Selected Technical Projects</span>
                  </h2>
                  <div className="space-y-3">
                    {PROJECTS.map((proj) => (
                      <div key={proj.id} className="p-4 rounded-xl liquid-glass">
                        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                          <span className="font-bold text-white text-sm">{proj.title}</span>
                          <span className="font-mono text-[11px] text-zinc-400">{proj.badge}</span>
                        </div>
                        <p className="text-xs text-zinc-300 mt-2 leading-relaxed">{proj.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Training & Certifications */}
                <div className="pt-4 border-t border-white/10">
                  <h2 className="font-display font-semibold text-sm uppercase tracking-widest text-zinc-400 mb-3 flex items-center gap-2">
                    <Award size={16} className="text-zinc-300" />
                    <span>Training & Verified Certifications</span>
                  </h2>
                  <div className="space-y-2 text-xs">
                    <div className="p-3 rounded-lg liquid-glass flex items-start justify-between gap-2">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 size={15} className="text-zinc-300 shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-white">Coding for Everyone: C and C++ (4-Course Specialization)</strong> — UC Santa Cruz via Coursera (Mar 2026). Instructed by Prof. Ira Pohl (Baskin School of Engineering, UCSC).
                        </div>
                      </div>
                      <a
                        href="https://coursera.org/verify/specialization/PHZNKK2D4V8W"
                        target="_blank"
                        rel="noreferrer"
                        className="px-2.5 py-1 rounded bg-white/10 text-white font-mono text-[11px] hover:bg-white/20 shrink-0 transition-colors"
                      >
                        Verify (PHZNKK2D4V8W)
                      </a>
                    </div>

                    <div className="p-3 rounded-lg liquid-glass flex items-start justify-between gap-2">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 size={15} className="text-zinc-300 shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-white">Cyber Job Simulation</strong> — Deloitte via Forage (Dec 2025). Practical enterprise cybersecurity scenarios and vulnerability assessments.
                        </div>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-white/5 font-mono text-zinc-400 text-[10px] shrink-0">
                        ID: DhguqBRt6gjHMKZGA
                      </span>
                    </div>

                    <div className="p-3 rounded-lg liquid-glass flex items-start gap-2">
                      <CheckCircle2 size={15} className="text-zinc-300 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white">Infoverse.org: A 24 Hour Hackathon – GeeksforGeeks</strong> (Nov 2025): Top 8 Finalist out of 200+ teams as Team Leader & Lead Architect.
                      </div>
                    </div>

                    <div className="p-3 rounded-lg liquid-glass flex items-start gap-2">
                      <CheckCircle2 size={15} className="text-zinc-300 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white">Python Programming – Infosys Springboard</strong> (Jun 2025 – Jul 2025): Fundamental Python concepts, OOP, functional programming (map, filter, lambda), regex, and algorithmic problem-solving. Completed with Distinction.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Close Bottom */}
              <div className="mt-8 pt-6 border-t border-white/10 flex justify-end">
                <button
                  onClick={() => onToggleModal(false)}
                  className="px-5 py-2 rounded-xl liquid-glass text-xs font-mono text-zinc-300 hover:text-white transition-colors"
                >
                  Close Viewer
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

