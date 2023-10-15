import Image from "next/image";
import React from "react";

// const Team = () => {
//   return (
//     <section className="pt-20 pb-10 lg:pt-[120px] lg:pb-20">
//       <div className="container">
//         <div className="flex flex-wrap -mx-4">
//           <div className="w-full px-4">
//             <div className="mx-auto mb-[60px] max-w-[510px] text-center">
//               <span className="block mb-2 text-lg font-semibold text-primary">
//                 Our Team
//               </span>
//               <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
//                 Our Awesome Team
//               </h2>
//               <p className="text-base text-body-color">
//                 There are many variations of passages of Lorem Ipsum available
//                 but the majority have suffered alteration in some form.
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="flex flex-wrap justify-center">
//           <TeamCard
//             name="Milind Changani"
//             profession="Co-Founder & Architect"
//             imageSrc='/MILIND.jpg'
//           />
//           <TeamCard
//             name="Yomesh Rao"
//             profession="Co-Founder & B.E.Civil | L.L.B | L.L.M"
//             imageSrc="/yomesh.jpg"
//           />
//           <TeamCard
//             name="Jasleen Changani"
//             profession="Co-Founder & Architect"
//             imageSrc="/jasleen.jpg"
//           />
//           <TeamCard
//             name="Danish Fakih"
//             profession="Associate-Partner & Architect"
//             imageSrc="/danish.jpg"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Team;

// const TeamCard = ({ imageSrc, name, profession }:any) => {
//   return (
//     <>
//       <div className="w-full px-4 md:w-1/2 xl:w-1/4">
//         <div className="mx-auto mb-10 w-full max-w-[370px]">
//           <div className="relative overflow-hidden rounded-lg">
//             <Image src={imageSrc} alt="" width={300} height={600} />
//             <div className="absolute left-0 w-full text-center bottom-5">
//               <div className="relative px-3 py-5 mx-5 overflow-hidden bg-white rounded-lg">
//                 <h3 className="text-base font-semibold text-black">{name}</h3>
//                 <p className="text-sm text-black font-bold">{profession}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// const Teams = () => {
//   return (
//     <div className="w-full">
//     <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
//         <div className="text-center pb-12">
//             <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-white">
//                 Our Team
//             </h1>
//         </div>
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//             <div className="w-full bg-gray-900 rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
//                 <div className="w-full md:w-2/5 h-80">
//                     <Image className="object-center object-cover w-full h-full" src="/MILIND.jpg" alt="photo" width={1000} height={1000}/>
//                 </div>
//                 <div className="w-full md:w-3/5 text-left p-6 md:p-4 space-y-2">
//                     <p className="text-xl text-white font-bold">Milind Changani</p>
//                     <p className="text-base text-gray-400 font-normal">Co-Founder & Architect</p>
//                     <p className="text-base leading-relaxed text-gray-500 font-normal">Ar. Milind has more than 18 years of experience in the field of architectural Design and approvals process with MCGM.</p>
//                     <p className="text-base leading-relaxed text-gray-500 font-normal">He has experience in residential/ Commercial/ Institutional and industrial projects and has been instrumental with polices related to redevelopment of cessed properties in island city.</p>
//                     <p className="text-base leading-relaxed text-gray-500 font-normal">He is the Chairman( City) Sub Committee of PEATA(I) And Hon. Joint Secretary in PEATA(I).</p>
//                     <p className="text-base leading-relaxed text-gray-500 font-normal">He is member with NAREDCO and CMDWA and has been active in formulation of policy matters of DCR/DCPR related to redevelopment.</p>
//                     <p className="text-base leading-relaxed text-gray-500 font-normal">The firm BNSA is member with LEED–IGBC and promotes Green and sustainable design solutions.</p>
//                     <p className="text-base leading-relaxed text-gray-500 font-normal">His work and lectures on redevelopment has received several accolades from various institution REMI (Real Estate Management Institute) , ICAI ( The Institute of Chartered Accountants of India) , KCF (Kutch Corporate Forum ) , KAWA ( Kutch Advocates welfare association, NAREDCO, MCHI and PEATA(I) etc.
// He is known for his straightforward approach , dealing with transparency and integrity between all stakeholders of redevelopment projects, viz. the Tenants/Members and Project proponents to ensure smooth development of the proposal.</p>

//                 </div>
//             </div>
//             <div className="w-full bg-gray-900 rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
//                 <div className="w-full md:w-2/5 h-80">
//                 <Image className="object-center object-cover w-full h-full" src="/yomesh.jpg" alt="photo" width={1000} height={1000}/>
//                 </div>
//                 <div className="w-full md:w-3/5 text-left p-4 md:p-4 space-y-2">
//                     <p className="text-xl text-white font-bold">Lucy Carter</p>
//                     <p className="text-base text-gray-400 font-normal">Graphic Designer</p>
//                     <p className="text-base leading-relaxed text-gray-500 font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

