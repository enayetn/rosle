
import roseImgGallica from '../assets/gallica.jpg'
import roseImg from '../assets/rose.png'
import ballerinaImg from '../assets/ballerina.jpg';
import mrlincolnImg from '../assets/mrlincoln.jpg';
import ladyshallottImg from '../assets/ladyshallott.jpg';
import ebbtideImg from '../assets/ebbtide.jpg';
import hotcocoaImg from '../assets/hotcocoa.jpg';
import gertrudejekyllImg from '../assets/gertrudejekyll.jpg';
import earthangelImg from '../assets/earthangel.jpg';
import cherryparfaitImg from '../assets/cherryparfait.jpg';
import summerromanceImg from '../assets/summerromance.jpg';
import scarboroughfairImg from '../assets/scarboroughfair.jpg';
import topcreamImg from '../assets/topcream.jpg';
import goldencelebrationImg from '../assets/goldencelebration.jpg';
import doubledelightImg from '../assets/doubledelight.jpg';
import polkaImg from '../assets/polka.jpg';
import kokolokoImg from '../assets/kokoloko.jpg';
import apothecaryImg from '../assets/apothecary.jpg';
import theresebugnetImg from '../assets/theresebugnet.jpg';
import lydaImg from '../assets/lyda.jpg';
import aprilloveImg from '../assets/aprillove.jpg';
import tessImg from '../assets/tess.jpg';
import handelImg from '../assets/handel.jpg';
import vanessabellImg from '../assets/vanessabell.jpg';
import boscabelImg from '../assets/boscabel.jpg';
import flowerCarpetAmberImg from '../assets/flowercarpetamber.jpg';
import blackBacaratImg from '../assets/blackbacarat.jpg';
import honeyDijonImg from '../assets/honeydijon.jpg';

