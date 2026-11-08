// Authentic Eastetic Product Catalog
// Generated from European laboratory packaging and authentic media assets

export type ProductCategoryType =
  | 'Biostimulators'
  | 'Cosmetics'
  | 'Growth Factors'
  | 'Mesotherapy'
  | 'Fillers'
  | 'Botulinum'
  | 'Peeling';

export interface ProductDetail {
  label: string;
  value: string;
}

export interface ProductSpecifications {
  origin: string;
  grade: string;
  sterilization: string;
  endotoxinLevel: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategoryType;
  subcategory: string;
  format: string;
  primaryImage?: string;
  images: string[];
  shortDescription: string;
  description: string;
  technology?: string;
  formulation?: string;
  ingredients?: string;
  application?: string;
  origin?: string;
  grade?: string;
  sterilization?: string;
  endotoxinLevel?: string;
  specifications?: ProductSpecifications;
  details?: ProductDetail[];
  price?: number;
  priceLabel?: string; // Always 'Request Price' when unpriced
  flaggedForReview?: boolean;
  reviewReason?: string;
  featured?: boolean;
  relatedSlugs?: string[];
  placeholderNotice?: string;
  altText?: string;
}

export interface ProductCategory {
  id: string;
  name: ProductCategoryType;
  code: string;
  headline: string;
  description: string;
  scientificFocus?: string;
  activeMolecules?: string[];
  indications?: string[];
  subcategories: string[];
  image: string;
  productCount: number;
  specifications?: ProductSpecifications;
  products?: {
    name: string;
    tagline: string;
    concentration?: string;
    format: string;
    needleGauge?: string;
    targetTissue?: string;
  }[];
}

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: 'biostimulators',
    name: 'Biostimulators',
    code: 'CAT-01 // BIOSTIMULATORS',
    headline: 'High-Density Regenerative Biomatrices & Dermal Polynucleotides',
    description:
      'Engineered injectable biostimulators presented in sterile 1 ML, 2 ML, and 3 ML formats for clinical dermal bio-remodelling, collagen neosynthesis, and extracellular matrix reconstruction.',
    scientificFocus: 'Fibroblast Activation & Extracellular Matrix Neosynthesis',
    activeMolecules: [
      'Polydeoxyribonucleotide (PDRN)',
      'High-Density Hyaluronic Acid Scaffold',
      'Exosome Signaling Complexes',
    ],
    indications: [
      'Dermal bio-remodelling & elastosis repair',
      'Extracellular matrix restoration',
      'Peri-orbital & facial volume rejuvenation',
      'Intimate & delicate zone revitalization',
    ],
    specifications: {
      origin: 'Barcelona, Spain',
      grade: 'Medical Aesthetic Injectable',
      sterilization: 'Ph. Eur. Moist Heat Sterilization',
      endotoxinLevel: '< 0.02 EU/ml',
    },
    subcategories: ['1 ML', '2 ML', '3 ML'],
    image: '/images/products/exo-radiance/main.png',
    productCount: 11,
    products: [
      {
        name: 'Exo-Radiance',
        tagline: '1 ML Dermal Radiance & Luminosity Biomatrix',
        format: 'Pre-filled Syringe 1.0 ml',
        targetTissue: 'Superficial to Mid Dermis',
      },
      {
        name: 'X Spot',
        tagline: '2 ML Anti-Oxidant Exosome Biomatrix',
        format: 'Pre-filled Syringe 2.0 ml',
        targetTissue: 'Mid Dermis',
      },
      {
        name: 'Lumex',
        tagline: '3 ML High-Volume Exosome Biomatrix',
        format: 'Pre-filled Syringe 3.0 ml',
        targetTissue: 'Deep Dermis',
      },
      {
        name: 'Rivajet',
        tagline: '2 ML Dermal Hydro-Booster PDRN Solution',
        format: 'Pre-filled Syringe 2.0 ml',
        targetTissue: 'Full Dermal Layer',
      },
    ],
  },
  {
    id: 'cosmetics',
    name: 'Cosmetics',
    code: 'CAT-02 // COSMETICS',
    headline: 'Advanced Professional Skincare & Post-Procedure Formulations',
    description:
      'Dermaceutical topical treatments across specialized clinical lines, engineered to maintain epidermal barrier homeostasis and amplify clinical results.',
    scientificFocus: 'Stratum Corneum Repair & Clinical Pigment Suppression',
    activeMolecules: [
      'Encapsulated Retinoids & Peptides',
      'Niacinamide & Tranexamic Acid Derivatives',
      'Ferulic Acid & Stabilized Ascorbic Acid',
    ],
    indications: [
      'Clinical post-procedure recovery support',
      'Acneic and blemish-prone stratum corneum care',
      'Advanced photo-aging and fine line reduction',
      'Melanin hyper-synthesis stabilization',
    ],
    specifications: {
      origin: 'Barcelona, Spain',
      grade: 'Professional Dermaceutical',
      sterilization: 'Cosmetic GMP ISO 22716 Standard',
      endotoxinLevel: 'N/A (Topical formulation)',
    },
    subcategories: ['Cosmetics'],
    image: '/images/products/ferulic-acid-serum/main.png',
    productCount: 49,
    products: [
      {
        name: 'Rosa',
        tagline: 'Active Biomimetic Peptide Radiance Formula',
        format: 'Dropper Bottle 30 ml',
        targetTissue: 'Stratum Corneum & Epidermis',
      },
      {
        name: 'Ferulic Acid Serum',
        tagline: 'Synergistic Antioxidant Protection',
        format: 'Dropper Bottle 30 ml',
        targetTissue: 'Epidermal Matrix',
      },
      {
        name: 'Vitamin C 10%',
        tagline: 'Concentrated Ascorbic Acid Complex',
        format: 'Serum Dropper 30 ml',
        targetTissue: 'Epidermal-Dermal Junction',
      },
    ],
  },
  {
    id: 'growth-factors',
    name: 'Growth Factors',
    code: 'CAT-03 // GROWTH FACTORS',
    headline: 'Recombinant Growth Factors & Biomimetic Signaling Peptides',
    description:
      'High-purity cellular signaling complexes formulated for targeted cellular rejuvenation, tissue repair, adipolytic contouring, and follicular revitalization.',
    scientificFocus: 'Receptor-Mediated Cell Signaling & Follicular Cascades',
    activeMolecules: [
      'Recombinant Human Oligopeptides (rh-Oligopeptide)',
      'Basic Fibroblast Growth Factor (bFGF)',
      'Vascular Endothelial Biomimetic Peptides',
    ],
    indications: [
      'Cellular tissue rejuvenation & recovery',
      'Alopecia & follicular revitalization',
      'Localized adipolytic contouring protocols',
      'Post-laser & microneedling bio-regeneration',
    ],
    specifications: {
      origin: 'Barcelona, Spain',
      grade: 'Biotechnology Medical Grade',
      sterilization: 'Sterile Aseptic Filtration (0.22 µm)',
      endotoxinLevel: '< 0.02 EU/ml',
    },
    subcategories: ['Growth Factors'],
    image: '/images/products/gf-bright/main.png',
    productCount: 6,
    products: [
      {
        name: 'GF-BRIGHT',
        tagline: 'Chromophore Balancing Growth Factor System',
        format: 'Sterile Vial & Lyophilized Complex',
        targetTissue: 'Epidermal-Dermal Junction',
      },
      {
        name: 'GF-REJUVE',
        tagline: 'Cellular Longevity & Fibroblast Proliferation',
        format: 'Sterile Vial & Lyophilized Complex',
        targetTissue: 'Full Dermal Thickness',
      },
      {
        name: 'GF-HAIR',
        tagline: 'Follicular Stem Activation & Anagen Stimulation',
        format: 'Sterile Vial & Lyophilized Complex',
        targetTissue: 'Scalp & Follicular Bulb',
      },
    ],
  },
  {
    id: 'mesotherapy',
    name: 'Mesotherapy',
    code: 'CAT-04 // MESOTHERAPY',
    headline: 'Sterile Mesotherapy Solutions & Active Molecular Vials',
    description:
      'Targeted aesthetic solutions and multi-component cocktails in sterile pharmaceutical vials for certified clinic administration and specialized protocol delivery.',
    scientificFocus: 'Targeted Dermal Infusion & Cellular Osmoprotection',
    activeMolecules: [
      'Non-crosslinked Sodium Hyaluronate',
      'Succinic Acid Bio-Stimulating Complexes',
      'Pharmaceutical-Grade Amino Acid Pools',
    ],
    indications: [
      'Intense dermal biorevitalization',
      'Photo-damaged and hyperpigmented tissue',
      'Submental & localized adiposity reduction',
      'Pre- and post-operative cutaneous conditioning',
    ],
    specifications: {
      origin: 'Barcelona, Spain',
      grade: 'Clinical Mesotherapy Grade',
      sterilization: 'Sterile Aseptic Filtration',
      endotoxinLevel: '< 0.02 EU/ml',
    },
    subcategories: ['Mesotherapy Solutions'],
    image: '/images/products/acnova/main.png',
    productCount: 20,
    products: [
      {
        name: 'Acnova',
        tagline: 'Pumpkin Seed Oil Extract & Retinol Skin Clarity',
        format: '10 Vials x 5 ml',
        targetTissue: 'Dermal-Sebaceous Unit',
      },
      {
        name: 'HA-Repair',
        tagline: 'High-Purity Biorevitalizing Hyaluronic Solution',
        format: 'Sterile Serum Vial',
        targetTissue: 'Superficial Dermis',
      },
      {
        name: 'HA-Succinic Acid',
        tagline: 'Mitochondrial Energy & Neocollagenesis Complex',
        format: 'Sterile Serum Vial',
        targetTissue: 'Mid-to-Deep Dermis',
      },
    ],
  },
  {
    id: 'fillers',
    name: 'Fillers',
    code: 'CAT-05 // FILLERS',
    headline: 'High-Density Dermal Fillers & Volumizing Hyaluronic Implants',
    description:
      'Advanced monophasic and biphasic cross-linked hyaluronic matrices currently undergoing European clinical certification for precision anatomical sculpting and tissue augmentation.',
    scientificFocus: 'Cross-Linked BDDE Hydrogel Rheology & Cohesivity',
    activeMolecules: [
      'Cross-Linked Sodium Hyaluronate',
      'High G-Prime Monophasic Matrix',
      'Sub-Threshold BDDE (< 0.2 ppm)',
    ],
    indications: [
      'Deep volume augmentation & malar contouring',
      'Nasolabial & deep fold correction',
      'Jawline definition & structural support',
    ],
    specifications: {
      origin: 'Barcelona, Spain',
      grade: 'Class III Injectable Medical Device',
      sterilization: 'Terminal Steam Autoclave',
      endotoxinLevel: '< 0.02 EU/ml',
    },
    subcategories: [],
    image: '/images/products/exo-radiance/main.png',
    productCount: 0,
    products: [],
  },
  {
    id: 'botulinum',
    name: 'Botulinum',
    code: 'CAT-06 // BOTULINUM',
    headline: 'Targeted Neuromodulator Formulations & High-Purity Botulinum',
    description:
      'Pharmaceutical purified neurotoxin solutions currently undergoing European regulatory compliance and batch release validation.',
    scientificFocus: 'Presynaptic Neurotransmission Inhibition',
    activeMolecules: [
      'Purified Botulinum Toxin Complex (150 kDa)',
      'Human Serum Albumin Free Excipients',
      'High Specific Biological Activity',
    ],
    indications: [
      'Dynamic rhytid smoothing (glabellar, peri-orbital)',
      'Targeted neuromuscular aesthetic modulation',
    ],
    specifications: {
      origin: 'Barcelona, Spain',
      grade: 'Pharmaceutical Biological Grade',
      sterilization: 'Aseptic Sterile Lyophilization',
      endotoxinLevel: '< 0.01 EU/vial',
    },
    subcategories: ['Lift Booster'],
    image: '/images/products/btx-lift-booster/main.jpeg',
    productCount: 1,
    products: [
      {
        name: 'BTX Lift Booster',
        tagline: 'Smoothing Complex for Expression Lines',
        format: 'Package 4 Syringes x 1 ml',
        targetTissue: 'Targeted Facial Expression Lines',
      },
    ],
  },
  {
    id: 'peeling',
    name: 'Peeling',
    code: 'CAT-07 // CHEMICAL PEELING',
    headline: 'Medical Chemexfoliation Systems & Controlled Depth Solutions',
    description:
      'Advanced dermatological chemical peels formulated with precision pH buffers for clinical epidermal-dermal resurfacing and tone homogenization.',
    scientificFocus: 'Controlled Chemo-Exfoliation & Keratolytic Renewal',
    activeMolecules: [
      'Trichloroacetic Acid (TCA) Buffered Complex',
      'Mandelic & Glycolic Alpha-Hydroxy Matrices',
      'Salicylic Beta-Hydroxy Acid Complex',
    ],
    indications: [
      'Epidermal resurfacing & skin texture homogenization',
      'Solar lentigines & post-inflammatory hyperpigmentation',
      'Seborrheic control & stratum corneum thinning',
    ],
    specifications: {
      origin: 'Barcelona, Spain',
      grade: 'Medical Chemical Exfoliant',
      sterilization: 'Ph. Eur. Compounding Standard',
      endotoxinLevel: 'N/A (Topical Peeling Formulation)',
    },
    subcategories: ['Chemical Peels'],
    image: '/images/products/peelora/main.jpg',
    productCount: 1,
    products: [
      {
        name: 'Peelora',
        tagline: 'Treat Signs of Aging Chemical Peel Solution',
        format: 'Package 10 Vials x 5 ml',
        targetTissue: 'Epidermal-Dermal Matrix',
      },
    ],
  },
];

