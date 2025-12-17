import { useState, useMemo, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, X, Play, Pause } from "lucide-react";

// Import all scout images
import img_2018_1 from "@/assets/scout/49043082_2143650268990701_844678350382301184_n.jpg";
import img_2018_2 from "@/assets/scout/49101948_2143651898990538_2002486664483569664_n.jpg";
import img_2018_3 from "@/assets/scout/49115087_2143648925657502_1062085944183619584_n.jpg";
import img_2018_4 from "@/assets/scout/54515824_777089522664191_813166664957820928_n.jpg";

import img_2019_1 from "@/assets/scout/66470948_846062259100250_6722362062988640256_n.jpg";
import img_2019_2 from "@/assets/scout/73294209_2403496619749450_1570770961504927744_n.jpg";
import img_2019_3 from "@/assets/scout/73311004_2403496616416117_7304006046249385984_n.jpg";
import img_2019_4 from "@/assets/scout/75332721_2403496973082748_5739909451037540352_n.jpg";
import img_2019_5 from "@/assets/scout/76688959_2695773540445035_568702417869209600_n.jpg";
import img_2019_6 from "@/assets/scout/76747391_2695769363778786_3662747281100111872_n.jpg";
import img_2019_7 from "@/assets/scout/78481152_2695769760445413_8157508656049422336_n.jpg";

import img_2020_1 from "@/assets/scout/82549167_2840722329283488_1836204639091949568_n.jpg";
import img_2020_2 from "@/assets/scout/82906725_2838528189502902_690297954245804032_n.jpg";
import img_2020_3 from "@/assets/scout/83294965_2840723459283375_8455971164718628864_n.jpg";
import img_2020_4 from "@/assets/scout/83396976_2838528029502918_8484629763497918464_n.jpg";
import img_2020_5 from "@/assets/scout/83557907_2840720709283650_3820190568739241984_n.jpg";
import img_2020_6 from "@/assets/scout/84688129_2889143531108034_234335155131514880_n.jpg";
import img_2020_7 from "@/assets/scout/131908874_112120150757499_5561788618266014960_n.jpg";