//                 </div>
//             </div>
//             <div className="w-full bg-gray-900 rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
//                 <div className="w-full md:w-2/5 h-80">
//                 <Image className="object-center object-cover w-full h-full" src="/jasleen.jpg" alt="photo" width={1000} height={1000}/>
//                 </div>
//                 <div className="w-full md:w-3/5 text-left p-4 md:p-4 space-y-2">
//                     <p className="text-xl text-white font-bold">Jade Bradley</p>
//                     <p className="text-base text-gray-400 font-normal">Dev Ops</p>
//                     <p className="text-base leading-relaxed text-gray-500 font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

//                 </div>
//             </div>
//             <div className="w-full bg-gray-900 rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
//                 <div className="w-full md:w-2/5 h-80">
//                 <Image className="object-center object-cover w-full h-full" src="/danish.jpg" alt="photo" width={1000} height={1000}/>
//                 </div>
//                 <div className="w-full md:w-3/5 text-left p-6 md:p-4 space-y-2">
//                     <p className="text-xl text-white font-bold">Dany Bailey</p>
//                     <p className="text-base text-gray-400 font-normal">Software Engineer</p>
//                     <p className="text-base leading-relaxed text-gray-500 font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

//                 </div>
//             </div>
//         </div>
//     </section>
// </div>
//   )
// }

// export default Teams

