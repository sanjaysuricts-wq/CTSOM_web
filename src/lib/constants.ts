// ──────────────────────────────────────────
// HOME PAGE IMAGES
// ──────────────────────────────────────────

export const HOME_IMAGES = {
  hero: '/images/01-home--home-cts-helipad-branding.png',
  cruise: '/images/2.1_cruise_image_home_page.webp',
  oilAndGas: '/images/oilandgas_website.webp',
  maritime: '/images/2.3_maritime _image_home_page.webp',
  renewables: '/images/2.4_renewables_image_home_page.webp',
  engineering1: '/images/3.1-CTS-website-enginneering-home-image.jpg',
  engineering2: '/images/3.2-CTS-website-enginneering-home-image2.jpg',
  bespokeTeams: '/images/bespoke teams home section banner2.webp',
  cruiseVideo: '/videos/cruise+sector+banner_compressed.webm',
} as const




export const IMAGES = {
  ndt: '/images/services_bespoke_ndt.webp',
  ropeAccess: '/images/rope_access.webp',
  vetting: '/images/marine_vetting.webp',
}



export const COMPANY = {
  name: 'CTS Offshore and Marine Limited',
  shortName: 'CTS Offshore',
  tagline: 'Global Integrity. Local Reach.',
  phone: '+44 207 042 3222',
  whatsapp: '97192282065', // WhatsApp number (no spaces, dashes, or plus sign in URL)
  email: 'info@ctsom.com',
  website: 'www.ctsom.com',
  revenue: '£20M',
  employees: '99+',
  yearsExperience: '20+',
  availability: '24/7/365',
} as const

export const LOCATIONS = [
  {
    country: 'United Kingdom',
    city: 'London',
    isHQ: true,
    phone: '+44 207 042 3222',
    email: 'london@ctsom.com',
    address: '8 Cambridge Court, 210 Shepherds Bush Road, London W6 7NJ, UK',
    lat: 51.5074,
    lng: -0.1278,
    services: ['All Services', 'Headquarters', 'Project Management'],
  },
  {
    country: 'United Arab Emirates',
    city: 'Dubai',
    isHQ: false,
    phone: '+971 4 551 9570',
    email: 'uae@ctsom.com',
    address: 'Office No.1806, Damac Business Tower, Business Bay, Dubai, UAE',
    lat: 25.2048,
    lng: 55.2708,
    services: ['Engine Maintenance', 'Fabrication', 'Riding Teams', 'Spares supply', 'Engineering Services'],
    workshopAddress:'Office No.2917, Fujairah Free Zone, Fujaira, Dubai, UAE',
  },
  {
    country: 'Singapore',
    city: 'Singapore',
    isHQ: false,
    phone: '+65 6325 7941',
    email: 'singapore@ctsom.com',
    address: '3 Shenton Way, 14-04 Shenton House, Singapore 068805',
    lat: 1.3521,
    lng: 103.8198,
    services: ['Marine Engine Overhauls', 'Inspections', 'Spares Supply'],
  },
  {
    country: 'India',
    city: 'Mumbai',
    isHQ: false,
    phone: '+91 22 4015 6601',
    email: 'india@ctsom.com',
    address: '509/510, A Wing, Bonanza, Sahar Plaza, JB Nagar, Chakala, Andheri (East), Mumbai 400059',
    lat: 19.076,
    lng: 72.8777,
    services: ['NDT Inspections', 'Manpower Supply', 'Fabrication'],
  },
  {
    country: 'Netherlands',
    city: 'Barendrecht',
    isHQ: false,
    phone: '+31 10 899 0470',
    email: 'rotterdam@ctsom.com',
    address: 'Zwaalweg 14, 2991 ZC Barendrecht, Netherlands',
    lat: 51.8587,
    lng: 4.5339,
    services: ['Offshore Wind Support', 'Riding Teams', 'Inspections'],
  },
  {
    country: 'Bulgaria',
    city: 'Varna',
    isHQ: false,
    phone: '+359 893 485 972',
    email: 'bulgaria@ctsom.com',
    address: '28 Oborishte str., Varna 9000, Bulgaria',
    lat: 43.2141,
    lng: 27.9147,
    services: ['Fabrication', 'Blasting & Coating',],
  },
  {
    country: 'Romania',
    city: 'Galati',
    isHQ: false,
    phone: '+40 771 046 924',
    email: 'romania@ctsom.com',
    address: 'Strada Brailei Nr 171A, Birou 1 si birou 2, etaj 2, Galati 800336, Romania',
    lat: 45.4353,
    lng: 28.0080,
    services: ['Fabrication', 'Shipyard Support'],
  },
  {
    country: 'Brazil',
    city: 'Rio de Janeiro',
    isHQ: false,
    phone: '+55 21 2628 0003',
    email: 'brazil@ctsom.com',
    address: 'Avenida Paiva 550, Neves, Sao Goncalo, Rio De Janeiro, CEP 24.426-148, Brazil',
    lat: -22.9068,
    lng: -43.1729,
    services: ['Offshore Support', 'Mechanical Repairs', 'Inspections'],
  },
  {
    country: 'Malaysia',
    city: 'Johor Bahru',
    isHQ: false,
    phone: '+60 12 703 4591',
    email: 'malaysia@ctsom.com',
    address: '9 Jalan Satria, JB Perdana Industrial Park, 81300 Skudai, Johor Bahru, Malaysia',
    lat: 1.5414,
    lng: 103.6310,
    services: ['FPSO Support', 'Engine Maintenance', 'Riding Teams'],
  },
] as const

// ──────────────────────────────────────────
// SECTORS
// ──────────────────────────────────────────

export interface SectorService {
  slug: string
  title: string
  shortTitle: string
  image: string
}

export interface Sector {
  slug: string
  title: string
  shortTitle: string
  description: string
  bannerImage?: string
  bannerVideo?: string
  servicesBackgroundImage: string
  icon: string
  services: SectorService[]
}

export const SECTORS: Sector[] = [
  {
    slug: 'oil-and-gas',
    title: 'Oil & Gas',
    shortTitle: 'Oil & Gas',
    description: 'Comprehensive in-situ asset integrity services for offshore oil and gas operations, including FPSO/FSO support, platform maintenance, and live production repairs worldwide.',
    bannerImage: '/images/13-oil-and-gas-main-banner.jpg',
    bannerVideo: '/videos/oil+and+gas+sector+banner_compressed.webm',
    servicesBackgroundImage: '/images/13-oil-and-gas-main-banner.jpg',
    icon: 'Droplets',
    services: [
      { slug: 'bespoke-manpower-solutions', title: 'Bespoke Manpower Solutions', shortTitle: 'Bespoke Manpower', image: '/images/14.1-bespoke-manpower-solutions-vertical-main-image.jpg' },
      { slug: 'live-production-repairs', title: 'Live Production Repairs', shortTitle: 'Live Production Repairs', image: '/images/14.3-live-production-repairs-vertical-main-image.jpg' },
      { slug: 'fabric-maintenance', title: 'Fabric Maintenance', shortTitle: 'Fabric Maintenance', image: '/images/14.4-fabric-maintenance-vertical-main-image.jpg' },
      { slug: 'decommissioning-services', title: 'Decommissioning Services', shortTitle: 'Decommissioning', image: '/images/14.5-decommissioning-services-vertical-main-image.jpg' },
      { slug: 'cold-work-repair-solutions', title: 'Cold Work Repair Solutions', shortTitle: 'Cold Work Repair', image: '/images/14.6-cold-work-repair-solutioins-vertical-main-image.jpg' },
      { slug: 'project-teams', title: 'Project Teams', shortTitle: 'Project Teams', image: '/images/14.7-project-teams-vertical-main-image.jpg' },
      { slug: 'hvac-epc', title: 'HVAC EPC', shortTitle: 'HVAC EPC', image: '/images/14.8-HVAC-vertical-main-image.jpg' },
    ],
  },
  {
    slug: 'marine',
    title: 'Marine',
    shortTitle: 'Marine',
    description: 'Full-spectrum marine engineering services including decarbonisation, automation, engine maintenance, shipyard support, and comprehensive inspections and surveys.',
    bannerImage: '/images/15.1.1 - services main background image - marine - sector (1).webp',
    bannerVideo: '/videos/marine+sector+banner_compressed.webm',
    servicesBackgroundImage: '/images/15.1.1 - services main background image - marine - sector (1).webp',
    icon: 'Ship',
    services: [
      { slug: '3d-liner-scanning', title: '3D Liner Scanning', shortTitle: '3D Liner Scanning', image: '/images/sectors_services_mini banners_3d liner.webp' },
      { slug: 'automation-services', title: 'Automation', shortTitle: 'Automation', image: '/images/15.3---Automation-Services---marine---sectors.jpg' },
      { slug: 'engine-maintenance-services', title: 'Engine Overhauls', shortTitle: 'Engine Overhauls', image: '/images/15.4---Engine-Maintenance-Services---marine---sectors.jpg' },
      { slug: 'decarbonisation', title: 'Decarbonisation', shortTitle: 'Decarbonisation', image: '/images/15.2-Decabonisation---marine---sectors.jpg' },
      { slug: 'comprehensive-inspections-surveys', title: 'Inspections & Surveys', shortTitle: 'Inspections & Surveys', image: '/images/15.8---Comprehensive-Inspections-and-Survey---marine---sectors.jpeg' },
      { slug: 'engineering-support', title: 'Engineering Support', shortTitle: 'Engineering Support', image: '/images/sectors_services_mini banners_engineering.webp' },
      { slug: 'Shore-Power-Hydrogen-Derivative', title: 'Shore Power Hydrogen Derivative', shortTitle: 'Shore Power Hydrogen Derivative', image: '/images/services_hydrogen_2.webp' },
    ],
  },
  {
    slug: 'renewables',
    title: 'Renewables',
    shortTitle: 'Renewables',
    description: 'Supporting the energy transition with specialist renewable energy services including wind turbine maintenance, commissioning support, and technical access solutions.',
    bannerImage: '/images/16---Renewables-Banner---renewable---sector.jpg',
    bannerVideo: '/videos/renewables+sector+banner_compressed.webm',
    servicesBackgroundImage: '/images/17----Services-main-background-image---Renewables---sectors.jpg',
    icon: 'Wind',
    services: [
      { slug: 'wind-turbine-maintenance', title: 'Wind Turbine Maintenance', shortTitle: 'Wind Turbine', image: '/images/sectors_services_mini banners_wind turbine maintenance.webp' },
      { slug: 'commissioning-support', title: 'Commissioning Support', shortTitle: 'Commissioning', image: '/images/17.4---commissioning-support---renewables---sectors.jpg' },
      { slug: 'hook-up-support-services', title: 'Hook Up Support Services', shortTitle: 'Hook Up Support', image: '/images/sectors_services_mini banners_hook up support.webp' },
      { slug: 'asset-maintenance', title: 'Asset Maintenance', shortTitle: 'Asset Maintenance', image: '/images/17.6---Asset-Maintenance---renewables---sectors.jpg' },
      { slug: 'technical-access', title: 'Technical Access', shortTitle: 'Technical Access', image: '/images/17.7---Technical-Access---renewables---sectors.jpg' },
    ],
  },
  {
    slug: 'cruise-lines',
    title: 'Cruise Lines',
    shortTitle: 'Cruise',
    description: 'Turnkey outfitting solutions for the cruise industry, delivering complete interior and exterior refurbishment projects to the highest quality standards.',
    bannerImage: '/images/2.1-cruise-image-home-page.jpg',
    bannerVideo: '/videos/cruise+sector+banner_compressed.webm',
    servicesBackgroundImage: '/images/19.6---Turnkey-Outfitting-Solutions---cruise-lines---sectors.jpg',
    icon: 'Anchor',
    services: [
      { slug: 'turnkey-outfitting-solutions', title: 'Turnkey Outfitting Solutions', shortTitle: 'Turnkey Outfitting', image: '/images/19.6---Turnkey-Outfitting-Solutions---cruise-lines---sectors.jpg' },
      { slug: 'engine-maintenance-services', title: 'Engine Maintenance Services', shortTitle: 'Engine Maintenance', image: '/images/15.4---Engine-Maintenance-Services---marine---sectors.jpg' },
      { slug: 'shipyard-support', title: 'Shipyard Support', shortTitle: 'Shipyard Support', image: '/images/15.6---Shipyard-Support---marine---sectors.jpg' },
      { slug: 'comprehensive-inspections-surveys', title: 'Comprehensive Inspections & Surveys', shortTitle: 'Inspections & Surveys', image: '/images/15.8---Comprehensive-Inspections-and-Survey---marine---sectors.jpeg' },
      { slug: 'automation-services', title: 'Automation Services', shortTitle: 'Automation', image: '/images/15.3---Automation-Services---marine---sectors.jpg' },
    ],
  },
]

