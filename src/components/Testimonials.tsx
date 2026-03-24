import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Marquee } from "@/components/ui/marquee";

const testimonials = [
  {
    name: "Nikitha Vemula",
    text: "Spokn is an excellent platform for learning English with simple and practical lessons. With the sessions they conduct, we can improve our speaking and communication skills. The interactive sessions help build confidence and fluency effectively.",
    rating: 5,
  },
  {
    name: "Swatantra Tyagi",
    text: "It's really good initiative taken for English Speaker because they are free feeling express emotions on the given topics which make a person free feel talk on the particular topic related to it. But I really appreciate to the team and team members who always supportive and guide on our English while doing activities which between the topics easily.",
    rating: 5,
  },
  {
    name: "Smriti Singh",
    text: "It's an amazing platform for anyone who wants to build their confidence while speaking to others. It truly helps to improve English speaking skills, and the environment is very friendly and supportive. I personally enjoyed the sessions, and I highly recommend joining if you genuinely want to improve your English and boost your speaking confidence.",
    rating: 5,
  },
  {
    name: "Kriya",
    text: "This platform is super helpful for all ages, and I've personally learned to speak confidently in front of groups. Highly recommend it to anyone keen on improving their English skills!",
    rating: 5,
  },
  {
    name: "Sefali Mojumder",
    text: "It's really a very good platform to speak and build confidence. We can practice with everyone here, which helps us become more fluent and comfortable while speaking.",
    rating: 5,
  },
  {
    name: "K Prasanna",
    text: "If you want to overcome your fear while you speak English with strangers this is the Right platform, let's get into the door confidently to connect with others, also we can fix our fluent. we can build up literary terms. The host of spokkn is a kind hearted person. she helps me where I made a mistakes how can I figure out it. Here they give comfort to share your ideas and thoughts. spokkn is not only for spoken English it upgrades our communication skills. I personally say thanks to my host. she is always there for me when I was low. Thank you spokkn to bring such a useful platform.",
    rating: 5,
  },
  {
    name: "M .supraja",
    text: "I really appreciate spokkn for providing space to learn and explore our inner self so I'm glad that I'm part of this spokkn . I really enjoyed and learned many things and gathered lot of experience ,so thanks to spokkn.",
    rating: 5,
  },
  {
    name: "Rajeswari S",
    text: "I was looking for a good spoken English class and joined a few, but I didn't see any improvement in my speaking, and I also lost money. This platform is the best for learning spoken English. Now I can speak much more fluently. This platform is not only for students but also for homemakers.",
    rating: 5,
  },
  {
    name: "Rajalaxmi Sahu",
    text: "Really it is a very good platform for learning english. every one pls try once, you will get surely benefit.",
    rating: 5,
  },
  {
    name: "Asit Konar",
    text: "It's very good free platform for practice and improvement of english for beginner.",
    rating: 5,
  },
  {
    name: "Ganesh Yadavalli",
    text: "This is the best opportunity for everyone especially for students to improve their communication and job seekers also top get the job...",
    rating: 5,
  },
  {
    name: "Chaitanya Kumar",
    text: "Spokkn is a wonderful community where no one is juding you on your English fluency but everyone has the enthusiasm to learn English",
    rating: 5,
  },
  {
    name: "saisrinivas thatha",
    text: "Actually It's a great class and conversation especially with srimukha",
    rating: 5,
  },
  {
    name: "Radhakrishnan TP",
    text: "Spokken is one of the best platform to study english and it develops the skills of speaking in the grass root level. The way they handle the session is amazing. The strategies they are following give us confidence and knowledge in english grammar and pronounciation.",
    rating: 5,
  },
  {
    name: "guru raghu",
    text: "Well, talking about my till now experience i must say that i had a beautiful journey here. In this journey of learning i learnt a lot from the practice sessions. I would recommend joining this community so that we can learn together. Most important thing is you can speak here as much as you want and become fluent that's what I wanted to say",
    rating: 5,
  },
  {
    name: "Srimukha Pendyala",
    text: "This community is amazing! It uses activity-based methods to help improve spoken English, and I've learned so much here. I'm now handling real-life situations with confidence. I highly recommend it to everyone, regardless of age - it's super helpful!",
    rating: 5,
  },
  {
    name: "Tc Girish",
    text: "Spokken is among the greatest resources for learning English and soft skills like communication. The mentor is an excellent instructor who facilitates learning.",
    rating: 5,
  },
  {
    name: "ARIJIT DEB PHONE BACKUP",
    text: "It has been only two months since I have been a part of Spokken, I would like to share my experience: Spokken with their day by day coaching regarding the vocab with sentence snake and grammatical fill in the blank section really helped me a lot, now come to the next point that about the direct Spoken class actually it's really multidimensional spoken class with participants from all over the country, so you come to known the different types of pronunciation with with changing the geographic region like North to South India, and gradual changes in participants pronunciation, after each and every class proper feedback from the moderators and valuable suggestions also a big booster point I would like to mention. So overall it's not only a spoken class but a chance to improve the basic understanding of the subject English. Now I'm more confident about my self. Thank you Team Spokken.",
    rating: 5,
  },
  {
    name: "Sunil Kumar V",
    text: "It's a very good platform to learn or improve english communication n fluency as well . host conducts various activities like speaking, listening, writing which help us to improve in many aspects im very lucky that i got an excellent platform like spoken .",
    rating: 5,
  },
  {
    name: "mohit sharma",
    text: "Hello, my name is Mohit Sharma. And m pursuing CS. I came across 'Spokken- the community' a few months back when I was in need to work on my english fluency. Honestly, the Idea and structure was so new to me that initially I had doubts about how effective it would really be . But those doubts lasted only until the first session as it was so good and accurate. I personally found two major best things out of many about Spokken. first one is:- it's efficient structure consisting of burdenless approaches, various activities(profession centred, casuals, role play & activities covering all important learning aspects) And specially, providing you with that no-judgement space to freely make mistakes in order to correct them & to let the new learning breathe in that space. And the second best thing is- The homely warm vibe every session has, irrespective of the diversity of members:- like regional language, study, profession, goals. And special appreciation for Ekta , the mentor/owner. The amount of time and efforts she put in, very commendable. I've never seen someone so invested in people's growth. Always comes up with new and smart ways to rapid the learning growth. I have witnessed consistent development there, in almost everyone including me. I am not on the same page as I was , before joining this community. The page is way more richer in confidence and command now. I am definitely going to remember this community on every future achievement of mine. Spokken , one of the best decision of my learning life. All love and respect to Ekta , the mentor and every single person I met there.. ❤️",
    rating: 5,
  },
  {
    name: "Bala Gva",
    text: "Let me put this straight. If you're looking for someone to practise English with you this is the right place for no cost. You will have other learners to discuss topics, doubts and more. One to one, group discussions, news reading, role … More",
    rating: 5,
  },
  {
    name: "Sahil",
    text: "I've been part of this juncture since a month. Quite sure regarding its uniquest learning pathway. It is one of the finest tutorials, unlike brandish braggers, where anyone can, not just learn, but also master over it. Here, you can find unmatchably smart mentor who can track your derailed potentials and catalyzes your pace over the horizon. Especially, Veena Mam (although she reduce herself to mere helpmate and she may get un-okay when you call her by any salutation) who's remarkably fine to their learning subjects. I'd highly recommend her not because she's just a good mentor but she possesses serene trait too, I mean, she listens calmly whatever your lingo blunder is. Alongwith she's also patently supportive, for instance, I was facing audio issue, she literally climbed on the roof & picked up gadgets moving around the terrace, just for good network strength in order to run learning process smoothly. This is temperamentaly humane, unlike in popular money-makers, these things are absolutely gone. Atlast, I'd say, they're providing rich environment at cheap price. A must unmissable.",
    rating: 5,
  },
  {
    name: "pintu kumar",
    text: "One the best platform I have ever come across for overall English improvement. Especially hats off to the moderator for the way they make you learn things in a fun way.",
    rating: 5,
  },
  {
    name: "CR Choudhary",
    text: "Since last three months I have been part of this community and benefitted a lot. Here no one is a teacher or students all are simply member of this community and feel help to each other in every context not only in spoken. I have learnt SO MANY things here which even I had not heard before joining and I would be a part of this community forever.",
    rating: 5,
  },
  {
    name: "Aarti Dodhiawala",
    text: "I myself Aarti, My profession is Fashion Designing. I wish i could find the perfect way to thank you for being so thoughtful(SPOKKEN) You always seem to know just what people actually need! It is literally making me confident and worthwhile, i was super dumb before but right now i can face any challenges! The main motto here is to talk, to elaborate, to open up no matter what we know and what not! Grateful to have such a talented person.(EKTA-spokken's mentor) MUST TRY❣️",
    rating: 5,
  },
  {
    name: "Sakshi Bhuddi",
    text: "Till now, the experience I have had been truly amazing. Every session is much different than the previous one. Plus the suitable feedback by Facilitator provides another feather to it's cap. I can't define in few words that how come this community has helped me till now, still I can certainly say that participation in this community whole heartedly has given me wings.",
    rating: 5,
  },
  {
    name: "Karthik Ap",
    text: "Had great experience, better than usual websites that exist, the best thing i have noticed is the environment where i was able to speak and practice what i have learnt. Thank you spoken😊",
    rating: 5,
  },
  {
    name: "Nikit Parkash",
    text: "This community is awesome the day when i joined it and today while im writing this review i ve seen a drastic change in myself which gives me the confidence to speak english in front of anyone. Im so thankful to this community that i can't even expsress it in words.",
    rating: 5,
  },
  {
    name: "Mohit Chauhan",
    text: "Best platform to invest your time to learn spoken and written English",
    rating: 5,
  },
  {
    name: "Surabhi Singh",
    text: "Great Experience and Learning. Thank you Ekta",
    rating: 5,
  },
  {
    name: "Savan Razdan",
    text: "a community where u can be yourself, lfgg",
    rating: 5,
  },
  {
    name: "BEKIND fr (Bhoomika)",
    text: "Iam Bhoomika..I have joined 2 sessions in this spokkn till now and you don't believe that i had overcome my fear..This spokkn were affording us a good opportunity to overcome our fear of fluency and all..Thanks to spokkn and expecially host srimukha makes me feel good and interact with me in a good manner. Its really good to see a platform like these which a middle class people can afford and progress their english knowledge!",
    rating: 5,
  },
];