interface IRose {
    name: string
    bloom_size: number[]
    bloom_shape: string[]
    petal_count: string
    min_usda_zone: number
    url: string
    img: string
    color?: string
  }
  
  const BloomShapes = {
    CUPPED: "cupped",
    FLAT: "flat",
    GLOBULAR: "globular",
    HIGH_CENTERED: "high-centered",
    QUARTER: "quarter",
    ROSETTE: "rosette",
    POMPON: "pompon",
    URN: "urn"
  }
  
  const roses: {[id:string]: IRose} = {
    "2025-05-09": {
      name: "Rose (Rosa 'Chrysler Imperial')",
      bloom_size: [4, 5],
      bloom_shape: [BloomShapes.HIGH_CENTERED],
      petal_count: "very-full",
      min_usda_zone: 6,
      url: "https://garden.org/plants/view/1534/Rose-Rosa-Chrysler-Imperial/",
      img: roseImg
    },
    "2025-05-10": {
      name: "Gallica Rose (Rosa 'Charles de Mills')",
      bloom_size: [4, 5],
      bloom_shape: [BloomShapes.CUPPED],
      petal_count: "very-full",
      min_usda_zone: 4,
      url: "https://garden.org/plants/view/608/Gallica-Rose-Rosa-Charles-de-Mills/",
      img: roseImgGallica
    },
    "2025-05-11": {
      name: "Rose (Rosa 'Fontaine des Loups')",
      bloom_size: [2, 3],
      bloom_shape: [BloomShapes.GLOBULAR],
      petal_count: "double",
      min_usda_zone: 7,
      url: "https://garden.org/plants/view/359/China-Rose-Rosa-Cramoisi-Superieur/",
      img: roseImg
    },
    "2025-05-12": {
      name: "Ballerina",
      bloom_size: [2],
      bloom_shape: [BloomShapes.FLAT],
      petal_count: "single",
      min_usda_zone: 5,
      url: "https://garden.org/plants/view/40/Hybrid-Musk-Rose-Rosa-Ballerina/",
      img: ballerinaImg
    },
    "2025-05-13": {
      name: "Mister Lincoln",
      bloom_size: [6],
      bloom_shape: [BloomShapes.HIGH_CENTERED],
      petal_count: "full",
      min_usda_zone: 5,
      url: "https://garden.org/plants/view/73/Hybrid-Tea-Rose-Rosa-Mister-Lincoln/",
      img: mrlincolnImg
    }, 
    "2025-05-14": {
      name: "Lady of Shalott",
      bloom_size: [2,3],
      bloom_shape: [BloomShapes.GLOBULAR],
      petal_count: "very-full",
      min_usda_zone: 5,
      url: "https://garden.org/plants/view/228631/English-Shrub-Rose-Rosa-Lady-of-Shalott/",
      img: ladyshallottImg
    },
    "2025-05-15": {
      name: "Ebb Tide",
      bloom_size: [2,3],
      bloom_shape: [BloomShapes.ROSETTE],
      petal_count: "full",
      min_usda_zone: 6,
      url: "https://garden.org/plants/view/2856/Rose-Rosa-Ebb-Tide/",
      img: ebbtideImg
    },
    "2025-05-16": {
      name: "Hot Cocoa",
      bloom_size: [4,5],
      bloom_shape: [BloomShapes.HIGH_CENTERED],
      petal_count: "full",
      min_usda_zone: 6,
      url: "https://garden.org/plants/view/1439/Rose-Rosa-Hot-Cocoa/",
      img: hotcocoaImg
    },
    "2025-05-17": {
      name: "Gertrude Jekyll",
      bloom_size: [4, 5],
      bloom_shape: [BloomShapes.QUARTER],
      petal_count: "full",
      min_usda_zone: 4,
      url: "https://garden.org/plants/view/484/Rose-Rosa-Gertrude-Jekyll/",
      img: gertrudejekyllImg
    },
    "2025-05-18": {
      name: "Earth Angel",
      bloom_size: [2, 3],
      bloom_shape: [BloomShapes.GLOBULAR],
      petal_count: "very-full",
      min_usda_zone: 5,
      url: "https://garden.org/plants/view/733535/Rose-Rosa-Earth-Angel/",
      img: earthangelImg
    },
    "2025-05-19": {
      name: "Cherry Parfait",
      bloom_size: [2, 3],
      bloom_shape: [BloomShapes.CUPPED],
      petal_count: "full",
      min_usda_zone: 6,
      url: "https://garden.org/plants/view/6/Rose-Rosa-Cherry-Parfait/",
      img: cherryparfaitImg
    },
    "2025-05-20": {
      name: "Summer Romance",
      bloom_size: [4, 5],
      bloom_shape: [BloomShapes.CUPPED],
      petal_count: "full",
      min_usda_zone: 5,
      url: "https://garden.org/plants/view/697348/Rose-Rosa-Madame-de-Maintenon/",
      img: summerromanceImg
    },
    "2025-05-21": {
      name: "Scarborough Fair",
      bloom_size: [2, 3],
      bloom_shape: [BloomShapes.CUPPED],
      petal_count: "double",
      min_usda_zone: 5,
      url: "https://garden.org/plants/view/3074/Rose-Rosa-Scarborough-Fair/",
      img: scarboroughfairImg
    },
    // "2025-05-22": {
    //   name: "TODO",
    //   bloom_size: [4, 5],
    //   bloom_shape: [BloomShapes.HIGH_CENTERED],
    //   petal_count: "very-full",
    //   min_usda_zone: 6,
    //   url: "https://garden.org/plants/view/1534/Rose-Rosa-Chrysler-Imperial/",
    //   img: roseImg
    // },
    "2025-05-23": {
      name: "Golden Celebration",
      bloom_size: [4, 5],
      bloom_shape: [BloomShapes.CUPPED],
      petal_count: "very-full",
      min_usda_zone: 5,
      url: "https://garden.org/plants/view/486/Rose-Rosa-Golden-Celebration/",
      img: goldencelebrationImg
    },
    "2025-05-24": {
      name: "Camille Claudel 'Top Cream'",
      bloom_size: [4, 5],
      bloom_shape: [BloomShapes.CUPPED, BloomShapes.QUARTER],
      petal_count: "very-full",
      min_usda_zone: 6,
      url: "https://garden.org/plants/view/812938/Rose-Rosa-Camille-Claudel/",
      img: topcreamImg
    },
    "2025-05-25": {
      name: "Double Delight",
      bloom_size: [4,5],
      bloom_shape: [BloomShapes.HIGH_CENTERED],
      petal_count: "full",
      min_usda_zone: 7,
      url: "https://garden.org/plants/view/20/Hybrid-Tea-Rose-Rosa-Double-Delight/",
      img: doubledelightImg
    },
    "2025-05-26": {
      name: "Polka",
      bloom_size: [4, 5],
      bloom_shape: [BloomShapes.CUPPED],
      petal_count: "full",
      min_usda_zone: 5,
      url: "https://garden.org/plants/view/1619/Rose-Rosa-Polka/",
      img: polkaImg
    },
    "2025-05-27": {
      name: "Koko Loko",
      bloom_size: [2,3],
      bloom_shape: [BloomShapes.HIGH_CENTERED],
      petal_count: "full",
      min_usda_zone: 6,
      url: "https://garden.org/plants/view/4428/Rose-Rosa-Koko-Loko/",
      img: kokolokoImg
    },
    "2025-05-28": {
      name: "Apothecary's Rose",
      bloom_size: [2, 3],
      bloom_shape: [BloomShapes.FLAT],
      petal_count: "semi-double",
      min_usda_zone: 3,
      url: "https://garden.org/plants/view/4029/Rose-Rosa-gallica-Apothecarys-Rose/",
      img: apothecaryImg
    },
    "2025-05-29": {
      name: "Thérèse Bugnet",
      bloom_size: [4, 5],
      bloom_shape: [BloomShapes.POMPON],
      petal_count: "full",
      min_usda_zone: 3,
      url: "https://www.helpmefind.com/rose/l.php?l=2.2473",
      img: theresebugnetImg
    },
    "2025-05-30": {
      name: "Lyda",
      bloom_size: [2, 3],
      bloom_shape: [BloomShapes.FLAT],
      petal_count: "single",
      min_usda_zone: 5,
      url: "https://www.helpmefind.com/gardening/l.php?l=2.3944",
      img: lydaImg
    },
    "2025-05-31": {
      name: "April Love",
      bloom_size: [4, 5],
      bloom_shape: [BloomShapes.CUPPED],
      petal_count: "very-full",
      min_usda_zone: 5,
      url: "https://www.helpmefind.com/gardening/l.php?l=2.41441",
      img: aprilloveImg
    },
    "2025-06-01": {
      name: "Tess of the d'Urbervilles",
      bloom_size: [4, 5],
      bloom_shape: [BloomShapes.CUPPED],
      petal_count: "full",
      min_usda_zone: 5,
      url: "https://www.helpmefind.com/gardening/l.php?l=2.18153",
      img: tessImg
    },
    "2025-06-02": {
      name: "Handel",
      bloom_size: [4, 5],
      bloom_shape: [BloomShapes.HIGH_CENTERED],
      petal_count: "full",
      min_usda_zone: 6,
      url: "https://www.helpmefind.com/gardening/l.php?l=2.18153",
      img: handelImg
    },
    "2025-06-05": {
      name: "Vanessa Bell",
      bloom_size: [2,3],
      bloom_shape: [BloomShapes.CUPPED],
      petal_count: "full",
      min_usda_zone: 5,
      url: "https://helpmefind.com/gardening/l.php?l=2.78356&tab=1",
      img: vanessabellImg
    },
    "2025-06-06": {
      name: "Boscobel",
      bloom_size: [2, 3],
      bloom_shape: [BloomShapes.CUPPED],
      petal_count: "very-full",
      min_usda_zone: 5,
      url: "https://helpmefind.com/rose/l.php?l=2.67032&tab=1",
      img: boscabelImg
    },
    "2025-06-21": {
      name: "Flower Carpet Amber",
      bloom_size: [2, 3],
      bloom_shape: [BloomShapes.POMPON],
      petal_count: "double",
      min_usda_zone: 6,
      url: "https://www.helpmefind.com/gardening/l.php?l=2.41676.3",
      img: flowerCarpetAmberImg
    },
    "2025-06-22": {
      name: "Black Bacarat",
      bloom_size: [4, 5],
      bloom_shape: [BloomShapes.HIGH_CENTERED],
      petal_count: "full",
      min_usda_zone: 7,
      url: "https://www.helpmefind.com/gardening/l.php?l=2.35457",
      img: blackBacaratImg
    },
    "2025-06-23": {
      name: "Honey Dijon",
      bloom_size: [4, 5],
      bloom_shape: [BloomShapes.HIGH_CENTERED],
      petal_count: "full",
      min_usda_zone: 6,
      url: "https://www.helpmefind.com/gardening/l.php?l=2.36940",
      img: honeyDijonImg
    }
  };

export {roses};
export type {IRose}