// ──────────────────────────────────────────
// SERVICES (detailed individual pages)
// ──────────────────────────────────────────

export interface ServicePage {
  slug: string
  title: string
  shortTitle: string
  sector: string // slug of parent sector
  description: string
  bannerImage: string
  sections: ServiceSection[]
}

export interface ServiceSection {
  title: string
  description: string
  image?: string
  items?: string[]
}

export const SERVICE_PAGES: ServicePage[] = [
  // ─── OIL & GAS SERVICES ───
  {
    slug: 'bespoke-manpower-solutions',
    title: 'Bespoke Manpower Solutions',
    shortTitle: 'Bespoke Manpower',
    sector: 'oil-and-gas',
    description: 'CTS Offshore and Marine offers a comprehensive range of skilled labourers who can work directly on your vessel or offshore facility, allowing repairs and maintenance to be completed without the need for dry docking.',
    bannerImage: '/images/23---main-banner---bespoke-manpower-solutions---services.jpg',
    sections: [
      {
        title: 'Workforce Provision',
        description: 'We provide operational flexibility with certified and experienced personnel, comprehensive skillsets, and turnkey solutions. Our teams are available 24/7 with local reach and class-approved qualifications.',
        image: '/images/services_bespoke manpower solutions_workforce provision.webp',
        items: ['Operational Flexibility', 'Certified and Experienced Personnel', 'Comprehensive Skillsets', 'Turnkey Solutions', 'Cost Effective', 'Fluent English Supervisors', 'Quality and Safety Standards', '24/7 Local Reach, Class Approved'],
      },
      {
        title: 'NDT Services',
        description: 'We offer a wide range of non-destructive testing services, including visual inspection, UTM jobs, MPI, LPT coating inspection, video relay, and high-quality UTM services with steel estimation and repair plan supervision.',
        image: '/images/services_bespoke manpower_ndt.webp',
        items: ['Teams for visual inspection, UTM Jobs, MPI, LPT, Coating Inspection, Video Relay', 'High-Quality UTM Services (Steel Estimation/Repair Plan/Supervision - CAP/CAS/URS Surveys)'],
      },
    ],
  },
  {
    slug: 'retrofit-solutions',
    title: 'Retrofit Solutions',
    shortTitle: 'Retrofit Solutions',
    sector: 'oil-and-gas',
    description: 'CTS Offshore delivers innovative retrofit solutions to upgrade and modernise existing offshore and marine assets. Our engineering-led approach ensures that retrofit projects are delivered safely, on time, and within budget.',
    bannerImage: '/images/services_Retrofit Solutions main banner.webp',
    sections: [
      {
        title: 'Innovative Approach to Retrofitting',
        description: 'We employ cutting-edge engineering methodologies and the latest technologies to deliver retrofit solutions that extend asset life, improve operational efficiency, and enhance safety standards.',
        image: '/images/services_retrofit solutions_Innovative Approach to Retrofitting.webp',
        items: ['Structural modifications', 'System upgrades', 'Equipment replacement', 'Regulatory compliance upgrades'],
      },
      {
        title: 'Collaborative Project Delivery',
        description: 'Our project teams work closely with clients, class societies, and regulatory bodies to ensure seamless delivery of retrofit campaigns. We manage every aspect from initial survey and engineering design through to installation and commissioning.',
        image: '/images/24.5---collaborative-project-delivery---retrofit-solutions---services.jpg',
        items: ['End-to-end project management', 'Engineering design services', 'Procurement and logistics', 'Commissioning and handover'],
      },
    ],
  },
  {
    slug: 'live-production-repairs',
    title: 'Live Production Repairs',
    shortTitle: 'Live Production Repairs',
    sector: 'oil-and-gas',
    description: 'CTS Offshore specialises in performing complex repairs on live production facilities. Our experienced teams execute maintenance and repair work safely while production continues, minimising downtime and revenue loss.',
    bannerImage: '/images/Services_Live Production Repairs_Main Banner.webp',
    sections: [
      {
        title: 'Comprehensive Services',
        description: 'Our live production repair capabilities cover a wide range of disciplines, from structural steel repairs and pipe work to mechanical and electrical maintenance, all performed in live production environments.',
        image: '/images/services_live production repairs_comprehensive services_2.webp',
        items: ['Structural steel repairs', 'Pipework modifications', 'Mechanical maintenance', 'Electrical systems'],
      },
      {
        title: 'Safety and Compliance',
        description: 'Safety is paramount when working on live production facilities. Our teams are fully trained in hot work, confined space entry, and hazardous area operations, ensuring all work is performed to the highest safety standards.',
        image: '/images/25.2---safety-and-compliance----live-production-repairs--services.jpg',
        items: ['Hot work management', 'Confined space procedures', 'Hazardous area compliance', 'Permit to work systems'],
      },
      {
        title: 'Risk Assessment and Hazard Identification',
        description: 'Every live production repair begins with a thorough risk assessment and hazard identification process. Our QHSE team works alongside operations to develop safe systems of work.',
        image: '/images/25.3---Risk-Assessment-and-Hazard-Identification----live-production-repairs--services.jpg',
      },
      {
        title: 'Safe Hot Work Environments',
        description: 'We create controlled hot work environments using industry-leading containment and monitoring systems, ensuring that welding, cutting, and grinding operations can be performed safely alongside live production.',
        image: '/images/25.4---safe-hot-work-environments---live-production-repairs---services.jpg',
      },
    ],
  },
  {
    slug: 'fabric-maintenance',
    title: 'Fabric Maintenance',
    shortTitle: 'Fabric Maintenance',
    sector: 'oil-and-gas',
    description: 'CTS Offshore delivers comprehensive fabric maintenance services for offshore and marine installations. Our experienced teams maintain the structural integrity of your assets through planned maintenance programmes and reactive repair campaigns.',
    bannerImage: '/images/services_fabric maintenance_main banner.webp',
    sections: [
      {
        title: 'Cutting-Edge Equipment and Techniques',
        description: 'We utilise the latest equipment and techniques to deliver fabric maintenance services that meet the highest industry standards. Our capabilities include steel renewal, surface preparation, and protective coating application.',
        image: '/images/26.2---cutting-edge-equioment-and-technique---fabric-maintenance---services-copy.jpg',
        items: ['Structural steel renewal', 'Grit blasting and surface preparation', 'Protective coating systems', 'Corrosion management'],
      },
      {
        title: 'Specialised Offshore Fabric Maintenance',
        description: 'Our offshore fabric maintenance teams are experienced in working on FPSOs, platforms, and subsea structures, delivering planned maintenance campaigns that extend asset life and maintain structural integrity.',
        image: '/images/26.3---specialized-offshore--fabric-maintenance---services-.jpg',
      },
      {
        title: 'Expert Painting Services',
        description: 'Our NACE and FROSIO certified coating specialists deliver professional painting services including surface preparation, primer application, and topcoat systems to protect your assets against the harshest marine environments.',
        image: '/images/26.4---expert-painting-services---fabric-maintenance---services.jpg',
      },
    ],
  },
  {
    slug: 'decommissioning-services',
    title: 'Decommissioning Services',
    shortTitle: 'Decommissioning',
    sector: 'oil-and-gas',
    description: 'CTS Offshore provides safe, efficient, and environmentally responsible decommissioning services for offshore oil and gas installations. Our experienced project teams manage the full decommissioning lifecycle from planning through to final disposal.',
    bannerImage: '/images/26.5-decommissioning-Services---main-banner---oil-and-gas-.jpg',
    sections: [
      {
        title: 'Full Lifecycle Decommissioning',
        description: 'Our decommissioning services cover every stage of the process including well abandonment support, topsides preparation, subsea infrastructure removal, and onshore recycling and disposal.',
        image: '/images/services_decommissioningServices_fullLifecycleDecom.webp',
        items: ['Well abandonment support', 'Topsides cleaning and preparation', 'Make-safe operations', 'Environmental compliance', 'Waste management and disposal', 'Recycling and material recovery'],
      },
    ],
  },
  {
    slug: 'cold-work-repair-solutions',
    title: 'Cold Work Repair Solutions',
    shortTitle: 'Cold Work Repair',
    sector: 'oil-and-gas',
    description: 'CTS Offshore offers specialist cold work repair solutions that eliminate the need for hot work in hazardous environments. Our innovative approach enables repairs to be performed safely in live production zones without shutting down operations.',
    bannerImage: '/images/services_Cold Work Repair Solutions_main banner.webp',
    sections: [
      {
        title: 'Our Cold Work Repair Solutions',
        description: 'Our cold work capabilities include composite wrap repairs, mechanical clamp installations, and non-invasive repair techniques that provide permanent solutions without the risks associated with hot work.',
        image: '/images/services_our coldwork solutions.webp',
        items: ['Composite wrap systems', 'Mechanical clamp installations', 'Non-invasive pipe repair', 'Leak sealing solutions'],
      },
      {
        title: 'Benefits of Cold Work Repair Solutions',
        description: 'Cold work repairs offer significant advantages including reduced risk, no requirement for production shutdown, faster execution, and lower overall project costs compared to traditional hot work methods.',
        image: '/images/27.3----benefits-of-cold-work-repair-solutions---cold-work-repair-solutuions---services.jpg',
        items: ['No production shutdown required', 'Reduced safety risk', 'Faster execution time', 'Lower project costs', 'Permanent repair solutions'],
      },
    ],
  },
  {
    slug: 'project-teams',
    title: 'Project Teams',
    shortTitle: 'Project Teams',
    sector: 'oil-and-gas',
    description: 'CTS Offshore assembles dedicated project teams tailored to your specific requirements. Our teams bring together the right combination of skills, experience, and certifications to deliver complex projects safely and efficiently.',
    bannerImage: '/images/28---main-banner---project-teams--services.jpg',
    sections: [
      {
        title: 'QHSE Excellence',
        description: 'Quality, Health, Safety, and Environment excellence is embedded in every project team we deploy. Our QHSE management systems are ISO certified, ensuring that your project benefits from world-class safety standards.',
        image: '/images/services_project teams_ qhse excellence.webp',
        items: ['ISO 9001 Quality Management', 'ISO 14001 Environmental Management', 'ISO 45001 Health & Safety', 'Continuous improvement culture'],
      },
      {
        title: 'Specialised Services',
        description: 'Our project teams offer a comprehensive range of specialist services, from mechanical and electrical disciplines through to structural and coating expertise, all managed by experienced project managers.',
        image: '/images/services_project teams_specialised services.webp',
        items: ['Multi-discipline teams', 'Experienced project management', 'Full engineering support', 'Progress reporting and documentation'],
      },
    ],
  },
  {
    slug: 'hvac-epc',
    title: 'HVAC EPC',
    shortTitle: 'HVAC EPC',
    sector: 'oil-and-gas',
    description: 'CTS Offshore delivers full Engineering, Procurement, and Construction (EPC) services for HVAC systems on marine and offshore installations. From initial survey and design through to installation, commissioning, and ongoing maintenance.',
    bannerImage: '/images/29---main-banner---HVAC-EPC---services.jpg',
    sections: [
      {
        title: 'Our Comprehensive HVAC Services',
        description: 'We provide end-to-end HVAC solutions including system survey and assessment, engineering design, equipment procurement, installation, commissioning, and planned maintenance programmes.',
        image: '/images/29.1---our-comprehensive-services---HVAC-EPC---Services.jpg',
        items: ['System survey and assessment', 'Engineering design', 'Equipment procurement', 'Installation and commissioning', 'Planned maintenance programmes', 'Emergency repair services'],
      },
    ],
  },
  // ─── MARINE SERVICES ───
  {
    slug: 'decarbonisation',
    title: 'Decarbonisation',
    shortTitle: 'Decarbonisation',
    sector: 'marine',
    description: 'At CTS Offshore and Marine, we offer a suite of comprehensive decarbonisation solutions to help your fleet achieve carbon neutrality and comply with international standards. CTS provides hassle-free, turnkey engineering and installation with a global presence and local reach.',
    bannerImage: '/images/decarb banner.webp',
    sections: [
      {
        title: 'Integrated Emission Reduction Systems',
        description: 'Our decarbonisation solutions are curated by industry experts and installed by qualified CTS professionals. We offer a diverse range of services and technologies designed to enhance energy efficiency and reduce emissions across your fleet.',
        image: '/images/30.2---integrated-solitions-for-decarbonisation---decarbonisation---services.jpg',
        items: ['Free EEXI/CII Fleet Appraisals', '3D Retrofitting Service', 'Propeller Inspections / Modifications', 'Class-Approved LED Upgrades', 'GF+ Piping Weight Reduction', 'Marine Absorption Chillers', 'Variable Frequency Drives', 'Micro Boilers', 'Shaft Generators', 'Wind Deflectors', 'Wind Sail Rotor Installations'],
      },
      {
        title: 'EEXI / CII Consulting & IMO-DCS / EU ETS- Compliance',
        description: 'CTS provides free EEXI/CII Fleet Appraisals, EEXI/CII Consulting, and IMO-DCS/EU ETS- Regulatory compliance. From assessment to action, we help you become IMO Ready with our comprehensive decarbonisation roadmap.',
        // image: '/images/30.2---integrated-solitions-for-decarbonisation---decarbonisation---services.jpg',
        items: ['Free EEXI/CII Fleet Appraisals', 'EEXI/CII Consulting', 'IMO-DCS/EU ETS- Regulatory compliance'],
      },
      {
        title: 'Advanced Green Technologies',
        description: 'We install and commission a range of advanced green technologies including GF+ piping systems for weight reduction, wind sail rotor installations, and hydrogen fuel cell systems.',
        image: '/images/services_decarbonisation_advanced green technologies.webp',
        items: ['GF+ Piping Weight Reduction', 'Wind Sail Rotor Installations', 'Hydrogen Fuel Cells'],
      },
      {
        title: 'Energy Efficiency Solutions',
        description: 'Our energy efficiency solutions (ESD) include marine absorption chillers, variable frequency drives, and micro boilers that significantly reduce fuel consumption and emissions.',
        image: '/images/services_decarbonisation_Energy Efficiency Solutions.webp',
        items: ['Marine Absorption Chillers', 'Variable Frequency Drives', 'Micro Boilers', 'Pre-duct / PSS (Pre-Swirl Stator)', 'PBCF (Propeller boss cap fins) / Twisted rudder & bulb'],
      },
      {
        title: 'Hydrodynamic & Power Solutions',
        description: 'We install air lubrication systems, shaft generators, and wind deflectors that optimise vessel hydrodynamics and power generation to achieve significant fuel savings.',
        image: '/images/services_decarbonisation_hydrodynamic and power solutions.webp',
        items: ['Air Lubrication System (ALS)', 'Shaft Generators', 'Wind Deflectors'],
      },
    ],
  },
  {
    slug: 'automation-services',
    title: 'Automation Services',
    shortTitle: 'Automation',
    sector: 'marine',
    description: 'CTS Offshore provides comprehensive automation and instrumentation services for marine and offshore installations. We offer expert troubleshooting and repair services for various electrical and instrumentation systems aboard vessels.',
    bannerImage: '/images/31---main-banner---automation-services.jpg',
    sections: [
      {
        title: 'Automation and Instrumentation Services',
        description: 'We offer expert troubleshooting and repair services for various electrical and instrumentation systems aboard vessels, including engine control instruments, ballast water control panels, and custom ECM performance testing.',
        image: '/images/services_automation services_automation and instrumentation services copy.webp',
        items: ['Troubleshooting on Engine Control Instruments and Panels', 'Troubleshooting/Repair of Navcom, FDS, Ballast Water Control Panels, MSBs', 'Custom ECM Performance Testing'],
      },
      {
        title: 'Electrical and Instrumentation',
        description: 'Our electrical and instrumentation teams deliver comprehensive E&I services across marine and offshore installations, from routine maintenance to complex system upgrades.',
        image: '/images/services_automation services_electrical and instrumentation.webp',
        items: ['Troubleshooting/Repair of Navcom, FDS, Ballast Water Control Panels, MSBs', 'Troubleshooting on Engine Control Instruments and Panels'],
      },
    ],
  },
  {
    slug: 'engine-maintenance-services',
    title: 'Engine Maintenance Services',
    shortTitle: 'Engine Maintenance',
    sector: 'marine',
    description: 'CTS Offshore provides comprehensive services for the overhauling and repair of main engines and generators. Our teams deliver health check-ups, 3D liner scanning, scheduled maintenance, and 24/7 machinery breakdown emergency support globally.',
    bannerImage: '/images/32---main-banner---engine-maintenance-services.jpg',
    sections: [
      {
        title: 'Main Engine/Generators Overhauling and Repairs',
        description: 'Our teams provide comprehensive services for the overhauling and repair of main engines and generators, including health check-ups, 3D liner scanning, and scheduled maintenance programmes.',
        image: '/images/32.1---Types-of-Services-Offered---engine-maintenance-services.jpg',
        items: ['Health Check-ups', '3D Liner Scanning and Measurement Technology', 'Scheduled Maintenance (Top Overhaul/Major Overhaul)', 'Troubleshooting for Breakdown of Machinery', '24/7 Machinery Breakdown Emergency Support', 'Annual Maintenance Packages'],
      },
      {
        title: 'Supported Engine Types',
        description: 'Our engineers are experienced with all major engine manufacturers including MAN B&W, Sulzer, Wartsila, Cummins, Caterpillar, Mitsubishi, and Yanmar.',
        image: '/images/services_engineMaintenance_supported engine types.webp',
        items: ['MAN B&W', 'Wartsila', 'Caterpillar', 'Cummins', 'Mitsubishi', 'Yanmar', 'Sulzer'],
      },
      {
        title: 'Key Maintenance Processes',
        description: 'Our systematic maintenance processes follow OEM guidelines and class requirements, ensuring that your engines receive the highest standard of care and attention.',
        image: '/images/32.3---key-maintenance-processes---engine-maintenance-services.jpg',
      },
      {
        title: 'Specialised Tools and Techniques',
        description: 'We invest in the latest specialist tools and diagnostic equipment to deliver efficient, high-quality engine maintenance services that minimise disruption to your operations.',
        image: '/images/32.4---specialized-tools-and-techniques---engine-maintenance-services.jpg',
      },
    ],
  },
  {
    slug: 'shipyard-support',
    title: 'Shipyard Support',
    shortTitle: 'Shipyard Support',
    sector: 'marine',
    description: 'CTS Offshore provides comprehensive shipyard support services to vessel owners, operators, and shipyard management teams. Our experienced personnel augment shipyard capabilities to ensure projects are completed safely, on time, and to the highest quality standards.',
    bannerImage: '/images/34---main-banner---shipyard-support-.jpg',
    sections: [
      {
        title: 'Our Offerings',
        description: 'We provide a full range of shipyard support services including skilled manpower, project supervision, quality assurance, and specialist technical services that complement existing shipyard capabilities.',
        image: '/images/34.1---our-offerings---shipyard-support-.jpg',
        items: ['Skilled manpower supply', 'Project supervision', 'Quality assurance and control', 'Specialist technical services'],
      },
      {
        title: 'Extended Services Portfolio',
        description: 'Beyond core shipyard support, we offer extended services including steel fabrication, pipe fitting, electrical installation, and coating services to deliver complete project solutions.',
        image: '/images/34.2---our-offerings-2---shipyard-support-.jpg',
      },
      {
        title: 'Project Management Services',
        description: 'Our experienced project managers oversee all aspects of shipyard projects, from initial planning and resource allocation through to final inspection and vessel handover.',
        image: '/images/34.4---Project-management-services---shipyard-support.jpg',
      },
      {
        title: 'Global Presence',
        description: 'With offices across 9 countries, CTS Offshore can provide shipyard support services at major shipyards and repair facilities worldwide, ensuring consistent quality wherever your vessels are located.',
        image: '/images/34.6-Global-presene---shipyard-support-copy.jpg',
      },
    ],
  },
  {
    slug: 'comprehensive-inspections-surveys',
    title: 'Comprehensive Inspections & Surveys',
    shortTitle: 'Inspections & Surveys',
    sector: 'marine',
    description: 'CTS Offshore delivers comprehensive inspection and survey services for marine and offshore assets. Our qualified inspectors and surveyors use the latest techniques and equipment to assess asset condition, identify defects, and provide detailed reporting.',
    bannerImage: '/images/34---main-banner---comprehensive-inspections-and-surveys.jpg',
    sections: [
      {
        title: 'NDT Inspection Services',
        description: 'We offer a wide range of non-destructive testing services. Our teams carry out visual inspection, UTM jobs, MPI, LPT, coating inspection, video relay, and more. We also provide high-quality UTM services including steel estimation, repair plan, and supervision for CAP/CAS/URS surveys.',
        image: '/images/services_bespoke manpower_ndt.webp?v=1',
        items: ['Z Rope Access Teams for Visual Inspection, UTM Jobs, MPI, LPT, Coating Inspection, Video Relay', 'High-Quality UTM Services (Steel Estimation/Repair Plan/Supervision - CAP/CAS/URS Surveys)', 'Ultrasonic Testing (UT)', 'Magnetic Particle Inspection (MPI)', 'Liquid Penetrant Testing (LPT)', 'Radiographic Testing (RT)'],
      },
      {
        title: 'Surveys and Condition Assessments',
        description: 'We perform detailed surveys and condition assessments for class societies, insurers, and asset owners, providing comprehensive reports that support maintenance planning and decision making.',
        image: '/images/34.10----Surveys-and-Condition-Assessments---Inspections.jpg?v=1',
      },
      {
        title: 'Rope Access Solutions',
        description: 'Our IRATA certified rope access teams provide safe, efficient access to difficult-to-reach areas for inspection, maintenance, and repair work, eliminating the need for costly scaffolding.',
        image: '/images/services_comprehensive inspections surveys_ropeaccesssolutions.webp',
      },
      {
        title: 'Marine & Ship Vetting Services',
        description: 'We provide professional marine and ship vetting services to support charter party requirements, port state control compliance, and industry vetting schemes.',
        image: '/images/marinendshipvetting.jpg',
      },
    ],
  },
  {
    slug: '3d-liner-scanning',
    title: 'Engine Liner Scanning (LDM)',
    shortTitle: '3D Liner Scanning',
    sector: 'marine',
    description: 'CTS Offshore deploys proprietary 3D liner scanning technology — bringing fast and efficient failure diagnosis and performance monitoring without the need for immobilisation or disassembly. Only 10 minutes per cylinder with ultrasonic accuracy of 100 microns.',
    bannerImage: '/images/services_3d liner_banner.webp',
    sections: [
      {
        title: 'Benefits of Engine Liner Scanning',
        description: 'Engine Liner Scanning (LDM)  reduces downtime by up to 30% and prevents major engine failures, ensuring long-term sustainability with minimal carbon emissions. Engineers are available on-site at short notice with portable equipment for multi-vessel service with Tender access.',
        image: '/images/services_3dLinerScanning_benefits.webp',
        items: ['Fast and Effective: Only 10 minutes per cylinder', 'Highly Accurate: Ultrasonic accuracy of 100 microns', 'Global Availability: Engineers on-site at short notice', 'Comprehensive Accessibility: Portable equipment', 'Quick Turn Around: Multi-vessel service with Tender access'],
      },
      {
        title: 'Information Captured',
        description: 'Our scanning technology delivers comprehensive data reports covering all critical liner parameters, enabling data-driven maintenance planning that reduces unnecessary overhauls and extends component service life.',
        image: '/images/services_3dLinerScanning_information captured.webp',
        items: ['Liner Diameters (Maximum 500 & 400)', 'Wear Rates (mm per 1000 hours)', 'Total Projected Lifespan (hours)', 'Remaining Lifespan (hours)', 'Ovality Data & Liner Issues', 'Clover leafing & High corrosion wear', 'High fidelity imagery of piston rings, crown, skirt and internals'],
      },
    ],
  },
  {
    slug: 'engineering-support',
    title: 'Turnkey Engineering Solutions',
    shortTitle: 'Engineering Support',
    sector: 'marine',
    description: 'CTS delivers comprehensive engineering solutions through our experienced team of naval architects, marine engineers, and technical specialists. We provide end-to-end support from concept to completion, with global capabilities and local expertise.',
    bannerImage: '/images/services_Turnkey Engineering Solutions_main banner.webp',
    sections: [
      {
        title: 'Engineering Services',
        description: 'Our engineering team delivers full turnkey solutions across a wide range of marine and offshore disciplines, from initial design and feasibility through to installation and commissioning.',
        image: '/images/services_Turnkey Engineering Solutions_Engineering Services.webp',
        items: ['Retrofit / Upgrades- Full Turnkey Engineering solutions along with 3d laser scanning services for precise engineering', 'Engineering Analysis- Stability, structural FEM, Hull form Optimization', 'Naval architecture- Intact and damage stability, preparation of statutory drawings as per regulations/requirements, global strength and fatigue analysis, Inclining experiment, tank calibration works ', 'Structural Modifications- Deck strength analysis for vessel and offshore systems', 'Structural Modifications: Vessels and offshore systems', 'Pre commissioning and commissioning support- Ensuring operational readiness', 'SPM engineering support- feasibility, basic and detailed engineering', 'Feasibility Studies: Conversions and system upgrades'],
      },
      {
        title: 'Specialized Services',
        description: 'Our turnkey engineering approach ensures seamless project delivery with high-fidelity engineering inputs and full regulatory compliance across all maritime jurisdictions.',
        image: '/images/services_Turnkey Engineering Solutions_Specialized Services (1).webp',
        items: ['OCIMF Compliance: Full Turnkey Engineering Solutions', 'Mooring Analysis and sea fastening calculations', 'Energy saving devices (ESD) retro solutions- feasibility and detail engineering', 'Detailed assessment for computational fluid dynamics (CFD).', 'Grain Loading stability upgrade calculations for regulation compliance', 'Supervision and Project Management', 'Regulatory Compliance – IMO DCS, EEXI/ CII calculations, EU ETS and more'],
      },
    ],
  },
  {
    slug: 'spares-supply',
    title: 'Spare Parts & Machinery Supply',
    shortTitle: 'Spares Supply',
    sector: 'marine',
    description: 'Our Spares and Equipment Division has extensive experience in sourcing high-quality spares, equipment, and machinery. We deliver top-quality products at competitive prices while minimising logistics costs. Your Vessel\'s Needs, Within Reach.',
    bannerImage: '/images/services_spares supply main banner.webp',
    sections: [
      {
        title: 'Main and Auxiliary Engine Spares',
        description: 'Extensive sourcing network for genuine, second-hand, and refurbished spare parts and equipment. We are trusted partners of leading engine manufacturers and OEMs worldwide.',
        image: '/images/services_spares supply_Main and Auxiliary Engine Spares.webp',
        items: ['Birch Diesel', 'Both Shell', 'Becker', 'Boiler', 'Yanmar', 'Caterpillar', 'Cummins', 'Step Motor', 'Wartsila', 'Mitsubishi', 'Cut Pumps', 'Separator', 'Generator'],
      },
      {
        title: 'Comprehensive Supply Range',
        description: 'From pumps and compressors to purifiers, electric motors, hydraulics, and fire-fighting equipment — we supply a complete range of marine spare parts and machinery.',
        image: '/images/services_spares supply_Comprehensive Supply Range.webp',
        items: ['Pumps & Compressors', 'Purifiers & Filters', 'Electric Motors & Hydraulics', 'Fire Fighting Equipment', 'Valves & Fittings', 'Lifesaving appliances', 'Hydro Technology & Galley Equipment'],
      },
    ],
  },
  {
    slug: 'steel-aluminum-fabrication',
    title: 'Fabrication Works',
    shortTitle: 'Steel & Aluminum',
    sector: 'marine',
    description: 'Our teams specialise in high-quality steel and aluminum fabrication. Ensuring durable and reliable solutions, committed to quality and efficiency, we deliver precision-engineered structures on-time and in-situ to minimise downtime and maximise performance.',
    bannerImage: '/images/04-sectors-oil-gas--oil-gas-fabric-maintenance-painting.jpg',
    sections: [
      {
        title: 'Our Expertise',
        description: 'Class Approved teams for Steel and Aluminum Vessel projects and Piping Systems/BWTS installations. We deliver comprehensive fabrication, installation, and repair services across all vessel types.',
        image: '/images/services_Steel & Aluminum Fabrication_Our Expertise .webp',
        items: ['Renewal of steel in ballast tanks, cargo tank holds, decks and engine room', 'Repairs to cargo hatch-covers', 'Renewal of all types of pipes', 'Anchor chain repair', 'Renewal of anodes in tanks', 'URS 30 hatch-securing modifications', 'SPS Overlay steel renewal'],
      },
      {
        title: 'Cold Work Solutions',
        description: 'We offer a range of cold work repair solutions using advanced techniques and technologies that eliminate the need for hot work, reducing risk and enabling repairs in hazardous areas.',
        image: '/images/services_Steel & Aluminum Fabrication_cold work solutions.webp',
        items: ['GF+ Piping Solution', 'Cold Technology SPS Overlay', 'Composite Repairs', 'Clamp Repairs'],
      },
    ],
  },
  {
    slug: 'gf-piping-solutions',
    title: 'GF+ Piping Solutions',
    shortTitle: 'GF+ Piping',
    sector: 'marine',
    description: 'CTS is proudly partnered with Georg Fischer Piping Systems, delivering advanced non-metal piping solutions for marine and offshore use. These systems are made from lightweight, corrosion-free thermoplastics like PVC-U/C, PE, PP, and PB — supporting reliable and safe water, coolant, and sewage transport across ships, wind farms, and offshore platforms.',
    bannerImage: '/images/gf pipping main banner.webp',
    sections: [
      {
        title: 'Key Benefits',
        description: 'GF+ piping systems deliver significant advantages over traditional metal piping, with a service life of at least 25 years and full compliance with major classification societies.',
        image: '/images/services_gf piping solutions_Key Benefits.webp',
        items: ['Lightweight & Corrosion-Free: For the entire service life (25+ years)', 'Class Approved: By ABS, Bureau Veritas, ClassNK, CCS, DNV, LR, and RINA', 'Safe & Hygienic: Highly engineered, incrustation-free and fire-retardant solutions', 'Sustainable: Recyclable materials compliant with the Green Ship Passport'],
      },
      {
        title: 'Key Applications',
        description: 'GF+ piping solutions support a wide range of onboard water and fluid systems, from potable water and HVAC to ballast and fire suppression systems.',
        image: '/images/services_gf piping solutions_Key Applications.webp',
        items: ['Potable Hot/Cold Water', 'Chilled Water & Black/Grey Water', 'Jet Water & Sewage Tank', 'Seawater Cooling & Bilge/Ballast Systems', 'Galley Drain & Fire Suppression Systems', 'Air Conditioning (HVAC) & Pools/Spa Areas', 'Closed-Loop Scrubber Systems'],
      },
    ],
  },
  {
    slug: 'thermography-vibration-analysis',
    title: 'Thermography & Vibration Analysis',
    shortTitle: 'Thermography',
    sector: 'marine',
    description: 'Precision You Can Measure. Problems You Can Prevent. Enhance operational efficiency, reduce energy consumption, and enable predictive maintenance with our integrated Vibration Monitoring and Infrared Thermography solutions.',
    bannerImage: '/images/services_Thermography & Vibration Analysis_main banner.webp',
    sections: [
      {
        title: 'Key Benefits',
        description: 'Our thermal and vibration analysis detects early-stage faults, monitors live equipment, and isolates issues before they escalate — from identifying misalignment and bearing wear to faulty electrical connections and circuit overloads.',
        image: '/images/services_Thermography & Vibration Analysis_Key Benefits.webp',
        items: ['Early fault detection and isolation', 'Real-time monitoring of live equipment', 'Root cause analysis and risk reduction', 'Predictive maintenance planning', 'Up to 40% reduction in downtime', 'Up to 25% reduction in maintenance costs', 'Enhanced safety and energy efficiency'],
      },
      {
        title: 'What It Covers',
        description: 'Our thermography and vibration analysis services cover all critical rotating and electrical equipment across marine and offshore installations.',
        image: '/images/services_Thermography & Vibration Analysis_what it covers.webp',
        items: ['Rotating equipment (motors, pumps, compressors)', 'Bearings, couplings, and alignment checks', 'Electrical panels and switchgear hotspots', 'Thermal anomalies in HVAC and piping systems', 'Seawater, lube oil, and cooling systems', 'Misalignment, imbalance, wear, and overloads'],
      },
    ],
  },
  {
    slug: 'Shore-Power-Hydrogen-Derivative',
    title: 'Shore Power Hydrogen Derivative',
    shortTitle: 'Shore Power Hydrogen Derivative',
    sector: 'marine',
    description: 'Advanced hydrogen infrastructure solution achieving competitive LCoH through optimized storage, transport, and handling systems. Delivers grid-parity shore power while eliminating capacity bottlenecks, enabling cost-effective port expansion and systematic decarbonization. A sustainable and affordable decarbonisation roadmap.',
    bannerImage: '/images/shore power banner.webp',
    sections: [
      {
        title: 'Key Services',
        description: '',
        image: '/images/services_hydrogen_1.webp',
        items: ['Modular eMethanol synthesis units for decentralised production and aggregation', 'Engineering sustainable production pathways for green ports through zero-carbon metals, transportation and operation', 'Multi-vector energy derivatives for power, heating, and cooling – spin new port adjacent industries (e.g. data centres)', 'Capital project development, pre-FEED, FEED and EPC execution support'],
      },
      {
        title: 'From Challenge to Change',
        description: 'Traditional Methods :',
        image: '/images/services_hydrogen_5.webp',
        items: ['Compressed H2 limits cargo and poses safety risks', 'Liquid H2 needs cryogenics and high energy', 'Methanol/biofuels lack scalability and long-term viability'],
      },
      {
        title: '',
        description: '',
        items: ['Our Solution stores hydrogen in a liquid carrier at ambient conditions, safe, scalable and cost-effective, eliminating high CAPEX, space issues and complexity', 'A real path to zero-emission operations, ready for deployment at fossil parity',],
      },
      {
        title: 'POWERING PORTS WITH HYDROGEN: HERE’S WHY',
        description: '',
        image: '/images/services_hydrogen_3.webp',
        items: ['No cryogenic or high-pressure systems needed', 'Cost parity with marine diesel (MDO)', 'Zero-carbon maritime operations', '50% faster deployment', 'Easy integration with existing port infrastructure', 'Lower operational risks', 'Scalable across offshore,defense and other sectors'],
      },
    ],
  },
  // ─── RENEWABLES SERVICES ───
  {
    slug: 'wind-turbine-maintenance',
    title: 'Wind Turbine Maintenance',
    shortTitle: 'Wind Turbine',
    sector: 'renewables',
    description: 'CTS Offshore provides specialist wind turbine maintenance services for onshore and offshore wind farms. Our experienced technicians deliver planned and reactive maintenance that maximises turbine availability and energy production.',
    bannerImage: '/images/services_Wind Turbine Maintenance_banner.webp',
    sections: [
      {
        title: 'Our Wind Turbine Maintenance Services',
        description: 'We provide a comprehensive range of wind turbine maintenance services from routine inspections and planned maintenance through to major component replacements and emergency repairs.',
        image: '/images/services_Wind Turbine Maintenance Services.webp',
        items: ['Planned preventive maintenance', 'Corrective maintenance', 'Major component replacement', 'Blade inspection and repair'],
      },
      {
        title: 'Advanced Maintenance Capabilities',
        description: 'Our advanced maintenance capabilities include condition monitoring, predictive analytics, and specialist techniques that extend component life and reduce unplanned downtime.',
        image: '/images/35.2----our-wind-turbine-maintenance-services-include.jpg',
        items: ['Condition monitoring systems', 'Vibration analysis', 'Oil sampling and analysis', 'Thermographic inspection'],
      },
    ],
  },
  {
    slug: 'hook-up-support-services',
    title: 'Hook Up Support Services',
    shortTitle: 'Hook Up Support',
    sector: 'renewables',
    description: 'CTS Offshore delivers professional hook-up support services for offshore wind farms, oil and gas platforms, and marine installations. Our teams manage the critical connection and commissioning phase of major projects.',
    bannerImage: '/images/36---main-banner---hook-up-support-services.jpg',
    sections: [
      {
        title: 'Our Hook Up Support Services',
        description: 'We provide comprehensive hook-up support including mechanical, electrical, and instrumentation connections, pre-commissioning checks, and system integration testing.',
        image: '/images/services_Hook Up Support Services_.webp',
        items: ['Mechanical connections', 'Electrical terminations', 'Instrumentation hook-up', 'Pre-commissioning checks'],
      },
      {
        title: 'Major System Connections',
        description: 'Our experienced teams handle the connection of major systems including power generation, process control, safety systems, and communications infrastructure.',
        image: '/images/services_Hook Up Support Services_Major System Connections.webp',
        items: ['Power generation systems', 'Process control systems', 'Safety and fire systems', 'Communications infrastructure'],
      },
    ],
  },
  {
    slug: 'commissioning-support',
    title: 'Commissioning Support',
    shortTitle: 'Commissioning',
    sector: 'renewables',
    description: 'CTS Offshore provides expert commissioning support services to ensure that your systems and equipment are properly tested, validated, and ready for safe operation. Our commissioning engineers bring extensive experience across all major disciplines.',
    bannerImage: '/images/services_commissioning support_main banner.webp',
    sections: [
      {
        title: 'Tailored for Success',
        description: 'Every commissioning project is unique. We develop tailored commissioning plans and procedures that align with your specific requirements, manufacturer guidelines, and regulatory standards.',
        image: '/images/37.1---Tailored-for-scuccess-.jpg',
      },
      {
        title: 'Holistic Commissioning Solutions',
        description: 'Our holistic approach covers all aspects of commissioning from initial planning and procedure development through to system testing, performance verification, and final handover.',
        image: '/images/37.2---holistic-Commissioning-solutions.jpg',
        items: ['Commissioning planning', 'Procedure development', 'System testing', 'Performance verification'],
      },
      {
        title: 'Efficiency Through Experience',
        description: 'Our commissioning engineers bring decades of combined experience, enabling efficient execution that reduces time to first production and minimises project delays.',
        image: '/images/37.3---Efficiency-through-experience.jpg',
      },
      {
        title: 'Precision in Performance',
        description: 'We employ precision testing and measurement techniques to verify that all systems meet their design specifications and performance criteria before handover to operations.',
        image: '/images/37.4---precision-in-performance.jpeg',
      },
      {
        title: 'Environmental Responsibility',
        description: 'Environmental considerations are integrated into our commissioning processes, ensuring that all testing and start-up activities comply with environmental regulations and best practices.',
        image: '/images/37.6---environmental-responsibility.jpg',
      },
    ],
  },
  {
    slug: 'asset-maintenance',
    title: 'Asset Maintenance',
    shortTitle: 'Asset Maintenance',
    sector: 'renewables',
    description: 'CTS Offshore provides comprehensive asset maintenance services for renewable energy installations, marine vessels, and offshore structures. Our multi-disciplined teams deliver planned and reactive maintenance across all major systems.',
    bannerImage: '/images/38---main-banner---asset-maintenance.JPG',
    sections: [
      {
        title: 'Mechanical Systems Maintenance',
        description: 'Our mechanical engineers maintain all types of rotating and static equipment including pumps, compressors, gearboxes, and hydraulic systems.',
        image: '/images/38.1---mechanical-systems-maintenance.jpg',
      },
      {
        title: 'Electrical System Inspection and Service',
        description: 'We provide comprehensive electrical maintenance services including switchgear maintenance, transformer testing, cable installation, and power distribution system servicing.',
        image: '/images/38.2---electrical-system-inspection-and-service.jpg',
      },
      {
        title: 'Hydraulic System Maintenance',
        description: 'Our hydraulic specialists maintain and repair hydraulic power units, cylinders, valves, and associated pipework to ensure reliable operation of critical systems.',
        image: '/images/services_asset maintenance_Hydraulic.webp',
      },
      {
        title: 'Automation and Navigation Calibration',
        description: 'We provide specialist calibration and maintenance services for automation systems, navigation equipment, and instrumentation to ensure accurate and reliable operation.',
        image: '/images/38.4---automation-and-navigation-calibration.jpeg',
      },
      {
        title: 'Fire Safety Equipment Testing and Service',
        description: 'Our fire safety specialists perform testing, inspection, and maintenance of all fire detection and suppression systems in compliance with SOLAS and regulatory requirements.',
        image: '/images/38.5---fire-safety-equipment-testing-and-service.jpg',
      },
      {
        title: 'Life-Saving Equipment Inspection',
        description: 'We inspect and maintain all life-saving appliances including lifeboats, life rafts, immersion suits, and evacuation systems to ensure full regulatory compliance.',
        image: '/images/38.6---life-saving-equipment-inspection.jpg',
      },
      {
        title: 'Accommodation Upgrades and Repairs',
        description: 'Our teams deliver accommodation upgrades and repairs including cabin refurbishment, galley renovation, and living quarters improvement projects.',
        image: '/images/38.7---accommodation-upgrades-and-repairs.jpg',
      },
    ],
  },
  {
    slug: 'technical-access',
    title: 'Technical Access',
    shortTitle: 'Technical Access',
    sector: 'renewables',
    description: 'CTS Offshore provides innovative technical access solutions for marine and offshore environments. Our specialist access equipment and trained personnel enable safe, efficient access to difficult-to-reach areas without the need for traditional scaffolding.',
    bannerImage: '/images/39---main-banner---technical-access.jpg',
    sections: [
      {
        title: 'Variable Access Platforms',
        description: 'Our variable access platforms provide flexible, adjustable working platforms that can be configured to suit any structure or geometry, enabling safe access for inspection, maintenance, and repair work.',
        image: '/images/services_technical accesss_variable access platforms.webp',
      },
      {
        title: 'Quick Cofferdams',
        description: 'Our quick cofferdam systems provide rapid, watertight enclosures for performing repairs on vessel hulls and structures below the waterline without dry docking.',
        image: '/images/39.3---quick-cofferdams.jpg',
      },
      {
        title: 'Work Nets',
        description: 'We provide certified work net systems for safe access and fall protection in marine and offshore environments, enabling work at height to be performed safely and efficiently.',
        image: '/images/39.4---work-nets.jpg',
      },
    ],
  },
  // ─── CRUISE SERVICES ───
  {
    slug: 'turnkey-outfitting-solutions',
    title: 'Turnkey Outfitting Solutions',
    shortTitle: 'Turnkey Outfitting',
    sector: 'cruise-lines',
    description: 'CTS Offshore delivers complete turnkey outfitting solutions for the cruise industry. From concept design through to final handover, our experienced teams manage every aspect of interior and exterior outfitting projects to the highest quality standards.',
    bannerImage: '/images/40---main-banner---turnkey-outfitting-solutions.jpg',
    sections: [
      {
        title: 'In-Service Refits and Maintenance',
        description: 'We deliver in-service refit and maintenance projects during scheduled dry dock periods, minimising vessel downtime while maximising the scope of work completed.',
        image: '/images/40.1---in-service-refits-and-maintenance.jpg',
        items: ['Cabin refurbishment', 'Public area renovation', 'Restaurant and bar upgrades', 'Spa and wellness area construction'],
      },
      {
        title: 'Large-Scale Outfitting Projects',
        description: 'Our project teams manage large-scale outfitting projects for new builds and major refurbishment programmes, coordinating multiple trades and suppliers to deliver on time and within budget.',
        image: '/images/40.2---large-scale-outfitting-projects.jpg',
      },
      {
        title: 'Our Expertise Includes',
        description: 'Our outfitting expertise covers all aspects of cruise vessel interior and exterior finishing, from structural work through to final decorative elements.',
        image: '/images/40.3---our-expertise-includes.jpg',
        items: ['Interior joinery and carpentry', 'Floor and wall coverings', 'Ceiling systems', 'Bathroom pods', 'Balcony installations', 'Art and decorative finishing'],
      },
    ],
  },
]


