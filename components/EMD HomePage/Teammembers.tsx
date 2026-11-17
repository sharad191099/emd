const teamMembers = [
{id: 1,name: "Amresh Verma",role: "Director & Experience Head",image: "/img/Teamimg/amreesh-verma.jpg",},
{id: 2,name: "Amritanshu Rai",role: "Client Servicing",image: "/img/Teamimg/amritanshu-rai-new.jpg",},
{id: 3,name: "pradeep Harshana",role: "Production head",image: "/img/Teamimg/pradeep-harsana-new-v2.jpg",},
{id: 4,name: "Sharad Kumar",role: "Technology head",image: "/img/Teamimg/sharad-kumar.jpg",},
{id: 5,name: "Satyam Gupta",role: "Copywriter",image: "/img/Teamimg/satyam.jpg",},
{id: 6,name: "Vikram Mandal",role: "Event & Operations",image: "/img/Teamimg/vikram-mandal.jpg",},
{id: 7,name: "Rishabh Singh",role: "3D Designing Head",image: "/img/Teamimg/rishabh-sharma-new.jpg",},
{id: 8,name: "Kamal Verma",role: "2D Designing Head",image: "/img/Teamimg/kamal-verma-new.jpg",},
{id: 9,name: "Kritika Kushwaha",role: "Artist Manager",image: "/img/Teamimg/kritika-kushwaha-new-v2.jpg",},
{id: 10,name: "Anshi Singh",role: "Marketing Executive",image: "/img/Teamimg/anshi-singh-new.jpg",},
{id: 11,name: "Tejasvi Kapoor Sareen",role: "Talent Acquisition",image: "/img/Teamimg/tejasvi-kapoor-sareen.jpg",},
];

export default function TeamMembers() {
  return (
  <section className="w-full bg-white px-5 py-12 sm:px-8 md:py-16">
    <div className="mx-auto max-w-[1260px]">
      <div className="grid grid-cols-1 gap-x-7 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-y-11">
        {teamMembers.map((member) => (
          <article key={member.id} className="min-w-0">
            {/* Team image */}
            <div className="aspect-square w-full overflow-hidden bg-gray-100">
              <img
                src={member.image}
                alt={member.name}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

          {/* Name */}
          <h3 className="mt-5 text-lg font-normal leading-6 text-[#333333]">
            {member.name}
          </h3>

          {/* Designation */}
          <p className="mt-1 text-base leading-6 text-[#333333]">
            {member.role}
          </p>
        </article>
          ))}
        </div>
      </div>
    </section>
  );
}