import img_2024_1 from "@/assets/scout/457267251_491688690159648_2087364282629311019_n.jpg";
import img_2024_2 from "@/assets/scout/457495605_2920589678099762_4936891130418150017_n.jpg";
import img_2024_3 from "@/assets/scout/472827168_9199159656773025_2524182767294913578_n.jpg";
import img_2024_4 from "@/assets/scout/473290492_9193861143969543_4454265673454118210_n.jpg";
import img_2024_5 from "@/assets/scout/479192201_1045983964236209_3658037707148390552_n.jpg";
import img_2024_6 from "@/assets/scout/480931314_1059755526192386_4772270541455655903_n.jpg";
import img_2024_7 from "@/assets/scout/481025140_1059755852859020_4506513498898051164_n.jpg";
import img_2024_8 from "@/assets/scout/481079879_1060526152781990_4653563701961881432_n.jpg";
import img_2024_9 from "@/assets/scout/481214545_1060926149408657_5851504214422639669_n.jpg";
import img_2024_10 from "@/assets/scout/481310692_1059754632859142_5305381831129912465_n.jpg";
import img_2024_11 from "@/assets/scout/481448914_1060517376116201_4372018487819573813_n.jpg";
import img_2024_12 from "@/assets/scout/481672529_1064449532389652_3131398211307854776_n.jpg";
import img_2024_13 from "@/assets/scout/481776717_1060510592783546_5962120162549550290_n.jpg";
import img_2024_14 from "@/assets/scout/481909147_1064449552389650_7674921782747926308_n.jpg";
import img_2024_15 from "@/assets/scout/482248056_1059755649525707_1772309673269084355_n.jpg";
import img_2024_16 from "@/assets/scout/484049255_1072466654921273_452546416601433514_n.jpg";
import img_2024_17 from "@/assets/scout/484097877_1072491744918764_2056761461153948105_n.jpg";
import img_2024_18 from "@/assets/scout/484163816_1072465994921339_684620369299335548_n.jpg";
import img_2024_19 from "@/assets/scout/484209036_1072490331585572_7372396296336676369_n.jpg";
import img_2024_20 from "@/assets/scout/484356148_1072491698252102_6190290037245485027_n.jpg";
import img_2024_21 from "@/assets/scout/484562936_1072491294918809_8354367450342911227_n.jpg";
import img_2024_22 from "@/assets/scout/484621859_1072491541585451_7193356208882595479_n.jpg";
import img_2024_23 from "@/assets/scout/484807541_1050070160499674_2502434651928540590_n.jpg";
import img_2024_24 from "@/assets/scout/485143972_1050069437166413_2190942197511470151_n.jpg";
import img_2024_25 from "@/assets/scout/485158663_1050070343832989_1854733493290426119_n.jpg";
import img_2024_26 from "@/assets/scout/485365538_1076844554483483_3376266519488322054_n.jpg";
import img_2024_27 from "@/assets/scout/485691481_1076844237816848_6167615506761785752_n.jpg";
import img_2024_28 from "@/assets/scout/485744911_1076844167816855_7083109047909524556_n.jpg";
import img_2024_29 from "@/assets/scout/485755061_1074740541360551_3605703283108995535_n.jpg";
import img_2024_30 from "@/assets/scout/485879146_1076844254483513_8885599180358823446_n.jpg";
import img_2024_31 from "@/assets/scout/485914039_1078921634275775_8184151174660392573_n.jpg";
import img_2024_32 from "@/assets/scout/486026620_1076844467816825_7336315747039273533_n.jpg";
import img_2024_33 from "@/assets/scout/486284464_1078921470942458_7099346890474400779_n.jpg";
import img_2024_34 from "@/assets/scout/486751342_1084224570412148_2875227918547341769_n.jpg";
import img_2024_35 from "@/assets/scout/486953352_1084224917078780_3867022202418384132_n.jpg";
import img_2024_36 from "@/assets/scout/487090213_1084224753745463_6734800774802523756_n.jpg";
import img_2024_37 from "@/assets/scout/487179745_1083763980458207_687511509008941796_n.jpg";
import img_2024_38 from "@/assets/scout/487233326_1083625353805403_330744165327609440_n.jpg";
import img_2024_39 from "@/assets/scout/487241589_1084238120410793_6235070586691695173_n.jpg";
import img_2024_40 from "@/assets/scout/487299583_1083625403805398_1432492898719846423_n.jpg";
import img_2024_41 from "@/assets/scout/487381238_1083757957125476_7901876359735817755_n.jpg";
import img_2024_42 from "@/assets/scout/487408246_1083766970457908_7173402824635744557_n.jpg";
import img_2024_43 from "@/assets/scout/487490608_1083764210458184_7919517539436238442_n.jpg";
import img_2024_44 from "@/assets/scout/487515046_1084224667078805_7833115116235044801_n.jpg";
import img_2024_45 from "@/assets/scout/487564226_1083764097124862_9018738894498054982_n.jpg";
import img_2024_46 from "@/assets/scout/487734660_1083763903791548_3372337286750393239_n.jpg";
import img_2024_47 from "@/assets/scout/487762257_1084238193744119_3495089358607385586_n.jpg";
import img_2024_48 from "@/assets/scout/487772285_1083763923791546_910363924877651213_n.jpg";
import img_2024_49 from "@/assets/scout/487824585_1083757603792178_4817363868988411491_n.jpg";
import img_2024_50 from "@/assets/scout/488257123_9697982353557417_2058453455035632135_n.jpg";
import img_2024_51 from "@/assets/scout/488419744_1088579996643272_1053216670327180066_n.jpg";
import img_2024_52 from "@/assets/scout/488446906_1089558963212042_8443151488064383557_n.jpg";
import img_2024_53 from "@/assets/scout/488656430_1089559099878695_3705233329866317149_n.jpg";
import img_2024_54 from "@/assets/scout/488793702_9697982290224090_7303112246869420482_n.jpg";
import img_2024_55 from "@/assets/scout/488866323_9697982196890766_3923784836222046673_n.jpg";
import img_2024_56 from "@/assets/scout/488911189_1088579873309951_3324575270314532788_n.jpg";
import img_2024_wa1 from "@/assets/scout/WhatsApp Image 2024-08-31 at 12.30.25.jpeg";
import img_2024_wa2 from "@/assets/scout/WhatsApp Image 2024-09-01 at 14.02.59 (1).jpeg";
import img_2024_wa3 from "@/assets/scout/WhatsApp Image 2024-09-03 at 18.08.42.jpeg";
import img_2024_wa4 from "@/assets/scout/WhatsApp Image 2024-09-03 at 18.09.05 (1).jpeg";