// ──────────────────────────────────────────
// ABOUT PAGE IMAGES
// ──────────────────────────────────────────

export const ABOUT_IMAGES = {
  teamWelding: '/images/about us main banner 2.webp',
  workerPortrait: '/images/02-about--about-offshore-worker-portrait.png',
  corePillars: '/images/7-our-core-pillars.jpg',
  ourPeople2: '/images/8.2-our-people-image-2.jpg',
  ourPeople3: '/images/8.3-our-people-image-3.jpg',
  ourProducts: '/images/About_Our Products.webp',
  ourCommitment: '/images/11-our-commitment-image---about-us-page.jpg',
  ourValues: '/images/about_our values.webp',
} as const

// ──────────────────────────────────────────
// OTHER PAGE BANNERS
// ──────────────────────────────────────────

export const PAGE_BANNERS = {
  sectorsOverview: '/images/03-sectors-overview--sectors-offshore-wind-service-vessel.jpg',
  services: '/images/Our Services_all services main banner.webp',
  caseStudies: '/images/09-case-studies--case-study-platform-hookup-workers.jpg',
  media: '/images/20---media-banner---media.jpg',
  locations: '/images/locations banner (2).webp',
  contact: '/images/contact us banner.webp',
  partnerships: '/images/partnerships_banner.webp',
  gallery: '/images/lower banners_services (1).webp',
  newsroom: '/images/Newsroom_Banner.webp',

} as const

