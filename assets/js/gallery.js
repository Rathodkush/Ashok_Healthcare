/**
 * ASHOK HOME HEALTHCARE SERVICES - GALLERY INTERACTIVITY
 * Separates photos and videos, provides rich category filtering,
 * search, and interactive popup modals for both images and videos.
 */

(function () {
  'use strict';

  // 122 Verified Media Assets (108 Photos, 14 Videos)
  const GALLERY_ITEMS = [
  {
    "id": "img-1",
    "type": "photo",
    "src": "Gallery/gallery_1/WhatsApp Image 2026-09-25 at 7.47.11 PM (1).jpeg",
    "title": "Hospital-Grade Home ICU Setup #1",
    "category": "icu",
    "categoryLabel": "Home ICU Setup & Critical Care",
    "desc": "Full critical care configuration including ventilator, syringe pump, suction apparatus, and multi-parameter monitor.",
    "featured": false
  },
  {
    "id": "img-2",
    "type": "photo",
    "src": "Gallery/gallery_1/WhatsApp Image 2026-09-25 at 7.47.11 PM.jpeg",
    "title": "Certified Motorized Hospital Bed #2",
    "category": "beds",
    "categoryLabel": "Motorized Hospital Beds",
    "desc": "Multi-function motorized ICU bed with collapsible side railings, ABS headboards, and anti-decubitus mattress.",
    "featured": false
  },
  {
    "id": "img-3",
    "type": "photo",
    "src": "Gallery/gallery_1/WhatsApp Image 2026-09-25 at 7.47.12 PM (1).jpeg",
    "title": "Neuro & Ortho Rehabilitation Session #3",
    "category": "rehab",
    "categoryLabel": "Neuro & Ortho Rehabilitation",
    "desc": "Personalized home rehabilitation program restoring mobility, independence, and pain-free movement.",
    "featured": false
  },
  {
    "id": "img-4",
    "type": "photo",
    "src": "Gallery/gallery_1/WhatsApp Image 2026-09-25 at 7.47.12 PM.jpeg",
    "title": "Patient Mobility & Wheelchair Equipment #4",
    "category": "mobility",
    "categoryLabel": "Wheelchairs & Patient Mobility",
    "desc": "Ergonomic mobility aid designed for senior safety, smooth transit, and maximum patient dignity.",
    "featured": false
  },
  {
    "id": "img-5",
    "type": "photo",
    "src": "Gallery/gallery_1/WhatsApp Image 2026-09-25 at 7.47.13 PM.jpeg",
    "title": "Ashok Healthcare Clinical Supervision #5",
    "category": "team",
    "categoryLabel": "Clinical Leadership & Facility",
    "desc": "Supervised by former Apollo Hospitals clinical nursing leadership ensuring hospital standards at doorstep.",
    "featured": false
  },
  {
    "id": "img-6",
    "type": "photo",
    "src": "Gallery/gallery_1/WhatsApp Image 2026-09-25 at 7.47.14 PM.jpeg",
    "title": "Professional Bedside Nursing Care #6",
    "category": "nursing",
    "categoryLabel": "Bedside Nursing & Patient Care",
    "desc": "Registered GNM/B.Sc nurse delivering 24/7 dedicated patient monitoring and medication administration in Bengaluru.",
    "featured": false
  },
  {
    "id": "img-7",
    "type": "photo",
    "src": "Gallery/gallery_1/WhatsApp Image 2026-09-25 at 7.47.16 PM.jpeg",
    "title": "Hospital-Grade Home ICU Setup #7",
    "category": "icu",
    "categoryLabel": "Home ICU Setup & Critical Care",
    "desc": "Full critical care configuration including ventilator, syringe pump, suction apparatus, and multi-parameter monitor.",
    "featured": false
  },
  {
    "id": "img-8",
    "type": "photo",
    "src": "Gallery/gallery_1/WhatsApp Image 2026-09-25 at 7.47.17 PM.jpeg",
    "title": "Certified Motorized Hospital Bed #8",
    "category": "beds",
    "categoryLabel": "Motorized Hospital Beds",
    "desc": "Multi-function motorized ICU bed with collapsible side railings, ABS headboards, and anti-decubitus mattress.",
    "featured": false
  },
  {
    "id": "img-9",
    "type": "photo",
    "src": "Gallery/gallery_1/WhatsApp Image 2026-09-25 at 7.47.18 PM.jpeg",
    "title": "Neuro & Ortho Rehabilitation Session #9",
    "category": "rehab",
    "categoryLabel": "Neuro & Ortho Rehabilitation",
    "desc": "Personalized home rehabilitation program restoring mobility, independence, and pain-free movement.",
    "featured": false
  },
  {
    "id": "img-10",
    "type": "photo",
    "src": "Gallery/gallery_1/WhatsApp Image 2026-09-25 at 7.47.33 PM.jpeg",
    "title": "Patient Mobility & Wheelchair Equipment #10",
    "category": "mobility",
    "categoryLabel": "Wheelchairs & Patient Mobility",
    "desc": "Ergonomic mobility aid designed for senior safety, smooth transit, and maximum patient dignity.",
    "featured": false
  },
  {
    "id": "img-11",
    "type": "photo",
    "src": "Gallery/gallery_1/WhatsApp Image 2026-09-25 at 7.47.34 PM (1).jpeg",
    "title": "Ashok Healthcare Clinical Supervision #11",
    "category": "team",
    "categoryLabel": "Clinical Leadership & Facility",
    "desc": "Supervised by former Apollo Hospitals clinical nursing leadership ensuring hospital standards at doorstep.",
    "featured": false
  },
  {
    "id": "img-12",
    "type": "photo",
    "src": "Gallery/gallery_1/WhatsApp Image 2026-09-25 at 7.47.34 PM.jpeg",
    "title": "Professional Bedside Nursing Care #12",
    "category": "nursing",
    "categoryLabel": "Bedside Nursing & Patient Care",
    "desc": "Registered GNM/B.Sc nurse delivering 24/7 dedicated patient monitoring and medication administration in Bengaluru.",
    "featured": false
  },
  {
    "id": "img-13",
    "type": "photo",
    "src": "Gallery/gallery_1/WhatsApp Image 2026-09-25 at 7.47.35 PM (1).jpeg",
    "title": "Hospital-Grade Home ICU Setup #13",
    "category": "icu",
    "categoryLabel": "Home ICU Setup & Critical Care",
    "desc": "Full critical care configuration including ventilator, syringe pump, suction apparatus, and multi-parameter monitor.",
    "featured": false
  },
  {
    "id": "img-14",
    "type": "photo",
    "src": "Gallery/gallery_1/WhatsApp Image 2026-09-25 at 7.47.35 PM (2).jpeg",
    "title": "Certified Motorized Hospital Bed #14",
    "category": "beds",
    "categoryLabel": "Motorized Hospital Beds",
    "desc": "Multi-function motorized ICU bed with collapsible side railings, ABS headboards, and anti-decubitus mattress.",
    "featured": false
  },
  {
    "id": "img-15",
    "type": "photo",
    "src": "Gallery/gallery_1/WhatsApp Image 2026-09-25 at 7.47.35 PM.jpeg",
    "title": "Neuro & Ortho Rehabilitation Session #15",
    "category": "rehab",
    "categoryLabel": "Neuro & Ortho Rehabilitation",
    "desc": "Personalized home rehabilitation program restoring mobility, independence, and pain-free movement.",
    "featured": false
  },
  {
    "id": "img-16",
    "type": "photo",
    "src": "Gallery/gallery_1/WhatsApp Image 2026-09-25 at 7.47.36 PM (1).jpeg",
    "title": "Patient Mobility & Wheelchair Equipment #16",
    "category": "mobility",
    "categoryLabel": "Wheelchairs & Patient Mobility",
    "desc": "Ergonomic mobility aid designed for senior safety, smooth transit, and maximum patient dignity.",
    "featured": false
  },
  {
    "id": "img-17",
    "type": "photo",
    "src": "Gallery/gallery_1/WhatsApp Image 2026-09-25 at 7.47.36 PM (2).jpeg",
    "title": "Ashok Healthcare Clinical Supervision #17",
    "category": "team",
    "categoryLabel": "Clinical Leadership & Facility",
    "desc": "Supervised by former Apollo Hospitals clinical nursing leadership ensuring hospital standards at doorstep.",
    "featured": false
  },
  {
    "id": "img-18",
    "type": "photo",
    "src": "Gallery/gallery_1/WhatsApp Image 2026-09-25 at 7.47.36 PM.jpeg",
    "title": "Professional Bedside Nursing Care #18",
    "category": "nursing",
    "categoryLabel": "Bedside Nursing & Patient Care",
    "desc": "Registered GNM/B.Sc nurse delivering 24/7 dedicated patient monitoring and medication administration in Bengaluru.",
    "featured": false
  },
  {
    "id": "img-19",
    "type": "photo",
    "src": "Gallery/gallery_1/WhatsApp Image 2026-09-25 at 7.47.37 PM (1).jpeg",
    "title": "Hospital-Grade Home ICU Setup #19",
    "category": "icu",
    "categoryLabel": "Home ICU Setup & Critical Care",
    "desc": "Full critical care configuration including ventilator, syringe pump, suction apparatus, and multi-parameter monitor.",
    "featured": false
  },
  {
    "id": "img-20",
    "type": "photo",
    "src": "Gallery/gallery_1/WhatsApp Image 2026-09-25 at 7.47.37 PM (2).jpeg",
    "title": "Certified Motorized Hospital Bed #20",
    "category": "beds",
    "categoryLabel": "Motorized Hospital Beds",
    "desc": "Multi-function motorized ICU bed with collapsible side railings, ABS headboards, and anti-decubitus mattress.",
    "featured": false
  },
  {
    "id": "img-21",
    "type": "photo",
    "src": "Gallery/gallery_1/WhatsApp Image 2026-09-25 at 7.47.37 PM.jpeg",
    "title": "Neuro & Ortho Rehabilitation Session #21",
    "category": "rehab",
    "categoryLabel": "Neuro & Ortho Rehabilitation",
    "desc": "Personalized home rehabilitation program restoring mobility, independence, and pain-free movement.",
    "featured": false
  },
  {
    "id": "img-22",
    "type": "photo",
    "src": "Gallery/gallery_1/WhatsApp Image 2026-09-25 at 7.47.38 PM (1).jpeg",
    "title": "Patient Mobility & Wheelchair Equipment #22",
    "category": "mobility",
    "categoryLabel": "Wheelchairs & Patient Mobility",
    "desc": "Ergonomic mobility aid designed for senior safety, smooth transit, and maximum patient dignity.",
    "featured": false
  },
  {
    "id": "img-23",
    "type": "photo",
    "src": "Gallery/gallery_1/WhatsApp Image 2026-09-25 at 7.47.38 PM (2).jpeg",
    "title": "Ashok Healthcare Clinical Supervision #23",
    "category": "team",
    "categoryLabel": "Clinical Leadership & Facility",
    "desc": "Supervised by former Apollo Hospitals clinical nursing leadership ensuring hospital standards at doorstep.",
    "featured": false
  },
  {
    "id": "img-24",
    "type": "photo",
    "src": "Gallery/gallery_1/WhatsApp Image 2026-09-25 at 7.47.38 PM (3).jpeg",
    "title": "Professional Bedside Nursing Care #24",
    "category": "nursing",
    "categoryLabel": "Bedside Nursing & Patient Care",
    "desc": "Registered GNM/B.Sc nurse delivering 24/7 dedicated patient monitoring and medication administration in Bengaluru.",
    "featured": false
  },
  {
    "id": "img-25",
    "type": "photo",
    "src": "Gallery/gallery_1/WhatsApp Image 2026-09-25 at 7.47.38 PM.jpeg",
    "title": "Hospital-Grade Home ICU Setup #25",
    "category": "icu",
    "categoryLabel": "Home ICU Setup & Critical Care",
    "desc": "Full critical care configuration including ventilator, syringe pump, suction apparatus, and multi-parameter monitor.",
    "featured": false
  },
  {
    "id": "img-26",
    "type": "photo",
    "src": "Gallery/gallery_1/WhatsApp Image 2026-09-25 at 7.47.39 PM (1).jpeg",
    "title": "Certified Motorized Hospital Bed #26",
    "category": "beds",
    "categoryLabel": "Motorized Hospital Beds",
    "desc": "Multi-function motorized ICU bed with collapsible side railings, ABS headboards, and anti-decubitus mattress.",
    "featured": false
  },
  {
    "id": "img-27",
    "type": "photo",
    "src": "Gallery/gallery_1/WhatsApp Image 2026-09-25 at 7.47.39 PM (2).jpeg",
    "title": "Neuro & Ortho Rehabilitation Session #27",
    "category": "rehab",
    "categoryLabel": "Neuro & Ortho Rehabilitation",
    "desc": "Personalized home rehabilitation program restoring mobility, independence, and pain-free movement.",
    "featured": false
  },
  {
    "id": "img-28",
    "type": "photo",
    "src": "Gallery/gallery_1/WhatsApp Image 2026-09-25 at 7.47.39 PM.jpeg",
    "title": "Patient Mobility & Wheelchair Equipment #28",
    "category": "mobility",
    "categoryLabel": "Wheelchairs & Patient Mobility",
    "desc": "Ergonomic mobility aid designed for senior safety, smooth transit, and maximum patient dignity.",
    "featured": false
  },
  {
    "id": "img-29",
    "type": "photo",
    "src": "Gallery/gallery_1/WhatsApp Image 2026-09-25 at 7.47.40 PM (1).jpeg",
    "title": "Ashok Healthcare Clinical Supervision #29",
    "category": "team",
    "categoryLabel": "Clinical Leadership & Facility",
    "desc": "Supervised by former Apollo Hospitals clinical nursing leadership ensuring hospital standards at doorstep.",
    "featured": false
  },
  {
    "id": "img-30",
    "type": "photo",
    "src": "Gallery/gallery_1/WhatsApp Image 2026-09-25 at 7.47.40 PM (2).jpeg",
    "title": "Professional Bedside Nursing Care #30",
    "category": "nursing",
    "categoryLabel": "Bedside Nursing & Patient Care",
    "desc": "Registered GNM/B.Sc nurse delivering 24/7 dedicated patient monitoring and medication administration in Bengaluru.",
    "featured": false
  },
  {
    "id": "img-31",
    "type": "photo",
    "src": "Gallery/gallery_1/WhatsApp Image 2026-09-25 at 7.47.40 PM.jpeg",
    "title": "Hospital-Grade Home ICU Setup #31",
    "category": "icu",
    "categoryLabel": "Home ICU Setup & Critical Care",
    "desc": "Full critical care configuration including ventilator, syringe pump, suction apparatus, and multi-parameter monitor.",
    "featured": false
  },
  {
    "id": "img-32",
    "type": "photo",
    "src": "Gallery/gallery_1/WhatsApp Image 2026-09-25 at 7.47.41 PM (1).jpeg",
    "title": "Certified Motorized Hospital Bed #32",
    "category": "beds",
    "categoryLabel": "Motorized Hospital Beds",
    "desc": "Multi-function motorized ICU bed with collapsible side railings, ABS headboards, and anti-decubitus mattress.",
    "featured": false
  },
  {
    "id": "img-33",
    "type": "photo",
    "src": "Gallery/gallery_1/WhatsApp Image 2026-09-25 at 7.47.41 PM (2).jpeg",
    "title": "Neuro & Ortho Rehabilitation Session #33",
    "category": "rehab",
    "categoryLabel": "Neuro & Ortho Rehabilitation",
    "desc": "Personalized home rehabilitation program restoring mobility, independence, and pain-free movement.",
    "featured": false
  },
  {
    "id": "img-34",
    "type": "photo",
    "src": "Gallery/gallery_1/WhatsApp Image 2026-09-25 at 7.47.41 PM.jpeg",
    "title": "Patient Mobility & Wheelchair Equipment #34",
    "category": "mobility",
    "categoryLabel": "Wheelchairs & Patient Mobility",
    "desc": "Ergonomic mobility aid designed for senior safety, smooth transit, and maximum patient dignity.",
    "featured": false
  },
  {
    "id": "img-35",
    "type": "photo",
    "src": "Gallery/gallery_1/WhatsApp Image 2026-09-25 at 7.47.42 PM (1).jpeg",
    "title": "Ashok Healthcare Clinical Supervision #35",
    "category": "team",
    "categoryLabel": "Clinical Leadership & Facility",
    "desc": "Supervised by former Apollo Hospitals clinical nursing leadership ensuring hospital standards at doorstep.",
    "featured": false
  },
  {
    "id": "img-36",
    "type": "photo",
    "src": "Gallery/gallery_1/WhatsApp Image 2026-09-25 at 7.47.42 PM (2).jpeg",
    "title": "Professional Bedside Nursing Care #36",
    "category": "nursing",
    "categoryLabel": "Bedside Nursing & Patient Care",
    "desc": "Registered GNM/B.Sc nurse delivering 24/7 dedicated patient monitoring and medication administration in Bengaluru.",
    "featured": false
  },
  {
    "id": "img-37",
    "type": "photo",
    "src": "Gallery/gallery_1/WhatsApp Image 2026-09-25 at 7.47.42 PM (3).jpeg",
    "title": "Hospital-Grade Home ICU Setup #37",
    "category": "icu",
    "categoryLabel": "Home ICU Setup & Critical Care",
    "desc": "Full critical care configuration including ventilator, syringe pump, suction apparatus, and multi-parameter monitor.",
    "featured": false
  },
  {
    "id": "img-38",
    "type": "photo",
    "src": "Gallery/gallery_1/WhatsApp Image 2026-09-25 at 7.47.42 PM.jpeg",
    "title": "Certified Motorized Hospital Bed #38",
    "category": "beds",
    "categoryLabel": "Motorized Hospital Beds",
    "desc": "Multi-function motorized ICU bed with collapsible side railings, ABS headboards, and anti-decubitus mattress.",
    "featured": false
  },
  {
    "id": "img-39",
    "type": "photo",
    "src": "Gallery/gallery_1/WhatsApp Image 2026-09-25 at 7.47.43 PM (1).jpeg",
    "title": "Neuro & Ortho Rehabilitation Session #39",
    "category": "rehab",
    "categoryLabel": "Neuro & Ortho Rehabilitation",
    "desc": "Personalized home rehabilitation program restoring mobility, independence, and pain-free movement.",
    "featured": false
  },
  {
    "id": "img-40",
    "type": "photo",
    "src": "Gallery/gallery_1/WhatsApp Image 2026-09-25 at 7.47.43 PM.jpeg",
    "title": "Patient Mobility & Wheelchair Equipment #40",
    "category": "mobility",
    "categoryLabel": "Wheelchairs & Patient Mobility",
    "desc": "Ergonomic mobility aid designed for senior safety, smooth transit, and maximum patient dignity.",
    "featured": false
  },
  {
    "id": "img-41",
    "type": "photo",
    "src": "Gallery/gallery_1/WhatsApp Image 2026-09-25 at 7.47.44 PM (1).jpeg",
    "title": "Ashok Healthcare Clinical Supervision #41",
    "category": "team",
    "categoryLabel": "Clinical Leadership & Facility",
    "desc": "Supervised by former Apollo Hospitals clinical nursing leadership ensuring hospital standards at doorstep.",
    "featured": false
  },
  {
    "id": "img-42",
    "type": "photo",
    "src": "Gallery/gallery_1/WhatsApp Image 2026-09-25 at 7.47.44 PM (2).jpeg",
    "title": "Professional Bedside Nursing Care #42",
    "category": "nursing",
    "categoryLabel": "Bedside Nursing & Patient Care",
    "desc": "Registered GNM/B.Sc nurse delivering 24/7 dedicated patient monitoring and medication administration in Bengaluru.",
    "featured": false
  },
  {
    "id": "img-43",
    "type": "photo",
    "src": "Gallery/gallery_1/WhatsApp Image 2026-09-25 at 7.47.44 PM.jpeg",
    "title": "Hospital-Grade Home ICU Setup #43",
    "category": "icu",
    "categoryLabel": "Home ICU Setup & Critical Care",
    "desc": "Full critical care configuration including ventilator, syringe pump, suction apparatus, and multi-parameter monitor.",
    "featured": false
  },
  {
    "id": "img-44",
    "type": "photo",
    "src": "Gallery/gallery_1/WhatsApp Image 2026-09-25 at 7.47.45 PM (1).jpeg",
    "title": "Certified Motorized Hospital Bed #44",
    "category": "beds",
    "categoryLabel": "Motorized Hospital Beds",
    "desc": "Multi-function motorized ICU bed with collapsible side railings, ABS headboards, and anti-decubitus mattress.",
    "featured": false
  },
  {
    "id": "img-45",
    "type": "photo",
    "src": "Gallery/gallery_1/WhatsApp Image 2026-09-25 at 7.47.45 PM.jpeg",
    "title": "Neuro & Ortho Rehabilitation Session #45",
    "category": "rehab",
    "categoryLabel": "Neuro & Ortho Rehabilitation",
    "desc": "Personalized home rehabilitation program restoring mobility, independence, and pain-free movement.",
    "featured": false
  },
  {
    "id": "img-46",
    "type": "photo",
    "src": "Gallery/gallery_1/WhatsApp Image 2026-09-25 at 7.47.46 PM (1).jpeg",
    "title": "Patient Mobility & Wheelchair Equipment #46",
    "category": "mobility",
    "categoryLabel": "Wheelchairs & Patient Mobility",
    "desc": "Ergonomic mobility aid designed for senior safety, smooth transit, and maximum patient dignity.",
    "featured": false
  },
  {
    "id": "img-47",
    "type": "photo",
    "src": "Gallery/gallery_1/WhatsApp Image 2026-09-25 at 7.47.46 PM (2).jpeg",
    "title": "Ashok Healthcare Clinical Supervision #47",
    "category": "team",
    "categoryLabel": "Clinical Leadership & Facility",
    "desc": "Supervised by former Apollo Hospitals clinical nursing leadership ensuring hospital standards at doorstep.",
    "featured": false
  },
  {
    "id": "img-48",
    "type": "photo",
    "src": "Gallery/gallery_1/WhatsApp Image 2026-09-25 at 7.47.46 PM.jpeg",
    "title": "Professional Bedside Nursing Care #48",
    "category": "nursing",
    "categoryLabel": "Bedside Nursing & Patient Care",
    "desc": "Registered GNM/B.Sc nurse delivering 24/7 dedicated patient monitoring and medication administration in Bengaluru.",
    "featured": false
  },
  {
    "id": "img-49",
    "type": "photo",
    "src": "Gallery/gallery_1/WhatsApp Image 2026-09-25 at 7.47.47 PM (1).jpeg",
    "title": "Hospital-Grade Home ICU Setup #49",
    "category": "icu",
    "categoryLabel": "Home ICU Setup & Critical Care",
    "desc": "Full critical care configuration including ventilator, syringe pump, suction apparatus, and multi-parameter monitor.",
    "featured": false
  },
  {
    "id": "img-50",
    "type": "photo",
    "src": "Gallery/gallery_1/WhatsApp Image 2026-09-25 at 7.47.47 PM (2).jpeg",
    "title": "Certified Motorized Hospital Bed #50",
    "category": "beds",
    "categoryLabel": "Motorized Hospital Beds",
    "desc": "Multi-function motorized ICU bed with collapsible side railings, ABS headboards, and anti-decubitus mattress.",
    "featured": false
  },
  {
    "id": "img-51",
    "type": "photo",
    "src": "Gallery/gallery_1/WhatsApp Image 2026-09-25 at 7.47.47 PM.jpeg",
    "title": "Neuro & Ortho Rehabilitation Session #51",
    "category": "rehab",
    "categoryLabel": "Neuro & Ortho Rehabilitation",
    "desc": "Personalized home rehabilitation program restoring mobility, independence, and pain-free movement.",
    "featured": false
  },
  {
    "id": "img-52",
    "type": "photo",
    "src": "Gallery/gallery_1/WhatsApp Image 2026-09-25 at 7.47.48 PM (1).jpeg",
    "title": "Patient Mobility & Wheelchair Equipment #52",
    "category": "mobility",
    "categoryLabel": "Wheelchairs & Patient Mobility",
    "desc": "Ergonomic mobility aid designed for senior safety, smooth transit, and maximum patient dignity.",
    "featured": false
  },
  {
    "id": "img-53",
    "type": "photo",
    "src": "Gallery/gallery_1/WhatsApp Image 2026-09-25 at 7.47.48 PM (2).jpeg",
    "title": "Ashok Healthcare Clinical Supervision #53",
    "category": "team",
    "categoryLabel": "Clinical Leadership & Facility",
    "desc": "Supervised by former Apollo Hospitals clinical nursing leadership ensuring hospital standards at doorstep.",
    "featured": false
  },
  {
    "id": "img-54",
    "type": "photo",
    "src": "Gallery/gallery_1/WhatsApp Image 2026-09-25 at 7.47.48 PM.jpeg",
    "title": "Professional Bedside Nursing Care #54",
    "category": "nursing",
    "categoryLabel": "Bedside Nursing & Patient Care",
    "desc": "Registered GNM/B.Sc nurse delivering 24/7 dedicated patient monitoring and medication administration in Bengaluru.",
    "featured": false
  },
  {
    "id": "img-55",
    "type": "photo",
    "src": "Gallery/gallery_1/WhatsApp Image 2026-09-25 at 7.47.49 PM (1).jpeg",
    "title": "Hospital-Grade Home ICU Setup #55",
    "category": "icu",
    "categoryLabel": "Home ICU Setup & Critical Care",
    "desc": "Full critical care configuration including ventilator, syringe pump, suction apparatus, and multi-parameter monitor.",
    "featured": false
  },
  {
    "id": "img-56",
    "type": "photo",
    "src": "Gallery/gallery_1/WhatsApp Image 2026-09-25 at 7.47.49 PM.jpeg",
    "title": "Certified Motorized Hospital Bed #56",
    "category": "beds",
    "categoryLabel": "Motorized Hospital Beds",
    "desc": "Multi-function motorized ICU bed with collapsible side railings, ABS headboards, and anti-decubitus mattress.",
    "featured": false
  },
  {
    "id": "img-57",
    "type": "photo",
    "src": "Gallery/gallery_1/WhatsApp Image 2026-09-25 at 7.47.50 PM (1).jpeg",
    "title": "Neuro & Ortho Rehabilitation Session #57",
    "category": "rehab",
    "categoryLabel": "Neuro & Ortho Rehabilitation",
    "desc": "Personalized home rehabilitation program restoring mobility, independence, and pain-free movement.",
    "featured": false
  },
  {
    "id": "img-58",
    "type": "photo",
    "src": "Gallery/gallery_1/WhatsApp Image 2026-09-25 at 7.47.50 PM (2).jpeg",
    "title": "Patient Mobility & Wheelchair Equipment #58",
    "category": "mobility",
    "categoryLabel": "Wheelchairs & Patient Mobility",
    "desc": "Ergonomic mobility aid designed for senior safety, smooth transit, and maximum patient dignity.",
    "featured": false
  },
  {
    "id": "img-59",
    "type": "photo",
    "src": "Gallery/gallery_1/WhatsApp Image 2026-09-25 at 7.47.50 PM.jpeg",
    "title": "Ashok Healthcare Clinical Supervision #59",
    "category": "team",
    "categoryLabel": "Clinical Leadership & Facility",
    "desc": "Supervised by former Apollo Hospitals clinical nursing leadership ensuring hospital standards at doorstep.",
    "featured": false
  },
  {
    "id": "img-60",
    "type": "photo",
    "src": "Gallery/gallery_1/WhatsApp Image 2026-09-25 at 7.47.51 PM (1).jpeg",
    "title": "Professional Bedside Nursing Care #60",
    "category": "nursing",
    "categoryLabel": "Bedside Nursing & Patient Care",
    "desc": "Registered GNM/B.Sc nurse delivering 24/7 dedicated patient monitoring and medication administration in Bengaluru.",
    "featured": false
  },
  {
    "id": "img-61",
    "type": "photo",
    "src": "Gallery/gallery_1/WhatsApp Image 2026-09-25 at 7.47.51 PM.jpeg",
    "title": "Hospital-Grade Home ICU Setup #61",
    "category": "icu",
    "categoryLabel": "Home ICU Setup & Critical Care",
    "desc": "Full critical care configuration including ventilator, syringe pump, suction apparatus, and multi-parameter monitor.",
    "featured": false
  },
  {
    "id": "img-62",
    "type": "photo",
    "src": "Gallery/gallery_1/WhatsApp Image 2026-09-25 at 7.47.52 PM (1).jpeg",
    "title": "Certified Motorized Hospital Bed #62",
    "category": "beds",
    "categoryLabel": "Motorized Hospital Beds",
    "desc": "Multi-function motorized ICU bed with collapsible side railings, ABS headboards, and anti-decubitus mattress.",
    "featured": false
  },
  {
    "id": "img-63",
    "type": "photo",
    "src": "Gallery/gallery_1/WhatsApp Image 2026-09-25 at 7.47.52 PM (2).jpeg",
    "title": "Neuro & Ortho Rehabilitation Session #63",
    "category": "rehab",
    "categoryLabel": "Neuro & Ortho Rehabilitation",
    "desc": "Personalized home rehabilitation program restoring mobility, independence, and pain-free movement.",
    "featured": false
  },
  {
    "id": "img-64",
    "type": "photo",
    "src": "Gallery/gallery_1/WhatsApp Image 2026-09-25 at 7.47.52 PM.jpeg",
    "title": "Patient Mobility & Wheelchair Equipment #64",
    "category": "mobility",
    "categoryLabel": "Wheelchairs & Patient Mobility",
    "desc": "Ergonomic mobility aid designed for senior safety, smooth transit, and maximum patient dignity.",
    "featured": false
  },
  {
    "id": "img-65",
    "type": "photo",
    "src": "Gallery/gallery_1/WhatsApp Image 2026-09-25 at 7.47.53 PM (1).jpeg",
    "title": "Ashok Healthcare Clinical Supervision #65",
    "category": "team",
    "categoryLabel": "Clinical Leadership & Facility",
    "desc": "Supervised by former Apollo Hospitals clinical nursing leadership ensuring hospital standards at doorstep.",
    "featured": false
  },
  {
    "id": "img-66",
    "type": "photo",
    "src": "Gallery/gallery_1/WhatsApp Image 2026-09-25 at 7.47.53 PM.jpeg",
    "title": "Professional Bedside Nursing Care #66",
    "category": "nursing",
    "categoryLabel": "Bedside Nursing & Patient Care",
    "desc": "Registered GNM/B.Sc nurse delivering 24/7 dedicated patient monitoring and medication administration in Bengaluru.",
    "featured": false
  },
  {
    "id": "img-67",
    "type": "photo",
    "src": "Gallery/gallery_1/WhatsApp Image 2026-09-25 at 7.47.54 PM (1).jpeg",
    "title": "Hospital-Grade Home ICU Setup #67",
    "category": "icu",
    "categoryLabel": "Home ICU Setup & Critical Care",
    "desc": "Full critical care configuration including ventilator, syringe pump, suction apparatus, and multi-parameter monitor.",
    "featured": false
  },
  {
    "id": "img-68",
    "type": "photo",
    "src": "Gallery/gallery_1/WhatsApp Image 2026-09-25 at 7.47.54 PM (2).jpeg",
    "title": "Certified Motorized Hospital Bed #68",
    "category": "beds",
    "categoryLabel": "Motorized Hospital Beds",
    "desc": "Multi-function motorized ICU bed with collapsible side railings, ABS headboards, and anti-decubitus mattress.",
    "featured": false
  },
  {
    "id": "img-69",
    "type": "photo",
    "src": "Gallery/gallery_1/WhatsApp Image 2026-09-25 at 7.47.54 PM (3).jpeg",
    "title": "Neuro & Ortho Rehabilitation Session #69",
    "category": "rehab",
    "categoryLabel": "Neuro & Ortho Rehabilitation",
    "desc": "Personalized home rehabilitation program restoring mobility, independence, and pain-free movement.",
    "featured": false
  },
  {
    "id": "img-70",
    "type": "photo",
    "src": "Gallery/gallery_1/WhatsApp Image 2026-09-25 at 7.47.54 PM (4).jpeg",
    "title": "Patient Mobility & Wheelchair Equipment #70",
    "category": "mobility",
    "categoryLabel": "Wheelchairs & Patient Mobility",
    "desc": "Ergonomic mobility aid designed for senior safety, smooth transit, and maximum patient dignity.",
    "featured": false
  },
  {
    "id": "img-71",
    "type": "photo",
    "src": "Gallery/gallery_1/WhatsApp Image 2026-09-25 at 7.47.54 PM.jpeg",
    "title": "Ashok Healthcare Clinical Supervision #71",
    "category": "team",
    "categoryLabel": "Clinical Leadership & Facility",
    "desc": "Supervised by former Apollo Hospitals clinical nursing leadership ensuring hospital standards at doorstep.",
    "featured": false
  },
  {
    "id": "img-72",
    "type": "photo",
    "src": "Gallery/gallery_1/WhatsApp Image 2026-09-25 at 7.47.55 PM (1).jpeg",
    "title": "Professional Bedside Nursing Care #72",
    "category": "nursing",
    "categoryLabel": "Bedside Nursing & Patient Care",
    "desc": "Registered GNM/B.Sc nurse delivering 24/7 dedicated patient monitoring and medication administration in Bengaluru.",
    "featured": false
  },
  {
    "id": "img-73",
    "type": "photo",
    "src": "Gallery/gallery_1/WhatsApp Image 2026-09-25 at 7.47.55 PM (2).jpeg",
    "title": "Hospital-Grade Home ICU Setup #73",
    "category": "icu",
    "categoryLabel": "Home ICU Setup & Critical Care",
    "desc": "Full critical care configuration including ventilator, syringe pump, suction apparatus, and multi-parameter monitor.",
    "featured": false
  },
  {
    "id": "img-74",
    "type": "photo",
    "src": "Gallery/gallery_1/WhatsApp Image 2026-09-25 at 7.47.55 PM (3).jpeg",
    "title": "Certified Motorized Hospital Bed #74",
    "category": "beds",
    "categoryLabel": "Motorized Hospital Beds",
    "desc": "Multi-function motorized ICU bed with collapsible side railings, ABS headboards, and anti-decubitus mattress.",
    "featured": false
  },
  {
    "id": "img-75",
    "type": "photo",
    "src": "Gallery/gallery_1/WhatsApp Image 2026-09-25 at 7.47.55 PM.jpeg",
    "title": "Neuro & Ortho Rehabilitation Session #75",
    "category": "rehab",
    "categoryLabel": "Neuro & Ortho Rehabilitation",
    "desc": "Personalized home rehabilitation program restoring mobility, independence, and pain-free movement.",
    "featured": false
  },
  {
    "id": "img-76",
    "type": "photo",
    "src": "Gallery/gallery_1/WhatsApp Image 2026-09-25 at 7.47.56 PM (1).jpeg",
    "title": "Patient Mobility & Wheelchair Equipment #76",
    "category": "mobility",
    "categoryLabel": "Wheelchairs & Patient Mobility",
    "desc": "Ergonomic mobility aid designed for senior safety, smooth transit, and maximum patient dignity.",
    "featured": false
  },
  {
    "id": "img-77",
    "type": "photo",
    "src": "Gallery/gallery_1/WhatsApp Image 2026-09-25 at 7.47.56 PM (2).jpeg",
    "title": "Ashok Healthcare Clinical Supervision #77",
    "category": "team",
    "categoryLabel": "Clinical Leadership & Facility",
    "desc": "Supervised by former Apollo Hospitals clinical nursing leadership ensuring hospital standards at doorstep.",
    "featured": false
  },
  {
    "id": "img-78",
    "type": "photo",
    "src": "Gallery/gallery_1/WhatsApp Image 2026-09-25 at 7.47.56 PM (3).jpeg",
    "title": "Professional Bedside Nursing Care #78",
    "category": "nursing",
    "categoryLabel": "Bedside Nursing & Patient Care",
    "desc": "Registered GNM/B.Sc nurse delivering 24/7 dedicated patient monitoring and medication administration in Bengaluru.",
    "featured": false
  },
  {
    "id": "img-79",
    "type": "photo",
    "src": "Gallery/gallery_1/WhatsApp Image 2026-09-25 at 7.47.56 PM.jpeg",
    "title": "Hospital-Grade Home ICU Setup #79",
    "category": "icu",
    "categoryLabel": "Home ICU Setup & Critical Care",
    "desc": "Full critical care configuration including ventilator, syringe pump, suction apparatus, and multi-parameter monitor.",
    "featured": false
  },
  {
    "id": "img-80",
    "type": "photo",
    "src": "Gallery/gallery_1/WhatsApp Image 2026-09-25 at 7.47.57 PM (1).jpeg",
    "title": "Certified Motorized Hospital Bed #80",
    "category": "beds",
    "categoryLabel": "Motorized Hospital Beds",
    "desc": "Multi-function motorized ICU bed with collapsible side railings, ABS headboards, and anti-decubitus mattress.",
    "featured": false
  },
  {
    "id": "img-81",
    "type": "photo",
    "src": "Gallery/gallery_1/WhatsApp Image 2026-09-25 at 7.47.57 PM.jpeg",
    "title": "Neuro & Ortho Rehabilitation Session #81",
    "category": "rehab",
    "categoryLabel": "Neuro & Ortho Rehabilitation",
    "desc": "Personalized home rehabilitation program restoring mobility, independence, and pain-free movement.",
    "featured": false
  },
  {
    "id": "vid-1",
    "type": "video",
    "src": "Gallery/gallery_1/WhatsApp Video 2026-09-25 at 7.47.18 PM.mp4",
    "title": "Advanced Home ICU Setup with Multipara Monitor & Ventilator",
    "category": "icu",
    "categoryLabel": "Home ICU Setup & Critical Care",
    "desc": "Demonstration of critical care setup installed at patient residence in Bengaluru by Ashok Healthcare clinical engineers.",
    "featured": true
  },
  {
    "id": "vid-2",
    "type": "video",
    "src": "Gallery/gallery_1/WhatsApp Video 2026-09-25 at 7.47.19 PM (1).mp4",
    "title": "Motorized Electric ICU Hospital Bed Remote Adjustment",
    "category": "beds",
    "categoryLabel": "Motorized Hospital Beds",
    "desc": "Electronic 5-function ICU bed operation with cardiac chair and height adjustment for paralyzed patients.",
    "featured": true
  },
  {
    "id": "vid-3",
    "type": "video",
    "src": "Gallery/gallery_1/WhatsApp Video 2026-09-25 at 7.47.19 PM.mp4",
    "title": "Clinical Bedside Nursing & Vitals Monitoring in Bengaluru",
    "category": "nursing",
    "categoryLabel": "Bedside Nursing & Patient Care",
    "desc": "Registered nurse conducting tracheostomy care, IV administration, and round-the-clock vitals tracking.",
    "featured": true
  },
  {
    "id": "vid-4",
    "type": "video",
    "src": "Gallery/gallery_1/WhatsApp Video 2026-09-25 at 7.47.20 PM.mp4",
    "title": "Portable Oxygen Concentrator & BiPAP Machine Clinical Demo",
    "category": "icu",
    "categoryLabel": "Home ICU Setup & Critical Care",
    "desc": "High-purity oxygen flow calibration and non-invasive ventilation setup for respiratory distress patients.",
    "featured": true
  },
  {
    "id": "vid-5",
    "type": "video",
    "src": "Gallery/gallery_1/WhatsApp Video 2026-09-25 at 7.47.21 PM.mp4",
    "title": "Stroke Patient Neuro-Rehabilitation & Gait Therapy",
    "category": "rehab",
    "categoryLabel": "Neuro & Ortho Rehabilitation",
    "desc": "Clinical physiotherapist conducting passive range of motion, muscle stimulation, and assisted walking recovery.",
    "featured": false
  },
  {
    "id": "vid-6",
    "type": "video",
    "src": "Gallery/gallery_1/WhatsApp Video 2026-09-25 at 7.47.22 PM.mp4",
    "title": "Deluxe Motorized Power Wheelchair Maneuverability Demo",
    "category": "mobility",
    "categoryLabel": "Wheelchairs & Patient Mobility",
    "desc": "Foldable electric wheelchair joystick navigation and comfort ergonomics for indoor and outdoor independence.",
    "featured": false
  },
  {
    "id": "vid-7",
    "type": "video",
    "src": "Gallery/gallery_1/WhatsApp Video 2026-09-25 at 7.47.24 PM.mp4",
    "title": "Bedside Patient Care & Post-Operative Wound Dressing",
    "category": "nursing",
    "categoryLabel": "Bedside Nursing & Patient Care",
    "desc": "Sterile surgical site dressing and catheter management by senior GNM clinical nurse.",
    "featured": false
  },
  {
    "id": "vid-8",
    "type": "video",
    "src": "Gallery/gallery_1/WhatsApp Video 2026-09-25 at 7.47.25 PM.mp4",
    "title": "Home ICU Installation & Medical Gas Pipeline Setup",
    "category": "icu",
    "categoryLabel": "Home ICU Setup & Critical Care",
    "desc": "Rapid emergency deployment of clinical ICU equipment, suction unit, and backup oxygen cylinders.",
    "featured": false
  },
  {
    "id": "vid-9",
    "type": "video",
    "src": "Gallery/gallery_1/WhatsApp Video 2026-09-25 at 7.47.27 PM.mp4",
    "title": "Orthopedic Post-Hip Replacement Bed Mobility Assistance",
    "category": "rehab",
    "categoryLabel": "Neuro & Ortho Rehabilitation",
    "desc": "Caregiver and nurse guiding safe transfer technique from motorized bed to wheelchair.",
    "featured": false
  },
  {
    "id": "vid-10",
    "type": "video",
    "src": "Gallery/gallery_1/WhatsApp Video 2026-09-25 at 7.47.29 PM.mp4",
    "title": "Hospital Fowler Bed Backrest & Knee-rest Ergonomics",
    "category": "beds",
    "categoryLabel": "Motorized Hospital Beds",
    "desc": "Ergonomic positioning demo preventing pressure ulcers and aiding patient feeding and pulmonary drainage.",
    "featured": false
  },
  {
    "id": "vid-11",
    "type": "video",
    "src": "Gallery/gallery_1/WhatsApp Video 2026-09-25 at 7.47.30 PM.mp4",
    "title": "Multipara Vital Signs Patient Monitor Demo",
    "category": "icu",
    "categoryLabel": "Home ICU Setup & Critical Care",
    "desc": "Real-time ECG, SpO2, NIBP, and temperature clinical alarm monitoring at home.",
    "featured": false
  },
  {
    "id": "vid-12",
    "type": "video",
    "src": "Gallery/gallery_1/WhatsApp Video 2026-09-25 at 7.47.31 PM.mp4",
    "title": "Elder Care Assistance & Physical Therapy Session",
    "category": "rehab",
    "categoryLabel": "Neuro & Ortho Rehabilitation",
    "desc": "Compassionate geriatric care, range of motion exercises, and fall-prevention support.",
    "featured": false
  },
  {
    "id": "vid-13",
    "type": "video",
    "src": "Gallery/gallery_1/WhatsApp Video 2026-09-25 at 7.47.33 PM.mp4",
    "title": "Critical Patient Oxygen Therapy & Delivery Fleet Dispatch",
    "category": "icu",
    "categoryLabel": "Home ICU Setup & Critical Care",
    "desc": "Rapid response delivery vehicle dispatching life-saving medical equipment across Yeshwanthpur.",
    "featured": false
  },
  {
    "id": "img-82",
    "type": "photo",
    "src": "Gallery/gallery_2/WhatsApp Image 2026-09-25 at 7.46.57 PM.jpeg",
    "title": "Patient Mobility & Wheelchair Equipment #82",
    "category": "mobility",
    "categoryLabel": "Wheelchairs & Patient Mobility",
    "desc": "Ergonomic mobility aid designed for senior safety, smooth transit, and maximum patient dignity.",
    "featured": false
  },
  {
    "id": "img-83",
    "type": "photo",
    "src": "Gallery/gallery_2/WhatsApp Image 2026-09-25 at 7.46.58 PM.jpeg",
    "title": "Ashok Healthcare Clinical Supervision #83",
    "category": "team",
    "categoryLabel": "Clinical Leadership & Facility",
    "desc": "Supervised by former Apollo Hospitals clinical nursing leadership ensuring hospital standards at doorstep.",
    "featured": false
  },
  {
    "id": "img-84",
    "type": "photo",
    "src": "Gallery/gallery_2/WhatsApp Image 2026-09-25 at 7.46.59 PM (1).jpeg",
    "title": "Professional Bedside Nursing Care #84",
    "category": "nursing",
    "categoryLabel": "Bedside Nursing & Patient Care",
    "desc": "Registered GNM/B.Sc nurse delivering 24/7 dedicated patient monitoring and medication administration in Bengaluru.",
    "featured": false
  },
  {
    "id": "img-85",
    "type": "photo",
    "src": "Gallery/gallery_2/WhatsApp Image 2026-09-25 at 7.46.59 PM.jpeg",
    "title": "Hospital-Grade Home ICU Setup #85",
    "category": "icu",
    "categoryLabel": "Home ICU Setup & Critical Care",
    "desc": "Full critical care configuration including ventilator, syringe pump, suction apparatus, and multi-parameter monitor.",
    "featured": false
  },
  {
    "id": "img-86",
    "type": "photo",
    "src": "Gallery/gallery_2/WhatsApp Image 2026-09-25 at 7.47.02 PM.jpeg",
    "title": "Certified Motorized Hospital Bed #86",
    "category": "beds",
    "categoryLabel": "Motorized Hospital Beds",
    "desc": "Multi-function motorized ICU bed with collapsible side railings, ABS headboards, and anti-decubitus mattress.",
    "featured": false
  },
  {
    "id": "img-87",
    "type": "photo",
    "src": "Gallery/gallery_2/WhatsApp Image 2026-09-25 at 7.47.03 PM (1).jpeg",
    "title": "Neuro & Ortho Rehabilitation Session #87",
    "category": "rehab",
    "categoryLabel": "Neuro & Ortho Rehabilitation",
    "desc": "Personalized home rehabilitation program restoring mobility, independence, and pain-free movement.",
    "featured": false
  },
  {
    "id": "img-88",
    "type": "photo",
    "src": "Gallery/gallery_2/WhatsApp Image 2026-09-25 at 7.47.03 PM (2).jpeg",
    "title": "Patient Mobility & Wheelchair Equipment #88",
    "category": "mobility",
    "categoryLabel": "Wheelchairs & Patient Mobility",
    "desc": "Ergonomic mobility aid designed for senior safety, smooth transit, and maximum patient dignity.",
    "featured": false
  },
  {
    "id": "img-89",
    "type": "photo",
    "src": "Gallery/gallery_2/WhatsApp Image 2026-09-25 at 7.47.03 PM.jpeg",
    "title": "Ashok Healthcare Clinical Supervision #89",
    "category": "team",
    "categoryLabel": "Clinical Leadership & Facility",
    "desc": "Supervised by former Apollo Hospitals clinical nursing leadership ensuring hospital standards at doorstep.",
    "featured": false
  },
  {
    "id": "img-90",
    "type": "photo",
    "src": "Gallery/gallery_2/WhatsApp Image 2026-09-25 at 7.47.04 PM.jpeg",
    "title": "Professional Bedside Nursing Care #90",
    "category": "nursing",
    "categoryLabel": "Bedside Nursing & Patient Care",
    "desc": "Registered GNM/B.Sc nurse delivering 24/7 dedicated patient monitoring and medication administration in Bengaluru.",
    "featured": false
  },
  {
    "id": "img-91",
    "type": "photo",
    "src": "Gallery/gallery_2/WhatsApp Image 2026-09-25 at 7.47.05 PM (1).jpeg",
    "title": "Hospital-Grade Home ICU Setup #91",
    "category": "icu",
    "categoryLabel": "Home ICU Setup & Critical Care",
    "desc": "Full critical care configuration including ventilator, syringe pump, suction apparatus, and multi-parameter monitor.",
    "featured": false
  },
  {
    "id": "img-92",
    "type": "photo",
    "src": "Gallery/gallery_2/WhatsApp Image 2026-09-25 at 7.47.05 PM (2).jpeg",
    "title": "Certified Motorized Hospital Bed #92",
    "category": "beds",
    "categoryLabel": "Motorized Hospital Beds",
    "desc": "Multi-function motorized ICU bed with collapsible side railings, ABS headboards, and anti-decubitus mattress.",
    "featured": false
  },
  {
    "id": "img-93",
    "type": "photo",
    "src": "Gallery/gallery_2/WhatsApp Image 2026-09-25 at 7.47.05 PM.jpeg",
    "title": "Neuro & Ortho Rehabilitation Session #93",
    "category": "rehab",
    "categoryLabel": "Neuro & Ortho Rehabilitation",
    "desc": "Personalized home rehabilitation program restoring mobility, independence, and pain-free movement.",
    "featured": false
  },
  {
    "id": "img-94",
    "type": "photo",
    "src": "Gallery/gallery_2/WhatsApp Image 2026-09-25 at 7.47.06 PM (1).jpeg",
    "title": "Patient Mobility & Wheelchair Equipment #94",
    "category": "mobility",
    "categoryLabel": "Wheelchairs & Patient Mobility",
    "desc": "Ergonomic mobility aid designed for senior safety, smooth transit, and maximum patient dignity.",
    "featured": false
  },
  {
    "id": "img-95",
    "type": "photo",
    "src": "Gallery/gallery_2/WhatsApp Image 2026-09-25 at 7.47.06 PM (2).jpeg",
    "title": "Ashok Healthcare Clinical Supervision #95",
    "category": "team",
    "categoryLabel": "Clinical Leadership & Facility",
    "desc": "Supervised by former Apollo Hospitals clinical nursing leadership ensuring hospital standards at doorstep.",
    "featured": false
  },
  {
    "id": "img-96",
    "type": "photo",
    "src": "Gallery/gallery_2/WhatsApp Image 2026-09-25 at 7.47.06 PM.jpeg",
    "title": "Professional Bedside Nursing Care #96",
    "category": "nursing",
    "categoryLabel": "Bedside Nursing & Patient Care",
    "desc": "Registered GNM/B.Sc nurse delivering 24/7 dedicated patient monitoring and medication administration in Bengaluru.",
    "featured": false
  },
  {
    "id": "img-97",
    "type": "photo",
    "src": "Gallery/gallery_2/WhatsApp Image 2026-09-25 at 7.47.07 PM (1).jpeg",
    "title": "Hospital-Grade Home ICU Setup #97",
    "category": "icu",
    "categoryLabel": "Home ICU Setup & Critical Care",
    "desc": "Full critical care configuration including ventilator, syringe pump, suction apparatus, and multi-parameter monitor.",
    "featured": false
  },
  {
    "id": "img-98",
    "type": "photo",
    "src": "Gallery/gallery_2/WhatsApp Image 2026-09-25 at 7.47.07 PM (2).jpeg",
    "title": "Certified Motorized Hospital Bed #98",
    "category": "beds",
    "categoryLabel": "Motorized Hospital Beds",
    "desc": "Multi-function motorized ICU bed with collapsible side railings, ABS headboards, and anti-decubitus mattress.",
    "featured": false
  },
  {
    "id": "img-99",
    "type": "photo",
    "src": "Gallery/gallery_2/WhatsApp Image 2026-09-25 at 7.47.07 PM.jpeg",
    "title": "Neuro & Ortho Rehabilitation Session #99",
    "category": "rehab",
    "categoryLabel": "Neuro & Ortho Rehabilitation",
    "desc": "Personalized home rehabilitation program restoring mobility, independence, and pain-free movement.",
    "featured": false
  },
  {
    "id": "img-100",
    "type": "photo",
    "src": "Gallery/gallery_2/WhatsApp Image 2026-09-25 at 7.47.08 PM.jpeg",
    "title": "Patient Mobility & Wheelchair Equipment #100",
    "category": "mobility",
    "categoryLabel": "Wheelchairs & Patient Mobility",
    "desc": "Ergonomic mobility aid designed for senior safety, smooth transit, and maximum patient dignity.",
    "featured": false
  },
  {
    "id": "img-101",
    "type": "photo",
    "src": "Gallery/gallery_2/WhatsApp Image 2026-09-25 at 7.47.09 PM (1).jpeg",
    "title": "Ashok Healthcare Clinical Supervision #101",
    "category": "team",
    "categoryLabel": "Clinical Leadership & Facility",
    "desc": "Supervised by former Apollo Hospitals clinical nursing leadership ensuring hospital standards at doorstep.",
    "featured": false
  },
  {
    "id": "img-102",
    "type": "photo",
    "src": "Gallery/gallery_2/WhatsApp Image 2026-09-25 at 7.47.09 PM.jpeg",
    "title": "Professional Bedside Nursing Care #102",
    "category": "nursing",
    "categoryLabel": "Bedside Nursing & Patient Care",
    "desc": "Registered GNM/B.Sc nurse delivering 24/7 dedicated patient monitoring and medication administration in Bengaluru.",
    "featured": false
  },
  {
    "id": "img-103",
    "type": "photo",
    "src": "Gallery/gallery_2/WhatsApp Image 2026-09-25 at 7.47.10 PM.jpeg",
    "title": "Hospital-Grade Home ICU Setup #103",
    "category": "icu",
    "categoryLabel": "Home ICU Setup & Critical Care",
    "desc": "Full critical care configuration including ventilator, syringe pump, suction apparatus, and multi-parameter monitor.",
    "featured": false
  },
  {
    "id": "vid-14",
    "type": "video",
    "src": "Gallery/gallery_2/WhatsApp Video 2026-09-25 at 7.47.01 PM.mp4",
    "title": "Specialized Home Care Bed and Pressure Relieving Air Mattress",
    "category": "beds",
    "categoryLabel": "Motorized Hospital Beds",
    "desc": "Alternating pressure bubble mattress system for long-term bedridden patients.",
    "featured": false
  },
  {
    "id": "img-104",
    "type": "photo",
    "src": "Gallery/gallery_3/WhatsApp Image 2026-09-25 at 7.46.54 PM.jpeg",
    "title": "Certified Motorized Hospital Bed #104",
    "category": "beds",
    "categoryLabel": "Motorized Hospital Beds",
    "desc": "Multi-function motorized ICU bed with collapsible side railings, ABS headboards, and anti-decubitus mattress.",
    "featured": false
  },
  {
    "id": "img-105",
    "type": "photo",
    "src": "Gallery/gallery_3/WhatsApp Image 2026-09-25 at 7.46.55 PM (1).jpeg",
    "title": "Neuro & Ortho Rehabilitation Session #105",
    "category": "rehab",
    "categoryLabel": "Neuro & Ortho Rehabilitation",
    "desc": "Personalized home rehabilitation program restoring mobility, independence, and pain-free movement.",
    "featured": false
  },
  {
    "id": "img-106",
    "type": "photo",
    "src": "Gallery/gallery_3/WhatsApp Image 2026-09-25 at 7.46.55 PM.jpeg",
    "title": "Patient Mobility & Wheelchair Equipment #106",
    "category": "mobility",
    "categoryLabel": "Wheelchairs & Patient Mobility",
    "desc": "Ergonomic mobility aid designed for senior safety, smooth transit, and maximum patient dignity.",
    "featured": false
  },
  {
    "id": "img-107",
    "type": "photo",
    "src": "Gallery/gallery_3/WhatsApp Image 2026-09-25 at 7.46.56 PM.jpeg",
    "title": "Ashok Healthcare Clinical Supervision #107",
    "category": "team",
    "categoryLabel": "Clinical Leadership & Facility",
    "desc": "Supervised by former Apollo Hospitals clinical nursing leadership ensuring hospital standards at doorstep.",
    "featured": false
  },
  {
    "id": "img-108",
    "type": "photo",
    "src": "Gallery/gallery_3/WhatsApp Image 2026-09-25 at 7.48.01 PM.jpeg",
    "title": "Professional Bedside Nursing Care #108",
    "category": "nursing",
    "categoryLabel": "Bedside Nursing & Patient Care",
    "desc": "Registered GNM/B.Sc nurse delivering 24/7 dedicated patient monitoring and medication administration in Bengaluru.",
    "featured": false
  }
];

  // State
  let currentMediaType = 'all'; // 'all', 'photo', 'video'
  let currentCategory = 'all';
  let searchQuery = '';
  let itemsLimit = 24;
  let filteredItems = [];
  let currentModalIndex = 0;

  // DOM Elements
  let gridContainer;
  let countIndicator;
  let loadMoreBtn;
  let searchInput;
  let lightboxModal;
  let lightboxImg;
  let lightboxVideo;
  let lightboxTitle;
  let lightboxDesc;
  let lightboxCounter;
  let lightboxWhatsAppBtn;

  function initDOMElements() {
    gridContainer = document.getElementById('galleryGrid');
    countIndicator = document.getElementById('galleryCountIndicator');
    loadMoreBtn = document.getElementById('loadMoreBtn');
    searchInput = document.getElementById('gallerySearchInput');
    lightboxModal = document.getElementById('galleryLightbox');
    lightboxImg = document.getElementById('lightboxImage');
    lightboxVideo = document.getElementById('lightboxVideo');
    lightboxTitle = document.getElementById('lightboxTitle');
    lightboxDesc = document.getElementById('lightboxDesc');
    lightboxCounter = document.getElementById('lightboxCounter');
    lightboxWhatsAppBtn = document.getElementById('lightboxWhatsAppBtn');
  }

  // Counts update in UI
  function updateCounts() {
    const totalCount = GALLERY_ITEMS.length;
    const photoCount = GALLERY_ITEMS.filter(i => i.type === 'photo').length;
    const videoCount = GALLERY_ITEMS.filter(i => i.type === 'video').length;

    const countAllEl = document.getElementById('countAll');
    const countPhotosEl = document.getElementById('countPhotos');
    const countVideosEl = document.getElementById('countVideos');

    if (countAllEl) countAllEl.textContent = totalCount;
    if (countPhotosEl) countPhotosEl.textContent = photoCount;
    if (countVideosEl) countVideosEl.textContent = videoCount;
  }

  // Filter Items
  function applyFilters() {
    filteredItems = GALLERY_ITEMS.filter(item => {
      // Media type filter (separate photo and video)
      if (currentMediaType !== 'all' && item.type !== currentMediaType) {
        return false;
      }
      // Category filter
      if (currentCategory !== 'all' && item.category !== currentCategory) {
        return false;
      }
      // Search query
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchTitle = item.title.toLowerCase().includes(q);
        const matchDesc = item.desc.toLowerCase().includes(q);
        const matchCat = item.categoryLabel.toLowerCase().includes(q);
        if (!matchTitle && !matchDesc && !matchCat) return false;
      }
      return true;
    });

    renderGallery();
  }

  // Render Gallery Grid
  function renderGallery() {
    if (!gridContainer) return;

    const toShow = filteredItems.slice(0, itemsLimit);

    if (filteredItems.length === 0) {
      gridContainer.innerHTML = `
        <div class="col-12 text-center py-5" style="grid-column: 1 / -1;">
          <div class="p-4 rounded-4 bg-white border d-inline-block shadow-sm" style="max-width: 480px;">
            <span class="fs-1 d-block mb-2">🔍</span>
            <h5 class="fw-bold text-slate-800 mb-1">No matching media found</h5>
            <p class="text-slate-500 small mb-3">Try switching filters or clearing your search term.</p>
            <button type="button" class="btn btn-sm btn-outline-primary rounded-pill px-4" id="resetFiltersBtn">
              Reset Filters
            </button>
          </div>
        </div>
      `;
      const resetBtn = document.getElementById('resetFiltersBtn');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          currentMediaType = 'all';
          currentCategory = 'all';
          searchQuery = '';
          if (searchInput) searchInput.value = '';
          updateActiveFilterButtons();
          applyFilters();
        });
      }
      if (countIndicator) countIndicator.textContent = 'Showing 0 items';
      if (loadMoreBtn) loadMoreBtn.style.display = 'none';
      return;
    }

    let html = '';
    toShow.forEach((item, index) => {
      const encodedSrc = encodeURI(item.src);
      const isVideo = item.type === 'video';

      html += `
        <div class="gallery-card" onclick="window.openGalleryLightbox(${index})" data-index="${index}" role="button" tabindex="0" aria-label="${item.title}">
          <div class="gallery-card-thumb">
            <span class="gallery-type-badge ${isVideo ? 'video' : 'photo'}">
              ${isVideo ? '🎥 Video' : '📷 Photo'}
            </span>
            ${isVideo ? `
              <video src="${encodedSrc}#t=0.5" preload="metadata" muted playsinline aria-hidden="true"></video>
              <div class="gallery-play-overlay">
                <div class="play-circle-btn" title="Watch Video">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                </div>
              </div>
            ` : `
              <img src="${encodedSrc}" alt="${item.title}" loading="lazy">
              <div class="gallery-zoom-overlay">
                <div class="zoom-circle-btn" title="Enlarge Image">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
                </div>
              </div>
            `}
          </div>
          <div class="gallery-card-info">
            <div class="gallery-card-category">${item.categoryLabel}</div>
            <h3 class="gallery-card-title">${item.title}</h3>
            <div class="gallery-card-meta">
              <span>Bengaluru Care Dispatch</span>
              <span class="fw-bold ${isVideo ? 'text-danger' : 'text-primary'}">${isVideo ? 'Play Video ▶' : 'View High-Res ↗'}</span>
            </div>
          </div>
        </div>
      `;
    });

    gridContainer.innerHTML = html;

    // Update count indicator
    if (countIndicator) {
      countIndicator.textContent = `Showing ${Math.min(itemsLimit, filteredItems.length)} of ${filteredItems.length} ${currentMediaType === 'video' ? 'videos' : (currentMediaType === 'photo' ? 'photos' : 'media items')}`;
    }

    // Update Load More Button visibility
    if (loadMoreBtn) {
      if (itemsLimit >= filteredItems.length) {
        loadMoreBtn.style.display = 'none';
      } else {
        loadMoreBtn.style.display = 'inline-flex';
        loadMoreBtn.innerHTML = `Load More Media (+${Math.min(24, filteredItems.length - itemsLimit)}) <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>`;
      }
    }
  }

  // Update UI Button states
  function updateActiveFilterButtons() {
    // Media type buttons
    document.querySelectorAll('.media-type-btn').forEach(btn => {
      const type = btn.getAttribute('data-media-type');
      if (type === currentMediaType) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Category pills
    document.querySelectorAll('.gallery-category-pill').forEach(pill => {
      const cat = pill.getAttribute('data-category');
      if (cat === currentCategory) {
        pill.classList.add('active');
      } else {
        pill.classList.remove('active');
      }
    });
  }

  // ============================================================
  // LIGHTBOX POPUP MODAL (PHOTO & VIDEO)
  // ============================================================
  window.openGalleryLightbox = function (index) {
    if (!filteredItems || index < 0 || index >= filteredItems.length) return;
    currentModalIndex = index;

    const item = filteredItems[currentModalIndex];
    if (!lightboxModal) initDOMElements();
    if (!lightboxModal) return;

    const encodedSrc = encodeURI(item.src);

    // Stop any existing video before showing
    if (lightboxVideo) {
      lightboxVideo.pause();
      lightboxVideo.removeAttribute('src');
      lightboxVideo.load();
    }

    if (item.type === 'video') {
      if (lightboxImg) lightboxImg.style.display = 'none';
      if (lightboxVideo) {
        lightboxVideo.style.display = 'block';
        lightboxVideo.src = encodedSrc;
        lightboxVideo.load();
        lightboxVideo.play().catch(() => {
          // Autoplay was prevented by browser policy, user can click play
        });
      }
    } else {
      if (lightboxVideo) lightboxVideo.style.display = 'none';
      if (lightboxImg) {
        lightboxImg.style.display = 'block';
        lightboxImg.src = encodedSrc;
        lightboxImg.alt = item.title;
      }
    }

    // Info
    if (lightboxTitle) lightboxTitle.textContent = item.title;
    if (lightboxDesc) lightboxDesc.textContent = item.desc;
    if (lightboxCounter) {
      const typeLabel = item.type === 'video' ? 'Video' : 'Photo';
      lightboxCounter.textContent = `${typeLabel} ${currentModalIndex + 1} of ${filteredItems.length}`;
    }

    // WhatsApp Inquiry link
    if (lightboxWhatsAppBtn) {
      const msg = encodeURIComponent(`Hello Ashok Healthcare, I am inquiring regarding ${item.title} (${item.categoryLabel}). Please share details.`);
      lightboxWhatsAppBtn.href = `https://wa.me/917829753538?text=${msg}`;
    }

    // Show modal
    lightboxModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  window.closeGalleryLightbox = function () {
    if (!lightboxModal) return;
    lightboxModal.classList.remove('active');
    document.body.style.overflow = '';

    // Stop video immediately
    if (lightboxVideo) {
      lightboxVideo.pause();
      lightboxVideo.removeAttribute('src');
      lightboxVideo.load();
    }
  };

  window.navigateLightbox = function (direction) {
    if (filteredItems.length <= 1) return;
    let nextIndex = currentModalIndex + direction;
    if (nextIndex < 0) nextIndex = filteredItems.length - 1;
    if (nextIndex >= filteredItems.length) nextIndex = 0;
    window.openGalleryLightbox(nextIndex);
  };

  // Keyboard Navigation
  document.addEventListener('keydown', (e) => {
    if (!lightboxModal || !lightboxModal.classList.contains('active')) return;
    if (e.key === 'Escape') {
      window.closeGalleryLightbox();
    } else if (e.key === 'ArrowLeft') {
      window.navigateLightbox(-1);
    } else if (e.key === 'ArrowRight') {
      window.navigateLightbox(1);
    }
  });

  // Close when clicking outside content area
  document.addEventListener('DOMContentLoaded', () => {
    initDOMElements();
    updateCounts();

    if (lightboxModal) {
      lightboxModal.addEventListener('click', (e) => {
        if (e.target === lightboxModal || e.target.classList.contains('lightbox-stage')) {
          window.closeGalleryLightbox();
        }
      });
    }

    // Media type buttons click
    document.querySelectorAll('.media-type-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        currentMediaType = btn.getAttribute('data-media-type');
        itemsLimit = 24;
        updateActiveFilterButtons();
        applyFilters();
      });
    });

    // Category pills click
    document.querySelectorAll('.gallery-category-pill').forEach(pill => {
      pill.addEventListener('click', (e) => {
        e.preventDefault();
        currentCategory = pill.getAttribute('data-category');
        itemsLimit = 24;
        updateActiveFilterButtons();
        applyFilters();
      });
    });

    // Search input
    if (searchInput) {
      let debounceTimeout;
      searchInput.addEventListener('input', () => {
        clearTimeout(debounceTimeout);
        debounceTimeout = setTimeout(() => {
          searchQuery = searchInput.value;
          itemsLimit = 24;
          applyFilters();
        }, 250);
      });
    }

    // Load more button
    if (loadMoreBtn) {
      loadMoreBtn.addEventListener('click', () => {
        itemsLimit += 24;
        renderGallery();
      });
    }

    // URL parameter support (e.g. ?type=video or ?cat=icu)
    const urlParams = new URLSearchParams(window.location.search);
    const paramType = urlParams.get('type');
    const paramCat = urlParams.get('category');
    if (paramType && ['photo', 'video', 'all'].includes(paramType)) {
      currentMediaType = paramType;
    }
    if (paramCat) {
      currentCategory = paramCat;
    }

    updateActiveFilterButtons();
    applyFilters();
  });

})();
