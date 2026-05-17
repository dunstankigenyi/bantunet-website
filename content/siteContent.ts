export const siteContent = {
  site: {
    name: "BantuNet",
    url: "https://www.bantunet.org",
    domain: "www.bantunet.org",
    locale: "en_US"
  },
  nav: {
    skipLink: "Skip to content",
    brand: "BantuNet",
    logoLabel: "BantuNet home",
    menuLabel: "Open navigation",
    closeLabel: "Close navigation",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "How It Works", href: "/how-it-works" },
      { label: "Hosts", href: "/hosts" },
      { label: "Support", href: "/support" },
      { label: "Privacy Policy", href: "/privacy" }
    ],
    cta: { label: "Get Started", href: "/support" }
  },
  faq: [
    {
      question: "What is BantuNet?",
      answer:
        "BantuNet is a Wi-Fi sharing platform that helps people buy internet packages from nearby verified hosts."
    },
    {
      question: "How do I find a nearby host?",
      answer:
        "Open the BantuNet app, allow location access, review available verified hosts near you, choose a package, and connect after payment."
    },
    {
      question: "How do hosts earn?",
      answer:
        "Approved hosts offer standard internet packages through their hotspots and earn when customers buy access."
    },
    {
      question: "Are payments secure?",
      answer:
        "BantuNet uses trusted payment services and wallet records to help process purchases, payouts, and package access securely."
    },
    {
      question: "Can I delete my account?",
      answer:
        "Yes. You can request account deletion by emailing support@bantunet.org with the phone number linked to your account."
    },
    {
      question: "Which countries does BantuNet support?",
      answer:
        "BantuNet is designed for markets where affordable neighborhood internet access can help more people get online. Supported countries can expand over time."
    }
  ],
  home: {
    seo: {
      title: "BantuNet | Connect Anywhere",
      description:
        "Buy Wi-Fi packages from nearby verified hosts with BantuNet, a community-based internet sharing platform built for affordable access.",
      path: "/"
    },
    hero: {
      eyebrow: "Community Wi-Fi sharing",
      title: "BantuNet",
      headline: "Connect Anywhere.",
      subheadline:
        "Buy Wi-Fi packages from nearby verified hosts and stay connected wherever you go.",
      primaryButton: { label: "Get Started", href: "/support" },
      secondaryButton: { label: "Become a Host", href: "/hosts" },
      visual: {
        alt: "Map-inspired Wi-Fi network visual for BantuNet",
        panelLabel: "Nearby verified hosts",
        locationLabel: "Live area scan",
        hostsLabel: "Verified hosts nearby",
        packageLabel: "Popular package",
        walletLabel: "Wallet ready",
        trustLabel: "Verified access",
        packageName: "Daily Wi-Fi",
        packageSpeed: "Fast local connection",
        packagePrice: "Secure payment"
      }
    },
    what: {
      eyebrow: "What BantuNet does",
      title: "A simpler way to get online near you.",
      body:
        "BantuNet connects people who need internet access with verified local hosts who can safely share approved Wi-Fi packages.",
      cards: [
        {
          icon: "wifi",
          title: "Buy nearby Wi-Fi",
          body:
            "Discover available hotspots around you and choose a package that fits your time, budget, and data needs."
        },
        {
          icon: "mapPin",
          title: "Use location intelligently",
          body:
            "Location helps the app show nearby hosts and makes the connection flow easier when you are ready to get online."
        },
        {
          icon: "shieldCheck",
          title: "Trust verified hosts",
          body:
            "Host verification, safety rules, and approved packages help make neighborhood internet sharing more reliable."
        }
      ]
    },
    howItWorksPreview: {
      eyebrow: "How it works",
      title: "From nearby search to connected in a few clear steps.",
      body:
        "The customer journey is designed to feel familiar: open the app, choose a nearby host, pay securely, and connect.",
      steps: [
        { title: "Open the app", body: "Start BantuNet when you need internet access." },
        { title: "Find a host", body: "Use location to view verified hotspots nearby." },
        { title: "Choose and pay", body: "Select an approved package and complete payment." },
        { title: "Connect", body: "Join the host Wi-Fi and use the internet package you purchased." }
      ],
      link: { label: "See the full flow", href: "/how-it-works" }
    },
    userBenefits: {
      eyebrow: "Benefits for users",
      title: "Affordable access without hunting for passwords.",
      cards: [
        {
          icon: "smartphone",
          title: "Mobile-first access",
          body:
            "Find and buy Wi-Fi from your phone with a flow built for real-world movement."
        },
        {
          icon: "creditCard",
          title: "Flexible packages",
          body:
            "Choose approved packages for short sessions, daily needs, or repeat access."
        },
        {
          icon: "lockKeyhole",
          title: "Safer connection flow",
          body:
            "Verified hosts, wallet records, and clear purchase history make access easier to manage."
        }
      ]
    },
    hostBenefits: {
      eyebrow: "Benefits for hosts",
      title: "Turn an approved hotspot into community value.",
      cards: [
        {
          icon: "handCoins",
          title: "Earn from customers",
          body:
            "Hosts can offer approved internet packages and earn when nearby customers buy access."
        },
        {
          icon: "badgeCheck",
          title: "Build local trust",
          body:
            "Verification helps customers understand that a hotspot has been reviewed before they connect."
        },
        {
          icon: "radioTower",
          title: "Manage hotspot activity",
          body:
            "Host tools are designed around setup, package approval, safety rules, and payout visibility."
        }
      ],
      link: { label: "Explore hosting", href: "/hosts" }
    },
    countries: {
      eyebrow: "Supported countries",
      title: "Built for communities where access matters.",
      body:
        "BantuNet can support markets where neighborhood connectivity, mobile payments, and verified local hosts can help reduce barriers to internet access.",
      countries: ["Nigeria", "Ghana", "Kenya", "Uganda", "Tanzania", "Rwanda", "South Africa", "Zambia"],
      note:
        "Country availability may launch in phases based on payment coverage, host readiness, and local compliance needs."
    },
    payments: {
      eyebrow: "Payments and wallet",
      title: "Secure payments with clear wallet records.",
      body:
        "Customers can pay for packages through supported payment services, while BantuNet keeps wallet and purchase history records so access, refunds, support, and host payouts can be handled responsibly.",
      points: [
        "Package purchases are tied to the customer account.",
        "Wallet records help track usage, balances, adjustments, and support issues.",
        "Host payout flows are designed to match approved package activity."
      ]
    },
    safety: {
      eyebrow: "Safety and verification",
      title: "A platform designed around trust.",
      body:
        "BantuNet uses host review, hotspot information, location context, package controls, and support processes to make Wi-Fi sharing more professional for both customers and hosts.",
      cards: [
        {
          icon: "userCheck",
          title: "Host verification",
          body:
            "Hosts may be asked to provide identity, hotspot, and location details before offering packages."
        },
        {
          icon: "network",
          title: "Hotspot review",
          body:
            "Network details help BantuNet understand where access is offered and how customers connect."
        },
        {
          icon: "lifeBuoy",
          title: "Support ready",
          body:
            "Customers and hosts can contact support when account, payment, connection, or safety questions come up."
        }
      ]
    },
    cta: {
      title: "Ready to connect or host?",
      body:
        "BantuNet brings nearby internet access, verified hosts, and secure package purchases into one simple platform.",
      primaryButton: { label: "Get Started", href: "/support" },
      secondaryButton: { label: "Become a Host", href: "/hosts" }
    },
    faqPreview: {
      eyebrow: "FAQ",
      title: "Questions before you get connected?",
      body:
        "Start with the most common questions, then visit support for more help topics and contact details.",
      link: { label: "Visit support", href: "/support" }
    }
  },
  about: {
    seo: {
      title: "About BantuNet | Community-Based Wi-Fi Sharing",
      description:
        "Learn what BantuNet is, why affordable internet access matters, and how community-based Wi-Fi sharing can help more people get online.",
      path: "/about"
    },
    hero: {
      eyebrow: "About BantuNet",
      title: "Internet access should be closer, fairer, and easier to use.",
      body:
        "BantuNet is a Wi-Fi sharing platform that lets users buy internet packages from nearby verified hosts."
    },
    sections: [
      {
        icon: "wifi",
        title: "What BantuNet is",
        body:
          "BantuNet helps connect customers who need internet access with approved hosts who can share Wi-Fi through standard packages."
      },
      {
        icon: "route",
        title: "Mission",
        body:
          "Our mission is to make everyday internet access more affordable and available through trusted local connectivity."
      },
      {
        icon: "globe2",
        title: "Vision",
        body:
          "Our vision is a future where communities can help each other stay connected, learn, work, communicate, and participate in the digital economy."
      },
      {
        icon: "users",
        title: "Why access matters",
        body:
          "Affordable internet access supports education, business, family communication, financial services, health information, and opportunity."
      },
      {
        icon: "mapPinned",
        title: "Community-based Wi-Fi sharing",
        body:
          "BantuNet is built around local hosts, nearby customers, secure payments, and verification so shared connectivity can feel practical and professional."
      }
    ],
    closing: {
      title: "A platform for practical access.",
      body:
        "BantuNet is not just a hotspot directory. It is a structured marketplace for verified Wi-Fi access, transparent packages, and community participation."
    }
  },
  howItWorks: {
    seo: {
      title: "How BantuNet Works | Buy and Share Wi-Fi",
      description:
        "See how BantuNet works for customers and hosts, from location-based discovery to secure payment, Wi-Fi connection, verification, and earnings.",
      path: "/how-it-works"
    },
    hero: {
      eyebrow: "How it works",
      title: "Two simple flows: connect as a user or earn as a host.",
      body:
        "BantuNet organizes the customer and host experience into clear steps so Wi-Fi sharing can stay easy, trusted, and accountable."
    },
    userFlow: {
      eyebrow: "User flow",
      title: "Buy a nearby Wi-Fi package.",
      steps: [
        {
          icon: "smartphone",
          title: "Open the app",
          body: "Start BantuNet when you need nearby internet access."
        },
        {
          icon: "mapPin",
          title: "Allow location",
          body: "Give the app permission to show nearby verified hosts."
        },
        {
          icon: "scanSearch",
          title: "Find nearby hosts",
          body: "Review available hotspots, distance, package options, and host details."
        },
        {
          icon: "fileText",
          title: "Choose a package",
          body: "Pick the approved internet package that fits your access need."
        },
        {
          icon: "creditCard",
          title: "Pay securely",
          body: "Complete payment through supported payment and wallet flows."
        },
        {
          icon: "wifi",
          title: "Connect to Wi-Fi",
          body: "Use the connection details provided for your purchased package."
        }
      ]
    },
    hostFlow: {
      eyebrow: "Host flow",
      title: "Offer access from an approved hotspot.",
      steps: [
        {
          icon: "userPlus",
          title: "Sign up as host",
          body: "Create a host profile and provide the information needed for review."
        },
        {
          icon: "radioTower",
          title: "Add hotspot",
          body: "Submit hotspot details, location, connection information, and setup notes."
        },
        {
          icon: "badgeCheck",
          title: "Get verified",
          body: "BantuNet reviews host and hotspot information before packages go live."
        },
        {
          icon: "settings",
          title: "Offer approved packages",
          body: "Use standard package options that customers can understand before buying."
        },
        {
          icon: "handCoins",
          title: "Earn from customers",
          body: "Receive earnings from eligible package purchases and track payout activity."
        }
      ]
    },
    cta: {
      title: "Need help with the flow?",
      body:
        "Support can help with account access, payments, connection questions, host setup, and account deletion requests.",
      primaryButton: { label: "Contact support", href: "/support" },
      secondaryButton: { label: "Read host details", href: "/hosts" }
    }
  },
  hosts: {
    seo: {
      title: "BantuNet Hosts | Earn by Sharing Verified Wi-Fi",
      description:
        "Learn how BantuNet hosts earn, get verified, set up hotspots, offer standard packages, follow safety rules, and receive payouts.",
      path: "/hosts"
    },
    hero: {
      eyebrow: "For hosts",
      title: "Share approved Wi-Fi access and earn from nearby customers.",
      body:
        "BantuNet gives hosts a structured way to offer internet packages while keeping verification, safety, and payout expectations clear."
    },
    overview: {
      eyebrow: "Host opportunity",
      title: "A professional path for neighborhood connectivity.",
      body:
        "Hosts can help their community get online while earning from approved package purchases made through the BantuNet platform."
    },
    sections: [
      {
        icon: "handCoins",
        title: "How hosts earn",
        body:
          "Hosts earn when customers buy approved packages connected to the host hotspot, subject to platform rules and payout availability."
      },
      {
        icon: "badgeCheck",
        title: "Host verification",
        body:
          "Verification may include profile details, hotspot information, location review, and photos where applicable."
      },
      {
        icon: "radioTower",
        title: "Hotspot setup",
        body:
          "Hosts add hotspot details so customers can understand where access is available and how to connect after purchase."
      },
      {
        icon: "fileText",
        title: "Standard packages",
        body:
          "Approved package options keep pricing, duration, and access expectations clear for customers."
      },
      {
        icon: "banknote",
        title: "Payouts",
        body:
          "Payout records help hosts understand earnings, adjustments, and completed payout activity."
      },
      {
        icon: "shieldCheck",
        title: "Safety rules",
        body:
          "Hosts must follow platform rules, provide accurate hotspot details, respect customer privacy, and avoid unsafe or misleading access practices."
      }
    ],
    packages: {
      title: "Package principles",
      points: [
        "Packages should be easy for customers to understand before payment.",
        "Hotspot availability should match what customers see in the app.",
        "Hosts should keep connection details accurate and support-friendly.",
        "BantuNet may review, approve, adjust, pause, or remove packages to protect customers and the platform."
      ]
    },
    cta: {
      title: "Interested in hosting?",
      body:
        "Start by learning the host flow, then contact support if you need help with setup, verification, or hotspot readiness.",
      primaryButton: { label: "See how it works", href: "/how-it-works" },
      secondaryButton: { label: "Contact support", href: "/support" }
    }
  },
  support: {
    seo: {
      title: "BantuNet Support | Help, FAQ, Privacy, and Account Deletion",
      description:
        "Contact BantuNet support, read FAQs, find help topics, request account deletion, and access the privacy policy.",
      path: "/support"
    },
    hero: {
      eyebrow: "Support",
      title: "Help for customers, hosts, accounts, payments, and privacy.",
      body:
        "Use this page to find common help topics, contact support, read the privacy policy, or request account deletion."
    },
    contact: {
      title: "Contact email",
      body:
        "For support, account help, privacy questions, host questions, or deletion requests, email the BantuNet support team.",
      email: "support@bantunet.org",
      linkLabel: "Email support"
    },
    helpTopics: {
      eyebrow: "Help topics",
      title: "Common reasons to contact support.",
      topics: [
        {
          icon: "smartphone",
          title: "Account access",
          body: "Phone number, profile, sign-in, verification, and account update questions."
        },
        {
          icon: "creditCard",
          title: "Payments and wallet",
          body: "Package purchases, wallet records, receipts, adjustments, and payment questions."
        },
        {
          icon: "wifi",
          title: "Connection issues",
          body: "Problems finding a host, connecting to a hotspot, or using a purchased package."
        },
        {
          icon: "radioTower",
          title: "Host support",
          body: "Hotspot setup, verification, packages, safety rules, and payout questions."
        },
        {
          icon: "trash2",
          title: "Account deletion",
          body: "Request deletion of your BantuNet account and associated data."
        },
        {
          icon: "shieldCheck",
          title: "Privacy and safety",
          body: "Privacy policy questions, data rights, verification photos, and security concerns."
        }
      ]
    },
    links: {
      title: "Important links",
      items: [
        { label: "Account deletion request", href: "/delete-account" },
        { label: "Privacy policy", href: "/privacy" }
      ]
    },
    faq: {
      eyebrow: "FAQ",
      title: "Frequently asked questions"
    }
  },
  privacy: {
    seo: {
      title: "BantuNet Privacy Policy",
      description:
        "Read the BantuNet privacy policy covering account data, location, payments, hotspot information, diagnostics, third-party services, security, and deletion requests.",
      path: "/privacy"
    },
    hero: {
      eyebrow: "Privacy Policy",
      title: "BantuNet Privacy Policy",
      body:
        "This policy explains how BantuNet may collect, use, share, retain, and protect information when people use the platform."
    },
    updatedLabel: "Last updated",
    updatedDate: "May 17, 2026",
    intro:
      "BantuNet provides a Wi-Fi sharing platform that helps users buy internet packages from nearby verified hosts. This privacy policy applies to BantuNet websites, apps, support channels, and related services.",
    sections: [
      {
        title: "Information BantuNet may collect",
        body:
          "Depending on how you use BantuNet, we may collect the following categories of information:",
        bullets: [
          "Phone number linked to your account.",
          "Name and profile information.",
          "Location information used to find nearby hosts and support hotspot verification.",
          "Payment information needed to process purchases, wallet activity, refunds, and payouts.",
          "Purchase history, package usage, wallet records, and support history.",
          "Device and network information, including device identifiers, app version, IP address, connection details, and network diagnostics.",
          "Hotspot information submitted by hosts, including location, connection details, package details, and operational status.",
          "Crash logs, performance information, diagnostics, and error reports.",
          "Photos for verification where applicable, such as host, hotspot, or identity-related review.",
          "Contacts only if users choose to use contact-based gifting or a similar contact-based feature."
        ]
      },
      {
        title: "How BantuNet uses information",
        body:
          "BantuNet uses information to operate, secure, improve, and support the platform.",
        bullets: [
          "Create and manage accounts.",
          "Show nearby verified hosts and available Wi-Fi packages.",
          "Process package purchases, wallet records, refunds, and host payouts.",
          "Verify hosts, hotspots, locations, and eligibility.",
          "Prevent fraud, misuse, unauthorized access, unsafe activity, and policy violations.",
          "Provide customer support and respond to account, payment, privacy, and deletion requests.",
          "Improve app reliability, performance, diagnostics, and user experience.",
          "Send service messages related to accounts, purchases, verification, security, and support."
        ]
      },
      {
        title: "Location and hotspot information",
        body:
          "Location is important to BantuNet because the platform helps customers find nearby verified hosts. Host hotspot information may be used to review availability, show access options, support customers, and maintain platform safety."
      },
      {
        title: "Payments and wallet records",
        body:
          "BantuNet may use payment and wallet information to process purchases, record package activity, handle refunds or adjustments, calculate host earnings, manage payouts, provide receipts, prevent fraud, and comply with legal, tax, accounting, or regulatory requirements."
      },
      {
        title: "Contact-based gifting",
        body:
          "BantuNet only accesses contacts if a user chooses to use contact-based gifting or a similar contact feature. Contacts are used to help the user select a recipient and are not required for normal account use."
      },
      {
        title: "Third-party services",
        body:
          "BantuNet may use trusted third-party services to provide infrastructure, payments, communications, maps, diagnostics, app services, and platform functionality.",
        bullets: [
          "Supabase for backend infrastructure, authentication, database, storage, and related services.",
          "Flutterwave for payment processing and related payment services.",
          "Twilio for phone number verification, messaging, and communication services.",
          "Google Maps for maps, location, geocoding, and place-related features.",
          "Expo for app development, updates, diagnostics, and related mobile services.",
          "Google Play services for Android platform functionality, app distribution, diagnostics, and related services."
        ]
      },
      {
        title: "How information may be shared",
        body:
          "BantuNet may share information with service providers, payment processors, communications providers, hosting and infrastructure partners, analytics or diagnostics providers, legal and compliance advisors, law enforcement where required, and parties involved in a business transfer. We do not sell personal information as a standalone product."
      },
      {
        title: "Security",
        body:
          "BantuNet uses reasonable administrative, technical, and organizational safeguards to protect information. Data is encrypted in transit where supported. No digital service can guarantee absolute security, but BantuNet works to reduce risk through access controls, monitoring, platform review, and secure service providers."
      },
      {
        title: "Data retention",
        body:
          "BantuNet keeps information for as long as needed to provide services, support users and hosts, maintain wallet and purchase records, comply with legal obligations, resolve disputes, enforce agreements, prevent fraud, and improve safety. Some records may be retained after account deletion when required or allowed for legal, tax, accounting, fraud prevention, security, or compliance reasons."
      },
      {
        title: "User rights and choices",
        body:
          "Depending on your location and applicable law, you may have rights to access, correct, update, export, restrict, object to, or delete certain personal information. You may also manage app permissions, including location and contacts, through your device settings."
      },
      {
        title: "Account deletion requests",
        body:
          "Users may request deletion of their BantuNet account and associated data by emailing support@bantunet.org. Some transaction records may be retained for legal, tax, fraud prevention, security, or compliance reasons."
      },
      {
        title: "Children's privacy",
        body:
          "BantuNet is not intended for children who are not old enough to use digital services under applicable law. If you believe a child has provided information to BantuNet without appropriate permission, contact support."
      },
      {
        title: "International data handling",
        body:
          "BantuNet and its service providers may process information in countries different from where a user lives. When this happens, BantuNet uses reasonable safeguards appropriate for the service and applicable requirements."
      },
      {
        title: "Changes to this policy",
        body:
          "BantuNet may update this privacy policy as the platform, services, laws, or business needs change. Updated versions will be posted on this page with a new last updated date."
      },
      {
        title: "Contact",
        body:
          "For privacy questions, account deletion requests, or support, contact BantuNet at support@bantunet.org."
      }
    ]
  },
  deleteAccount: {
    seo: {
      title: "Delete BantuNet Account | Account Deletion Request",
      description:
        "Request deletion of your BantuNet account and associated data by emailing support@bantunet.org with your phone number and full name.",
      path: "/delete-account"
    },
    hero: {
      eyebrow: "Delete Account",
      title: "Request deletion of your BantuNet account.",
      body:
        "Users may request deletion of their BantuNet account and associated data by emailing support@bantunet.org."
    },
    email: "support@bantunet.org",
    request: {
      title: "What to include",
      body:
        "To help BantuNet locate the correct account and process the request, include the following details in your email:",
      bullets: [
        "Phone number linked to the account.",
        "Full name.",
        "Reason for deletion, optional."
      ],
      linkLabel: "Email deletion request"
    },
    retention: {
      title: "What may be deleted or retained",
      bullets: [
        "Your account profile may be deleted.",
        "Wallet records and usage history may be deleted where legally allowed.",
        "Some transaction records may be retained for legal, tax, fraud prevention, or compliance reasons.",
        "Requests are usually processed within 7 business days."
      ]
    },
    cta: {
      title: "Need the privacy policy first?",
      body:
        "The privacy policy explains what BantuNet may collect, how information is used, third-party services, user rights, retention, and security.",
      primaryButton: { label: "Read Privacy Policy", href: "/privacy" },
      secondaryButton: { label: "Contact Support", href: "/support" }
    }
  },
  footer: {
    brand: "BantuNet",
    tagline: "Connect. Access. Anywhere.",
    email: "support@bantunet.org",
    emailLabel: "support@bantunet.org",
    linksTitle: "Website",
    legalTitle: "Legal",
    privacyLabel: "Privacy Policy",
    deleteAccountLabel: "Delete Account",
    termsPlaceholder: "Terms text placeholder",
    copyrightLabel: "Copyright",
    rightsText: "All rights reserved."
  }
} as const;

export type SiteContent = typeof siteContent;
export type IconName =
  | "badgeCheck"
  | "banknote"
  | "creditCard"
  | "fileText"
  | "globe2"
  | "handCoins"
  | "lifeBuoy"
  | "lockKeyhole"
  | "mapPin"
  | "mapPinned"
  | "network"
  | "radioTower"
  | "route"
  | "scanSearch"
  | "settings"
  | "shieldCheck"
  | "smartphone"
  | "trash2"
  | "userCheck"
  | "userPlus"
  | "users"
  | "wifi";