export const SECTOR_DETAIL_IMAGES = {
  oilGasWelding: '/images/04-sectors-oil-gas--oil-gas-live-production-welding.jpg',
  oilGasCloseup: '/images/04-sectors-oil-gas--oil-gas-offshore-platform-closeup.jpg',
  marineEngine: '/images/05-sectors-marine--marine-engine-maintenance-workshop.jpg',
  marineHullPainting: '/images/05-sectors-marine--marine-vessel-hull-painting.png',
  renewablesJackets: '/images/06-sectors-renewables--renewables-jacket-foundations-construction.jpg',
  renewablesSubstation: '/images/06-sectors-renewables--renewables-offshore-substation-platform.jpeg',
  cruisePainting: '/images/07-sectors-cruise-lines--cruise-vessel-painting-completed.jpg',
  cruiseRopeAccess: '/images/07-sectors-cruise-lines--cruise-vessel-rope-access-maintenance.jpg',
} as const

// ──────────────────────────────────────────
// STATS / CERTIFICATIONS / TESTIMONIALS
// ──────────────────────────────────────────

export const STATS = [
  { value: 20, suffix: '+', label: 'Years Experience' },
  { value: 9, suffix: '', label: 'Global Locations' },
  { value: 99, suffix: '+', label: 'Team Members' },
  { value: 24, suffix: '/7/365', label: 'Availability' },
] as const

