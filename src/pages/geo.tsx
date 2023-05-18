import React from "react"

import Choropleth from "src/components/Choropleth"

const nivoData = [
  {
    id: "AFG",
    value: 119763,
  },
  {
    id: "AGO",
    value: 54877,
  },
  {
    id: "ALB",
    value: 934405,
  },
  {
    id: "ARE",
    value: 150883,
  },
  {
    id: "ARG",
    value: 707315,
  },
  {
    id: "ARM",
    value: 678762,
  },
  {
    id: "ATA",
    value: 285923,
  },
  {
    id: "ATF",
    value: 134705,
  },
  {
    id: "AUT",
    value: 446037,
  },
  {
    id: "AZE",
    value: 299911,
  },
  {
    id: "BDI",
    value: 787807,
  },
  {
    id: "BEL",
    value: 883727,
  },
  {
    id: "BEN",
    value: 314518,
  },
  {
    id: "BFA",
    value: 696194,
  },
  {
    id: "BGD",
    value: 125516,
  },
  {
    id: "BGR",
    value: 442785,
  },
  {
    id: "BHS",
    value: 597217,
  },
  {
    id: "BIH",
    value: 485646,
  },
  {
    id: "BLR",
    value: 804651,
  },
  {
    id: "BLZ",
    value: 875089,
  },
  {
    id: "BOL",
    value: 409746,
  },
  {
    id: "BRN",
    value: 128382,
  },
  {
    id: "BTN",
    value: 659920,
  },
  {
    id: "BWA",
    value: 378489,
  },
  {
    id: "CAF",
    value: 933555,
  },
  {
    id: "CAN",
    value: 500457,
  },
  {
    id: "CHE",
    value: 258104,
  },
  {
    id: "CHL",
    value: 488627,
  },
  {
    id: "CHN",
    value: 779882,
  },
  {
    id: "CIV",
    value: 110220,
  },
  {
    id: "CMR",
    value: 344598,
  },
  {
    id: "COG",
    value: 572980,
  },
  {
    id: "COL",
    value: 215561,
  },
  {
    id: "CRI",
    value: 458698,
  },
  {
    id: "CUB",
    value: 691997,
  },
  {
    id: "-99",
    value: 422578,
  },
  {
    id: "CYP",
    value: 507207,
  },
  {
    id: "CZE",
    value: 287817,
  },
  {
    id: "DEU",
    value: 482295,
  },
  {
    id: "DJI",
    value: 814047,
  },
  {
    id: "DNK",
    value: 103274,
  },
  {
    id: "DOM",
    value: 427051,
  },
  {
    id: "DZA",
    value: 928910,
  },
  {
    id: "ECU",
    value: 429636,
  },
  {
    id: "EGY",
    value: 981546,
  },
  {
    id: "ERI",
    value: 633752,
  },
  {
    id: "ESP",
    value: 222250,
  },
  {
    id: "EST",
    value: 311421,
  },
  {
    id: "ETH",
    value: 569771,
  },
  {
    id: "FIN",
    value: 796559,
  },
  {
    id: "FJI",
    value: 862130,
  },
  {
    id: "FLK",
    value: 558074,
  },
  {
    id: "FRA",
    value: 817840,
  },
  {
    id: "GAB",
    value: 606765,
  },
  {
    id: "GBR",
    value: 29464,
  },
  {
    id: "GEO",
    value: 972100,
  },
  {
    id: "GHA",
    value: 524807,
  },
  {
    id: "GIN",
    value: 669542,
  },
  {
    id: "GMB",
    value: 808444,
  },
  {
    id: "GNB",
    value: 827719,
  },
  {
    id: "GNQ",
    value: 550215,
  },
  {
    id: "GRC",
    value: 500203,
  },
  {
    id: "GTM",
    value: 890877,
  },
  {
    id: "GUY",
    value: 116965,
  },
  {
    id: "HND",
    value: 98241,
  },
  {
    id: "HRV",
    value: 850322,
  },
  {
    id: "HTI",
    value: 173908,
  },
  {
    id: "HUN",
    value: 39163,
  },
  {
    id: "IDN",
    value: 504142,
  },
  {
    id: "IND",
    value: 358503,
  },
  {
    id: "IRL",
    value: 815873,
  },
  {
    id: "IRN",
    value: 471198,
  },
  {
    id: "IRQ",
    value: 197002,
  },
  {
    id: "ISL",
    value: 954550,
  },
  {
    id: "ISR",
    value: 175538,
  },
  {
    id: "ITA",
    value: 270,
  },
  {
    id: "JAM",
    value: 779183,
  },
  {
    id: "JOR",
    value: 434640,
  },
  {
    id: "JPN",
    value: 465321,
  },
  {
    id: "KAZ",
    value: 54661,
  },
  {
    id: "KEN",
    value: 572881,
  },
  {
    id: "KGZ",
    value: 572391,
  },
  {
    id: "KHM",
    value: 894842,
  },
  {
    id: "OSA",
    value: 8450,
  },
  {
    id: "KWT",
    value: 645414,
  },
  {
    id: "LAO",
    value: 821246,
  },
  {
    id: "LBN",
    value: 928448,
  },
  {
    id: "LBR",
    value: 302124,
  },
  {
    id: "LBY",
    value: 357774,
  },
  {
    id: "LKA",
    value: 616044,
  },
  {
    id: "LSO",
    value: 428786,
  },
  {
    id: "LTU",
    value: 121571,
  },
  {
    id: "LUX",
    value: 12556,
  },
  {
    id: "LVA",
    value: 97573,
  },
  {
    id: "MAR",
    value: 264161,
  },
  {
    id: "MDA",
    value: 26320,
  },
  {
    id: "MDG",
    value: 704990,
  },
  {
    id: "MEX",
    value: 127281,
  },
  {
    id: "MKD",
    value: 160512,
  },
  {
    id: "MLI",
    value: 392824,
  },
  {
    id: "MMR",
    value: 454399,
  },
  {
    id: "MNE",
    value: 665952,
  },
  {
    id: "MNG",
    value: 530760,
  },
  {
    id: "MOZ",
    value: 554996,
  },
  {
    id: "MRT",
    value: 172099,
  },
  {
    id: "MWI",
    value: 593078,
  },
  {
    id: "MYS",
    value: 910538,
  },
  {
    id: "NAM",
    value: 299030,
  },
  {
    id: "NCL",
    value: 566066,
  },
  {
    id: "NER",
    value: 697722,
  },
  {
    id: "NGA",
    value: 580510,
  },
  {
    id: "NIC",
    value: 516369,
  },
  {
    id: "NLD",
    value: 101940,
  },
  {
    id: "NOR",
    value: 629187,
  },
  {
    id: "NPL",
    value: 905984,
  },
  {
    id: "NZL",
    value: 661924,
  },
  {
    id: "OMN",
    value: 526299,
  },
  {
    id: "PAK",
    value: 178654,
  },
  {
    id: "PAN",
    value: 419250,
  },
  {
    id: "PER",
    value: 283894,
  },
  {
    id: "PHL",
    value: 518149,
  },
  {
    id: "PNG",
    value: 380789,
  },
  {
    id: "POL",
    value: 430546,
  },
  {
    id: "PRI",
    value: 685765,
  },
  {
    id: "PRT",
    value: 591001,
  },
  {
    id: "PRY",
    value: 842175,
  },
  {
    id: "QAT",
    value: 823549,
  },
  {
    id: "ROU",
    value: 692294,
  },
  {
    id: "RUS",
    value: 57388,
  },
  {
    id: "RWA",
    value: 724950,
  },
  {
    id: "ESH",
    value: 39261,
  },
  {
    id: "SAU",
    value: 627517,
  },
  {
    id: "SDN",
    value: 898140,
  },
  {
    id: "SDS",
    value: 210489,
  },
  {
    id: "SEN",
    value: 20651,
  },
  {
    id: "SLB",
    value: 277384,
  },
  {
    id: "SLE",
    value: 739049,
  },
  {
    id: "SLV",
    value: 743111,
  },
  {
    id: "ABV",
    value: 955953,
  },
  {
    id: "SOM",
    value: 15177,
  },
  {
    id: "SRB",
    value: 221976,
  },
  {
    id: "SUR",
    value: 178454,
  },
  {
    id: "SVK",
    value: 642227,
  },
  {
    id: "SVN",
    value: 300059,
  },
  {
    id: "SWZ",
    value: 948095,
  },
  {
    id: "SYR",
    value: 946304,
  },
  {
    id: "TCD",
    value: 424486,
  },
  {
    id: "TGO",
    value: 468309,
  },
  {
    id: "THA",
    value: 446453,
  },
  {
    id: "TJK",
    value: 686725,
  },
  {
    id: "TKM",
    value: 499962,
  },
  {
    id: "TLS",
    value: 7478,
  },
  {
    id: "TTO",
    value: 250710,
  },
  {
    id: "TUN",
    value: 66228,
  },
  {
    id: "TUR",
    value: 20429,
  },
  {
    id: "TWN",
    value: 459449,
  },
  {
    id: "TZA",
    value: 743687,
  },
  {
    id: "UGA",
    value: 297356,
  },
  {
    id: "UKR",
    value: 698286,
  },
  {
    id: "URY",
    value: 370762,
  },
  {
    id: "USA",
    value: 998069,
  },
  {
    id: "UZB",
    value: 166969,
  },
  {
    id: "VEN",
    value: 269450,
  },
  {
    id: "VNM",
    value: 149966,
  },
  {
    id: "VUT",
    value: 831952,
  },
  {
    id: "PSE",
    value: 53242,
  },
  {
    id: "YEM",
    value: 791946,
  },
  {
    id: "ZAF",
    value: 574742,
  },
  {
    id: "ZMB",
    value: 623227,
  },
  {
    id: "ZWE",
    value: 382865,
  },
  {
    id: "KOR",
    value: 703711,
  },
]

const defs = [
  {
    id: "dots",
    type: "patternDots",
    background: "inherit",
    color: "#38bcb2",
    size: 4,
    padding: 1,
    stagger: true,
  },
  {
    id: "lines",
    type: "patternLines",
    background: "inherit",
    color: "#eed312",
    rotation: -45,
    lineWidth: 6,
    spacing: 10,
  },
  {
    id: "gradient",
    type: "linearGradient",
    colors: [
      {
        offset: 0,
        color: "#000",
      },
      {
        offset: 100,
        color: "inherit",
      },
    ],
  },
]

const fill = [
  {
    match: {
      id: "CAN",
    },
    id: "dots",
  },
  {
    match: {
      id: "CHN",
    },
    id: "lines",
  },
  {
    match: {
      id: "ATA",
    },
    id: "gradient",
  },
]

const ChoroplethPage: React.FC = () => {
  return (
    <div className="grid h-screen place-content-center">
      <div className="h-[600px] w-[800px]">
        <Choropleth data={nivoData} defs={defs} fill={fill} />
      </div>
    </div>
  )
}

export default ChoroplethPage