const Teams = () => {
  return (
    <div className="container mx-auto flex flex-wrap my-8 justify-center text-white">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
        <div className="max-w-xl max-h-full rounded overflow-hidden shadow-lg cursor-pointer card hover:shadow-xl transition duration-300 bg-black bg-opacity-30">
          <Image
            className="w-auto h-100 object-cover"
            src="/MILIND.jpg"
            alt="Team Member 1"
            width={1000}
            height={1000}
          />
          <div className="py-4 px-4">
            <div className="font-bold text-xl text-dark mb-2">
              Milind Changani
            </div>
            <div className="font-semibold italic text-md text-dark mb-2">
              Co-Founder & Architect
            </div>
            <p className="text-dark leading-relaxed font-normal">
              Ar. Milind has more than 18 years of experience in the field of
              architectural Design and approvals process with MCGM.
            </p>
            <p className="text-dark leading-relaxed font-normal">
              He has experience in residential/ Commercial/ Institutional and
              industrial projects and has been instrumental with polices related
              to redevelopment of cessed properties in island city.
            </p>
            <p className="text-dark leading-relaxed font-normal">
              He is the Chairman( City) Sub Committee of PEATA(I) And Hon. Joint
              Secretary in PEATA(I).
            </p>
            <p className="text-dark leading-relaxed font-normal">
              He is member with NAREDCO and CMDWA and has been active in
              formulation of policy matters of DCR/DCPR related to
              redevelopment.
            </p>
            <p className="text-dark leading-relaxed font-normal">
              The firm BNSA is member with LEED–IGBC and promotes Green and
              sustainable design solutions.
            </p>
            <p className="text-dark leading-relaxed font-normal">
              His work and lectures on redevelopment has received several
              accolades from various institution REMI (Real Estate Management
              Institute) , ICAI ( The Institute of Chartered Accountants of
              India) , KCF (Kutch Corporate Forum ) , KAWA ( Kutch Advocates
              welfare association, NAREDCO, MCHI and PEATA(I) etc. He is known
              for his straightforward approach , dealing with transparency and
              integrity between all stakeholders of redevelopment projects, viz.
              the Tenants/Members and Project proponents to ensure smooth
              development of the proposal.
            </p>
          </div>
        </div>
        <div className="max-w-xl max-h-full rounded overflow-hidden shadow-lg cursor-pointer card hover:shadow-xl transition duration-300 bg-black bg-opacity-40">
          <Image
            className="w-auto h-100 object-cover"
            src="/yomesh.jpg"
            alt="Team Member 1"
            width={1000}
            height={1000}
          />
          <div className="py-4 px-4">
            <div className="font-bold text-xl text-dark mb-2">Yomesh Rao</div>
            <div className="font-semibold italic text-md text-dark mb-2">
              Co-Founder & B.E.Civil | L.L.B | L.L.M
            </div>
            <p className="text-dark leading-relaxed font-normal">
              Yomesh has almost 23 years of operational and strategic experience
              in the real estate and construction industry across India. With a
              Bachelor’s degree in Civil engineering, he has vast knowledge and
              experience in technical due diligence, project approvals and
              clearances throughout the lifecycle of building projects has
              gained him considerable respect from regulatory authorities.
            </p>
            <p className="text-dark leading-relaxed font-normal">
              Having been head of the department of Regulatory and Liaison in
              the Raheja Group, He ventured out to start his own consultancy YMS
              Consultants Limited and is presently Hon. Secretary of PEATA(I).
            </p>
            <p className="text-dark leading-relaxed font-normal">
              He is the Chairman of CVSRTA & Member of Institution of Engineers
              He is a member of the Institution of Valuers, as an approved
              Valuer for Immovable Property (Bombay/ Mumbai Chapter), India.
              Though gentle in approach, he has a penchant for getting things
              done, with the ability to plan, strategize and make quick but
              correct decisions.
            </p>
            <p className="text-dark leading-relaxed font-normal">
              He Subsequently Studied Law and is a Law Graduate an LLB and LLM,
              Masters in Law in Environmental Law. At Present apart from his
              Consultancy Services , He also Emphasizes on Educating Students
              and Real Estate Delegates such as Finance Heads, Valuers etc….of
              the Rules and Regulations and its Interpretation as per Present
              Practice. He has Given Presentation and Seminars in the PEATA
              Events, IOV Events, Accommodation Times Seminar and Blue Shift
              Seminar He has also actively interacted as a PEATA(I) Member with
              MCGM & its various departments for Guidelines and Simplification
              of Processes. He is a Conciliator appointed by the MahaRERA under
              section 32G of the MahaRERA Act. He has recently Formed a Law Firm
              giving Techno Legal Advice to the Needy.
            </p>
          </div>
        </div>
        <div className="max-w-xl max-h-full rounded overflow-hidden shadow-lg cursor-pointer card hover:shadow-xl transition duration-300 bg-black bg-opacity-40">
          <Image
            className="w-auto h-100 object-cover"
            src="/jasleen.jpg"
            alt="Team Member 1"
            width={1000}
            height={1000}
          />
          <div className="py-4 px-4">
            <div className="font-bold text-xl text-dark mb-2">
              Jasleen Changani
            </div>
            <div className="font-semibold italic text-md text-dark mb-2">
              Co-Founder & Architect
            </div>
            <p className="text-dark leading-relaxed font-normal">
              The proprietor and creative head of the company Studio C, with
              more than 18 years of experience.
            </p>
            <p className="text-dark leading-relaxed font-normal">
              Bringing a soulful respite to the dry landscape of the current
              mainstream residential architecture is what she strives for in
              each project. Sustainability, commercially to achieve efficient
              space planning, selection of construction strategies and blending
              these with unique design solutions for the end users is key to her
              approach. Design Challenges of working with tight parameters of
              space constraints, guidelines of relevant authorities to still
              create a landmark design for the clients is what she does best.
              Integrating Green Building design principles with the latest
              design tools is paramount in her practice. She has worked under
              Master Architects like Geoffrey Bawa, and Anjalendran. Her design
              has won award for “Best Luxury residential project “by CREDAI for
              Queens Boulevard project at Walkeshwar. She has expertise in
              Residential redevelopment projects, Villa projects, Commercial
              projects.
            </p>
          </div>
        </div>
        <div className="max-w-xl max-h-full rounded overflow-hidden shadow-lg cursor-pointer card hover:shadow-xl transition duration-300 bg-black bg-opacity-40">
          <Image
            className="w-auto h-100 object-cover"
            src="/danish.jpg"
            alt="Team Member 1"
            width={1000}
            height={1000}
          />
          <div className="py-4 px-4">
            <div className="font-bold text-xl text-dark mb-2">Danish Fakih</div>
            <div className="font-semibold italic text-md text-dark mb-2">
              Associate-Partner & Architect
            </div>
            <p className="text-dark leading-relaxed font-normal">
              A Mumbai University graduate with 21+ years of experience in
              designing a diverse range of medium to large scale interior &
              architecture projects.
            </p>
            <p className="text-dark leading-relaxed font-normal">
              He has worked on & lead the design of architecture projects
              ranging from residential villas, residential towers, gated
              complexes to commercial & mixed-use projects.
            </p>
            <p className="text-dark leading-relaxed font-normal">
              He also has extensive experience in designing interiors of various
              hospitality projects, offices & residences pan-India.
            </p>
            <p className="text-dark leading-relaxed font-normal">
              His approach towards design is Client-Centric, Pragmatic &
              Synergistic.
            </p>
            <p className="text-dark leading-relaxed font-normal">
              He believes good design is a result of inspiration, research,
              deliberation & collaboration
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