export const CERTIFICATIONS = [
  { name: 'ISO 9001:2015', description: 'Quality Management' },
  { name: 'ISO 14001:2015', description: 'Environmental Management' },
  { name: 'ISO 45001:2018', description: 'Occupational Health & Safety' },
  { name: 'ISO/TS 29001', description: 'Specialist Oil & Gas Quality Management' },
  { name: 'FPAL Verified', description: 'First Point Assessment' },
] as const

export const TESTIMONIALS = [
  {
    quote: 'CTS Offshore and Marine have been instrumental in maintaining our fleet operations. Their 24/7 availability and technical expertise are unmatched in the industry.',
    author: 'Operations Director',
    company: 'Major Offshore Operator',
  },
  {
    quote: 'The riding teams provided by CTS are highly skilled and professional. They integrate seamlessly with our onboard teams and deliver exceptional results.',
    author: 'Fleet Manager',
    company: 'International Shipping Company',
  },
  {
    quote: 'From generator overhauls to steel fabrication, CTS provides a true single-source solution. Their global presence means support is always nearby.',
    author: 'Technical Superintendent',
    company: 'FPSO Operator',
  },
  {
    quote: 'CTS delivered a full turret bearing repair on our FPSO within an extremely tight window. Their ability to mobilise qualified teams at short notice saved us significant downtime costs.',
    author: 'Asset Integrity Manager',
    company: 'SBM Offshore',
  },
  {
    quote: 'We have relied on CTS for riding crew and in-situ machining services across multiple vessels. Their quality of workmanship and safety record are consistently outstanding.',
    author: 'Marine Superintendent',
    company: 'Maersk Drilling',
  },
  {
    quote: 'CTS managed the full mechanical and outfitting scope for our newbuild cruise vessel on time and within budget. A truly dependable partner for complex marine projects.',
    author: 'Project Director',
    company: 'Royal Caribbean Group',
  },
] as const