import img_2025_1 from "@/assets/scout/491607871_9771884186167233_2159521633500911884_n.jpg";
import img_2025_2 from "@/assets/scout/492065262_9771881779500807_5814546306785732231_n.jpg";
import img_2025_3 from "@/assets/scout/504381543_1164720429029228_1498665258010693291_n.jpg";
import img_2025_4 from "@/assets/scout/514260936_1180041400830464_7863863753962628043_n.jpg";
import img_2025_5 from "@/assets/scout/514262251_1179240154243922_1190370577161796131_n.jpg";
import img_2025_6 from "@/assets/scout/514262767_1177631507738120_2816733293281807200_n.jpg";
import img_2025_7 from "@/assets/scout/514280649_1177629817738289_6271629303071059822_n.jpg";
import img_2025_8 from "@/assets/scout/514348694_1179237507577520_5132124408225869960_n.jpg";
import img_2025_9 from "@/assets/scout/515401061_1164720379029233_4834154444232905165_n.jpg";
import img_2025_10 from "@/assets/scout/515488624_1180831164084821_7498933530412073305_n.jpg";
import img_2025_11 from "@/assets/scout/515506462_1164721725695765_6224068403551355836_n.jpg";
import img_2025_12 from "@/assets/scout/515994795_1164722695695668_534143269945385367_n.jpg";
import img_2025_13 from "@/assets/scout/516193648_1164720725695865_8826115371611325281_n.jpg";
import img_2025_14 from "@/assets/scout/519107480_1177629981071606_1361450868356695000_n.jpg";
import img_2025_15 from "@/assets/scout/520191045_1177632701071334_1591450234987754997_n.jpg";
import img_2025_16 from "@/assets/scout/524515336_1180831254084812_5104109486119809501_n.jpg";
import img_2025_17 from "@/assets/scout/524737363_1184048100429794_4333770011225058357_n.jpg";
import img_2025_18 from "@/assets/scout/524815850_1184046507096620_7771561767120309919_n.jpg";
import img_2025_19 from "@/assets/scout/541403296_1211660817668522_9003468150412500568_n.jpg";
import img_2025_20 from "@/assets/scout/542266864_1211663821001555_693238833510217904_n.jpg";
import img_2025_21 from "@/assets/scout/542754460_1211661801001757_8374699059719304616_n.jpg";
import img_2025_22 from "@/assets/scout/542755469_1211662341001703_1081942842471227287_n.jpg";
import img_2025_23 from "@/assets/scout/565151223_1255038413330762_9010870579905776087_n.jpg";
import img_2025_24 from "@/assets/scout/565624865_1255039493330654_9192054243005857325_n.jpg";
import img_2025_25 from "@/assets/scout/a1528d76-2ba7-483e-97ad-827df32177e1.jpg";
type YearCategory = "all" | "2018" | "2019" | "2020" | "2024" | "2025";

interface ScoutPhoto {
   url: string;
   year: YearCategory;
}

// Loading skeleton component
const ImageSkeleton = () => (
   <div className="aspect-square rounded-lg bg-elden-dark-light/60 border-2 border-elden-gold/20 overflow-hidden">
      <div className="w-full h-full animate-pulse bg-gradient-to-br from-elden-gold/5 via-elden-gold/10 to-elden-gold/5" />
   </div>
);

const INITIAL_PHOTOS_SHOWN = 15;
const PHOTOS_INCREMENT = 15;

