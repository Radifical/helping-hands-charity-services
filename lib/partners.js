// ---------------------------------------------------------------------------
// NONPROFIT PARTNERS
// Slugs match the existing HHCS site exactly (e.g. /rescue-mission-alliance) so
// every link a partner already shares keeps working.
//
// Spinning up a new partner = add one object below. The only custom fields are:
//   - logo:    path under /public/partners (copy the org's logo there). If
//              omitted, a clean monogram badge is shown automatically.
//   - mission: paste the org's mission statement.
// Everything else on the landing page is shared/uniform.
// ---------------------------------------------------------------------------

export const partners = [
  { slug: "rescue-mission-alliance", name: "Rescue Mission Alliance", category: "Housing & Basic Needs", logo: "/partners/rescue-mission-alliance.svg", logoDark: true, mission: "Rescue Mission Alliance is a Christian nonprofit ministering to the needs of the less fortunate across Southern California through emergency and long-term rehabilitation services, offering a full range of care for the hungry, homeless, and destitute since 1972." },
  { slug: "dolphin-project", name: "Dolphin Project", category: "Animal Wellness & Rescue", logo: "/partners/dolphin-project.png", logoDark: true, mission: "Dolphin Project works to end dolphin exploitation and slaughter, rehabilitate captive dolphins for release, and put a permanent end to dolphin captivity worldwide." },
  { slug: "noahs-miracles", name: "Noah's Miracles", category: "Family Support", logo: "/partners/noahs-miracles.jpg", mission: "Noah's Miracles provides supportive services, assistance programs, and referrals to families facing financial hardship with a newborn in the Neonatal Intensive Care Unit (NICU)." },
  { slug: "pow", name: "Protect Our Winters", category: "Climate", logo: "/partners/pow.svg", mission: "Protect Our Winters helps passionate outdoor people protect the places and lifestyles they love from climate change through a community of athletes, scientists, and business leaders advancing non-partisan climate policy." },
  { slug: "cancer-support-community-sf-bay-area", name: "Cancer Support Community SF Bay Area", category: "Medical & Patient Support", logo: "/partners/cancer-support-community-sf-bay-area.png", mission: "Cancer Support Community uplifts and strengthens people impacted by cancer with free counseling, support groups, nutrition, exercise, emergency financial assistance, and patient education programs." },
  { slug: "meals-on-wheels-west", name: "Meals on Wheels West", category: "Seniors", logo: "/partners/meals-on-wheels-west.png", mission: "Meals on Wheels West nourishes and enriches the lives of homebound neighbors of all ages with nutritious meals, an emergency preparedness program, and referrals that promote independent living." },
  { slug: "weave", name: "WEAVE", category: "Domestic Violence", logo: "/partners/weave.svg", mission: "WEAVE is the primary provider of crisis intervention services for survivors of domestic violence, sexual assault, and sex trafficking in Sacramento County, promoting safe and healthy relationships." },
  { slug: "wags-walks", name: "Wags & Walks", category: "Animal Wellness & Rescue", logo: "/partners/wags-walks.webp", mission: "Wags & Walks reduces the number of dogs euthanized in shelters by showing the community that wonderful dogs of all breeds and sizes can be found through rescue." },
  { slug: "healthebay", name: "Heal the Bay", category: "Environment", logo: "/partners/healthebay.gif", mission: "Heal the Bay mobilizes Los Angeles' diverse communities to protect the coastline, restore waterways, and speak out for smart water policy." },
  { slug: "bbsvc", name: "Big Brothers Big Sisters of Ventura County", category: "Youth", logo: "/partners/bbsvc.png", logoDark: true, mission: "Big Brothers Big Sisters of Ventura County builds and professionally supports one-to-one mentoring relationships that ignite the biggest possible future for youth." },
  { slug: "the-pad-project", name: "The Pad Project", category: "Women's Health", logo: "/partners/the-pad-project.png", mission: "The Pad Project creates local and global partnerships to end period stigma and empower women and all menstruators through innovation, education, and advocacy." },
  { slug: "surfriderfoundation", name: "Surfrider Foundation, Los Angeles", category: "Environment", logo: "/partners/surfriderfoundation.png", mission: "The Surfrider Foundation is dedicated to the protection and enjoyment of the world's ocean, waves, and beaches through a powerful activist network." },
  { slug: "corba", name: "Concerned Off-Road Bicyclists Association", category: "Recreation", logo: "/partners/corba.jpg", mission: "CORBA preserves open space, maintains public access to public lands, and creates more trail opportunities for the mountain biking community of Los Angeles and surrounding areas." },
  { slug: "paws", name: "Pet Adoption and Wellness Service", category: "Animal Wellness & Rescue", logo: "/partners/paws.png", mission: "PAWS is an all-volunteer pet rescue whose funds go directly to help local pets in need of care and homes." },
  { slug: "project-ropa", name: "Project Ropa", category: "Housing & Basic Needs", logo: "/partners/project-ropa.svg", mission: "Project Ropa restores dignity and empowers lives by bringing clean clothing and access to hygiene services directly to homeless neighbors through local partnerships." },
  { slug: "the-childrens-heart-foundation", name: "The Children's Heart Foundation", category: "Medical Research", logo: "/partners/the-childrens-heart-foundation.jpg", mission: "The Children's Heart Foundation funds the most promising research to advance the diagnosis, treatment, and prevention of congenital heart defects." },
  { slug: "priceless-pets", name: "Priceless Pet Rescue", category: "Animal Wellness & Rescue", logo: "/partners/priceless-pets.png", mission: "Priceless Pet Rescue is a no-kill rescue saving animals from high-kill, high-access shelters and owner surrenders across its adoption centers." },
  { slug: "casa-la", name: "CASA of Los Angeles", category: "Youth", logo: "/partners/casa-la.png", logoDark: true, mission: "CASA of Los Angeles improves the lives of children in the dependency system by pairing abused and neglected children with trained volunteer advocates." },
  { slug: "the-animal-rescue-mission", name: "The Animal Rescue Mission", category: "Animal Wellness & Rescue", logo: "/partners/the-animal-rescue-mission.webp", mission: "The Animal Rescue Mission rescues, rehabilitates, and re-homes animals while educating the public on how to provide a safer, happier world for animals." },
  { slug: "pets-lifeline", name: "Pets Lifeline", category: "Animal Wellness & Rescue", logo: "/partners/pets-lifeline.png", mission: "Pets Lifeline protects and improves the lives of cats and dogs in need in Sonoma Valley through sheltering, adoption, humane education, and community programs." },
  { slug: "mental-health-advocacy-services", name: "Mental Health Advocacy Services", category: "Mental Health", logo: "/partners/mental-health-advocacy-services.webp", mission: "Mental Health Advocacy Services protects and advances the legal rights of low-income adults and children with mental health disabilities so they can thrive in the community." },
  { slug: "you-saved-me-foundation", name: "You Saved Me Foundation", category: "Housing & Basic Needs", logo: "/partners/you-saved-me-foundation.jpg", mission: "You Saved Me Foundation offers free high-quality essentials and workforce development for those living unsheltered, helping them maintain stability and sustainability." },
  { slug: "illumination-foundation", name: "Illumination Health + Home", category: "Housing & Basic Needs", logo: "/partners/illumination-foundation.svg", mission: "Illumination Health + Home disrupts the cycle of homelessness by providing healthcare, housing, and hope together." },
  { slug: "invisible-hands-deliver", name: "Invisible Hands Deliver", category: "Housing & Basic Needs", logo: "/partners/invisible-hands-deliver.webp", mission: "Invisible Hands delivers groceries and essential items to populations especially vulnerable to illness and fights food insecurity in partnership with food pantries." },
  { slug: "knots-of-love", name: "Knots of Love", category: "Medical & Patient Support", logo: "/partners/knots-of-love.png", mission: "Knots of Love warms the hearts and heads of those experiencing traumatic hair loss with hand-knit caps and tiny neonatal blankets, distributed free of charge." },
  { slug: "desi", name: "D.E.S.I.", category: "Disability Support", mission: "D.E.S.I. supports families with children and young adults with developmental disabilities, helping clients become independent, active members of their community." },
  { slug: "cic-la-via", name: "CicLAvia", category: "Community", logo: "/partners/cic-la-via.png", mission: "CicLAvia catalyzes vibrant public spaces, active transportation, and good health by temporarily opening car-free streets for Angelenos to bike, walk, and roll." },
  { slug: "alcott-center", name: "Alcott Center for Mental Health Services", category: "Mental Health", logo: "/partners/alcott-center.png", mission: "The Alcott Center for Mental Health Services meets the needs of community members with little to no income through therapy, case management, and supportive housing." },
  { slug: "red-hen-press", name: "Red Hen Press", category: "Arts & Literacy", logo: "/partners/red-hen-press.png", mission: "Red Hen Press publishes works of literary excellence, fosters diversity, and promotes literacy in local schools." },
  { slug: "power-of-one-foundation", name: "Power of One Foundation", category: "Housing & Basic Needs", logo: "/partners/power-of-one-foundation.png", mission: "Power of One Foundation provides basic human resources to every person in need, working to end hunger and poverty locally and globally." },
  { slug: "american-bird-conservancy", name: "American Bird Conservancy", category: "Environment", logo: "/partners/american-bird-conservancy.svg", mission: "American Bird Conservancy is dedicated to conserving wild birds and their habitats throughout the Americas, halting extinctions and protecting habitats." },
  { slug: "the-home", name: "THE Home", category: "Climate", logo: "/partners/the-home.jpg", mission: "THE Home aims to reverse climate change and restore lands globally by supporting communities toward self-sufficiency through regenerative farming." },
  { slug: "joyrx", name: "Children's Cancer Association (JoyRx)", category: "Medical & Patient Support", logo: "/partners/joyrx.webp", logoDark: true, mission: "Children's Cancer Association delivers JoyRx programs that enhance the mental and emotional well-being of pediatric patients through music, friendship, and nature." },
  { slug: "onemorewave", name: "One More Wave", category: "Veterans", logo: "/partners/onemorewave.png", mission: "One More Wave provides wounded and disabled veterans with customized surfing equipment and community, enabling surf therapy all over the world." },
  { slug: "4lifeanimalrescue", name: "4Life Animal Rescue", category: "Animal Wellness & Rescue", logo: "/partners/4lifeanimalrescue.jpg", mission: "4Life Animal Rescue provides adoption, education, training, and rehabilitation so unwanted and neglected animals receive the lifelong care they deserve." },
  { slug: "changing-tides-foundation", name: "Changing Tides Foundation", category: "Women's Health", logo: "/partners/changing-tides-foundation.webp", logoDark: true, mission: "Changing Tides Foundation empowers women to protect the planet through education and mentorship focused on sustainability, ocean health, and access to clean water." },
  { slug: "ppmi", name: "Project: PeaceMakers", category: "Domestic Violence", logo: "/partners/ppmi.png", mission: "Project: PeaceMakers addresses domestic and intimate partner violence through education, intervention, empowerment, and prevention to break the cycle of violence." },
  { slug: "cancer-research-institute", name: "Cancer Research Institute", category: "Medical Research", logo: "/partners/cancer-research-institute.svg", mission: "The Cancer Research Institute funds revolutionary immunotherapy research and clinical trials with the goal of curing all types of cancer." },
  { slug: "claris-health", name: "Claris Health", category: "Women's Health", logo: "/partners/claris-health.svg", mission: "Claris Health equips and cares for individuals and families before, during, and after pregnancy and sexual-health choices." },
  { slug: "peace-love-knowledge", name: "Peace Love Knowledge", category: "Community", logo: "/partners/peace-love-knowledge.jpg", mission: "Peace Love Knowledge gives people the hope and belief that a better world is possible, addressing houselessness, mental health, sustainability, and empowerment." },
  { slug: "equity-through-literacy", name: "Equity Through Literacy", category: "Arts & Literacy", logo: "/partners/equity-through-literacy.webp", mission: "Equity Through Literacy provides families with tangible resources to bridge the literacy gap, fostering reading practices that build children's onset literacy skills." },
  { slug: "your-special-day", name: "Your Special Day", category: "Youth", mission: "Your Special Day reminds children growing up in underserved communities that their circumstances do not define them, supporting and empowering the whole family." },
  { slug: "golden-rule-charity", name: "Golden Rule Charity", category: "Community", logo: "/partners/golden-rule-charity.jpg", mission: "Golden Rule Charity supports hospitality and restaurant workers with grants for those who have lost their jobs or are struggling." },
  { slug: "community-loving", name: "Community Loving", category: "Community", logo: "/partners/community-loving.webp", mission: "Community Loving curates impactful events that provide low-income BIPOC families and youth with the resources and safe spaces they need and deserve." },
  { slug: "ucp-of-orange-county", name: "Unlimited Possibilities (UCP of Orange County)", category: "Disability Support", logo: "/partners/ucp-of-orange-county.jpg", mission: "Unlimited Possibilities creates a limitless future for children and families with disabilities through comprehensive programs that build independence, joy, and fulfillment." },
  { slug: "coppers-dream", name: "Copper's Dream Animal Rescue", category: "Animal Wellness & Rescue", logo: "/partners/coppers-dream.png", mission: "Copper's Dream is an all-breed dog rescue in the San Francisco Bay Area whose dogs live in foster homes until adopted." },
  { slug: "hire", name: "H.I.R.E.", category: "Reentry & Employment", logo: "/partners/hire.svg", mission: "H.I.R.E. serves as the hub for integration, reentry, and employment in Orange County, supporting justice-involved and disconnected workers." },
  { slug: "forgotten-children-worldwide", name: "Forgotten Children Worldwide", category: "Youth", logo: "/partners/forgotten-children-worldwide.png", mission: "Forgotten Children Worldwide safeguards orphans and vulnerable children from poverty, abandonment, and human trafficking." },
  { slug: "for-goodness-cakes", name: "For Goodness Cakes", category: "Youth", logo: "/partners/for-goodness-cakes.webp", mission: "For Goodness Cakes gives youth at least one special moment that is about them, nurturing optimism and confidence with a treat made especially for them." },
  { slug: "puppy-prodigies", name: "Puppy Prodigies", category: "Animal Wellness & Rescue", mission: "Puppy Prodigies helps puppies achieve their full potential as service and assistance dogs, enriching the lives of those they assist." },
  { slug: "rise-up-kids", name: "Rise Up Kids", category: "Youth", logo: "/partners/rise-up-kids.png", mission: "Rise Up Kids supports the education and needs of children in local communities in Nicaragua through sustainable, child-focused projects." },
  { slug: "rock-to-recovery", name: "Rock to Recovery", category: "Mental Health", logo: "/partners/rock-to-recovery.png", logoDark: true, mission: "Rock to Recovery helps people heal and transform their lives through writing, playing, and performing music as a group, serving veterans, youth, and those in recovery." },
  { slug: "sowing-seeds-of-change", name: "Sowing Seeds of Change", category: "Disability Support", logo: "/partners/sowing-seeds-of-change.jpg", mission: "Sowing Seeds of Change employs transition-age people with disabilities and foster youth through job-readiness training, organic farming, and educational workshops." },
  { slug: "colettes-childrens-home", name: "Colette's Children's Home", category: "Housing & Basic Needs", logo: "/partners/colettes-childrens-home.png", mission: "Colette's Children's Home provides housing and supportive services to homeless and at-risk women and children, helping them rebuild stable, independent lives." },
  { slug: "heartwood-haven", name: "Heartwood Haven", category: "Animal Wellness & Rescue", logo: "/partners/heartwood-haven.png", mission: "Heartwood Haven provides sanctuary to abused, neglected, and homeless animals while educating the public about the effects of animal agriculture." },
  { slug: "focus-southern-california", name: "FOCUS Southern California", category: "Housing & Basic Needs", logo: "/partners/focus-southern-california.png", mission: "FOCUS Southern California supports Orthodox Christian service efforts across food, occupation, clothing, understanding, and shelter to serve community needs." },
  { slug: "veteran-surf-alliance", name: "Veteran Surf Alliance", category: "Veterans", logo: "/partners/veteran-surf-alliance.webp", logoDark: true, mission: "Veteran Surf Alliance teaches, coaches, and mentors veterans to surf and to become respected members of their communities." },
];

export function getPartner(slug) {
  return partners.find((p) => p.slug === slug);
}

// Curated "popular picks" shown at the top of the directory.
// Edit this list to change the featured set.
export const popularSlugs = [
  "rescue-mission-alliance",
  "meals-on-wheels-west",
  "healthebay",
  "pow",
  "cancer-support-community-sf-bay-area",
  "priceless-pets",
  "veteran-surf-alliance",
  "weave",
];

export const popularPartners = popularSlugs
  .map((slug) => getPartner(slug))
  .filter(Boolean);

export const partnerCategories = [...new Set(partners.map((p) => p.category))].sort();

export function partnerInitials(name) {
  const cleaned = name.replace(/\(.*?\)/g, "").replace(/[^A-Za-z0-9 ]/g, " ");
  const words = cleaned.split(/\s+/).filter(Boolean).filter((w) => !/^(of|the|and|for|a)$/i.test(w));
  return (words[0]?.[0] || "") + (words[1]?.[0] || "");
}