export const CLIENT_LOGOS = [
  { name: 'Shell', src: '/images/Shell.png' },
  { name: 'Maersk', src: '/images/Marsk.png' },
  { name: 'BW Offshore', src: '/images/BW Offshore.png' },
  { name: 'Chevron', src: '/images/chevron-logo.png' },
  { name: 'Anglo Eastern', src: '/images/Anglo Eastern.png' },
  { name: 'DNV', src: '/images/DNV.png' },
  { name: 'ENI', src: '/images/ENI.png' },
  { name: 'Excelerate', src: '/images/Excelerate.png' },
  { name: 'GAC', src: '/images/GAC.webp' },
  { name: 'MSC', src: '/images/MSC.png' },
  { name: 'Pronav', src: '/images/Pronav.webp' },
  { name: 'Rawabi', src: '/images/Rawabi.jpeg' },
  { name: 'Sallaum Lines', src: '/images/Sallaum lines.png' },
  { name: 'Seamec', src: '/images/Seamec.png' },
  { name: 'Seaspan', src: '/images/seaspan.png' },
  { name: 'Synergy', src: '/images/synergy-logo.webp' },
  { name: 'ADNOC', src: '/images/Adnoc.png' },
  { name: 'BSM', src: '/images/BSM.png' },
] as const

// export const TEAM_MEMBERS = [
//   {
//     name: 'Gulber Suri',
//     role: 'CEO & Founder',
//     bio: 'With over 25 years of experience in the marine and offshore industry, Gulber founded CTS Offshore and Marine with a vision to provide world-class in-situ asset integrity services globally.',
//     initials: 'GS',
//   },
//   {
//     name: 'Amit Chaudhary',
//     role: 'Technical Director',
//     bio: 'Amit brings extensive technical expertise in marine engineering and project management, overseeing all technical operations across our global offices.',
//     initials: 'AC',
//   },
//   {
//     name: 'Ryan Glenny',
//     role: 'Netherlands Office Head',
//     bio: 'Ryan leads our European operations from the Netherlands, specializing in offshore wind and North Sea operations.',
//     initials: 'RG',
//   },
// ] as const

// ──────────────────────────────────────────
// CASE STUDIES
// ──────────────────────────────────────────

export interface CaseStudy {
  slug: string
  title: string
  category: string
  sector: string
  client: string
  vessel?: string
  location: string
  date: string
  summary: string
  challenge: string
  solution: string
  result: string
  highlights: string[]
  image: string
}

