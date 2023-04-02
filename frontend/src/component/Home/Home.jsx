
import { Box, ChakraProvider, HStack, Image, SimpleGrid, VStack } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
function Home() {
  const images =
    [
      { image: "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-OnlineStores-P1-Westenrwear.jpg" },
      { image: "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-OnlineStores-P2-Trends.jpg" },
      { image: "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-OnlineStores-P3-Sneakerhood.jpg" },
      { image: "https://assets.ajio.com/cms/AJIO/WEB/47.4_1.jpg" },
      { image: "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-OnlineStores-P5-Sportswear.jpg" },
      { image: "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-OnlineStores-P6-Footwear.jpg" },
      { image: "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-OnlineStores-P7-Accessories.jpg" },
      { image: "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-OnlineStores-P8-Wedding.jpg" },
      { image: "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-OnlineStores-P9-Sarees.jpg" },
      { image: "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-OnlineStores-P10-Homegrownbrands.jpg" },
      { image: "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-OnlineStores-P11-Indie.jpg" },
      { image: "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-OnlineStores-P12-Home.jpg" },
      { image: "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-OnlineStores-P13-Watches.jpg" },
      { image: "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-OnlineStores-P14-Innerwearmen.jpg" },
      { image: "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-OnlineStores-P15-Jewellery.jpg" },
      { image: "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-OnlineStores-P16-Lingerie.jpg" },
      { image: "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-OnlineStores-P17-Beauty.jpg" },
      { image: "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-OnlineStores-P18-yogawear.jpg" },
      { image: "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-OnlineStores-P19-Azorte.jpg" },
      { image: "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-OnlineStores-P20-MAx.jpg" },

    ]


    ;
  return (
    <>


      {/* ------------------------------------ Carousel 1 starts here ------------------------------------------------  */}
      <Box pt={10}>

        <Carousel
          className="carousel"
          autoPlay="true"
          infiniteLoop="true"
          interval="2000"
          showThumbs=""
        >
          <div>
            <img
              src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-ClearanceSale.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://assets.ajio.com/cms/AJIO/WEB/24022023-UHP-D-MainBanner-P7-ArrowUSPA-upto50.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://assets.ajio.com/cms/AJIO/WEB/24022023-UHP-D-MainBanner-P4-FootwearCarnival-RedTapeFila-Flat60.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://assets.ajio.com/cms/AJIO/WEB/24022023-UHP-D-MainBanner-P5-JohnplayerLeecooperAvaasa-Upto700On1000.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://assets.ajio.com/cms/AJIO/WEB/24022023-UHP-D-MainBanner-P3-Casuals-CampusSutraVeroModa-Min60Extra30.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://assets.ajio.com/cms/AJIO/WEB/24022023-UHP-D-MainBanner-P6-Home-HomeexpressionsStoryAtHome-5080.jpg"
              alt=""
            />
          </div>
        </Carousel>
      </Box>
      {/* ------------------------------------ Carousel 1 ends here ------------------------------------------------  */}


      <Box style={{margin:"auto"}}>
        <Image style={{width:"100vw"}}  src="https://assets.ajio.com/cms/AJIO/WEB/D1-1440x90-11.jpg" />
        <Image style={{width:"100vw"}}   src="https://assets.ajio.com/cms/AJIO/WEB/IDBI-1440x128-23.jpg" />
        <Image style={{width:"100vw"}}   src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-ASS-Teaser-Strip.gif" />
        <Image style={{width:"100vw"}}   src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-ASS-Teaser-HalfbannerRevised%20.gif" />
        <Image style={{width:"100vw"}}   src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-SpecieUpYourBrandGame-SectionheaderStrip.jpg" />
      </Box>


      {/* ------------------------------------ Carousel 2 starts here ------------------------------------------------  */}
      <Carousel
        className="carousel"
        autoPlay="true"
        infiniteLoop="true"
        interval="2000"
        showThumbs=""
      >
        <div>
          <img
            src="https://assets.ajio.com/cms/AJIO/WEB/22022023-UHP-D-Daily%20Deals%20-P2-Brands-30-50--.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://assets.ajio.com/cms/AJIO/WEB/24022023-UHP-D-TopBanner-P2-CasualFootwear-ActionBucik-Under999Extra30.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://assets.ajio.com/cms/AJIO/WEB/24022023-UHP-D-TopBanner-P3-Kids-KBTSKFFrendz-Min50.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://assets.ajio.com/cms/AJIO/WEB/24022023-UHP-D-TopBanner-P4-Puma-Min40.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://assets.ajio.com/cms/AJIO/WEB/24022023-UHP-D-TopBanner-P5-Western-VeromodaThebearhouse-flat60extraupto35.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://assets.ajio.com/cms/AJIO/WEB/24022023-UHP-D-TopBanner-P7-HiFashionFits-SuperdryAx-3050.jpg"
            alt=""
          />
        </div>
      </Carousel>
      {/* ------------------------------------ Carousel 2 ends here ------------------------------------------------  */}


      {/* ------------------------------------ Carousel of paytm starts here ------------------------------------------------  */}
      <Carousel
        className="carousel"
        autoPlay="true"
        infiniteLoop="true"
        interval="2000"
        showThumbs=""
      >
        <div>
          <img
            src="https://assets.ajio.com/cms/AJIO/WEB/1440x128-Paytmm.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://assets.ajio.com/cms/AJIO/WEB/Mobikwik-1440x128-23.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-BankOffer-PayUpto3.jpg"
            alt=""
          />
        </div>
      </Carousel>
      {/* ------------------------------------ Carousel of paytm ends here ------------------------------------------------  */}

      {/* -------------------------------- block 1 starts here ------------------------------------------------------- */}
      <HStack width="100vw" justifyContent={'center'} alignItems='center' m='auto'  >
        <Image width="100%" wi src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-SS23-HalfBanner%20.gif" />
      </HStack>


      <Box>
        <HStack justifyContent={'center'} alignItems='center' m='auto'>

          <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Rewards-Sectionheader.jpg" />
        </HStack>
        <SimpleGrid columns={{ base: 2, md: 4 }}>
          <Box>
            {" "}
            <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Rewards-EarnUpto5.jpg" />
          </Box>
          <Box>
            {" "}
            <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Rewards-EarnUpto5.jpg" />
          </Box>
          <Box>
            <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Rewards-EarnUpto5.jpg" />
          </Box>
          <Box>
            <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Rewards-EarnUpto5.jpg" />
          </Box>
        </SimpleGrid>
      </Box>

      {/* --------------------------------------block 1 ends here ------------------------------------------ */}

      {/* -------------------------------- block 2 starts here ------------------------------------------------------- */}
      <Box>
        <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-SponsorBrands-SectionHeader.jpg" />
      </Box>


      <Box>
        <Image src="" />
        <SimpleGrid columns={{ base: 2, md: 4 }}>
          <Box>
            {" "}
            <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-SponsorBrands-P1-Puma-4060.jpg" />
          </Box>
          <Box>
            {" "}
            <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-SponsorBrands-P2-Levis-Flat50Extra10.jpg" />
          </Box>
          <Box>
            <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-SponsorBrands-P3-Adidas-4060.jpg" />
          </Box>
          <Box>
            <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-SponsorBrands-P4-Campus-Upto60.jpg" />
          </Box>
        </SimpleGrid>
      </Box>

      {/* --------------------------------------block 2 ends here ------------------------------------------ */}

      <Box>
        <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-FlashDealsHeaderStrip.jpg" />
      </Box>


      {/* --------------------------------------Carousel 3 starts here ------------------------------------------ */}
      <Carousel
        className="carousel"
        autoPlay="true"
        infiniteLoop="true"
        interval="2000"
        showThumbs=""
      >
        <div>
          <img
            src="https://assets.ajio.com/cms/AJIO/WEB/24022023-UHP-D-Flash%20Deals%20-P8-Brands-Flat60.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://assets.ajio.com/cms/AJIO/WEB/24022023-UHP-D-Flash%20Deals%20-P9-Brands-Min40.jpg"
            alt=""
          />
        </div>
      </Carousel>
      {/* --------------------------------------Carousel 3 ends here ------------------------------------------ */}


      <Box>
        <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-SponsorBrands-SectionHeader.jpg" />
        <SimpleGrid columns={{ base: 2, md: 4 }}>
          <Box>
            {" "}
            <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-SponsorBrands-P1-Puma-4060.jpg" />
          </Box>
          <Box>
            <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Rewards-EarnUpto5.jpg" />
          </Box>
          <Box>
            <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Rewards-EarnUpto5.jpg" />
          </Box>
          <Box>
            <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-SponsorBrands-P2-Levis-Flat50Extra10.jpg" />
          </Box>
        </SimpleGrid>
      </Box>
      <Box>
        <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-FlashDealsHeaderStrip.jpg" />
      </Box>
      <Box>
        <Image src="https://assets.ajio.com/cms/AJIO/WEB/MicrosoftTeams-image-free-d.png" />
      </Box>
      {/* <Box>
        <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-AjioExclusives-Sectionheader.jpg" />
        <SimpleGrid columns={{ base: 2, md: 4 }}>
          <Box>
            {" "}
            <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-AjioExclusives-P1-GAP-Upto25.jpg" />
          </Box>
          <Box>
            <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-AjioExclusives-P3-Arbunore-Min50.jpg" />
          </Box>
          <Box>
            <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-AjioExclusives-P2-Produkt-Upto50.jpg" />
          </Box>
          <Box>
            <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-AjioExclusives-P4-Avaasa-Min30.jpg" />
          </Box>
        </SimpleGrid>
        <Box>
          <Image src="https://assets.ajio.com/cms/AJIO/WEB/UHP-AJIOBeauty-1440x397.jpg" />
        </Box>
        <Carousel
          className="carousel"
          autoPlay="true"
          infiniteLoop="true"
          interval="2000"
          showThumbs=""
        >
          <div>
            <img
              src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/banner-shop-now_2_1400x.gif?v=1661324429"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/misfit-2_1_1400x.png?v=1661518500"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Savings-Round-The-Clock_wbann_2000x.jpg?v=1651128820"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD500_anc_wbann_2000x.jpg?v=1649855267"
              alt=""
            />
          </div>
        </Carousel>
        <Box>
          <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Westernwear-Sectionheader.jpg" />
          <SimpleGrid columns={{ base: 2, md: 4 }}>
            <Box>
              {" "}
              <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Westernwear-P1-TopsTees-USPAPuma-Starting499.jpg" />
            </Box>
            <Box>
              <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-AjioExclusives-P3-Arbunore-Min50.jpg" />
            </Box>
            <Box>
              <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Westernwear-P3-LevisWrangler-JeansJegings-Starting999.jpg" />
            </Box>
            <Box>
              <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Westernwear-P2-Dresses-VeroModaONLY-Starting599.jpg" />
            </Box>
          </SimpleGrid>
        </Box>
        <Box>
          <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-OnlineStores-Sectionheader.jpg" />
          <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-OnlineStores-AJIOGOLD.jpg" />
        </Box>
      </Box> */}

      {/* ------------------------------------------------ 2 Carousel starts here--------------------------------------------- */}
      <Box>
        <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-ForHER-Sectionheader.jpg" />
      </Box>

      <Carousel
        className="carousel"
        autoPlay="true"
        infiniteLoop="true"
        interval="2000"
        showThumbs=""
      >
        <div>
          <img
            src="https://assets.ajio.com/cms/AJIO/WEB/24022023-d-mhp-uhphim-p1-brands-flat60.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://assets.ajio.com/cms/AJIO/WEB/24022023-d-mhp-uhphim-p2-brands-min65.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://assets.ajio.com/cms/AJIO/WEB/24022023-d-mhp-uhphim-p3-brands-3080.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://assets.ajio.com/cms/AJIO/WEB/24022023-d-mhp-uhphim-p4-brands-starting699.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://assets.ajio.com/cms/AJIO/WEB/24022023-d-mhp-uhphim-p5-brands-starting999.jpg"
            alt=""
          />
        </div>
      </Carousel>

      <Box>
        <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-ForHIM-Sectionheader.jpg" />
      </Box>

      {/* <Carousel
        className="carousel"
        autoPlay="true"
        infiniteLoop="true"
        interval="2000"
        showThumbs=""
      >
        <div>
          <img
            src="https://assets.ajio.com/cms/AJIO/WEB/24022023-UHP-D-UHPwomen-p1-marks&spencer-newbalance-20to60.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://assets.ajio.com/cms/AJIO/WEB/24022023-UHP-D-UHPwomen-p2-iscenery-only-min40.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://assets.ajio.com/cms/AJIO/WEB/24022023-UHP-D-UHPwomen-p3-malabar-pcchandra-upto50.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://assets.ajio.com/cms/AJIO/WEB/24022023-UHP-D-UHPwomen-p4-everqupid-fivebyinc5-starting799.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://assets.ajio.com/cms/AJIO/WEB/24022023-UHP-D-UHPwomen-p5-marks&spencer-glamorous-upto70.jpg"
            alt=""
          />
        </div>
      </Carousel>


      {/* ------------------------------------------------ 2 Carousel ends here--------------------------------------------- */}




      {/* -------------------------------------block of 7*4  started ----------------------------------------------- */}

      {/* <Box>
        <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-FEthnicwear-Sectionheader.jpg" />
        <SimpleGrid columns={{ base: 2, md: 4 }}>
          <Box>
            {" "}
            <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-FEthnicwear-P1-KurtiKurtaSets-AvaasaGlamroos-Starting599.jpg" />
          </Box>
          <Box>
            <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-FEthnicwear-P2-Sarees-IndiePicksHritika-Starting432.jpg" />
          </Box>
          <Box>
            <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-FEthnicwear-P3-handbags-Brands-Starting499.jpg" />
          </Box>
          <Box>
            <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-FEthnicwear-P4-Jewellery-Brands-Upto80.jpg" />
          </Box>
        </SimpleGrid>
      </Box> */}

      {/* <Box>
        <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Accessories-SectionHeader.jpg" />
        <SimpleGrid columns={{ base: 2, md: 4 }}>
          <Box>
            {" "}
            <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Accessories-P1-SportsCasualShoes-ReebokPuma-Starting1199.jpg" />
          </Box>
          <Box>
            <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Accessories-P2-CasioFossil-Watches-Upto70.jpg" />
          </Box>
          <Box>
            <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Accessories-P3-FlipFlopsSandals-AdidasCampus-Starting299.jpg" />
          </Box>
          <Box>
            <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Accessories-P4-Home-GoodomesHomecentre-upto80.jpg" />
          </Box>
        </SimpleGrid>
      </Box> */}
{/* 
      <Box>
        <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-HiddenGems-SectionHeader.jpg" />
        <SimpleGrid columns={{ base: 2, md: 4 }}>
          <Box>
            {" "}
            <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-HiddenGems-P1-Trendyol-4065.jpg" />
          </Box>
          <Box>
            <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-HiddenGems-P2-Koton-3060.jpg" />
          </Box>
          <Box>
            <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-HiddenGems-P3-NA-KD-3060.jpg" />
          </Box>
          <Box>
            <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-HiddenGems-P4-WKND-Upto60.jpg" />
          </Box>
        </SimpleGrid>
      </Box> */}

      {/* <Box>
        <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Kidswear-SectionHeader.jpg" />
        <SimpleGrid columns={{ base: 2, md: 4 }}>
          <Box>
            {" "}
            <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Kidswear-P1-Crocspuma-3060.jpg" />
          </Box>
          <Box>
            <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Kidswear-P2-MnSUCB-Starting559.jpg" />
          </Box>
          <Box>
            <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Kidswear-P3-USPAPepeJeans-Min40.jpg" />
          </Box>
          <Box>
            <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Kidswear-P4-HellcatToonyPort-Upto70.jpg" />
          </Box>
        </SimpleGrid>
      </Box> */}

      {/* <Box>
        <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-MegaBrands-SectionheaderStrip.jpg" />
        <SimpleGrid columns={{ base: 2, md: 4 }}>
          <Box>
            {" "}
            <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-MegaBrands-P1-Nike-Upto50.jpg" />
          </Box>
          <Box>
            <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-MegaBrands-P2-UCB-3070.jpg" />
          </Box>
          <Box>
            <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-MegaBrands-P3-Superdry-3050.jpg" />
          </Box>
          <Box>
            <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-MegaBrands-P4-Pedro-min40.jpg" />
          </Box>
        </SimpleGrid>
      </Box> */}

      {/* <Box>
        <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-ClassicBrands-SectionHeader.jpg" />
        <SimpleGrid columns={{ base: 2, md: 4 }}>
          <Box>
            {" "}
            <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-ClassicBrands-P1-KimayraKurtipedia-min50.jpg" />
          </Box>
          <Box>
            <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-ClassicBrands-P2-vanHeusen-min40.jpg" />
          </Box>
          <Box>
            <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-ClassicBrands-P3-OrchidBluesCottonfab-min60.jpg" />
          </Box>
          <Box>
            <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-ClassicBrands-P4-rareRabbit-Upto50.jpg" />
          </Box>
        </SimpleGrid>
      </Box> */}
{/* 
      <Box>
        <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Home-Sectionheader.jpg" />
        <SimpleGrid columns={{ base: 2, md: 4 }}>
          <Box>
            {" "}
            <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Home-P1-QuiltsComforters-StoryRaymond-Upto80.jpg" />
          </Box>
          <Box>
            <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Home-P2-Decor-Brands-Starying199.jpg" />
          </Box>
          <Box>
            <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Home-P3-Home-goodhomesHomesizzler-upto80.jpg" />
          </Box>
          <Box>
            <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Home-P4-Portico-upto50.jpg" />
          </Box>
        </SimpleGrid>
      </Box> */}
      {/* -----------------------------------------------block of 7*4 ended ------------------------------------------------------- */}
{/* 

      <VStack>
        <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-OnlineStores-Sectionheader.jpg" />
        <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-OnlineStores-AJIOGOLD.jpg" />
      </VStack> */}


      {/* ---------------------------------------------- 20 items block started ---------------------------------- */}
      {/* <SimpleGrid columns={{ base: 2, md: 4 }}>
        {images?.map((el) => (
          <Box>
            <Image src={el.image} alt="err" />
          </Box>
        ))}
      </SimpleGrid> */}
      {/* ---------------------------------------------- 20 items block ended ---------------------------------- */}

      {/* <VStack>
        <Image src="https://assets.ajio.com/cms/AJIO/WEB/Discover%20Online%20Stnkores%20(D).jpg" />
        <Image src="https://assets.ajio.com/cms/AJIO/WEB/13102020-D-unisex-ajiocares-strip.jpg" />
      </VStack>  */}

    </>
  );
}

export default Home;