export const PRODUCTS: Product[] = [
  {
    "id": "biostimulator-1-ml-exo-radiance",
    "slug": "biostimulator-1-ml-exo-radiance",
    "name": "Exo-Radiance",
    "category": "Biostimulators",
    "subcategory": "1 ML",
    "format": "Pre-filled Syringe 1.0 ml",
    "images": [
      "/images/products/exo-radiance/main.png",
      "/images/products/exo-radiance/detail-01.png"
    ],
    "shortDescription": "Advanced European biostimulator formulated in 1 ML sterile presentation for regenerative aesthetic protocols.",
    "description": "Exo-Radiance is an engineered injectable biomatrix developed in Spain under European medical device standards. Presented in a sterile 1 ML format designed for precise clinical placement.",
    "technology": "Bio-cellular scaffold stimulation and extracellular matrix tissue support.",
    "application": "Targeted aesthetic tissue bio-revitalization. Strictly for licensed healthcare professionals.",
    "origin": "Barcelona, Spain",
    "grade": "Medical Aesthetic Injectable",
    "sterilization": "Sterile (Ph. Eur.)",
    "endotoxinLevel": "< 0.02 EU/ml",
    "flaggedForReview": false,
    "specifications": {
      "origin": "Barcelona, Spain",
      "grade": "Medical Aesthetic Injectable",
      "sterilization": "Sterile (Ph. Eur.)",
      "endotoxinLevel": "< 0.02 EU/ml"
    },
    "formulation": "Exo-Radiance is an engineered injectable biomatrix developed in Spain under European medical device standards. Presented in a sterile 1 ML format designed for precise clinical placement.",
    "ingredients": "High-Density Hyaluronic Acid Scaffold, Exosome Signaling Complexes",
    "primaryImage": "/images/products/exo-radiance/main.png",
    "altText": "Exo-Radiance - Biostimulators 1 ML clinical aesthetic formulation"
  },
  {
    "id": "biostimulator-1-ml-exo-repair",
    "slug": "biostimulator-1-ml-exo-repair",
    "name": "Exo-Repair",
    "category": "Biostimulators",
    "subcategory": "1 ML",
    "format": "Pre-filled Syringe 1.0 ml",
    "images": [
      "/images/products/exo-repair/main.png",
      "/images/products/exo-repair/detail-01.png"
    ],
    "shortDescription": "Advanced European biostimulator formulated in 1 ML sterile presentation for regenerative aesthetic protocols.",
    "description": "Exo-Repair is an engineered injectable biomatrix developed in Spain under European medical device standards. Presented in a sterile 1 ML format designed for precise clinical placement.",
    "technology": "Bio-cellular scaffold stimulation and extracellular matrix tissue support.",
    "application": "Targeted aesthetic tissue bio-revitalization. Strictly for licensed healthcare professionals.",
    "origin": "Barcelona, Spain",
    "grade": "Medical Aesthetic Injectable",
    "sterilization": "Sterile (Ph. Eur.)",
    "endotoxinLevel": "< 0.02 EU/ml",
    "flaggedForReview": false,
    "specifications": {
      "origin": "Barcelona, Spain",
      "grade": "Medical Aesthetic Injectable",
      "sterilization": "Sterile (Ph. Eur.)",
      "endotoxinLevel": "< 0.02 EU/ml"
    },
    "formulation": "Exo-Repair is an engineered injectable biomatrix developed in Spain under European medical device standards. Presented in a sterile 1 ML format designed for precise clinical placement.",
    "ingredients": "High-Density Hyaluronic Acid Scaffold, Tissue Recovery Complex",
    "primaryImage": "/images/products/exo-repair/main.png",
    "altText": "Exo-Repair - Biostimulators 1 ML clinical aesthetic formulation"
  },
  {
    "id": "biostimulator-1-ml-exo-wrinkles",
    "slug": "biostimulator-1-ml-exo-wrinkles",
    "name": "Exo-Wrinkles",
    "category": "Biostimulators",
    "subcategory": "1 ML",
    "format": "Pre-filled Syringe 1.0 ml",
    "images": [
      "/images/products/exo-wrinkles/main.png",
      "/images/products/exo-wrinkles/detail-01.png"
    ],
    "shortDescription": "Advanced European biostimulator formulated in 1 ML sterile presentation for regenerative aesthetic protocols.",
    "description": "Exo-Wrinkles is an engineered injectable biomatrix developed in Spain under European medical device standards. Presented in a sterile 1 ML format designed for precise clinical placement.",
    "technology": "Bio-cellular scaffold stimulation and extracellular matrix tissue support.",
    "application": "Targeted aesthetic tissue bio-revitalization. Strictly for licensed healthcare professionals.",
    "origin": "Barcelona, Spain",
    "grade": "Medical Aesthetic Injectable",
    "sterilization": "Sterile (Ph. Eur.)",
    "endotoxinLevel": "< 0.02 EU/ml",
    "flaggedForReview": false,
    "specifications": {
      "origin": "Barcelona, Spain",
      "grade": "Medical Aesthetic Injectable",
      "sterilization": "Sterile (Ph. Eur.)",
      "endotoxinLevel": "< 0.02 EU/ml"
    },
    "formulation": "Exo-Wrinkles is an engineered injectable biomatrix developed in Spain under European medical device standards. Presented in a sterile 1 ML format designed for precise clinical placement.",
    "ingredients": "High-Density Hyaluronic Acid Scaffold, Rhytid Target Formulation",
    "primaryImage": "/images/products/exo-wrinkles/main.png",
    "altText": "Exo-Wrinkles - Biostimulators 1 ML clinical aesthetic formulation"
  },
  {
    "id": "biostimulator-1-ml-lumi-rose-intimate",
    "slug": "biostimulator-1-ml-lumi-rose-intimate",
    "name": "Lumi Rose Intimate",
    "category": "Biostimulators",
    "subcategory": "1 ML",
    "format": "Pre-filled Syringe 1.0 ml",
    "images": [
      "/images/products/lumi-rose-intimate/main.png",
      "/images/products/lumi-rose-intimate/detail-01.png"
    ],
    "shortDescription": "Advanced European biostimulator formulated in 1 ML sterile presentation for regenerative aesthetic protocols.",
    "description": "Lumi Rose Intimate is an engineered injectable biomatrix developed in Spain under European medical device standards. Presented in a sterile 1 ML format designed for precise clinical placement.",
    "technology": "Bio-cellular scaffold stimulation and extracellular matrix tissue support.",
    "application": "Targeted aesthetic tissue bio-revitalization. Strictly for licensed healthcare professionals.",
    "origin": "Barcelona, Spain",
    "grade": "Medical Aesthetic Injectable",
    "sterilization": "Sterile (Ph. Eur.)",
    "endotoxinLevel": "< 0.02 EU/ml",
    "flaggedForReview": false,
    "specifications": {
      "origin": "Barcelona, Spain",
      "grade": "Medical Aesthetic Injectable",
      "sterilization": "Sterile (Ph. Eur.)",
      "endotoxinLevel": "< 0.02 EU/ml"
    },
    "formulation": "Lumi Rose Intimate is an engineered injectable biomatrix developed in Spain under European medical device standards. Presented in a sterile 1 ML format designed for precise clinical placement.",
    "ingredients": "Sodium Hyaluronate Biomatrix, Polynucleotides (1.0 ml)",
    "primaryImage": "/images/products/lumi-rose-intimate/main.png",
    "altText": "Lumi Rose Intimate - Biostimulators 1 ML clinical aesthetic formulation"
  },
  {
    "id": "biostimulator-1-ml-lumi-rose-lips",
    "slug": "biostimulator-1-ml-lumi-rose-lips",
    "name": "Lumi Rose Lips",
    "category": "Biostimulators",
    "subcategory": "1 ML",
    "format": "Pre-filled Syringe 1.0 ml",
    "images": [
      "/images/products/lumi-rose-lips/main.png",
      "/images/products/lumi-rose-lips/detail-01.png"
    ],
    "shortDescription": "Advanced European biostimulator formulated in 1 ML sterile presentation for regenerative aesthetic protocols.",
    "description": "Lumi Rose Lips is an engineered injectable biomatrix developed in Spain under European medical device standards. Presented in a sterile 1 ML format designed for precise clinical placement.",
    "technology": "Bio-cellular scaffold stimulation and extracellular matrix tissue support.",
    "application": "Targeted aesthetic tissue bio-revitalization. Strictly for licensed healthcare professionals.",
    "origin": "Barcelona, Spain",
    "grade": "Medical Aesthetic Injectable",
    "sterilization": "Sterile (Ph. Eur.)",
    "endotoxinLevel": "< 0.02 EU/ml",
    "flaggedForReview": false,
    "specifications": {
      "origin": "Barcelona, Spain",
      "grade": "Medical Aesthetic Injectable",
      "sterilization": "Sterile (Ph. Eur.)",
      "endotoxinLevel": "< 0.02 EU/ml"
    },
    "formulation": "Lumi Rose Lips is an engineered injectable biomatrix developed in Spain under European medical device standards. Presented in a sterile 1 ML format designed for precise clinical placement.",
    "ingredients": "Biomimetic Peptides, Dermal Conditioning Lipids",
    "primaryImage": "/images/products/lumi-rose-lips/main.png",
    "altText": "Lumi Rose Lips - Biostimulators 1 ML clinical aesthetic formulation"
  },
  {
    "id": "biostimulator-2-3-ml-exo-cell",
    "slug": "biostimulator-2-3-ml-exo-cell",
    "name": "Exo-Cell",
    "category": "Biostimulators",
    "subcategory": "2 ML",
    "format": "Pre-filled Syringe 2.0 ml",
    "images": [
      "/images/products/exo-cell/main.png",
      "/images/products/exo-cell/detail-01.png"
    ],
    "shortDescription": "Advanced European biostimulator formulated in 2&3 ML sterile presentation for regenerative aesthetic protocols.",
    "description": "Exo-Cell is an engineered injectable biomatrix developed in Spain under European medical device standards. Presented in a sterile 2&3 ML format designed for precise clinical placement.",
    "technology": "Bio-cellular scaffold stimulation and extracellular matrix tissue support.",
    "application": "Targeted aesthetic tissue bio-revitalization. Strictly for licensed healthcare professionals.",
    "origin": "Barcelona, Spain",
    "grade": "Medical Aesthetic Injectable",
    "sterilization": "Sterile (Ph. Eur.)",
    "endotoxinLevel": "< 0.02 EU/ml",
    "flaggedForReview": false,
    "specifications": {
      "origin": "Barcelona, Spain",
      "grade": "Medical Aesthetic Injectable",
      "sterilization": "Sterile (Ph. Eur.)",
      "endotoxinLevel": "< 0.02 EU/ml"
    },
    "formulation": "Exo-Cell is an engineered injectable biomatrix developed in Spain under European medical device standards. Presented in a sterile 2&3 ML format designed for precise clinical placement.",
    "ingredients": "Exosome Complex, Dermal Antioxidant Formulation",
    "primaryImage": "/images/products/exo-cell/main.png",
    "altText": "Exo-Cell - Biostimulators 2 ML clinical aesthetic formulation"
  },
  {
    "id": "biostimulator-2-3-ml-exospot",
    "slug": "biostimulator-2-3-ml-exospot",
    "name": "X Spot",
    "category": "Biostimulators",
    "subcategory": "2 ML",
    "format": "Pre-filled Syringe 2.0 ml",
    "images": [
      "/images/products/x-spot/main.png",
      "/images/products/x-spot/detail-01.png"
    ],
    "shortDescription": "Advanced European biostimulator formulated in 2&3 ML sterile presentation for regenerative aesthetic protocols.",
    "description": "ExoSpot is an engineered injectable biomatrix developed in Spain under European medical device standards. Presented in a sterile 2&3 ML format designed for precise clinical placement.",
    "technology": "Bio-cellular scaffold stimulation and extracellular matrix tissue support.",
    "application": "Targeted aesthetic tissue bio-revitalization. Strictly for licensed healthcare professionals.",
    "origin": "Barcelona, Spain",
    "grade": "Medical Aesthetic Injectable",
    "sterilization": "Sterile (Ph. Eur.)",
    "endotoxinLevel": "< 0.02 EU/ml",
    "flaggedForReview": false,
    "specifications": {
      "origin": "Barcelona, Spain",
      "grade": "Medical Aesthetic Injectable",
      "sterilization": "Sterile (Ph. Eur.)",
      "endotoxinLevel": "< 0.02 EU/ml"
    },
    "formulation": "ExoSpot is an engineered injectable biomatrix developed in Spain under European medical device standards. Presented in a sterile 2&3 ML format designed for precise clinical placement.",
    "ingredients": "Exosome Complex, Dermal Antioxidant Formulation",
    "primaryImage": "/images/products/x-spot/main.png",
    "altText": "X Spot - Biostimulators 2 ML clinical aesthetic formulation"
  },
  {
    "id": "biostimulator-2-3-ml-exonza",
    "slug": "biostimulator-2-3-ml-exonza",
    "name": "Exonza",
    "category": "Biostimulators",
    "subcategory": "2 ML",
    "format": "Pre-filled Syringe 2.0 ml",
    "images": [
      "/images/products/exonza/main.png",
      "/images/products/exonza/detail-01.png"
    ],
    "shortDescription": "Advanced European biostimulator formulated in 2&3 ML sterile presentation for regenerative aesthetic protocols.",
    "description": "Exonza is an engineered injectable biomatrix developed in Spain under European medical device standards. Presented in a sterile 2&3 ML format designed for precise clinical placement.",
    "technology": "Bio-cellular scaffold stimulation and extracellular matrix tissue support.",
    "application": "Targeted aesthetic tissue bio-revitalization. Strictly for licensed healthcare professionals.",
    "origin": "Barcelona, Spain",
    "grade": "Medical Aesthetic Injectable",
    "sterilization": "Sterile (Ph. Eur.)",
    "endotoxinLevel": "< 0.02 EU/ml",
    "flaggedForReview": false,
    "specifications": {
      "origin": "Barcelona, Spain",
      "grade": "Medical Aesthetic Injectable",
      "sterilization": "Sterile (Ph. Eur.)",
      "endotoxinLevel": "< 0.02 EU/ml"
    },
    "formulation": "Exonza is an engineered injectable biomatrix developed in Spain under European medical device standards. Presented in a sterile 2&3 ML format designed for precise clinical placement.",
    "ingredients": "Polynucleotide Biomatrix, Cross-link Density Scaffold",
    "primaryImage": "/images/products/exonza/main.png",
    "altText": "Exonza - Biostimulators 2 ML clinical aesthetic formulation"
  },
  {
    "id": "biostimulator-2-3-ml-lumex",
    "slug": "biostimulator-2-3-ml-lumex",
    "name": "Lumex",
    "category": "Biostimulators",
    "subcategory": "3 ML",
    "format": "Pre-filled Syringe 3.0 ml",
    "images": [
      "/images/products/lumex/main.png",
      "/images/products/lumex/detail-01.png"
    ],
    "shortDescription": "Advanced European biostimulator formulated in 2&3 ML sterile presentation for regenerative aesthetic protocols.",
    "description": "LUMEX is an engineered injectable biomatrix developed in Spain under European medical device standards. Presented in a sterile 2&3 ML format designed for precise clinical placement.",
    "technology": "Bio-cellular scaffold stimulation and extracellular matrix tissue support.",
    "application": "Targeted aesthetic tissue bio-revitalization. Strictly for licensed healthcare professionals.",
    "origin": "Barcelona, Spain",
    "grade": "Medical Aesthetic Injectable",
    "sterilization": "Sterile (Ph. Eur.)",
    "endotoxinLevel": "< 0.02 EU/ml",
    "flaggedForReview": false,
    "specifications": {
      "origin": "Barcelona, Spain",
      "grade": "Medical Aesthetic Injectable",
      "sterilization": "Sterile (Ph. Eur.)",
      "endotoxinLevel": "< 0.02 EU/ml"
    },
    "formulation": "LUMEX is an engineered injectable biomatrix developed in Spain under European medical device standards. Presented in a sterile 2&3 ML format designed for precise clinical placement.",
    "ingredients": "Exosome Complex, Dermal Bio-Peptides",
    "primaryImage": "/images/products/lumex/main.png",
    "altText": "Lumex - Biostimulators 3 ML clinical aesthetic formulation"
  },
  {
    "id": "biostimulator-2-3-ml-mijora",
    "slug": "biostimulator-2-3-ml-mijora",
    "name": "Mijora Hydro PDRN",
    "category": "Biostimulators",
    "subcategory": "3 ML",
    "format": "Pre-filled Syringe 3.0 ml",
    "images": [
      "/images/products/mijora-hydro-pdrn/main.png",
      "/images/products/mijora-hydro-pdrn/detail-01.png"
    ],
    "shortDescription": "Advanced European biostimulator formulated in 2&3 ML sterile presentation for regenerative aesthetic protocols.",
    "description": "Mijora is an engineered injectable biomatrix developed in Spain under European medical device standards. Presented in a sterile 2&3 ML format designed for precise clinical placement.",
    "technology": "Bio-cellular scaffold stimulation and extracellular matrix tissue support.",
    "application": "Targeted aesthetic tissue bio-revitalization. Strictly for licensed healthcare professionals.",
    "origin": "Barcelona, Spain",
    "grade": "Medical Aesthetic Injectable",
    "sterilization": "Sterile (Ph. Eur.)",
    "endotoxinLevel": "< 0.02 EU/ml",
    "flaggedForReview": false,
    "specifications": {
      "origin": "Barcelona, Spain",
      "grade": "Medical Aesthetic Injectable",
      "sterilization": "Sterile (Ph. Eur.)",
      "endotoxinLevel": "< 0.02 EU/ml"
    },
    "formulation": "Mijora is an engineered injectable biomatrix developed in Spain under European medical device standards. Presented in a sterile 2&3 ML format designed for precise clinical placement.",
    "ingredients": "Hyaluronic Acid, Salmon DNA (PDRN)",
    "primaryImage": "/images/products/mijora-hydro-pdrn/main.png",
    "altText": "Mijora Hydro PDRN - Biostimulators 3 ML clinical aesthetic formulation"
  },
  {
    "id": "biostimulator-2-3-ml-rivajet",
    "slug": "biostimulator-2-3-ml-rivajet",
    "name": "Rivajet",
    "category": "Biostimulators",
    "subcategory": "2 ML",
    "format": "Pre-filled Syringe 2.0 ml",
    "images": [
      "/images/products/rivajet/main.png",
      "/images/products/rivajet/detail-01.png"
    ],
    "shortDescription": "Advanced European biostimulator formulated in 2&3 ML sterile presentation for regenerative aesthetic protocols.",
    "description": "Rivajet is an engineered injectable biomatrix developed in Spain under European medical device standards. Presented in a sterile 2&3 ML format designed for precise clinical placement.",
    "technology": "Bio-cellular scaffold stimulation and extracellular matrix tissue support.",
    "application": "Targeted aesthetic tissue bio-revitalization. Strictly for licensed healthcare professionals.",
    "origin": "Barcelona, Spain",
    "grade": "Medical Aesthetic Injectable",
    "sterilization": "Sterile (Ph. Eur.)",
    "endotoxinLevel": "< 0.02 EU/ml",
    "flaggedForReview": false,
    "specifications": {
      "origin": "Barcelona, Spain",
      "grade": "Medical Aesthetic Injectable",
      "sterilization": "Sterile (Ph. Eur.)",
      "endotoxinLevel": "< 0.02 EU/ml"
    },
    "formulation": "Rivajet is an engineered injectable biomatrix developed in Spain under European medical device standards. Presented in a sterile 2&3 ML format designed for precise clinical placement.",
    "ingredients": "Hyaluronic Acid, Salmon DNA (PDRN)",
    "primaryImage": "/images/products/rivajet/main.png",
    "altText": "Rivajet - Biostimulators 2 ML clinical aesthetic formulation"
  },
  {
    "id": "biotech-gf-bright",
    "slug": "biotech-gf-bright",
    "name": "GF-BRIGHT",
    "category": "Growth Factors",
    "subcategory": "Growth Factors",
    "format": "Sterile Lyophilized Vial & Solution",
    "images": [
      "/images/products/gf-bright/main.png",
      "/images/products/gf-bright/detail-01.png"
    ],
    "shortDescription": "Bio-engineered Growth Factor formulation for targeted clinical skin, lipo, or hair protocols.",
    "description": "GF-BRIGHT incorporates recombinant biomimetic peptides and high-purity growth factors to stimulate targeted cellular cascades.",
    "technology": "Biomimetic growth factor synthesis and cellular signaling peptides.",
    "application": "Clinical transdermal administration, microneedling, or professional aesthetic protocols.",
    "origin": "Barcelona, Spain",
    "grade": "Professional Biotechnology Grade",
    "sterilization": "Sterile Aseptic Filtration",
    "endotoxinLevel": "< 0.02 EU/ml",
    "flaggedForReview": false,
    "specifications": {
      "origin": "Barcelona, Spain",
      "grade": "Professional Biotechnology Grade",
      "sterilization": "Sterile Aseptic Filtration",
      "endotoxinLevel": "< 0.02 EU/ml"
    },
    "formulation": "GF-BRIGHT incorporates recombinant biomimetic peptides and high-purity growth factors to stimulate targeted cellular cascades.",
    "ingredients": "Recombinant Human Oligopeptides, Chromophore Balancing Factor",
    "primaryImage": "/images/products/gf-bright/main.png",
    "altText": "GF-BRIGHT - Growth Factors Growth Factors clinical aesthetic formulation"
  },
  {
    "id": "biotech-gf-correct",
    "slug": "biotech-gf-correct",
    "name": "GF-CORRECT",
    "category": "Growth Factors",
    "subcategory": "Growth Factors",
    "format": "Sterile Lyophilized Vial & Solution",
    "images": [
      "/images/products/gf-correct/main.png",
      "/images/products/gf-correct/detail-01.png"
    ],
    "shortDescription": "Bio-engineered Growth Factor formulation for targeted clinical skin, lipo, or hair protocols.",
    "description": "GF-CORRECT incorporates recombinant biomimetic peptides and high-purity growth factors to stimulate targeted cellular cascades.",
    "technology": "Biomimetic growth factor synthesis and cellular signaling peptides.",
    "application": "Clinical transdermal administration, microneedling, or professional aesthetic protocols.",
    "origin": "Barcelona, Spain",
    "grade": "Professional Biotechnology Grade",
    "sterilization": "Sterile Aseptic Filtration",
    "endotoxinLevel": "< 0.02 EU/ml",
    "flaggedForReview": false,
    "specifications": {
      "origin": "Barcelona, Spain",
      "grade": "Professional Biotechnology Grade",
      "sterilization": "Sterile Aseptic Filtration",
      "endotoxinLevel": "< 0.02 EU/ml"
    },
    "formulation": "GF-CORRECT incorporates recombinant biomimetic peptides and high-purity growth factors to stimulate targeted cellular cascades.",
    "ingredients": "Matrix Metalloproteinase Modulators, Cell Repair Factors",
    "primaryImage": "/images/products/gf-correct/main.png",
    "altText": "GF-CORRECT - Growth Factors Growth Factors clinical aesthetic formulation"
  },
  {
    "id": "biotech-gf-glow",
    "slug": "biotech-gf-glow",
    "name": "GF-GLOW",
    "category": "Growth Factors",
    "subcategory": "Growth Factors",
    "format": "Sterile Lyophilized Vial & Solution",
    "images": [
      "/images/products/gf-glow/main.png",
      "/images/products/gf-glow/detail-01.png"
    ],
    "shortDescription": "Bio-engineered Growth Factor formulation for targeted clinical skin, lipo, or hair protocols.",
    "description": "GF-GLOW incorporates recombinant biomimetic peptides and high-purity growth factors to stimulate targeted cellular cascades.",
    "technology": "Biomimetic growth factor synthesis and cellular signaling peptides.",
    "application": "Clinical transdermal administration, microneedling, or professional aesthetic protocols.",
    "origin": "Barcelona, Spain",
    "grade": "Professional Biotechnology Grade",
    "sterilization": "Sterile Aseptic Filtration",
    "endotoxinLevel": "< 0.02 EU/ml",
    "flaggedForReview": false,
    "specifications": {
      "origin": "Barcelona, Spain",
      "grade": "Professional Biotechnology Grade",
      "sterilization": "Sterile Aseptic Filtration",
      "endotoxinLevel": "< 0.02 EU/ml"
    },
    "formulation": "GF-GLOW incorporates recombinant biomimetic peptides and high-purity growth factors to stimulate targeted cellular cascades.",
    "ingredients": "Recombinant Epidermal Growth Factor (EGF), Radiance Peptides",
    "primaryImage": "/images/products/gf-glow/main.png",
    "altText": "GF-GLOW - Growth Factors Growth Factors clinical aesthetic formulation"
  },
  {
    "id": "biotech-gf-hair",
    "slug": "biotech-gf-hair",
    "name": "GF-HAIR",
    "category": "Growth Factors",
    "subcategory": "Growth Factors",
    "format": "Sterile Lyophilized Vial & Solution",
    "images": [
      "/images/products/gf-hair/main.png",
      "/images/products/gf-hair/detail-01.png"
    ],
    "shortDescription": "Bio-engineered Growth Factor formulation for targeted clinical skin, lipo, or hair protocols.",
    "description": "GF-HAIR incorporates recombinant biomimetic peptides and high-purity growth factors to stimulate targeted cellular cascades.",
    "technology": "Biomimetic growth factor synthesis and cellular signaling peptides.",
    "application": "Clinical transdermal administration, microneedling, or professional aesthetic protocols.",
    "origin": "Barcelona, Spain",
    "grade": "Professional Biotechnology Grade",
    "sterilization": "Sterile Aseptic Filtration",
    "endotoxinLevel": "< 0.02 EU/ml",
    "flaggedForReview": false,
    "specifications": {
      "origin": "Barcelona, Spain",
      "grade": "Professional Biotechnology Grade",
      "sterilization": "Sterile Aseptic Filtration",
      "endotoxinLevel": "< 0.02 EU/ml"
    },
    "formulation": "GF-HAIR incorporates recombinant biomimetic peptides and high-purity growth factors to stimulate targeted cellular cascades.",
    "ingredients": "Follicular Stem Activation Peptides, Vascular Endothelial Biomimetics",
    "primaryImage": "/images/products/gf-hair/main.png",
    "altText": "GF-HAIR - Growth Factors Growth Factors clinical aesthetic formulation"
  },
  {
    "id": "biotech-gf-lipo",
    "slug": "biotech-gf-lipo",
    "name": "GF-LIPO",
    "category": "Growth Factors",
    "subcategory": "Growth Factors",
    "format": "Sterile Lyophilized Vial & Solution",
    "images": [
      "/images/products/gf-lipo/main.png",
      "/images/products/gf-lipo/detail-01.png"
    ],
    "shortDescription": "Bio-engineered Growth Factor formulation for targeted clinical skin, lipo, or hair protocols.",
    "description": "GF-LIPO incorporates recombinant biomimetic peptides and high-purity growth factors to stimulate targeted cellular cascades.",
    "technology": "Biomimetic growth factor synthesis and cellular signaling peptides.",
    "application": "Clinical transdermal administration, microneedling, or professional aesthetic protocols.",
    "origin": "Barcelona, Spain",
    "grade": "Professional Biotechnology Grade",
    "sterilization": "Sterile Aseptic Filtration",
    "endotoxinLevel": "< 0.02 EU/ml",
    "flaggedForReview": false,
    "specifications": {
      "origin": "Barcelona, Spain",
      "grade": "Professional Biotechnology Grade",
      "sterilization": "Sterile Aseptic Filtration",
      "endotoxinLevel": "< 0.02 EU/ml"
    },
    "formulation": "GF-LIPO incorporates recombinant biomimetic peptides and high-purity growth factors to stimulate targeted cellular cascades.",
    "ingredients": "Phosphatidylcholine, Biomimetic Adipolytic Peptides",
    "primaryImage": "/images/products/gf-lipo/main.png",
    "altText": "GF-LIPO - Growth Factors Growth Factors clinical aesthetic formulation"
  },
  {
    "id": "biotech-gf-rejuve",
    "slug": "biotech-gf-rejuve",
    "name": "Gf-REJUVE",
    "category": "Growth Factors",
    "subcategory": "Growth Factors",
    "format": "Sterile Lyophilized Vial & Solution",
    "images": [
      "/images/products/gf-rejuve/main.png",
      "/images/products/gf-rejuve/detail-01.png"
    ],
    "shortDescription": "Bio-engineered Growth Factor formulation for targeted clinical skin, lipo, or hair protocols.",
    "description": "Gf-REJUVE incorporates recombinant biomimetic peptides and high-purity growth factors to stimulate targeted cellular cascades.",
    "technology": "Biomimetic growth factor synthesis and cellular signaling peptides.",
    "application": "Clinical transdermal administration, microneedling, or professional aesthetic protocols.",
    "origin": "Barcelona, Spain",
    "grade": "Professional Biotechnology Grade",
    "sterilization": "Sterile Aseptic Filtration",
    "endotoxinLevel": "< 0.02 EU/ml",
    "flaggedForReview": false,
    "specifications": {
      "origin": "Barcelona, Spain",
      "grade": "Professional Biotechnology Grade",
      "sterilization": "Sterile Aseptic Filtration",
      "endotoxinLevel": "< 0.02 EU/ml"
    },
    "formulation": "Gf-REJUVE incorporates recombinant biomimetic peptides and high-purity growth factors to stimulate targeted cellular cascades.",
    "ingredients": "Recombinant Fibroblast Growth Factor (bFGF), Bioactive Signaling Peptides",
    "primaryImage": "/images/products/gf-rejuve/main.png",
    "altText": "Gf-REJUVE - Growth Factors Growth Factors clinical aesthetic formulation"
  },
  {
    "id": "vial-acnova",
    "slug": "vial-acnova",
    "name": "Acnova",
    "category": "Mesotherapy",
    "subcategory": "Mesotherapy Solutions",
    "format": "10 Vials x 5 ml (50 ml total)",
    "images": [
      "/images/products/acnova/main.png",
      "/images/products/acnova/detail-01.png"
    ],
    "shortDescription": "Advanced Formula for Acne-Prone, Oily & Seborrhoea skin clarity solution.",
    "description": "Acnova is an isotonic sterile solution formulated in Spain for professional aesthetic treatments.",
    "technology": "Targeted active molecular matrix for clinical application.",
    "application": "Professional aesthetic protocols. Exclusive to certified physicians and clinics.",
    "origin": "Barcelona, Spain",
    "grade": "Clinical Aesthetic Grade",
    "sterilization": "Sterile Aseptic Filtration",
    "endotoxinLevel": "< 0.02 EU/ml",
    "flaggedForReview": false,
    "specifications": {
      "origin": "Barcelona, Spain",
      "grade": "Clinical Aesthetic Grade",
      "sterilization": "Sterile Aseptic Filtration",
      "endotoxinLevel": "< 0.02 EU/ml"
    },
    "formulation": "Acnova is an isotonic sterile solution formulated in Spain for professional aesthetic treatments.",
    "ingredients": "Pumpkin Seed Oil Extract, Retinol, Vitamin Complex",
    "primaryImage": "/images/products/acnova/main.png",
    "altText": "Acnova - Mesotherapy Mesotherapy Solutions clinical aesthetic formulation"
  },
  {
    "id": "vial-avelora",
    "slug": "vial-avelora",
    "name": "Avelora",
    "category": "Mesotherapy",
    "subcategory": "Mesotherapy Solutions",
    "format": "Sterile Clinical Vial",
    "images": [
      "/images/products/avelora/main.png",
      "/images/products/avelora/detail-01.png"
    ],
    "shortDescription": "Specialized clinical aesthetic formulation in sterile vial format.",
    "description": "Avelora is an isotonic sterile solution formulated in Spain for professional aesthetic treatments.",
    "technology": "Targeted active molecular matrix for clinical application.",
    "application": "Professional aesthetic protocols. Exclusive to certified physicians and clinics.",
    "origin": "Barcelona, Spain",
    "grade": "Clinical Aesthetic Grade",
    "sterilization": "Sterile Aseptic Filtration",
    "endotoxinLevel": "< 0.02 EU/ml",
    "flaggedForReview": false,
    "specifications": {
      "origin": "Barcelona, Spain",
      "grade": "Clinical Aesthetic Grade",
      "sterilization": "Sterile Aseptic Filtration",
      "endotoxinLevel": "< 0.02 EU/ml"
    },
    "formulation": "Avelora is an isotonic sterile solution formulated in Spain for professional aesthetic treatments.",
    "ingredients": "Biorevitalizing Polynucleotide, Hyaluronic Acid Matrix",
    "primaryImage": "/images/products/avelora/main.png",
    "altText": "Avelora - Mesotherapy Mesotherapy Solutions clinical aesthetic formulation"
  },
  {
    "id": "vial-avolix-body",
    "slug": "vial-avolix-body",
    "name": "Avolix Body",
    "category": "Mesotherapy",
    "subcategory": "Mesotherapy Solutions",
    "format": "Sterile Clinical Vial",
    "images": [
      "/images/products/avolix-body/main.png",
      "/images/products/avolix-body/detail-01.png"
    ],
    "shortDescription": "Specialized clinical aesthetic formulation in sterile vial format.",
    "description": "Avolix Body is an isotonic sterile solution formulated in Spain for professional aesthetic treatments.",
    "technology": "Targeted active molecular matrix for clinical application.",
    "application": "Professional aesthetic protocols. Exclusive to certified physicians and clinics.",
    "origin": "Barcelona, Spain",
    "grade": "Clinical Aesthetic Grade",
    "sterilization": "Sterile Aseptic Filtration",
    "endotoxinLevel": "< 0.02 EU/ml",
    "flaggedForReview": false,
    "specifications": {
      "origin": "Barcelona, Spain",
      "grade": "Clinical Aesthetic Grade",
      "sterilization": "Sterile Aseptic Filtration",
      "endotoxinLevel": "< 0.02 EU/ml"
    },
    "formulation": "Avolix Body is an isotonic sterile solution formulated in Spain for professional aesthetic treatments.",
    "ingredients": "Targeted Adipolytic Complex, Carnitine, Caffeine Synergy",
    "primaryImage": "/images/products/avolix-body/main.png",
    "altText": "Avolix Body - Mesotherapy Mesotherapy Solutions clinical aesthetic formulation"
  },
  {
    "id": "vial-avolix-chin",
    "slug": "vial-avolix-chin",
    "name": "Avolix Chin",
    "category": "Mesotherapy",
    "subcategory": "Mesotherapy Solutions",
    "format": "Sterile Clinical Vial",
    "images": [
      "/images/products/avolix-chin/main.png",
      "/images/products/avolix-chin/detail-01.png"
    ],
    "shortDescription": "Specialized clinical aesthetic formulation in sterile vial format.",
    "description": "Avolix Chin is an isotonic sterile solution formulated in Spain for professional aesthetic treatments.",
    "technology": "Targeted active molecular matrix for clinical application.",
    "application": "Professional aesthetic protocols. Exclusive to certified physicians and clinics.",
    "origin": "Barcelona, Spain",
    "grade": "Clinical Aesthetic Grade",
    "sterilization": "Sterile Aseptic Filtration",
    "endotoxinLevel": "< 0.02 EU/ml",
    "flaggedForReview": false,
    "specifications": {
      "origin": "Barcelona, Spain",
      "grade": "Clinical Aesthetic Grade",
      "sterilization": "Sterile Aseptic Filtration",
      "endotoxinLevel": "< 0.02 EU/ml"
    },
    "formulation": "Avolix Chin is an isotonic sterile solution formulated in Spain for professional aesthetic treatments.",
    "ingredients": "Sodium Deoxycholate Complex, Amino Acid Matrix",
    "primaryImage": "/images/products/avolix-chin/main.png",
    "altText": "Avolix Chin - Mesotherapy Mesotherapy Solutions clinical aesthetic formulation"
  },
  {
    "id": "vial-ex-age",
    "slug": "vial-ex-age",
    "name": "EX-Age",
    "category": "Mesotherapy",
    "subcategory": "Mesotherapy Solutions",
    "format": "Sterile Clinical Vial",
    "images": [
      "/images/products/ex-age/main.png",
      "/images/products/ex-age/detail-01.png"
    ],
    "shortDescription": "Specialized clinical aesthetic formulation in sterile vial format.",
    "description": "EX-Age is an isotonic sterile solution formulated in Spain for professional aesthetic treatments.",
    "technology": "Targeted active molecular matrix for clinical application.",
    "application": "Professional aesthetic protocols. Exclusive to certified physicians and clinics.",
    "origin": "Barcelona, Spain",
    "grade": "Clinical Aesthetic Grade",
    "sterilization": "Sterile Aseptic Filtration",
    "endotoxinLevel": "< 0.02 EU/ml",
    "flaggedForReview": false,
    "specifications": {
      "origin": "Barcelona, Spain",
      "grade": "Clinical Aesthetic Grade",
      "sterilization": "Sterile Aseptic Filtration",
      "endotoxinLevel": "< 0.02 EU/ml"
    },
    "formulation": "EX-Age is an isotonic sterile solution formulated in Spain for professional aesthetic treatments.",
    "ingredients": "Polypeptide Anti-Aging Matrix, Hyaluronic Acid, Trace Minerals",
    "primaryImage": "/images/products/ex-age/main.png",
    "altText": "EX-Age - Mesotherapy Mesotherapy Solutions clinical aesthetic formulation"
  },
  {
    "id": "vial-ex-dark-spot",
    "slug": "vial-ex-dark-spot",
    "name": "EX-Dark Spot",
    "category": "Mesotherapy",
    "subcategory": "Mesotherapy Solutions",
    "format": "Sterile Clinical Vial",
    "images": [
      "/images/products/ex-dark-spot/main.png",
      "/images/products/ex-dark-spot/detail-01.png"
    ],
    "shortDescription": "Specialized clinical aesthetic formulation in sterile vial format.",
    "description": "EX-Dark Spot is an isotonic sterile solution formulated in Spain for professional aesthetic treatments.",
    "technology": "Targeted active molecular matrix for clinical application.",
    "application": "Professional aesthetic protocols. Exclusive to certified physicians and clinics.",
    "origin": "Barcelona, Spain",
    "grade": "Clinical Aesthetic Grade",
    "sterilization": "Sterile Aseptic Filtration",
    "endotoxinLevel": "< 0.02 EU/ml",
    "flaggedForReview": false,
    "specifications": {
      "origin": "Barcelona, Spain",
      "grade": "Clinical Aesthetic Grade",
      "sterilization": "Sterile Aseptic Filtration",
      "endotoxinLevel": "< 0.02 EU/ml"
    },
    "formulation": "EX-Dark Spot is an isotonic sterile solution formulated in Spain for professional aesthetic treatments.",
    "ingredients": "Depigmenting Biomimetic Blend, Vitamin C, Kojic Acid Derivative",
    "primaryImage": "/images/products/ex-dark-spot/main.png",
    "altText": "EX-Dark Spot - Mesotherapy Mesotherapy Solutions clinical aesthetic formulation"
  },
  {
    "id": "vial-ex-gluta-c",
    "slug": "vial-ex-gluta-c",
    "name": "EX-Gluta C",
    "category": "Mesotherapy",
    "subcategory": "Mesotherapy Solutions",
    "format": "Sterile Clinical Vial",
    "images": [
      "/images/products/ex-gluta-c/main.png",
      "/images/products/ex-gluta-c/detail-01.png"
    ],
    "shortDescription": "Specialized clinical aesthetic formulation in sterile vial format.",
    "description": "EX-Gluta C is an isotonic sterile solution formulated in Spain for professional aesthetic treatments.",
    "technology": "Targeted active molecular matrix for clinical application.",
    "application": "Professional aesthetic protocols. Exclusive to certified physicians and clinics.",
    "origin": "Barcelona, Spain",
    "grade": "Clinical Aesthetic Grade",
    "sterilization": "Sterile Aseptic Filtration",
    "endotoxinLevel": "< 0.02 EU/ml",
    "flaggedForReview": false,
    "specifications": {
      "origin": "Barcelona, Spain",
      "grade": "Clinical Aesthetic Grade",
      "sterilization": "Sterile Aseptic Filtration",
      "endotoxinLevel": "< 0.02 EU/ml"
    },
    "formulation": "EX-Gluta C is an isotonic sterile solution formulated in Spain for professional aesthetic treatments.",
    "ingredients": "Glutathione, Ascorbic Acid (Vitamin C)",
    "primaryImage": "/images/products/ex-gluta-c/main.png",
    "altText": "EX-Gluta C - Mesotherapy Mesotherapy Solutions clinical aesthetic formulation"
  },
  {
    "id": "vial-ex-hair",
    "slug": "vial-ex-hair",
    "name": "EX-Hair",
    "category": "Mesotherapy",
    "subcategory": "Mesotherapy Solutions",
    "format": "Sterile Clinical Vial",
    "images": [
      "/images/products/ex-hair/main.png",
      "/images/products/ex-hair/detail-01.png"
    ],
    "shortDescription": "Specialized clinical aesthetic formulation in sterile vial format.",
    "description": "EX-Hair is an isotonic sterile solution formulated in Spain for professional aesthetic treatments.",
    "technology": "Targeted active molecular matrix for clinical application.",
    "application": "Professional aesthetic protocols. Exclusive to certified physicians and clinics.",
    "origin": "Barcelona, Spain",
    "grade": "Clinical Aesthetic Grade",
    "sterilization": "Sterile Aseptic Filtration",
    "endotoxinLevel": "< 0.02 EU/ml",
    "flaggedForReview": false,
    "specifications": {
      "origin": "Barcelona, Spain",
      "grade": "Clinical Aesthetic Grade",
      "sterilization": "Sterile Aseptic Filtration",
      "endotoxinLevel": "< 0.02 EU/ml"
    },
    "formulation": "EX-Hair is an isotonic sterile solution formulated in Spain for professional aesthetic treatments.",
    "ingredients": "Biotin, Dexpanthenol, Follicular Micronutrient Blend",
    "primaryImage": "/images/products/ex-hair/main.png",
    "altText": "EX-Hair - Mesotherapy Mesotherapy Solutions clinical aesthetic formulation"
  },
  {
    "id": "vial-ex-lift",
    "slug": "vial-ex-lift",
    "name": "EX-Lift",
    "category": "Mesotherapy",
    "subcategory": "Mesotherapy Solutions",
    "format": "Sterile Clinical Vial",
    "images": [
      "/images/products/ex-lift/main.png",
      "/images/products/ex-lift/detail-01.png"
    ],
    "shortDescription": "Specialized clinical aesthetic formulation in sterile vial format.",
    "description": "EX-Lift is an isotonic sterile solution formulated in Spain for professional aesthetic treatments.",
    "technology": "Targeted active molecular matrix for clinical application.",
    "application": "Professional aesthetic protocols. Exclusive to certified physicians and clinics.",
    "origin": "Barcelona, Spain",
    "grade": "Clinical Aesthetic Grade",
    "sterilization": "Sterile Aseptic Filtration",
    "endotoxinLevel": "< 0.02 EU/ml",
    "flaggedForReview": false,
    "specifications": {
      "origin": "Barcelona, Spain",
      "grade": "Clinical Aesthetic Grade",
      "sterilization": "Sterile Aseptic Filtration",
      "endotoxinLevel": "< 0.02 EU/ml"
    },
    "formulation": "EX-Lift is an isotonic sterile solution formulated in Spain for professional aesthetic treatments.",
    "ingredients": "DMAE, Organic Silicium, Biomimetic Firming Peptides",
    "primaryImage": "/images/products/ex-lift/main.png",
    "altText": "EX-Lift - Mesotherapy Mesotherapy Solutions clinical aesthetic formulation"
  },
  {
    "id": "vial-ex-lipo",
    "slug": "vial-ex-lipo",
    "name": "EX-Lipo",
    "category": "Mesotherapy",
    "subcategory": "Mesotherapy Solutions",
    "format": "Sterile Clinical Vial",
    "images": [
      "/images/products/ex-lipo/main.png",
      "/images/products/ex-lipo/detail-01.png"
    ],
    "shortDescription": "Specialized clinical aesthetic formulation in sterile vial format.",
    "description": "EX-Lipo is an isotonic sterile solution formulated in Spain for professional aesthetic treatments.",
    "technology": "Targeted active molecular matrix for clinical application.",
    "application": "Professional aesthetic protocols. Exclusive to certified physicians and clinics.",
    "origin": "Barcelona, Spain",
    "grade": "Clinical Aesthetic Grade",
    "sterilization": "Sterile Aseptic Filtration",
    "endotoxinLevel": "< 0.02 EU/ml",
    "flaggedForReview": false,
    "specifications": {
      "origin": "Barcelona, Spain",
      "grade": "Clinical Aesthetic Grade",
      "sterilization": "Sterile Aseptic Filtration",
      "endotoxinLevel": "< 0.02 EU/ml"
    },
    "formulation": "EX-Lipo is an isotonic sterile solution formulated in Spain for professional aesthetic treatments.",
    "ingredients": "Phosphatidylcholine, Deoxycholate, Artichoke Extract",
    "primaryImage": "/images/products/ex-lipo/main.png",
    "altText": "EX-Lipo - Mesotherapy Mesotherapy Solutions clinical aesthetic formulation"
  },
  {
    "id": "vial-exo-cell",
    "slug": "vial-exo-cell",
    "name": "EXO-Cell",
    "category": "Mesotherapy",
    "subcategory": "Mesotherapy Solutions",
    "format": "Sterile Clinical Vial",
    "images": [
      "/images/products/mesotherapy-exo-cell/main.png",
      "/images/products/mesotherapy-exo-cell/detail-01.png"
    ],
    "shortDescription": "Specialized clinical aesthetic formulation in sterile vial format.",
    "description": "EXO-Cell is an isotonic sterile solution formulated in Spain for professional aesthetic treatments.",
    "technology": "Targeted active molecular matrix for clinical application.",
    "application": "Professional aesthetic protocols. Exclusive to certified physicians and clinics.",
    "origin": "Barcelona, Spain",
    "grade": "Clinical Aesthetic Grade",
    "sterilization": "Sterile Aseptic Filtration",
    "endotoxinLevel": "< 0.02 EU/ml",
    "flaggedForReview": false,
    "specifications": {
      "origin": "Barcelona, Spain",
      "grade": "Clinical Aesthetic Grade",
      "sterilization": "Sterile Aseptic Filtration",
      "endotoxinLevel": "< 0.02 EU/ml"
    },
    "formulation": "EXO-Cell is an isotonic sterile solution formulated in Spain for professional aesthetic treatments.",
    "ingredients": "Exosome Complex, Dermal Antioxidant Formulation",
    "primaryImage": "/images/products/mesotherapy-exo-cell/main.png",
    "altText": "EXO-Cell - Mesotherapy Mesotherapy Solutions clinical aesthetic formulation"
  },
  {
    "id": "vial-exo-spot",
    "slug": "vial-exo-spot",
    "name": "X Spot",
    "category": "Mesotherapy",
    "subcategory": "Mesotherapy Solutions",
    "format": "Sterile Clinical Vial",
    "images": [
      "/images/products/mesotherapy-x-spot/main.png",
      "/images/products/mesotherapy-x-spot/detail-01.png"
    ],
    "shortDescription": "Specialized clinical aesthetic formulation in sterile vial format.",
    "description": "EXO-Spot is an isotonic sterile solution formulated in Spain for professional aesthetic treatments.",
    "technology": "Targeted active molecular matrix for clinical application.",
    "application": "Professional aesthetic protocols. Exclusive to certified physicians and clinics.",
    "origin": "Barcelona, Spain",
    "grade": "Clinical Aesthetic Grade",
    "sterilization": "Sterile Aseptic Filtration",
    "endotoxinLevel": "< 0.02 EU/ml",
    "flaggedForReview": false,
    "specifications": {
      "origin": "Barcelona, Spain",
      "grade": "Clinical Aesthetic Grade",
      "sterilization": "Sterile Aseptic Filtration",
      "endotoxinLevel": "< 0.02 EU/ml"
    },
    "formulation": "EXO-Spot is an isotonic sterile solution formulated in Spain for professional aesthetic treatments.",
    "ingredients": "Exosome Complex, Dermal Antioxidant Formulation",
    "primaryImage": "/images/products/mesotherapy-x-spot/main.png",
    "altText": "X Spot - Mesotherapy Mesotherapy Solutions clinical aesthetic formulation"
  },
  {
    "id": "vial-exo-vit",
    "slug": "vial-exo-vit",
    "name": "EXO-Vit",
    "category": "Mesotherapy",
    "subcategory": "Mesotherapy Solutions",
    "format": "Sterile Clinical Vial",
    "images": [
      "/images/products/exo-vit/main.png",
      "/images/products/exo-vit/detail-01.png"
    ],
    "shortDescription": "Specialized clinical aesthetic formulation in sterile vial format.",
    "description": "EXO-Vit is an isotonic sterile solution formulated in Spain for professional aesthetic treatments.",
    "technology": "Targeted active molecular matrix for clinical application.",
    "application": "Professional aesthetic protocols. Exclusive to certified physicians and clinics.",
    "origin": "Barcelona, Spain",
    "grade": "Clinical Aesthetic Grade",
    "sterilization": "Sterile Aseptic Filtration",
    "endotoxinLevel": "< 0.02 EU/ml",
    "flaggedForReview": false,
    "specifications": {
      "origin": "Barcelona, Spain",
      "grade": "Clinical Aesthetic Grade",
      "sterilization": "Sterile Aseptic Filtration",
      "endotoxinLevel": "< 0.02 EU/ml"
    },
    "formulation": "EXO-Vit is an isotonic sterile solution formulated in Spain for professional aesthetic treatments.",
    "ingredients": "Multivitamin B-Complex, Amino Acid Pool, Exosome Carrier",
    "primaryImage": "/images/products/exo-vit/main.png",
    "altText": "EXO-Vit - Mesotherapy Mesotherapy Solutions clinical aesthetic formulation"
  },
  {
    "id": "vial-gf-rejuve",
    "slug": "vial-gf-rejuve",
    "name": "GF-Rejuve",
    "category": "Mesotherapy",
    "subcategory": "Mesotherapy Solutions",
    "format": "Sterile Clinical Vial",
    "images": [
      "/images/products/mesotherapy-gf-rejuve/main.png",
      "/images/products/mesotherapy-gf-rejuve/detail-01.png"
    ],
    "shortDescription": "Specialized clinical aesthetic formulation in sterile vial format.",
    "description": "GF-Rejuve is an isotonic sterile solution formulated in Spain for professional aesthetic treatments.",
    "technology": "Targeted active molecular matrix for clinical application.",
    "application": "Professional aesthetic protocols. Exclusive to certified physicians and clinics.",
    "origin": "Barcelona, Spain",
    "grade": "Clinical Aesthetic Grade",
    "sterilization": "Sterile Aseptic Filtration",
    "endotoxinLevel": "< 0.02 EU/ml",
    "flaggedForReview": false,
    "specifications": {
      "origin": "Barcelona, Spain",
      "grade": "Clinical Aesthetic Grade",
      "sterilization": "Sterile Aseptic Filtration",
      "endotoxinLevel": "< 0.02 EU/ml"
    },
    "formulation": "GF-Rejuve is an isotonic sterile solution formulated in Spain for professional aesthetic treatments.",
    "ingredients": "Recombinant Fibroblast Growth Factor (bFGF), Bioactive Signaling Peptides",
    "primaryImage": "/images/products/mesotherapy-gf-rejuve/main.png",
    "altText": "GF-Rejuve - Mesotherapy Mesotherapy Solutions clinical aesthetic formulation"
  },
  {
    "id": "vial-ha-repair",
    "slug": "vial-ha-repair",
    "name": "HA-Repair",
    "category": "Mesotherapy",
    "subcategory": "Mesotherapy Solutions",
    "format": "Sterile Clinical Vial",
    "images": [
      "/images/products/ha-repair/main.png",
      "/images/products/ha-repair/detail-01.png"
    ],
    "shortDescription": "Specialized clinical aesthetic formulation in sterile vial format.",
    "description": "HA-Repair is an isotonic sterile solution formulated in Spain for professional aesthetic treatments.",
    "technology": "Targeted active molecular matrix for clinical application.",
    "application": "Professional aesthetic protocols. Exclusive to certified physicians and clinics.",
    "origin": "Barcelona, Spain",
    "grade": "Clinical Aesthetic Grade",
    "sterilization": "Sterile Aseptic Filtration",
    "endotoxinLevel": "< 0.02 EU/ml",
    "flaggedForReview": false,
    "specifications": {
      "origin": "Barcelona, Spain",
      "grade": "Clinical Aesthetic Grade",
      "sterilization": "Sterile Aseptic Filtration",
      "endotoxinLevel": "< 0.02 EU/ml"
    },
    "formulation": "HA-Repair is an isotonic sterile solution formulated in Spain for professional aesthetic treatments.",
    "ingredients": "High-Purity Biorevitalizing Hyaluronic Acid Biomatrix",
    "primaryImage": "/images/products/ha-repair/main.png",
    "altText": "HA-Repair - Mesotherapy Mesotherapy Solutions clinical aesthetic formulation"
  },
  {
    "id": "vial-ha-succinic-acid",
    "slug": "vial-ha-succinic-acid",
    "name": "HA-Succinic Acid",
    "category": "Mesotherapy",
    "subcategory": "Mesotherapy Solutions",
    "format": "Sterile Clinical Vial",
    "images": [
      "/images/products/ha-succinic-acid/main.png",
      "/images/products/ha-succinic-acid/detail-01.png"
    ],
    "shortDescription": "Specialized clinical aesthetic formulation in sterile vial format.",
    "description": "HA-Succinic Acid is an isotonic sterile solution formulated in Spain for professional aesthetic treatments.",
    "technology": "Targeted active molecular matrix for clinical application.",
    "application": "Professional aesthetic protocols. Exclusive to certified physicians and clinics.",
    "origin": "Barcelona, Spain",
    "grade": "Clinical Aesthetic Grade",
    "sterilization": "Sterile Aseptic Filtration",
    "endotoxinLevel": "< 0.02 EU/ml",
    "flaggedForReview": false,
    "specifications": {
      "origin": "Barcelona, Spain",
      "grade": "Clinical Aesthetic Grade",
      "sterilization": "Sterile Aseptic Filtration",
      "endotoxinLevel": "< 0.02 EU/ml"
    },
    "formulation": "HA-Succinic Acid is an isotonic sterile solution formulated in Spain for professional aesthetic treatments.",
    "ingredients": "Non-crosslinked Sodium Hyaluronate, Succinic Acid",
    "primaryImage": "/images/products/ha-succinic-acid/main.png",
    "altText": "HA-Succinic Acid - Mesotherapy Mesotherapy Solutions clinical aesthetic formulation"
  },
  {
    "id": "vial-mijora-hydro-pdrn",
    "slug": "vial-mijora-hydro-pdrn",
    "name": "Mijora Hydro PDRN",
    "category": "Mesotherapy",
    "subcategory": "Mesotherapy Solutions",
    "format": "Sterile Clinical Vial",
    "images": [
      "/images/products/mesotherapy-mijora-hydro-pdrn/main.png",
      "/images/products/mesotherapy-mijora-hydro-pdrn/detail-01.png"
    ],
    "shortDescription": "Specialized clinical aesthetic formulation in sterile vial format.",
    "description": "Mijora Hydro PDRN is an isotonic sterile solution formulated in Spain for professional aesthetic treatments.",
    "technology": "Targeted active molecular matrix for clinical application.",
    "application": "Professional aesthetic protocols. Exclusive to certified physicians and clinics.",
    "origin": "Barcelona, Spain",
    "grade": "Clinical Aesthetic Grade",
    "sterilization": "Sterile Aseptic Filtration",
    "endotoxinLevel": "< 0.02 EU/ml",
    "flaggedForReview": false,
    "specifications": {
      "origin": "Barcelona, Spain",
      "grade": "Clinical Aesthetic Grade",
      "sterilization": "Sterile Aseptic Filtration",
      "endotoxinLevel": "< 0.02 EU/ml"
    },
    "formulation": "Mijora Hydro PDRN is an isotonic sterile solution formulated in Spain for professional aesthetic treatments.",
    "ingredients": "Hyaluronic Acid, Salmon DNA (PDRN)",
    "primaryImage": "/images/products/mesotherapy-mijora-hydro-pdrn/main.png",
    "altText": "Mijora Hydro PDRN - Mesotherapy Mesotherapy Solutions clinical aesthetic formulation"
  },
  {
    "id": "peeling-peelora",
    "slug": "peelora",
    "name": "Peelora",
    "category": "Peeling",
    "subcategory": "Chemical Peels",
    "format": "Package 10 Vials x 5 ml",
    "images": [
      "/images/products/peelora/main.jpg",
      "/images/products/peelora/detail-01.jpg",
      "/images/products/peelora/detail-02.jpg"
    ],
    "shortDescription": "Chemical peel solution indicated to treat signs of aging, wrinkles, expression lines, and improve skin firmness.",
    "description": "PEELORA indicated to treat signs of aging. Retexturises and attenuates wrinkles and expression lines, improves firmness and revitalises the skin and provides brightness. PEELORA Solution Chemical Peel is suitable for most skin types, typically used for mild to moderate skin conditions, such as fine lines, acne, and hyperpigmentation.",
    "technology": "Targeted active molecular matrix for clinical application.",
    "application": "Suitable for most skin types. Indicated for mild to moderate skin conditions, such as fine lines, acne, and hyperpigmentation. Professional clinical application only.",
    "origin": "Barcelona, Spain",
    "grade": "Medical Chemical Exfoliant",
    "sterilization": "Sterile Aseptic Filtration",
    "endotoxinLevel": "< 0.02 EU/ml",
    "flaggedForReview": false,
    "specifications": {
      "origin": "Barcelona, Spain",
      "grade": "Clinical Aesthetic Grade",
      "sterilization": "Sterile Aseptic Filtration",
      "endotoxinLevel": "< 0.02 EU/ml"
    },
    "formulation": "Peelora is an isotonic sterile solution formulated in Spain for professional aesthetic treatments.",
    "ingredients": "ALCOHOL DENAT., AQUA, PROPYLENE GLYCOL, TRICHLOROACETIC ACID, PHENOL, ISOPROPYL ALCOHOL, ASCORBIC ACID, GLYCOLIC ACID, SALICYLIC ACID, MANDELIC ACID, PHYTIC ACID, RETINYL PALMITATE, TOCOPHEROL.",
    "primaryImage": "/images/products/peelora/main.jpg",
    "priceLabel": "Request Price",
    "altText": "Peelora - Peeling Chemical Peels clinical aesthetic formulation"
  },
  {
    "id": "vial-regenza",
    "slug": "vial-regenza",
    "name": "Regenza",
    "category": "Mesotherapy",
    "subcategory": "Mesotherapy Solutions",
    "format": "Sterile Clinical Vial",
    "images": [
      "/images/products/regenza/main.png",
      "/images/products/regenza/detail-01.png"
    ],
    "shortDescription": "Specialized clinical aesthetic formulation in sterile vial format.",
    "description": "Regenza is an isotonic sterile solution formulated in Spain for professional aesthetic treatments.",
    "technology": "Targeted active molecular matrix for clinical application.",
    "application": "Professional aesthetic protocols. Exclusive to certified physicians and clinics.",
    "origin": "Barcelona, Spain",
    "grade": "Clinical Aesthetic Grade",
    "sterilization": "Sterile Aseptic Filtration",
    "endotoxinLevel": "< 0.02 EU/ml",
    "flaggedForReview": false,
    "specifications": {
      "origin": "Barcelona, Spain",
      "grade": "Clinical Aesthetic Grade",
      "sterilization": "Sterile Aseptic Filtration",
      "endotoxinLevel": "< 0.02 EU/ml"
    },
    "formulation": "Regenza is an isotonic sterile solution formulated in Spain for professional aesthetic treatments.",
    "ingredients": "Polydeoxyribonucleotide (PDRN), Essential Amino Acid Complex",
    "primaryImage": "/images/products/regenza/main.png",
    "altText": "Regenza - Mesotherapy Mesotherapy Solutions clinical aesthetic formulation"
  },
  {
    "id": "vial-tranova",
    "slug": "vial-tranova",
    "name": "Tranova",
    "category": "Mesotherapy",
    "subcategory": "Mesotherapy Solutions",
    "format": "Sterile Clinical Vial",
    "images": [
      "/images/products/tranova/main.png",
      "/images/products/tranova/detail-01.png"
    ],
    "shortDescription": "Specialized clinical aesthetic formulation in sterile vial format.",
    "description": "Tranova is an isotonic sterile solution formulated in Spain for professional aesthetic treatments.",
    "technology": "Targeted active molecular matrix for clinical application.",
    "application": "Professional aesthetic protocols. Exclusive to certified physicians and clinics.",
    "origin": "Barcelona, Spain",
    "grade": "Clinical Aesthetic Grade",
    "sterilization": "Sterile Aseptic Filtration",
    "endotoxinLevel": "< 0.02 EU/ml",
    "flaggedForReview": false,
    "specifications": {
      "origin": "Barcelona, Spain",
      "grade": "Clinical Aesthetic Grade",
      "sterilization": "Sterile Aseptic Filtration",
      "endotoxinLevel": "< 0.02 EU/ml"
    },
    "formulation": "Tranova is an isotonic sterile solution formulated in Spain for professional aesthetic treatments.",
    "ingredients": "Tranexamic Acid, Niacinamide, Depigmenting Monomer Pool",
    "primaryImage": "/images/products/tranova/main.png",
    "altText": "Tranova - Mesotherapy Mesotherapy Solutions clinical aesthetic formulation"
  },
  {
    "id": "cosmetic-acne-acne-bright",
    "slug": "cosmetic-acne-acne-bright",
    "name": "Acne Bright",
    "category": "Cosmetics",
    "subcategory": "Cosmetics",
    "format": "Clinical Skincare",
    "images": [
      "/images/products/acne-bright/main.png"
    ],
    "shortDescription": "High-performance professional acne cosmetic formulation developed for pre- and post-procedure clinical care.",
    "description": "Acne Bright delivers pharmaceutical-grade actives specifically formulated in Spain to maintain barrier homeostasis and optimize aesthetic outcomes.",
    "technology": "Advanced topical delivery system targeting acne skin parameters.",
    "application": "Apply to clean skin according to clinical aesthetic protocol.",
    "origin": "Barcelona, Spain",
    "grade": "Dermaceutical Grade",
    "sterilization": "Cosmetic GMP ISO 22716",
    "endotoxinLevel": "N/A (Topical formulation)",
    "flaggedForReview": false,
    "specifications": {
      "origin": "Barcelona, Spain",
      "grade": "Dermaceutical Grade",
      "sterilization": "Cosmetic GMP ISO 22716",
      "endotoxinLevel": "N/A (Topical formulation)"
    },
    "formulation": "Acne Bright delivers pharmaceutical-grade actives specifically formulated in Spain to maintain barrier homeostasis and optimize aesthetic outcomes.",
    "ingredients": "Azelaic Acid, Salicylic Acid, Niacinamide Complex",
    "primaryImage": "/images/products/acne-bright/main.png",
    "altText": "Acne Bright - Cosmetics Cosmetics clinical aesthetic formulation"
  },
  {
    "id": "cosmetic-acne-acne-peel",
    "slug": "cosmetic-acne-acne-peel",
    "name": "Acne Peel",
    "category": "Cosmetics",
    "subcategory": "Cosmetics",
    "format": "Clinical Skincare",
    "images": [
      "/images/products/acne-peel/main.png",
      "/images/products/acne-peel/detail-01.png"
    ],
    "shortDescription": "High-performance professional acne cosmetic formulation developed for pre- and post-procedure clinical care.",
    "description": "Acne Peel delivers pharmaceutical-grade actives specifically formulated in Spain to maintain barrier homeostasis and optimize aesthetic outcomes.",
    "technology": "Advanced topical delivery system targeting acne skin parameters.",
    "application": "Apply to clean skin according to clinical aesthetic protocol.",
    "origin": "Barcelona, Spain",
    "grade": "Dermaceutical Grade",
    "sterilization": "Cosmetic GMP ISO 22716",
    "endotoxinLevel": "N/A (Topical formulation)",
    "flaggedForReview": false,
    "specifications": {
      "origin": "Barcelona, Spain",
      "grade": "Dermaceutical Grade",
      "sterilization": "Cosmetic GMP ISO 22716",
      "endotoxinLevel": "N/A (Topical formulation)"
    },
    "formulation": "Acne Peel delivers pharmaceutical-grade actives specifically formulated in Spain to maintain barrier homeostasis and optimize aesthetic outcomes.",
    "ingredients": "Clinical Monograph Batch Release (Detailed active compound profile provided upon verified medical request)",
    "primaryImage": "/images/products/acne-peel/main.png",
    "altText": "Acne Peel - Cosmetics Cosmetics clinical aesthetic formulation"
  },
  {
    "id": "cosmetic-acne-anti-acne-cream",
    "slug": "cosmetic-acne-anti-acne-cream",
    "name": "Anti Acne Cream",
    "category": "Cosmetics",
    "subcategory": "Cosmetics",
    "format": "Clinical Skincare",
    "images": [
      "/images/products/anti-acne-cream/main.png"
    ],
    "shortDescription": "High-performance professional acne cosmetic formulation developed for pre- and post-procedure clinical care.",
    "description": "Anti Acne Cream delivers pharmaceutical-grade actives specifically formulated in Spain to maintain barrier homeostasis and optimize aesthetic outcomes.",
    "technology": "Advanced topical delivery system targeting acne skin parameters.",
    "application": "Apply to clean skin according to clinical aesthetic protocol.",
    "origin": "Barcelona, Spain",
    "grade": "Dermaceutical Grade",
    "sterilization": "Cosmetic GMP ISO 22716",
    "endotoxinLevel": "N/A (Topical formulation)",
    "flaggedForReview": false,
    "specifications": {
      "origin": "Barcelona, Spain",
      "grade": "Dermaceutical Grade",
      "sterilization": "Cosmetic GMP ISO 22716",
      "endotoxinLevel": "N/A (Topical formulation)"
    },
    "formulation": "Anti Acne Cream delivers pharmaceutical-grade actives specifically formulated in Spain to maintain barrier homeostasis and optimize aesthetic outcomes.",
    "ingredients": "Tea Tree Extract, Encapsulated Salicylic Acid, Zinc Gluconate",
    "primaryImage": "/images/products/anti-acne-cream/main.png",
    "altText": "Anti Acne Cream - Cosmetics Cosmetics clinical aesthetic formulation"
  },
  {
    "id": "cosmetic-acne-peel-off-mask",
    "slug": "cosmetic-acne-peel-off-mask",
    "name": "Peel Off Mask",
    "category": "Cosmetics",
    "subcategory": "Cosmetics",
    "format": "Clinical Skincare",
    "images": [
      "/images/products/peel-off-mask/main.png"
    ],
    "shortDescription": "High-performance professional acne cosmetic formulation developed for pre- and post-procedure clinical care.",
    "description": "Peel Off Mask delivers pharmaceutical-grade actives specifically formulated in Spain to maintain barrier homeostasis and optimize aesthetic outcomes.",
    "technology": "Advanced topical delivery system targeting acne skin parameters.",
    "application": "Apply to clean skin according to clinical aesthetic protocol.",
    "origin": "Barcelona, Spain",
    "grade": "Dermaceutical Grade",
    "sterilization": "Cosmetic GMP ISO 22716",
    "endotoxinLevel": "N/A (Topical formulation)",
    "flaggedForReview": true,
    "reviewReason": "Verify distinct names: Peel Off Mask vs Pore Off Mask.",
    "specifications": {
      "origin": "Barcelona, Spain",
      "grade": "Dermaceutical Grade",
      "sterilization": "Cosmetic GMP ISO 22716",
      "endotoxinLevel": "N/A (Topical formulation)"
    },
    "formulation": "Peel Off Mask delivers pharmaceutical-grade actives specifically formulated in Spain to maintain barrier homeostasis and optimize aesthetic outcomes.",
    "ingredients": "Clinical Monograph Batch Release (Detailed active compound profile provided upon verified medical request)",
    "primaryImage": "/images/products/peel-off-mask/main.png",
    "altText": "Peel Off Mask - Cosmetics Cosmetics clinical aesthetic formulation"
  },
  {
    "id": "cosmetic-acne-pore-off-mask",
    "slug": "cosmetic-acne-pore-off-mask",
    "name": "Pore Off Mask",
    "category": "Cosmetics",
    "subcategory": "Cosmetics",
    "format": "Clinical Skincare",
    "images": [
      "/images/products/pore-off-mask/main.png"
    ],
    "shortDescription": "High-performance professional acne cosmetic formulation developed for pre- and post-procedure clinical care.",
    "description": "Pore Off Mask delivers pharmaceutical-grade actives specifically formulated in Spain to maintain barrier homeostasis and optimize aesthetic outcomes.",
    "technology": "Advanced topical delivery system targeting acne skin parameters.",
    "application": "Apply to clean skin according to clinical aesthetic protocol.",
    "origin": "Barcelona, Spain",
    "grade": "Dermaceutical Grade",
    "sterilization": "Cosmetic GMP ISO 22716",
    "endotoxinLevel": "N/A (Topical formulation)",
    "flaggedForReview": true,
    "reviewReason": "Verify distinct names: Peel Off Mask vs Pore Off Mask.",
    "specifications": {
      "origin": "Barcelona, Spain",
      "grade": "Dermaceutical Grade",
      "sterilization": "Cosmetic GMP ISO 22716",
      "endotoxinLevel": "N/A (Topical formulation)"
    },
    "formulation": "Pore Off Mask delivers pharmaceutical-grade actives specifically formulated in Spain to maintain barrier homeostasis and optimize aesthetic outcomes.",
    "ingredients": "Clinical Monograph Batch Release (Detailed active compound profile provided upon verified medical request)",
    "primaryImage": "/images/products/pore-off-mask/main.png",
    "altText": "Pore Off Mask - Cosmetics Cosmetics clinical aesthetic formulation"
  },
  {
    "id": "cosmetic-acne-sebum-control",
    "slug": "cosmetic-acne-sebum-control",
    "name": "Sebum Control",
    "category": "Cosmetics",
    "subcategory": "Cosmetics",
    "format": "Clinical Skincare",
    "images": [
      "/images/products/sebum-control/main.png"
    ],
    "shortDescription": "High-performance professional acne cosmetic formulation developed for pre- and post-procedure clinical care.",
    "description": "Sebum Control delivers pharmaceutical-grade actives specifically formulated in Spain to maintain barrier homeostasis and optimize aesthetic outcomes.",
    "technology": "Advanced topical delivery system targeting acne skin parameters.",
    "application": "Apply to clean skin according to clinical aesthetic protocol.",
    "origin": "Barcelona, Spain",
    "grade": "Dermaceutical Grade",
    "sterilization": "Cosmetic GMP ISO 22716",
    "endotoxinLevel": "N/A (Topical formulation)",
    "flaggedForReview": false,
    "specifications": {
      "origin": "Barcelona, Spain",
      "grade": "Dermaceutical Grade",
      "sterilization": "Cosmetic GMP ISO 22716",
      "endotoxinLevel": "N/A (Topical formulation)"
    },
    "formulation": "Sebum Control delivers pharmaceutical-grade actives specifically formulated in Spain to maintain barrier homeostasis and optimize aesthetic outcomes.",
    "ingredients": "Zinc PCA, Salicylic Acid, Niacinamide",
    "primaryImage": "/images/products/sebum-control/main.png",
    "altText": "Sebum Control - Cosmetics Cosmetics clinical aesthetic formulation"
  },
  {
    "id": "cosmetic-anti-aging-age-solution",
    "slug": "cosmetic-anti-aging-age-solution",
    "name": "Age Solution",
    "category": "Cosmetics",
    "subcategory": "Cosmetics",
    "format": "Clinical Skincare",
    "images": [
      "/images/products/age-solution/main.png"
    ],
    "shortDescription": "High-performance professional anti-aging cosmetic formulation developed for pre- and post-procedure clinical care.",
    "description": "Age Solution delivers pharmaceutical-grade actives specifically formulated in Spain to maintain barrier homeostasis and optimize aesthetic outcomes.",
    "technology": "Advanced topical delivery system targeting anti-aging skin parameters.",
    "application": "Apply to clean skin according to clinical aesthetic protocol.",
    "origin": "Barcelona, Spain",
    "grade": "Dermaceutical Grade",
    "sterilization": "Cosmetic GMP ISO 22716",
    "endotoxinLevel": "N/A (Topical formulation)",
    "flaggedForReview": false,
    "specifications": {
      "origin": "Barcelona, Spain",
      "grade": "Dermaceutical Grade",
      "sterilization": "Cosmetic GMP ISO 22716",
      "endotoxinLevel": "N/A (Topical formulation)"
    },
    "formulation": "Age Solution delivers pharmaceutical-grade actives specifically formulated in Spain to maintain barrier homeostasis and optimize aesthetic outcomes.",
    "ingredients": "Clinical Monograph Batch Release (Detailed active compound profile provided upon verified medical request)",
    "primaryImage": "/images/products/age-solution/main.png",
    "altText": "Age Solution - Cosmetics Cosmetics clinical aesthetic formulation"
  },
  {
    "id": "cosmetic-anti-aging-anti-aging",
    "slug": "cosmetic-anti-aging-anti-aging",
    "name": "Anti-Aging",
    "category": "Cosmetics",
    "subcategory": "Cosmetics",
    "format": "Clinical Skincare",
    "images": [
      "/images/products/anti-aging/main.png",
      "/images/products/anti-aging/detail-01.png",
      "/images/products/anti-aging/detail-02.png"
    ],
    "shortDescription": "High-performance professional anti-aging cosmetic formulation developed for pre- and post-procedure clinical care.",
    "description": "Anti-Aging delivers pharmaceutical-grade actives specifically formulated in Spain to maintain barrier homeostasis and optimize aesthetic outcomes.",
    "technology": "Advanced topical delivery system targeting anti-aging skin parameters.",
    "application": "Apply to clean skin according to clinical aesthetic protocol.",
    "origin": "Barcelona, Spain",
    "grade": "Dermaceutical Grade",
    "sterilization": "Cosmetic GMP ISO 22716",
    "endotoxinLevel": "N/A (Topical formulation)",
    "flaggedForReview": true,
    "reviewReason": "Grouped 3 multi-angle packaging files (Anti-Aging-1, Anti-Aging-2, and Anti Aging packshot) into single unified gallery.",
    "specifications": {
      "origin": "Barcelona, Spain",
      "grade": "Dermaceutical Grade",
      "sterilization": "Cosmetic GMP ISO 22716",
      "endotoxinLevel": "N/A (Topical formulation)"
    },
    "formulation": "Anti-Aging delivers pharmaceutical-grade actives specifically formulated in Spain to maintain barrier homeostasis and optimize aesthetic outcomes.",
    "ingredients": "Clinical Monograph Batch Release (Detailed active compound profile provided upon verified medical request)",
    "primaryImage": "/images/products/anti-aging/main.png",
    "altText": "Anti-Aging - Cosmetics Cosmetics clinical aesthetic formulation"
  },
  {
    "id": "cosmetic-anti-aging-cell-dna",
    "slug": "cosmetic-anti-aging-cell-dna",
    "name": "Cell DNA",
    "category": "Cosmetics",
    "subcategory": "Cosmetics",
    "format": "Clinical Skincare",
    "images": [
      "/images/products/cell-dna/main.png"
    ],
    "shortDescription": "High-performance professional anti-aging cosmetic formulation developed for pre- and post-procedure clinical care.",
    "description": "Cell DNA delivers pharmaceutical-grade actives specifically formulated in Spain to maintain barrier homeostasis and optimize aesthetic outcomes.",
    "technology": "Advanced topical delivery system targeting anti-aging skin parameters.",
    "application": "Apply to clean skin according to clinical aesthetic protocol.",
    "origin": "Barcelona, Spain",
    "grade": "Dermaceutical Grade",
    "sterilization": "Cosmetic GMP ISO 22716",
    "endotoxinLevel": "N/A (Topical formulation)",
    "flaggedForReview": false,
    "specifications": {
      "origin": "Barcelona, Spain",
      "grade": "Dermaceutical Grade",
      "sterilization": "Cosmetic GMP ISO 22716",
      "endotoxinLevel": "N/A (Topical formulation)"
    },
    "formulation": "Cell DNA delivers pharmaceutical-grade actives specifically formulated in Spain to maintain barrier homeostasis and optimize aesthetic outcomes.",
    "ingredients": "Clinical Monograph Batch Release (Detailed active compound profile provided upon verified medical request)",
    "primaryImage": "/images/products/cell-dna/main.png",
    "altText": "Cell DNA - Cosmetics Cosmetics clinical aesthetic formulation"
  },
  {
    "id": "cosmetic-anti-aging-collagen-elastin-gel",
    "slug": "cosmetic-anti-aging-collagen-elastin-gel",
    "name": "Collagen & Elastin Gel",
    "category": "Cosmetics",
    "subcategory": "Cosmetics",
    "format": "Clinical Skincare",
    "images": [
      "/images/products/collagen-elastin-gel/main.png"
    ],
    "shortDescription": "High-performance professional anti-aging cosmetic formulation developed for pre- and post-procedure clinical care.",
    "description": "Collagen & Elastin Gel delivers pharmaceutical-grade actives specifically formulated in Spain to maintain barrier homeostasis and optimize aesthetic outcomes.",
    "technology": "Advanced topical delivery system targeting anti-aging skin parameters.",
    "application": "Apply to clean skin according to clinical aesthetic protocol.",
    "origin": "Barcelona, Spain",
    "grade": "Dermaceutical Grade",
    "sterilization": "Cosmetic GMP ISO 22716",
    "endotoxinLevel": "N/A (Topical formulation)",
    "flaggedForReview": false,
    "specifications": {
      "origin": "Barcelona, Spain",
      "grade": "Dermaceutical Grade",
      "sterilization": "Cosmetic GMP ISO 22716",
      "endotoxinLevel": "N/A (Topical formulation)"
    },
    "formulation": "Collagen & Elastin Gel delivers pharmaceutical-grade actives specifically formulated in Spain to maintain barrier homeostasis and optimize aesthetic outcomes.",
    "ingredients": "Hydrolyzed Marine Collagen, Hydrolyzed Elastin, Hyaluronic Acid",
    "primaryImage": "/images/products/collagen-elastin-gel/main.png",
    "altText": "Collagen & Elastin Gel - Cosmetics Cosmetics clinical aesthetic formulation"
  },
  {
    "id": "cosmetic-anti-aging-dna-protection",
    "slug": "cosmetic-anti-aging-dna-protection",
    "name": "DNA Protection",
    "category": "Cosmetics",
    "subcategory": "Cosmetics",
    "format": "Clinical Skincare",
    "images": [
      "/images/products/dna-protection/main.png",
      "/images/products/dna-protection/detail-01.png"
    ],
    "shortDescription": "High-performance professional anti-aging cosmetic formulation developed for pre- and post-procedure clinical care.",
    "description": "DNA Protection delivers pharmaceutical-grade actives specifically formulated in Spain to maintain barrier homeostasis and optimize aesthetic outcomes.",
    "technology": "Advanced topical delivery system targeting anti-aging skin parameters.",
    "application": "Apply to clean skin according to clinical aesthetic protocol.",
    "origin": "Barcelona, Spain",
    "grade": "Dermaceutical Grade",
    "sterilization": "Cosmetic GMP ISO 22716",
    "endotoxinLevel": "N/A (Topical formulation)",
    "flaggedForReview": false,
    "specifications": {
      "origin": "Barcelona, Spain",
      "grade": "Dermaceutical Grade",
      "sterilization": "Cosmetic GMP ISO 22716",
      "endotoxinLevel": "N/A (Topical formulation)"
    },
    "formulation": "DNA Protection delivers pharmaceutical-grade actives specifically formulated in Spain to maintain barrier homeostasis and optimize aesthetic outcomes.",
    "ingredients": "Clinical Monograph Batch Release (Detailed active compound profile provided upon verified medical request)",
    "primaryImage": "/images/products/dna-protection/main.png",
    "altText": "DNA Protection - Cosmetics Cosmetics clinical aesthetic formulation"
  },
  {
    "id": "cosmetic-anti-aging-exo-age",
    "slug": "cosmetic-anti-aging-exo-age",
    "name": "Exo-Age",
    "category": "Cosmetics",
    "subcategory": "Cosmetics",
    "format": "Clinical Skincare",
    "images": [
      "/images/products/exo-age/main.png"
    ],
    "shortDescription": "High-performance professional anti-aging cosmetic formulation developed for pre- and post-procedure clinical care.",
    "description": "Exo-Age delivers pharmaceutical-grade actives specifically formulated in Spain to maintain barrier homeostasis and optimize aesthetic outcomes.",
    "technology": "Advanced topical delivery system targeting anti-aging skin parameters.",
    "application": "Apply to clean skin according to clinical aesthetic protocol.",
    "origin": "Barcelona, Spain",
    "grade": "Dermaceutical Grade",
    "sterilization": "Cosmetic GMP ISO 22716",
    "endotoxinLevel": "N/A (Topical formulation)",
    "flaggedForReview": false,
    "specifications": {
      "origin": "Barcelona, Spain",
      "grade": "Dermaceutical Grade",
      "sterilization": "Cosmetic GMP ISO 22716",
      "endotoxinLevel": "N/A (Topical formulation)"
    },
    "formulation": "Exo-Age delivers pharmaceutical-grade actives specifically formulated in Spain to maintain barrier homeostasis and optimize aesthetic outcomes.",
    "ingredients": "Clinical Monograph Batch Release (Detailed active compound profile provided upon verified medical request)",
    "primaryImage": "/images/products/exo-age/main.png",
    "altText": "Exo-Age - Cosmetics Cosmetics clinical aesthetic formulation"
  },
  {
    "id": "cosmetic-anti-aging-firm-age",
    "slug": "cosmetic-anti-aging-firm-age",
    "name": "Firm Age",
    "category": "Cosmetics",
    "subcategory": "Cosmetics",
    "format": "Clinical Skincare",
    "images": [
      "/images/products/firm-age/main.png"
    ],
    "shortDescription": "High-performance professional anti-aging cosmetic formulation developed for pre- and post-procedure clinical care.",
    "description": "Firm Age delivers pharmaceutical-grade actives specifically formulated in Spain to maintain barrier homeostasis and optimize aesthetic outcomes.",
    "technology": "Advanced topical delivery system targeting anti-aging skin parameters.",
    "application": "Apply to clean skin according to clinical aesthetic protocol.",
    "origin": "Barcelona, Spain",
    "grade": "Dermaceutical Grade",
    "sterilization": "Cosmetic GMP ISO 22716",
    "endotoxinLevel": "N/A (Topical formulation)",
    "flaggedForReview": true,
    "reviewReason": "Similarity with Firm Age vs Firming Age; please confirm whether distinct or formula iteration.",
    "specifications": {
      "origin": "Barcelona, Spain",
      "grade": "Dermaceutical Grade",
      "sterilization": "Cosmetic GMP ISO 22716",
      "endotoxinLevel": "N/A (Topical formulation)"
    },
    "formulation": "Firm Age delivers pharmaceutical-grade actives specifically formulated in Spain to maintain barrier homeostasis and optimize aesthetic outcomes.",
    "ingredients": "Clinical Monograph Batch Release (Detailed active compound profile provided upon verified medical request)",
    "primaryImage": "/images/products/firm-age/main.png",
    "altText": "Firm Age - Cosmetics Cosmetics clinical aesthetic formulation"
  },
  {
    "id": "cosmetic-anti-aging-firming-age",
    "slug": "cosmetic-anti-aging-firming-age",
    "name": "Firming Age",
    "category": "Cosmetics",
    "subcategory": "Cosmetics",
    "format": "Clinical Skincare",
    "images": [
      "/images/products/firming-age/main.png"
    ],
    "shortDescription": "High-performance professional anti-aging cosmetic formulation developed for pre- and post-procedure clinical care.",
    "description": "Firming Age delivers pharmaceutical-grade actives specifically formulated in Spain to maintain barrier homeostasis and optimize aesthetic outcomes.",
    "technology": "Advanced topical delivery system targeting anti-aging skin parameters.",
    "application": "Apply to clean skin according to clinical aesthetic protocol.",
    "origin": "Barcelona, Spain",
    "grade": "Dermaceutical Grade",
    "sterilization": "Cosmetic GMP ISO 22716",
    "endotoxinLevel": "N/A (Topical formulation)",
    "flaggedForReview": true,
    "reviewReason": "Similarity with Firm Age vs Firming Age; please confirm whether distinct or formula iteration.",
    "specifications": {
      "origin": "Barcelona, Spain",
      "grade": "Dermaceutical Grade",
      "sterilization": "Cosmetic GMP ISO 22716",
      "endotoxinLevel": "N/A (Topical formulation)"
    },
    "formulation": "Firming Age delivers pharmaceutical-grade actives specifically formulated in Spain to maintain barrier homeostasis and optimize aesthetic outcomes.",
    "ingredients": "Clinical Monograph Batch Release (Detailed active compound profile provided upon verified medical request)",
    "primaryImage": "/images/products/firming-age/main.png",
    "altText": "Firming Age - Cosmetics Cosmetics clinical aesthetic formulation"
  },
  {
    "id": "cosmetic-anti-aging-glowy-age",
    "slug": "cosmetic-anti-aging-glowy-age",
    "name": "Glowy Age",
    "category": "Cosmetics",
    "subcategory": "Cosmetics",
    "format": "Clinical Skincare",
    "images": [
      "/images/products/glowy-age/main.png"
    ],
    "shortDescription": "High-performance professional anti-aging cosmetic formulation developed for pre- and post-procedure clinical care.",
    "description": "Glowy Age delivers pharmaceutical-grade actives specifically formulated in Spain to maintain barrier homeostasis and optimize aesthetic outcomes.",
    "technology": "Advanced topical delivery system targeting anti-aging skin parameters.",
    "application": "Apply to clean skin according to clinical aesthetic protocol.",
    "origin": "Barcelona, Spain",
    "grade": "Dermaceutical Grade",
    "sterilization": "Cosmetic GMP ISO 22716",
    "endotoxinLevel": "N/A (Topical formulation)",
    "flaggedForReview": false,
    "specifications": {
      "origin": "Barcelona, Spain",
      "grade": "Dermaceutical Grade",
      "sterilization": "Cosmetic GMP ISO 22716",
      "endotoxinLevel": "N/A (Topical formulation)"
    },
    "formulation": "Glowy Age delivers pharmaceutical-grade actives specifically formulated in Spain to maintain barrier homeostasis and optimize aesthetic outcomes.",
    "ingredients": "Clinical Monograph Batch Release (Detailed active compound profile provided upon verified medical request)",
    "primaryImage": "/images/products/glowy-age/main.png",
    "altText": "Glowy Age - Cosmetics Cosmetics clinical aesthetic formulation"
  },
  {
    "id": "cosmetic-anti-aging-juvenile",
    "slug": "cosmetic-anti-aging-juvenile",
    "name": "Juvenile",
    "category": "Cosmetics",
    "subcategory": "Cosmetics",
    "format": "Clinical Skincare",
    "images": [
      "/images/products/juvenile/main.png"
    ],
    "shortDescription": "High-performance professional anti-aging cosmetic formulation developed for pre- and post-procedure clinical care.",
    "description": "Juvenile delivers pharmaceutical-grade actives specifically formulated in Spain to maintain barrier homeostasis and optimize aesthetic outcomes.",
    "technology": "Advanced topical delivery system targeting anti-aging skin parameters.",
    "application": "Apply to clean skin according to clinical aesthetic protocol.",
    "origin": "Barcelona, Spain",
    "grade": "Dermaceutical Grade",
    "sterilization": "Cosmetic GMP ISO 22716",
    "endotoxinLevel": "N/A (Topical formulation)",
    "flaggedForReview": false,
    "specifications": {
      "origin": "Barcelona, Spain",
      "grade": "Dermaceutical Grade",
      "sterilization": "Cosmetic GMP ISO 22716",
      "endotoxinLevel": "N/A (Topical formulation)"
    },
    "formulation": "Juvenile delivers pharmaceutical-grade actives specifically formulated in Spain to maintain barrier homeostasis and optimize aesthetic outcomes.",
    "ingredients": "Clinical Monograph Batch Release (Detailed active compound profile provided upon verified medical request)",
    "primaryImage": "/images/products/juvenile/main.png",
    "altText": "Juvenile - Cosmetics Cosmetics clinical aesthetic formulation"
  },
  {
    "id": "cosmetic-anti-aging-light-on",
    "slug": "cosmetic-anti-aging-light-on",
    "name": "Light On",
    "category": "Cosmetics",
    "subcategory": "Cosmetics",
    "format": "Clinical Skincare",
    "images": [
      "/images/products/light-on/main.png",
      "/images/products/light-on/detail-01.png"
    ],
    "shortDescription": "High-performance professional anti-aging cosmetic formulation developed for pre- and post-procedure clinical care.",
    "description": "Light On delivers pharmaceutical-grade actives specifically formulated in Spain to maintain barrier homeostasis and optimize aesthetic outcomes.",
    "technology": "Advanced topical delivery system targeting anti-aging skin parameters.",
    "application": "Apply to clean skin according to clinical aesthetic protocol.",
    "origin": "Barcelona, Spain",
    "grade": "Dermaceutical Grade",
    "sterilization": "Cosmetic GMP ISO 22716",
    "endotoxinLevel": "N/A (Topical formulation)",
    "flaggedForReview": false,
    "specifications": {
      "origin": "Barcelona, Spain",
      "grade": "Dermaceutical Grade",
      "sterilization": "Cosmetic GMP ISO 22716",
      "endotoxinLevel": "N/A (Topical formulation)"
    },
    "formulation": "Light On delivers pharmaceutical-grade actives specifically formulated in Spain to maintain barrier homeostasis and optimize aesthetic outcomes.",
    "ingredients": "Clinical Monograph Batch Release (Detailed active compound profile provided upon verified medical request)",
    "primaryImage": "/images/products/light-on/main.png",
    "altText": "Light On - Cosmetics Cosmetics clinical aesthetic formulation"
  },
  {
    "id": "cosmetic-anti-aging-max-lifting",
    "slug": "cosmetic-anti-aging-max-lifting",
    "name": "Max Lifting",
    "category": "Cosmetics",
    "subcategory": "Cosmetics",
    "format": "Clinical Skincare",
    "images": [
      "/images/products/max-lifting/main.png"
    ],
    "shortDescription": "High-performance professional anti-aging cosmetic formulation developed for pre- and post-procedure clinical care.",
    "description": "Max Lifting delivers pharmaceutical-grade actives specifically formulated in Spain to maintain barrier homeostasis and optimize aesthetic outcomes.",
    "technology": "Advanced topical delivery system targeting anti-aging skin parameters.",
    "application": "Apply to clean skin according to clinical aesthetic protocol.",
    "origin": "Barcelona, Spain",
    "grade": "Dermaceutical Grade",
    "sterilization": "Cosmetic GMP ISO 22716",
    "endotoxinLevel": "N/A (Topical formulation)",
    "flaggedForReview": false,
    "specifications": {
      "origin": "Barcelona, Spain",
      "grade": "Dermaceutical Grade",
      "sterilization": "Cosmetic GMP ISO 22716",
      "endotoxinLevel": "N/A (Topical formulation)"
    },
    "formulation": "Max Lifting delivers pharmaceutical-grade actives specifically formulated in Spain to maintain barrier homeostasis and optimize aesthetic outcomes.",
    "ingredients": "Clinical Monograph Batch Release (Detailed active compound profile provided upon verified medical request)",
    "primaryImage": "/images/products/max-lifting/main.png",
    "altText": "Max Lifting - Cosmetics Cosmetics clinical aesthetic formulation"
  },
  {
    "id": "cosmetic-anti-aging-night-age",
    "slug": "cosmetic-anti-aging-night-age",
    "name": "Night Age",
    "category": "Cosmetics",
    "subcategory": "Cosmetics",
    "format": "Clinical Skincare",
    "images": [
      "/images/products/night-age/main.png"
    ],
    "shortDescription": "High-performance professional anti-aging cosmetic formulation developed for pre- and post-procedure clinical care.",
    "description": "Night Age delivers pharmaceutical-grade actives specifically formulated in Spain to maintain barrier homeostasis and optimize aesthetic outcomes.",
    "technology": "Advanced topical delivery system targeting anti-aging skin parameters.",
    "application": "Apply to clean skin according to clinical aesthetic protocol.",
    "origin": "Barcelona, Spain",
    "grade": "Dermaceutical Grade",
    "sterilization": "Cosmetic GMP ISO 22716",
    "endotoxinLevel": "N/A (Topical formulation)",
    "flaggedForReview": false,
    "specifications": {
      "origin": "Barcelona, Spain",
      "grade": "Dermaceutical Grade",
      "sterilization": "Cosmetic GMP ISO 22716",
      "endotoxinLevel": "N/A (Topical formulation)"
    },
    "formulation": "Night Age delivers pharmaceutical-grade actives specifically formulated in Spain to maintain barrier homeostasis and optimize aesthetic outcomes.",
    "ingredients": "Clinical Monograph Batch Release (Detailed active compound profile provided upon verified medical request)",
    "primaryImage": "/images/products/night-age/main.png",
    "altText": "Night Age - Cosmetics Cosmetics clinical aesthetic formulation"
  },
  {
    "id": "cosmetic-anti-aging-nourishing",
    "slug": "cosmetic-anti-aging-nourishing",
    "name": "Nourishing",
    "category": "Cosmetics",
    "subcategory": "Cosmetics",
    "format": "Clinical Skincare",
    "images": [
      "/images/products/nourishing/main.png",
      "/images/products/nourishing/detail-01.png"
    ],
    "shortDescription": "High-performance professional anti-aging cosmetic formulation developed for pre- and post-procedure clinical care.",
    "description": "Nourishing delivers pharmaceutical-grade actives specifically formulated in Spain to maintain barrier homeostasis and optimize aesthetic outcomes.",
    "technology": "Advanced topical delivery system targeting anti-aging skin parameters.",
    "application": "Apply to clean skin according to clinical aesthetic protocol.",
    "origin": "Barcelona, Spain",
    "grade": "Dermaceutical Grade",
    "sterilization": "Cosmetic GMP ISO 22716",
    "endotoxinLevel": "N/A (Topical formulation)",
    "flaggedForReview": false,
    "specifications": {
      "origin": "Barcelona, Spain",
      "grade": "Dermaceutical Grade",
      "sterilization": "Cosmetic GMP ISO 22716",
      "endotoxinLevel": "N/A (Topical formulation)"
    },
    "formulation": "Nourishing delivers pharmaceutical-grade actives specifically formulated in Spain to maintain barrier homeostasis and optimize aesthetic outcomes.",
    "ingredients": "Clinical Monograph Batch Release (Detailed active compound profile provided upon verified medical request)",
    "primaryImage": "/images/products/nourishing/main.png",
    "altText": "Nourishing - Cosmetics Cosmetics clinical aesthetic formulation"
  },
  {
    "id": "cosmetic-anti-aging-pores-control",
    "slug": "cosmetic-anti-aging-pores-control",
    "name": "Pores Control",
    "category": "Cosmetics",
    "subcategory": "Cosmetics",
    "format": "Clinical Skincare",
    "images": [
      "/images/products/pores-control/main.png"
    ],
    "shortDescription": "High-performance professional anti-aging cosmetic formulation developed for pre- and post-procedure clinical care.",
    "description": "Pores Control delivers pharmaceutical-grade actives specifically formulated in Spain to maintain barrier homeostasis and optimize aesthetic outcomes.",
    "technology": "Advanced topical delivery system targeting anti-aging skin parameters.",
    "application": "Apply to clean skin according to clinical aesthetic protocol.",
    "origin": "Barcelona, Spain",
    "grade": "Dermaceutical Grade",
    "sterilization": "Cosmetic GMP ISO 22716",
    "endotoxinLevel": "N/A (Topical formulation)",
    "flaggedForReview": false,
    "specifications": {
      "origin": "Barcelona, Spain",
      "grade": "Dermaceutical Grade",
      "sterilization": "Cosmetic GMP ISO 22716",
      "endotoxinLevel": "N/A (Topical formulation)"
    },
    "formulation": "Pores Control delivers pharmaceutical-grade actives specifically formulated in Spain to maintain barrier homeostasis and optimize aesthetic outcomes.",
    "ingredients": "Clinical Monograph Batch Release (Detailed active compound profile provided upon verified medical request)",
    "primaryImage": "/images/products/pores-control/main.png",
    "altText": "Pores Control - Cosmetics Cosmetics clinical aesthetic formulation"
  },
  {
    "id": "cosmetic-anti-aging-pro-age",
    "slug": "cosmetic-anti-aging-pro-age",
    "name": "Pro Age",
    "category": "Cosmetics",
    "subcategory": "Cosmetics",
    "format": "Clinical Skincare",
    "images": [
      "/images/products/pro-age/main.png"
    ],
    "shortDescription": "High-performance professional anti-aging cosmetic formulation developed for pre- and post-procedure clinical care.",
    "description": "Pro Age delivers pharmaceutical-grade actives specifically formulated in Spain to maintain barrier homeostasis and optimize aesthetic outcomes.",
    "technology": "Advanced topical delivery system targeting anti-aging skin parameters.",
    "application": "Apply to clean skin according to clinical aesthetic protocol.",
    "origin": "Barcelona, Spain",
    "grade": "Dermaceutical Grade",
    "sterilization": "Cosmetic GMP ISO 22716",
    "endotoxinLevel": "N/A (Topical formulation)",
    "flaggedForReview": false,
    "specifications": {
      "origin": "Barcelona, Spain",
      "grade": "Dermaceutical Grade",
      "sterilization": "Cosmetic GMP ISO 22716",
      "endotoxinLevel": "N/A (Topical formulation)"
    },
    "formulation": "Pro Age delivers pharmaceutical-grade actives specifically formulated in Spain to maintain barrier homeostasis and optimize aesthetic outcomes.",
    "ingredients": "Clinical Monograph Batch Release (Detailed active compound profile provided upon verified medical request)",
    "primaryImage": "/images/products/pro-age/main.png",
    "altText": "Pro Age - Cosmetics Cosmetics clinical aesthetic formulation"
  },
  {
    "id": "cosmetic-anti-aging-rebuild-skin",
    "slug": "cosmetic-anti-aging-rebuild-skin",
    "name": "Rebuild Skin",
    "category": "Cosmetics",
    "subcategory": "Cosmetics",
    "format": "Clinical Skincare",
    "images": [
      "/images/products/rebuild-skin/main.png"
    ],
    "shortDescription": "High-performance professional anti-aging cosmetic formulation developed for pre- and post-procedure clinical care.",
    "description": "Rebuild Skin delivers pharmaceutical-grade actives specifically formulated in Spain to maintain barrier homeostasis and optimize aesthetic outcomes.",
    "technology": "Advanced topical delivery system targeting anti-aging skin parameters.",
    "application": "Apply to clean skin according to clinical aesthetic protocol.",
    "origin": "Barcelona, Spain",
    "grade": "Dermaceutical Grade",
    "sterilization": "Cosmetic GMP ISO 22716",
    "endotoxinLevel": "N/A (Topical formulation)",
    "flaggedForReview": false,
    "specifications": {
      "origin": "Barcelona, Spain",
      "grade": "Dermaceutical Grade",
      "sterilization": "Cosmetic GMP ISO 22716",
      "endotoxinLevel": "N/A (Topical formulation)"
    },
    "formulation": "Rebuild Skin delivers pharmaceutical-grade actives specifically formulated in Spain to maintain barrier homeostasis and optimize aesthetic outcomes.",
    "ingredients": "Clinical Monograph Batch Release (Detailed active compound profile provided upon verified medical request)",
    "primaryImage": "/images/products/rebuild-skin/main.png",
    "altText": "Rebuild Skin - Cosmetics Cosmetics clinical aesthetic formulation"
  },
  {
    "id": "cosmetic-anti-aging-restoring-skin",
    "slug": "cosmetic-anti-aging-restoring-skin",
    "name": "Restoring Skin",
    "category": "Cosmetics",
    "subcategory": "Cosmetics",
    "format": "Clinical Skincare",
    "images": [
      "/images/products/restoring-skin/main.png"
    ],
    "shortDescription": "High-performance professional anti-aging cosmetic formulation developed for pre- and post-procedure clinical care.",
    "description": "Restoring Skin delivers pharmaceutical-grade actives specifically formulated in Spain to maintain barrier homeostasis and optimize aesthetic outcomes.",
    "technology": "Advanced topical delivery system targeting anti-aging skin parameters.",
    "application": "Apply to clean skin according to clinical aesthetic protocol.",
    "origin": "Barcelona, Spain",
    "grade": "Dermaceutical Grade",
    "sterilization": "Cosmetic GMP ISO 22716",
    "endotoxinLevel": "N/A (Topical formulation)",
    "flaggedForReview": false,
    "specifications": {
      "origin": "Barcelona, Spain",
      "grade": "Dermaceutical Grade",
      "sterilization": "Cosmetic GMP ISO 22716",
      "endotoxinLevel": "N/A (Topical formulation)"
    },
    "formulation": "Restoring Skin delivers pharmaceutical-grade actives specifically formulated in Spain to maintain barrier homeostasis and optimize aesthetic outcomes.",
    "ingredients": "Clinical Monograph Batch Release (Detailed active compound profile provided upon verified medical request)",
    "primaryImage": "/images/products/restoring-skin/main.png",
    "altText": "Restoring Skin - Cosmetics Cosmetics clinical aesthetic formulation"
  },
  {
    "id": "cosmetic-anti-aging-retinol",
    "slug": "cosmetic-anti-aging-retinol",
    "name": "Retinol",
    "category": "Cosmetics",
    "subcategory": "Cosmetics",
    "format": "Clinical Skincare",
    "images": [
      "/images/products/retinol/main.png"
    ],
    "shortDescription": "High-performance professional anti-aging cosmetic formulation developed for pre- and post-procedure clinical care.",
    "description": "Retinol delivers pharmaceutical-grade actives specifically formulated in Spain to maintain barrier homeostasis and optimize aesthetic outcomes.",
    "technology": "Advanced topical delivery system targeting anti-aging skin parameters.",
    "application": "Apply to clean skin according to clinical aesthetic protocol.",
    "origin": "Barcelona, Spain",
    "grade": "Dermaceutical Grade",
    "sterilization": "Cosmetic GMP ISO 22716",
    "endotoxinLevel": "N/A (Topical formulation)",
    "flaggedForReview": false,
    "specifications": {
      "origin": "Barcelona, Spain",
      "grade": "Dermaceutical Grade",
      "sterilization": "Cosmetic GMP ISO 22716",
      "endotoxinLevel": "N/A (Topical formulation)"
    },
    "formulation": "Retinol delivers pharmaceutical-grade actives specifically formulated in Spain to maintain barrier homeostasis and optimize aesthetic outcomes.",
    "ingredients": "Encapsulated Retinol (0.5%), Protective Liposomal Carrier",
    "primaryImage": "/images/products/retinol/main.png",
    "altText": "Retinol - Cosmetics Cosmetics clinical aesthetic formulation"
  },
  {
    "id": "cosmetic-anti-aging-rose-lip",
    "slug": "cosmetic-anti-aging-rose-lip",
    "name": "Rose Lip",
    "category": "Cosmetics",
    "subcategory": "Cosmetics",
    "format": "Clinical Skincare",
    "images": [
      "/images/products/rose-lip/main.png"
    ],
    "shortDescription": "High-performance professional anti-aging cosmetic formulation developed for pre- and post-procedure clinical care.",
    "description": "Rose Lip delivers pharmaceutical-grade actives specifically formulated in Spain to maintain barrier homeostasis and optimize aesthetic outcomes.",
    "technology": "Advanced topical delivery system targeting anti-aging skin parameters.",
    "application": "Apply to clean skin according to clinical aesthetic protocol.",
    "origin": "Barcelona, Spain",
    "grade": "Dermaceutical Grade",
    "sterilization": "Cosmetic GMP ISO 22716",
    "endotoxinLevel": "N/A (Topical formulation)",
    "flaggedForReview": false,
    "specifications": {
      "origin": "Barcelona, Spain",
      "grade": "Dermaceutical Grade",
      "sterilization": "Cosmetic GMP ISO 22716",
      "endotoxinLevel": "N/A (Topical formulation)"
    },
    "formulation": "Rose Lip delivers pharmaceutical-grade actives specifically formulated in Spain to maintain barrier homeostasis and optimize aesthetic outcomes.",
    "ingredients": "Biomimetic Peptides, Dermal Conditioning Lipids",
    "primaryImage": "/images/products/rose-lip/main.png",
    "altText": "Rose Lip - Cosmetics Cosmetics clinical aesthetic formulation"
  },
  {
    "id": "cosmetic-anti-aging-slow-age",
    "slug": "cosmetic-anti-aging-slow-age",
    "name": "Slow Age",
    "category": "Cosmetics",
    "subcategory": "Cosmetics",
    "format": "Clinical Skincare",
    "images": [
      "/images/products/slow-age/main.png"
    ],
    "shortDescription": "High-performance professional anti-aging cosmetic formulation developed for pre- and post-procedure clinical care.",
    "description": "Slow Age delivers pharmaceutical-grade actives specifically formulated in Spain to maintain barrier homeostasis and optimize aesthetic outcomes.",
    "technology": "Advanced topical delivery system targeting anti-aging skin parameters.",
    "application": "Apply to clean skin according to clinical aesthetic protocol.",
    "origin": "Barcelona, Spain",
    "grade": "Dermaceutical Grade",
    "sterilization": "Cosmetic GMP ISO 22716",
    "endotoxinLevel": "N/A (Topical formulation)",
    "flaggedForReview": false,
    "specifications": {
      "origin": "Barcelona, Spain",
      "grade": "Dermaceutical Grade",
      "sterilization": "Cosmetic GMP ISO 22716",
      "endotoxinLevel": "N/A (Topical formulation)"
    },
    "formulation": "Slow Age delivers pharmaceutical-grade actives specifically formulated in Spain to maintain barrier homeostasis and optimize aesthetic outcomes.",
    "ingredients": "Clinical Monograph Batch Release (Detailed active compound profile provided upon verified medical request)",
    "primaryImage": "/images/products/slow-age/main.png",
    "altText": "Slow Age - Cosmetics Cosmetics clinical aesthetic formulation"
  },
  {
    "id": "cosmetic-anti-aging-super-firmness",
    "slug": "cosmetic-anti-aging-super-firmness",
    "name": "Super Firmness",
    "category": "Cosmetics",
    "subcategory": "Cosmetics",
    "format": "Clinical Skincare",
    "images": [
      "/images/products/super-firmness/main.png",
      "/images/products/super-firmness/detail-01.png"
    ],
    "shortDescription": "High-performance professional anti-aging cosmetic formulation developed for pre- and post-procedure clinical care.",
    "description": "Super Firmness delivers pharmaceutical-grade actives specifically formulated in Spain to maintain barrier homeostasis and optimize aesthetic outcomes.",
    "technology": "Advanced topical delivery system targeting anti-aging skin parameters.",
    "application": "Apply to clean skin according to clinical aesthetic protocol.",
    "origin": "Barcelona, Spain",
    "grade": "Dermaceutical Grade",
    "sterilization": "Cosmetic GMP ISO 22716",
    "endotoxinLevel": "N/A (Topical formulation)",
    "flaggedForReview": false,
    "specifications": {
      "origin": "Barcelona, Spain",
      "grade": "Dermaceutical Grade",
      "sterilization": "Cosmetic GMP ISO 22716",
      "endotoxinLevel": "N/A (Topical formulation)"
    },
    "formulation": "Super Firmness delivers pharmaceutical-grade actives specifically formulated in Spain to maintain barrier homeostasis and optimize aesthetic outcomes.",
    "ingredients": "Clinical Monograph Batch Release (Detailed active compound profile provided upon verified medical request)",
    "primaryImage": "/images/products/super-firmness/main.png",
    "altText": "Super Firmness - Cosmetics Cosmetics clinical aesthetic formulation"
  },
  {
    "id": "cosmetic-anti-aging-v-shaped",
    "slug": "cosmetic-anti-aging-v-shaped",
    "name": "V Shaped",
    "category": "Cosmetics",
    "subcategory": "Cosmetics",
    "format": "Clinical Skincare",
    "images": [
      "/images/products/v-shaped/main.png"
    ],
    "shortDescription": "High-performance professional anti-aging cosmetic formulation developed for pre- and post-procedure clinical care.",
    "description": "V Shaped delivers pharmaceutical-grade actives specifically formulated in Spain to maintain barrier homeostasis and optimize aesthetic outcomes.",
    "technology": "Advanced topical delivery system targeting anti-aging skin parameters.",
    "application": "Apply to clean skin according to clinical aesthetic protocol.",
    "origin": "Barcelona, Spain",
    "grade": "Dermaceutical Grade",
    "sterilization": "Cosmetic GMP ISO 22716",
    "endotoxinLevel": "N/A (Topical formulation)",
    "flaggedForReview": false,
    "specifications": {
      "origin": "Barcelona, Spain",
      "grade": "Dermaceutical Grade",
      "sterilization": "Cosmetic GMP ISO 22716",
      "endotoxinLevel": "N/A (Topical formulation)"
    },
    "formulation": "V Shaped delivers pharmaceutical-grade actives specifically formulated in Spain to maintain barrier homeostasis and optimize aesthetic outcomes.",
    "ingredients": "Clinical Monograph Batch Release (Detailed active compound profile provided upon verified medical request)",
    "primaryImage": "/images/products/v-shaped/main.png",
    "altText": "V Shaped - Cosmetics Cosmetics clinical aesthetic formulation"
  },
  {
    "id": "cosmetic-anti-aging-valvet",
    "slug": "cosmetic-anti-aging-valvet",
    "name": "Valvet",
    "category": "Cosmetics",
    "subcategory": "Cosmetics",
    "format": "Clinical Skincare",
    "images": [
      "/images/products/valvet/main.png"
    ],
    "shortDescription": "High-performance professional anti-aging cosmetic formulation developed for pre- and post-procedure clinical care.",
    "description": "Valvet delivers pharmaceutical-grade actives specifically formulated in Spain to maintain barrier homeostasis and optimize aesthetic outcomes.",
    "technology": "Advanced topical delivery system targeting anti-aging skin parameters.",
    "application": "Apply to clean skin according to clinical aesthetic protocol.",
    "origin": "Barcelona, Spain",
    "grade": "Dermaceutical Grade",
    "sterilization": "Cosmetic GMP ISO 22716",
    "endotoxinLevel": "N/A (Topical formulation)",
    "flaggedForReview": false,
    "specifications": {
      "origin": "Barcelona, Spain",
      "grade": "Dermaceutical Grade",
      "sterilization": "Cosmetic GMP ISO 22716",
      "endotoxinLevel": "N/A (Topical formulation)"
    },
    "formulation": "Valvet delivers pharmaceutical-grade actives specifically formulated in Spain to maintain barrier homeostasis and optimize aesthetic outcomes.",
    "ingredients": "Clinical Monograph Batch Release (Detailed active compound profile provided upon verified medical request)",
    "primaryImage": "/images/products/valvet/main.png",
    "altText": "Valvet - Cosmetics Cosmetics clinical aesthetic formulation"
  },
  {
    "id": "cosmetic-anti-aging-white-sea-firming-smoothing-skin",
    "slug": "cosmetic-anti-aging-white-sea-firming-smoothing-skin",
    "name": "White Sea Firming & Smoothing Skin",
    "category": "Cosmetics",
    "subcategory": "Cosmetics",
    "format": "Clinical Skincare",
    "images": [
      "/images/products/white-sea-firming-smoothing-skin/main.png"
    ],
    "shortDescription": "High-performance professional anti-aging cosmetic formulation developed for pre- and post-procedure clinical care.",
    "description": "White Sea Firming & Smoothing Skin delivers pharmaceutical-grade actives specifically formulated in Spain to maintain barrier homeostasis and optimize aesthetic outcomes.",
    "technology": "Advanced topical delivery system targeting anti-aging skin parameters.",
    "application": "Apply to clean skin according to clinical aesthetic protocol.",
    "origin": "Barcelona, Spain",
    "grade": "Dermaceutical Grade",
    "sterilization": "Cosmetic GMP ISO 22716",
    "endotoxinLevel": "N/A (Topical formulation)",
    "flaggedForReview": false,
    "specifications": {
      "origin": "Barcelona, Spain",
      "grade": "Dermaceutical Grade",
      "sterilization": "Cosmetic GMP ISO 22716",
      "endotoxinLevel": "N/A (Topical formulation)"
    },
    "formulation": "White Sea Firming & Smoothing Skin delivers pharmaceutical-grade actives specifically formulated in Spain to maintain barrier homeostasis and optimize aesthetic outcomes.",
    "ingredients": "Clinical Monograph Batch Release (Detailed active compound profile provided upon verified medical request)",
    "primaryImage": "/images/products/white-sea-firming-smoothing-skin/main.png",
    "altText": "White Sea Firming & Smoothing Skin - Cosmetics Cosmetics clinical aesthetic formulation"
  },
  {
    "id": "cosmetic-brightening-aox-rosmarinus-serum",
    "slug": "cosmetic-brightening-aox-rosmarinus-serum",
    "name": "AOX Rosmarinus Serum",
    "category": "Cosmetics",
    "subcategory": "Cosmetics",
    "format": "Clinical Skincare",
    "images": [
      "/images/products/aox-rosmarinus-serum/main.png"
    ],
    "shortDescription": "High-performance professional brightening cosmetic formulation developed for pre- and post-procedure clinical care.",
    "description": "AOX Rosmarinus Serum delivers pharmaceutical-grade actives specifically formulated in Spain to maintain barrier homeostasis and optimize aesthetic outcomes.",
    "technology": "Advanced topical delivery system targeting brightening skin parameters.",
    "application": "Apply to clean skin according to clinical aesthetic protocol.",
    "origin": "Barcelona, Spain",
    "grade": "Dermaceutical Grade",
    "sterilization": "Cosmetic GMP ISO 22716",
    "endotoxinLevel": "N/A (Topical formulation)",
    "flaggedForReview": false,
    "specifications": {
      "origin": "Barcelona, Spain",
      "grade": "Dermaceutical Grade",
      "sterilization": "Cosmetic GMP ISO 22716",
      "endotoxinLevel": "N/A (Topical formulation)"
    },
    "formulation": "AOX Rosmarinus Serum delivers pharmaceutical-grade actives specifically formulated in Spain to maintain barrier homeostasis and optimize aesthetic outcomes.",
    "ingredients": "Rosmarinus Officinalis Extract, Superoxide Dismutase, Vitamin E",
    "primaryImage": "/images/products/aox-rosmarinus-serum/main.png",
    "altText": "AOX Rosmarinus Serum - Cosmetics Cosmetics clinical aesthetic formulation"
  },
  {
    "id": "cosmetic-brightening-azeloglicina-gel",
    "slug": "cosmetic-brightening-azeloglicina-gel",
    "name": "Azeloglicina Gel",
    "category": "Cosmetics",
    "subcategory": "Cosmetics",
    "format": "Clinical Skincare",
    "images": [
      "/images/products/azeloglicina-gel/main.png"
    ],
    "shortDescription": "High-performance professional brightening cosmetic formulation developed for pre- and post-procedure clinical care.",
    "description": "Azeloglicina Gel delivers pharmaceutical-grade actives specifically formulated in Spain to maintain barrier homeostasis and optimize aesthetic outcomes.",
    "technology": "Advanced topical delivery system targeting brightening skin parameters.",
    "application": "Apply to clean skin according to clinical aesthetic protocol.",
    "origin": "Barcelona, Spain",
    "grade": "Dermaceutical Grade",
    "sterilization": "Cosmetic GMP ISO 22716",
    "endotoxinLevel": "N/A (Topical formulation)",
    "flaggedForReview": false,
    "specifications": {
      "origin": "Barcelona, Spain",
      "grade": "Dermaceutical Grade",
      "sterilization": "Cosmetic GMP ISO 22716",
      "endotoxinLevel": "N/A (Topical formulation)"
    },
    "formulation": "Azeloglicina Gel delivers pharmaceutical-grade actives specifically formulated in Spain to maintain barrier homeostasis and optimize aesthetic outcomes.",
    "ingredients": "Clinical Monograph Batch Release (Detailed active compound profile provided upon verified medical request)",
    "primaryImage": "/images/products/azeloglicina-gel/main.png",
    "altText": "Azeloglicina Gel - Cosmetics Cosmetics clinical aesthetic formulation"
  },
  {
    "id": "cosmetic-brightening-blue-light-cream",
    "slug": "cosmetic-brightening-blue-light-cream",
    "name": "Blue Light Cream",
    "category": "Cosmetics",
    "subcategory": "Cosmetics",
    "format": "Clinical Skincare",
    "images": [
      "/images/products/blue-light-cream/main.png"
    ],
    "shortDescription": "High-performance professional brightening cosmetic formulation developed for pre- and post-procedure clinical care.",
    "description": "Blue Light Cream delivers pharmaceutical-grade actives specifically formulated in Spain to maintain barrier homeostasis and optimize aesthetic outcomes.",
    "technology": "Advanced topical delivery system targeting brightening skin parameters.",
    "application": "Apply to clean skin according to clinical aesthetic protocol.",
    "origin": "Barcelona, Spain",
    "grade": "Dermaceutical Grade",
    "sterilization": "Cosmetic GMP ISO 22716",
    "endotoxinLevel": "N/A (Topical formulation)",
    "flaggedForReview": false,
    "specifications": {
      "origin": "Barcelona, Spain",
      "grade": "Dermaceutical Grade",
      "sterilization": "Cosmetic GMP ISO 22716",
      "endotoxinLevel": "N/A (Topical formulation)"
    },
    "formulation": "Blue Light Cream delivers pharmaceutical-grade actives specifically formulated in Spain to maintain barrier homeostasis and optimize aesthetic outcomes.",
    "ingredients": "Clinical Monograph Batch Release (Detailed active compound profile provided upon verified medical request)",
    "primaryImage": "/images/products/blue-light-cream/main.png",
    "altText": "Blue Light Cream - Cosmetics Cosmetics clinical aesthetic formulation"
  },
  {
    "id": "cosmetic-brightening-curcumin-cream",
    "slug": "cosmetic-brightening-curcumin-cream",
    "name": "Curcumin Cream",
    "category": "Cosmetics",
    "subcategory": "Cosmetics",
    "format": "Clinical Skincare",
    "images": [
      "/images/products/curcumin-cream/main.png",
      "/images/products/curcumin-cream/detail-01.png"
    ],
    "shortDescription": "High-performance professional brightening cosmetic formulation developed for pre- and post-procedure clinical care.",
    "description": "Curcumin Cream delivers pharmaceutical-grade actives specifically formulated in Spain to maintain barrier homeostasis and optimize aesthetic outcomes.",
    "technology": "Advanced topical delivery system targeting brightening skin parameters.",
    "application": "Apply to clean skin according to clinical aesthetic protocol.",
    "origin": "Barcelona, Spain",
    "grade": "Dermaceutical Grade",
    "sterilization": "Cosmetic GMP ISO 22716",
    "endotoxinLevel": "N/A (Topical formulation)",
    "flaggedForReview": false,
    "specifications": {
      "origin": "Barcelona, Spain",
      "grade": "Dermaceutical Grade",
      "sterilization": "Cosmetic GMP ISO 22716",
      "endotoxinLevel": "N/A (Topical formulation)"
    },
    "formulation": "Curcumin Cream delivers pharmaceutical-grade actives specifically formulated in Spain to maintain barrier homeostasis and optimize aesthetic outcomes.",
    "ingredients": "Tetrahydrocurcumin, Vitamin E, Dermal Moisture Shield",
    "primaryImage": "/images/products/curcumin-cream/main.png",
    "altText": "Curcumin Cream - Cosmetics Cosmetics clinical aesthetic formulation"
  },
  {
    "id": "cosmetic-brightening-dna-protect-serum",
    "slug": "cosmetic-brightening-dna-protect-serum",
    "name": "DNA Protect Serum",
    "category": "Cosmetics",
    "subcategory": "Cosmetics",
    "format": "Clinical Skincare",
    "images": [
      "/images/products/dna-protect-serum/main.png"
    ],
    "shortDescription": "High-performance professional brightening cosmetic formulation developed for pre- and post-procedure clinical care.",
    "description": "DNA Protect Serum delivers pharmaceutical-grade actives specifically formulated in Spain to maintain barrier homeostasis and optimize aesthetic outcomes.",
    "technology": "Advanced topical delivery system targeting brightening skin parameters.",
    "application": "Apply to clean skin according to clinical aesthetic protocol.",
    "origin": "Barcelona, Spain",
    "grade": "Dermaceutical Grade",
    "sterilization": "Cosmetic GMP ISO 22716",
    "endotoxinLevel": "N/A (Topical formulation)",
    "flaggedForReview": false,
    "specifications": {
      "origin": "Barcelona, Spain",
      "grade": "Dermaceutical Grade",
      "sterilization": "Cosmetic GMP ISO 22716",
      "endotoxinLevel": "N/A (Topical formulation)"
    },
    "formulation": "DNA Protect Serum delivers pharmaceutical-grade actives specifically formulated in Spain to maintain barrier homeostasis and optimize aesthetic outcomes.",
    "ingredients": "Zinc Finger DNA Repair Enzyme Complex, Antioxidant Bio-Lipids",
    "primaryImage": "/images/products/dna-protect-serum/main.png",
    "altText": "DNA Protect Serum - Cosmetics Cosmetics clinical aesthetic formulation"
  },
  {
    "id": "cosmetic-brightening-dna-protection-gel",
    "slug": "cosmetic-brightening-dna-protection-gel",
    "name": "DNA Protection Gel",
    "category": "Cosmetics",
    "subcategory": "Cosmetics",
    "format": "Clinical Skincare",
    "images": [
      "/images/products/dna-protection-gel/main.png"
    ],
    "shortDescription": "High-performance professional brightening cosmetic formulation developed for pre- and post-procedure clinical care.",
    "description": "DNA Protection Gel delivers pharmaceutical-grade actives specifically formulated in Spain to maintain barrier homeostasis and optimize aesthetic outcomes.",
    "technology": "Advanced topical delivery system targeting brightening skin parameters.",
    "application": "Apply to clean skin according to clinical aesthetic protocol.",
    "origin": "Barcelona, Spain",
    "grade": "Dermaceutical Grade",
    "sterilization": "Cosmetic GMP ISO 22716",
    "endotoxinLevel": "N/A (Topical formulation)",
    "flaggedForReview": false,
    "specifications": {
      "origin": "Barcelona, Spain",
      "grade": "Dermaceutical Grade",
      "sterilization": "Cosmetic GMP ISO 22716",
      "endotoxinLevel": "N/A (Topical formulation)"
    },
    "formulation": "DNA Protection Gel delivers pharmaceutical-grade actives specifically formulated in Spain to maintain barrier homeostasis and optimize aesthetic outcomes.",
    "ingredients": "Clinical Monograph Batch Release (Detailed active compound profile provided upon verified medical request)",
    "primaryImage": "/images/products/dna-protection-gel/main.png",
    "altText": "DNA Protection Gel - Cosmetics Cosmetics clinical aesthetic formulation"
  },
  {
    "id": "cosmetic-brightening-digital-radiation-cream",
    "slug": "cosmetic-brightening-digital-radiation-cream",
    "name": "Digital Radiation Cream",
    "category": "Cosmetics",
    "subcategory": "Cosmetics",
    "format": "Clinical Skincare",
    "images": [
      "/images/products/digital-radiation-cream/main.png"
    ],
    "shortDescription": "High-performance professional brightening cosmetic formulation developed for pre- and post-procedure clinical care.",
    "description": "Digital Radiation Cream delivers pharmaceutical-grade actives specifically formulated in Spain to maintain barrier homeostasis and optimize aesthetic outcomes.",
    "technology": "Advanced topical delivery system targeting brightening skin parameters.",
    "application": "Apply to clean skin according to clinical aesthetic protocol.",
    "origin": "Barcelona, Spain",
    "grade": "Dermaceutical Grade",
    "sterilization": "Cosmetic GMP ISO 22716",
    "endotoxinLevel": "N/A (Topical formulation)",
    "flaggedForReview": false,
    "specifications": {
      "origin": "Barcelona, Spain",
      "grade": "Dermaceutical Grade",
      "sterilization": "Cosmetic GMP ISO 22716",
      "endotoxinLevel": "N/A (Topical formulation)"
    },
    "formulation": "Digital Radiation Cream delivers pharmaceutical-grade actives specifically formulated in Spain to maintain barrier homeostasis and optimize aesthetic outcomes.",
    "ingredients": "Clinical Monograph Batch Release (Detailed active compound profile provided upon verified medical request)",
    "primaryImage": "/images/products/digital-radiation-cream/main.png",
    "altText": "Digital Radiation Cream - Cosmetics Cosmetics clinical aesthetic formulation"
  },
  {
    "id": "cosmetic-brightening-energis-cream",
    "slug": "cosmetic-brightening-energis-cream",
    "name": "Energis Cream",
    "category": "Cosmetics",
    "subcategory": "Cosmetics",
    "format": "Clinical Skincare",
    "images": [
      "/images/products/energis-cream/main.png",
      "/images/products/energis-cream/detail-01.png"
    ],
    "shortDescription": "High-performance professional brightening cosmetic formulation developed for pre- and post-procedure clinical care.",
    "description": "Energis Cream delivers pharmaceutical-grade actives specifically formulated in Spain to maintain barrier homeostasis and optimize aesthetic outcomes.",
    "technology": "Advanced topical delivery system targeting brightening skin parameters.",
    "application": "Apply to clean skin according to clinical aesthetic protocol.",
    "origin": "Barcelona, Spain",
    "grade": "Dermaceutical Grade",
    "sterilization": "Cosmetic GMP ISO 22716",
    "endotoxinLevel": "N/A (Topical formulation)",
    "flaggedForReview": false,
    "specifications": {
      "origin": "Barcelona, Spain",
      "grade": "Dermaceutical Grade",
      "sterilization": "Cosmetic GMP ISO 22716",
      "endotoxinLevel": "N/A (Topical formulation)"
    },
    "formulation": "Energis Cream delivers pharmaceutical-grade actives specifically formulated in Spain to maintain barrier homeostasis and optimize aesthetic outcomes.",
    "ingredients": "Clinical Monograph Batch Release (Detailed active compound profile provided upon verified medical request)",
    "primaryImage": "/images/products/energis-cream/main.png",
    "altText": "Energis Cream - Cosmetics Cosmetics clinical aesthetic formulation"
  },
  {
    "id": "cosmetic-brightening-enzimatic-peeling",
    "slug": "cosmetic-brightening-enzimatic-peeling",
    "name": "Enzimatic Peeling",
    "category": "Cosmetics",
    "subcategory": "Cosmetics",
    "format": "Clinical Skincare",
    "images": [
      "/images/products/enzimatic-peeling/main.png"
    ],
    "shortDescription": "High-performance professional brightening cosmetic formulation developed for pre- and post-procedure clinical care.",
    "description": "Enzimatic Peeling delivers pharmaceutical-grade actives specifically formulated in Spain to maintain barrier homeostasis and optimize aesthetic outcomes.",
    "technology": "Advanced topical delivery system targeting brightening skin parameters.",
    "application": "Apply to clean skin according to clinical aesthetic protocol.",
    "origin": "Barcelona, Spain",
    "grade": "Dermaceutical Grade",
    "sterilization": "Cosmetic GMP ISO 22716",
    "endotoxinLevel": "N/A (Topical formulation)",
    "flaggedForReview": false,
    "specifications": {
      "origin": "Barcelona, Spain",
      "grade": "Dermaceutical Grade",
      "sterilization": "Cosmetic GMP ISO 22716",
      "endotoxinLevel": "N/A (Topical formulation)"
    },
    "formulation": "Enzimatic Peeling delivers pharmaceutical-grade actives specifically formulated in Spain to maintain barrier homeostasis and optimize aesthetic outcomes.",
    "ingredients": "Clinical Monograph Batch Release (Detailed active compound profile provided upon verified medical request)",
    "primaryImage": "/images/products/enzimatic-peeling/main.png",
    "altText": "Enzimatic Peeling - Cosmetics Cosmetics clinical aesthetic formulation"
  },
  {
    "id": "cosmetic-brightening-ferulic-acid-serum",
    "slug": "cosmetic-brightening-ferulic-acid-serum",
    "name": "Ferulic Acid Serum",
    "category": "Cosmetics",
    "subcategory": "Cosmetics",
    "format": "Clinical Skincare",
    "images": [
      "/images/products/ferulic-acid-serum/main.png"
    ],
    "shortDescription": "High-performance professional brightening cosmetic formulation developed for pre- and post-procedure clinical care.",
    "description": "Ferulic Acid Serum delivers pharmaceutical-grade actives specifically formulated in Spain to maintain barrier homeostasis and optimize aesthetic outcomes.",
    "technology": "Advanced topical delivery system targeting brightening skin parameters.",
    "application": "Apply to clean skin according to clinical aesthetic protocol.",
    "origin": "Barcelona, Spain",
    "grade": "Dermaceutical Grade",
    "sterilization": "Cosmetic GMP ISO 22716",
    "endotoxinLevel": "N/A (Topical formulation)",
    "flaggedForReview": false,
    "specifications": {
      "origin": "Barcelona, Spain",
      "grade": "Dermaceutical Grade",
      "sterilization": "Cosmetic GMP ISO 22716",
      "endotoxinLevel": "N/A (Topical formulation)"
    },
    "formulation": "Ferulic Acid Serum delivers pharmaceutical-grade actives specifically formulated in Spain to maintain barrier homeostasis and optimize aesthetic outcomes.",
    "ingredients": "Purified Ferulic Acid, Synergistic Antioxidant Matrix",
    "primaryImage": "/images/products/ferulic-acid-serum/main.png",
    "altText": "Ferulic Acid Serum - Cosmetics Cosmetics clinical aesthetic formulation"
  },
  {
    "id": "cosmetic-brightening-flashfluid-serum",
    "slug": "cosmetic-brightening-flashfluid-serum",
    "name": "FlashFluid Serum",
    "category": "Cosmetics",
    "subcategory": "Cosmetics",
    "format": "Clinical Skincare",
    "images": [
      "/images/products/flashfluid-serum/main.png"
    ],
    "shortDescription": "High-performance professional brightening cosmetic formulation developed for pre- and post-procedure clinical care.",
    "description": "FlashFluid Serum delivers pharmaceutical-grade actives specifically formulated in Spain to maintain barrier homeostasis and optimize aesthetic outcomes.",
    "technology": "Advanced topical delivery system targeting brightening skin parameters.",
    "application": "Apply to clean skin according to clinical aesthetic protocol.",
    "origin": "Barcelona, Spain",
    "grade": "Dermaceutical Grade",
    "sterilization": "Cosmetic GMP ISO 22716",
    "endotoxinLevel": "N/A (Topical formulation)",
    "flaggedForReview": false,
    "specifications": {
      "origin": "Barcelona, Spain",
      "grade": "Dermaceutical Grade",
      "sterilization": "Cosmetic GMP ISO 22716",
      "endotoxinLevel": "N/A (Topical formulation)"
    },
    "formulation": "FlashFluid Serum delivers pharmaceutical-grade actives specifically formulated in Spain to maintain barrier homeostasis and optimize aesthetic outcomes.",
    "ingredients": "Low Molecular Weight Hyaluronic Acid, Acetyl Hexapeptide-8",
    "primaryImage": "/images/products/flashfluid-serum/main.png",
    "altText": "FlashFluid Serum - Cosmetics Cosmetics clinical aesthetic formulation"
  },
  {
    "id": "cosmetic-brightening-multivit-gel",
    "slug": "cosmetic-brightening-multivit-gel",
    "name": "Multivit Gel",
    "category": "Cosmetics",
    "subcategory": "Cosmetics",
    "format": "Clinical Skincare",
    "images": [
      "/images/products/multivit-gel/main.png"
    ],
    "shortDescription": "High-performance professional brightening cosmetic formulation developed for pre- and post-procedure clinical care.",
    "description": "Multivit Gel delivers pharmaceutical-grade actives specifically formulated in Spain to maintain barrier homeostasis and optimize aesthetic outcomes.",
    "technology": "Advanced topical delivery system targeting brightening skin parameters.",
    "application": "Apply to clean skin according to clinical aesthetic protocol.",
    "origin": "Barcelona, Spain",
    "grade": "Dermaceutical Grade",
    "sterilization": "Cosmetic GMP ISO 22716",
    "endotoxinLevel": "N/A (Topical formulation)",
    "flaggedForReview": false,
    "specifications": {
      "origin": "Barcelona, Spain",
      "grade": "Dermaceutical Grade",
      "sterilization": "Cosmetic GMP ISO 22716",
      "endotoxinLevel": "N/A (Topical formulation)"
    },
    "formulation": "Multivit Gel delivers pharmaceutical-grade actives specifically formulated in Spain to maintain barrier homeostasis and optimize aesthetic outcomes.",
    "ingredients": "Clinical Monograph Batch Release (Detailed active compound profile provided upon verified medical request)",
    "primaryImage": "/images/products/multivit-gel/main.png",
    "altText": "Multivit Gel - Cosmetics Cosmetics clinical aesthetic formulation"
  },
  {
    "id": "cosmetic-brightening-niacinamide-mask",
    "slug": "cosmetic-brightening-niacinamide-mask",
    "name": "Niacinamide Mask",
    "category": "Cosmetics",
    "subcategory": "Cosmetics",
    "format": "Clinical Skincare",
    "images": [
      "/images/products/niacinamide-mask/main.png",
      "/images/products/niacinamide-mask/detail-01.png"
    ],
    "shortDescription": "High-performance professional brightening cosmetic formulation developed for pre- and post-procedure clinical care.",
    "description": "Niacinamide Mask delivers pharmaceutical-grade actives specifically formulated in Spain to maintain barrier homeostasis and optimize aesthetic outcomes.",
    "technology": "Advanced topical delivery system targeting brightening skin parameters.",
    "application": "Apply to clean skin according to clinical aesthetic protocol.",
    "origin": "Barcelona, Spain",
    "grade": "Dermaceutical Grade",
    "sterilization": "Cosmetic GMP ISO 22716",
    "endotoxinLevel": "N/A (Topical formulation)",
    "flaggedForReview": false,
    "specifications": {
      "origin": "Barcelona, Spain",
      "grade": "Dermaceutical Grade",
      "sterilization": "Cosmetic GMP ISO 22716",
      "endotoxinLevel": "N/A (Topical formulation)"
    },
    "formulation": "Niacinamide Mask delivers pharmaceutical-grade actives specifically formulated in Spain to maintain barrier homeostasis and optimize aesthetic outcomes.",
    "ingredients": "5% Niacinamide, Centella Asiatica, Allantoin",
    "primaryImage": "/images/products/niacinamide-mask/main.png",
    "altText": "Niacinamide Mask - Cosmetics Cosmetics clinical aesthetic formulation"
  },
  {
    "id": "cosmetic-brightening-peptides-fluid-serum",
    "slug": "cosmetic-brightening-peptides-fluid-serum",
    "name": "Peptides Fluid Serum",
    "category": "Cosmetics",
    "subcategory": "Cosmetics",
    "format": "Clinical Skincare",
    "images": [
      "/images/products/peptides-fluid-serum/main.png"
    ],
    "shortDescription": "High-performance professional brightening cosmetic formulation developed for pre- and post-procedure clinical care.",
    "description": "Peptides Fluid Serum delivers pharmaceutical-grade actives specifically formulated in Spain to maintain barrier homeostasis and optimize aesthetic outcomes.",
    "technology": "Advanced topical delivery system targeting brightening skin parameters.",
    "application": "Apply to clean skin according to clinical aesthetic protocol.",
    "origin": "Barcelona, Spain",
    "grade": "Dermaceutical Grade",
    "sterilization": "Cosmetic GMP ISO 22716",
    "endotoxinLevel": "N/A (Topical formulation)",
    "flaggedForReview": false,
    "specifications": {
      "origin": "Barcelona, Spain",
      "grade": "Dermaceutical Grade",
      "sterilization": "Cosmetic GMP ISO 22716",
      "endotoxinLevel": "N/A (Topical formulation)"
    },
    "formulation": "Peptides Fluid Serum delivers pharmaceutical-grade actives specifically formulated in Spain to maintain barrier homeostasis and optimize aesthetic outcomes.",
    "ingredients": "Clinical Monograph Batch Release (Detailed active compound profile provided upon verified medical request)",
    "primaryImage": "/images/products/peptides-fluid-serum/main.png",
    "altText": "Peptides Fluid Serum - Cosmetics Cosmetics clinical aesthetic formulation"
  },
  {
    "id": "cosmetic-brightening-peptides-gel-serum",
    "slug": "cosmetic-brightening-peptides-gel-serum",
    "name": "Peptides Gel Serum",
    "category": "Cosmetics",
    "subcategory": "Cosmetics",
    "format": "Clinical Skincare",
    "images": [
      "/images/products/peptides-gel-serum/main.png"
    ],
    "shortDescription": "High-performance professional brightening cosmetic formulation developed for pre- and post-procedure clinical care.",
    "description": "Peptides Gel Serum delivers pharmaceutical-grade actives specifically formulated in Spain to maintain barrier homeostasis and optimize aesthetic outcomes.",
    "technology": "Advanced topical delivery system targeting brightening skin parameters.",
    "application": "Apply to clean skin according to clinical aesthetic protocol.",
    "origin": "Barcelona, Spain",
    "grade": "Dermaceutical Grade",
    "sterilization": "Cosmetic GMP ISO 22716",
    "endotoxinLevel": "N/A (Topical formulation)",
    "flaggedForReview": false,
    "specifications": {
      "origin": "Barcelona, Spain",
      "grade": "Dermaceutical Grade",
      "sterilization": "Cosmetic GMP ISO 22716",
      "endotoxinLevel": "N/A (Topical formulation)"
    },
    "formulation": "Peptides Gel Serum delivers pharmaceutical-grade actives specifically formulated in Spain to maintain barrier homeostasis and optimize aesthetic outcomes.",
    "ingredients": "Copper Tripeptide-1, Palmitoyl Pentapeptide-4 Complex",
    "primaryImage": "/images/products/peptides-gel-serum/main.png",
    "altText": "Peptides Gel Serum - Cosmetics Cosmetics clinical aesthetic formulation"
  },
  {
    "id": "cosmetic-brightening-proage-cream",
    "slug": "cosmetic-brightening-proage-cream",
    "name": "Proage Cream",
    "category": "Cosmetics",
    "subcategory": "Cosmetics",
    "format": "Clinical Skincare",
    "images": [
      "/images/products/proage-cream/main.png",
      "/images/products/proage-cream/detail-01.png"
    ],
    "shortDescription": "High-performance professional brightening cosmetic formulation developed for pre- and post-procedure clinical care.",
    "description": "Proage Cream delivers pharmaceutical-grade actives specifically formulated in Spain to maintain barrier homeostasis and optimize aesthetic outcomes.",
    "technology": "Advanced topical delivery system targeting brightening skin parameters.",
    "application": "Apply to clean skin according to clinical aesthetic protocol.",
    "origin": "Barcelona, Spain",
    "grade": "Dermaceutical Grade",
    "sterilization": "Cosmetic GMP ISO 22716",
    "endotoxinLevel": "N/A (Topical formulation)",
    "flaggedForReview": false,
    "specifications": {
      "origin": "Barcelona, Spain",
      "grade": "Dermaceutical Grade",
      "sterilization": "Cosmetic GMP ISO 22716",
      "endotoxinLevel": "N/A (Topical formulation)"
    },
    "formulation": "Proage Cream delivers pharmaceutical-grade actives specifically formulated in Spain to maintain barrier homeostasis and optimize aesthetic outcomes.",
    "ingredients": "Biomimetic Ceramide Complex, Retinyl Palmitate, Peptides",
    "primaryImage": "/images/products/proage-cream/main.png",
    "altText": "Proage Cream - Cosmetics Cosmetics clinical aesthetic formulation"
  },
  {
    "id": "cosmetic-brightening-vitamin-c-10",
    "slug": "cosmetic-brightening-vitamin-c-10",
    "name": "Vitamin C 10%",
    "category": "Cosmetics",
    "subcategory": "Cosmetics",
    "format": "Clinical Skincare",
    "images": [
      "/images/products/vitamin-c-10/main.png"
    ],
    "shortDescription": "High-performance professional brightening cosmetic formulation developed for pre- and post-procedure clinical care.",
    "description": "Vitamin C 10_ delivers pharmaceutical-grade actives specifically formulated in Spain to maintain barrier homeostasis and optimize aesthetic outcomes.",
    "technology": "Advanced topical delivery system targeting brightening skin parameters.",
    "application": "Apply to clean skin according to clinical aesthetic protocol.",
    "origin": "Barcelona, Spain",
    "grade": "Dermaceutical Grade",
    "sterilization": "Cosmetic GMP ISO 22716",
    "endotoxinLevel": "N/A (Topical formulation)",
    "flaggedForReview": false,
    "specifications": {
      "origin": "Barcelona, Spain",
      "grade": "Dermaceutical Grade",
      "sterilization": "Cosmetic GMP ISO 22716",
      "endotoxinLevel": "N/A (Topical formulation)"
    },
    "formulation": "Vitamin C 10_ delivers pharmaceutical-grade actives specifically formulated in Spain to maintain barrier homeostasis and optimize aesthetic outcomes.",
    "ingredients": "10% Stabilized Ascorbic Acid, Antioxidant Vehicle",
    "primaryImage": "/images/products/vitamin-c-10/main.png",
    "altText": "Vitamin C 10% - Cosmetics Cosmetics clinical aesthetic formulation"
  },
  {
    "id": "cosmetic-anti-aging-rosa",
    "slug": "rosa",
    "name": "Rosa",
    "category": "Cosmetics",
    "subcategory": "Cosmetics",
    "format": "Dermaceutical Dropper Bottle 30 ml",
    "images": [
      "/images/products/rosa/main.png"
    ],
    "shortDescription": "Active biomimetic peptide formula for cutaneous conditioning and cellular radiance.",
    "description": "Rosa delivers pharmaceutical-grade actives specifically formulated in Spain to maintain barrier homeostasis and optimize aesthetic outcomes.",
    "technology": "Cellular biomimetic peptide signaling cascade.",
    "application": "Apply 3–5 drops to cleansed skin morning and evening as part of clinical recovery or maintenance.",
    "origin": "Barcelona, Spain",
    "grade": "Professional Dermaceutical Grade",
    "sterilization": "Cosmetic GMP ISO 22716 Standard",
    "endotoxinLevel": "N/A (Topical formulation)",
    "flaggedForReview": true,
    "reviewReason": "Added per requirement using authentic Rosa asset; clinical monograph pending formal laboratory upload",
    "specifications": {
      "origin": "Barcelona, Spain",
      "grade": "Professional Dermaceutical Grade",
      "sterilization": "Cosmetic GMP ISO 22716 Standard",
      "endotoxinLevel": "N/A (Topical formulation)"
    },
    "formulation": "Rosa delivers pharmaceutical-grade actives specifically formulated in Spain to maintain barrier homeostasis and optimize aesthetic outcomes.",
    "ingredients": "Biomimetic Peptides, Conditioning Lipids, Hyaluronic Fraction",
    "primaryImage": "/images/products/rosa/main.png",
    "altText": "Rosa - Cosmetics Cosmetics clinical aesthetic formulation"
  },
  {
    "id": "botulinum-btx-lift-booster",
    "slug": "btx-lift-booster",
    "name": "BTX Lift Booster",
    "category": "Botulinum",
    "subcategory": "Expression Lines",
    "format": "Package 4 Syringes x 1 ml",
    "primaryImage": "/images/products/btx-lift-booster/main.jpeg",
    "images": [
      "/images/products/btx-lift-booster/main.jpeg",
      "/images/products/btx-lift-booster/detail-01.jpeg"
    ],
    "shortDescription": "Smoothing complex for the appearance of expression lines.",
    "description": "BTX Lift Booster is a professional smoothing complex formulated for the appearance of expression lines, presented in a clinical package of 4 pre-filled syringes x 1 ml.",
    "technology": "Targeted smoothing formulation for dynamic facial expression lines.",
    "application": "Targeted application for facial expression lines. Exclusive to certified aesthetic physicians and clinics.",
    "origin": "Barcelona, Spain",
    "grade": "Professional Aesthetic Grade",
    "flaggedForReview": false,
    "specifications": {
      "origin": "Barcelona, Spain",
      "grade": "Professional Aesthetic Grade",
      "sterilization": "Aseptic Sterile Lyophilization",
      "endotoxinLevel": "< 0.01 EU/syringe"
    },
    "formulation": "Calibrated smoothing complex formulated in Barcelona, Spain for professional clinical application.",
    "priceLabel": "Request Price",
    "altText": "BTX Lift Booster - Botulinum Expression Lines clinical aesthetic formulation"
  }
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return PRODUCTS.find((p) => p.slug === slug);
};

export const getProductsByCategory = (category: ProductCategoryType): Product[] => {
  return PRODUCTS.filter((p) => p.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return PRODUCTS.filter(
    (p) =>
      p.featured ||
      [
        'biostimulator-1-ml-exo-radiance',
        'biostimulator-2-3-ml-exo-cell',
        'biotech-gf-bright',
        'vial-acnova',
        'vial-ha-repair',
        'cosmetic-brightening-curcumin-cream',
      ].includes(p.slug)
  );
};

export const getFlaggedProducts = (): Product[] => {
  return PRODUCTS.filter((p) => p.flaggedForReview);
};