const ScoutSection = () => {
   const [selectedYear, setSelectedYear] = useState<YearCategory>("all");
   const [currentImageIndex, setCurrentImageIndex] = useState(0);
   const [lightboxOpen, setLightboxOpen] = useState(false);
   const [isPlaying, setIsPlaying] = useState(false);
   const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
   const [visibleCount, setVisibleCount] = useState(INITIAL_PHOTOS_SHOWN);
   const lightboxRef = useRef<HTMLDivElement>(null);

   const scoutPhotos: ScoutPhoto[] = useMemo(
      () => [
         // 2018
         { url: img_2018_1, year: "2018" },
         { url: img_2018_2, year: "2018" },
         { url: img_2018_3, year: "2018" },
         { url: img_2018_4, year: "2018" },
         // 2019
         { url: img_2019_1, year: "2019" },
         { url: img_2019_2, year: "2019" },
         { url: img_2019_3, year: "2019" },
         { url: img_2019_4, year: "2019" },
         { url: img_2019_5, year: "2019" },
         { url: img_2019_6, year: "2019" },
         { url: img_2019_7, year: "2019" },
         // 2020
         { url: img_2020_1, year: "2020" },
         { url: img_2020_2, year: "2020" },
         { url: img_2020_3, year: "2020" },
         { url: img_2020_4, year: "2020" },
         { url: img_2020_5, year: "2020" },
         { url: img_2020_6, year: "2020" },
         { url: img_2020_7, year: "2020" },
         // 2024
         { url: img_2024_1, year: "2024" },
         { url: img_2024_2, year: "2024" },
         { url: img_2024_3, year: "2024" },
         { url: img_2024_4, year: "2024" },
         { url: img_2024_5, year: "2024" },
         { url: img_2024_6, year: "2024" },
         { url: img_2024_7, year: "2024" },
         { url: img_2024_8, year: "2024" },
         { url: img_2024_9, year: "2024" },
         { url: img_2024_10, year: "2024" },
         { url: img_2024_11, year: "2024" },
         { url: img_2024_12, year: "2024" },
         { url: img_2024_13, year: "2024" },
         { url: img_2024_14, year: "2024" },
         { url: img_2024_15, year: "2024" },
         { url: img_2024_16, year: "2024" },
         { url: img_2024_17, year: "2024" },
         { url: img_2024_18, year: "2024" },
         { url: img_2024_19, year: "2024" },
         { url: img_2024_20, year: "2024" },
         { url: img_2024_21, year: "2024" },
         { url: img_2024_22, year: "2024" },
         { url: img_2024_23, year: "2024" },
         { url: img_2024_24, year: "2024" },
         { url: img_2024_25, year: "2024" },
         { url: img_2024_26, year: "2024" },
         { url: img_2024_27, year: "2024" },
         { url: img_2024_28, year: "2024" },
         { url: img_2024_29, year: "2024" },
         { url: img_2024_30, year: "2024" },
         { url: img_2024_31, year: "2024" },
         { url: img_2024_32, year: "2024" },
         { url: img_2024_33, year: "2024" },
         { url: img_2024_34, year: "2024" },
         { url: img_2024_35, year: "2024" },
         { url: img_2024_36, year: "2024" },
         { url: img_2024_37, year: "2024" },
         { url: img_2024_38, year: "2024" },
         { url: img_2024_39, year: "2024" },
         { url: img_2024_40, year: "2024" },
         { url: img_2024_41, year: "2024" },
         { url: img_2024_42, year: "2024" },
         { url: img_2024_43, year: "2024" },
         { url: img_2024_44, year: "2024" },
         { url: img_2024_45, year: "2024" },
         { url: img_2024_46, year: "2024" },
         { url: img_2024_47, year: "2024" },
         { url: img_2024_48, year: "2024" },
         { url: img_2024_49, year: "2024" },
         { url: img_2024_50, year: "2024" },
         { url: img_2024_51, year: "2024" },
         { url: img_2024_52, year: "2024" },
         { url: img_2024_53, year: "2024" },
         { url: img_2024_54, year: "2024" },
         { url: img_2024_55, year: "2024" },
         { url: img_2024_56, year: "2024" },
         { url: img_2024_wa1, year: "2024" },
         { url: img_2024_wa2, year: "2024" },
         { url: img_2024_wa3, year: "2024" },
         { url: img_2024_wa4, year: "2024" },
         // 2025
         { url: img_2025_1, year: "2025" },
         { url: img_2025_2, year: "2025" },
         { url: img_2025_3, year: "2025" },
         { url: img_2025_4, year: "2025" },
         { url: img_2025_5, year: "2025" },
         { url: img_2025_6, year: "2025" },
         { url: img_2025_7, year: "2025" },
         { url: img_2025_8, year: "2025" },
         { url: img_2025_9, year: "2025" },
         { url: img_2025_10, year: "2025" },
         { url: img_2025_11, year: "2025" },
         { url: img_2025_12, year: "2025" },
         { url: img_2025_13, year: "2025" },
         { url: img_2025_14, year: "2025" },
         { url: img_2025_15, year: "2025" },
         { url: img_2025_16, year: "2025" },
         { url: img_2025_17, year: "2025" },
         { url: img_2025_18, year: "2025" },
         { url: img_2025_19, year: "2025" },
         { url: img_2025_20, year: "2025" },
         { url: img_2025_21, year: "2025" },
         { url: img_2025_22, year: "2025" },
         { url: img_2025_23, year: "2025" },
         { url: img_2025_24, year: "2025" },
         { url: img_2025_25, year: "2025" },
      ],
      []
   );

   const filteredPhotos = useMemo(() => {
      const filtered =
         selectedYear === "all"
            ? scoutPhotos
            : scoutPhotos.filter((photo) => photo.year === selectedYear);

      // Reverse to show latest photos first
      return [...filtered].reverse();
   }, [selectedYear, scoutPhotos]);

   const years: YearCategory[] = [
      "all",
      "2018",
      "2019",
      "2020",
      "2024",
      "2025",
   ];

   const nextImage = useCallback(() => {
      setCurrentImageIndex((prev) => (prev + 1) % filteredPhotos.length);
   }, [filteredPhotos.length]);

   const prevImage = useCallback(() => {
      setCurrentImageIndex(
         (prev) => (prev - 1 + filteredPhotos.length) % filteredPhotos.length
      );
   }, [filteredPhotos.length]);

   const openLightbox = (index: number) => {
      setCurrentImageIndex(index);
      setLightboxOpen(true);
      setIsPlaying(false);
   };

   const closeLightbox = () => {
      setLightboxOpen(false);
      setIsPlaying(false);
   };

   const toggleSlideshow = () => {
      setIsPlaying((prev) => !prev);
   };

   // Handle image loading
   const handleImageLoad = (index: number) => {
      setLoadedImages((prev) => new Set(prev).add(index));
   };

   // Slideshow autoplay effect
   useEffect(() => {
      if (!isPlaying || !lightboxOpen) return;

      const interval = setInterval(() => {
         nextImage();
      }, 3000); // Change image every 3 seconds

      return () => clearInterval(interval);
   }, [isPlaying, lightboxOpen, nextImage]);

   // Global keyboard navigation
   useEffect(() => {
      const handleGlobalKeyDown = (e: KeyboardEvent) => {
         if (!lightboxOpen) return;

         switch (e.key) {
            case "Escape":
               closeLightbox();
               break;
            case "ArrowRight":
               e.preventDefault();
               nextImage();
               break;
            case "ArrowLeft":
               e.preventDefault();
               prevImage();
               break;
            case " ": // Spacebar
               e.preventDefault();
               toggleSlideshow();
               break;
         }
      };

      window.addEventListener("keydown", handleGlobalKeyDown);
      return () => window.removeEventListener("keydown", handleGlobalKeyDown);
   }, [lightboxOpen, nextImage, prevImage]);

   // Focus lightbox when opened
   useEffect(() => {
      if (lightboxOpen && lightboxRef.current) {
         lightboxRef.current.focus();
      }
   }, [lightboxOpen]);

   return (
      <section id="scouts" className="relative py-32 overflow-hidden">
         {/* Background with parallax effect */}
         <div className="absolute inset-0 bg-gradient-to-b from-elden-dark via-elden-dark-light to-elden-dark" />

         {/* Decorative elements */}
         <div className="absolute top-20 left-10 w-32 h-32 bg-elden-gold/5 rounded-full blur-3xl animate-pulse" />
         <div
            className="absolute bottom-20 right-10 w-40 h-40 bg-elden-gold/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
         />

         <div className="relative z-10 max-w-7xl mx-auto px-6">
            {/* Section Header */}
            <div className="text-center mb-16 animate-fadeIn">
               <h2 className="font-cinzel text-3xl md:text-4xl lg:text-5xl font-bold text-gold mb-6">
                  Scout Leadership
               </h2>
               <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="h-px w-20 bg-gradient-to-r from-transparent via-elden-gold/70 to-elden-gold/40" />
                  <div className="w-3 h-3 bg-elden-gold rounded-full shadow-lg shadow-elden-gold/50" />
                  <div className="h-px w-20 bg-gradient-to-l from-transparent via-elden-gold/70 to-elden-gold/40" />
               </div>
               <p className="font-garamond text-lg text-muted-foreground/70 max-w-3xl mx-auto leading-relaxed">
                  13 years in the Tunisian Scouts shaped me into a leader,
                  taught me resilience, and gave me a second family
               </p>
            </div>

            {/* Year Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
               {years.map((year) => (
                  <button
                     key={year}
                     onClick={() => {
                        setSelectedYear(year);
                        setCurrentImageIndex(0);
                        setVisibleCount(INITIAL_PHOTOS_SHOWN);
                     }}
                     className={`px-6 py-2 rounded-full font-cinzel text-sm transition-all duration-300 border ${
                        selectedYear === year
                           ? "bg-elden-gold/20 border-elden-gold text-gold shadow-lg shadow-elden-gold/20"
                           : "bg-elden-dark-light/40 border-elden-gold/30 text-muted-foreground hover:border-elden-gold/60 hover:text-gold"
                     }`}
                  >
                     {year === "all" ? "All Years" : year}
                  </button>
               ))}
            </div>

            {/* Photo Count */}
            <div className="text-center mb-8">
               <span className="font-garamond text-muted-foreground/60">
                  Showing {Math.min(visibleCount, filteredPhotos.length)} of{" "}
                  {filteredPhotos.length} photos
                  {selectedYear !== "all" && ` from ${selectedYear}`}
               </span>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
               {filteredPhotos.slice(0, visibleCount).map((photo, index) => (
                  <button
                     key={index}
                     onClick={() => openLightbox(index)}
                     className="relative aspect-square rounded-lg overflow-hidden border-2 border-elden-gold/30 
                                 hover:border-elden-gold/60 hover:scale-105 transition-all duration-300 group"
                  >
                     {/* Skeleton placeholder */}
                     {!loadedImages.has(index) && (
                        <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-elden-gold/5 via-elden-gold/10 to-elden-gold/5" />
                     )}
                     <img
                        src={photo.url}
                        alt={`Scout memory from ${photo.year}`}
                        loading="lazy"
                        onLoad={() => handleImageLoad(index)}
                        className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${
                           loadedImages.has(index) ? "opacity-100" : "opacity-0"
                        }`}
                     />
                     <div
                        className="absolute inset-0 bg-gradient-to-t from-elden-dark/80 via-transparent to-transparent 
                                        opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                     >
                        <span className="absolute bottom-2 left-2 font-cinzel text-xs text-gold">
                           {photo.year}
                        </span>
                     </div>
                  </button>
               ))}
            </div>

            {/* See More / See Less Buttons */}
            {filteredPhotos.length > INITIAL_PHOTOS_SHOWN && (
               <div className="flex justify-center gap-4 mt-10">
                  {visibleCount < filteredPhotos.length && (
                     <button
                        onClick={() =>
                           setVisibleCount((prev) =>
                              Math.min(
                                 prev + PHOTOS_INCREMENT,
                                 filteredPhotos.length
                              )
                           )
                        }
                        className="px-8 py-3 rounded-full font-cinzel text-sm transition-all duration-300 
                                   bg-elden-dark-light/60 border-2 border-elden-gold/40 text-gold
                                   hover:bg-elden-gold/20 hover:border-elden-gold hover:shadow-lg hover:shadow-elden-gold/20
                                   active:scale-95"
                     >
                        <span className="flex items-center gap-2">
                           See More
                           <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                           >
                              <path
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 strokeWidth={2}
                                 d="M19 9l-7 7-7-7"
                              />
                           </svg>
                        </span>
                     </button>
                  )}
                  {visibleCount > INITIAL_PHOTOS_SHOWN && (
                     <button
                        onClick={() => setVisibleCount(INITIAL_PHOTOS_SHOWN)}
                        className="px-8 py-3 rounded-full font-cinzel text-sm transition-all duration-300 
                                   bg-elden-dark-light/60 border-2 border-elden-gold/40 text-gold
                                   hover:bg-elden-gold/20 hover:border-elden-gold hover:shadow-lg hover:shadow-elden-gold/20
                                   active:scale-95"
                     >
                        <span className="flex items-center gap-2">
                           See Less
                           <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                           >
                              <path
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 strokeWidth={2}
                                 d="M5 15l7-7 7 7"
                              />
                           </svg>
                        </span>
                     </button>
                  )}
               </div>
            )}
         </div>

         {/* Lightbox */}
         {lightboxOpen && (
            <div
               ref={lightboxRef}
               className="fixed inset-0 z-50 bg-elden-dark/95 backdrop-blur-md flex items-center justify-center"
               onClick={closeLightbox}
               tabIndex={0}
               role="dialog"
               aria-modal="true"
               aria-label="Image lightbox - use arrow keys to navigate, spacebar to toggle slideshow"
            >
               {/* Slideshow progress bar */}
               {isPlaying && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-elden-dark-light/50">
                     <div
                        className="h-full bg-gradient-to-r from-elden-gold to-elden-gold/70 animate-progress"
                        style={{ animation: "progress 3s linear infinite" }}
                     />
                  </div>
               )}

               {/* Top controls */}
               <div className="absolute top-6 left-1/2 -translate-x-1/2 flex items-center gap-4 z-10">
                  {/* Slideshow toggle */}
                  <button
                     onClick={(e) => {
                        e.stopPropagation();
                        toggleSlideshow();
                     }}
                     className={`p-3 backdrop-blur-sm border rounded-full transition-all duration-300 z-10 ${
                        isPlaying
                           ? "bg-elden-gold/20 border-elden-gold text-gold shadow-lg shadow-elden-gold/30"
                           : "bg-elden-dark/80 border-elden-gold/40 hover:bg-elden-dark hover:border-gold"
                     }`}
                     aria-label={
                        isPlaying ? "Pause slideshow" : "Start slideshow"
                     }
                     title={
                        isPlaying ? "Pause (Space)" : "Play slideshow (Space)"
                     }
                  >
                     {isPlaying ? (
                        <Pause className="w-5 h-5 text-gold" />
                     ) : (
                        <Play className="w-5 h-5 text-gold" />
                     )}
                  </button>
               </div>

               {/* Close button */}
               <button
                  onClick={closeLightbox}
                  className="absolute top-6 right-6 p-3 bg-elden-dark/80 backdrop-blur-sm border border-elden-gold/40 
                             rounded-full hover:bg-elden-dark hover:border-gold transition-all duration-300 z-10"
                  aria-label="Close lightbox (Escape)"
                  title="Close (Esc)"
               >
                  <X className="w-6 h-6 text-gold" />
               </button>

               <button
                  onClick={(e) => {
                     e.stopPropagation();
                     prevImage();
                  }}
                  className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 bg-elden-dark/80 backdrop-blur-sm 
                             border border-elden-gold/40 rounded-full hover:bg-elden-dark hover:border-gold 
                             transition-all duration-300 z-10"
                  aria-label="Previous image (Left arrow)"
                  title="Previous (←)"
               >
                  <ChevronLeft className="w-6 h-6 text-gold" />
               </button>

               <div
                  className="max-w-5xl max-h-[85vh] mx-4"
                  onClick={(e) => e.stopPropagation()}
               >
                  <img
                     src={filteredPhotos[currentImageIndex]?.url}
                     alt={`Scout memory from ${filteredPhotos[currentImageIndex]?.year}`}
                     className="max-w-full max-h-[85vh] object-contain rounded-lg border border-elden-gold/40 transition-opacity duration-300"
                  />
                  <div className="text-center mt-4">
                     <span className="font-cinzel text-gold">
                        {currentImageIndex + 1} / {filteredPhotos.length}
                     </span>
                     <span className="mx-4 text-elden-gold/40">•</span>
                     <span className="font-garamond text-muted-foreground/70">
                        {filteredPhotos[currentImageIndex]?.year}
                     </span>
                     {isPlaying && (
                        <>
                           <span className="mx-4 text-elden-gold/40">•</span>
                           <span className="font-garamond text-elden-gold/60 text-sm">
                              Slideshow active
                           </span>
                        </>
                     )}
                  </div>
                  {/* Keyboard hints */}
                  <div className="text-center mt-2">
                     <span className="font-garamond text-muted-foreground/40 text-xs">
                        ← → Navigate • Space Slideshow • Esc Close
                     </span>
                  </div>
               </div>

               <button
                  onClick={(e) => {
                     e.stopPropagation();
                     nextImage();
                  }}
                  className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 bg-elden-dark/80 backdrop-blur-sm 
                             border border-elden-gold/40 rounded-full hover:bg-elden-dark hover:border-gold 
                             transition-all duration-300 z-10"
                  aria-label="Next image (Right arrow)"
                  title="Next (→)"
               >
                  <ChevronRight className="w-6 h-6 text-gold" />
               </button>
            </div>
         )}
      </section>
   );
};

export default ScoutSection;