// export const CASE_STUDIES: CaseStudy[] = [
//   {
//     slug: 'life-extension-project-fpso',
//     title: 'Life Extension Project on Operating FPSO',
//     category: 'Steel & Pipe',
//     sector: 'Oil & Gas',
//     client: 'BW Offshore',
//     vessel: 'FPSO Petroleo Nautipa',
//     location: 'Africa',
//     date: 'July 2015',
//     summary: 'BW Offshore chose CTS Offshore and Marine to execute a life extension project on their operating FPSO Petroleo Nautipa, delivering complex steel and pipe work in-situ while the vessel remained in production.',
//     challenge: 'The FPSO required significant life extension work including installation of a 12-tonne pedestal and king post, plus new pipeline routing — all while the vessel continued live production operations off the coast of Africa.',
//     solution: 'CTS developed an extensive work plan in coordination with the client. All designs were reviewed and an exhaustive equipment and material list was provided. CTS worked around limitations of crane reach by installing additional pad eyes and lifting gear to execute the 12T pedestal and king post installation. Extensive measurement and routing was completed for the new pipelines.',
//     result: 'The project was delivered within time, cost, and scope. All installation was completed safely to the satisfaction of Class DNV with zero incidents.',
//     highlights: ['12T pedestal & king post installed', 'New pipeline routing designed & installed', 'Zero safety incidents', 'Completed to DNV Class satisfaction'],
//     image: '/images/14.3-live-production-repairs-vertical-main-image.jpg',
//   },
//   {
//     slug: 'sps-overlay-turnkey-solution',
//     title: 'SPS Overlay Turnkey Solution — 60% Downtime Saving',
//     category: 'Steel & Pipe',
//     sector: 'Marine',
//     client: 'Cairo 3A',
//     vessel: 'Edco Star',
//     location: 'Alexandria, Egypt',
//     date: 'July 2008',
//     summary: 'CTS delivered a class-approved Sandwich Plate System (SPS) overlay solution that reinstated 3,433 m² of tank tops and bulkheads in just 31 days — saving the client three months of downtime compared to traditional methods.',
//     challenge: 'Without significant steel repairs including reinstatement to tank tops across seven cargo holds, the vessel could not secure Lloyd\'s Register class approval and begin trading again. A traditional crop and renew repair would have taken around 100 days.',
//     solution: 'CTS recommended class-approved Sandwich Plate System (SPS) be used in place of traditional crop and renew methods. As one of the only offshore and marine operators worldwide licensed to install SPS, CTS managed the entire turnkey project alongside in Alexandria.',
//     result: 'In total 3,433 m² of tank tops and bulkheads were reinstated with SPS Overlay. The whole project was completed in 31 days — saving the client three months of downtime (60% saving) compared to traditional methods.',
//     highlights: ['3,433 m² SPS overlay installed', '31 days total project duration', '60% downtime saving vs traditional repair', 'Lloyd\'s Register class approval secured'],
//     image: '/images/14.4-fabric-maintenance-vertical-main-image.jpg',
//   },
//   {
//     slug: 'client-downtime-reduced-sps-steel-replacement',
//     title: 'Client Downtime Reduced from 3 Months to 10 Days',
//     category: 'Steel & Pipe',
//     sector: 'Oil & Gas',
//     client: 'ONGC',
//     vessel: 'Samudra Prabha',
//     location: 'Bombay High, India',
//     date: '2014',
//     summary: 'CTS provided a turnkey SPS solution to refit a dive support vessel operating in the ONGC Bombay High oil field, cutting lost working days from three months down to just ten days.',
//     challenge: 'The 2121 DWT dive support vessel Samudra Prabha required repairs to the main deck above the dive platform while working to an ambitious schedule and dealing with multiple classification societies.',
//     solution: 'CTS suggested the replacement of conventional steel repairs with Sandwich Plate System (SPS) overlay on the deck, providing a faster and more durable solution than traditional methods.',
//     result: 'The CTS solution cut the vessel\'s lost working days from three months down to just ten days, allowing the platform to continue its operations as normal with minimal disruption.',
//     highlights: ['3 months reduced to 10 days', 'Multiple class society coordination', 'Turnkey project delivery', 'Minimal operational disruption'],
//     image: '/images/14.1-bespoke-manpower-solutions-vertical-main-image.jpg',
//   },
//   {
//     slug: 'innovative-sps-steel-replacement',
//     title: 'Innovative SPS Steel Replacement on FSO Vessel',
//     category: 'Steel & Pipe',
//     sector: 'Oil & Gas',
//     client: 'Chevron',
//     vessel: '186,092 DWT FSO Vessel',
//     location: 'International',
//     date: '2016',
//     summary: 'CTS was engaged by Chevron to conduct a fully project-managed turnkey steel renewal of 300 m² of deck plating using SPS on a large Floating Storage and Offloading vessel.',
//     challenge: 'Chevron required a steel renew of 300 m² of deck plating on the N/C/P/S tanks of a 186,092 DWT FSO vessel. The work needed to be completed efficiently while maintaining the highest safety and quality standards.',
//     solution: 'The chosen method was Sandwich Plate System (SPS) for its durability, resilience, and speed of installation. CTS was responsible for the entire operation including steel work, surface preparation, maintenance of the cavities, injection and sourcing of the elastomer.',
//     result: 'The 300 m² steel renewal was completed on schedule with full project management by CTS, demonstrating the effectiveness of SPS technology for large-scale FSO vessel repairs.',
//     highlights: ['300 m² deck plating renewed', 'Full turnkey project management', 'SPS technology for durability', 'Chevron quality standards met'],
//     image: '/images/14.5-decommissioning-services-vertical-main-image.jpg',
//   },
//   {
//     slug: 'engine-overhaul-restores-bulk-carrier',
//     title: 'Engine Overhaul and Customization Restores Bulk Carrier',
//     category: 'Generator Services',
//     sector: 'Marine',
//     client: 'Vessel Owners',
//     vessel: 'Bulk Carrier',
//     location: 'International',
//     date: '2018',
//     summary: 'CTS was approached to replace a damaged Yanmar 6EY22W engine onboard a bulk carrier, completing the full engine overhaul within seven days despite the limited space of the engine room.',
//     challenge: 'A damaged Yanmar 6EY22W engine needed full replacement onboard an operating bulk carrier. The limited space of the engine room created significant logistical challenges for the overhaul.',
//     solution: 'The CTS service team developed a detailed work plan to execute the engine overhaul within the confined engine room space, coordinating logistics and specialist tooling to maximise efficiency.',
//     result: 'The complete engine overhaul was finished within seven days, restoring the bulk carrier to full operational capability with minimal downtime for the vessel owners.',
//     highlights: ['Yanmar 6EY22W engine replaced', 'Completed in 7 days', 'Confined space operations', 'Minimal vessel downtime'],
//     image: '/images/15.4---Engine-Maintenance-Services---marine---sectors.jpg',
//   },
//   {
//     slug: 'hfo-tank-conversion-emissions-compliance',
//     title: 'HFO Tank Conversion for 2015 Emissions Compliance',
//     category: 'Riding Teams',
//     sector: 'Oil & Gas',
//     client: 'Shell',
//     vessel: 'MT Acavus',
//     location: 'Europe',
//     date: '2015',
//     summary: 'CTS helped Shell convert HFO tanks to dedicated gas oil tanks on the MT Acavus to comply with 2015 emissions regulations, completing all work with zero incidents.',
//     challenge: 'Due to regulatory changes in January 2015 requiring main engines and auxiliary engines to run on LSMGO at 0.01%, Shell needed HFO tanks cleaned and converted to dedicated gas oil tanks.',
//     solution: 'CTS deployed riding teams to carry out the comprehensive cleaning and conversion of all HFO tanks while the vessel continued trading, ensuring full compliance with the new emissions requirements.',
//     result: 'All HFO tanks were cleaned to the satisfaction of the onboard chief engineer and made ready for MGO use with zero incidents throughout the project.',
//     highlights: ['Emissions compliance achieved', 'Zero incidents', 'Completed while vessel trading', 'Shell client satisfaction'],
//     image: '/images/14.7-project-teams-vertical-main-image.jpg',
//   },
//   {
//     slug: '3d-scanning-bwts-zero-downtime',
//     title: '3-D Scanning & BWTS Installation with Zero Downtime',
//     category: 'Riding Teams',
//     sector: 'Marine',
//     client: 'Shipping & Maritime Group',
//     vessel: 'Container Ship',
//     location: 'Europe to US',
//     date: 'Oct–Nov 2019',
//     summary: 'CTS completed 3D scanning and installation of a Ballast Water Treatment System on a container ship while the vessel continued trading between Europe and the US, achieving zero downtime.',
//     challenge: 'A ballast water treatment system needed to be installed on an operating container ship without taking the vessel out of service, requiring all work to be completed during normal trading operations.',
//     solution: 'CTS utilised advanced 3D scanning technology to plan the BWTS installation with precision, then deployed riding teams to carry out the installation while the vessel traded between Europe and the US.',
//     result: 'The BWTS installation was completed with zero downtime for the vessel, demonstrating CTS\'s ability to deliver complex technical projects without disrupting commercial operations.',
//     highlights: ['3D scanning for precision planning', 'Zero vessel downtime', 'Installed while trading', 'BWTS regulatory compliance achieved'],
//     image: '/images/15.3---Automation-Services---marine---sectors.jpg',
//   },
//   {
//     slug: 'boiler-survey-lng-fleet',
//     title: 'Boiler Survey for LNG Fleet — 4 Boilers in 4 Days',
//     category: 'Inspections & Surveys',
//     sector: 'Oil & Gas',
//     client: 'Oil Major',
//     vessel: 'LNG Fleet',
//     location: 'Fujairah, UAE',
//     date: 'May 2016',
//     summary: 'CTS teams completed comprehensive boiler surveys on an LNG fleet in Fujairah, finishing all four boilers in just four days with zero downtime and all surveys witnessed by CLASS.',
//     challenge: 'A major oil company required comprehensive boiler surveys across their LNG fleet in Fujairah with minimal disruption to vessel operations and strict timeline requirements.',
//     solution: 'CTS deployed experienced boiler survey teams who worked efficiently to complete all four boiler surveys within the tight schedule, coordinating closely with CLASS surveyors.',
//     result: 'All four boilers were surveyed in just 4 days. All surveys were witnessed by CLASS with zero downtime to the fleet operations.',
//     highlights: ['4 boilers surveyed in 4 days', 'All surveys CLASS witnessed', 'Zero fleet downtime', 'Oil Major client'],
//     image: '/images/15.8---Comprehensive-Inspections-and-Survey---marine---sectors.jpeg',
//   },
//   {
//     slug: 'inert-gas-system-bitzer-compressor',
//     title: 'Inert Gas System Upgraded with BITZER Compressor',
//     category: 'Electrical & Instrumentation',
//     sector: 'Marine',
//     client: 'Leading Oil Major',
//     vessel: 'LNG Tanker',
//     location: 'Cardiff, Qatar & Korea',
//     date: 'Oct–Dec 2018',
//     summary: 'CTS upgraded the PLC and inert gas system with a BITZER compressor on an LNG tanker, working across three locations to restore the system to fully functioning state.',
//     challenge: 'An LNG tanker\'s inert gas system required a complete PLC upgrade and compressor replacement. Work needed to be coordinated across three international locations — Cardiff, Qatar, and Korea.',
//     solution: 'CTS managed the multi-location project, coordinating engineering teams across Cardiff, Qatar, and Korea to upgrade the PLC system and install the BITZER compressor during planned port calls.',
//     result: 'CTS successfully upgraded the PLC and returned the inert gas system to a fully functioning state, coordinating seamlessly across three countries over a three-month period.',
//     highlights: ['PLC system upgraded', 'BITZER compressor installed', '3 countries coordinated', 'System fully restored'],
//     image: '/images/15.2-Decabonisation---marine---sectors.jpg',
//   },
//   {
//     slug: '3d-liner-scan-inspection',
//     title: 'Innovative 3D Liner Scan Inspection — 20 Minutes Per Liner',
//     category: 'Inspections & Surveys',
//     sector: 'Marine',
//     client: 'Leading Oil Major',
//     vessel: 'Oil Tanker',
//     location: 'Singapore',
//     date: 'November 2018',
//     summary: 'CTS performed an innovative 3D liner scan inspection on a MAN 7G80ME main engine that requires no engine immobilisation and only takes 20 minutes per liner, leading to contracts for further vessels.',
//     challenge: 'A leading oil major needed engine liner inspections on their oil tanker but could not afford the downtime typically associated with conventional inspection methods requiring engine immobilisation.',
//     solution: 'CTS deployed its innovative 3D liner scanning technology which analyses corrosion, maximum diameter, wear rates, and ovality — all without engine immobilisation or removal of engine mountings.',
//     result: 'The inspection was completed in just 20 minutes per liner with no engine downtime. Due to over-delivering and surpassing expectations, CTS was contracted for work on further vessels in the fleet.',
//     highlights: ['20 minutes per liner', 'No engine immobilisation required', 'MAN 7G80ME main engine', 'Contracted for further vessels'],
//     image: '/images/15.6---Shipyard-Support---marine---sectors.jpg',
//   },
//   {
//     slug: 'forepeak-water-ballast-tank-steel-work',
//     title: 'Crucial Forepeak and Water Ballast Tank Steel Work',
//     category: 'Steel & Pipe',
//     sector: 'Marine',
//     client: 'Long-Term Client',
//     vessel: 'Cargo Vessel',
//     location: 'International',
//     date: '2017',
//     summary: 'CTS was approached by a long-term client to examine and repair the bottom area of a vessel\'s forepeak tank and number one water ballast tank, completing the full turnaround in 35 days.',
//     challenge: 'The bottom areas of the vessel\'s number one water ballast tank and forepeak tank required examination and repair within a strict 35-day turnaround window.',
//     solution: 'CTS deployed experienced steel work teams to assess and execute the necessary repairs, managing the complex logistics of working in confined tank spaces while maintaining quality and safety standards.',
//     result: 'The complete examination and repair of both tanks was delivered within the 35-day turnaround target, maintaining the client relationship and vessel\'s operational schedule.',
//     highlights: ['Forepeak & ballast tank repairs', '35-day complete turnaround', 'Confined space operations', 'Long-term client relationship'],
//     image: '/images/14.6-cold-work-repair-solutioins-vertical-main-image.jpg',
//   },
//   {
//     slug: 'borwin-gamma-hook-up',
//     title: 'BorWin Gamma Safely Hooked-Up in North Sea',
//     category: 'Riding Teams',
//     sector: 'Renewables',
//     client: 'Petrofac',
//     vessel: 'BorWin Gamma Converter Platform',
//     location: 'North Sea, Germany',
//     date: '2018–2019',
//     summary: 'CTS provided riding teams for the hook-up of the BorWin Gamma offshore converter platform, 130km off the German coast, persevering through extreme North Sea weather conditions.',
//     challenge: 'The BorWin Gamma topside needed to be hooked up to its jacket 130km off the shore of Germany in the North Sea. The project faced extreme weather from the "Beast from the East" storm, causing delays and demanding exceptional safety measures.',
//     solution: 'Petrofac used CTS\'s services to augment their construction division on the BorWin Gamma project. CTS teams remained steadfast through the harsh weather, accommodating extra safety procedures while maintaining progress.',
//     result: 'The CTS team was praised as "proficient, agile and effective" by Petrofac, successfully completing the hook-up despite extreme weather challenges. All safety protocols were maintained throughout.',
//     highlights: ['130km offshore North Sea', 'Extreme weather conditions managed', 'Petrofac partnership', 'Praised as proficient & agile'],
//     image: '/images/17.1---wind-turbine-maintenance---renewables---sectors.jpg',
//   },
//   {
//     slug: 'funnel-modifications-harsh-weather',
//     title: 'In-Situ Funnel Modifications in Harsh Weather',
//     category: 'Riding Teams',
//     sector: 'Marine',
//     client: 'Leading Ship Management Company',
//     vessel: 'Container Ship',
//     location: 'International',
//     date: '2019',
//     summary: 'CTS modified a container ship\'s main engine and scrubber uptakes to ensure compliance with commercial air draft requirements, completing the work in-situ despite challenging weather conditions.',
//     challenge: 'A leading ship management company needed their container ship\'s main engine and scrubber uptakes modified to ensure compliance with commercial air draft requirements. The work needed to be completed in-situ in harsh weather.',
//     solution: 'CTS deployed specialist riding teams to perform the funnel and uptake modifications while the vessel continued operations, implementing robust safety measures to manage the weather conditions.',
//     result: 'All funnel modifications were completed in-situ to full compliance with commercial air draft requirements, despite the challenging weather conditions encountered during the project.',
//     highlights: ['In-situ modifications', 'Air draft compliance achieved', 'Harsh weather operations', 'Scrubber uptake modifications'],
//     image: '/images/14.8-HVAC-vertical-main-image.jpg',
//   },
// ]