// Deterministic initials + color from name
const AVATAR_COLORS = [
  "bg-blue-100 text-blue-700",
  "bg-violet-100 text-violet-700",
  "bg-emerald-100 text-emerald-700",
  "bg-amber-100 text-amber-700",
  "bg-rose-100 text-rose-700",
  "bg-cyan-100 text-cyan-700",
];

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const Testimonials = () => {
  const [selected, setSelected] = useState<(typeof testimonials)[0] | null>(null);

  return (
  <section className="py-8 md:py-12 bg-background overflow-hidden">
    <div className="container">

      {/* Heading */}
      <motion.div
        className="mb-10 md:mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-xs text-accent font-semibold uppercase tracking-wider mb-2">
          Testimonials
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-foreground leading-tight">
          What Peers Say
        </h2>
        <p className="text-muted-foreground text-sm mt-2 max-w-sm">
          Real stories from people who transformed their speaking confidence with Spokkn.
        </p>
        <p className="text-xs text-accent/70 mt-3">Click any card to read the full review</p>
      </motion.div>

      {/* Marquee */}
      {([false, true] as const).map((rev, rowIdx) => (
        <Marquee key={rowIdx} reverse={rev} pauseOnHover pause={!!selected} className="[--duration:120s] [mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)] mb-3">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              onClick={() => setSelected(t)}
              className="w-72 h-64 shrink-0 bg-card border border-border rounded-2xl p-5 mx-2 flex flex-col justify-between
                hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
            >
              {/* Stars */}
              <div className="flex gap-0.5 shrink-0">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <svg key={j} className="w-3.5 h-3.5 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote — clamped */}
              <p className="text-foreground/80 text-sm leading-relaxed flex-1 overflow-hidden line-clamp-4 my-2">"{t.text}"</p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-3 border-t border-border shrink-0">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${AVATAR_COLORS[i % AVATAR_COLORS.length]}`}>
                  {getInitials(t.name)}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm leading-none">{t.name}</p>
                  {/* <p className="text-xs text-muted-foreground mt-0.5">Verified learner</p> */}
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      ))}

    </div>

    {/* Modal */}
    <AnimatePresence>
      {selected && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelected(null)}
        >
          <motion.div
            className="bg-card border border-border rounded-2xl p-6 max-w-lg w-full max-h-[80vh] overflow-y-auto flex flex-col gap-4"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex gap-0.5">
                {Array.from({ length: selected.rating }).map((_, j) => (
                  <svg key={j} className="w-4 h-4 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <button onClick={() => setSelected(null)} className="text-muted-foreground hover:text-foreground transition-colors shrink-0">
                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
              </button>
            </div>
            <p className="text-foreground/80 text-sm leading-relaxed">"{selected.text}"</p>
            <div className="flex items-center gap-3 pt-3 border-t border-border">
              <div className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${AVATAR_COLORS[testimonials.indexOf(selected) % AVATAR_COLORS.length]}`}>
                {getInitials(selected.name)}
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm leading-none">{selected.name}</p>
                <p className="text-xs text-muted-foreground mt-0.5">Verified learner</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  </section>
  );
};

export default Testimonials;