// ──────────────────────────────────────────
// NAVIGATION
// ──────────────────────────────────────────

export const NAV_ITEMS = [
  { label: 'About', href: '/about' },
  {
    label: 'Sectors',
    href: '/sectors',
    children: SECTORS.map((s) => ({ label: s.shortTitle, href: `/sectors/${s.slug}` })),
  },
  {
    label: 'Services',
    href: '/services',
    children: [
      ...SECTORS.flatMap((sector) =>
        sector.services.slice(0, 2).map((s) => ({ label: s.shortTitle, href: `/services/${s.slug}` }))
      ),
      // { label: 'View All Services', href: '/services' },
    ],
  },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'News & Media', href: '/news-media' },
  { label: 'Locations', href: '/locations' },
  { label: 'Contact', href: '/contact' },
] as const

// ──────────────────────────────────────────
// NEWS ITEMS
// ──────────────────────────────────────────

export interface NewsItem {
  slug: string
  date: string
  title: string
  category: string
  summary: string
  image: string
  body: string[]
}

// export const NEWS_ITEMS: NewsItem[] = [
//   {
//     slug: 'cts-uae-achieves-icv-certification',
//     date: '2025-06-15',
//     title: 'CTS UAE Achieves ICV Certification',
//     category: 'Company News',
//     image: '/images/icv certified 2 website.webp',
//     summary: 'CTS achieved In-Country Value (ICV) certification in the UAE ..',
//     body: [
//       'CTS achieved In-Country Value (ICV) certification in the UAE, reinforcing its contribution to local',
//       'economic development through employment, procurement, and in-country operations. The certification',
//       'strengthens CTS’s alignment with national industrial and energy priorities',
//       'This milestone enhances CTS’s position within the UAE offshore and marine sector, improving its',
//       'competitiveness with clients prioritizing ICV-compliant partners.',
//     ],
//   },
//   {
//     slug: 'cts-becomes-irata-certified',
//     date: '2025-02-20',
//     title: 'CTS Becomes IRATA Certified',
//     category: 'Project Update',
//     image: '/images/irata Web copy.webp',
//     summary: 'CTS obtained IRATA Certification, strengthening its offshore rope access capability and ..',
//     body: [
//       'CTS obtained IRATA certification, strengthening its offshore rope access capability and ensuring compliance',
//       'with international safety standards for high-risk marine and industrial environments.',
//       'With certified rope access teams, CTS is able to deliver safer and more efficient inspection, maintenance, and',
//       'offshore support services across vessels and structures.',
//     ],
//   },
//   {
//     slug: 'cts-expands-european-presence-germany-office',
//     date: '2025-03-05',
//     title: 'CTS Expands European Presence With New Germany Office',
//     category: 'Company News',
//     image: '/images/cts in germany copy.webp',
//     summary: 'CTS expanded its European footprint with a new office in Germany, supporting its ..',
//     body: [
//       'CTS expanded its European footprint with a new office in Germany, supporting its long-term strategy to',
//       'strengthen operations across key offshore and maritime hubs in Europe.',
//       'The new base improves regional responsiveness, project coordination, and client engagement, reinforcing',
//       'CTS’s global service network.',
//     ],
//   },
//   {
//     slug: 'gf-thermoplastic-insitu-ballast-retrofit',
//     date: '2025-11-15',
//     title: 'CTS Executes One of the First GF+ Thermoplastic In-Situ Ballast Retrofits',
//     category: 'Industry Insight',
//     image: '/images/CS_GF Ballastreplacement_SMpost2 copy.webp',
//     summary: 'CTS executed one of the first GF+ thermoplastic in-situ ballast system retrofits onboard ..',
//     body: [
//       'CTS executed one of the first GF+ thermoplastic in-situ ballast system retrofits onboard a container vessel in',
//       'Hong Kong, completing installation works within confined duct tunnel spaces while the vessel remained fully operational.',
//       'The project, delivered in collaboration with GF Piping Systems, introduced a corrosion-resistant and',
//       'lightweight piping solution, completed under full Class compliance with DNV-approved testing and QA documentation',
//     ],
//   },
//   {
//     slug: 'strengthening-technical-leadership-rotterdam',
//     date: '2025-12-01',
//     title: 'Strengthening Technical Leadership at Rotterdam Branch',
//     category: 'Project Update',
//     image: '/images/web news new director APereira.webp',
//     summary: 'CTS advanced Adilson Jose Pereira Junior from Project Engineer to Technical Manager at the ...',
//     body: [
//       'CTS is collaborating with INFENER on the development of a Green Energy Hub in Crete near Kastelli',
//       'Airport, integrating solar generation, battery storage, and hydrogen production into a unified energy system.',
//       'The project supports applications across port electrification, shore power, and alternative fuels including',
//       'hydrogen, e-methanol, and e-SAF, aligning with evolving regulatory frameworks such as ETS and FuelEU',
//       'Maritime. Backed by regional authorities, the initiative positions Crete as a strategic hub for integrated energy infrastructure in Europe.',
//     ],
//   },
//   {
//     slug: 'cts-collaborates-crete-green-energy-hub',
//     date: '2026-04-15',
//     title: 'CTS Collaborates on Crete Green Energy Hub for Maritime Decarbonisation',
//     category: 'Project Update',
//     image: '/images/cts and inferner copy.webp',
//     summary: 'CTS is collaborating with INFENER on the development of a Green Energy Hub in Crete, integrating ....',
//     body: [
//       'CTS Offshore and Marine is proud to announce a collaboration with INFENER on the development of a Green Energy Hub near Kastelli Airport in Crete — a landmark project that aligns with our commitment to supporting the maritime energy transition.',
//       'The hub will integrate solar generation, battery energy storage, and green hydrogen production capabilities, creating a multi-vector clean energy facility designed to serve the shipping and maritime sector operating across the Eastern Mediterranean.',
//       'The decarbonisation of shipping is one of the defining challenges of our industry. Green hydrogen and shore power infrastructure are essential enablers — and projects like this Crete hub represent the kind of long-term investment needed to make clean maritime fuel commercially viable at scale.',
//       'CTS\'s involvement brings our expertise in offshore and marine project execution, supply chain management, and technical delivery to the consortium, complementing INFENER\'s energy infrastructure development capability.',
//       'We are committed to playing an active role in the maritime energy transition, and this collaboration is a clear expression of that commitment. We look forward to sharing further updates as the project progresses.',
//     ],
//   },
// ]
