import fs from "fs"

function jsonToCsv(jsonData, csvFilePath) {
  // Parse the JSON data
  const data = JSON.parse(jsonData);
  
  // Extract the headers (keys from the first object)
  const headers = Object.keys(data[0]);

  // Create an array to store the CSV lines
  const csvLines = [];

  // Add the headers as the first line
  csvLines.push(headers.join(','));

  // Add the data rows
  data.forEach(row => {
      const values = headers.map(header => {
          const value = row[header];
          // Stringify the value if it's an object to preserve the JSON structure
          return typeof value === 'object' && value !== null 
              ? JSON.stringify(value)
              : value;
      });
      csvLines.push(values.map(val => `"${val}"`).join(',')); // Adding quotes around each value
  });

  // Write the CSV lines to a file
  fs.writeFile(csvFilePath, csvLines.join('\n'), (err) => {
      if (err) {
          console.error('Error writing to CSV file', err);
      } else {
          console.log(`CSV file has been written to ${csvFilePath}`);
      }
  });
}

// Example usage
const jsonData = JSON.stringify([
    {
        "company": "ABL AGRI INFRA PRIVATE LIMITED",
        "attributes": {
          "city": "FLATNO401 ,ASHOK REGENT EENADU COLONY,KUKAT PALLY VIVEKANANDANAGAR COLONY BALANAGAR HYDERABAD TG 500072 IN"
        },
        "email": "abhishekedara@gmail.com",
        "name": "SAI HIMABINDU EDARA"
      },
      {
        "company": "ABL AGRIGENETICS (INDIA) PRIVATE LIMITED",
        "attributes": {
          "city": "ASHOK REGENT,FLAT NO-401 , ENADU COLONY, KUKATPALL VIVEKANANDANAGAR COLONY BALANAGAR HYDERABAD TG 500072 IN"
        },
        "email": "abhishek.edara.mec17@itbhu.ac.in",
        "name": "SAI HIMABINDU EDARA"
      },
      {
        "company": "ABL ESTATE DEVELOPERS PRIVATE LIMITED",
        "attributes": {
          "city": "C/O BALBIR SINGH BATH KALAN NAKODAR JALANDHAR PB 144044 IN"
        },
        "email": "bathnarinder15@gmail.com",
        "name": "NARINDER SINGH BATH"
      },
      {
        "company": "ABLE MARITIME SUPPLIER PRIVATE LIMITED",
        "attributes": {
          "city": "F/3 &QUOT;SANKET&QUOT; KHARGATE, MAMAKOTHA ROAD BHAVNAGAR BHAVNAGAR BHAVNAGAR GJ 364001 IN"
        },
        "email": "AY@ABLEMARINESERVICES.COM",
        "name": "YASIN HABIB ALI PATEL"
      },
      {
        "company": "ABLEBODY PHARMACETUTICALS PRIVATE LIMITED",
        "attributes": {
          "city": "249/22A SHEKHPURA ROAD KISHANPURA EED-I MEERUT MEERUT CITY MEERUT MEERUT UP 250002 IN"
        },
        "email": "adarshyadav03121997@gmail.com",
        "name": "ADARSH YADAV"
      },
      {
        "company": "ABLEON CONNECT PRIVATE LIMITED",
        "attributes": {
          "city": "A-26 PADMANABH NAGAR SANGAM COLONY SUBHASH NAGAR (BHOPAL) HUZUR BHOPAL MP 462023 IN"
        },
        "email": "jainadish103@gmail.com",
        "name": "ADISH JAIN"
      },
      {
        "company": "ABLOOM INFRATECH AND DEVELOPMENT PRIVATE LIMITED",
        "attributes": {
          "city": "RC WESTERN MALL, FLAT NO 505, RPS MORE, DANAPUR BAZAR DINAPUR-CUM-KHAGAUL PATNA BR 801503 IN"
        },
        "email": "abhinav4uall@gmail.com",
        "name": "KUMAR GAWROW"
      },
      {
        "company": "ABLOW COMPLIANCE INDIA PRIVATE LIMITED",
        "attributes": {
          "city": "HOUSE NO. 5, NEAR URJA PARK, MODEL TOWN MODEL TOWN REWARI GOKALGARH REWARI HR 123401 IN"
        },
        "email": "ablowcompliance@gmail.com",
        "name": "ANIL KUMAR"
      },
      {
        "company": "ABLOX TECHNOLOGIES (OPC) PRIVATE LIMITED",
        "attributes": {
          "city": "C/O PHILIP AA ANCHUTHURUTHEL HOUSE OLESSA KOTTAYAM KOTTAYAM KL 686014 IN"
        },
        "email": "abinmathewsphilip@gmail.com"
      },
      {
        "company": "ABLS HUMAN RESOURCES (OPC) PRIVATE LIMITED",
        "attributes": {
          "city": "OLD NO: 314(23), 13/610, 1ST FLOOR, CVP CITY TOWER TIRUVALLA TIRUVALLA PATHANAMTHITTA KL 689101 IN"
        },
        "email": "sandshrconsultancy@gmail.com"
      },
      {
        "company": "ABM BAKEZ PRIVATE LIMITED",
        "attributes": {
          "city": "BUILDING NO 217 KUNINGAD POST KUNINGAD VADAKARA KOZHIKODE KL 673503 IN"
        },
        "email": "abmbakez@gmail.com",
        "name": "VALAPPIL ASHRAF"
      },
      {
        "company": "ABM BEVERAGES PRIVATE LIMITED",
        "attributes": {
          "city": "KRISHNA VALLEY DAIRY FARM AT- BIRAULI, PUSA DIGHRA SAMASTIPUR SAMASTIPUR BR 848115 IN"
        },
        "email": "Jay1183@gmail.com"
      },
      {
        "company": "ABM BUILDCON INDIA PRIVATE LIMITED",
        "attributes": {
          "city": "114 BHAIPUR BRAHMANAN JEWER GAUTAM BUDDHA NAGAR UP 203209 IN"
        },
        "email": "manishvats1092@gmail.com",
        "name": "MANISH KUMAR SHARMA"
      },
      {
        "company": "ABM GLOBAL SHIPPING PRIVATE LIMITED",
        "attributes": {
          "city": "NO: XII/384, NORTH PARAVUR, KOCHI, MANNAM PARAVUR PARAVUR ERNAKULAM KL 683520 IN"
        },
        "email": "HARIS@ABM-Global.com",
        "name": "KURUKKASSERY SALIM SANOJ"
      },
      {
        "company": "ABM HOMEX PRIVATE LIMITED",
        "attributes": {
          "city": "C/O RAMA NANDAN SINGH BAHADURPUR VILLAGE RAJENDRA NAGAR (PATNA) SAMPATCHAK PATNA BR 800016 IN"
        },
        "email": "abmconstruction.19@gmail.com",
        "name": "AMARJEET KUMAR SINGH"
      },
      {
        "company": "ABM MEDICARE PRIVATE LIMITED",
        "attributes": {
          "city": "FLAT NO.100, 3RD FLOOR KD BLOCK PITAMPURA MAURYA ENCLAVE DELHI NORTH WEST DELHI DL 110034 IN"
        },
        "email": "abmmedicare3@gmail.com",
        "name": "ALOK RANJAN"
      },
      {
        "company": "ABM MINES (OPC) PRIVATE LIMITED",
        "attributes": {
          "city": "SUB-41,-1420(P),ADITYA ENCLAVE,KANAN VIHAR PATIA GDS BHUBANESWAR KHORDA OR 751024 IN"
        },
        "email": "bulen.mishra@gmail.com"
      },
      {
        "company": "ABM SILVER SOMAJ KALYAN FOUNDATION",
        "attributes": {
          "city": "C/O SAMSHER SEIKH, TARAKPUR,GAJDHARPARA LALDIGHI BERHAMPORE MURSHIDABAD WB 742101 IN"
        },
        "email": "asadmanjar1997@gmail.com",
        "name": "BENOJIR BEGUM"
      },
      {
        "company": "ABM SOLAR SYSTEM PRIVATE LIMITED",
        "attributes": {
          "city": "C/O BHAJANA RAM VISHNOI SHOP NO 2 UDAYE NAGAR PHALODI JODHPUR JODHPUR RJ 342301 IN"
        },
        "email": "bishnoianishjani@gmail.com",
        "name": "ASHOK KUMAR"
      },
      {
        "company": "ABMG PAPERS PRIVATE LIMITED",
        "attributes": {
          "city": "909/16, RAJENDRA PLACE DELHI PATEL NAGAR (CENTRAL DELHI) NEW DELHI CENTRAL DELHI DL 110008 IN"
        },
        "email": "abmgpapers@gmail.com",
        "name": "AKSHAT BAKHT"
      },
      {
        "company": "ABMICARE SYSTEMS PRIVATE LIMITED",
        "attributes": {
          "city": "BE-253 AVANTIKA GHAZIABAD GHAZIABAD GHAZIABAD UP 201001 IN"
        },
        "email": "aksindia253@gmail.com",
        "name": "AJAY KUMAR SRIVASTAVA"
      },
      {
        "company": "ABMIT CONSULTANCY SERVICES PRIVATE LIMITED",
        "attributes": {
          "city": "4A,SIRI RD,CHITRAKUT BLDG 2ND FLR, CHIRANJILAL MRG, MALABAR HILL MUMBAI MUMBAI MH 400006 IN"
        },
        "email": "abmit2024@gmail.com",
        "name": "ABHAR PRADIP CHOKSHI"
      },
      {
        "company": "ABMPL FOUNDATION",
        "attributes": {
          "city": "C 10 GF, MANSHA LUXARY FL SEC 72 GREATER FARIDABAD NEEMKA BALLABGARH FARIDABAD HR 121004 IN"
        },
        "email": "abmplfoundation@gmail.com",
        "name": "CHANDER HASS SHARMA"
      },
      {
        "company": "ABNAMEX LOGISTICS PRIVATE LIMITED",
        "attributes": {
          "city": "NO164, MGR NGR,MM PALAYAM PUZHAL, MADHAVARAM POZHAL PONNERI TIRUVALLUR TN 600066 IN"
        },
        "email": "kaviammu2972@gmail.com",
        "name": "MUNASWAMY ARMSTRONG"
      },
      {
        "company": "ABNANDAN ENVIRO PRIVATE LIMITED",
        "attributes": {
          "city": "NO 779,R.NO 2,SUMUKHA AGB GELEYARA BALAGA COLONY CHIKKALASANDRA BANGALORE SOUTH BANGALORE KA 560061 IN"
        },
        "email": "critacreative@gmail.com",
        "name": "ANANDA RAMAN ABHIRUP"
      },
      {
        "company": "ABNINE MULTIMEDIA PRIVATE LIMITED",
        "attributes": {
          "city": "FLATNO303 BLDGA4 KASHELI AWADH COMPLEX DATTAMANDIR VADAVALI BHIWANDI THANE MH 421302 IN"
        },
        "email": "kamalmohanjadhav@gmail.com",
        "name": "KAMAL MOHAN JADHAV"
      },
      {
        "company": "ABNP TECHNOLOGIES PRIVATE LIMITED",
        "attributes": {
          "city": "C/524, INTERNATIONAL TRADE CENTER, MAJURA GATE NANPURA SURAT CITY SURAT GJ 395001 IN"
        },
        "email": "starexpress1259@gmail.com",
        "name": "NASREENBANO MOHMDRIYAZ PATHAN"
      },
      {
        "company": "ABNS SCIENTIFIC SERVICES PRIVATE LIMITED",
        "attributes": {
          "city": "HOUSE NO-08, JALUKBARI, KETEKI PATH GUWAHATI UNIVERSITY GMC KAMRUP AS 781014 IN"
        },
        "email": "bidyut951@gmail.com",
        "name": "NIBHA GOSWAMI"
      },
      {
        "company": "ABNUE PROPTECH PRIVATE LIMITED",
        "attributes": {
          "city": "C/O BISWAJIT PHUKAN LOKHRA ROAD ODALBAKRA GMC KAMRUP AS 781034 IN"
        },
        "email": "kennysingha@gmaIL.com",
        "name": "OKENDRA SINGHA"
      },
      {
        "company": "ABOAT E COMMERCE PAYMENT PRIVATE LIMITED",
        "attributes": {
          "city": "A-19 GROUND FLOOR OKHLA PHASE-2 FIEE COMPLEX OKHLA INDUSTRIAL ESTATE NEW DELHI SOUTH DELHI DL 110020 IN"
        },
        "email": "tribhuvankumar4051@gmail.com",
        "name": "DEEPAK KUMAR"
      },
      {
        "company": "ABOAT LIFE SCIENCES (OPC) PRIVATE LIMITED",
        "attributes": {
          "city": "501 5TH FLOOR SHAPATH 1 SUITE #1268 SG HIGHWAY BODAKDEV AHMADABAD CITY AHMEDABAD GJ 380054 IN"
        },
        "email": "sweetadeepmsnh143@gmail.com"
      },
      {
        "company": "ABODE ADVISORS PRIVATE LIMITED",
        "attributes": {
          "city": "NO. 11 &AMP; 12, LEVEL - 6 DR. RADHA KRISHNAN SALAI MYLAPORE CHENNAI CHENNAI TN 600004 IN"
        },
        "email": "aayisha.shariff@abodeadvisors.co.in",
        "name": "AAYISHA SHARIFF"
      },
      {
        "company": "ABODE SEATING PRIVATE LIMITED",
        "attributes": {
          "city": "JALAN INDUSTRIAL COMPLEX GATE NO. 3,LANE-02,DOMJUR BIPRANNAPARA ULUBERIA - I HOWRAH WB 711411 IN"
        },
        "email": "kolkata@sleepfresh.in",
        "name": "RAUNAK AGARWAL"
      },
      {
        "company": "ABODE SOLUTIONS PRIVATE LIMITED",
        "attributes": {
          "city": "295/2R A P C ROAD RAJA RAM MOHAN SARANI AMHERST STREET KOLKATA WB 700009 IN"
        },
        "email": "abodesolutionsofficial@gmail.com",
        "name": "WASIM RAJA"
      },
      {
        "company": "ABOHAWA ENVIRONMENTAL LAB AND CONSULTANT PRIVATE LIMITED",
        "attributes": {
          "city": "C/O IMRAN ALI NIMGAM BELURI, AMIRABAD NIMGRAM BELURI MURSHIDABAD MURSHIDABAD WB 742226 IN"
        },
        "email": "nobinskm@aol.com",
        "name": "JAHRA AZHAR"
      },
      {
        "company": "ABOKH CHEMICALS PRIVATE LIMITED",
        "attributes": {
          "city": "H.NO 5-23 ROAD NO: 1 MEDIPALLI GHATKESAR HYDERABAD TG 500098 IN"
        },
        "email": "narendra@anaxlab.com",
        "name": "KARNATI KIRAN KUMAR"
      },
      {
        "company": "ABOSHAHR EXPORTS PRIVATE LIMITED",
        "attributes": {
          "city": "240C, B-72, 1ST CROSS, 2ND STAGE, 3RD BLOCK, NAGARBHAVI BANGALORE NORTH BANGALORE KA 560072 IN"
        },
        "email": "Mostafadehghani14@gmail.com",
        "name": "SYED JAFFER"
      },
      {
        "company": "ABOTTS AI INDIA PRIVATE LIMITED",
        "attributes": {
          "city": "3 FLR ,VISTAAR COMMERCIAL CMPLX, YEYYADY AIRPORT RD KONCHADY MANGALORE DAKSHINA KANNADA KA 575008 IN"
        },
        "email": "dinesh@abottstech.com",
        "name": "DINESH KUMAR MANGALORE"
      },
      {
        "company": "ABOURVA AADHI FOODS PRIVATE LIMITED",
        "attributes": {
          "city": "A2, RAMS ANJALI ATRIUM, SUNDARAM SALAI, RAJA ANNAMALAIPURAM CHENNAI CITY CORPORATION CHENNAI TN 600028 IN"
        },
        "email": "abourvaaadhifoods@gmail.com",
        "name": "SUBBHA SOMU LATHA MAHESWARI"
      },
      {
        "company": "ABOVE & BEYOND CONTINENTAL PRIVATE LIMITED",
        "attributes": {
          "city": "H NO 7-2-1813/5//1, F NO 406 CZECH COLONY SANATH NAGAR COLONY AMEERPET HYDERABAD TG 500018 IN"
        },
        "email": "purnabhimineni2015@gmail.com",
        "name": "HARSHA BHIMINENI"
      },
      {
        "company": "ABOVE GROUND GREEN ADVISORY PRIVATE LIMITED",
        "attributes": {
          "city": "PLOT 12 FLAT 408 RAHEJA VIHAR CHANDIVALI FARM RD MUMBAI MUMBAI MUMBAI MH 400072 IN"
        },
        "email": "narendersingh_rawat@yahoo.co.in",
        "name": "ANIL GUNAPALA CHOWTA"
      },
      {
        "company": "ABP AGRI INTERNATIONAL PRIVATE LIMITED",
        "attributes": {
          "city": "F-202, RUDRAM SKY, NR OM RESIDENCY, NEW RANIP, CHANDLODIA GANDHINAGAR AHMEDABAD GJ 382481 IN"
        },
        "email": "BCPATEL86@GMAIL.COM",
        "name": "ASHABEN BHAVESHBHAI PATEL"
      },
      {
        "company": "ABP GAMING ZONE PRIVATE LIMITED",
        "attributes": {
          "city": "A 45, SECOND FLOOR, SIGNATURE GLOBAL, SEC 35 KARNAL KARNAL KARNAL HR 132001 IN"
        },
        "email": "karanarorassociates@gmail.com",
        "name": "BHARAT GUPTA"
      },
      {
        "company": "ABP9 LABORATORIES PRIVATE LIMITED",
        "attributes": {
          "city": "FL NO. 504, SECTOR 35 I PL NO. 3, GREENFIELD RESI KHARGHAR PANVEL RAIGARH(MH) MH 410210 IN"
        },
        "email": "tejaswipatil2189@gmail.com",
        "name": "TEJASWI ANIL PATIL"
      },
      {
        "company": "ABPENNY TECHNOLOGIES PRIVATE LIMITED",
        "attributes": {
          "city": "CJ-211 SECTOR -2 SALT LAKE BIDHAN NAGAR CK MARKET SALTLAKE NORTH 24 PARGANAS WB 700091 IN"
        },
        "email": "sales@abpenny.com",
        "name": "MILI BASU"
      },
      {
        "company": "ABPH BEST FOOD PRIVATE LIMITED",
        "attributes": {
          "city": "H NO 8 AYSH BIHAR COLONY PHASE II JNKP EXT. JANKIPURAM LUCKNOW LUCKNOW UP 226021 IN"
        },
        "email": "abph.enterprises@gmail.com",
        "name": "HIMANSHU GUPTA"
      },
      {
        "company": "ABR AKANKSHA PRIVATE LIMITED",
        "attributes": {
          "city": "31-35-43/1 VIVEKANANDA COLONY GNANAPURAM VISAKHAPATNAM VISAKHAPATNAM AP 530004 IN"
        },
        "email": "rajauppu@gmail.com",
        "name": "BHARATHI RAJA UPPU"
      },
      {
        "company": "ABR ENGINEERING PRIVATE LIMITED",
        "attributes": {
          "city": "NO.3522,KAVERINAGAR, 3RD CROSS,KARISANDRA B SK II STAGE BANGALORE SOUTH BANGALORE KA 560070 IN"
        },
        "email": "abrengineering2024@gmail.com",
        "name": "PRAFULLA MUKHI"
      },
      {
        "company": "ABR NEXUS PRIVATE LIMITED",
        "attributes": {
          "city": "14TH FLOOR, ABR EMERALD, PLOT NO D8, STREET NO.16, CHAKALA MIDC MUMBAI MUMBAI MH 400093 IN"
        },
        "email": "GIRISH@ABRREALTY.IN"
      },
      {
        "company": "ABR SASTHA KHANA PRIVATE LIMITED",
        "attributes": {
          "city": "IMPERIUM RISE ,OFFICE728A 7THFLOOR, PHASE II MULSHI INFOTECHPARK (HINJAWADI) HAVELI PUNE MH 411057 IN"
        },
        "email": "info@sasthakhana.com",
        "name": "ROHIDAS BABUSHA HOLE"
      },
      {
        "company": "ABR SHELTERS PRIVATE LIMITED",
        "attributes": {
          "city": "SURVEY NO. 129/4 KUNDALAHALLI BANGALORE NORTH BANGALORE KA 560037 IN"
        },
        "email": "ananthvcp6777@gmail.com",
        "name": "BALAKRISHNA ANANTHA REDDY"
      },
      {
        "company": "ABR SUNRISE PRIVATE LIMITED",
        "attributes": {
          "city": "14TH FLOOR, ABR EMERALD, PLOT NO.D-8,STREET NO.16, CHAKALA MIDC MUMBAI MUMBAI MH 400093 IN"
        },
        "email": "bharat.kiah@gmail.com",
        "name": "BHARAT GORDHANBHAI RAJPARA"
      },
      {
        "company": "ABRA E-LOGISTIC PRIVATE LIMITED",
        "attributes": {
          "city": "NO. 3450, 4TH CROSS ROAD, 10TH MAIN ROAD, STAGE 3, INDIRANAGAR (BANGALORE) BANGALORE NORTH BANGALORE KA 560038 IN"
        },
        "email": "Abishekveeraswamy@royal-pride.com",
        "name": "KANNAN SUBASHINI"
      },
      {
        "company": "ABRA FARMS PRIVATE LIMITED",
        "attributes": {
          "city": "NO.2, OLD GOODS SHED ROAD MAINGUARD GATE ROCK FORT TIRUCHIRAPPALLI TIRUCHIRAPPALLI TN 620002 IN"
        },
        "email": "mdaurang@rediffmail.com",
        "name": "MOHAMED IBRAHIM MOHAMED ABUBACKER"
      },
      {
        "company": "ABRADE REALTY PRIVATE LIMITED",
        "attributes": {
          "city": "SHOP 39-40, GROUND FLOOR SS OMNIA, SECTOR 86, NARSINGHPUR NARSINGHPUR GURGAON HR 122004 IN"
        },
        "email": "saket.sharma@abraderealty.com",
        "name": "SAKET SHARMA"
      },
      {
        "company": "ABRADER INDIA PRIVATE LIMITED",
        "attributes": {
          "city": "386/2, TAKALE WASTI, NEAR NABHANGAN MAWAL TALEGAON DABHADE MAVAL PUNE MH 410506 IN"
        },
        "email": "india@abrader.com",
        "name": "SHINHONG KIM"
      },
      {
        "company": "ABRADO HVAC ENGINEERS PRIVATE LIMITED",
        "attributes": {
          "city": "T-01, PLOT NO.88 TO 91, SECTOR 19A, NAVI MUMBAI, DARAVE THANE THANE MH 400706 IN"
        },
        "email": "abyabrado@gmail.com",
        "name": "ASWATHY LEKHA ABY"
      },
      {
        "company": "ABRAKA PLAYTECH PRIVATE LIMITED",
        "attributes": {
          "city": "PT NO 3405/9164,NEW CLNY PRACHI VIHAR, PALASUNI G.G.P.COLONY BHUBANESWAR KHORDA OR 751025 IN"
        },
        "email": "saiprasannarath60@gmail.com",
        "name": "ARATI RATH"
      },
      {
        "company": "ABRAM AIR AVIATION PRIVATE LIMITED",
        "attributes": {
          "city": "NO 8/64A ( GNRA 126 ) PALAMATTAM ANGAMALLY PARAVUR ERNAKULAM KL 683572 IN"
        },
        "email": "ceo@abramaviation.com",
        "name": "LAJU CHERIAN"
      },
      {
        "company": "ABRANA LIFE SCIENCES PRIVATE LIMITED",
        "attributes": {
          "city": "UNIT NO-919B SEC 49 UNITECH ARCADIA GURGAON GURGAON GURGAON HR 122018 IN"
        },
        "email": "abhinav.singla85@gmail.com",
        "name": "ABHINAV SINGLA"
      },
      {
        "company": "ABRAPALI SALEKASA FARMER PRODUCER COMPANY LIMITED",
        "attributes": {
          "city": "C/O MEENA SHIVANKAR AMGAON KHURD,AAMGAON ROAD SALEKASA SALEKASA GONDIA MH 441916 IN"
        },
        "email": "cmrcsalekasa13@gmail.com",
        "name": "SUNITA BHAURAO MOTGHARE"
      },
      {
        "company": "ABRAR OVERSEAS (OPC) PRIVATE LIMITED",
        "attributes": {
          "city": "C/O ISMAIL NP NEDUMPALLY HOUSE PADAPARAMBA, KANNAMANGALAM TIRURANGADI MALAPPURAM KL 676304 IN"
        },
        "email": "Abraropc@gmail.com"
      },
      {
        "company": "ABRAR TRANSPORT SERVICES (OPC) PRIVATE LIMITED",
        "attributes": {
          "city": "C/OUMMERASHRAFMALABEHIBAG HNEARFIRESTATIONSERVICE KULGAM KULGAM PULWAMA JK 192231 IN"
        },
        "email": "ABRARTRANSPORT@TAXVENTURE.IN"
      },
      {
        "company": "ABRC LOGISTICS PRIVATE LIMITED",
        "attributes": {
          "city": "FLAT NO B-701, 7TH FLOOR, B BLOCK,ADHINATH ASHIRWAD PONNIAMMANMEDU AMBATTUR TIRUVALLUR TN 600110 IN"
        },
        "email": "mohankumar@abrclogistics.com",
        "name": ". JYOTI"
      },
      {
        "company": "ABRINRISE INDIA PRIVATE LIMITED",
        "attributes": {
          "city": "HOLDING NO. 298, AGARPARA 119 P B GHAT ROAD KAMARHATI NORTH 24 PARAGANAS NORTH 24 PARGANAS WB 700058 IN"
        },
        "email": "amit.rai0207@gmail.com",
        "name": "ZAMILA KHATOON"
      },
      {
        "company": "ABRITU BUSINESS SOLUTIONS PRIVATE LIMITED",
        "attributes": {
          "city": "9-4-132/28 MAHBOOB GARDEN SHAIK PET, GOLCONDA APPA HIMAYATHSAGAR GOLCONDA HYDERABAD TG 500008 IN"
        },
        "email": "Raising100@gmail.com",
        "name": "IBRAHIM ABDULLA"
      },
      {
        "company": "ABRK CONSULTANCY SERVICES PRIVATE LIMITED",
        "attributes": {
          "city": "HNO: 46-5-1157 REDDYPALEM, HANUMAKONDA WARANGAL WARANGAL WARANGAL TG 506002 IN"
        },
        "email": "abrkconsultancy@gmail.com",
        "name": "ANJANEYULU THOTA"
      },
      {
        "company": "ABROAD PATHWAY IMMIGRATION PRIVATE LIMITED",
        "attributes": {
          "city": "PLOT NO G-18 UGF KRISHNA GARDEN GOVINDPURAM GHAZIABAD GHAZIABAD UP 201013 IN"
        },
        "email": "audit.abpathway@gmail.com",
        "name": "PADAM SINGH"
      },
      {
        "company": "ABROADLINK EDUCONSULTANCY PRIVATE LIMITED",
        "attributes": {
          "city": "PALENGADAN MULLAPPALLY KARULAI NILAMBUR RS NILAMBUR MALAPPURAM KL 679330 IN"
        },
        "email": "anees@gmail.com"
      },
      {
        "company": "ABROADPOPULAR CAREER GUIDANCE PRIVATE LIMITED",
        "attributes": {
          "city": "FF14 CP4/1 SQUARE 1 COMPLEX, RATAN KHAND BHADRUKH LUCKNOW LUCKNOW UP 226002 IN"
        },
        "email": "apcareercounsultancy@gmail.com",
        "name": "ABHAY KUMAR YADAV"
      },
      {
        "company": "ABRODIFY INTERNATIONAL PRIVATE LIMITED",
        "attributes": {
          "city": "LALAN TOWER, 1ST FLOOR VANCHI SQUARE, ERNAKULAM HIGH COURT ERNAKULAM ERNAKULAM KL 682031 IN"
        },
        "email": "abrodifyinternational@gmail.com",
        "name": "NEETHU STEPHEN"
      },
      {
        "company": "ABROMED HEALTHCARE PRIVATE LIMITED",
        "attributes": {
          "city": "INDIRA NAGAR, GALLI NO. 2 30 FEET ROAD MANKHURD MUMBAI MUMBAI MUMBAI MH 400043 IN"
        },
        "email": "abromedhealthcare@gmail.com",
        "name": "ABRAR HUSSAIN BHIKHULLAH SHAIKH"
      },
      {
        "company": "ABROW BIOCHEM PRIVATE LIMITED",
        "attributes": {
          "city": "F NO 104 B BLOCK CORAL CASA RASLAKHEDI, BHANPUR PEOPLES CAMPUS HUZUR BHOPAL MP 462037 IN"
        },
        "email": "abrowbio@gmail.com",
        "name": "ARSHAD KHAN"
      },
      {
        "company": "ABRR ELECTRICAL AND SECURITY PRIVATE LIMITED",
        "attributes": {
          "city": "C/O RAM CHANDER PRASAD GURUDWARA ROAD HATIA (RANCHI) RANCHI RANCHI JH 834003 IN"
        },
        "email": "SUSHILKSINGH9918@GMAIL.COM",
        "name": "PINKI SINGH"
      },
      {
        "company": "ABRR MULTI SERVICES PRIVATE LIMITED",
        "attributes": {
          "city": "C/O BIRENDRA RAY JAGDISHPUR, RACHOPALI SIWAN SIWAN SIWAN BR 841226 IN"
        },
        "email": "as78833@gmail.com",
        "name": "AMBUJ KUMAR"
      },
      {
        "company": "ABS 91 BEVERAGES PRIVATE LIMITED",
        "attributes": {
          "city": "NO 99E, 2ND CROSS, 17TH MAIN, 5TH KORAMANGALA VI BK BANGALORE SOUTH BANGALORE KA 560095 IN"
        },
        "email": "ajay@salud.co.in",
        "name": "ASHWIN SHETTY"
      },
      {
        "company": "ABS AEROSPACE PRIVATE LIMITED",
        "attributes": {
          "city": "I-48 JUNGPURA EXTENSION JUNGPURA NEW DELHI SOUTH DELHI DL 110014 IN"
        },
        "email": "SINHANIL@YAHOO.CO.UK",
        "name": "ANIL KUMAR SINHA"
      },
      {
        "company": "ABS CONSTRUCTION & SUPPLY SERVICES PRIVATE LIMITED",
        "attributes": {
          "city": "308, PLOT NO.160 TO 164 SRI SAI DATTA ENCLAVE TURKAYAMZAL RANGAREDDY K.V.RANGAREDDY TG 501510 IN"
        },
        "email": "adinarayanareddy0704@gmail.com",
        "name": "BABU YASARAPU"
      },
      {
        "company": "ABS CONSTRUCTION & SUPPLY SERVICES PRIVATE LIMITED",
        "attributes": {
          "city": "308, PLOT NO.160 TO 164 SRI SAI DATTA ENCLAVE TURKAYAMZAL RANGAREDDY K.V.RANGAREDDY TG 501510 IN"
        },
        "email": "adinarayanareddy0704@gmail.com",
        "name": "BABU YASARAPU"
      },
      {
        "company": "ABS GLOBAL CONSULTING PRIVATE LIMITED",
        "attributes": {
          "city": "THE AVENUE, 7TH FLOOR FL-7B, 24/3 ALIPORE ROAD ALIPORE KOLKATA KOLKATA WB 700027 IN"
        },
        "email": "absglobal12345@gmail.com",
        "name": "PANKHURI AGARWAL"
      },
      {
        "company": "ABS GLOBAL FORWARDERS PRIVATE LIMITED",
        "attributes": {
          "city": "B23/2581/10A SEMI BASMENT BALAJI TOWER RK ROAD INDL COLONY LUDHIANA LUDHIANA PB 141003 IN"
        },
        "email": "ankitluthra@absforwarders.com",
        "name": "ANKIT LUTHRA"
      },
      {
        "company": "ABS HOLIDAYS PRIVATE LIMITED",
        "attributes": {
          "city": "310, MATRIX PLAZA, OPP. UMIYA TIMBER, VATVA ROAD VINZOL DASKROI AHMEDABAD GJ 382445 IN"
        },
        "email": "absholidays2024@gmail.com",
        "name": "BINITKUMAR INDRABAHADUR THAKUR"
      },
      {
        "company": "ABS INDUSTRIES PRIVATE LIMITED",
        "attributes": {
          "city": "222 SECTOR-11 B AVAS VIKAS COLONY SIKANDRA AVAS VIKAS COLONY SADAR AGRA UP 282007 IN"
        },
        "email": "Mahendra.singh1300@gmail.com"
      },
      {
        "company": "ABS INFRA TECH SOLUTIONS PRIVATE LIMITED",
        "attributes": {
          "city": "C-204, SNOW DROPS APT, MANGO GARDEN, KONANAKUNTE BANGALORE BANGALORE KA 560062 IN"
        },
        "email": "absinfratech.solutions@gmail.com",
        "name": "ARAVIND ADHIP"
      },
      {
        "company": "ABS INNOVATIONS PRIVATE LIMITED",
        "attributes": {
          "city": "PLOT NO. 15, KH.NO. 465 SHIV VIHAR, KHORA COLONY GHAZIABAD GHAZIABAD GHAZIABAD UP 201001 IN"
        },
        "email": "absbuildcare@gmail.com",
        "name": "ANAMIKA KUMARI"
      },
      {
        "company": "ABS REALTY CAPITAL PRIVATE LIMITED",
        "attributes": {
          "city": "C-1303 KOHINOOR SAPPHIRE PUNE, 411033 THATHAWADE PUNE CITY PUNE MH 411033 IN"
        },
        "email": "akshayvirkar22@gmail.com",
        "name": "BHUSHAN TUKARAM GAIKE"
      },
      {
        "company": "ABS REDDYS IMPEX PRIVATE LIMITED",
        "attributes": {
          "city": "2-1-49/1/C ,STREET NO 5 SURYANAGAR COLONY UPPAL (K.V.RANGAREDDY) HYDERABAD HYDERABAD TG 500039 IN"
        },
        "email": "amarendar.reddys@gmail.com",
        "name": "AMARENDER ALAGANDULA"
      },
      {
        "company": "ABS TECHNOSHIELD INDIA PRIVATE LIMITED",
        "attributes": {
          "city": "SR.NO92,HNO 20B,NAKSHATRA , SHRIKRISHNA SOC,VADBAN MUNDHVA PUNE CITY PUNE MH 411036 IN"
        },
        "email": "amanqtayabji@gmail.com",
        "name": "VISHAL RAMESH HATKAR"
      },
      {
        "company": "ABS TERRA ESTATES PRIVATE LIMITED",
        "attributes": {
          "city": "G-19, 3RD/F BLOCK-G DILSHAD COLONY EAST DELHI EAST DELHI EAST DELHI DL 110095 IN"
        },
        "email": "pranavbansal0555@gmail.com",
        "name": "LUV KUMAR SHARMA"
      },
      {
        "company": "ABSG FOOD PRODUCT PRIVATE LIMITED",
        "attributes": {
          "city": "C/O RAJIB PAUL, P.O MAMUDPUR VIA GORIFA GORIFA NORTH 24 PARGANAS WB 743166 IN"
        },
        "email": "absgfoodproductprivatelimited@gmail.com",
        "name": "AMAR CHOUDHARY"
      },
      {
        "company": "ABSHLA PAPER WORKS PRIVATE LIMITED",
        "attributes": {
          "city": "202 3RD FLR MARUTHI NGR, HYDERSHAKOTE, DON BOSCO NAGAR RAJENDRANAGAR HYDERABAD TG 500086 IN"
        },
        "email": "shiv.bantu06@gmail.com"
      },
      {
        "company": "ABSIEN PHARMACEUTICALS PRIVATE LIMITED",
        "attributes": {
          "city": "C/O JAHANGIR SHAIKH MEGHRAJ NAGAR LATUR LATUR LATUR MH 413512 IN"
        },
        "email": "drshaikhjahangir555@gmail.com",
        "name": "JAHANGIR DASTGIR SHAIKH"
      },
      {
        "company": "ABSK CONNECT VENTURES PRIVATE LIMITED",
        "attributes": {
          "city": "O 61, CHERAN STREET, PARRI NAGAR, SAIDAPET, JAFFERKHANPET CHENNAI CITY CORPORATION CHENNAI TN 600083 IN"
        },
        "email": "sales@abskconnect.com",
        "name": "GOVINDAPURAM RAMACHANDRAN SIVAKUMAR"
      },
      {
        "company": "ABSOC PRO PRIVATE LIMITED",
        "attributes": {
          "city": "SHOP NO 15, B-WING GAYTRI POOJA APARTMENT BADLAPUR E.D. AMBARNATH THANE MH 421503 IN"
        },
        "name": "ASHWINI PRAVIN BULAKH"
      },
      {
        "company": "ABSODOK PRIVATE LIMITED",
        "attributes": {
          "city": "20/7 VIRTUA HUB SBI COLON CITY LINK ROAD ADAMBAKKAM NILAMANGAI NAGAR SAIDAPET KANCHIPURAM TN 600088 IN"
        },
        "email": "Sharveshvarr2000@gmail.com",
        "name": "SENTHIL KUMAR VANNAMALAR SHARVESHVARR"
      },
      {
        "company": "ABSOL TECHNOLOGIES (OPC) PRIVATE LIMITED",
        "attributes": {
          "city": "GROUND FLOOR,D.NO.3-64/10 MOODURU,CHERKADY, UDUPI CHERKADI UDUPI UDUPI KA 576215 IN"
        },
        "email": "srividyapatil@gmail.com"
      },
      {
        "company": "ABSOLUTE BUILDERS AND DEVELOPERS PRIVATE LIMITED",
        "attributes": {
          "city": "TC 19/1120, PUTHUSSERI KIZHAKKINKARA VEEDU THAMALAM THIRUVANANTHAPURAM THIRUVANANTHAPURAM KL 695012 IN"
        },
        "email": "shijinss1990@gmail.com",
        "name": "BINU BHASURAN"
      },
      {
        "company": "ABSOLUTE IMAGING JV PRIVATE LIMITED",
        "attributes": {
          "city": "OFFICE NO. 6, 2ND FLOOR, STELLAR IT PARK, SECTOR62 NOIDA NOIDA GAUTAM BUDDHA NAGAR UP 201301 IN"
        },
        "email": "ajit.singh2762@gmail.com",
        "name": "ELVIS FLOREANI"
      },
      {
        "company": "ABSOLUTE OCCASIONS PRIVATE LIMITED",
        "attributes": {
          "city": "HOUSE NO. 2074 1ST FLOOR OUTRAM LINE DELHI-110009 G.T.B.NAGAR DELHI NORTH WEST DELHI DL 110009 IN"
        },
        "email": "GUGLANIENTERPRISES09@GMAIL.COM",
        "name": "PIYUSH GUGLANI"
      },
      {
        "company": "ABSOLUTE ONE GLOBAL PRIVATE LIMITED",
        "attributes": {
          "city": "B-133, F/F, DDA SHED OKHLA IND. AREA PH-I, N.D OKHLA INDUSTRIAL AREA PHASE-I NEW DELHI SOUTH DELHI DL 110020 IN"
        },
        "email": "oneabstrading@gmail.com",
        "name": "MADHURI NIRANJAN"
      },
      {
        "company": "ABSOLUTE RCM SERVICES PRIVATE LIMITED",
        "attributes": {
          "city": "NO 289 DEVANUR EXTENSION 2ND STAGE RAJIVNAGAR UDAYAGIRI (MYSORE) MYSORE MYSORE KA 570019 IN"
        },
        "email": "saaquib144@gmail.com",
        "name": ". AAQUIB"
      },
      {
        "company": "ABSOLUTE TAXASIA SERVICES LIMITED",
        "attributes": {
          "city": "SHOP NO.01, AUTO MARKET ROAD, NEAR RAIL SIRSA SIRSA SIRSA HR 125055 IN"
        },
        "email": "DALBIRABS1983@GMAIL.COM",
        "name": "DALBIR SINGH"
      },
      {
        "company": "ABSOLUTE TECHFIN ADVISORS PRIVATE LIMITED",
        "attributes": {
          "city": "F 133 (A1), COSYNESTAPARTMENT,7TH ST ANNA NAGAR EAST PERAMBUR PURASAWALKAM CHENNAI TN 600102 IN"
        },
        "email": "atapvtltd2024@gmail.com",
        "name": "MAHALINGAM PERAMIAH"
      },
      {
        "company": "ABSOLUTE TRIP (OPC) PRIVATE LIMITED",
        "attributes": {
          "city": "GROUND FLOOR, FLAT 1, 35/A B T ROAD KHARDAH BANDIPUR BARRACKPUR - I NORTH 24 PARGANAS WB 700119 IN"
        },
        "email": "absolutetrip4@gmail.com"
      },
      {
        "company": "ABSOLVE IT AND HR PRIVATE LIMITED",
        "attributes": {
          "city": "HNO4-9-425,PLOT NO 127,RT C COLONY,BAGH HAYATHNAGAR HAYATNAGAR HAYATHNAGAR K.V.RANGAREDDY TG 501505 IN"
        },
        "email": "Contact@absolveit.com",
        "name": "SRAVAN BONASI"
      },
      {
        "company": "ABSORBANCE LIFESCIENCES PRIVATE LIMITED",
        "attributes": {
          "city": "1064-A W NO.7 F/F FLAT NO F-1 SML VIEW APT MEHRAULI GADAIPUR NEW DELHI SOUTH WEST DELHI DL 110030 IN"
        },
        "email": "order@thesisbiosciences.com",
        "name": "AFRIN ALAM"
      },
      {
        "company": "ABSR LABORATORIES PRIVATE LIMITED",
        "attributes": {
          "city": "VIVENKAMANDA PURAM,RACECOURSE PARA JALPAIGURI JALPAIGURI SADAR JALPAIGURI WB 735101 IN"
        },
        "email": "shibanjan90@gmail.com",
        "name": "PRATYUSH KUMAR MISHRA"
      },
      {
        "company": "ABSR TECHNOLOGIES PRIVATE LIMITED",
        "attributes": {
          "city": "52, 3RD FLOOR SILVER SPRING LAYOUT WHITEFIELD BANGALORE SOUTH BANGALORE KA 560066 IN"
        },
        "email": "absrtechnologies@gmail.com",
        "name": "RAI SUDARSANAM"
      },
      {
        "company": "ABSRD STUDIO PRIVATE LIMITED",
        "attributes": {
          "city": "E-18, BASEMENT GREATER KAILASH, PHASE-2 GREATER KAILASH NEW DELHI SOUTH DELHI DL 110048 IN"
        },
        "email": "devgakhar04@gmail.com",
        "name": "DEV GAKHAR"
      },
      {
        "company": "ABSTRA INDUSTRIES PRIVATE LIMITED",
        "attributes": {
          "city": "G NO 1 ,6, 12 GROUND FLR GEETA IND EST NAVGHAR VASAI ROAD E VASAI THANE MH 401202 IN"
        },
        "email": "chhapariaashish@gmail.com",
        "name": "ASHISH PAWANKUMAR CHHAPARIA"
      },
      {
        "company": "ABSTRACT AMBITIONS PRIVATE LIMITED",
        "attributes": {
          "city": "592, 17TH A CROSS RD, STAGE 2, HOYSALA NAGAR INDIRANAGAR (BANGALORE) BANGALORE NORTH BANGALORE KA 560038 IN"
        },
        "email": "gautamhao@gmail.com",
        "name": "BONNY NGAIRANGBAM"
      },
      {
        "company": "ABSTRACT EQUATIONS TECH PRIVATE LIMITED",
        "attributes": {
          "city": "A, H NO. 405, SUKHWANI SKYLINES, LAXMI CHOWK RD WAKAD PUNE CITY PUNE MH 411057 IN"
        },
        "email": "uday.karkera@gmail.com",
        "name": "UDAY PRABHAKAR KARKERA"
      },
      {
        "company": "ABSTRACT PREVIEWS PRIVATE LIMITED",
        "attributes": {
          "city": "8-A PIMPRI PADA, GEN A K VAIDYA MARG, MALAD MALAD EAST MALAD EAST MUMBAI MH 400097 IN"
        },
        "email": "abstractpreview@gmail.com",
        "name": "RAJESH BALIRAM SUTAR"
      },
      {
        "company": "ABSTRACT WATERPROFING & RESTORATION PRIVATE LIMITED",
        "attributes": {
          "city": "GALA NO N-8, APMC MARKET, KALYAN THANE KALYAN CITY KALYAN THANE MH 421301 IN"
        },
        "email": "abstractwaterproof@yahoo.com",
        "name": "VISHAL SUBHASH VISHWAKARMA"
      },
      {
        "company": "ABSYLUM FITNESS CLUB (OPC) PRIVATE LIMITED",
        "attributes": {
          "city": "27/1 2ND FLOOR CHIKKA PULLAPPA L./O,JAYANTI NGR HORAMAVU BANGALORE NORTH BANGALORE KA 560043 IN"
        },
        "email": "theabsylum@gmail.com"
      },
      {
        "company": "ABTRUSTED WANDERERS QUESTS PRIVATE LIMITED",
        "attributes": {
          "city": "A &AMP; B BRENTWOOD, 1603 A-WING HIRANANDANI GARDEN, MAIN STREET, POWAI MUMBAI MUMBAI MUMBAI MH 400076 IN"
        },
        "email": "dev.brinda@gmail.com",
        "name": "ARUN DEVARAJAN"
      },
      {
        "company": "ABTT AMASS (OPC) PRIVATE LIMITED",
        "attributes": {
          "city": "C/O TAJ UDDIN TALUKDER JAMUNAMUKH KATHIATOLI KAMPUR NAGAON AS 782427 IN"
        },
        "email": "abdullahtajtalukderofficial@gmail.com"
      },
      {
        "company": "ABU AAHAN MARKETING SOLUTIONS PRIVATE LIMITED",
        "attributes": {
          "city": "C/O GH RASOOL BHAT ,NEAR HEEVAN THEATRE , HANDWAR HANDWARA HANDWARA KUPWARA JK 193221 IN"
        },
        "email": "stanveer.mir@gmail.com",
        "name": "NADEEM AHMAD WANI"
      },
      {
        "company": "ABU BAKAR WELFARE FOUNDATION",
        "attributes": {
          "city": "C/O GHULAM QADIR HAJAM TENGPORA, PARIGAM PULWAMA PULWAMA PULWAMA JK 192301 IN"
        },
        "email": "gmparigam@gmail.com",
        "name": "GHULAM MOHAMMAD BHAT"
      },
      {
        "company": "ABU ROAD SOLAR PRIVATE LIMITED",
        "attributes": {
          "city": "PLOT1 BLOCK-C SUSHANT LOK PHASE1 30M MAIN WIDE ROAD GURGAON SADAR BAZAR GURGAON HR 122001 IN"
        },
        "email": "aburoadsolar@yahoo.com",
        "name": "MAYANK AGARWAL"
      },
      {
        "company": "ABUA INDUSTRIES PRIVATE LIMITED",
        "attributes": {
          "city": "H NO.202, WARD NO-1 BLOCK COLONY, CHAKRADHARPUR COLONY CHAKRADHARPUR WEST SINGHBHUM JH 833102 IN"
        },
        "email": "pandugagrai@gmail.com",
        "name": "SUJATA GAGRAI"
      },
      {
        "company": "ABUBAKAR CONSTRUCTIONS PRIVATE LIMITED",
        "attributes": {
          "city": "C/O TARIQ AHMAD KHAN NADIHAL BANDIPORA CHOWK BANDIPORA BARAMULLA JK 193502 IN"
        },
        "email": "khantariq1758@gmail.com",
        "name": "IRFANA ASLAM"
      },
      {
        "company": "ABUJMAD FOUNDATION",
        "attributes": {
          "city": "2527,CIVIL LINE,NAGPUR ROAD, CHANDRAPUR CHANDRAPUR CHANDRAPUR HO CHANDRAPUR MH 442401 IN"
        },
        "email": "mayurraikwar97@gmail.com",
        "name": "MAYUR ANIL RAIKWAR"
      },
      {
        "company": "ABUKONSULTIA INTERNATIONAL PRIVATE LIMITED",
        "attributes": {
          "city": "H.NO. B46, PLOT NO. 30, KHASRA NO.594/264,1 FLOOR G.T.B.NAGAR DELHI NORTH WEST DELHI DL 110009 IN"
        },
        "email": "consultia.international1@gmail.com",
        "name": ". ARSHIYA"
      },
      {
        "company": "ABUNDANT FORTUNE PRIVATE LIMITED",
        "attributes": {
          "city": "4/9 MUGAPPAIR WEST 3RD MAIN RD JJ NAGAR MOGAPPAIR WEST AMBATTUR TIRUVALLUR TN 600037 IN"
        },
        "email": "Siddarthpatwa@gmail.com",
        "name": "SANAK RAJ PRATHIK PATWA PATWA"
      },
      {
        "company": "ABUNDANT STUDIOS PRIVATE LIMITED",
        "attributes": {
          "city": "83/2/J SOUTH TOPSIA ROAD ABINASH CHAOWDHURY LANE A. C LANE KOLKATA WB 700046 IN"
        },
        "email": "td.twistnturns@gmail.com",
        "name": "TAPAS DAS"
      },
      {
        "company": "ABUNDITA FINSERVE PRIVATE LIMITED",
        "attributes": {
          "city": "94B ROHINI NAGAR JAGATPURA JAIPUR JAIPUR RJ 302017 IN"
        },
        "email": "services@abunditacapital.com",
        "name": "KALPANA RAWAT"
      },
      {
        "company": "ABURO GLOBAL PRIVATE LIMITED",
        "attributes": {
          "city": "1303,TOWER 7 EMERAID ISLE SAKI VIHAR ROAD L&AMP; T POWI MUMBAI MUMBAI MUMBAI MH 400072 IN"
        },
        "email": "sushantdixit@gmail.com",
        "name": "ROBIN DIXIT"
      },
      {
        "company": "ABUTHELEGEND TECH SOLUTIONS PRIVATE LIMITED",
        "attributes": {
          "city": "NO 184, DR NATESAN ROAD TIRUVALLIKKENI CHENNAI CHENNAI TN 600005 IN"
        },
        "email": "nasirleo1997@gmail.com",
        "name": "TAJDEEN NASEER MOHAMED"
      },
      {
        "company": "ABUTUBA PRIVATE LIMITED",
        "attributes": {
          "city": "C/O ZAHID HUSAIN VILL-MALPUR URF MALLUPURA SAMBHAL SAMBHAL MORADABAD UP 244302 IN"
        },
        "email": "mushahidmalik34961@gmail.com",
        "name": "MUSHAHID HUSAIN"
      },
      {
        "company": "ABUTURAB CHARITABLE FOUNDATION",
        "attributes": {
          "city": "SHOP NO.1-2 ,ATREY HEIGHT SUVASH COLONY 5-6. FATEGANJ VADODARA VADODARA GJ 390002 IN"
        },
        "email": "husain@rajfilters.com",
        "name": "SABBIRHUSAIN ABDULHUSAIN THANAWALA"
      },
      {
        "company": "ABV AUSTRALIAAN SEEDS PRIVATE LIMITED",
        "attributes": {
          "city": "SHOP NO1, SHREEJI COMPLEX STATE HIGHWAY VADALI (SABARKANTHA) VADALI SABARKANTHA GJ 383235 IN"
        },
        "email": "BHARATBHAI552@GMAIL.COM",
        "name": "VISHAL PATIDAR"
      },
      {
        "company": "ABV BREWS PRIVATE LIMITED",
        "attributes": {
          "city": "PLOT-14 ROAD-5 SECTOR 11 NEW PANVEL PANVEL PANVEL RAIGARH(MH) MH 410206 IN"
        },
        "email": "sb.official.68@gmail.com",
        "name": "SUDHANSHU SURAJ BANDSODE"
      },
      {
        "company": "ABV PHARMA PRIVATE LIMITED",
        "attributes": {
          "city": "SAPPHIRE 1,SHOP NO-3, BH SUNCITY HEVEN, RAIYADHAR RAIYA RAJKOT RAJKOT GJ 360005 IN"
        },
        "email": "briskpharmapvtltd@gmail.com",
        "name": "AMARDEEPSINH ANIRUDDHSINH JADEJA"
      },
      {
        "company": "ABVIJAY CONSULTANCY (OPC) PRIVATE LIMITED",
        "attributes": {
          "city": "C-76, D1, YES YES TEMPLE TOWER WEST END ROAD THIRUVENGADNAGAR AMBATTUR TIRUVALLUR TN 600053 IN"
        },
        "email": "visujay2011@gmail.com"
      },
      {
        "company": "ABVV BILASPUR INCUBATION FOUNDATION",
        "attributes": {
          "city": "ACADEMIC BUILDING, ABVV KONI BILASPUR BILASPUR(CGH) CT 495009 IN"
        },
        "email": "buif@bilaspuruniversity.ac.in",
        "name": "SEEMA BELORKAR"
      },
      {
        "company": "ABX CRO INDIA PRIVATE LIMITED",
        "attributes": {
          "city": "HOUSE NO 110/2 BLOCK-C NARAINA INDUSTRIAL AREA NARAINA INDUSTRIAL ESTATE NEW DELHI SOUTH WEST DELHI DL 110028 IN"
        },
        "email": "t.singh@bjmadan.com",
        "name": "TARANJIT SINGH"
      },
      {
        "company": "ABX INFRA SOLUTIONS PRIVATE LIMITED",
        "attributes": {
          "city": "C/OR.PANDEY,VL-MOBARAKPUR PNCH-USARI ,BLOCK-MOHANIA PIPRIYA DURGAWATI KAIMUR (BHABUA) BR 821105 IN"
        },
        "email": "singhkramit894@gmail.com",
        "name": "AMIT KUMAR SINGH"
      },
      {
        "company": "ABYANSH WELFARE FOUNDATION",
        "attributes": {
          "city": "C/O GIRJA DEVI S K NAGAR GOPIYAPUR SEMAR DARHI SEMARDADI DHANGHATA SANT KABIR NAGAR UP 272162 IN"
        },
        "email": "sadanandyadav687@gmail.com",
        "name": ". SADANAND"
      },
      {
        "company": "ABYANSHI SOLUTION PRIVATE LIMITED",
        "attributes": {
          "city": "C/O RESHAMA KUMARI, P.LNO -6 S/F PANDAV NAGAR EAST DELHI NEW DELHI NEW DELHI DL 110092 IN"
        },
        "email": "abyanshisolution@gmail.com",
        "name": "ANAND KUMAR"
      },
      {
        "company": "ABYANTARA FARMER PRODUCER COMPANY LIMITED",
        "attributes": {
          "city": "# 1382/B13 SARASWATHI BADAVANE DAVANAGERE CITY DAVANAGERE DAVANGERE KA 577002 IN"
        },
        "email": "ushav.bod06@gmail.com",
        "name": ". JALAJAKSHI"
      },
      {
        "company": "ABYETECH PRIVATE LIMITED",
        "attributes": {
          "city": "C/O DASHRATH SAH PANCH- TAJPUR MOTIPUR SAMASTIPUR SAMASTIPUR BR 848130 IN"
        },
        "email": "THEHIMANSHUKR02@GMAIL.COM",
        "name": "HIMANSHU KUMAR"
      },
      {
        "company": "ABYR IMPEX PRIVATE LIMITED",
        "attributes": {
          "city": "HOUSE NO 220 BLOCK-A-1 SEC-4 ROHINI ROHINI SECTOR 5 DELHI NORTH WEST DELHI DL 110085 IN"
        },
        "email": "ygoyal680@gmail.com",
        "name": ". ATUL"
      },
      {
        "company": "AC CINEGRAPHIC RENDERS PRIVATE LIMITED",
        "attributes": {
          "city": "1 H.NO.2-3-584/2 MANSOORABAD HAYATHNAGAR K.V.RANGAREDDY TG 500068 IN"
        },
        "email": "charanreddy.d@cinegraphicrenders.in",
        "name": "ANUPRAJ RANGA"
      },
      {
        "company": "AC INFRACON PRIVATE LIMITED",
        "attributes": {
          "city": "P NO 165/1, S NO A3 ALPHA BHRUGU CO OP COMMERCIAL C BHARUCH BHARUCH BHARUCH GJ 392001 IN"
        },
        "email": "acinfracon@gmail.com",
        "name": "CHINMAY NARESHKUMAR SHAH"
      },
      {
        "company": "AC MACHINERY PRIVATE LIMITED",
        "attributes": {
          "city": "44 BACKARY, PORTION 2ND FLR REGAL BUILDING NEW DELHI G.P.O. NEW DELHI CENTRAL DELHI DL 110001 IN"
        },
        "email": "acmachineryindia@gmail.com",
        "name": "KETHOSENO NAGI"
      },
      {
        "company": "AC WOMEN HELP FOUNDATION",
        "attributes": {
          "city": "HOUSE NO 163B, GROUND FLO QUTAB GARH, NEAR COMMUNIT QUTABAGARH DELHI NORTH WEST DELHI DL 110039 IN"
        },
        "email": "rajeevsharma9625727979@gmail.com",
        "name": "RAJEEV KUMAR"
      },
      {
        "company": "ACABC FARMER PRODUCER COMPANY LIMITED",
        "attributes": {
          "city": "C/O USHA CHAUDHARY BAGHAKADER, SUKARAULI SUKRAULI HARRAIYA BASTI UP 272163 IN"
        },
        "email": "acabctinich2@gmail.com",
        "name": "RAJESH CHAUDHARY"
      },
      {
        "company": "ACACCA SOCIAL WELFARE FOUNDATION",
        "attributes": {
          "city": "HNO-287-A, NEW BASTI CHANDIMANDIR CHANDI MANDIR PANCHKULA PANCHKULA HR 134107 IN"
        },
        "email": "narindersinghsidhu3@gmail.com",
        "name": "AVTAR SINGH"
      },
      {
        "company": "ACACIUS REAL ESTATE PRIVATE LIMITED",
        "attributes": {
          "city": "TATVAM VILLAS SOHNA ROAD SECTOR 48 GURGAON GURGAON GURGAON HR 122018 IN"
        },
        "email": "2sudeshtejpal@gmail.com",
        "name": "SUDESH PAL"
      },
      {
        "company": "ACACPPC WELFARE FOUNDATION",
        "attributes": {
          "city": "C/O AMEER RAIS QURESHI SHIVAJI NAGAR MANDPESHWAR BORIVALI WEST BORIVALI WEST MUMBAI MH 400092 IN"
        },
        "email": "Shaikhhamza60@gmail.com",
        "name": "HAMZA NOORALAM SHAIKH"
      },
      {
        "company": "ACADELS INSTITUTE OF MANAGEMENT (OPC) PRIVATE LIMITED",
        "attributes": {
          "city": "2ND FLOOR VELLARIYIL GARDEN,M M ALI CHALAPURAM KOZHIKODE KOZHIKODE KL 673002 IN"
        },
        "email": "acadelsinstitute@gmail.com"
      },
      {
        "company": "ACADEMIA ARENA PRIVATE LIMITED",
        "attributes": {
          "city": "FLAT NO-463-GR FLAT, PKT SECT-13, DWARKA PH-II DWARKA SEC-6 DELHI SOUTH WEST DELHI DL 110075 IN"
        },
        "email": "educatorsarena@gmail.com",
        "name": "MAHJABEEN KAZIMI"
      },
      {
        "company": "ACADEMIA EDUCATION AND CONSULTING INDIA PRIVATE LIMITED",
        "attributes": {
          "city": "H NO.20490A, GROUND FLOOR K D COMPLEX, GTB NAGAR BATHINDA BATHINDA BATHINDA PB 151001 IN"
        },
        "email": "academia.ca001@gmail.com",
        "name": "SANJEEV KUMAR"
      },
      {
        "company": "ACADEMIA RESEARCHLAB PRIVATE LIMITED",
        "attributes": {
          "city": "PLOT NO. 4645/10, SAKTI VIHAR, GADAKANA SAINIK SCHOOL (KHORDA) BHUBANESWAR KHORDA OR 751005 IN"
        },
        "email": "spriyadarsani90@gmail.com",
        "name": "DARSHAN SURYA SAHU"
      },
      {
        "company": "ACADEMIA TORAH (OPC) PRIVATE LIMITED",
        "attributes": {
          "city": "NO.596, VELACHERY MAIN RD SELAIYUR RAJAKILPAKKAM TAMBARAM KANCHIPURAM TN 600073 IN"
        },
        "email": "academiatorah@gmail.com"
      },
      {
        "company": "ACADEMICALLY GLOBAL PRIVATE LIMITED",
        "attributes": {
          "city": "268/F -12 /A S/F, MALVIYA NAGAR, HAUZRANI MALVIYA NAGAR (SOUTH DELHI) NEW DELHI SOUTH DELHI DL 110017 IN"
        },
        "email": "akrampharma67@gmail.com",
        "name": "MUMTAZ BEGUM"
      },
      {
        "company": "ACADEMINK SOLUTIONS PRIVATE LIMITED",
        "attributes": {
          "city": "H.NO 1-55/12/M/4-B,MANASA RESIDENCY,LAKSHMI NAGAR KONDAPUR SERILINGAMPALLY K.V.RANGAREDDY TG 500084 IN"
        },
        "email": "Srikanth@campx.in",
        "name": "VENKATARAMANA SRINIVASA RAO YALLAPRAGADA"
      },
      {
        "company": "ACADEMY FOR PARAMEDICAL AND TECHNICAL SKILL TRAINING (OPC) PRIVATE LIMITED",
        "attributes": {
          "city": "NEW NO.424, OLD NO.786 ANNA SALAI NANDANAM CHENNAI CITY CORPORATION CHENNAI TN 600035 IN"
        },
        "email": "parveenpapa20@gmail.com"
      },
      {
        "company": "ACADEMY OF CANCER CARE FOUNDATION AND RESEARCH CENTER",
        "attributes": {
          "city": "15, MONANAGAR SOC, OPP NE S M ROAD, AMBAWADI POLYTECHNIC (AHMEDABAD) AHMADABAD CITY AHMEDABAD GJ 380015 IN"
        },
        "email": "keyursoni2007@gmail.com",
        "name": "GANESH SHIVLINGRAO JAISHETWAR"
      },
      {
        "company": "ACADEMY OF CONCRETE TECHNOLOGY LABORATORIES (OPC) PRIVATE LIMITED",
        "attributes": {
          "city": "#72,2ND FLOOR,CH BUILDING 2ND A MAIN,NGEF-HBCS LAYO MALLATHAHALLI BANGALORE SOUTH BANGALORE KA 560056 IN"
        },
        "email": "academy@actbangalore.com"
      },
      {
        "company": "ACADEMY OF PULMONARY INTERNAL & EMERGENCY MEDICINE CRITICAL CARE FOUNDATION",
        "attributes": {
          "city": "J-149, PATEL NAGAR, HAPUR ROAD GHAZIABAD GHAZIABAD GHAZIABAD UP 201001 IN"
        },
        "email": "sharmavidushivats@gmail.com",
        "name": "ASHISH KUMAR AGARWAL"
      },
      {
        "company": "ACADEVVY ANADHI PRIVATE LIMITED",
        "attributes": {
          "city": "H.NO 44, 2ND FLOOR SECTOR 35 VASTU INFRATECH KARNAL KARNAL KARNAL HR 132001 IN"
        },
        "email": "panditsiyaram44@gmail.com",
        "name": ". SOURAB"
      },
      {
        "company": "ACADEX BPO SOLUTIONS PRIVATE LIMITED",
        "attributes": {
          "city": "C/OTUSARKANTI MONDAL VILL CHAKBALAIBAG PO NEPALGANJ SOUTH 24 PARGANAS SOUTH 24 PARGANAS SOUTH 24 PARGANAS WB 700103 IN"
        },
        "email": "mondaltamal3@gmail.com",
        "name": "TONOMAY MONDAL"
      },
      {
        "company": "ACADEXIA STUDY ABROAD PRIVATE LIMITED",
        "attributes": {
          "city": "PARAMBIL GRACE VILLA THUVAYOOR SOUTH P.O THUVAYUR SOUTH ADOOR PATHANAMTHITTA KL 691552 IN"
        },
        "email": "info@acadexiagroup.com",
        "name": "BABU KUNJUKUTTY"
      },
      {
        "company": "ACADHIRE TECH PRIVATE LIMITED",
        "attributes": {
          "city": "FLAT NO 702, TNO 1 NCC URBAN GARDENIA GACHIBOWLI SERI LINGAMPALLY K.V.RANGAREDDY TG 500032 IN"
        },
        "email": "finance@acadhire.com",
        "name": "RAJAT KAPOOR"
      },
      {
        "company": "ACADHUB EDU TECH PRIVATE LIMITED",
        "attributes": {
          "city": "PLOT NO 91 HMT SATHAVAHANA NAGAR KUKATPALLY TIRUMALAGIRI HYDERABAD TG 500072 IN"
        },
        "email": "venkatesh.kavala@onesaz.com",
        "name": "KURAPATI MURALI KRISHNA"
      },
      {
        "company": "ACADIA.IO DIGITAL SOLUTIONS PRIVATE LIMITED",
        "attributes": {
          "city": "606, SURYA KIRAN BUILDING 19, KASTURBA GANDHI MARG CONNAUGHT PLACE NEW DELHI CENTRAL DELHI DL 110001 IN"
        },
        "email": "ashwani.ojha@r-arora.com",
        "name": "ASHWANI KUMAR OJHA"
      },
      {
        "company": "ACADIFY TECHNOLOGY (OPC) PRIVATE LIMITED",
        "attributes": {
          "city": "HIG 414 K-5 KALINGA NAGAR BHUBA KALINGA VIHAR BALIANTA KHORDA OR 751019 IN"
        },
        "email": "acadifytechnology@gmail.com"
      },
      {
        "company": "ACADMIER EDTECH PRIVATE LIMITED",
        "attributes": {
          "city": "I-60A SECOND FLOOR MURADI ROAD JAMIA NAGAR NEW DELHI SOUTH DELHI DL 110025 IN"
        },
        "email": "ucademic@gmail.com",
        "name": "MOHD JUNAID IQUBAL"
      },
      {
        "company": "ACADMUS EDTECH PRIVATE LIMITED",
        "attributes": {
          "city": "PLOT NO. 255 SOMDUTT VIHAR L. L. R. M. MED.COLLEGE MEERUT MEERUT UP 250004 IN"
        },
        "email": "pradhanpower11@gmail.com",
        "name": "AAKASH PRADHAN"
      },
      {
        "company": "ACADNETICA SOLUTIONS PRIVATE LIMITED",
        "attributes": {
          "city": "FLT N A- 205, 2ND FLR, MAURISHKA PALACE, VYAS RD BIJAI MANGALORE DAKSHINA KANNADA KA 575004 IN"
        },
        "email": "oralmedicine@gmail.com",
        "name": "SARABPREET SINGH"
      },
      {
        "company": "ACADX GLOBAL PRIVATE LIMITED",
        "attributes": {
          "city": "D.NO.47-10-26,FLAT NO.102 1ST FLOOR, RAMS PLAZA, DWARAKANAGAR VISAKHAPATNAM (URBAN) VISAKHAPATNAM AP 530016 IN"
        },
        "email": "sripathi.business@gmail.com",
        "name": "SAI GANGADHAR DEVUPALLI"
      },
      {
        "company": "ACAINVENT EDU PRIVATE LIMITED",
        "attributes": {
          "city": "3F, CS-05, ANSAL PLAZA SECTOR-1 BHARAT NAGAR (GHAZIABAD) GHAZIABAD GHAZIABAD UP 201010 IN"
        },
        "email": "dhwani_shah504@yahoo.com",
        "name": "SANDEEP SINGH"
      },
      {
        "company": "ACALA HOSPITALITY PRIVATE LIMITED",
        "attributes": {
          "city": "S/O D.P.SHARMA,PACHANA BESIDE SHAKAMBARI PETROL PRADHAN NAGAR SILIGURI DARJILING WB 734003 IN"
        },
        "email": "sanzusharma2125@gmail.com",
        "name": "MANISH SHARMA"
      },
      {
        "company": "ACALICHERBS CARE PRIVATE LIMITED",
        "attributes": {
          "city": "RZ-265/19, G/F TUGALKABAD EXTENTION KALKAJI NEW DELHI SOUTH DELHI DL 110019 IN"
        },
        "email": "Varunbhardwaj653@gmail.com",
        "name": "VARUN BHARDWAJ"
      },
      {
        "company": "ACAMA FOODS PRIVATE LIMITED",
        "attributes": {
          "city": "58/457 1ST FLOOR MOTILAL NAGAR 3 GOREGAON (MUMBAI) GOREGAON WEST MUMBAI MH 400104 IN"
        },
        "email": "richard@quickbites.world",
        "name": "RICHARD CYRIL CHETTIAR"
      },
      {
        "company": "ACANTHA LOGISTICS PRIVATE LIMITED",
        "attributes": {
          "city": "71, FLR 2, VINCHAND NIWAS ACHARYA DONDE MARG, SEWRI MUMBAI MUMBAI MH 400015 IN"
        },
        "email": "shreeganeshk@yahoo.com",
        "name": "DEEPAK RAJNESHKUMAR GUPTA"
      },
      {
        "company": "ACARATTI RAYO WINERY PRIVATE LIMITED",
        "attributes": {
          "city": "C/OARGADE,SN129/3/6/11 FL2/ATRIMURTIRESI,MANCHAR KIWALE KHED PUNE MH 410505 IN"
        },
        "email": "yogirajrkale@gmail.com",
        "name": "YOGIRAJ RAVINDRA KALE"
      },
      {
        "company": "ACASIA ESSENTIALS PRIVATE LIMITED",
        "attributes": {
          "city": "740 GROUND FLOOR, JANTA FLAT GTB ENCLAVE NORTH EAST DELHI NORTH EAST DELHI NORTH EAST DELHI DL 110093 IN"
        },
        "email": "COMPANIESSALEPURCHASE@GMAIL.COM",
        "name": "JUHI KANSAL"
      },
      {
        "company": "ACATES REALTORS INDIA PRIVATE LIMITED",
        "attributes": {
          "city": "HOUSE NO. 5, NEAR URJA PARK MODEL TOWN REWARI GOKALGARH REWARI HR 123401 IN"
        },
        "email": "caanil.staff@gmail.com",
        "name": "ANIL KUMAR"
      },
      {
        "company": "ACBSP INTERNATIONAL PRIVATE LIMITED",
        "attributes": {
          "city": "E-336, G/F NIRMAN VIHAR EAST DELHI NEW DELHI NEW DELHI DL 110092 IN"
        },
        "email": "Luthra.manu@gmail.com",
        "name": "VASU LUTHRA"
      },
      {
        "company": "ACC PRO SOLUTIONS PRIVATE LIMITED",
        "attributes": {
          "city": "FLAT NO B-501, 5 FLOOR ADINATH ASHIRWAD GNT ROAD PONNIAMMANMEDU AMBATTUR TIRUVALLUR TN 600110 IN"
        },
        "email": "camahesh85@gmail.com",
        "name": "SAUMIL KISHORE SHAH"
      },
      {
        "company": "ACCADEMIA EDUTECH PRIVATE LIMITED",
        "attributes": {
          "city": "UNIT NO141 1ST FLOOR VARDHMAN PREMIUM MALL RANI BAGH DELHI NORTH WEST DELHI DL 110034 IN"
        },
        "email": "rkga2024@gmail.com",
        "name": "NIKHIL JAIN"
      },
      {
        "company": "ACCADIAN PUBLICATIONS PRIVATE LIMITED",
        "attributes": {
          "city": "C/O WASEEM JAVAID ZARGAR 2 FLOOR KAKA SARAI KARAN NAGAR (SRINAGAR) KARAN NAGAR SRINAGAR JK 190010 IN"
        },
        "email": "accadianpublications@gmail.com"
      },
      {
        "company": "ACCEINFO WEBCARE PRIVATE LIMITED",
        "attributes": {
          "city": "C/O KAMLESH DEVI SP COLONY P ROAD KARNAL KARNAL KARNAL HR 132001 IN"
        },
        "email": "vikasg5111985@gmail.com",
        "name": "VIKAS GARG"
      },
      {
        "company": "ACCEL SKILL EDUTECH PRIVATE LIMITED",
        "attributes": {
          "city": "A-901, DESIGNARCH E HOMES HRA 8, SURAJPUR SITE C I.A. SURAJPUR DADRI GAUTAM BUDDHA NAGAR UP 201306 IN"
        },
        "email": "yashwinderpaal@gmail.com",
        "name": "YASHWINDER PAAL SIINGH"
      },
      {
        "company": "ACCEL9 SPACEBUILD PRIVATE LIMITED",
        "attributes": {
          "city": "HOUSE NO. 1750, GALI NO. 10, PHASE 2, LAXMAN VIHAR GURGAON ARJUN NAGAR GURGAON HR 122001 IN"
        },
        "email": "Anil9683@gmail.com",
        "name": "ANIL KUMAR"
      },
      {
        "company": "ACCELEQUANT INDIA PRIVATE LIMITED",
        "attributes": {
          "city": "2101 CALADIA THE BOTANIKA SURVEY 107/108, NEAR RADI GACHIBOWLI SERI LINGAMPALLY K.V.RANGAREDDY TG 500032 IN"
        },
        "email": "spalemind@gmail.com",
        "name": "VIJAYA CHANDRU"
      },
      {
        "company": "ACCELERA ENERGY PRODUCTS PRIVATE LIMITED",
        "attributes": {
          "city": "LUNKAD QUEENSLAND BL A-1/ SN 201/1/1, VIMANNAGAR,LO VIMAN NAGAR PUNE PUNE MH 411014 IN"
        },
        "email": "anupkirans@gmail.com",
        "name": "SMIT SURAJ ZANWAR"
      },
      {
        "company": "ACCELERA GCC ADVISORS PRIVATE LIMITED",
        "attributes": {
          "city": "E 303, NAGARJUNA MAPLE KR PURAM MARATHAHALLI RD KRISHNARAJAPURAM R S BANGALORE NORTH BANGALORE KA 560016 IN"
        },
        "email": "manoj.madachery@gmail.com",
        "name": "MANOJ MADACHERY"
      },
      {
        "company": "ACCELERATE ANGELS AND VENTURE ADVISORS PRIVATE LIMITED",
        "attributes": {
          "city": "FLAT NO A 24 HARILEELA, A WING S NO 149/4 BANER BANER GAON HAVELI PUNE MH 411045 IN"
        },
        "email": "rahul@iaccelerate.in",
        "name": "VISHAL YOGESH THAKKAR"
      },
      {
        "company": "ACCELERATE FOR XCELLENCE PRIVATE LIMITED",
        "attributes": {
          "city": "C-1221,1222 STRATUM@VENUS GROUND SATELLITE ROAD JODHPUR CHAR RASTA AHMADABAD CITY AHMEDABAD GJ 380015 IN"
        },
        "email": "Info@gvfl.com",
        "name": "KAMAL BANSAL"
      },
      {
        "company": "ACCELERATE SOCIAL HEALTH AND ACTION (ASHA) FOUNDATION",
        "attributes": {
          "city": "HOUSE NO. 33, MUSKAN RESIDENCY, RAIPUR RAIPUR RAIPUR CT 492001 IN"
        },
        "email": "dhirenaapsa@gmail.com",
        "name": "MAMUNI PANDIT DAS"
      },
      {
        "company": "ACCELERIFY TECHNOLOGIES PRIVATE LIMITED",
        "attributes": {
          "city": "18/1, PALAIYA KRAMAM AUTHUR AUTOOR TIRUCHENDUR TUTICORIN TN 628151 IN"
        },
        "email": "sivasvatta@gmail.com",
        "name": ". HALIM SAVITRI"
      },
      {
        "company": "ACCELERO EDUCATIONAL FOUNDATION",
        "attributes": {
          "city": "UNIT#312,BLOCKK3/III RADH SPACES, KOKAPET TERMINAL KOKAPET SHANKARPALLY K.V.RANGAREDDY TG 500075 IN"
        },
        "email": "neetika_m@yahoo.com",
        "name": "URMILA MAHESHWARI"
      },
      {
        "company": "ACCELERON MOTORS CARS PRIVATE LIMITED",
        "attributes": {
          "city": "C/O SAWAN S/O MOTI RAM ANAJ MANDI SOHNA SOHNA GURGAON HR 122103 IN"
        },
        "email": "nitinvashist28@gmail.com",
        "name": "NITIN KUMAR VASHISHTH"
      },
      {
        "company": "ACCELESG (INDIA) PRIVATE LIMITED",
        "attributes": {
          "city": "FLAT NO B 306 LEGALA CONCRETE DESTINA APT LINGAMPALLI SERILINGAMPALLY K.V.RANGAREDDY TG 500019 IN"
        },
        "email": "sponna@accelesg.com",
        "name": "RAJ KISHOR KHAWARE"
      },
      {
        "company": "ACCELEVO EDUTECH PRIVATE LIMITED",
        "attributes": {
          "city": "839/4A-1TEACHER COLONY SHAYAM NAGARKANPUR UP SHYAM NAGAR (KANPUR NAGAR) SHYAM NAGAR KANPUR NAGAR UP 208013 IN"
        },
        "email": "accelevo98@gmail.com",
        "name": "ARINJAY NISHAD"
      },
      {
        "company": "ACCELIO LABS PRIVATE LIMITED",
        "attributes": {
          "city": "DOOR.NO.74B BANGO STREET CROSS, KAVUNDAMPALAYAM COIMBATORE NORTH COIMBATORE TN 641030 IN"
        },
        "email": "acceliolabs@gmail.com",
        "name": "MANI BHARATH"
      },
      {
        "company": "ACCELITY INTELLIGENT ASSESSMENTS PRIVATE LIMITED",
        "attributes": {
          "city": "B-241/10,UPPER GROUND FLR AMRITPURI-B, NR. MANDIR EAST OF KAILASH NEW DELHI SOUTH DELHI DL 110065 IN"
        },
        "email": "accelity@gmail.com",
        "name": "INDU NIGAM"
      },
      {
        "company": "ACCELITY PANWAADI PRIVATE LIMITED",
        "attributes": {
          "city": "B-241/10,UPPER GROUND FLR AMRITPURI-B, NR. MANDIR EAST OF KAILASH NEW DELHI SOUTH DELHI DL 110065 IN"
        },
        "email": "ankit.nigam47@gmail.com",
        "name": "INDU NIGAM"
      },
      {
        "company": "ACCELITY PARTNERS PRIVATE LIMITED",
        "attributes": {
          "city": "B-241/10 UPPER GROUND FLOOR, AMRITPURI-B EAST OF KAILASH NEW DELHI SOUTH DELHI DL 110065 IN"
        },
        "email": "accelity.legal@gmail.com",
        "name": "AMIT NIGAM"
      },
      {
        "company": "ACCELLENT INGENIOTECH PRIVATE LIMITED",
        "attributes": {
          "city": "OFFNO7128THFLOORECSTASY BUSINESSPARKACCROADMULUND MUMBAI MUMBAI MUMBAI MH 400080 IN"
        },
        "email": "shruti.loke@globalin.co.uk"
      },
      {
        "company": "ACCELOR MICROSYSTEMS PRIVATE LIMITED",
        "attributes": {
          "city": "PLOT NO. F-451, SECTOR 74 INDUSTRIAL FOCAL POINT CHANDIGARH SECTOR 55 S.A.S.NAGAR (MOHALI) RUPNAGAR PB 160055 IN"
        },
        "email": "contact@accelorindia.com",
        "name": "MANVJEET KAUR"
      },
      {
        "company": "ACCELROUTE TRAINING INSTITUTE PRIVATE LIMITED",
        "attributes": {
          "city": "OFFICE 208/2, SNEH GANGA OFF SHANKAR SETH ROAD MARKET YARD (PUNE) PUNE CITY PUNE MH 411037 IN"
        },
        "email": "info@entrelogy.com",
        "name": "AKANSH JEETENDRA JAIN"
      },
      {
        "company": "ACCELSOFT IT SOLUTIONS (OPC) PRIVATE LIMITED",
        "attributes": {
          "city": "267 GURU RAM DASS NAGAR NEAR LAXMI NAGAR EAST DELHI EAST DELHI EAST DELHI DL 110092 IN"
        },
        "email": "Jaspreet@accelerateit.ca"
      },
      {
        "company": "ACCENDERE TRADING PRIVATE LIMITED",
        "attributes": {
          "city": "506, JB TOWER VALLAMKADAV PUTHIYEDAM ROAD EDATHALA NORTH ALUVA ERNAKULAM KL 683561 IN"
        },
        "email": "shibucyriac@yahoo.com",
        "name": "SHIBU CYRIAC"
      },
      {
        "company": "ACCENOX TECH LABS PRIVATE LIMITED",
        "attributes": {
          "city": "MOTISAR GANAHERA AJMER AJMER RJ 305022 IN"
        },
        "email": "Madhurawat7788@gmail.com",
        "name": "KHEM SINGH"
      },
      {
        "company": "ACCENTAURA PRIVATE LIMITED",
        "attributes": {
          "city": "KURLA KALINA RD,G.N.LAA23 1/1C, CTS NO.50 KURLA MUMBAI MUMBAI MH 400070 IN"
        },
        "email": "officialsinghrsb@gmail.com",
        "name": "NAVNEET HARIKESH SINGH"
      },
      {
        "company": "ACCENTIC EDUCARE FOUNDATION",
        "attributes": {
          "city": "B-888, FF, CAMP NO.4, JWALAPURI, NANGLOI JWALA PURI NEW DELHI WEST DELHI DL 110087 IN"
        },
        "email": "ajayjha1978@yahoo.com",
        "name": "AJAY KUMAR JHA"
      },
      {
        "company": "ACCERETION BUSINESS SOLUTIONS PRIVATE LIMITED",
        "attributes": {
          "city": "D/104,1ST FLOOR, MINAL TOWER, OLD NAGARDAS ROAD, ANDHERI EAST MUMBAI MUMBAI MH 400069 IN"
        },
        "email": "sandeep.khaitan5@gmail.com",
        "name": "SHILPA SUDHIR KEDIA"
      },
      {
        "company": "ACCESKEYS SOLUTIONS PRIVATE LIMITED",
        "attributes": {
          "city": "UNIT 1, THIRD FLOOR SAI HARSHA TOWERS WHITEFIELD BANGALORE SOUTH BANGALORE KA 560066 IN"
        },
        "email": "Narayana.sn@gmail.com",
        "name": "LEKKALA NARAYANASWAMY"
      },
      {
        "company": "ACCESS INTERNATIONAL GLOBAL ENERGY PRIVATE LIMITED",
        "attributes": {
          "city": "UNIT -315/316 VARDHMAN PL BLOCK J RAJOURI GARDEN J-6 NEW DELHI WEST DELHI DL 110027 IN"
        },
        "email": "accessinternational.msw@gmail.com",
        "name": "MOHINDER KAUR"
      },
      {
        "company": "ACCESS LIFESCIENCE PRIVATE LIMITED",
        "attributes": {
          "city": "HOUSE NUMBER 2200 SUPER ENCLAVE, SECTOR 49 SECTOR 47 CHANDIGARH CHANDIGARH CHANDIGARH CH 160047 IN"
        },
        "email": "abhinav.hora001@gmail.com",
        "name": "RESHU SINGLA"
      },
      {
        "company": "ACCESS SAI EMPIRE HOMES PRIVATE LIMITED",
        "attributes": {
          "city": "PL.NO;70 RAJAJI STREET GUDUVANCHERI GUDUVANCHERY CHENGALPATTU KANCHIPURAM TN 603202 IN"
        },
        "email": "accesshomes.in@gmail.com"
      },
      {
        "company": "ACCESS TO WELLNESS CONCEPTS PRIVATE LIMITED",
        "attributes": {
          "city": "B10 UPPERBASEMENT WESTERN EDGE LL W.E. HIGH-WAY MAGTHANE BORIVALI EAST MUMBAI MH 400066 IN"
        },
        "email": "dhaval@chromeasia.net",
        "name": "DHAVAL UDESHI"
      },
      {
        "company": "ACCESS TRAVEL SOLUTIONS PRIVATE LIMITED",
        "attributes": {
          "city": "NO.7A,CLC WORKS ROAD, CHROMEPET TIRUNEERMALAI TAMBARAM KANCHIPURAM TN 600044 IN"
        },
        "email": "accesstravels55@gmail.com",
        "name": "RAGHUMURTHY SUSILA VEERA PRABAHAR"
      },
      {
        "company": "ACCESSIBILITY GLOBEL TECH360 PRIVATE LIMITED",
        "attributes": {
          "city": "H NO 249-B KH NO-64/19 JAI VIHAR PHASE-3 HARFUL BAPROLA NEW DELHI SOUTH WEST DELHI DL 110043 IN"
        },
        "email": "Vikas880095@gmail.com",
        "name": "AMAN KUMAR"
      },
      {
        "company": "ACCESSION IT SOLUTIONS PRIVATE LIMITED",
        "attributes": {
          "city": "6-3-571/2, SECOND FLOOR, ROCK VISTA, SOMAJIGUDA NAMPALLY HYDERABAD TG 500082 IN"
        },
        "email": "kottubabysuryakumari@gmail.com",
        "name": "VENKATA SRINIVASA RAO KOTTU"
      },
      {
        "company": "ACCESSMATES ENGINEERING SERVICES PRIVATE LIMITED",
        "attributes": {
          "city": "PANCHYAT TUTA, DULMIDIH ICHAGARH SERAIKELLA KHARSAWAN SERAIKELA-KHARSAWAN JH 832404 IN"
        },
        "email": "bijay.ropeaccess@gmail.com",
        "name": "BIJAY KUMAR MAHATO"
      },
      {
        "company": "ACCESSOR INFRATECH PRIVATE LIMITED",
        "attributes": {
          "city": "HOUSE NO- RZ 49A, KH NO-4 SOMESH VIHAR CHHAWLA CHHAWLA NEW DELHI SOUTH WEST DELHI DL 110071 IN"
        },
        "email": "sanjitsingh758@gmail.com",
        "name": "SANJEET KUMAR"
      },
      {
        "company": "ACCHADANAM DESIGN AND CREATIONS PRIVATE LIMITED",
        "attributes": {
          "city": "ROOM NO. TI-109 1ST FLOOR, FTBI, NIT, ROURKELA - 8 RAURKELA (M) SUNDERGARH OR 769008 IN"
        },
        "email": "bibechitac@gmail.com",
        "name": "BIBECHITA CHOUDHURY"
      },
      {
        "company": "ACCIO FINSERV PRIVATE LIMITED",
        "attributes": {
          "city": "3RD FLOOR,#234 9TH MAIN ROAD, SECTOR 6 HSR LAYOUT BANGALORE SOUTH BANGALORE KA 560102 IN"
        },
        "email": "agarwalranjan@gmail.com",
        "name": "RANJAN AGARWAL"
      },
      {
        "company": "ACCIOHUB PRIVATE LIMITED",
        "attributes": {
          "city": "C/O SURENDRA KUMAR TELENGASAHISOVARAMPUR SOVARAMPUR BALESHWAR SADAR BALESWAR OR 756001 IN"
        },
        "email": "verbbteam@gmail.com",
        "name": "SURAJ KUMAR JENA"
      },
      {
        "company": "ACCIVA HOSPITALITY KALYAN NAGAR PRIVATE LIMITED",
        "attributes": {
          "city": "92/1, 92/3 TO 92/18, TIMES SQUARE BUILDING, GACHIBOWLI SERI LINGAMPALLY K.V.RANGAREDDY TG 500032 IN"
        },
        "email": "accivahospitalitykalyannagar@gmail.com",
        "name": "SRI HARITHA YENIGALA"
      },
      {
        "company": "ACCLAIM GREEN PRIVATE LIMITED",
        "attributes": {
          "city": "101, GRD FLOOR BLOCK C, NOIDA SECTOR 26 NOIDA NOIDA GAUTAM BUDDHA NAGAR UP 201301 IN"
        },
        "email": "monisha.dhamija@gmail.com",
        "name": "AASHEESH DHAMIJA"
      },
      {
        "company": "ACCLER8 TECHNOLOGIES PRIVATE LIMITED",
        "attributes": {
          "city": "H NO.63 M C COLONY BEHIND GWAR FACTORY BHIWANI BHIWANI BHIWANI HR 127021 IN"
        },
        "email": "bhanu@techarchitects.co",
        "name": "BHANU PRAKASH"
      },
      {
        "company": "ACCLIVATE BUSINESS SOLUTIONS PRIVATE LIMITED",
        "attributes": {
          "city": "H-47 BLOCK H SECTOR 63 NEAR ELECTRONIC METRO NOIDA NOIDA GAUTAM BUDDHA NAGAR UP 201301 IN"
        },
        "email": "info@acclivatesolutions.com",
        "name": "VINOD KUMAR GOUR"
      },
      {
        "company": "ACCO RENT PRIVATE LIMITED",
        "attributes": {
          "city": "DAUSA ROAD, SHIV COLONY TOONGA DAUSA JAIPUR RJ 303302 IN"
        },
        "email": "sharmachetan0421@gmail.com",
        "name": "JITESH KHANDELWAL"
      },
      {
        "company": "ACCOLADES PHARMACEUTICAL PRIVATE LIMITED",
        "attributes": {
          "city": "VILL PATORI BLOCK HANUMAN NAGAR P.BASANT DARBHANGA DARBHANGA BR 846003 IN"
        },
        "email": "aniketkumar20419980@gmail.com",
        "name": "ANIKET KUMAR"
      },
      {
        "company": "ACCOLENT ENGINEERING PRIVATE LIMITED",
        "attributes": {
          "city": "NO 127/48 3RD CROSS, MARUTHI NAGAR NAGARBHAVI BANGALORE NORTH BANGALORE KA 560072 IN"
        },
        "email": "gangs146@gmail.com",
        "name": "GANGADHARA MANOHARA"
      },
      {
        "company": "ACCOMPLECE HIGHBROW BUSYTECH PRIVATE LIMITED",
        "attributes": {
          "city": "5/8/4 GEETA COLONY JHEEL KHRENJA EAST DELHI EAST DELHI EAST DELHI DL 110031 IN"
        },
        "email": "accomplecehighbrow@gmail.com",
        "name": "KAVAY SRIVASTAV"
      },
      {
        "company": "ACCOMZY ACCOMMODATION SERVICES PRIVATE LIMITED",
        "attributes": {
          "city": "GF- 2, MAMER APPARTMENT BAZAR, BARODA VADODARA VADODARA VADODARA GJ 390001 IN"
        },
        "email": "devashishsavant94@gmail.com",
        "name": "ANIRBAN MISRA"
      },
      {
        "company": "ACCORD ENGINEERING SOLUTION PRIVATE LIMITED",
        "attributes": {
          "city": "H NO. 121/B , BLOCK D KRISHNA PARK,HAUZ KHAS DEOLI NEW DELHI SOUTH DELHI DL 110062 IN"
        },
        "email": "sdharm2079@gmail.com",
        "name": "MEGHA SHARMA"
      },
      {
        "company": "ACCORD MEDICURE PRIVATE LIMITED",
        "attributes": {
          "city": "FLAT-2B, WING-1, BLOCK-4 BMC BHAWANI ENCLAVE SAHEED NAGAR BHUBANESWAR KHORDA OR 751007 IN"
        },
        "email": "santosh_k_patra@yahoo.co.in",
        "name": "SANTOSH KUMAR PATRA"
      },
      {
        "company": "ACCORD MULTIPARKING SYSTEMS PRIVATE LIMITED",
        "attributes": {
          "city": "24-1, GRD FLR, PLOT-31 LAKADI BUNDER, DARUKHANA MAZGAON MUMBAI MUMBAI MH 400010 IN"
        },
        "email": "smm_syed2001@yahoo.com",
        "name": "ADEEM ASLAM KAZI"
      },
      {
        "company": "ACCORD SKILL ACADEMY ASSOCIATION",
        "attributes": {
          "city": "NO.32,2ND FLOOR,2ND CROSS RMV 2ND STAGE, DEVI NAGAR R.M.V. EXTENSION II STAGE BANGALORE NORTH BANGALORE KA 560094 IN"
        },
        "email": "niranjan@accord212.com",
        "name": "NUGGIHALLI KARIBASAPPA NIRANJANMURTHY"
      },
      {
        "company": "ACCORDE DIGITAL(OPC) PRIVATE LIMITED",
        "attributes": {
          "city": "12, U-14/1 DLF PHASE 3, DLF QE DLF QE GURGAON HR 122002 IN"
        },
        "email": "pranav.confidential@gmail.com"
      },
      {
        "company": "ACCORDIA FOOD AND BEVERAGES PRODUCTS PRIVATE LIMITED",
        "attributes": {
          "city": "169 J.N.ROAD TIRUVALLUR TIRUVALLUR TIRUVALLUR TN 602001 IN"
        },
        "email": "higroupinvestors@gmail.com",
        "name": "DASARRAJA MADHUSUDHANAN VIJAY"
      },
      {
        "company": "ACCORDIA FORTUNE INDIA PRIVATE LIMITED",
        "attributes": {
          "city": "169 J.N.ROAD TIRUVALLUR TIRUVALLUR TIRUVALLUR TN 602001 IN"
        },
        "email": "accordiafortuneinfo@gmail.com",
        "name": "DASARRAJA MADHUSUDHANAN VIJAY"
      },
      {
        "company": "ACCORDLUXE CLEANING PRIVATE LIMITED",
        "attributes": {
          "city": "38, VANSTHALI MARG RAM NAGAR COLONY STATION ROAD (JAIPUR) JAIPUR JAIPUR RJ 302006 IN"
        },
        "email": "Yashwantsaini623@gmail.com",
        "name": "ANKESH SHARWAN LAL VERMA"
      },
      {
        "company": "ACCORDPHARMACY PRIVATE LIMITED",
        "attributes": {
          "city": "R/O 35-CPARAMOUNT TULIP SAHARANPUR SAHARANPUR SAHARANPUR UP 247001 IN"
        },
        "email": "accordpharmacyprivatelimited@gmail.com",
        "name": "SHORYA VEER RANA"
      },
      {
        "company": "ACCORTO CONCEPTS INDIA PRIVATE LIMITED",
        "attributes": {
          "city": "SR.NO.8/8, NARHE(N.V.) NEAR ABHINAV COLLEGE, VADGAON BUDRUK HAVELI PUNE MH 411041 IN"
        },
        "email": "accortoconcepts@gmail.com",
        "name": "UMESH GHANSHYAM CHAVAN"
      },
      {
        "company": "ACCOTECH ACCOUNTING BAZAR PRIVATE LIMITED",
        "attributes": {
          "city": "FLOOR-1 SANJAY APARTMENT P-2 VYAPAR VIHAR ROAD BILASPUR (BILASPUR-CGH) BILASPUR BILASPUR(CGH) CT 495001 IN"
        },
        "email": "avinashmodi15@gmail.com",
        "name": "AVINASH MODI"
      },
      {
        "company": "ACCOTY CONSULTANCY PRIVATE LIMITED",
        "attributes": {
          "city": "WEWORK DLF FORUM CYBERCITY,PHASE 3, DLF QE DLF QE GURGAON HR 122002 IN"
        },
        "email": "legal@accoty.com",
        "name": ". GAURAV"
      },
      {
        "company": "ACCOUNTING BEES PRIVATE LIMITED",
        "attributes": {
          "city": "8-3-231/A/73 SRI KRISHNA YOUSUFGUDA YOUSUFGUDA KHAIRATABAD HYDERABAD TG 500045 IN"
        },
        "email": "carameshreddy@outlook.com",
        "name": "KUNDURU VARA LAKSHMI"
      },
      {
        "company": "ACCQTAX INTERNATIONAL SERVICES PRIVATE LIMITED",
        "attributes": {
          "city": "P.NO.21, D.NO.1-946E, 11THCROSS EXTN.VASANNAGAR UYYAKONDANTHIRUMALAI SRIRANGAM TIRUCHIRAPPALLI TN 620102 IN"
        },
        "email": "accqtaxinternationalservices@gmail.com",
        "name": "GURUVAIAH REDDIAR RAJESWARI"
      },
      {
        "company": "ACCQUANTUM BUSINESS SOLUTIONS (OPC) PRIVATE LIMITED",
        "attributes": {
          "city": "FLAT NO 301, SARYU APTS ASHOK NAGAR BEH ESIS HOSP KANDIVALI EAST KANDIVALI EAST MUMBAI MH 400101 IN"
        },
        "email": "srusti.0902@gmail.com"
      },
      {
        "company": "ACCREDDIT STAFFING PRIVATE LIMITED",
        "attributes": {
          "city": "C/O RAJNEESH VERMA MACHHA RHATTA NEAR DAUJI TEMPLE JAUNPUR JAUNPUR JAUNPUR UP 222001 IN"
        },
        "email": "support@accredditstafing.com",
        "name": "PRIYANKA SRIVASTAVA"
      },
      {
        "company": "ACCREDIAN ENGINEERING PRIVATE LIMITED",
        "attributes": {
          "city": "KH NO 12/66 FIRST FLOOR INDIRA NAGAR SECTOR 12 INDIRANAGAR SEC-14 LUCKNOW LUCKNOW UP 226016 IN"
        },
        "email": "accepl2023@gmail.com",
        "name": "SUNAINA CHAUHAN"
      },
      {
        "company": "ACCREDIT MARKETPLACE PRIVATE LIMITED",
        "attributes": {
          "city": "C3-0501 SPRING MEADOWS GH-07A TECH ZONE IV SAKIPUR DADRI GAUTAM BUDDHA NAGAR UP 201306 IN"
        },
        "email": "rai.rohitvns@gmail.com",
        "name": "ROHIT RAI"
      },
      {
        "company": "ACCRETION AVIATION PRIVATE LIMITED",
        "attributes": {
          "city": "OFFICE NO. 306 MALOO -1 2 SCHEME NO.94, VIJAY NAGAR INDORE INDORE MP 452010 IN"
        },
        "email": "aviation@accretion.in",
        "name": "ANURADHA MUCHHAL"
      },
      {
        "company": "ACCRIGHT (OPC) PRIVATE LIMITED",
        "attributes": {
          "city": "08 PANNASE LAYOUT, BHAMTEE KHAMLA NAGPUR NAGPUR MH 440025 IN"
        },
        "email": "amitmbhalerao2280@gmail.com"
      },
      {
        "company": "ACCROITRE SOLUTIONS PRIVATE LIMITED",
        "attributes": {
          "city": "A-303, OMICRON-III, GREATER NOIDA, KULESRA DADRI GAUTAM BUDDHA NAGAR UP 201306 IN"
        },
        "email": "BAKUL773@GMAIL.COM",
        "name": "BAKUL TYAGI"
      },
      {
        "company": "ACCRUE EDUCATION PRIVATE LIMITED",
        "attributes": {
          "city": "6, 7 1ST FLOOR CITYCENTRE 4TH STREET, SUNDAR NAGAR K.K.NAGAR (TIRUCHIRAPPALLI) TIRUCHIRAPPALLI TIRUCHIRAPPALLI TN 620021 IN"
        },
        "email": "Ron.maharaja@hotmail.com",
        "name": "ANANDARAJA VIVEKA"
      },
      {
        "company": "ACCRUE PROPERTIES PRIVATE LIMITED",
        "attributes": {
          "city": "NO 548, DEWANS ROAD CHAMARAJA MOHALLA MYSORE MYSORE MYSORE KA 570001 IN"
        },
        "email": "sssanthosh530@gmail.com",
        "name": "SANTHOSH SALIGRAMA SUBBEGOWDA"
      },
      {
        "company": "ACCRUEPOLE CONSTRUCTION & ENGINEERING PRIVATE LIMITED",
        "attributes": {
          "city": "BHAWESHWARI SOC CTS 842 B SINGH ESTATE SAMTA NAGAR KANDIVALI EAST KANDIVALI EAST MUMBAI MH 400101 IN"
        },
        "email": "accruepolecae@gmail.com"
      },
      {
        "company": "ACCRUING TECHNOLOGIES PRIVATE LIMITED",
        "attributes": {
          "city": "E-103, MANGALAM NIRVANA?2 NEAR UMIYA CAMPUS SOLA DASKROI AHMEDABAD GJ 380060 IN"
        },
        "email": "Dhanikpatel106@gmail.com",
        "name": "DHANIKBHAI SHANKARBHAI PATEL"
      },
      {
        "company": "ACCTABILITY OUTSOURCING PRIVATE LIMITED",
        "attributes": {
          "city": "DESK NO.93, D-9 GROUND FL SECTOR 3 NOIDA NOIDA GAUTAM BUDDHA NAGAR UP 201301 IN"
        },
        "email": "contact@acctability.in"
      },
      {
        "company": "ACCTO BUSINESS SOLUTIONS PRIVATE LIMITED",
        "attributes": {
          "city": "SECOND FLOOR, PART-B, PLOT NO. W-771, D-SECTOR ANNA NAGAR WESTERN EXTN AMBATTUR CHENNAI TN 600101 IN"
        },
        "email": "info@accto.in",
        "name": "ANANTHAKUMAR VEERAPANDI"
      },
      {
        "company": "ACCU DIVINE WELLNESS PRIVATE LIMITED",
        "attributes": {
          "city": "1109 BAROLA SEC 49 BAROLA BARAULA DADRI GAUTAM BUDDHA NAGAR UP 201304 IN"
        },
        "email": "accudivinewellness@gmail.com",
        "name": "POOJA KUMARI"
      },
      {
        "company": "ACCU GLOBAL TRANSFORMATION SERVICES PRIVATE LIMITED",
        "attributes": {
          "city": "FINAL PLOT 285, CTS 17-7/2, OFFICE 11, TARA PUNE PUNE CITY PUNE MH 411001 IN"
        },
        "email": "vision.ayaz@gmail.com",
        "name": "AYAZ ABDULSATTAR SHAIKH"
      },
      {
        "company": "ACCU MEASURETECH INDIA (OPC) PRIVATE LIMITED",
        "attributes": {
          "city": "FLR-2ND ICHAPUR NEW HIT R LP-507/4 ICHAPUR RD DOMJUR HOWRAH WB 711104 IN"
        },
        "email": "measurementaccurate@gmail.com"
      },
      {
        "company": "ACCU POLICY SERVICES PRIVATE LIMITED",
        "attributes": {
          "city": "PLOT NO. 91, HASTINAPUR NEAR KARNI COLLEGE VAISHALI NAGAR JAIPUR JAIPUR RJ 302021 IN"
        },
        "email": "enquiry@accupolicy.in",
        "name": "SHANKER LAL SHARMA"
      },
      {
        "company": "ACCU-DENT 3D SCAN PRIVATE LIMITED",
        "attributes": {
          "city": "OFFICE 5, AMRUT ELEGANCE 1ST FLOOR, DAYALDAS ROAD VILEEPARLE (EAST) MUMBAI MUMBAI MH 400057 IN"
        },
        "email": "hr@orthosquare.com",
        "name": "KUNAL VIKAS SHET"
      },
      {
        "company": "ACCUAID MEDICAL SERVICES PRIVATE LIMITED",
        "attributes": {
          "city": "C/O MUKESH KUMAR MOH DEVI CHANDAUSI CHANDAUSI MORADABAD UP 244412 IN"
        },
        "email": "accuaidmedicalservices@gmail.com",
        "name": "MOHIT BANSAL"
      },
      {
        "company": "ACCUCAL SOLUTIONS (OPC) PRIVATE LIMITED",
        "attributes": {
          "city": "FN D.7 SHIVTEJ COOP SOC KHUTWADNGR KAMATHWADA SATPUR TOWNSHIP NASHIK NASHIK MH 422007 IN"
        },
        "email": "accuteks@gmail.com"
      },
      {
        "company": "ACCUCERT GLOBAL PRIVATE LIMITED",
        "attributes": {
          "city": "H.NO.84-A SHIRDIPURAM KOLAR ROAD BHOPAL BHOPAL MP 462042 IN"
        },
        "email": "Shobhit.manii@gmail.com",
        "name": "SHOBHIT MANI SONI"
      },
      {
        "company": "ACCUCORE SOLUTIONS PRIVATE LIMITED",
        "attributes": {
          "city": "A/9, MATRUSMRUTI SOC, NR UTKARSH SCHOOL DIWALIPURA RACECOURSE VADODARA VADODARA GJ 390007 IN"
        },
        "email": "accucoresolutions@gmail.com",
        "name": "ABHIJEET VISHAL CHOPRA"
      },
      {
        "company": "ACCUFAST METALS PRIVATE LIMITED",
        "attributes": {
          "city": "811A WING, JASWANTI ALLIE D BUSINESSCENTERKANCHPADA MALAD MALAD WEST MUMBAI MH 400064 IN"
        },
        "email": "accufastmetals@gmail.com",
        "name": "PRASHANT AVANTILAL VORA"
      },
      {
        "company": "ACCUGLOBAL CONSULTANCY PRIVATE LIMITED",
        "attributes": {
          "city": "OFFICE NO. 03, 3RD FLOOR, SWAGE FARM, NEW SANGANER SHYAM NAGAR (JAIPUR) JAIPUR JAIPUR RJ 302019 IN"
        },
        "email": "casaini1994@gmail.com",
        "name": "JAWAL SINGH"
      },
      {
        "company": "ACCULAB-PATHOLOGY PRIVATE LIMITED",
        "attributes": {
          "city": "OLD CIVILHOSPITAL COMPLEX O/S DELHI GATE FEROZEPUR CITY FIROZEPUR FIROZPUR PB 152002 IN"
        },
        "email": "acculabpathology@gmail.com",
        "name": "DANISH KAKKAR"
      },
      {
        "company": "ACCULER MEDIATECHNOLOGY INDIA PRIVATE LIMITED",
        "attributes": {
          "city": "280/4, N.S.R.ROAD, K.K.PUDUR, TELUNGUPALAYAM VELANDIPALAYAM COIMBATORE NORTH COIMBATORE TN 641025 IN"
        },
        "email": "acculermediatechnologies2@gmail.com",
        "name": "RAJAPPAN PRABAKARAN"
      },
      {
        "company": "ACCUM DATA ANALYTICS PRIVATE LIMITED",
        "attributes": {
          "city": "DESK NO 310-K, #88, BOREWELL ROAD WHITEFIELD BANGALORE SOUTH BANGALORE KA 560066 IN"
        },
        "email": "anweshc@gmail.com",
        "name": "ANWESH CHAKRABORTY"
      },
      {
        "company": "ACCUME BIZTECH PRIVATE LIMITED",
        "attributes": {
          "city": "111-B, BASANT VIHAR BICHOLI MARDANA INDORE INDORE MP 452016 IN"
        },
        "email": "mahi.khl@gmail.com",
        "name": "SHUBHAM KHANDELWAL ."
      },
      {
        "company": "ACCUMUNATE RADIANCE PRIVATE LIMITED",
        "attributes": {
          "city": "MD ANWAR ALAM VILL-JAL KAURA KHAGARIA JALKAURA KHAGARIA KHAGARIA BR 851204 IN"
        },
        "email": "maqsoodalam1115@gmail.com",
        "name": "MD SAUD"
      },
      {
        "company": "ACCUNAI INDIA SERVICES PRIVATE LIMITED",
        "attributes": {
          "city": "85, KAILASH PURI AMER ROAD, AMER ROAD JAIPUR JAIPUR RJ 302002 IN"
        },
        "email": "legal@accunai.com",
        "name": "AMRIT KHANDELWAL"
      },
      {
        "company": "ACCUNEO MEDSYS PRIVATE LIMITED",
        "attributes": {
          "city": "2ND FLOOR, SWASTIK CENTRE SWASTIK CHAR RASTA, NAVRANGPURA CITY TALUKA AHMEDABAD GJ 380009 IN"
        },
        "email": "neomedsys@gmail.com",
        "name": "TANMAY TARANGBHAI SUTARIA"
      },
      {
        "company": "ACCUOM MEDITECH PRIVATE LIMITED",
        "attributes": {
          "city": "B-611 GANESH GLORY NEAR BSNL OFFICE JAGATPUR DASCROI AHMEDABAD GJ 382470 IN"
        },
        "email": "dhaval_omshivom@yahoo.co.in",
        "name": "DHAVALKUMAR SURESHBHAI PATEL"
      },
      {
        "company": "ACCUPLOT INFRA DEVELOPERS PRIVATE LIMITED",
        "attributes": {
          "city": "RAJEESH BHAVAN,PULLIMEL , PATTOOR P O, NOORANAD PATTOOR MAVELIKARA ALAPPUZHA KL 690529 IN"
        },
        "email": "rajeeshrv001@gmail.com",
        "name": "RENJINI RAJ"
      },
      {
        "company": "ACCURA STRUCTURES PRIVATE LIMITED",
        "attributes": {
          "city": "PLOT NO. 7-8, GOPALESHWAR SOC. RANDER ROAD RANDER SURAT SURAT GJ 395005 IN"
        },
        "email": "rutwikpatel31@gmail.com",
        "name": "RUTWIK ASHWINBHAI PATEL"
      },
      {
        "company": "ACCURAAI DATA SOLUTIONS PRIVATE LIMITED",
        "attributes": {
          "city": "15/5-5 SARAVANA COMPLEX PAPPAMPATTI PIRVU TRICHY CHINTHAMANIPUDUR METTUPALAYAM COIMBATORE TN 641103 IN"
        },
        "email": "vasanthya26@gmail.com",
        "name": "SELVARAJ SANTHYA"
      },
      {
        "company": "ACCURABOOKS ADVISORS PRIVATE LIMITED",
        "attributes": {
          "city": "B/1/11, SHASHIPARK CO HO SOC LTD, DEVDUTT APPARTME NAVA VADAJ AHMADABAD CITY AHMEDABAD GJ 380013 IN"
        },
        "email": "kalawatifabric@gmail.com",
        "name": "MUKESHKUMAR SOMCHAND PATEL"
      },
      {
        "company": "ACCURACY ANALABS (OPC) PRIVATE LIMITED",
        "attributes": {
          "city": "PLOTNO: 13E, FIRST FLOOR SATHYANGR,SRI CHELLIAMMAN DINDIGUL COLLECTORATE DINDIGUL DINDIGUL TN 624004 IN"
        },
        "email": "accuracyanalabs@gmail.com"
      },
      {
        "company": "ACCURACY COMPUTER ACADEMY (OPC) PRIVATE LIMITED",
        "attributes": {
          "city": "C/O RAMDEO PANDIT AT-DULDULIYA PANCH OLAPUR DULDULIA PRIPAINTI BHAGALPUR BR 813209 IN"
        },
        "email": "accuracycomputeracademy@gmail.com"
      },
      {
        "company": "ACCURATE CIVIL CONSTRUCTIONS PRIVATE LIMITED",
        "attributes": {
          "city": "ACC BUILDING, BLOCK 19, WARD NO 8, HIGH SCHOOL RD THIRTHAHALLI TIRTHAHALLI SHIMOGA KA 577432 IN"
        },
        "email": "accurate4587@gmail.com",
        "name": "KRISHNAMURTHY BALEKOPPA SHAKA"
      },
      {
        "company": "ACCURATE ELEVATOR & FIRE PRIVATE LIMITED",
        "attributes": {
          "city": "PLOT NO 97, R.S. NO 414 LAXMINAGAR MAIN ROAD RAJKOT MALVIYANAGAR RAJKOT RAJKOT GJ 360004 IN"
        },
        "email": "accuratefiresafety001@gmail.com",
        "name": "HARDIK BHIMJIBHAI KALARIYA"
      },
      {
        "company": "ACCURATE RELIABLE COMPETENT TESTING LABORATORY PRIVATE LIMITED",
        "attributes": {
          "city": "PLOT NO. 24, KHASRA ROAD, GROUND FLOOR BADLI (NORTH WEST DELHI) DELHI NORTH WEST DELHI DL 110042 IN"
        },
        "email": "Wilson.arclab@gmail.com",
        "name": "RAHUL WILSON"
      },
      {
        "company": "ACCURATE SOLARVENTURES PRIVATE LIMITED",
        "attributes": {
          "city": "S NO 1282, OFF 303, 304 ROHAN TOWER, SNEHANKIT SO DAPODI PUNE CITY PUNE MH 411012 IN"
        },
        "email": "cmd@accurategensets.com",
        "name": "MAHENDRA PARSHURAM YADAV"
      },
      {
        "company": "ACCURATE SOURCE DATA CHECK PRIVATE LIMITED",
        "attributes": {
          "city": "2ND FLOOR NABIRA COMPLEX JAHANGIR CHOWK COURT ROAD SRINAGAR SRINAGAR JK 190001 IN"
        },
        "email": "cs.jeeLani@gmail.com",
        "name": "MASARAT JABEEN"
      },
      {
        "company": "ACCURATEVIBE INDIA PRIVATE LIMITED",
        "attributes": {
          "city": "PLOT NO-699, III F VAISHALI GHAZIABAD GHAZIABAD UP 201019 IN"
        },
        "email": "jatinmadan2012@gmail.com",
        "name": "AMAN VERMA"
      },
      {
        "company": "ACCURATUS REFERENCE MATERIAL PRIVATE LIMITED",
        "attributes": {
          "city": "FF-10 OMAXE SQUARE, PLOT NO-14, JASOLA NEW FRIENDS COLONY NEW DELHI SOUTH DELHI DL 110025 IN"
        },
        "email": "accuratusreferencematerial@gmail.com",
        "name": "SHUBHRA MISHRA"
      },
      {
        "company": "ACCURIS FOUNDATION",
        "attributes": {
          "city": "315A, ROADNO.2 SHANTI NAGAR GOPALPURA BYEPASS DURGAPURA JAIPUR JAIPUR RJ 302018 IN"
        },
        "email": "info@accurisgroup.com",
        "name": "ABHILASHA JAIN"
      },
      {
        "company": "ACCURON FINANCIAL SERVICES PRIVATE LIMITED",
        "attributes": {
          "city": "SF218RATNAHIGHSTREETNR VISHWESHTOWERNARANPURACHA NARANPURA VISTAR AHMADABAD CITY AHMEDABAD GJ 380013 IN"
        },
        "email": "ca.aagamshah18@gmail.com",
        "name": "AAGAM SUNILKUMAR SHAH"
      },
      {
        "company": "ACCURUB CORPTECH INDIA PRIVATE LIMITED",
        "attributes": {
          "city": "GATNO:624/5/6ALANDI PHATA PUNE -NASHIK, HIGHWAY KURULI KHED PUNE MH 410501 IN"
        },
        "email": "csb@accurategroup.co.in",
        "name": "VIKRAMJEET SINGH MADAAN"
      },
      {
        "company": "ACCUSTIX LABORATORY & DIAGNOSTICS PRIVATE LIMITED",
        "attributes": {
          "city": "A-34,TRANSPORT NAGAR, SECTOR-69, NOIDA NOIDA GAUTAM BUDDHA NAGAR UP 201301 IN"
        },
        "email": "Info@accustixdignostics.com",
        "name": "GAURAV CHAUHAN"
      },
      {
        "company": "ACCUTEK TECHNOLOGIES PRIVATE LIMITED",
        "attributes": {
          "city": "450/ 2/ A, GIDC MAKARPURA, M.I. ESTATE VADODARA VADODARA GJ 390010 IN"
        },
        "email": "omega.sps99@gmail.com",
        "name": "SHANKARBHAI PARBHUBHAI SAPAVADIYA"
      },
      {
        "company": "ACCUTRAIN EDUCATION PRIVATE LIMITED",
        "attributes": {
          "city": "B-117, FIRST FLOOR SARVODYA ENCLAVE NEW DELHI SOUTH DELHI DL 110017 IN"
        },
        "email": "meprakhar@gmail.com",
        "name": "HEMAKSHI NARAYAN MEGHANI"
      },
      {
        "company": "ACCUTURN MACHINERS PRIVATE LIMITED",
        "attributes": {
          "city": "4/14, 4/15, VKV NANJAPPA GOUNDER LAYOUT SARAVANAMPATTI COIMBATORE SOUTH COIMBATORE TN 641035 IN"
        },
        "email": "accuturnm@gmail.com",
        "name": "SOUNDARRAJAN BALAJI"
      },
      {
        "company": "ACCUUEMIT IRRIGATION (INDIA) PRIVATE LIMITED",
        "attributes": {
          "city": "102 BLD NO 4,MITTAL IND ESTATE,KURLA ROAD MAROL NAKA MUMBAI MUMBAI MH 400059 IN"
        },
        "email": "accounts@panproducts.co.in",
        "name": "GAURANG PANKAJ GHODI"
      },
      {
        "company": "ACCUVATE HYGIENE SOLUTION PRIVATE LIMITED",
        "attributes": {
          "city": "VILLAGE TIPRA, PO TAKSAL SECTOR-2 PARWANOO KASAULI SOLAN HP 173220 IN"
        },
        "email": "ramesh.amazinghs@gmail.com",
        "name": "RAMESH KUMAR CHANDEL"
      },
      {
        "company": "ACCUVIBE GLOBAL ADVISORY MANAGEMENT CONSULTANCY PRIVATE LIMITED",
        "attributes": {
          "city": "G1 NO 2/1 JANAK RESIDENCY KUMARA KRUPA ROAD BANGALORE G.P.O. BANGALORE NORTH BANGALORE KA 560001 IN"
        },
        "email": "gstcamurari@gmail.com",
        "name": "SHANKARAPPA VENKATARAVANAPPA"
      },
      {
        "company": "ACCUVIR INVESTMENT PRIVATE LIMITED",
        "attributes": {
          "city": "445, 4TH FLOOR GANPATI PLAZA M.I.ROAD JAIPUR JAIPUR RJ 302001 IN"
        },
        "email": "accuvirwealth@gmail.com",
        "name": "VISHAL SHARMA"
      },
      {
        "company": "ACCUWIS ADVISORS PRIVATE LIMITED",
        "attributes": {
          "city": "G-07, THE SUMMIT BUSINESS BAY, ANDHERI KURLA ROAD ANDHERI EAST MUMBAI MUMBAI MH 400069 IN"
        },
        "email": "accuwisadvisors@gmail.com",
        "name": "NIKUNJ KANODIA"
      },
      {
        "company": "ACD EXPORTS (OPC) PRIVATE LIMITED",
        "attributes": {
          "city": "12/27 VALATHALA NSS COLLEGE PO , NEMMARA NEMMARA CHITTUR PALAKKAD KL 678508 IN"
        },
        "email": "nikhilappu794@gmail.com"
      },
      {
        "company": "ACE ACADEMY OF SCIENCE PRIVATE LIMITED",
        "attributes": {
          "city": "P.N.14, FL N.302, B/H NIT GARDEN, KRUSHNARPAN APT AYODHYA NAGAR NAGPUR NAGPUR MH 440024 IN"
        },
        "email": "praveendighore@gmail.com",
        "name": "PRAVIN DAYALU DIGHORE"
      },
      {
        "company": "ACE BUILDEDGE PRIVATE LIMITED",
        "attributes": {
          "city": "113 PUNJBLAND COLONY PATIALA PATIALA PATIALA PB 147001 IN"
        },
        "email": "psidhu05@gmail.com",
        "name": "PAVIT SIDHU"
      },
      {
        "company": "ACE CATHTECH PRIVATE LIMITED",
        "attributes": {
          "city": "PLOT NO. 232 SECTOR-68, IMT,FARIDABAD BALLABGARH BALLABGARH FARIDABAD HR 121004 IN"
        },
        "email": "gauravemanocha@gmail.com",
        "name": "UMESH MUNJAL"
      },
      {
        "company": "ACE FASHION PRODUCTS PRIVATE LIMITED",
        "attributes": {
          "city": "1622, MADURDAH E.K.T KOLKATA KOLKATA WB 700107 IN"
        },
        "email": "atultekriwal@yahoo.co.in",
        "name": "ATUL TEKRIWAL"
      },
      {
        "company": "ACE FLUENCY PRIVATE LIMITED",
        "attributes": {
          "city": "H. NO. 129 HUDA SECTOR-6P HANSI CITY HANSI HISAR HR 125033 IN"
        },
        "email": "contact@acefluency.com",
        "name": "MANMOHAN SAKLANI"
      },
      {
        "company": "ACE GASES TECHNOLOGIES INDIA PRIVATE LIMITED",
        "attributes": {
          "city": "D. NO.40-25-80/1, RS TOWERS MOGHALRAJPURAM VIJAYAWADA (URBAN) KRISHNA AP 520010 IN"
        },
        "email": "Venkata.katikala@acegases.com",
        "name": "VENKATA KATIKALA RAMANJANEYULU"
      },
      {
        "company": "ACE HI-TECH ENGINEERING FOUNDATION",
        "attributes": {
          "city": "GAT NO 1063, PLOT NO AM4 NAIGAON, SHIRWAL NAIGAON KHANDALA SATARA MH 412801 IN"
        },
        "email": "acehitech.engfoundation@gmail.com",
        "name": "NEELAM SAMEER GOYAL"
      },
      {
        "company": "ACE HOSTELS PRIVATE LIMITED",
        "attributes": {
          "city": "NO 49, GROUND FLOOR, MARIAMMAN KOVIL STREET, VEERAMPATTINAM PONDICHERRY PONDICHERRY PY 605007 IN"
        },
        "email": "gauthamboddu@gmail.com",
        "name": "GAUTHAM BODDU"
      },
      {
        "company": "ACE HYDROMOTIVE PRIVATE LIMITED",
        "attributes": {
          "city": "SY.NO. 23/7, CHEEMASANDRA VIRGONAGAR POST VIRGONAGAR BANGALORE NORTH BANGALORE KA 560049 IN"
        },
        "email": "sushant.bhartiya@gmail.com",
        "name": "RAJA RAO VENGALA"
      },
      {
        "company": "ACE IMAGING AND VIDEO SOLUTIONS PRIVATE LIMITED",
        "attributes": {
          "city": "#225, BEML LAYOUT R.R NAGAR RAJARAJESHWARINAGAR BANGALORE SOUTH BANGALORE KA 560098 IN"
        },
        "email": "order2ace@gmail.com",
        "name": "GOVINDA ASHA"
      },
      {
        "company": "ACE INDIA BULLION PRIVATE LIMITED",
        "attributes": {
          "city": "F18 FLR 7 EVEREST APT PLT 156 P M M M MARG TARDEO TULSIWADI MUMBAI MUMBAI MH 400034 IN"
        },
        "email": "mehul1137@hotmail.com",
        "name": "MEHUL DINESH KOTHARI"
      },
      {
        "company": "ACE NIARA PRODUCTS PRIVATE LIMITED",
        "attributes": {
          "city": "4A 1304 VERSOVA SKYLARK T MHADA HIG COMPLEX ANDHERI MUMBAI MUMBAI MH 400053 IN"
        },
        "email": "rohan@ohgsnack.com",
        "name": "MINAL HEMANT GANDHI"
      },
      {
        "company": "ACE OF HOMES REALTY PRIVATE LIMITED",
        "attributes": {
          "city": "A 003 ECC ROAD (TC-288) WHITEFIELD BANGALORE SOUTH BANGALORE KA 560066 IN"
        },
        "email": "singh.shailaja@rediffmail.com",
        "name": "SHAILAJA SINGH"
      },
      {
        "company": "ACE ORTHOPEDICS PRIVATE LIMITED",
        "attributes": {
          "city": "10,PRATHANSARTHI-II MANISAGAR SOC-II, NR.SURD THALTEJ ROAD AHMADABAD CITY AHMEDABAD GJ 380054 IN"
        },
        "email": "aceortho27@gmail.com",
        "name": "CHIRAG RAMDAS AMIN"
      },
      {
        "company": "ACE REALINFRA PRIVATE LIMITED",
        "attributes": {
          "city": "B-177/1, F/F OKHLA INDUSTRIAL AREA PHA KALKAJI NEW DELHI SOUTH DELHI DL 110019 IN"
        },
        "email": "JUSTTOSANJEEV@GMAIL.COM",
        "name": "SANJEEV MALHOTRA"
      },
      {
        "company": "ACE SPECTRUM CONSULTANTS PRIVATE LIMITED",
        "attributes": {
          "city": "9TH MAIN ROAD 34TH CROSS ROAD JAYANGAR III BLOCK BANGALORE SOUTH BANGALORE KA 560011 IN"
        },
        "email": "ceo@scooev.com",
        "name": "AMIT CLOSEPET SURESH"
      },
      {
        "company": "ACE TEST LABS RESEARCH PRIVATE LIMITED",
        "attributes": {
          "city": "PLOT NO. 68, HSIIDC INDUSTRIAL ESTATE, RAI SONIPAT SONIPAT SONIPAT HR 131001 IN"
        },
        "email": "cto@acetestgroup.com",
        "name": "HARINDER PAL SINGH"
      },
      {
        "company": "ACE THERAPEUTICS PRIVATE LIMITED",
        "attributes": {
          "city": "310,2ND FLOOR HRBR 3RD BLOCK,BANGALORE HORAMAVU BANGALORE NORTH BANGALORE KA 560043 IN"
        },
        "email": "bangaripraveen50@gmail.com",
        "name": "BANGARI PRAVEEN KUMAR"
      },
      {
        "company": "ACE TOOLS PRIVATE LIMITED",
        "attributes": {
          "city": "PLOT NO 220(219 &AMP; 220) KH.NO.58/2 GROUND FLOOR RITHALA DELHI NORTH WEST DELHI DL 110085 IN"
        },
        "email": "worliwalam@gmail.com",
        "name": "MUSTAFA JUZAR WORLIWALA"
      },
      {
        "company": "ACE TV MEDIA PRIVATE LIMITED",
        "attributes": {
          "city": "B-154 GALI NO-2 INDRA VIH TRIPAL FACTORY DELHI SABHAPUR DELHI NORTH EAST NORTH WEST DELHI DL 110094 IN"
        },
        "email": "alizaidi3400@gmail.com",
        "name": "SAMAR ABBAS"
      },
      {
        "company": "ACE URBAN PROJECTS PRIVATE LIMITED",
        "attributes": {
          "city": "703, RAJENDRA RESIDENCY RUPASPUR, DHANAUT, PATNA DHANAUT PHULWARI PATNA BR 801506 IN"
        },
        "email": "aceurbanprojects@gmail.com"
      },
      {
        "company": "ACE VENDING PRIVATE LIMITED",
        "attributes": {
          "city": "FLAT NO. 6, MAYURA APT., SN.35/1/2., MANIK BAUG, ANANDNAGAR (PUNE) PUNE CITY PUNE MH 411051 IN"
        },
        "email": "acevendingpune@gmail.com",
        "name": "PADMAJA SADANAND KULKARNI"
      },
      {
        "company": "ACE24 SERVICES PRIVATE LIMITED",
        "attributes": {
          "city": "D1-0801 OMEGA WINDSON GREENS APT GRAM UTTARDHAU ANAURA KALAN LUCKNOW LUCKNOW UP 226028 IN"
        },
        "email": "lnpathak12@hotmail.com",
        "name": "NEHA BHARTI"
      },
      {
        "company": "ACEACT CONSULTING (OPC) PRIVATE LIMITED",
        "attributes": {
          "city": "A 7-0201 ,2ND FLOOR, CASA GREEN 1 , NOIDA SECTOR 62 NOIDA GAUTAM BUDDHA NAGAR UP 201309 IN"
        },
        "email": "adityagoswami1003@gmail.com"
      },
      {
        "company": "ACEASIS WELLNESS SOLUTION PRIVATE LIMITED",
        "attributes": {
          "city": "23/A 69E, BLOCK D RAMTANU LAHIRI SARANI NEW ALIPORE KOLKATA KOLKATA WB 700053 IN"
        },
        "email": "aceasiswellness@gmail.com",
        "name": "SUDIPTO KHARA"
      },
      {
        "company": "ACEAVIASION SOLUTION PRIVATE LIMITED",
        "attributes": {
          "city": "NO 2385 1ST FLOOR 60 FEETROAD E BLOCK SAHAKARANAGAR P.O BANGALORE NORTH BANGALORE KA 560092 IN"
        },
        "email": "upgrahaspacetechnologies@gmail.com",
        "name": "RAJINDER RANA"
      },
      {
        "company": "ACEBERG HEAT EXCHANGERS PRIVATE LIMITED",
        "attributes": {
          "city": "A,HNO:806PARVASAAKSHICHS SHIVSAILANENEARLOTUSHOSP SANGAVI PUNE CITY PUNE MH 411027 IN"
        },
        "email": "ppeswani@gmail.com",
        "name": "PURSHOTTAM GOBINDRAM PESWANI"
      },
      {
        "company": "ACECBM PRIVATE LIMITED",
        "attributes": {
          "city": "16/5,KARKHANA BAGH MATHURA ROAD FARIDABAD SECTOR 16A FARIDABAD FARIDABAD HR 121002 IN"
        },
        "email": "info@arcmachinetools.com",
        "name": "RAJESH BHALLA"
      },
      {
        "company": "ACECORP PROPERTIES PRIVATE LIMITED",
        "attributes": {
          "city": "GROUND FLOOR, FLAT NO.-GC 48 SREEDHAR ROY ROAD TILJALA TILJALA SOUTH 24 PARGANAS WB 700039 IN"
        },
        "email": "RSROMI@GMAIL.COM",
        "name": "UTPAL KHAN"
      },
      {
        "company": "ACEDAR INFRA PRIVATE LIMITED",
        "attributes": {
          "city": "C/O KAMBHAMPATI SIREESHA POTLURI RESIDENY VJ POLYTECHNIC VIJAYAWADA (URBAN) KRISHNA AP 520008 IN"
        },
        "email": "exe.directors@acedarinfra.com",
        "name": "MANJEERA LAKSHMI NIMISHA GUDE"
      },
      {
        "company": "ACEDEFI TECHNOLOGIES PRIVATE LIMITED",
        "attributes": {
          "city": "FLT J-71, 07TH FLR, JALVAYU VIHA, A S MARG MUMBAI MUMBAI MUMBAI MH 400076 IN"
        },
        "email": "manu.kumar@acedefi.co.in",
        "name": ". MANU"
      },
      {
        "company": "ACEEKA CARE PRODUCTS PRIVATE LIMITED",
        "attributes": {
          "city": "I-31, VRUSHALI SHILP CHSL CHIKOOWADI, LINK ROAD, BORIVALI WEST BORIVALI WEST MUMBAI MH 400092 IN"
        },
        "email": "acpatel65@gmail.com",
        "name": "SHOBHA AMBALAL PATEL"
      },
      {
        "company": "ACEELS ADORNMENT PRIVATE LIMITED",
        "attributes": {
          "city": "C/O. SHANKARJI B. THAKOR MALEKPUR,B/H. BUS STATION BALAD KHERALU MAHESANA GJ 384325 IN"
        },
        "email": "Infoservice.aceels@gmail.com"
      },
      {
        "company": "ACEFLIX HR SERVICES PRIVATE LIMITED",
        "attributes": {
          "city": "HOUSE NO 161 DR AMBEDKAR HSG SOC ALANDI ROAD YERWADA PUNE CITY PUNE MH 411006 IN"
        },
        "email": "ashishnanaware520@gmail.com"
      },
      {
        "company": "ACEGLOBALS STUDY ABROAD EDUCATION PRIVATE LIMITED",
        "attributes": {
          "city": "F-7/0:3 SECTOR 7 SANPADA DARAVE THANE THANE MH 400706 IN"
        },
        "email": "aceglobals.group@gmail.com",
        "name": "ARHAN KHAN"
      },
      {
        "company": "ACEGOAT TECHNOLOGIES PRIVATE LIMITED",
        "attributes": {
          "city": "NO.154/20,T1, ROYAL SPACE 5TH MAIN, 7TH SECTOR, HSR LAYOUT BANGALORE SOUTH BANGALORE KA 560102 IN"
        },
        "email": "VIGOROSUTM369@outlook.com",
        "name": "NARAYANAPPA SHASHIKUMAR"
      },
      {
        "company": "ACEHUB SOLUTIONS PRIVATE LIMITED",
        "attributes": {
          "city": "32, CHOWRINGHEE ROAD, OM TOWER,7TH FLOOR, UNIT 706 RUSSEL STREET KOLKATA KOLKATA WB 700071 IN"
        },
        "email": "snehasis.pro@gmail.com",
        "name": "SHREYASI SETH"
      },
      {
        "company": "ACEHUNT CONSULTING PRIVATE LIMITED",
        "attributes": {
          "city": "F-10,FIRST FLOOR, GALI NO 4/6,OKHLA ZAKIR NAGAR NEW DELHI SOUTH DELHI DL 110025 IN"
        },
        "email": "nadeemiqbal1983@gmail.com",
        "name": "NADEEM IQBAL"
      },
      {
        "company": "ACEKING GARMENTS PRIVATE LIMITED",
        "attributes": {
          "city": "5/15 ERUMAIKATTUTHOTTAM, AVINASHILINGAM PALAYAM, RAKKIAPALAYAM METTUPALAYAM COIMBATORE TN 641654 IN"
        },
        "email": "acekingoffice@gmail.com",
        "name": "CHINNAYAGOUNDER ESWARAN"
      },
      {
        "company": "ACELINE LOGISTICS PRIVATE LIMITED",
        "attributes": {
          "city": "5/104 VASANT VIHAR GANDHI NAGAR DOMBIVALI E DOMBIVALI KALYAN THANE MH 421201 IN"
        },
        "email": "pramod@acelinelogistics.co.in",
        "name": "PRAMOD NANU KUNIYIL"
      },
      {
        "company": "ACEMICROBES PRIVATE LIMITED",
        "attributes": {
          "city": "BASE FLOWER, 256, RAM NAGAR KARAJGAON CHANDUR BAZAR AMRAVATI MH 444809 IN"
        },
        "email": "subodhhingane408@gmail.com",
        "name": "SUBODH AJAYPANT HINGANE"
      },
      {
        "company": "ACENCORE TECHNOLOGIES PRIVATE LIMITED",
        "attributes": {
          "city": "A-68 F/F RAM DUTT ENCLAVE NEAR LAL MANDIR UTTAM NAGAR NEW DELHI WEST DELHI DL 110059 IN"
        },
        "email": "suneja.garvit@gmail.com",
        "name": "MOHSIN KHURSHID NAQSHI"
      },
      {
        "company": "ACENDIA INFRA PRIVATE LIMITED",
        "attributes": {
          "city": "SY NO.12, WHITE FIELD LINGAMPALLI SERILINGAMPALLY K.V.RANGAREDDY TG 500019 IN"
        },
        "email": "narsingraopuppala3939@gmail.com",
        "name": "KRANTHI KUMAR PUPPALA"
      },
      {
        "company": "ACENT HEALTHCARE SERVICES PRIVATE LIMITED",
        "attributes": {
          "city": "HOUSE NO1 SFS FLATS DR MUKHERJEE NAGAR G.T.B.NAGAR DELHI NORTH WEST DELHI DL 110009 IN"
        },
        "email": "himanshu_rajora@yahoo.com",
        "name": "HIMANSHU RAJORA"
      },
      {
        "company": "ACENT INTERNATIONAL SERVICES PRIVATE LIMITED",
        "attributes": {
          "city": "HOUSE NO1 SFS FLATS DR MUKHERJEE NAGAR G.T.B.NAGAR DELHI NORTH WEST DELHI DL 110009 IN"
        },
        "email": "nitinveerma85@gmail.com",
        "name": "HIMANSHU RAJORA"
      },
      {
        "company": "ACEONE CLOUD TECHNOLOGIES PRIVATE LIMITED",
        "attributes": {
          "city": "BVM-43, BOUGAINVILLA MARG DLF DLF QE DLF QE GURGAON HR 122002 IN"
        },
        "email": "SANGEETA@ACEONE.NET",
        "name": "SANGEETA CHHABRA"
      },
      {
        "company": "ACEORB BRANDING PRIVATE LIMITED",
        "attributes": {
          "city": "14, GF, SF YELACHENAHALLI BANGALORE SOUTH BANGALORE KA 560078 IN"
        },
        "email": "rshivakumar09@gmail.com",
        "name": "RUDRA MURTHY SHIVAKUMAR"
      },
      {
        "company": "ACEPRO INSTRUMENTS INDUSTRIES PRIVATE LIMITED",
        "attributes": {
          "city": "5-5-35/205A, INDUSTRIAL ESTATE, SHAKTIPURAM VIVEKANANDANAGAR COLONY BALANAGAR HYDERABAD TG 500072 IN"
        },
        "email": "aceuniverse@gmail.com",
        "name": "CHETAN SACHDEVA"
      },
      {
        "company": "ACER CREDIT RATING PRIVATE LIMITED",
        "attributes": {
          "city": "UNIT 808, 8TH FLR, SEC-30 SIGNATURE TOWER-B, GURGAON BASAI ROAD GURGAON HR 122001 IN"
        },
        "email": "acer.ratings@gmail.com",
        "name": "KAMLESH KUMAR TANEJA"
      },
      {
        "company": "ACEREX LOGISTICS PRIVATE LIMITED",
        "attributes": {
          "city": "71, FLR 2, VINCHAND NIWAS ACHARYA DONDE MARG, SEWRI MUMBAI MUMBAI MH 400015 IN"
        },
        "email": "logisticsaerowave@gmail.com",
        "name": "DEEPAK RAJNESHKUMAR GUPTA"
      },
      {
        "company": "ACEROX SAASTECH PRIVATE LIMITED",
        "attributes": {
          "city": "SHOP 2 PLOT NO 4 GRD FLR POCKET 5 DDA SEC A-10 NARELA DELHI NORTH WEST DELHI DL 110040 IN"
        },
        "email": "seedscallai@gmail.com",
        "name": "SHUBHAM KHATRI"
      },
      {
        "company": "ACERPURE INDIA CE PRIVATE LIMITED",
        "attributes": {
          "city": "EMBASSY HEIGHTS,6TH FLOOR NO. 13, MAGRATH ROAD, RICHMOND TOWN BANGALORE NORTH BANGALORE KA 560025 IN"
        },
        "email": "Vasudeva.G@acer.com",
        "name": "HARISH KUMAR KOHLI"
      },
      {
        "company": "ACERTEC PRODUCTS PRIVATE LIMITED",
        "attributes": {
          "city": "HD-061, WEWORK BERGER DELHI ONE, C001/A2 NOIDA SECTOR 16 NOIDA GAUTAM BUDDHA NAGAR UP 201301 IN"
        },
        "email": "shreya@assured-products.co.uk",
        "name": "PETER GRAHAM"
      },
      {
        "company": "ACES AI ENTERPRISE SOLUTIONSPRIVATE LIMITED",
        "attributes": {
          "city": "ARUN KUMAR JI, 401, EMERALD TOWER UDAIPUR CITY GIRWA UDAIPUR RJ 313001 IN"
        },
        "email": "maheshwari.tapan@gmail.com",
        "name": "TAPAN MAHESHWARI"
      },
      {
        "company": "ACESPEAR POWDER PROCESSING PRIVATE LIMITED",
        "attributes": {
          "city": "C/O MERUBHAI ODHHABHAI BHATI, JAMBUDA MOTI JAGDHAR MAHUVA BHAVNAGAR GJ 364295 IN"
        },
        "email": "merpradip01@gmail.com",
        "name": "GAMBHIRBHAI MERUBHAI MER"
      },
      {
        "company": "ACETECH ANALYTICAL LAB (OPC) PRIVATE LIMITED",
        "attributes": {
          "city": "PLOT NO. 90/A, SECTOR-2 GEETANJALI NAGAR RAIPUR RAIPUR RAIPUR CT 492001 IN"
        },
        "email": "saritapanigrahi999@gmail.com"
      },
      {
        "company": "ACETECH VENTURES LIMITED",
        "attributes": {
          "city": "1234/C/1 TO 1234/C/6 GALA BLDG B-5 PRITHVI COMPLEX ANJUR BHIWANDI THANE MH 421302 IN"
        },
        "email": "acetechventures1@gmail.com",
        "name": "VIJAY CHIRANJILAL SARAOGI"
      },
      {
        "company": "ACETERNITY CONSTRUCTION PRIVATE LIMITED",
        "attributes": {
          "city": "F-401, SUN-SHINE PALM COMPLEX, AMBA BARI JAIPUR JAIPUR RJ 302039 IN"
        },
        "email": "hi@manuarora.in",
        "name": "MANU ARORA"
      },
      {
        "company": "ACETEX CHEM INDIA PRIVATE LIMITED",
        "attributes": {
          "city": "19/1, S.NO 231/1 SUDAMA ESTATE NAROL DASKROI AHMEDABAD GJ 382405 IN"
        },
        "email": "nsabandassociates26@gmail.com",
        "name": "ARCHANABEN SANJAYKUMAR GARG"
      },
      {
        "company": "ACEWORK SUITE INNOVATIONS PRIVATE LIMITED",
        "attributes": {
          "city": "A-304, SAKI VIHAR CHS LTD BLDG NO 1, VIHAR COMPLEX, MUMBAI MUMBAI MUMBAI MH 400072 IN"
        },
        "email": "pro.affix@gmail.com",
        "name": "PRADEEP RAJENDRA PRASAD MOURYA"
      },
      {
        "company": "ACEY CONTROLFLEX ENGINEERING PRIVATE LIMITED",
        "attributes": {
          "city": "PLOT 104 105 GIDC ANTALIA BILLIMORA ANTALIA GANDEVI NAVSARI GJ 396325 IN"
        },
        "email": "aceycontrolflex@gmail.com",
        "name": "ADITYA MAYANK CHOKSI"
      },
      {
        "company": "ACFINO VD PRIVATE LIMITED",
        "attributes": {
          "city": "SF 06, NO 337 KARUNA COMPLEX SAMPIGE RD MALLESWARAM BANGALORE NORTH BANGALORE KA 560003 IN"
        },
        "email": "sandeep.vishnudaya@gamil.com",
        "name": "KODANGE DAYANANDA ."
      },
      {
        "company": "ACH GREEN RECYCLING PRIVATE LIMITED",
        "attributes": {
          "city": "C/OJAGDISHSINH VIKRAMSIN JADEJA, BH HANUMAN MANDIR BHUJ BHUJ KACHCHH GJ 370001 IN"
        },
        "email": "akshay.rao1986@gmail.com",
        "name": "HEMANTSINGH ANIRUDHSHIH JADEJA"
      },
      {
        "company": "ACHALA DAIRY PRODUCTS PRIVATE LIMITED",
        "attributes": {
          "city": "DIWAN MOHALLA, NAUJAR GHA NEAR KALI SATHAN PATNA CITY SAMPATCHAK PATNA BR 800008 IN"
        },
        "email": "kumar.pat03@gmail.com",
        "name": "SURAJ PRAKASH SRIVASTAVA"
      },
      {
        "company": "ACHARANA FARMERS PRODUCER COMPANY LIMITED",
        "attributes": {
          "city": "H.NO.8-72, RAMALAYAM STREET TADEPALLE GUNTUR GUNTUR AP 522501 IN"
        },
        "email": "sujatha.aca669@gmail.com",
        "name": "YASHEELA KUNAPAREDDY"
      },
      {
        "company": "ACHARWALA FOODS PRIVATE LIMITED",
        "attributes": {
          "city": "H NO 433/2 KOPARDETAL KARVEER KALE (KOLHAPUR) PANHALA KOLHAPUR MH 416205 IN"
        },
        "email": "sunilburud2508@gmail.com",
        "name": "PANDURANG ANANDA BURUD"
      },
      {
        "company": "ACHARYA AYUR SUGEYA PRIVATE LIMITED",
        "attributes": {
          "city": "3/1186, DARSANA BUILDING NEAR PRIVATE BUS STAND NEDUMKANDAM UDUMBANCHOLA IDUKKI KL 685553 IN"
        },
        "email": "athiramolpk27@gmail.com",
        "name": "ATHIRAMOL PUNNAKKUZHIYIL KUNJUMON"
      },
      {
        "company": "ACHARYA KALYAN FOUNDATION",
        "attributes": {
          "city": "C/O. SUSHIL KUMAR SHUKLA RAMPUR HATHIGAHAN PHAPHAMAU ALLAHABAD UP 211013 IN"
        },
        "email": "sankalpnashamuktifoundation@gmail.com",
        "name": "SUSHIL KUMAR SHUKLA"
      },
      {
        "company": "ACHARYA MASTRAM PRIVATE LIMITED",
        "attributes": {
          "city": "H. NO. 169, MANIRAM MARG STREET NO. 10, RISHIKESH RISHIKESH RISHIEKSH DEHRADUN UR 249201 IN"
        },
        "email": "arjun.swaraj@live.in",
        "name": "ARJUN SWARAJ"
      },
      {
        "company": "ACHARYA SHREE VIDHYA SAGAR INDUSTRIES PRIVATE LIMITED",
        "attributes": {
          "city": "SHUBHARAMBH MAGANJ WARD NO .02 STATION ROAD DAMOH DAMOH DAMOH MP 470661 IN"
        },
        "email": "A62604628@gmail.com",
        "name": "AJIT KUMAR JAIN"
      },
      {
        "company": "ACHARYA VARDAN ASTROVASTU CONSULTANCY PRIVATE LIMITED",
        "attributes": {
          "city": "SHOP AT KAVITA NAGAR AVANTI VIHAR RAIPUR RAIPUR RAIPUR CT 492001 IN"
        },
        "email": "abhi221sharma@gmail.com",
        "name": "RAHUL VASUDEV BONDE"
      },
      {
        "company": "ACHARYAPURAM EDUCATION FOUNDATION",
        "attributes": {
          "city": "2243, BLUEBELL TOWER, GAUR SAUNDARYAM, GH-05C, GAUTAM BUDDHA NAGAR GAUTAM BUDDHA NAGAR GAUTAM BUDDHA NAGAR UP 201318 IN"
        },
        "email": "doctorshaanu7@gmail.com",
        "name": "RAHUL DEV PANDEY"
      },
      {
        "company": "ACHATIUS NETWORKS PRIVATE LIMITED",
        "attributes": {
          "city": "PL.NO.154B, 5TH CROSS ST.KUBERA NAGAR EXTN MADIPAKKAM SAIDAPET KANCHIPURAM TN 600091 IN"
        },
        "email": "Salomi@aarahtechnologies.com",
        "name": "VINIT ROGER SALOMI JOSPHINE"
      },
      {
        "company": "ACHCHI SILVER SANJAARAMS PRIVATE LIMITED",
        "attributes": {
          "city": "S.F.NO.58/2 D.NO.1/1 LENIN STREET VILANKURICHI COIMBATORE NORTH COIMBATORE TN 641035 IN"
        },
        "email": "prithivraj2929@gmail.com",
        "name": "MYLSWAMY PRITHIVRAJ"
      },
      {
        "company": "ACHDYZLERN SERVICES (OPC) PRIVATE LIMITED",
        "attributes": {
          "city": "#165, VELANKANNI ROAD, TH G CIRCLE, JALAHALLI POST JALAHALLI BANGALORE NORTH BANGALORE KA 560013 IN"
        },
        "email": "achievance.als@gmail.com"
      },
      {
        "company": "ACHELIEF PRIVATE LIMITED",
        "attributes": {
          "city": "PLOT NO. 52, VETHATHIRINAGAR,ELLAIKUDI PAPPAKURICHI KATTUR TIRUCHIRAPPALLI TIRUCHIRAPPALLI TN 620019 IN"
        },
        "email": "roahanind@gmail.com",
        "name": "ROAHAN B"
      },
      {
        "company": "ACHHI ATTICS PRIVATE LIMITED",
        "attributes": {
          "city": "3/433A, VENKATESWARA NAGA 16TH STREET, KOTTIVAKKAM, VALMIKI NAGAR MYLAPORE - TRIPLICANE CHENNAI TN 600041 IN"
        },
        "email": "mangai@smtt.com"
      },
      {
        "company": "ACHHYUT SUNBEAM PRIVATE LIMITED",
        "attributes": {
          "city": "67-A, CANTONMENT STATION ROAD BAREILLY BAREILLY BAREILLY UP 243001 IN"
        },
        "email": "bhardwajreliantenergy@gmail.com",
        "name": "ADARSH TEWARI"
      },
      {
        "company": "ACHIAVE DESIGN PRIVATE LIMITED",
        "attributes": {
          "city": "C/O ANANDA BALA DE TENTULIA, PO JAHANPUR JAHANPUR JHARGRAM WEST MIDNAPORE WB 721517 IN"
        },
        "email": "vinayaktejaswani@gmail.com",
        "name": "SOURAV KUMAR DE"
      },
      {
        "company": "ACHIEVE & IMPACT WELFARE FOUNDATION",
        "attributes": {
          "city": "E-465, GALI NO.-17 ASHOK NAGAR, SHAHDARA NORTH EAST DELHI NORTH EAST DELHI NORTH EAST DELHI DL 110093 IN"
        },
        "email": "aspireimpactfoundation@gmail.com",
        "name": "MUKUL CHAUHAN"
      },
      {
        "company": "ACHIEVERS CLUB FOUNDATION",
        "attributes": {
          "city": "PROPERTY NO 74 BLOCK G SECTOR 39 NOIDA NOIDA GAUTAM BUDDHA NAGAR UP 201301 IN"
        },
        "email": "ay1975mailbox@gmail.com",
        "name": "KRISHNA ARORA"
      },
      {
        "company": "ACHIEVERS HAPPY SHELTERS (OPC) PRIVATE LIMITED",
        "attributes": {
          "city": "SF NO.20/1B ,DOOR NO.194, PH ROAD, MADURAVOYAL POONAMALEE TIRUVALLUR TN 600095 IN"
        },
        "email": "achieverdrbabu@gmail.com"
      },
      {
        "company": "ACHIEVERS PRACTICE AND QUESTIONNAIRE PRIVATE LIMITED",
        "attributes": {
          "city": "25, BAPAT NAGAR OPP VAIBHAV LAXMI APPT, CHANDRAPUR CHANDRAPUR HO CHANDRAPUR MH 442401 IN"
        },
        "email": "swati86.singhal@gmail.com",
        "name": "SWATI GANESH SINGHAL"
      },
      {
        "company": "ACHILLEX AIRA INTELLIGENCE PRIVATE LIMITED",
        "attributes": {
          "city": "NO/139, 4TH CROSS,BEML L/O,THUBARAHALLI WHITEFIELD BANGALORE SOUTH BANGALORE KA 560066 IN"
        },
        "email": "airaintelligence@gmail.com",
        "name": "CHITYALA SRINIVASA SAIKIRAN"
      },
      {
        "company": "ACHINTYA EDUCATIONAL ASSOCIATION",
        "attributes": {
          "city": "C/O RAM KRISHNA YADAV, K2 H.NO69, DEFENCE ENCLAV MAHIPALPUR NEW DELHI SOUTH WEST DELHI DL 110037 IN"
        },
        "email": "arjunyadav2008@gmail.com",
        "name": "KUMAR MANISH"
      },
      {
        "company": "ACHINTYA IFSC PRIVATE LIMITED",
        "attributes": {
          "city": "UNIT NO. 21 THE PLATFORM GROUND FLOOR 11T2 BLOCK11 GIFT CITY GIFT SEZ GANDHI NAGAR GJ 382355 IN"
        },
        "email": "ifsc@achintya.co.in",
        "name": "ABHISHEK AGARWAL"
      },
      {
        "company": "ACHINTYAAH PROJECTS PRIVATE LIMITED",
        "attributes": {
          "city": "NO 2287, 2ND FLOOR, 14TH MAIN ROAD, HAL 2ND STAGE, INDIRANAGAR (BANGALORE) BANGALORE NORTH BANGALORE KA 560038 IN"
        },
        "email": "drsreetharanm77@gmail.com",
        "name": "MURTHY SREETHARAN"
      },
      {
        "company": "ACHINTYAAH VENTURES PRIVATE LIMITED",
        "attributes": {
          "city": "NO 2287, 2ND FLOOR, 14TH MAIN ROAD, HAL 2ND STAGE INDIRANAGAR (BANGALORE) BANGALORE NORTH BANGALORE KA 560038 IN"
        },
        "email": "achintyaahventures@gmail.com",
        "name": "MURTHY SREETHARAN"
      },
      {
        "company": "ACHINTYO ENGINEERING PRIVATE LIMITED",
        "attributes": {
          "city": "SAI ARCADIA, 434,1STSTAGE 4TH BLOCK, HBR LAYOUT,ORR KALYANANAGAR BANGALORE NORTH BANGALORE KA 560043 IN"
        },
        "email": "mail@achintyo.com",
        "name": "SHYAM NARAYANAN"
      },
      {
        "company": "ACHIVERS KINGDOM FOODS INDIA PRIVATE LIMITED",
        "attributes": {
          "city": "VPXII/746, VENGOLA JN KARSHAKA GRANDHALAYAMROAD VENGOLA KUNNATHUNAD ERNAKULAM KL 683556 IN"
        },
        "email": "foodplusorganics@gmail.com",
        "name": "ANIMOOTTIL BASHEER RESEENA"
      },
      {
        "company": "ACHON DESIGN TECHNOLOGIES PRIVATE LIMITED",
        "attributes": {
          "city": "22 A, GANDHI NAGAR SHANKAR NAGAR NAGPUR NAGPUR MH 440010 IN"
        },
        "email": "conceptsinfra@gmail.com",
        "name": "VIKRANT VIJAYRAO BHUTE"
      },
      {
        "company": "ACHOSYX PRIVATE LIMITED",
        "attributes": {
          "city": "C/O HAKAM RAY VILLAGE BEHARWALA KHURD ELLENABAD SIRSA SIRSA HR 125102 IN"
        },
        "email": "Saharanrenu02@gmail.com",
        "name": "RENU BALA SAHARAN"
      },
      {
        "company": "ACHSAH CONSULTANCY SERVICES PRIVATE LIMITED",
        "attributes": {
          "city": "DNO 5-49/1 TUMMALAMMA NAGAR VEGESWARAPURAM VEGESWARAPURAM TALLAPUDI MANDAL WEST GODAVARI AP 534340 IN"
        },
        "email": "saisurekhakadiyam@gmail.com",
        "name": "KADIYAM SAI SUREKHA"
      },
      {
        "company": "ACHUTAN SOLUTIONS PRIVATE LIMITED",
        "attributes": {
          "city": "H.NO: 11-12/18 MALLANNA B AIE BOLLARAM R.C.PURAM MEDAK TG 502325 IN"
        },
        "email": "betajohn1234@gmail.com",
        "name": "KUNTHELI SRI LAKSHMI"
      },
      {
        "company": "ACHWANI HOSPITALITY PRIVATE LIMITED",
        "attributes": {
          "city": "NO.94, R.V. ROAD BASAVANAGUDI BANGALORE SOUTH BANGALORE KA 560004 IN"
        },
        "email": "achwanihospitality@gmail.com",
        "name": "SAMAY ACHWANI"
      },
      {
        "company": "ACHYUTA CRAFT PAPER (OPC) PRIVATE LIMITED",
        "attributes": {
          "city": "C/O MRS SHANTHAMMA KANAJENAHA THIPPENAHALLI CHICKBALLAPUR CHICKBALLAPUR CHIKKABALLAPUR KA 562101 IN"
        },
        "email": "kanyaramesh456@gmail.com"
      },
      {
        "company": "ACHYUTA EDUCATION PRIVATE LIMITED",
        "attributes": {
          "city": "NARIROUD KUBHARAVADA RAMDEVNAGAR BHAVNAGAR BHAVNAGAR KUMBHARWADA BHAVNAGAR BHAVNAGAR GJ 364006 IN"
        },
        "email": "Ananata544@gmail.com",
        "name": "PANKAJ BHARATBHAI CHAUHAN"
      },
      {
        "company": "ACHYUTA FINSPECIALIST PRIVATE LIMITED",
        "attributes": {
          "city": "SATYA NIKET, BC-260, SECTOR-I, SALT LAKE CITY BIDHAN NAGAR SALTLAKE NORTH 24 PARGANAS WB 700064 IN"
        },
        "email": "achyutafinspecialist@gmail.com",
        "name": "BINOD KUMAR DROLIA"
      },
      {
        "company": "ACHYUTA POLYMERS PRIVATE LIMITED",
        "attributes": {
          "city": "PLOT NO 664 AND 665 ANTHIREDDYGUDA ROAD KOTHUR KOTHUR MAHABUB NAGAR TG 509228 IN"
        },
        "email": "achyutapolymers@gmail.com",
        "name": "POOJA SAHANI"
      },
      {
        "company": "ACHYUTA PROPERTIES PRIVATE LIMITED",
        "attributes": {
          "city": "B-801,VISHWAJEET PARADISE BUILDING NO. 2, CHIKHLOLI NETAJI BAZAR AMBARNATH THANE MH 421505 IN"
        },
        "email": "shetty.devmangalore@gmail.com",
        "name": "DEVENDRA SHETTY"
      },
      {
        "company": "ACHYUTAM HOTEL AND RESORT PRIVATE LIMITED",
        "attributes": {
          "city": "105 LAXMAN PALACE 19 V.S. BLOCK, SHAKARPUR EAST DELHI NEW DELHI NEW DELHI DL 110092 IN"
        },
        "email": "info.achyutamhotel@gmail.com",
        "name": "SUNITA SINGHAL"
      },
      {
        "company": "ACHYUTAM MULTIVERSITY FOUNDATION",
        "attributes": {
          "city": "SHANTINIKETAN OROOM ELIVE FLAT NO.501, SHUBH PARK KANKOT RAJKOT RAJKOT GJ 360005 IN"
        },
        "email": "achyutammultiversityfoundation@gmail.com",
        "name": "MEHUL PRAVINBHAI RUPANI"
      },
      {
        "company": "ACHYUTAM MULTIVERSITY PRIVATE LIMITED",
        "attributes": {
          "city": "SHANTINIKETAN OROOM ELIVE FLAT NO. 501, SHUBHPARK KANKOT RAJKOT RAJKOT GJ 360005 IN"
        },
        "email": "achyutammultiversitypvtltd@gmail.com",
        "name": "MEHUL PRAVINBHAI RUPANI"
      },
      {
        "company": "ACHYUTAM RESTAURANT & CAFE PRIVATE LIMITED",
        "attributes": {
          "city": "PLOT NO - 161 EKAMRA MARG, UNIT 6 BHUBANESWAR G.P.O. BHUBANESWAR KHORDA OR 751001 IN"
        },
        "email": "deepakpanda352@gmail.com",
        "name": "LILMUN SWAIN"
      },
      {
        "company": "ACHYUTRAO PATIL SHINDE AGRO FOOD AND PRODUCTS PRIVATE LIMITED",
        "attributes": {
          "city": "H NO 80/2 JOMEGAON LOHA LOHA NANDED MH 431708 IN"
        },
        "email": "shindeavinashachut@gmail.com",
        "name": "AVINASH ACHYUTRAO SHINDE"
      },
      {
        "company": "ACI GLOBAL LOGISTICS PRIVATE LIMITED",
        "attributes": {
          "city": "3, LEO APARTMENTS, OFF ST JOHN B ROAD BANDRA WEST BANDRA WEST MUMBAI MUMBAI MH 400050 IN"
        },
        "email": "pradeep.menon@aci.ae",
        "name": "LIONEL JOHN SMITH"
      },
      {
        "company": "ACIA LIFESCIENCE PRIVATE LIMITED",
        "attributes": {
          "city": "B-1/40A, FIRST FLOOR, SEWAK PARK EXTN. UTTAM NAGAR NEW DELHI WEST DELHI DL 110059 IN"
        },
        "email": "acia.lifescience@gmail.com",
        "name": "RAKESH RATAN"
      },
      {
        "company": "ACIATIX TECHNOLOGIES PRIVATE LIMITED",
        "attributes": {
          "city": "FL NO 302 S NO 7/10 ANNA AWAS NR GREEN VALLEY VADGAON BUDRUK HAVELI PUNE MH 411041 IN"
        },
        "email": "sudhirbagal@gmail.com",
        "name": "SUDHIR RAMCHANDRA BAGAL"
      },
      {
        "company": "ACIC - KIF PILLGRIMAGEDUCATION PRIVATE LIMITED",
        "attributes": {
          "city": "ACIC - KIF KARE,2ND FLOOR ANAND NAGAR, KRISHNANKOIL S.RAMACHANDRAPURAM SRIVILLIPUTHUR VIRUDHUNAGAR TN 626126 IN"
        },
        "email": "pillgrimageducation@gmail.com",
        "name": "SRINIVASAN SESHADHRI"
      },
      {
        "company": "ACIC - UPES ATAL INNOVATION COUNCIL",
        "attributes": {
          "city": "5 FLOOR, ACADEMIC BLOCK-B KNOWLEDGE ACRES: KANDOLI PREM NAGAR (DEHRADUN) DEHRADUN DEHRADUN UR 248007 IN"
        },
        "email": "acic.upes@upes.ac.in",
        "name": "RAHUL NAINWAL"
      },
      {
        "company": "ACIC BABA FARID COLLEGE OF ENGINEERING AND TECHNOLOGY ASSOCIATION",
        "attributes": {
          "city": "ROOM NO 2, GF, INNOVATION CENTRE, BABA FARID CAMPUS BATHINDA BATHINDA BATHINDA PB 151001 IN"
        },
        "email": "head.acct@babafaridgroup.edu.in",
        "name": "AMITOZ DHALIWAL"
      },
      {
        "company": "ACIC KITSW FOUNDATION",
        "attributes": {
          "city": "H NO 55-4-703 KITS COLLEGE BLACK - 1 BHEEMARAM HASANPARTHY WARANGAL TG 506015 IN"
        },
        "email": "raghavbhatt76@gmail.com",
        "name": "SATISHKUMAR VODITHALA"
      },
      {
        "company": "ACIC MANIPUR INTERNATIONAL UNIVERSITY INNOVATION FOUNDATION",
        "attributes": {
          "city": "C/O.NOMITA, MIU CAMPUS GHARI AWANG LEIKAI GHARI SANGAIPROU IMPHAL WEST MN 795140 IN"
        },
        "email": "ACIC@MIU.EDU.IN",
        "name": "HARIKUMAR PALLATHADKA"
      },
      {
        "company": "ACIC ZALSTECH FOUNDATION",
        "attributes": {
          "city": "C/ORAPARTHI JAGADEESH 3-108/3 KARNAM GARU THOTA MANGALAPALEM KOTHAVALASA VIZIANAGARAM AP 535183 IN"
        },
        "email": "aciczalstechfoundation@gmail.com",
        "name": "BAIPALLI NAGESHWAR RAO"
      },
      {
        "company": "ACIC-EDUCENTRE SCHOOL OF BUSINESS FOUNDATION",
        "attributes": {
          "city": "C/O AKUM LONGCHARI 2NDFLR MORUNG EXP BLDG, DUNCAN DIMAPUR DIMAPUR MDG DIMAPUR NL 797112 IN"
        },
        "email": "acicesbfoundation@gmail.com",
        "name": "SEYIELEZO PUTSURE"
      },
      {
        "company": "ACIC-ETERNAL UNIVERSITY FOUNDATION",
        "attributes": {
          "city": "C/O KALGIDHAR TRUST BHARU SAHIB BARU SAHIB PACHHAD SIRMAUR HP 173101 IN"
        },
        "email": "accounts@akalacademy.ac.in",
        "name": "NEELAM KAUR"
      },
      {
        "company": "ACIC-SHOOLINI UNIVERSITY",
        "attributes": {
          "city": "1ST-2ND FLOOR AIFT CENTER VILL. MAUZA BAJHOL SOLAN SOLAN SOLAN HP 173212 IN"
        },
        "email": "ashishkhosla@shooliniuniversity.com",
        "name": "ATUL KHOSLA"
      },
      {
        "company": "ACIC-UNIVERSITY OF LADAKH ATAL INNOVATION FOUNDATION",
        "attributes": {
          "city": "ADMINISTRATIVE OFFICE MELONGTHANG LEH UT LADAKH LEH LEH LEH JK 194101 IN"
        },
        "email": "vc.ladakhuniversity@gmail.com",
        "name": "MOHAMMED RIYAZ KAMARUDDIN KHAN"
      },
      {
        "company": "ACIKON HEALTH CARE PRIVATE LIMITED",
        "attributes": {
          "city": "C/O DINESH KUMAR, KATHAL MORE, NEAR SHIV MANDIR HEHAL RANCHI RANCHI JH 834005 IN"
        },
        "email": "dineshkrgrd92@gmail.com",
        "name": "DINESH KUMAR"
      },
      {
        "company": "ACIS TRADING PRIVATE LIMITED",
        "attributes": {
          "city": "3704, MARATHON FUTUREX, N. M.JOSHI RD,LOWER PAREL DELISLE ROAD MUMBAI MUMBAI MH 400013 IN"
        },
        "email": "scindia2@gmail.com",
        "name": "RANJIT NALINKUMAR SHROFF"
      },
      {
        "company": "ACIWHO WELFARE FOUNDATION",
        "attributes": {
          "city": "28, BUNDA, MEERAHAMADPUR TILAK BUNDA PHOOLPUR AZAMGARH UP 223226 IN"
        },
        "email": "almightyworlds0@gmail.com",
        "name": "HARIGOVIND SINGH CHAUHAN"
      },
      {
        "company": "ACK INFRA SOLUTIONS PRIVATE LIMITED",
        "attributes": {
          "city": "51A, GALAXY PARK ASRAWAD KHURD ROAD,INDORE KASTURBAGRAM INDORE INDORE MP 452020 IN"
        },
        "email": "navnathmahanur6@gmail.com",
        "name": "NAVNATH MAHANUR"
      },
      {
        "company": "ACKEEN LOGISTICS PRIVATE LIMITED",
        "attributes": {
          "city": "71, FLR 2, VINCHAND NIWAS ACHARYA DONDE MARG, SEWRI MUMBAI MUMBAI MH 400015 IN"
        },
        "email": "logisticsaerowave@gmail.com",
        "name": "DEEPAK RAJNESHKUMAR GUPTA"
      },
      {
        "company": "ACKSYNC INFOTECH PRIVATE LIMITED",
        "attributes": {
          "city": "D-9, GROUND FLOOR SECTOR 3 NOIDA NOIDA GAUTAM BUDDHA NAGAR UP 201301 IN"
        },
        "email": "acksyncsolutions@gmail.com",
        "name": "SONALI BHARDWAJ"
      },
      {
        "company": "ACL CAPITAL (IFSC) PRIVATE LIMITED",
        "attributes": {
          "city": "FF-52, PRAGYA ACCELERATOR BLOCK 15, ROAD 11, Z-1 GIFT CITY GANDHI NAGAR GANDHI NAGAR GJ 382355 IN"
        },
        "email": "dima@aarna.capital",
        "name": "PRAVINBHAI DIPCHANDBHAI MAJITHIA"
      },
      {
        "company": "ACL IMPEX INDIA PRIVATE LIMITED",
        "attributes": {
          "city": "17, LOORTHU SAMY PILLAI COLONY, FIRST STREET, KHAJANAGAR TIRUCHIRAPPALLI TIRUCHIRAPPALLI TN 620023 IN"
        },
        "email": "aclimpexindia@gmail.com",
        "name": "RENGANATHAN MALLIKA"
      },
      {
        "company": "ACLARIX PHARMACEUTICALS PRIVATE LIMITED",
        "attributes": {
          "city": "C/O ABDA KHATON, PATHAN TOLI, ALAMGANJ, GAIGHAT GULZARBAGH SAMPATCHAK PATNA BR 800007 IN"
        },
        "email": "zohrazreen1991@gmail.com",
        "name": "ZOHRA ZAREEN"
      },
      {
        "company": "ACLEX PHARMA PRIVATE LIMITED",
        "attributes": {
          "city": "C/O BRAHAM PAL SHARMA TEJ VIHAR, ROHTA ROAD MEERUT CANTT MEERUT MEERUT UP 250001 IN"
        },
        "email": "ndajaykumar@gmail.com",
        "name": "AJAY KANT DIXIT"
      },
      {
        "company": "ACMA MOBILITY FOUNDATION",
        "attributes": {
          "city": "THE CAPITAL COURT, 6TH FLOOR OLOF PALME MARG MUNIRKA NEW DELHI SOUTH WEST DELHI DL 110067 IN"
        },
        "email": "amf@acma.in"
      },
      {
        "company": "ACME & VIBGYOR JV PRIVATE LIMITED",
        "attributes": {
          "city": "PLOT NO 34 S/F KHURANA KUNJ DWARKA SEC 3 N.S.I.T. DWARKA NEW DELHI SOUTH WEST DELHI DL 110078 IN"
        },
        "email": "mca27051991@gmail.com",
        "name": "SURAJ PANDEY"
      },
      {
        "company": "ACME ALPHA RENEWABLES PRIVATE LIMITED",
        "attributes": {
          "city": "PLOT NO. 152 SECTOR 44 DLF QE DLF QE GURGAON HR 122002 IN"
        },
        "email": "acmerenewtech@gmail.com",
        "name": "PANKAJ SAXENA"
      },
      {
        "company": "ACME GAMMA URJA PRIVATE LIMITED",
        "attributes": {
          "city": "PLOT NO. 152 SECTOR 44 DLF QE DLF QE GURGAON HR 122002 IN"
        },
        "email": "acmeurja@gmail.com",
        "name": "CHELLAPPA CHAKRAPANI"
      },
      {
        "company": "ACME HYBRID URJA PRIVATE LIMITED",
        "attributes": {
          "city": "PLOT NO. 152 SECTOR 44 DLF QE DLF QE GURGAON HR 122002 IN"
        },
        "email": "acmeurja@gmail.com",
        "name": "CHELLAPPA CHAKRAPANI"
      },
      {
        "company": "ACME MEDICAL SOLUTIONS PRIVATE LIMITED",
        "attributes": {
          "city": "ABHINANDAN, E32, VIKRAMPURI COLONY, MANOVIKASNAGAR TIRUMALAGIRI HYDERABAD TG 500009 IN"
        },
        "email": "acmemedicalsolutions@gmail.com",
        "name": "JYOTI DAS"
      },
      {
        "company": "ACME MOLECULAR AND DIAGNOSTICS (OPC) PRIVATE LIMITED",
        "attributes": {
          "city": "FLAT NO601 SHANTA DURGAPR ASAD CHS MENTAL HOSPITAL WAGLE I.E. THANE THANE MH 400604 IN"
        },
        "email": "drshamma.acme@outlook.com"
      },
      {
        "company": "ACME MOULD TECH PRIVATE LIMITED",
        "attributes": {
          "city": "8-7-176, PLOT NO.57 RAM RAJ NAGAR BOWENPALLY TIRUMALAGIRI HYDERABAD TG 500011 IN"
        },
        "email": "acmemouldtech@gmail.com",
        "name": "CHITRA RAJAN"
      },
      {
        "company": "ACME PAINTS INDUSTRIES PRIVATE LIMITED",
        "attributes": {
          "city": "HOUSE NO.5082, WARD NO. 6 MAHAJANWADI, WANADONGRI MIDC NAGPUR NAGPUR (URBAN) NAGPUR MH 440016 IN"
        },
        "email": "rakesh942211@gmail.com",
        "name": "RAKESHKUMAR ZALAKDEO SINGH"
      },
      {
        "company": "ACME RENEWTECH PRIVATE LIMITED",
        "attributes": {
          "city": "PLOT NO. 152 SECTOR 44 DLF QE DLF QE GURGAON HR 122002 IN"
        },
        "email": "acmerenewtech@gmail.com",
        "name": "PANKAJ SAXENA"
      },
      {
        "company": "ACME SEVA FOUNDATION",
        "attributes": {
          "city": "101, WING-C, ANAND PLAZA S N DUBE RD, NR MINI NGR DAHISAR DAHISAR WEST MUMBAI MH 400068 IN"
        },
        "email": "msable168@gmail.com",
        "name": "MAHESH MARUTI SABLE"
      },
      {
        "company": "ACME SOFT-TECH SOLUTIONS PRIVATE LIMITED",
        "attributes": {
          "city": "C/O, LT. RANJIT KUMAR DAS DHOBA PARA, P.S.- MALDA, OLD MALDA OLD MALDA MALDA WB 732128 IN"
        },
        "email": "roopadas2023@gmail.com",
        "name": "ROOPA DAS"
      },
      {
        "company": "ACME VENUS URJA PRIVATE LIMITED",
        "attributes": {
          "city": "PLOT NO. 152 SECTOR 44 DLF QE DLF QE GURGAON HR 122002 IN"
        },
        "email": "acmeurja1@gmail.com",
        "name": "AJAY KUMAR PRADHAN"
      },
      {
        "company": "ACME WELFARE FOUNDATION",
        "attributes": {
          "city": "PLOT NO 34, 3RD FLOOR, KARUNA KUNJ, DWRKA SEC-3 DWARKA SEC-6 NEW DELHI SOUTH WEST DELHI DL 110075 IN"
        },
        "email": "pankaj.yadav@acmeindia.co",
        "name": "SURAJ PANDEY"
      },
      {
        "company": "ACMEDIAN TECHNOLOGIES PRIVATE LIMITED",
        "attributes": {
          "city": "SHOP NO. 25, UPPER G.F. CITY PLAZA, PEER MUCHALLA DHAKAOLI DERABASSI MOHALI PB 160104 IN"
        },
        "email": "AKHILBANSAL@ACMEDIAN.COM",
        "name": "VISHAL SETHI"
      },
      {
        "company": "ACMERISE PHARMACEUTICAL PRIVATE LIMITED",
        "attributes": {
          "city": "GALA NO 3 MM MARKET KHERANI ROAD KURLA WEST MUMBAI MUMBAI MUMBAI MH 400072 IN"
        },
        "email": "acmerisepharmaceutical.456@gmail.com",
        "name": "IMTIYAJ AHMAD"
      },
      {
        "company": "ACMR TECHNOLOGY SOLUTIONS (OPC) PRIVATE LIMITED",
        "attributes": {
          "city": "C/O RAVINDRA SINDRAM JANGALE , NEAR VISHWADEEP PUNE PUNE CITY PUNE MH 411001 IN"
        },
        "email": "jangale390@gmail.com"
      },
      {
        "company": "ACMV DIAGNOSERVE PRIVATE LIMITED",
        "attributes": {
          "city": "BOOTH NO. 51 SECTOR 40 C SECTOR 40 (CHANDIGARH) CHANDIGARH CHANDIGARH CH 160036 IN"
        },
        "email": "healthcuro.labs@gmail.com",
        "name": "VANDANA SHARMA"
      },
      {
        "company": "ACN E-COMMERCE PRIVATE LIMITED",
        "attributes": {
          "city": "82 CHANDNI CHOWK DELHI CHANDNI CHOWK DELHI NORTH DELHI DL 110006 IN"
        },
        "email": "ondcmobileapp@gmail.com",
        "name": "CHIRANJIV PARITOSH"
      },
      {
        "company": "ACNOW CONSULTANCY PRIVATE LIMITED",
        "attributes": {
          "city": "F NO-1701, T NO-7, LILIY PARAMOUNTFLORAVILLESEC137 NEPZ POST OFFICE DADRI GAUTAM BUDDHA NAGAR UP 201305 IN"
        },
        "email": "anju.r.chaturvedi@gmail.com",
        "name": "SHAIL MISHRA"
      },
      {
        "company": "ACOLLIDOR LIFE CARE PRIVATE LIMITED",
        "attributes": {
          "city": "PLOTNO112,SRIBHUVANESWARI NAGAR,VARADHARAJAPURAM, MUDICHUR TAMBARAM KANCHIPURAM TN 600048 IN"
        },
        "email": "c.kavimenan@gmail.com",
        "name": "GANAPATHY SELVAVINAYAGAM"
      },
      {
        "company": "ACOM FORGE PRIVATE LIMITED",
        "attributes": {
          "city": "PLOT NO 26 GALI NO 69 DAULTABAD INDUSTRIAL AREA RAILWARY ROAD RAILWAY ROAD GURGAON HR 122006 IN"
        },
        "email": "sales@autocomtechnologies.co.in",
        "name": "MAHARAJ KRISHAN BHAT"
      },
      {
        "company": "ACOMORA HOTELS & RESORTS PRIVATE LIMITED",
        "attributes": {
          "city": "NO 13/358/E, SS BUILDING EDAKKULAM CHENGOTTUKAVU EDAKULAM KOYILANDI KOYILANDI KOZHIKODE KL 673306 IN"
        },
        "email": "rabitsun.rs@gmail.com",
        "name": "POOLOONNUKANDIYIL RAVENDRANATH RABITHA"
      },
      {
        "company": "ACONTOR INNOVATIONS PRIVATE LIMITED",
        "attributes": {
          "city": "3440, 4TH CROSS ROAD, STAGE 3, INDIRANAGAR INDIRANAGAR (BANGALORE) BANGALORE NORTH BANGALORE KA 560038 IN"
        },
        "email": "ankitgup891@gmail.com",
        "name": "SAUMARIC SATYAVRAT DANGWAL"
      },
      {
        "company": "ACONTS GLOBAL BUSINESS SOLUTIONS PRIVATE LIMITED",
        "attributes": {
          "city": "504 PUSHPAK LANDMARK NR TITANIUM CT CNTR SATELLIT JODHPUR CHAR RASTA AHMADABAD CITY AHMEDABAD GJ 380015 IN"
        },
        "email": "Brijshahandassociates@gmail.com",
        "name": "KEYUR RAJENDRAKUMAR SHAH"
      },
      {
        "company": "ACONTWAY TECHNOLOGIES PRIVATE LIMITED",
        "attributes": {
          "city": "L 4, A WING, DYNASTY BUSINESS PARK, ANDHERI E J.B. NAGAR MUMBAI MUMBAI MH 400059 IN"
        },
        "email": "dhaval@acont.ai",
        "name": "ASEEM KUMAR"
      },
      {
        "company": "ACOORFARM KISAN SAHYOG FOUNDATION",
        "attributes": {
          "city": "C/O KAUSHLENDRA KR SINHA WARD NO. 15 BLOCK PIRPA ISHIPUR PRIPAINTI BHAGALPUR BR 813206 IN"
        },
        "email": "KDEV46622@GMAIL.COM",
        "name": "DEVAN KUMAR MAHALDAR"
      },
      {
        "company": "ACOORFARM MARKETING PRIVATE LIMITED",
        "attributes": {
          "city": "VILL- ISIPUR TOLA PANCH BARA BLOCK PRIPAINTI PIRPAINTI BHAGALPUR BR 813209 IN"
        },
        "email": "devankumr910@gmail.com",
        "name": "DEVAN KUMAR MAHALDAR"
      },
      {
        "company": "ACORE LIFESCIENCE PRIVATE LIMITED",
        "attributes": {
          "city": "B-48 LAVANYA BUNGLOW B/H HIMALAYA PARTY PLOT ANKHOL VADODARA VADODARA GJ 390019 IN"
        },
        "email": "nikipatel5411@gmail.com",
        "name": "PIYUSHKUMAR KALUBHAI PATEL"
      },
      {
        "company": "ACORN GLOBAL PRIVATE LIMITED",
        "attributes": {
          "city": "33 FLOOR- GRD PLOT NO.34 BARKAT ALI VIRANI PATH MUMBAI CENTRAL MUMBAI MUMBAI MH 400008 IN"
        },
        "email": "acronglobalpvtltd@gmail.com",
        "name": "ATUL JOS D'SOUZA"
      },
      {
        "company": "ACORN INNOTEC SOLUTIONS PRIVATE LIMITED",
        "attributes": {
          "city": "PLOT NO.188, ROAD NO.21-A PRASHASAN NAGAR,ROAD NO72 FILM NAGAR SHAIKPET HYDERABAD TG 500096 IN"
        },
        "email": "acorninnotec@gmail.com",
        "name": "CHINNA MASTAN SHRIF SHAIK"
      },
      {
        "company": "ACORNSPHERE IT SERVICES PRIVATE LIMITED",
        "attributes": {
          "city": "2-8-2 MAIN ROAD, NEW POST OFFIC WADDEPALLI HANAMKONDA WARANGAL TG 506370 IN"
        },
        "email": "Krish.shyamala@gmail.com",
        "name": "RAMESH KUMAR MUNUGALA"
      },
      {
        "company": "ACOSROAS PRIVATE LIMITED",
        "attributes": {
          "city": "H NO 29/211, SETTYVARIPALLI, 29 MYDEKUR MYDEKUR CUDDAPAH AP 516172 IN"
        },
        "email": "acosroasprivatelimited@gmail.com",
        "name": "PARRI SOUJANYA"
      },
      {
        "company": "ACOUSTIC PLANNERS PRIVATE LIMITED",
        "attributes": {
          "city": "SCO 40, 1ST FLOOR, CHORDA BAZAAR, KRISHNA MARKET ZIRAKPUR RAJPURA MOHALI PB 140603 IN"
        },
        "email": "ROHIT24HRS@GMAIL.COM",
        "name": "CHAITANYA KAKAPURI"
      },
      {
        "company": "ACOUSTIC VISIONS AUDIO VISUAL PRIVATE LIMITED",
        "attributes": {
          "city": "15/15(28),FLAT NO.6D WHITE HAVEN,VELLAYAMBALAM SASTHAMANGALAM THIRUVANANTHAPURAM THIRUVANANTHAPURAM KL 695010 IN"
        },
        "email": "samuel.shammy@gmail.com"
      },
      {
        "company": "ACPS INCUBATION FOUNDATION",
        "attributes": {
          "city": "C/O DEVENDRA GUPTA, DHARERA, ETMADPUR DHARERA ETMADPUR AGRA UP 283202 IN"
        },
        "email": "ACPS.RNGI@GMAIL.COM",
        "name": "DEVENDRE GUPTA"
      },
      {
        "company": "ACQUADE TEXTILE PRIVATE LIMITED",
        "attributes": {
          "city": "J-1001 CAPITAL ICON, OPP. SWAGAT HIGH STREET, SARGASAN GANDHINAGAR GANDHI NAGAR GJ 382421 IN"
        },
        "email": "ronilvekariya8088@gmail.com",
        "name": "RONIL RAJESHBHAI VEKARIYA"
      },
      {
        "company": "ACQUATRANS FLEET MANAGEMENT PRIVATE LIMITED",
        "attributes": {
          "city": "SHOP 04, PLOT NO 224 ,SEC ULWE ,NAVI MUMBAI ULWA PANVEL RAIGARH(MH) MH 410206 IN"
        },
        "email": "transfleetship@gmail.com",
        "name": "RAHUL VERMA"
      },
      {
        "company": "ACQUEST CONSULTING PRIVATE LIMITED",
        "attributes": {
          "city": "A 9 RING ROAD AWAS VIKAS RUDARPUR KICHHA UDHAM SINGH NAGAR UR 263153 IN"
        },
        "email": "acqucon@gmail.com",
        "name": "SANJEEV KUMAR CHHABRA"
      },
      {
        "company": "ACQUINK SOLUTIONS PRIVATE LIMITED",
        "attributes": {
          "city": "16-11-16/143, GFLOOR, MALAKPET SRIPURAM COLONY AMBERPET HYDERABAD TG 500036 IN"
        },
        "email": "ktmathew0303@gmail.com",
        "name": "THIRUVAIPADI SELVARAJAN MOHANKRISHNAN"
      },
      {
        "company": "ACQUIRE UTILITY PRIVATE LIMITED",
        "attributes": {
          "city": "FF-01,BLOCK-130,SECTOR 10 G. NOIDA AUTHORITY FLATS VEDPURA DADRI GAUTAM BUDDHA NAGAR UP 203207 IN"
        },
        "email": "18rajnish@gmail.com",
        "name": "NIRAJ RAI"
      },
      {
        "company": "ACQUIREDGE SKILLS (OPC) PRIVATE LIMITED",
        "attributes": {
          "city": "PL NO 116/P P&AMP;T COLONY SUNCITY DON BOSCO NAGAR RAJENDRANAGAR HYDERABAD TG 500086 IN"
        },
        "email": "muzzama25@hotmail.com"
      },
      {
        "company": "ACQUISITION TIME (OPC) PRIVATE LIMITED",
        "attributes": {
          "city": "NO731 OLD BESCOM BUILDING 1ST CROSS CHOWDESHWARI MARATHAHALLI COLONY BANGALORE NORTH BANGALORE KA 560037 IN"
        },
        "email": "yhnrcsr@outlook.com"
      },
      {
        "company": "ACQURIO TECH PRIVATE LIMITED",
        "attributes": {
          "city": "B-807, WEST SIDE, NEAR YMCA CLUB, S. NO. 835/173 JIVRAJ PARK AHMADABAD CITY AHMEDABAD GJ 380051 IN"
        },
        "email": "info@acquriotech.com",
        "name": "HARESH MEGHJI SORATHIA"
      },
      {
        "company": "ACRA CONSULTANCY PRIVATE LIMITED",
        "attributes": {
          "city": "128, MARUTI PURAM, FAIZABAD ROAD, INDIRANAGAR SEC-21 LUCKNOW LUCKNOW UP 226016 IN"
        },
        "email": "mranjeet2707@gmail.com",
        "name": "RANJEET MISHRA"
      },
      {
        "company": "ACRE JUNCTION REALTY PRIVATE LIMITED",
        "attributes": {
          "city": "FLAT 504, WING L, SEC 20, JVDE CHSL, CENTRAL PARK KHARGHAR PANVEL RAIGARH(MH) MH 410210 IN"
        },
        "email": "info@acrejunction.com",
        "name": "DEEPAK SINGH SUBHASH BHATI SINGH"
      },
      {
        "company": "ACREAGEKASUMI PRIVATE LIMITED",
        "attributes": {
          "city": "G 226, SUSHANT LOK-II GURGAON GURGAON SECTOR 45 SECTOR -45 GURGAON HR 122003 IN"
        },
        "email": "meakshayyadav786@gmail.com",
        "name": "GAJENDER YADAV"
      },
      {
        "company": "ACREDESIGNS INFRASTRUCTURE PRIVATE LIMITED",
        "attributes": {
          "city": "C/O SAHAB RAM PLOT NO-612 FIRST FLOOR,PKT-C, EAST DELHI EAST DELHI EAST DELHI DL 110096 IN"
        },
        "email": "acredesignsinfra@gmail.com"
      },
      {
        "company": "ACREDO TRAVEL & PACKAGES PRIVATE LIMITED",
        "attributes": {
          "city": "1003A, TENTH FLOOR BLOCK NO. 3A, DDA FLATS PAHAR GANJ NEW DELHI CENTRAL DELHI DL 110055 IN"
        },
        "email": "vikan333@gmail.com",
        "name": "RAJ KUMAR CHHABRA"
      },
      {
        "company": "ACREDSERVE INNOVATIONS PRIVATE LIMITED",
        "attributes": {
          "city": "C/O GAYATRI PANDEY CHOTPUR CLY NOIDA NOIDA NOIDA GAUTAM BUDDHA NAGAR UP 201301 IN"
        },
        "email": "rishupandey83778@gmail.com",
        "name": "ANISH PAL"
      },
      {
        "company": "ACREHUNT REAL ESTATES CONSULTANCY PRIVATE LIMITED",
        "attributes": {
          "city": "C-6/18,GF, PATINUM COURTS ARDEE CITY, SECTOR-52 GURGAON SECTOR 45 SECTOR -45 GURGAON HR 122003 IN"
        },
        "email": "romelkharb@gmail.com",
        "name": ". ROMAEL"
      },
      {
        "company": "ACRESKY INDUSTRIES PRIVATE LIMITED",
        "attributes": {
          "city": "3D, MAGNOLIA 183, RACE COURSE ROAD COIMBATORE RACECOURSE COIMBATORE SOUTH COIMBATORE TN 641018 IN"
        },
        "email": "acreskyindustries@gmail.com",
        "name": "RANGASAMI PALANISUWAMI MAHESH KUMAR"
      },
      {
        "company": "ACREVERSE SOLUTIONS PRIVATE LIMITED",
        "attributes": {
          "city": "SPACE NO.5A, 401 SNEH SYMPHONY, OPP. VYOM BANER GAON HAVELI PUNE MH 411045 IN"
        },
        "email": "irtaneja@vistaura.com",
        "name": "RAHUL RAJESH TANEJA"
      },
      {
        "company": "ACRG HERBAL LABS RADIANCE PRIVATE LIMITED",
        "attributes": {
          "city": "SH NO 17-18 DEHARKEBALAJI VIDHYADHAR NAGAR JAIPUR JAIPUR RJ 302039 IN"
        },
        "email": "indianonlinemart20@gmail.com",
        "name": "LAXMI DEVI CHAMRIA"
      },
      {
        "company": "ACRICRAFT PRIVATE LIMITED",
        "attributes": {
          "city": "PLOT NO.36 TO 38,1ST FL SHIVAM IND. ESTATE,VARELI KADODARA PALSANA SURAT GJ 394327 IN"
        },
        "email": "spborad40887@gmail.com"
      },
      {
        "company": "ACRO EXPEDITIONS PRIVATE LIMITED",
        "attributes": {
          "city": "9C SKYLINE,CRESCENDO, CHEVARAMBALAM,CALICUT CHEVARAMBALAM KOZHIKODE KOZHIKODE KL 673017 IN"
        },
        "email": "acroassets@gmail.com",
        "name": "ABHISHEK RAJESWARAN KURUP"
      },
      {
        "company": "ACRO FASHION PRIVATE LIMITED",
        "attributes": {
          "city": "1 SARAR CH DHAR RD LP82/12/1 NOAPARA KOLKATA KOLKATA WB 700090 IN"
        },
        "email": "sanchitpad03@gmail.com",
        "name": "AMAN DILIPKUMAR SARAWGI"
      },
      {
        "company": "ACRO GLOBAL VENTURES PRIVATE LIMITED",
        "attributes": {
          "city": "C/O NETRA PAL SINGH, NAGLA HANDAL SHIKOHABAD NAGLA BAJDAR SHIKOHABAD FIROZABAD UP 283141 IN"
        },
        "email": "krishnatraders092020@gmail.com",
        "name": "AKANKSHA YADAV"
      },
      {
        "company": "ACRO METAGLAZE PRIVATE LIMITED",
        "attributes": {
          "city": "TOWER 3 1003 T-1 LODHA BELMONDO OPP MCA STADIUM RAVET HAVELI PUNE MH 412101 IN"
        },
        "email": "alexmudaliar@alexjewellery.in",
        "name": "JOSEPH JAGANNATHAN MUDALIAR"
      },
      {
        "company": "ACROBATIC MOM (OPC) PRIVATE LIMITED",
        "attributes": {
          "city": "C/O A S CHOUDHARI, BORI, UNIT BORI JINTUR JINTUR PARBHANI MH 431509 IN"
        },
        "email": "durgeshchoudhari413@gmail.com"
      },
      {
        "company": "ACROFLUIDIC INNOVATIONS PRIVATE LIMITED",
        "attributes": {
          "city": "NO. 40/28, BUDDHAR STREET EAST TAMBARAM TAMBARAM EAST TAMBARAM KANCHIPURAM TN 600059 IN"
        },
        "email": "ashwinkn05@gmail.com",
        "name": "RAMALINGAM SATISH"
      },
      {
        "company": "ACRON RECYCLERS PRIVATE LIMITED",
        "attributes": {
          "city": "1/V-G-1 KH NO 192/3 KANSHI MEERUT MEERUT UP 250205 IN"
        },
        "email": "ashwanikumar5020@gmail.com",
        "name": "MONISH MALIK"
      },
      {
        "company": "ACRONITE AYURVEDA (OPC) PRIVATE LIMITED",
        "attributes": {
          "city": "C/O JAGAN NATH PD, 234 AVAS VIKADCMP LAKHIMPUR LAKHIMPUR KHERI UP 262701 IN"
        },
        "email": "Info@a2pl.net.in"
      },
      {
        "company": "ACROP TECHNOLOGIES (OPC) PRIVATE LIMITED",
        "attributes": {
          "city": "FLAT NO 6, SECOND FLOOR SHIV PARVATI COMPLEX SANGLI MIRAJ SANGLI MH 416416 IN"
        },
        "email": "acropai.app@gmail.com"
      },
      {
        "company": "ACROPLANS INDIA PRIVATE LIMITED",
        "attributes": {
          "city": "5 FLOOR, TRENDZ TRIDENT SALARPURIA SATTVA CYBERABAD SHAIKPET HYDERABAD TG 500081 IN"
        },
        "email": "kankatalak9@gmail.com",
        "name": "KRISHNA MURTHY KANKATALA"
      },
      {
        "company": "ACROSS AXIS PRIVATE LIMITED",
        "attributes": {
          "city": "282 F/F BUNGLOW ASHOKA ENCLAVE-1 SECTOR 34-35 ANANGPUR FARIDABAD FARIDABAD HR 121003 IN"
        },
        "email": "richu7.sharma@gmail.com",
        "name": "RICHA SHARMA"
      },
      {
        "company": "ACROSS HORIZON ECOMMERCE PRIVATE LIMITED",
        "attributes": {
          "city": "16/1644 KUMBHARE NGR JAI BHIM CLNY FULE WARD GONDIA BAZAR GONDIYA GONDIA MH 441601 IN"
        },
        "email": "this_isaatish@outlook.com",
        "name": "ATISHKUMAR ASHOK VAIDYA"
      },
      {
        "company": "ACROSTIC FOUNDATION",
        "attributes": {
          "city": "W.NO 05,NAI BAZAR AKARAAURA NEAR SEVA DHAM BUXAR BUXAR BUXAR BR 802101 IN"
        },
        "email": "acrosticfoundation@yahoo.com",
        "name": "SUSHIL KUMAR"
      },
      {
        "company": "ACROSTRADE INFOSOLUTION PRIVATE LIMITED",
        "attributes": {
          "city": "#1,KACHARAKANIHALLI HRBR LYT 2ND BLK JHANVI RD HORAMAVU BANGALORE NORTH BANGALORE KA 560043 IN"
        },
        "email": "chelka22@gmail.com",
        "name": ". TAMILSELVAN"
      },
      {
        "company": "ACRR INFRASTRUCTURE PRIVATE LIMITED",
        "attributes": {
          "city": "PLOT NO. 803 BASEMENT DEVI NAGAR,NEW SANGANERRD SHYAM NAGAR (JAIPUR) JAIPUR JAIPUR RJ 302019 IN"
        },
        "email": "caavinash3@gmail.com",
        "name": "RAJU RAM"
      },
      {
        "company": "ACRST TECHNOLOGIES PRIVATE LIMITED",
        "attributes": {
          "city": "18-A,3RD FLOOR,AZIM DAIRY OKHLA,NEAR KABRISATAN JAMIA NAGAR NEW DELHI SOUTH DELHI DL 110025 IN"
        },
        "email": "haiderabbasphy@gmail.com",
        "name": "HAIDER ABBAS"
      },
      {
        "company": "ACRUXINDIA BUILDPRO PRIVATE LIMITED",
        "attributes": {
          "city": "ACRUX GROUP,#29,1ST FLOOR 1ST CROSS, 8TH MAIN RAMAMURTHY NAGAR BANGALORE NORTH BANGALORE KA 560016 IN"
        },
        "email": "Acruxindiabuildpro@gmail.com",
        "name": "SURENDRA RAMDASS"
      },
      {
        "company": "ACS FIN VENTURES PRIVATE LIMITED",
        "attributes": {
          "city": "L-132 AQ NANDANVAN LAY OUT NANDAVAN COLONY NAGPUR NAGPUR MH 440024 IN"
        },
        "email": "adityarbhabhda@gmail.com",
        "name": "ADITYA RISHI BHABHDA"
      },
      {
        "company": "ACS12 SECURITY SERVICES PRIVATE LIMITED",
        "attributes": {
          "city": "KHATIAN NO:283/1888 TULASI NAGAR, 1ST LANE CHATRAPUR CHHATRAPUR GANJAM OR 761020 IN"
        },
        "email": "simanchalapattnaik.b68@gmail.com",
        "name": "SIMANCHALA PATTNAIK"
      },
      {
        "company": "ACSBM CHARITABLE FOUNDATION",
        "attributes": {
          "city": "791/K, AL FALAH PLAZA, PA PARAMBIL PO, KOZHIKODE, PARAMBIL KOZHIKODE KOZHIKODE KL 673012 IN"
        },
        "email": "info.acsbm@gmail.com",
        "name": "SHAKKEER POKKITTARA MUHAMMED"
      },
      {
        "company": "ACSDOOR HARDWARE PRIVATE LIMITED",
        "attributes": {
          "city": "742 F SECTOR 37 II GURGAON ARJUN NAGAR GURGAON HR 122001 IN"
        },
        "email": "acsenterprisesggn@gmail.com",
        "name": "AAKASH SAINI"
      },
      {
        "company": "ACSELOYS INTERNATIONAL PRIVATE LIMITED",
        "attributes": {
          "city": "C/O PREM PRAKASH SHARMA NAUSHEHRA, SHIKOHABAD SHIKOHABAD SHIKOHABAD FIROZABAD UP 283135 IN"
        },
        "email": "premsharmaorganisationtrust@gmail.com",
        "name": "ANKIT SHARMA"
      },
      {
        "company": "ACSONICS (OPC) PRIVATE LIMITED",
        "attributes": {
          "city": "8-57-109/5, ADHARSH NAGAR,TAGARAPUVALASA CHITTIVALASA BHEEMUNIPATNAM VISAKHAPATNAM AP 531162 IN"
        },
        "email": "ashuchakri143@gmail.com"
      },
      {
        "company": "ACSPROMPT PRIVATE LIMITED",
        "attributes": {
          "city": "NO.179, 1A FIRST FLOOR AKKA MAHADEVI ROAD CHICKPET BANGALORE SOUTH BANGALORE KA 560053 IN"
        },
        "email": "suresh.singam@acsprompt.com",
        "name": "SURESH SINGAM"
      },
      {
        "company": "ACSSES WORLD PRIVATE LIMITED",
        "attributes": {
          "city": "SHOP NO. 208 2ND FLOOR BODKE PLAZA PUNA ROAD DWARKA CORNER NASHIK NASHIK MH 422011 IN"
        },
        "email": "acssesworld@gmail.com",
        "name": "AKSHAY DADAJI GANGURDE"
      },
      {
        "company": "ACSSR REALTOR PRIVATE LIMITED",
        "attributes": {
          "city": "OFF NO. 01, TOWER C, F.F. ITHUM TOWER, SEC 62 NOIDA NOIDA GAUTAM BUDDHA NAGAR UP 201301 IN"
        },
        "email": "chanchalid@gmail.com",
        "name": "AKHILESH KUMAR RAI"
      },
      {
        "company": "ACSWAY MARKETING PRIVATE LIMITED",
        "attributes": {
          "city": "SF 209, MGS SECTOR 27 SONIPAT SONIPAT SONIPAT HR 131409 IN"
        },
        "name": "KULDEEP SINGH"
      },
      {
        "company": "ACT AARTI WELFARE FOUNDATION",
        "attributes": {
          "city": "7/22 D TILAK NAGAR AGRICULTURE COLLEGE CSA KANPUR NAGAR UP 208002 IN"
        },
        "email": "actwelfarefoundation@rediffmail.com",
        "name": "TILAK RAJ SHARMA"
      },
      {
        "company": "ACT RE PRIVATE LIMITED",
        "attributes": {
          "city": "H.NO. 1631 BADHAIYABBER CIVIL LINE 2, SULTANPUR, SULTANPUR CITY SULTANPUR SULTANPUR UP 228001 IN"
        },
        "email": "dr.nilimabhatnagar@gmail.com",
        "name": "RAJEEV SRIVASTAVA"
      },
      {
        "company": "ACT TRADELINK PRIVATE LIMITED",
        "attributes": {
          "city": "S-53, TCX GANDHIDHAM GANDHIDHAM KACHCHH GJ 370201 IN"
        },
        "email": "acttradelink@gmail.com",
        "name": "BHAVESH DANGAR"
      },
      {
        "company": "ACT WISE CONSULTANCY PRIVATE LIMITED",
        "attributes": {
          "city": "2/5 KARVE ROAD ERANDVANA BEHIND STATE BANK DECCAN GYMKHANA PUNE CITY PUNE MH 411004 IN"
        },
        "email": "actwisecpl@gmail.com",
        "name": "POURNIMA MAHENDRA THAKURDESAI"
      },
      {
        "company": "ACT2HIRE VENTURES PRIVATE LIMITED",
        "attributes": {
          "city": "C/O RAMPRAKASH SINGH 00 G HATKOLI POST BALDEV BALDEO MATHURA MATHURA UP 281301 IN"
        },
        "email": "jitens09@outlook.com",
        "name": "JITENDRA SINGH"
      },
      {
        "company": "ACTADEX TECHNOLOGIES (OPC) PRIVATE LIMITED",
        "attributes": {
          "city": "D.NO 29-922/1, 2ND FLOOR KOTHAPETA,4TH LINE, VINUKONDA VINUKONDA GUNTUR AP 522647 IN"
        },
        "email": "tulasi.setti@gmail.com"
      },
      {
        "company": "ACTAL FOODS (INDIA) LIMITED",
        "attributes": {
          "city": "WARD NO 52, HOUSE NO 9516 SHRIJI VISHALI, AMLIDIH RAIPUR RAIPUR RAIPUR CT 492001 IN"
        },
        "email": "info@actalfoods.com",
        "name": "MOHAMMED AZHARUDDIN MOINUDDIN SHAIKH"
      },
      {
        "company": "ACTCO LOGISTICS INDIA PRIVATE LIMITED",
        "attributes": {
          "city": "NO. 07, SECOND FLOOR WARD DC 2, PLOT NO. 6 GANDHIDHAM GANDHIDHAM KACHCHH GJ 370201 IN"
        },
        "email": "rajesh@actcogrp.com"
      },
      {
        "company": "ACTFAST ENTERPRISES PRIVATE LIMITED",
        "attributes": {
          "city": "HNO-1107 2ND FLOOR, LOTUS VILLS DLF PHASE 4, GALLERIA DLF-IV GALLERIA DLF-IV GURGAON HR 122009 IN"
        },
        "email": "p15bipinb@iima.ac.in",
        "name": "BIPIN BANSAL AGARWAL"
      },
      {
        "company": "ACTINIUMSHIPMANAGER MANAGEMENT PRIVATE LIMITED",
        "attributes": {
          "city": "D-9 -GROUND FLOOR SECTOR-3 NOIDA NOIDA GAUTAM BUDDHA NAGAR UP 201301 IN"
        },
        "email": "Priya-shukla@outlook.com",
        "name": "PRIYA SHUKLA"
      },
      {
        "company": "ACTINODE SOLUTIONS PRIVATE LIMITED",
        "attributes": {
          "city": "12/78 NANDANAM, MANGALAM PARUDUR OTTAPALAM. PALAKKAD KL 679305 IN"
        },
        "email": "contact@actinode.com",
        "name": "SHEELA KARUNAGATH"
      },
      {
        "company": "ACTION AUTOTEC PRIVATE LIMITED",
        "attributes": {
          "city": "108, UDAY PLAZA 16-A UDAY PARK NEW DELHI SOUTH EXT-II NEW DELHI SOUTH DELHI DL 110049 IN"
        },
        "email": "accounts.manager@crownhonda.in",
        "name": "PRABHAT GUPTA"
      },
      {
        "company": "ACTIONNEO PRIVATE LIMITED",
        "attributes": {
          "city": "PLOT NO 2850 G.F SECTOR-J BLK-J DSIDC NARELA LDMK NARELA DELHI NORTH WEST DELHI DL 110040 IN"
        },
        "email": "Sonisingh081999@gmail.com",
        "name": "RAJNIKANT KUMAR"
      },
      {
        "company": "ACTIPACE PRIVATE LIMITED",
        "attributes": {
          "city": "SHOP NO. G-103, HI TECH TEXTILE CENTRE, ANJANA SURAT TEXTILEMARKET SURAT CITY SURAT GJ 395002 IN"
        },
        "email": "sandip@sunriseav.com",
        "name": "SNEHAL MANJIBHAI PATEL"
      },
      {
        "company": "ACTIPAY TECHNOLOGIES PRIVATE LIMITED",
        "attributes": {
          "city": "HOUSE NO 293 FIRST FLOOR SECTOR 10 GURGAON SADAR BAZAR GURGAON HR 122001 IN"
        },
        "email": "ghaneshgautam@gmail.com",
        "name": "GHANESH PRASAD"
      },
      {
        "company": "ACTIVARC WELLNESS PRIVATE LIMITED",
        "attributes": {
          "city": "UNT NO - 022 BLDG, ONGC C KRISHNACHANDRA MARG BANDRA WEST MUMBAI MUMBAI MH 400050 IN"
        },
        "email": "safu82@gmail.com",
        "name": "RAVI YADAVA"
      },
      {
        "company": "ACTIVE AID FITNESS ACADEMY PRIVATE LIMITED",
        "attributes": {
          "city": "55 2ND FLOOR,LANE-2 WESTEND MARG, SAIDULAJAB, GADAIPUR NEW DELHI SOUTH WEST DELHI DL 110030 IN"
        },
        "email": "Aniljolly55@gmail.com",
        "name": "ANIL KUMAR JOLLY"
      },
      {
        "company": "ACTIVE BEACON CHARITY FOUNDATION",
        "attributes": {
          "city": "187 SAI VIHAR, DAKAN KOTRA UDAIPUR CITY GIRWA UDAIPUR RJ 313001 IN"
        },
        "email": "activebeaconcharity@gmail.com",
        "name": "MONIKA GUPTA"
      },
      {
        "company": "ACTIVE BENGALURU FOUNDATION",
        "attributes": {
          "city": "NO 12 1ST FLOOR LAZAR ROAD FRAZER TOWN FRASER TOWN BANGALORE NORTH BANGALORE KA 560005 IN"
        },
        "email": "activebengaluru01@gmail.com",
        "name": "SYED SALMAN"
      },
      {
        "company": "ACTIVE BHARAT MANAGEMENT PRIVATE LIMITED",
        "attributes": {
          "city": "C1-331 TF, ALPHA-1, ALPHA COMMERCIAL BELT I.A. SURAJPUR NOIDA GAUTAM BUDDHA NAGAR UP 201306 IN"
        },
        "email": "bkbactivebharat1980@gmail.com",
        "name": "BHUPENDRA KUMAR BHARAT"
      },
      {
        "company": "ACTIVE DVP PRIVATE LIMITED",
        "attributes": {
          "city": "PLOT NO 492 B, SECTOR 22 TURBHE GAON THANE THANE THANE MH 400705 IN"
        },
        "email": "activechemicalsc4@gmail.com",
        "name": "DEVENDRA NARAYAN SINGH RAJPUROHIT"
      },
      {
        "company": "ACTIVE FEATHER FASHION PRIVATE LIMITED",
        "attributes": {
          "city": "2-113, SRINIVASA NAGAR AGANAMPUDI DUVVADA VISAKHAPATNAM VISAKHAPATNAM AP 530046 IN"
        },
        "email": "rama.thursday@gmail.com",
        "name": "LAKSHMAN NAIDU YEDLA"
      },
      {
        "company": "ACTIVE HEALTH AND PERFORMANCE NUTRITION PRIVATE LIMITED",
        "attributes": {
          "city": "FL NO.301,3 FLOOR,1B WING DHAVALGIRI,SIDDHACHALPH-I THANE THANE THANE MH 400601 IN"
        },
        "email": "nutraidag.chief@gmail.com",
        "name": "RADHIKA SHRIRAM"
      },
      {
        "company": "ACTIVE LEARN CONSULTING PRIVATE LIMITED",
        "attributes": {
          "city": "H NO6-3-1192/A TO A/5 KUNDANBAGH,BEGUMPET BEGUMPET SECUNDERABAD HYDERABAD TG 500016 IN"
        },
        "email": "Tejasritalluri26@gmail.com",
        "name": "RAJAMAHENDRA GOVINDAMALLAIAH"
      },
      {
        "company": "ACTIVE MEP SOLUTION PRIVATE LIMITED",
        "attributes": {
          "city": "PLOT NO.326 SECTOR-2, HSIIDC AREA BAWAL BAWAL MAHENDRAGARH HR 123501 IN"
        },
        "email": "shankarsinghrathore36@gmail.com",
        "name": "MANOJ SINGH RATHORE"
      },
      {
        "company": "ACTIVE WAVE PRIVATE LIMITED",
        "attributes": {
          "city": "PROPERTY NO 623,KH NO88 VILLAGE CHHAWLA NEW DELHI SOUTH WEST DELHI DL 110071 IN"
        },
        "email": "LAKSHAYSONI1111@GMAIL.COM",
        "name": "PRINCE SHOKEEN"
      },
      {
        "company": "ACTIVEFLOW FITNESS PRIVATE LIMITED",
        "attributes": {
          "city": "PLOTNO 129,128P SUPRABATHTOWNSHIP, NARAPA KATCHAVANISINGARAM SECUNDERABAD HYDERABAD TG 500088 IN"
        },
        "email": "Activeflow2024@gmail.com",
        "name": "JEEVAN KALADHAR DEVARAPALLI"
      },
      {
        "company": "ACTIVEKITE CONSULTING PRIVATE LIMITED",
        "attributes": {
          "city": "NO.C 48, 7TH AVENUE EXT, TVS EMERALD, VANDALUR, KOLAPAKKAM CHINGLEPET KANCHIPURAM TN 600127 IN"
        },
        "email": "support@activekite.com",
        "name": "NARAYANAN . ALAGARSAMY"
      },
      {
        "company": "ACTIVESINE ELECTRICALS INDIA PRIVATE LIMITED",
        "attributes": {
          "city": "30/66, THIRUPALYA VILLAGE ELECTRONIC CITY PHASE - 1 BOMMASANDRA INDUSTRIAL ESTATE BANGALORE SOUTH BANGALORE KA 560099 IN"
        },
        "email": "mailatepselectricals@gmail.com",
        "name": "RAJEEV RANJAN"
      },
      {
        "company": "ACTIVESOFT TECHNOLOGIES PRIVATE LIMITED",
        "attributes": {
          "city": "PLOT NO-41, KHASRA NO-574 MADIYAON, JANKIPURAM JANKIPURAM LUCKNOW LUCKNOW UP 226021 IN"
        },
        "email": "priya2105.singh@gmail.com",
        "name": "PRIYA SINGH"
      },
      {
        "company": "ACTIVEYORK ORGANIC PRIVATE LIMITED",
        "attributes": {
          "city": "122-GALLERIA SHOPING HUB, NR PAL UMRA BRIDGE, ADAJAN DN SURAT CITY SURAT GJ 395009 IN"
        },
        "email": "activeyork9@gmail.com",
        "name": "JEET ANKUR TRIVEDI"
      },
      {
        "company": "ACTIVGRO ASSETS PRIVATE LIMITED",
        "attributes": {
          "city": "7/341, KEEZHA VANNANVILAI BEACH ROAD, NAGERCOIL IRULAPPAPURAM AGASTHEESWARAM KANYAKUMARI TN 629002 IN"
        },
        "email": "activgroassets@gmail.com",
        "name": "SATHYA SURESH KUMAR"
      },
      {
        "company": "ACTNET INFOTECH PRIVATE LIMITED",
        "attributes": {
          "city": "UNIT NO.-146, FIRST FLOOR, VARDHMAN FASHION MALL ROAD NO.-43, PITAMPURA RANI BAGH DELHI NORTH WEST DELHI DL 110034 IN"
        },
        "email": "actnetinfotech@gmail.com",
        "name": ". ABHIMANYU"
      },
      {
        "company": "ACTO STEELS PRIVATE LIMITED",
        "attributes": {
          "city": "INDUSTRIAL AREA-C, NEAR TEXLA PLASTIC, KANGANWAL JUGIANA LUDHIANA LUDHIANA PB 141017 IN"
        },
        "email": "actosteels@gmail.com",
        "name": "AANCHAL MITTAL"
      },
      {
        "company": "ACTORS TRUTH CREATIVE PRIVATE LIMITED",
        "attributes": {
          "city": "D-601 AHIMSA TERRACE AHIMSA MARG 5 SPICE REST. MALAD WEST DELY MALAD WEST MUMBAI MH 400064 IN"
        },
        "email": "accounts@theactorstruth.com",
        "name": "VIJAY KUMAR SACHDEVA"
      },
      {
        "company": "ACTOSYS LABS PRIVATE LIMITED",
        "attributes": {
          "city": "HOUSE NO 2753 1ST FLOOR RANJIT NAGAR PATEL NAGAR (CENTRAL DELHI) NEW DELHI CENTRAL DELHI DL 110008 IN"
        },
        "email": "saranjeets0@gmail.com",
        "name": "KIRANJEET KOUR"
      },
      {
        "company": "ACTRONIC SOLUTION (OPC) PRIVATE LIMITED",
        "attributes": {
          "city": "NO 688, GROUND FLOOR 1ST CROSS,R K HEGDE NAGAR DR. SHIVARAMA KARANTH NAGAR BANGALORE NORTH BANGALORE KA 560077 IN"
        },
        "email": "shaziajameel2018@gmail.com"
      },
      {
        "company": "ACTUATE SOLUTION PRIVATE LIMITED",
        "attributes": {
          "city": "RM. NO. 713,A,CHAWL NO.90 MHB COLONY,DG NGR.MALWANI INS HAMLA MALAD WEST MUMBAI MH 400095 IN"
        },
        "email": "Shaikhzoyu46@gmail.com",
        "name": "SAIBA SHAIKH"
      },
      {
        "company": "ACTUATOR FLUID CONTROL INDIA PRIVATE LIMITED",
        "attributes": {
          "city": "G203, SHAGOON RESIDENCY, 2ND FLOOR, KOPARLI ROAD, KOPARLI PARDI VALSAD GJ 396191 IN"
        },
        "email": "sachdev.yagnesh@gmail.com",
        "name": "GRISHMA SHARADKUMAR GUPTA"
      },
      {
        "company": "ACTUS CONSULTANCY SERVICES PRIVATE LIMITED",
        "attributes": {
          "city": "DIKSHIT NIWAS, SHOP NO. 1 SHANTI NAGAR, THANE JEKEGRAM THANE THANE MH 400606 IN"
        },
        "email": "ashokkumar.bapana@gmail.com",
        "name": "ANJANA ASHOK BAPANA"
      },
      {
        "company": "ACU AROGYA HEALING HOME AND WELLNESS ACADEMY FOUNDATION",
        "attributes": {
          "city": "PLOT NO.20, DNO.01A,NAIDU COLONY UPPERPALLY RAJENDRANAGAR (K.V.RANGAREDDY) RAJENDRANAGAR HYDERABAD TG 500030 IN"
        },
        "email": "oneclick5667@gmail.com",
        "name": ". RAAJA"
      },
      {
        "company": "ACUBE INDUSTRIES PRIVATE LIMITED",
        "attributes": {
          "city": "B 30 HAR BHOLANATH PARK NR VIJYA DASMI SOC NHROAD ODHAV AHMADABAD CITY AHMEDABAD GJ 382415 IN"
        },
        "email": "acubeindustries2023@gmail.com",
        "name": "VARSHABEN VINODCHANDRA PATEL"
      },
      {
        "company": "ACUDOCTOR HEALTHCARE PRIVATE LIMITED",
        "attributes": {
          "city": "H.NO-679, CHINDER ROAD VPO SARANGPUR MANDI ADAMPUR HISAR HISAR HR 125052 IN"
        },
        "email": "Sunilkhicher@gmail.com",
        "name": "SUNIL KUMAR"
      },
      {
        "company": "ACUFIN. AI PRIVATE LIMITED",
        "attributes": {
          "city": "V 30/3 DLF PHASE III DLF QE DLF QE GURGAON HR 122002 IN"
        },
        "email": "info@acufin.ai",
        "name": "AYESHA KHAN"
      },
      {
        "company": "ACUITAS INTERNATIONAL PRIVATE LIMITED",
        "attributes": {
          "city": "1/2, PARLE PUSHPA CHS MAHANT ROAD EXTENSION VILEEPARLE (EAST) MUMBAI MUMBAI MH 400057 IN"
        },
        "email": "nishantj96@gmail.com",
        "name": "NISHANT NITIN JOSHI"
      },
      {
        "company": "ACUITEX TECHNOLOGY PRIVATE LIMITED",
        "attributes": {
          "city": "2007 20TH FLR C S 82/1721 KHAIRUNNISA HTS, N HILL 2 PRINCESS DOCK MUMBAI MUMBAI MH 400009 IN"
        },
        "email": "acuitextechnology@gmail.com",
        "name": "MUMTAZ MAZAHERALI VIRANI"
      },
      {
        "company": "ACUITY HCS PRIVATE LIMITED",
        "attributes": {
          "city": "# 31, BINNAMANGALA, 2ND STAGE, KBH COLONY, CMH RD INDIRANAGAR (BANGALORE) BANGALORE NORTH BANGALORE KA 560038 IN"
        },
        "email": "mohdgaffar45.md@gmail.com",
        "name": "MOHAMMED GAFFAR"
      },
      {
        "company": "ACUITY HOSPITALITY PRIVATE LIMITED",
        "attributes": {
          "city": "56 LANE NO 1, HNB COLONY WARD NO 37, AJABPUR KHURD AJABPUR DEHRADUN DEHRADUN UR 248121 IN"
        },
        "email": "Anjalianthwal07@gmail.com",
        "name": "UPENDRA DUTT ANTHWAL"
      },
      {
        "company": "ACUITY INFRA PROMOTERS PRIVATE LIMITED",
        "attributes": {
          "city": "56 HNB COLONY AJABPUR KHURD AJABPUR DEHRADUN DEHRADUN UR 248121 IN"
        },
        "email": "anjalianthwal07@gmail.com",
        "name": "UPENDRA DUTT ANTHWAL"
      },
      {
        "company": "ACUITY RISK CONSULTANTS PRIVATE LIMITED",
        "attributes": {
          "city": "ROOM NO 20, 2/53B NORTH AVENUE ROAD PUNJABI BAGH SEC - III NEW DELHI WEST DELHI DL 110026 IN"
        },
        "email": "anupam.k@acuityriskconsultants.com",
        "name": "ANUPAM KHANNA"
      },
      {
        "company": "ACUMEN COMMUNICATIONS PRIVATE LIMITED",
        "attributes": {
          "city": "H NO 18-7-328, MK SQUARE CHADERGHAT DARUSHIFA CHARMINAR HYDERABAD TG 500024 IN"
        },
        "email": "faizanbinfasi1@gmail.com",
        "name": "MOHAMMED FAIZAN"
      },
      {
        "company": "ACUMEN CUSTOMER EXPERIENCE PRIVATE LIMITED",
        "attributes": {
          "city": "PLOT NO. 383 THIRD FLOOR FARIDABAD SECTOR 22 FARIDABAD FARIDABAD HR 121005 IN"
        },
        "email": "acumencutomerexperience@gmail.com",
        "name": "SHIVANKUR TRIPATHI"
      },
      {
        "company": "ACUMEN MEASUREMENT & CALIBRATION SERVICES (OPC) PRIVATE LIMITED",
        "attributes": {
          "city": "P4/35 DEEP GANGA RESIDENTIAL ROSHNABAD KUTCHERY HARDWAR HARIDWAR UR 249403 IN"
        },
        "email": "acumencali.lab@gmail.com"
      },
      {
        "company": "ACUMENDIGITAL PRIVATE LIMITED",
        "attributes": {
          "city": "OFFICE NO. 522, A WING, NYATI EMPRESS, S.NO-198 VIMAN NAGAR PUNE PUNE MH 411014 IN"
        },
        "email": "lakshya.purduegrad@gmail.com",
        "name": "ATUL VILAS BEWGERI"
      },
      {
        "company": "ACUMETALLURGICAL TESTINGS PRIVATE LIMITED",
        "attributes": {
          "city": "UNIT NO.121 SANJAY MITTAL EST NO6, M.V.ROAD ANDHERI MAROL NAKA MUMBAI MUMBAI MH 400059 IN"
        },
        "email": "info.acumetal@gmail.com",
        "name": "PARAG PRAKASH SHAH"
      },
      {
        "company": "ACUNEXUS INNOVATIONS PRIVATE LIMITED",
        "attributes": {
          "city": "A4/606 MANGESHI SAHARA CH ANGHAR KALYAN CITY KALYAN THANE MH 421301 IN"
        },
        "email": "acunexusinnovations@gmail.com",
        "name": "KRUTIKA NIKET PANCHAL"
      },
      {
        "company": "ACUPAYZ FINTECH PRIVATE LIMITED",
        "attributes": {
          "city": "FLAT 501 SOUMYA EVERGREEN HINOTIYA ALAM, HUZUR KOLAR ROAD HUZUR BHOPAL MP 462042 IN"
        },
        "email": "connect.pawanmeena@gmail.com",
        "name": "PAWAN MEENA"
      },
      {
        "company": "ACURAGEN PRIVATE LIMITED",
        "attributes": {
          "city": "PNO.25,ROADNO.5,GROUNDFL SYNO342,ALEAPI.E. PRAGATINAGAR HYD HYDERABAD TG 500090 IN"
        },
        "email": "acuragencare@gmail.com",
        "name": "NAVEENKUMAR DHONDI"
      },
      {
        "company": "ACURATE & PLANNING CONSULTANCY SERVICES PRIVATE LIMITED",
        "attributes": {
          "city": "C/O AJAY KUMAR H.NO-479 SHARMA PATH RUPASPUR B.V. COLLEGE PHULWARI PATNA BR 800014 IN"
        },
        "email": "krajay1991@gmail.com",
        "name": "AJAY KUMAR"
      },
      {
        "company": "ACUTE ELECTRONICS INDIA PRIVATE LIMITED",
        "attributes": {
          "city": "16, HARIOM INDUSTRIAL SOC NR. SANTINATH MILL, MAGDALLA SURAT SURAT GJ 395007 IN"
        },
        "email": "acute.backup2016@gmail.com",
        "name": "DIVYESH PANKAJ KAPADIA"
      },
      {
        "company": "ACUTE FINSERVE PRIVATE LIMITED",
        "attributes": {
          "city": "302, MAURYANSH ELANZA, NR PAREKH HOSPITAL SATELLITE S A C AHMADABAD CITY AHMEDABAD GJ 380015 IN"
        },
        "email": "quickfinance1207@gmail.com",
        "name": "BHOOMI SHALIN SHAH"
      },
      {
        "company": "ACUTE GLOBAL INDUSTRIES PRIVATE LIMITED",
        "attributes": {
          "city": "310-ASHWAMEGH ELEGANCE-3 OPP. SBI ZONAL OFFICE ELLISBRIDGE AHMADABAD CITY AHMEDABAD GJ 380006 IN"
        },
        "email": "mananshah3582@gmail.com",
        "name": "MANAN UMESHBHAI SHAH"
      },
      {
        "company": "ACUTE METROLOGY & CONSULTANCY PRIVATE LIMITED",
        "attributes": {
          "city": "NO 9791, FIRST FLOOR, PH I II LIG II TYPE, TNHB AYAPAKKAM POONAMALLEE TIRUVALLUR TN 600077 IN"
        },
        "email": "acutemetrologypltd@gmail.com",
        "name": ". PONNUSAMY"
      },
      {
        "company": "ACUTE TOOLS PRIVATE LIMITED",
        "attributes": {
          "city": "G/F-22, NILKANTH AVENUE, NR. ODHAV CHOOKDI ODHAV AHMADABAD CITY AHMEDABAD GJ 382415 IN"
        },
        "email": "acutetoolspvtltd@gmail.com",
        "name": "HEMENDRABHAI RAMJIBHAI PATEL"
      },
      {
        "company": "ACUTEK AGRI TECHNOLOGIES PRIVATE LIMITED",
        "attributes": {
          "city": "BANGALA NO.10, PARWATI NIWAS, KALA NAGAR INDIRA NAGAR (NASHIK) NASHIK NASHIK MH 422009 IN"
        },
        "email": "more.vd7177@gmail.com",
        "name": "VAIBHAV DILIP MORE"
      },
      {
        "company": "ACUTOK INFOSOLUTIONS PRIVATE LIMITED",
        "attributes": {
          "city": "PLOT NO 36/37 SR NO 101/1 /1 NR B.U. BHANDARI BANER GAON PUNE CITY PUNE MH 411045 IN"
        },
        "email": "abhijeet@kserv.co.in",
        "name": "ABHIJEET KHOT"
      },
      {
        "company": "ACUTOK INFRASOLUTIONS (OPC) PRIVATE LIMITED",
        "attributes": {
          "city": "PLOT NO 36/37 SR NO 101/1 /1 NR B.U. BHANDARI BANER GAON PUNE CITY PUNE MH 411045 IN"
        },
        "email": "aditisawantmarch16@gmail.com"
      },
      {
        "company": "ACUTOK SALES AND MARKETING PRIVATE LIMITED",
        "attributes": {
          "city": "PLOT NO 36/37 SR NO 101/1 /1 NR B.U. BHANDARI BANER GAON PUNE CITY PUNE MH 411045 IN"
        },
        "email": "ak@acutok.com",
        "name": "ABHIJEET KHOT"
      },
      {
        "company": "ACUVITY CONSULTING INDIA PRIVATE LIMITED",
        "attributes": {
          "city": "B 408, FRESH LIVING APPT GAFFOOR NAGAR, MADHAPUR MADHAPUR SHAIKPET HYDERABAD TG 500081 IN"
        },
        "email": "anmurthy1960@gmail.com",
        "name": ". NARASIMHA MURTHY"
      },
      {
        "company": "ACV FINTECH PRIVATE LIMITED",
        "attributes": {
          "city": "DHARHARA, POST-PALIGANJ, P.S- PALIGANJ PALIGANJ PALIGANJ PATNA BR 801110 IN"
        },
        "email": "ckumar9208@gmail.com",
        "name": "ARUN KUMAR"
      },
      {
        "company": "ACVI JOINT VENTURE PRIVATE LIMITED",
        "attributes": {
          "city": "PLOT NO 34 S/F KHURANA KUNJ DWARKA SECTO N.S.I.T. DWARKA NEW DELHI SOUTH WEST DELHI DL 110078 IN"
        },
        "email": "mca27051991@gmail.com",
        "name": "SURAJ PANDEY"
      },
      {
        "company": "ACW INFRA ENGINEERS PRIVATE LIMITED",
        "attributes": {
          "city": "120 HARISH MUKHERJEE ROAD BHAWANIPORE KOLKATA KOLKATA WB 700025 IN"
        },
        "email": "acwinfraeng@gmail.com"
      },
      {
        "company": "ACX INDIA (IFSC) PRIVATE LIMITED",
        "attributes": {
          "city": "UNIT NO.17,GF PRAGYA ACCELERATION,IFSC-SEZ GIFT CITY GANDHINAGAR GANDHI NAGAR GJ 382355 IN"
        },
        "email": "vbd@envex.co",
        "name": "VISHWAJIT BHARAT DAHANUKAR"
      },
      {
        "company": "ACYUTAPRIYA PRIVATE LIMITED",
        "attributes": {
          "city": "RZ 83, GALI 11, KAILASHPURI EXTENSION INDIRA PARK NEW DELHI SOUTH WEST DELHI DL 110045 IN"
        },
        "email": "amit.pandey6792@gmail.com",
        "name": "AMIT KUMAR PANDEY"
      },
      {
        "company": "ACZEN TECHNOLOGIES PRIVATE LIMITED",
        "attributes": {
          "city": "FLAT NO 101, BLOCK 1,CBR DEEPTHISRI NAGAR,MADEENAG CHANDANAGAR TIRUMALAGIRI HYDERABAD TG 500050 IN"
        },
        "email": "bumasuryasrinivas2@gmail.com",
        "name": "BODAPATI UMA SURYA SRINIVAS"
      },
      {
        "company": "AD & AV BUILDERS AND CONTRACTORS PRIVATE LIMITED",
        "attributes": {
          "city": "BUILDING NO.196 H RAGHAVA COMPLEX,NEAR MMC HOSPITAL MAYYIL TALIPARAMBA KANNUR KL 670602 IN"
        },
        "email": "aamayyil@gmail.com",
        "name": "KUTTENCHERY ABHILASH"
      },
      {
        "company": "AD & JD CONSTRUCTION PRIVATE LIMITED",
        "attributes": {
          "city": "19 GANESH CHANDRA AVENUE 3RD FLOOR, FLAT NO 10A DHARMATALA KOLKATA KOLKATA WB 700013 IN"
        },
        "email": "cakolkata10@gmail.com",
        "name": "ANKEY DALMIA"
      },
      {
        "company": "AD ASSURANCE CONSULTANTS PRIVATE LIMITED",
        "attributes": {
          "city": "I-1, GARHWALI MOHALLA LAXMI NAGAR SHAHDARA NEW DELHI NEW DELHI DL 110092 IN"
        },
        "email": "avarun465@gmail.com",
        "name": ". KANIKA"
      },
      {
        "company": "AD DARSHARATHI CONSULTANCY (OPC) PRIVATE LIMITED",
        "attributes": {
          "city": "H NO 4,DEFENSE CLY GALI NO 15 MARUTI KUNJ BHONDSI BADSHAHPUR BADSHAHPUR GURGAON HR 122101 IN"
        },
        "email": "Ankierajput@gmail.com"
      },
      {
        "company": "AD DHANKAR CREATIONS PRIVATE LIMITED",
        "attributes": {
          "city": "C/O SAGAR DHANKAR MODEL TOWN, NEAR BY PASS JHAJJAR JHAJJAR JHAJJAR HR 124103 IN"
        },
        "email": "adcreations264@gmail.com",
        "name": "SUNITA DHANKHAR"
      },
      {
        "company": "AD EQUITY MANAGEMENT PRIVATE LIMITED",
        "attributes": {
          "city": "D-265 LAXMI NAGAR SHAHDARA NEW DELHI NEW DELHI DL 110092 IN"
        },
        "email": "disha25aggarwal@gmail.com",
        "name": "MONIKA SINGH"
      },
      {
        "company": "AD GEOENG PRIVATE LIMITED",
        "attributes": {
          "city": "RANUJADHAM SOCY, NR GANES NAGAR, PLOT 57 ST 2, RAJKOT SORATHIAWADI RAJKOT RAJKOT GJ 360002 IN"
        },
        "email": "info.adeng@gmail.com",
        "name": "AMIT MANSUKHBHAI DODIYA"
      },
      {
        "company": "AD INNOVATIVE INFINITY IT SOLUTIONS PRIVATE LIMITED",
        "attributes": {
          "city": "C/O BRIJESH KUMAR S/O KISHAN DUTT, S-14 KUNDLI SONIPAT SONIPAT HR 131028 IN"
        },
        "email": "deepakparashar8822@gmail.com",
        "name": "BRIJESH KUMAR"
      },
      {
        "company": "AD INSPIRATION DEVELOPMENT PRIVATE LIMITED",
        "attributes": {
          "city": "C/O AMARLAL SI DARMANANDA PUR BHAWANIPATNA BHAWANIPATNA G.CHOWK SADAR KALAHANDI OR 766002 IN"
        },
        "email": "Amarlals76@gmail.com",
        "name": "AMARLAL SI"
      },
      {
        "company": "AD MARKETING GREENWORLD PRIVATE LIMITED",
        "attributes": {
          "city": "22ND FLOOR, UNIT NO 2201A BRIGADE GATEWAY, MALLESWARAM WEST BANGALORE NORTH BANGALORE KA 560055 IN"
        },
        "email": "ajaysheta@gmail.com",
        "name": "AJAYKUMAR SHET"
      },
      {
        "company": "AD REALITY SERVICES PRIVATE LIMITED",
        "attributes": {
          "city": "UNIT NO. 1403, 14TH FLOOR PS SRIJAN CORPORATE PARK, BIDHAN NAGAR CK MARKET SALTLAKE NORTH 24 PARGANAS WB 700091 IN"
        },
        "email": "sanchetirealestate@gmail.com",
        "name": "PIYUSH JAIN"
      },
      {
        "company": "AD SOLARID ENERGY PRIVATE LIMITED",
        "attributes": {
          "city": "HOUSE NO. 279, SECTOR 15 A HISAR HISAR HISAR HR 125001 IN"
        },
        "email": "ad.solarid.pvt.ltd@gmail.com",
        "name": ". LEENA"
      },
      {
        "company": "AD STRUCTURAL SOLUTIONS (OPC) PRIVATE LIMITED",
        "attributes": {
          "city": "C/O MALA MODAK GR. FLOOR WES MANDIR BULBULI TALA SAHAJPUR KALNA BARDHAMAN WB 713405 IN"
        },
        "email": "Emc2.dipankar@gmail.com"
      },
      {
        "company": "AD VIVUM EDUCATION AND RESEARCH PRIVATE LIMITED",
        "attributes": {
          "city": "H NO. 480, WAQAR VILLA HAKIMJIKAWADA BHALDARPURA GANJIPETH NAGPUR NAGPUR MH 440018 IN"
        },
        "email": "kashifrazanaqvi@gmail.com",
        "name": "WAQAR MOHSIN RAZA NAQVI"
      },
      {
        "company": "AD&JD CONSULTANTS PRIVATE LIMITED",
        "attributes": {
          "city": "19 GANESH CHANDRA AVENUE 3RD FLOOR, FLAT NO 10A, DHARMATALA KOLKATA KOLKATA WB 700013 IN"
        },
        "email": "ankeydokania13@gmail.com",
        "name": "ANKEY DALMIA"
      },
      {
        "company": "AD-LIB BIO FEED PRIVATE LIMITED",
        "attributes": {
          "city": "C/O. SATPAL SINGH VILL. SERPUR,SODHIAN,BAGRIAN RD DHURI DHURI SANGRUR PB 148024 IN"
        },
        "email": "adlibbiofeedprivatelimited@gmail.com",
        "name": "VIVEK KUMAR"
      },
      {
        "company": "ADACODE SOLUTIONS PRIVATE LIMITED",
        "attributes": {
          "city": "87/1108-MLA-52 SOMISETTYNAGARREVWARD87 KNL-CAMP-B KURNOOL KURNOOL AP 518002 IN"
        },
        "email": "adacodesolutions@gmail.com",
        "name": "SHARADA MINGI"
      },
      {
        "company": "ADADVENT DIGITAL LABS PRIVATE LIMITED",
        "attributes": {
          "city": "C/O RAVISHANKAR AWASTHI BIJAPURI DHANPURI JABALPUR JABALPUR MP 483001 IN"
        },
        "email": "isourabhawasthi@gmail.com",
        "name": "MAYA RAVISHANKAR AWASTHI"
      },
      {
        "company": "ADAGIL SEISMIC SERVICES PRIVATE LIMITED",
        "attributes": {
          "city": "8-3-320 YELLAREDDY GUDA SRINAGAR COLONY KHAIRATABAD HYDERABAD TG 500073 IN"
        },
        "email": "adagilseismic@gmail.com",
        "name": "NATARAJU SAMUNURU"
      },
      {
        "company": "ADAGODORD INDUSTRIES PRIVATE LIMITED",
        "attributes": {
          "city": "FIRST FLOOR, RG06, 300 SYD, COSMOS GREENS, ALWAR BHIWARI IND. AREA. ALWAR TIJARA ALWAR RJ 301019 IN"
        },
        "email": "drdeepalichaturvedi@gmail.com",
        "name": "DEEPALI CHATURVEDI"
      },
      {
        "company": "ADAI ABRG FARMER PRODUCER COMPANY LIMITED",
        "attributes": {
          "city": "C/O RAYBHAN PANDU GAVALI AT POST MIRI PATHARDI PATHARDI AHMED NAGAR MH 414102 IN"
        },
        "email": "34adaiabrg@gmail.com",
        "name": "BALASAHEB GANGADHAR KORDE"
      },
      {
        "company": "ADAIA VENTURES PRIVATE LIMITED",
        "attributes": {
          "city": "3RD STREET ABHIRAMAPURAM HOUSE NO 27 RAJA ANNAMALAIPURAM CHENNAI CITY CORPORATION CHENNAI TN 600028 IN"
        },
        "email": "darshanabala@gmail.com",
        "name": "DARSHANA VIJAY YESUDAS"
      },
      {
        "company": "ADAIZA SOLUTION AND MARKETING PRIVATE LIMITED",
        "attributes": {
          "city": "C/O MD AQUEEL WARD NO.-05, BAHADURPUR MILKICHAK DARBHANGA DARBHANGA BR 846009 IN"
        },
        "email": "adaizamarketing@gmail.com",
        "name": "MD SHAMSUDDIN ALAM"
      },
      {
        "company": "ADAK CAPITAL PRIVATE LIMITED",
        "attributes": {
          "city": "C/O- SAMIR ADAK KULIAPARA, DHOBAPARA DHOBAPARA GUPTIPARA HOOGHLY WB 712512 IN"
        },
        "email": "adakcapitalpvtltd@gmail.com"
      },
      {
        "company": "ADAK MONEY ADVISORY PRIVATE LIMITED",
        "attributes": {
          "city": "FL NO408, B, SN 54/18 KUBER PROPERTIES,NR. SUNB AMBEGAON BK HAVELI PUNE MH 411046 IN"
        },
        "email": "ganeshadak848484@gmail.com",
        "name": "KALYANI GANESH ADAK"
      },
      {
        "company": "ADALIUS PLATFORM SERVICES PRIVATE LIMITED",
        "attributes": {
          "city": "4C BLOCK C ,SPRING VALLEY PHASE 2, CHOWK LALPUR LOWER BAZAR RANCHI RANCHI JH 834001 IN"
        },
        "email": "ps@adalius.com",
        "name": "MAYANK KUMAR SINHA"
      },
      {
        "company": "ADAM & EVE FOODS PRIVATE LIMITED",
        "attributes": {
          "city": "HOUSE NO. 568-B SECTOR 39 GALLERIA DLF-IV GALLERIA DLF-IV GURGAON HR 122009 IN"
        },
        "email": "amar95ahlawat@gmail.com",
        "name": "VIPIN KUMAR"
      },
      {
        "company": "ADAM ADVOCATES AND LEGAL CONSULTANTS PRIVATE LIMITED",
        "attributes": {
          "city": "70/ 2349, VALITAVEETTIL, KALOOR PO, KALOOR ERNAKULAM ERNAKULAM KL 682017 IN"
        },
        "email": "adamadvocates@adamholdings.ae",
        "name": "ANISHA KOYAKUTTY"
      },
      {
        "company": "ADAM AGARWOOD PRIVATE LIMITED",
        "attributes": {
          "city": "1-61/1 CHINTHAGURTHY MALLEPALLI CHINTAGURTHI VVPALEM KHAMMAM TG 507318 IN"
        },
        "email": "prasadsaampangi@gmail.com",
        "name": "JAMPALA PRASAD SAMPANGI"
      },
      {
        "company": "ADAM AS INDUSTRIES PRIVATE LIMITED",
        "attributes": {
          "city": "P NO. 342, ARAJI NO. 734 JAWAHAR PURAM NEW PAC LINES NEW PAC LINES KANPUR NAGAR UP 208015 IN"
        },
        "email": "mauryarajar@gmail.com",
        "name": "SULTAN KHAN"
      },
      {
        "company": "ADAM FINASTRA PRIVATE LIMITED",
        "attributes": {
          "city": "70/ 2349, VALITAVEETTIL, ASHOKA ROAD KALOOR ERNAKULAM ERNAKULAM KL 682017 IN"
        },
        "email": "adamgroupinternational@gmail.com",
        "name": "VALIYAVEETIL ABDULKALAM SALEEL"
      },
      {
        "company": "ADAM FOOTBALL CLUB PRIVATE LIMITED",
        "attributes": {
          "city": "SURVEY NO. 37/08 VILLA NO S2 POKHARKARWADI MONTAG KASHELE KARJAT RAIGARH(MH) MH 410201 IN"
        },
        "email": "ali_1976@hotmail.com",
        "name": "ALI AHMED"
      },
      {
        "company": "ADAM INSTITUTE OF MANAGEMENT AND TECHNOLOGY PRIVATE LIMITED",
        "attributes": {
          "city": "70/ 2349, VALITAVEETTIL ASHOKA ROAD KALOOR ERNAKULAM ERNAKULAM KL 682017 IN"
        },
        "email": "adaminstitute@adamholdings.ae",
        "name": "ANISHA KOYAKUTTY"
      },
      {
        "company": "ADAM MOTORS (OPC) PRIVATE LIMITED",
        "attributes": {
          "city": "6/353-1 KMMUPS PERINTHALMANNA SOUTH PERINTALMANNA PERINTHALMANNA MALAPPURAM KL 679322 IN"
        },
        "email": "adammotors604@gmail.com"
      },
      {
        "company": "ADAM SUVAI ZONE (OPC) PRIVATE LIMITED",
        "attributes": {
          "city": "NO 36, RANGAN STREET, T NAGAR THYGARAYANAGAR CHENNAI CHENNAI TN 600017 IN"
        },
        "email": "accounts@tazkamar.com"
      },
      {
        "company": "ADAMAS LAB GROWN DIAMONDS PRIVATE LIMITED",
        "attributes": {
          "city": "5,KAILASH BHUVAN, 2ND FLOOR PLOTNO36A, MAJAS RD JOGESHWARI EAST JOGESHWARI EAST MUMBAI MH 400060 IN"
        },
        "email": "info@adamasdiamonds.in",
        "name": "BONNY JEETESH GANGAR"
      },
      {
        "company": "ADAMAS UNITED SPORTS PRIVATE LIMITED",
        "attributes": {
          "city": "HAUTE STREET, 86A TOPSIA ROAD, 2ND FLOOR, GOBINDA KHATICK ROAD KOLKATA KOLKATA WB 700046 IN"
        },
        "email": "royrajchamp@gmail.com",
        "name": "SAMIT RAY"
      },
      {
        "company": "ADAMITE ENGINEERING AND MINING PRIVATE LIMITED",
        "attributes": {
          "city": "FLAT NO. 403, 4TH FLOOR EKLAVYA TOWER PUNDAG RANCHI RANCHI JH 834004 IN"
        },
        "email": "Ombhagat4255@gmail.com",
        "name": "VINOD KUMAR SINGH"
      },
      {
        "company": "ADAMITIS EXTENDI PRIVATE LIMITED",
        "attributes": {
          "city": "PLOT NO 348 PRASHANTHI HILL,MEERPET MEERPET SAROORNAGAR HYDERABAD TG 500097 IN"
        },
        "email": "plprasana@gmail.com",
        "name": "YERRAMALLA SRINATH"
      },
      {
        "company": "ADAMPLE TECH PRIVATE LIMITED",
        "attributes": {
          "city": "A-30, KH NO 597,GALI NO 2 A-BLOCK, GOKAL PUR SABHAPUR DELHI NORTH EAST NORTH WEST DELHI DL 110094 IN"
        },
        "email": "guptasunny30723@gmail.com",
        "name": "SUNNY GUPTA"
      },
      {
        "company": "ADAMPURIA FASHION PRIVATE LIMITED",
        "attributes": {
          "city": "G-123, 1A RIICO, SITAPURA SANGANER, SITAPURA INDUSTRIAL AREA JAIPUR JAIPUR RJ 302022 IN"
        },
        "email": "vinugarg25@Gmail.com",
        "name": "UMESH KUMAR"
      },
      {
        "company": "ADAMSHERBOCARE PRIVATE LIMITED",
        "attributes": {
          "city": "C/OMOHD ZAHID IJJAT NAGAR MAHIPAT MAU NEAR MADEENA KAKORI LUCKNOW LUCKNOW UP 226101 IN"
        },
        "email": "alamkhursheed05@gmail.com",
        "name": "KHURSHEED ALAM"
      },
      {
        "company": "ADAMUS LIFESCIENCES PRIVATE LIMITED",
        "attributes": {
          "city": "FL NO 901,BLISS APARTMENT PL 161,171,172A,173,SEC30 KHARGHAR PANVEL RAIGARH(MH) MH 410210 IN"
        },
        "email": "magtechie11@gmail.com",
        "name": "MOHSIN ALI"
      },
      {
        "company": "ADAMYA ADITI GURUKUL FOUNDATION",
        "attributes": {
          "city": "C/O - BRAJESH KUMAR GRAM KONI ANAND , MANIKPUR SANDA KONCH GAYA BR 824235 IN"
        },
        "email": "amitaabhigyan@gmail.com",
        "name": "BRAJESH KUMAR"
      },
      {
        "company": "ADAMYA POLES AND LIGHT PRIVATE LIMITED",
        "attributes": {
          "city": "3/294 VIKALP KHAND GOMTINAGAR LUCKNOW LUCKNOW UP 226010 IN"
        },
        "email": "adamyapoles2024@gmail.com"
      },
      {
        "company": "ADAMYA SHOWCASE VENTURES FOUNDATION",
        "attributes": {
          "city": "83/204, R H B, PRATAP NAGAR PRATAP NAGAR HOUSING BOARD JAIPUR JAIPUR RJ 302033 IN"
        },
        "email": "sharma.tapan86@gmail.com",
        "name": "TAPAN SHARMA"
      },
      {
        "company": "ADAN LIFESTYLE PRIVATE LIMITED",
        "attributes": {
          "city": "SEHJADA MOMIA KHUH MANDIALA MALERKOTLA MALERKOTLA MALERKOTLA SANGRUR PB 148023 IN"
        },
        "email": "ashrafmlk24@gmail.com",
        "name": "MOHAMMAD ASHRAF"
      },
      {
        "company": "ADANA COMMODITY PRIVATE LIMITED",
        "attributes": {
          "city": "PURATHAYIL (H), KOZHIMALA P.O, KOZHIMALA THIRUVALLA PATHANAMTHITTA KL 689541 IN"
        },
        "email": "jerinmathew705@gmail.com",
        "name": ". JERIN MATHEW JAMES"
      },
      {
        "company": "ADANGLOBE TECHNOLOGIES PRIVATE LIMITED",
        "attributes": {
          "city": "PL 153, ORCHID D-203 SECT.11, TULSI LANDMARK INDRAYANINAGAR PUNE CITY PUNE MH 411026 IN"
        },
        "email": "adanglobetechnology@gmail.com",
        "name": "ANITA NITINKUMAR BABAR"
      },
      {
        "company": "ADANI ENERGY SOLUTIONS STEP-THIRTEEN LIMITED",
        "attributes": {
          "city": "ADANI CORPORATE HOUSE, SHANTIGRAM, SG HIGHWAY KHODIYAR GANDHINAGAR GANDHI NAGAR GJ 382421 IN"
        },
        "email": "csaandatl@outlook.com",
        "name": "PUSHPENDRASINH BAHADURSINH ZALA"
      },
      {
        "company": "ADANI ENERGY SOLUTIONS STEP-TWELVE LIMITED",
        "attributes": {
          "city": "ADANI CORPORATE HOUSE, SHANTIGRAM, SG HIGHWAY KHODIYAR DASKROI AHMEDABAD GJ 382421 IN"
        },
        "email": "csaandatl1@outlook.com",
        "name": "PUSHPENDRASINH BAHADURSINH ZALA"
      },
      {
        "company": "ADANI ESYASOFT SMART RESEARCH PRIVATE LIMITED",
        "attributes": {
          "city": "ADANI CORPORATE HOUSE, SHANTIGRAM NR V D CIRCLE KHODIYAR DASKROI AHMEDABAD GJ 382421 IN"
        },
        "email": "kbharath0509@gmail.com",
        "name": "AJAY KUMAR SINHA"
      },
      {
        "company": "ADANI ESYASOFT SMART SERVICES PRIVATE LIMITED",
        "attributes": {
          "city": "ADANI CORPORATE HOUSE, SHANTIGRAM NR V D CIRCLE KHODIYAR DASKROI AHMEDABAD GJ 382421 IN"
        },
        "email": "ajay.sinha@esyasoft.com",
        "name": "AJAY KUMAR SINHA"
      },
      {
        "company": "ADANKAA AUTOMATION SYSTEMS PRIVATE LIMITED",
        "attributes": {
          "city": "P.NO 27, DEVI KARUMARIAMM 1ST STREET KOLAPAKKAM GERUGAMBAKKAM SRIPERUMBUDUR KANCHIPURAM TN 600122 IN"
        },
        "email": "mskiitm2004@gmail.com",
        "name": "AMUTHA SREEKUMAR"
      },
      {
        "company": "ADAONE INDIA PRIVATE LIMITED",
        "attributes": {
          "city": "SY NO. 12, FLAT NO. 402 SUNANDA HOMES, KONDAPUR CYBERABAD SHAIKPET HYDERABAD TG 500081 IN"
        },
        "email": "aniket.mohanty220@gmail.com",
        "name": "ADITYA PRATAP MOHANTY"
      },
      {
        "company": "ADAPEX DIGITAL PRIVATE LIMITED",
        "attributes": {
          "city": "HOUSE NO 161, 162 &AMP; 163 3RD FLR OLD GUPTA COLONY G.T.B.NAGAR DELHI NORTH WEST DELHI DL 110009 IN"
        },
        "email": "gauravbhalla002@gmail.com",
        "name": "GAURAV BHALLA"
      },
      {
        "company": "ADAPTA VENTURES (OPC) PRIVATE LIMITED",
        "attributes": {
          "city": "TRRA 75A, HEMAM RAJALAYAM KODAMKLULANGARA TRIPUNITHURA ERNAKULAM ERNAKULAM KL 682301 IN"
        },
        "email": "hob.houseofbrandz@gmail.com"
      },
      {
        "company": "ADAPTDYNAMIC ENERGY PRIVATE LIMITED",
        "attributes": {
          "city": "15TH FLOOR, A BLOCK WESTGATE BUSINESS BAY JIVRAJ PARK AHMADABAD CITY AHMEDABAD GJ 380051 IN"
        },
        "email": "disha_0910@yahoo.co.in"
      },
      {
        "company": "ADAPTECH SYNERGY SYSTEMS PRIVATE LIMITED",
        "attributes": {
          "city": "W/O RAJEEV PURI 530 F.I.E PATPAR GANJ NEAR PARK NEW DELHI NEW DELHI NEW DELHI DL 110092 IN"
        },
        "email": "icurv23@gmail.com"
      },
      {
        "company": "ADAPTEX EXPORT (INDIA) PRIVATE LIMITED",
        "attributes": {
          "city": "SCO.1, FIRST FLOOR, PSB BUILDING, SIRHIND ROAD PATIALA PATIALA PATIALA PB 147001 IN"
        },
        "email": "adaptexexportindia@gmail.com",
        "name": "JATINDER PAL SINGH"
      },
      {
        "company": "ADAPTIS SAFE SYSTEMS PRIVATE LIMITED",
        "attributes": {
          "city": "FLAT NO 201 BLDG NO C, HELICONIA II HADAPSAR PUNE PUNE MH 411028 IN"
        },
        "email": "adaptissafe@gmail.com",
        "name": "GAJANAN SUKUMAR GHATAGE"
      },
      {
        "company": "ADAPTIVE DEVELOPMENT PRIVATE LIMITED",
        "attributes": {
          "city": "1 ST FLOOR, VARSHA TOWER 8/14/ A, NEHRU NAGAR KONGANTHANPARAI PALAYANKOTTAI TIRUNELVELI TN 627007 IN"
        },
        "email": "adaptivemanager@gmail.com",
        "name": "BALASUBRAMANIAN KASAMUTHU"
      },
      {
        "company": "ADAPTIVE EDGE PRIVATE LIMITED",
        "attributes": {
          "city": "10/395 MALIYEKKAPPADY EDATHALA ALUVA ERNAKULAM KL 683561 IN"
        },
        "email": "cs.unnikrishnan10@gmail.com",
        "name": "UNNIKRISHNAN CHATHAMALA SURENDRAN"
      },
      {
        "company": "ADAPTIVE INTEGRATIONS CHRONIX PRIVATE LIMITED",
        "attributes": {
          "city": "PNO.-1, 2, 3,45,46,47 POONAM COLONY,VISTAR SOGARIA KOTA KOTA RJ 324002 IN"
        },
        "email": "aichronix@gmail.com",
        "name": "INDU CHOUDHARI"
      },
      {
        "company": "ADAPTIVE INTELLIGENCE PRIVATE LIMITED",
        "attributes": {
          "city": "N-9 CHANDRA NAGAR HOU.SOC PLOT NO 13 CIDCO AURANGABAD CITY AURANGABAD AURANGABAD MH 431001 IN"
        },
        "email": "adaptiveintelligencepl@gmail.com",
        "name": "RANJIT PURUSHOTTAM KULKARNI"
      },
      {
        "company": "ADAPTIVE MANAGEMENT AND ALLIED SERVICES PRIVATE LIMITED",
        "attributes": {
          "city": "E-21/25 (NEW E-21/990) GALI NO 21, EAST GOKALPUR SABHAPUR DELHI NORTH EAST NORTH WEST DELHI DL 110094 IN"
        },
        "email": "vineetchauhan1987@gmail.com",
        "name": ". FIRDOS"
      },
      {
        "company": "ADAPTVENT AI PRIVATE LIMITED",
        "attributes": {
          "city": "F.NO. D-404 MAHAVEER, MERIDIAN APT 11TH CROSS, DODDAKALLASANDRA BANGALORE SOUTH BANGALORE KA 560062 IN"
        },
        "email": "legal@adaptiveaiventures.com",
        "name": "SAGAR SUBHASH KOTEKAR PATIL"
      },
      {
        "company": "ADAPTWARE SOLUTIONS PRIVATE LIMITED",
        "attributes": {
          "city": "SCO 37, SECTOR 11 PANCHKULA SECTOR 12 PANCHKULA PANCHKULA HR 134112 IN"
        },
        "email": "akshayagg12@gmail.com",
        "name": "AKSHAY AGGARWAL"
      },
      {
        "company": "ADAPTWISE SERVICES PRIVATE LIMITED",
        "attributes": {
          "city": "S/O LALDHAN MAHTO COMPANI SARAI, WARD NO. 8 SASARAM SASARAM ROHTAS BR 821115 IN"
        },
        "email": "rittickbhatia26@gmail.com",
        "name": "RITTICK ASHOK KUMAR BHATIA"
      },
      {
        "company": "ADAR INFRATECH PRIVATE LIMITED",
        "attributes": {
          "city": "C-56/5 SECTOR-62 NOIDA NOIDA GAUTAM BUDDHA NAGAR UP 201301 IN"
        },
        "email": "Ravin4313@gmail.com",
        "name": ". SANGEETA"
      },
      {
        "company": "ADARCARE HEALTHTECH PRIVATE LIMITED",
        "attributes": {
          "city": "PLOT NO-83/C SAILESHREE VIHAR K I I T BHUBANESWAR KHORDA OR 751024 IN"
        },
        "email": "arutourtravels@gmail.com",
        "name": "AVIJIT NANDA"
      },
      {
        "company": "ADARNA TECH SOLUTIONS (OPC) PRIVATE LIMITED",
        "attributes": {
          "city": "S.N 22 PL NO26 FLT NO 1O1 SHARADA RESIDENCY NEPUNE DHANKAWADI PUNE CITY PUNE MH 411043 IN"
        },
        "email": "Renukawagh411@gmail.com"
      },
      {
        "company": "ADARSH AVIATION (OPC) PRIVATE LIMITED",
        "attributes": {
          "city": "C-110, APARNA ALTIUS, 4-8 SATHIMRAI VILLAGE SHAMSHABAD (K.V.RANGAREDDY) RANGAREDDY K.V.RANGAREDDY TG 501218 IN"
        },
        "email": "adarshpilot@gmail.com"
      },
      {
        "company": "ADARSH BHARAT MISSION FOUNDATION",
        "attributes": {
          "city": "C/O SHEETAL JAYESHCHANDRA 403 RING ROAD GONDIYA GONDIA GONDIYA GONDIA MH 441601 IN"
        },
        "email": "JAYESH_RAMADE@HOTMAIL.COM",
        "name": "JAYESHCHANDRA RAMAN RAMADE"
      },
      {
        "company": "ADARSH O-PVC PIPES PRIVATE LIMITED",
        "attributes": {
          "city": "KILLA NO.36//13/2 (6-16), 36/14 (8-2) NATHUPUR SONIPAT SONIPAT HR 131029 IN"
        },
        "email": "associatessamaj@gmail.com",
        "name": "DEVENDER KUMAR SOLANKI"
      },
      {
        "company": "ADARSH PAPAD PRIVATE LIMITED",
        "attributes": {
          "city": "#54/6, KAMAKSHI PALYA, MAGADI ROAD KAMAKSHIPALYA BANGALORE NORTH BANGALORE KA 560079 IN"
        },
        "email": "adarshpapadprivatelimited@gmail.com",
        "name": "SURESH KUMAR"
      },
      {
        "company": "ADARSH VIDHAN FOUNDATION",
        "attributes": {
          "city": "V N PLAZA, GROUND FLOOR PGS MORE, RAJNAGAR DANAPUR BAZAR DINAPUR-CUM-KHAGAUL PATNA BR 801503 IN"
        },
        "email": "gulshan.chandra95@gmail.com",
        "name": "NIKITA KUMARI"
      },
      {
        "company": "ADARSHA SEWING SOLUTION PRIVATE LIMITED",
        "attributes": {
          "city": "C/O MD. ABUTALEB SHAIKH BARA KULBERI BARA KUL BERIA KALIGANJ NADIA WB 741150 IN"
        },
        "email": "hiazharulislam@gmail.com",
        "name": "CHUMKI KHATUN"
      },
      {
        "company": "ADARSHAMAVAL ORGANIC FARMERS PRODUCER COMPANY LIMITED",
        "attributes": {
          "city": "AT- BHOYARE, TAL- MAVAL, DIST-PUNE BHOYARE MAVAL PUNE MH 412106 IN"
        },
        "email": "vasudevlakhimale@gmail.com",
        "name": "GABAJI MAHADU PINGLE"
      },
      {
        "company": "ADARSHBRIDGE FINANCE PRIVATE LIMITED",
        "attributes": {
          "city": "155, NEW RASULABAD CAVELLARY LINES ALLAHABAD ALLAHABAD UP 211004 IN"
        },
        "email": "adarshpatel2013@gmail.com",
        "name": "MADHAVI PATEL"
      },
      {
        "company": "ADARSHCHINCHOLI AGRO PRODUCER COMPANY LIMITED",
        "attributes": {
          "city": "AT -GH.NO. CHINCHOLI N TAL - BHOKARDAN BHOKARDAN BHOKARDAN JALNA MH 431114 IN"
        },
        "email": "rajureshwarfpo77@gmail.com",
        "name": "DATTU SANDU SHELKE"
      },
      {
        "company": "ADARSHNI SECURITY & MANPOWER SERVICES PRIVATE LIMITED",
        "attributes": {
          "city": "19/35 G/F TRILOKPURI EAST DELHI EAST DELHI EAST DELHI DL 110091 IN"
        },
        "email": "Adarshnimanpower.private@gmail.com",
        "name": "VIKAS KUMAR"
      },
      {
        "company": "ADAS GLOBAL EXPORTS PRIVATE LIMITED",
        "attributes": {
          "city": "2157, GF, 3RD B MAIN HAMPINAGAR RPC LAYOUT VIJAYANAGAR (BANGALORE) BANGALORE NORTH BANGALORE KA 560040 IN"
        },
        "email": "exports.bharat2024@gmail.com",
        "name": "SONAM CHANDRA"
      },
      {
        "company": "ADAS MINING AND INFRA PRIVATE LIMITED",
        "attributes": {
          "city": "PLOT NO 266 HUMMING COTERIE, KACHNA KRISHAK NAGAR RAIPUR RAIPUR CT 492012 IN"
        },
        "email": "singhdurga872@gmail.com",
        "name": "ABHISHEK SINGH"
      },
      {
        "company": "ADAS STRATEGIES PRIVATE LIMITED",
        "attributes": {
          "city": "B-101 TOWER B,MUNICIPAL OFFICERSH/BSOCIETY SEC104 LANDRAN S.A.S.NAGAR (MOHALI) RUPNAGAR PB 140307 IN"
        },
        "email": "yetsheflies@gmail.com",
        "name": "SUKHJEET KAUR"
      },
      {
        "company": "ADASH VENTURES PRIVATE LIMITED",
        "attributes": {
          "city": "FF 4 H.K. COMPLEX, VIKAS SHOPS &AMP; APP. OWNERS PALDI (AHMEDABAD) AHMADABAD CITY AHMEDABAD GJ 380007 IN"
        },
        "email": "deep3970@gmail.com",
        "name": "MAHESHKUMAR RAMNIKLAL SHAH"
      },
      {
        "company": "ADASLABS TECHNOLOGIES PRIVATE LIMITED",
        "attributes": {
          "city": "1026, ROADWAY STAND KE BAHAR DIGGI NA MALPURA DIGGI TONK TONK RJ 304504 IN"
        },
        "email": "official.connect@drivomate.com",
        "name": "HUTESH KUMAR GAUTTAM"
      },
      {
        "company": "ADASTRAINDIA DATA SERVICES PRIVATE LIMITED",
        "attributes": {
          "city": "101A, 1ST FLR, DELTA ONE GIGA SPACE IT PARK VIMAN NAGAR PUNE PUNE MH 411014 IN"
        },
        "email": "kulasekaran.pandiyan@adastragrp.com",
        "name": "ABHISHEK MISHRA"
      },
      {
        "company": "ADATTE PLASTIC WASTE MANAGEMENT PRIVATE LIMITED",
        "attributes": {
          "city": "H.NO. 256-E/A KH NO. 1614 UPPER GF,VILLAGE NARAINA INDERPURI NEW DELHI CENTRAL DELHI DL 110012 IN"
        },
        "email": "plastics@adatte.in",
        "name": "NITIN BANSAL"
      },
      {
        "company": "ADAVI ADIVASI FARMERS PRODUCER COMPANY LIMITED",
        "attributes": {
          "city": "C/O TERDS, NEARJAIPURJUNC ARAKU(V&AMP;P) , NARSIPATNAM DUMBRIGUDA CHODAVARAM VISAKHAPATNAM AP 531151 IN"
        },
        "email": "terdsnog@gmail.com",
        "name": "SEEDHARI APPARAO"
      },
      {
        "company": "ADAVI NATURA AND FASHION PRIVATE LIMITED",
        "attributes": {
          "city": "NO.C-103,KURICHI HOUSING UNIT,PHASE I COIMBATORE INDUSTRIAL ESTATE COIMBATORE SOUTH COIMBATORE TN 641021 IN"
        },
        "email": "adavilife@gmail.com",
        "name": "PALANISAMY PARISHITH"
      },
      {
        "company": "ADAYAANT FOUNDATION",
        "attributes": {
          "city": "C/O SHRI JATADHARI SINGH WARD-12 IMALIPARABHATGAON BHATGAON COLLY SURAJPUR SURGUJA CT 497235 IN"
        },
        "email": "adayaantfoundation@gmail.com",
        "name": "DEEPAK KUMAR MISHRA"
      },
      {
        "company": "ADB CONSUMER PRIVATE LIMITED",
        "attributes": {
          "city": "ROOM-7, FLOOR-10TH OF SHANTINIKETAN,8, CAMAC ST SHAKESPEARE SARANI KOLKATA KOLKATA WB 700017 IN"
        },
        "email": "adbconsumers@gmail.com",
        "name": "DEBJANI BOSE"
      },
      {
        "company": "ADB FINTECH IMF PRIVATE LIMITED",
        "attributes": {
          "city": "H NO.27/502 Q NO.126/2, SOMWARI QTR. HANUMAN NAGAR NAGPUR NAGPUR MH 440024 IN"
        },
        "email": "adbfintechimf@gmail.com",
        "name": "AKASH DEVIDAS BORKAR"
      },
      {
        "company": "ADB FOODS AND HOSPITALITY PRIVATE LIMITED",
        "attributes": {
          "city": "BOOTH NO 180 SECTOR 36 D SECTOR 36 (CHANDIGARH) CHANDIGARH CHANDIGARH CH 160036 IN"
        },
        "email": "aadi.adb14@gmail.com",
        "name": "SUNIL BANSAL"
      },
      {
        "company": "ADBANESHWAR NATURAL FARMING FARMER PRODUCER COMPANY LIMITED",
        "attributes": {
          "city": "C/O SHRIKRUSHNA TADAS AT PO SAWARGAON JIRE SAWARGAON JIRE WASHIM WASHIM MH 444510 IN"
        },
        "email": "shubhamkhillare54@gmail.com",
        "name": "PRADIP TATERAV INGLE"
      },
      {
        "company": "ADBHOOT HYDROCARBONS PRIVATE LIMITED",
        "attributes": {
          "city": "766/178 SAKTHI TOWERS ANNA SALAI SHASTRI BHAVAN CHENNAI CHENNAI TN 600006 IN"
        },
        "email": "ravik@aban.com",
        "name": "RAVI KANNAN"
      },
      {
        "company": "ADBHUTAH FOODS PRIVATE LIMITED",
        "attributes": {
          "city": "H 1/22, VKIA RICCO BHADHARNA VISTAR VISHWAKARMA INDUSTRIAL AREA JAIPUR JAIPUR RJ 302013 IN"
        },
        "email": "mantri.vaibhav8@gmail.com",
        "name": "HITESH DHANWANI"
      },
      {
        "company": "ADBI DUNIYA FOUNDATION",
        "attributes": {
          "city": "SYNO-12/A/1 4 TH FLOOR YUNUS MANOR MAKKAIPOOL NANPURA SURAT CITY SURAT GJ 395001 IN"
        },
        "email": "adbiduniya@gmail.com",
        "name": "HABIB IMTIYAZ KINKHABWALA"
      },
      {
        "company": "ADBM REAL ESTATE ADVISORY PRIVATE LIMITED",
        "attributes": {
          "city": "UNIT 105,KESHWA COMM PREM CHS LTD, PLOT C, BKC BANDRA(EAST) BANDRA MUMBAI MH 400051 IN"
        },
        "email": "adbmrealestate105@gmail.com",
        "name": "DEEPAK KUMAR SINGH"
      },
      {
        "company": "ADBOT MEDIA (OPC) PRIVATE LIMITED",
        "attributes": {
          "city": "249/6,THAPAR NAGAR, GURUDWARA ROAD MEERUT TEHSIL MEERUT MEERUT UP 250002 IN"
        },
        "email": "shivani3188.sj@gmail.com"
      },
      {
        "company": "ADBURNER MEDIA SOLUTIONS PRIVATE LIMITED",
        "attributes": {
          "city": "15/408 CHAMPA ROAD SHUKLAGANJ GANGA GHAT UNNAO UNNAO UP 209861 IN"
        },
        "email": "Rahulgour238@gmail.com",
        "name": "ANIRUDDH KUMAR RAWAT"
      },
      {
        "company": "ADBUTVAAHAK PRIVATE LIMITED",
        "attributes": {
          "city": "NO.41/1, 3RD FLOOR, BULL TEMPLE ROAD, BASAVANAGUDI BANGALORE SOUTH BANGALORE KA 560004 IN"
        },
        "email": "nithin.goona@gmail.com",
        "name": "NITHIN KUMAR GOONA"
      },
      {
        "company": "ADC HINDUSTAN CORPORATION LIMITED",
        "attributes": {
          "city": "BLD 1-89/A/25 PNO 13 VILL JUBILEE HILLS MADHAPUR SHAIKPET HYDERABAD TG 500081 IN"
        },
        "email": "aditya.chakraborty@adicfood.com",
        "name": "ADITYA CHAKRABORTY"
      },
      {
        "company": "ADC VENTURE INDIA PRIVATE LIMITED",
        "attributes": {
          "city": "OFFICE NO. 605 CLIFFTAN CORPORATE A.B. ROAD VIJAY NAGAR INDORE INDORE MP 452010 IN"
        },
        "email": "Aditya.chakraborty@adicfood.com",
        "name": "ADITYA CHAKRABORTY"
      },
      {
        "company": "ADC WORKFORCE PRIVATE LIMITED",
        "attributes": {
          "city": "PLOT NO 8,AMARNATH COLONY KOLAR ROAD, KOLAR ROAD BHOPAL BHOPAL MP 462042 IN"
        },
        "email": "adc.workforce@gmail.com",
        "name": "RUCHI SHRIVASTAVA"
      },
      {
        "company": "ADCAM DIGITAL PRIVATE LIMITED",
        "attributes": {
          "city": "198/ 1M.L. BAGLA SADAN, ICR RD NEAR SHYAM MANDIR BARGANDA GIRIDIH GIRIDH JH 815301 IN"
        },
        "email": "Adcamdigital@gmail.com",
        "name": "SHADAB SHAMIM"
      },
      {
        "company": "ADCANCE FUTURE COMPUTER TECHNOLOGY & TRENING CENTER PRIVATE LIMITED",
        "attributes": {
          "city": "C/O SRI SUDARSHAN SINGH VILL KORMAHRI KATRAKALA DAIDHAN KOCHAS ROHTAS BR 821112 IN"
        },
        "email": "bajarangisingh563@gmail.com",
        "name": "BAJARANGI SINGH"
      },
      {
        "company": "ADCARE HOSPITALS PRIVATE LIMITED",
        "attributes": {
          "city": "79, MERCHENT HOUSE KAPAD BAZAR MAHIM BAZAR MUMBAI MUMBAI MH 400016 IN"
        },
        "email": "Adcarehospitals@gmail.com",
        "name": "ANAS TARIQUE CHUNAWALA"
      },
      {
        "company": "ADCB TRADING STAR PRIVATE LIMITED",
        "attributes": {
          "city": "C/O KULDEEP SAINI, GALI NO. 1, RAJIV NAGAR, ROHTAK ROHTAK ROHTAK HR 124001 IN"
        },
        "email": "adcbprivatelimited2024@gmail.com",
        "name": "MANAV SAINI"
      },
      {
        "company": "ADCOLOURS BRAND COMMUNICATION DESIGN PRIVATE LIMITED",
        "attributes": {
          "city": "808/B RAJESHRI APRT RESI COMPLEX CHS, MAHAVIR NGR KANDIVALI WEST KANDIVALI WEST MUMBAI MH 400067 IN"
        },
        "email": "admin@adcolours.com",
        "name": "DHAVAL GIRISHKUMAR KOTHARI"
      },
      {
        "company": "ADCRT ADVERTISING PRIVATE LIMITED",
        "attributes": {
          "city": "2-102, PLOT NO. 3, BANDARI LAYOUT NIZAMPET QUTUBULLAPUR HYDERABAD TG 500090 IN"
        },
        "email": "vijayagadewar143@gmail.com",
        "name": "VANKAMAMIDI SWAPNA"
      },
      {
        "company": "ADCTROGEN PHARMACEUTICAL PRIVATE LIMITED",
        "attributes": {
          "city": "GF 36 A BLOCK AMRAPALI SHOPPINGVEJALPUR M+OGPART JIVRAJ PARK AHMADABAD CITY AHMEDABAD GJ 380051 IN"
        },
        "email": "Shikhapandey53@gmail.com",
        "name": "DISHA DINESHBHAI SHAH"
      },
      {
        "company": "ADD PLUS CORP PRIVATE LIMITED",
        "attributes": {
          "city": "B-45, FIRST FLOOR SECTOR -69 NOIDA NOIDA GAUTAM BUDDHA NAGAR UP 201301 IN"
        },
        "email": "addpluscorp@gmail.com",
        "name": "SHASHIPRABHA GAUR"
      },
      {
        "company": "ADD WINGS MARTIAL ART AND SPORTS FOUNDATION",
        "attributes": {
          "city": "C/O PAWAN KUMAR, BEGRAJ BHAWAN, VIDHYA PARK RATANADA JODHPUR JODHPUR RJ 342011 IN"
        },
        "name": "CHANDAN KUMAWAT"
      },
      {
        "company": "ADDAS ENGINEERING PROJECTS PRIVATE LIMITED",
        "attributes": {
          "city": "403 FENKIN EMPIRE CHS LTD THANE THANE THANE THANE MH 400601 IN"
        },
        "email": "Iftikhar@meplprojects.com",
        "name": "MOHD IFTIKHAR"
      },
      {
        "company": "ADDAS SYSTEMS SOFTWARE PRIVATE LIMITED",
        "attributes": {
          "city": "3/127(1B) MARIAMMAN KOVIL STREET , PERUMANALLUR PERUMANALLUR TIRUPUR COIMBATORE TN 641666 IN"
        },
        "email": "sales@addassystems.com",
        "name": "DEVENDRAN GAYATHRI"
      },
      {
        "company": "ADDATTO SOFTWARE SERVICES PRIVATE LIMITED",
        "attributes": {
          "city": "CORPORATE OFFICE 3004 EMERALD HOUSE SD ROAD SECUNDERABAD HYDERABAD HYDERABAD TG 500003 IN"
        },
        "email": "rajarambommaraju@gmail.com",
        "name": "RAJARAM BOMMARAJU"
      },
      {
        "company": "ADDBLU INNOVATORS PRIVATE LIMITED",
        "attributes": {
          "city": "C3,S104,NAVINS SPRING FIELD,VADAKUPATTU MEDAVAKKAM TAMBARAM KANCHIPURAM TN 600100 IN"
        },
        "email": "iraimudi@gmail.com",
        "name": "VANANGAMUDI IRAIMUDI"
      },
      {
        "company": "ADDBLUE DEF AUTOMOBILE PRIVATE LIMITED",
        "attributes": {
          "city": "NO6 NEHRU NAGAR NGO A COLONY PERUMALPURAM PALAYAMKOTTAI TIRUNELVELI TN 627007 IN"
        },
        "email": "rajeshaudit2000@gmail.com",
        "name": ". DIVYA RAJ"
      },
      {
        "company": "ADDERS CRAFT PRIVATE LIMITED",
        "attributes": {
          "city": "L-113 G/F 2 CHANAKYA PLACE UTTAM NAGAR NEW DELHI WEST DELHI DL 110059 IN"
        },
        "email": "krnkapoor444@gmail.com",
        "name": "KARAN KAPOOR"
      },
      {
        "company": "ADDGUARD CHEMICALS PRIVATE LIMITED",
        "attributes": {
          "city": "NO 6 GUNEAGARAHARA SHIVAKOTE SHIVAKOTE BANGALORE NORTH BANGALORE RURAL KA 560089 IN"
        },
        "email": "Info@smbond.in",
        "name": ". RAFIQ"
      },
      {
        "company": "ADDHURI EVENTS (OPC) PRIVATE LIMITED",
        "attributes": {
          "city": "13 GROUND FLOOR KAPILANAG NANJUNDESHWARA TEMPLE LAGGERE BANGALORE NORTH BANGALORE KA 560058 IN"
        },
        "email": "kumargiriyappa1986@gmail.com"
      },
      {
        "company": "ADDICOO INDIA PRIVATE LIMITED",
        "attributes": {
          "city": "55/1/14, LASUDIA MORI AB BYPASS ROAD DAKACHIA INDORE INDORE MP 453771 IN"
        },
        "email": "addicooindia@gmail.com",
        "name": "ANNIE KAWATRA"
      },
      {
        "company": "ADDIGO MEDIA PRIVATE LIMITED",
        "attributes": {
          "city": "9TH FLOOR SPAZE I TECH PA RK SECTOR -49 SOHNA ROAD GURGAON GURGAON GURGAON HR 122018 IN"
        },
        "email": "Vipintripathi426@gmail.com",
        "name": "VIPIN TRIPATHI"
      },
      {
        "company": "ADDISUM INDUSTRIAL SOLUTIONS INDIA PRIVATE LIMITED",
        "attributes": {
          "city": "8, 79/3, 3RD CROSS, 2ND MAIN, LAGGERE MAIN ROAD LAGGERE BANGALORE NORTH BANGALORE KA 560058 IN"
        },
        "email": "Deepak.deepu008@gmail.com",
        "name": "DEVANDRACHARY DEEPAK"
      },
      {
        "company": "ADDITIONAL TALOJA ENGINEERING ASSOCIATION",
        "attributes": {
          "city": "PLOT NO. A-62 TALOJA MIDC TALOJA MAJKUR TALOJA PANVEL RAIGARH(MH) MH 410208 IN"
        },
        "email": "satishshettyanna@gmail.com",
        "name": "SATISH ANAND SHETTY"
      },
      {
        "company": "ADDIWISE TECHNOLOGIES PRIVATE LIMITED",
        "attributes": {
          "city": "6-3-866/A MAYANK PLAZA GREEN LANDS MAIN ROAD BEGUMPET SECUNDERABAD HYDERABAD TG 500016 IN"
        },
        "email": "rajiv.gupta@addiwise.com",
        "name": "RAJIV GUPTA"
      },
      {
        "company": "ADDMORE ENTERPRISES PRIVATE LIMITED",
        "attributes": {
          "city": "SR.NO. 166, GAJANAN NAGAR PHURSUNGI, TAL HAVELI PHURSUNGI HAVELI PUNE MH 412308 IN"
        },
        "email": "mayuripancholi2010@gmail.com",
        "name": "ASHUTOSH RAJESH PANCHOLI"
      },
      {
        "company": "ADDNEO CONSULTECH INDIA PRIVATE LIMITED",
        "attributes": {
          "city": "162, SHREE VINAYAK TOWNSHIP DEVGURADIA BICHOLI MARDANA INDORE INDORE MP 452016 IN"
        },
        "email": "addneogroup@gmail.com",
        "name": ". VIKAS"
      },
      {
        "company": "ADDON CAREER PLATFORM PRIVATE LIMITED",
        "attributes": {
          "city": "F1,9TH FLOOR,BCG TOWER SEA PORT AIRPORT ROAD KAKKANAD ERNAKULAM ERNAKULAM KL 682030 IN"
        },
        "email": "renjureji37@gmail.com",
        "name": "RENJU PATHAKKU REJI"
      },
      {
        "company": "ADDON EDUTECH PRIVATE LIMITED",
        "attributes": {
          "city": "HNO41P,FLATNO104,RAMALING ESWARA APPRT NETHAJINAGAR RAMAKRISHNA PURAM TIRUMALAGIRI HYDERABAD TG 500056 IN"
        },
        "email": "yellamelli.jawahar1234@gmail.com",
        "name": "ANITHA RANI MANOJI JAGATHKAR"
      },
      {
        "company": "ADDONE FILMS PRIVATE LIMITED",
        "attributes": {
          "city": "209 RICHA OPP PVR CINEMA VEERA DESAI INDUSTRIAL AR ANDHERI RAILWAY STATION MUMBAI MUMBAI MH 400058 IN"
        },
        "email": "addonefilms@gmail.com",
        "name": "MANOJ KISHORILAL BANODE"
      },
      {
        "company": "ADDONE SR PRINT PACK PRIVATE LIMITED",
        "attributes": {
          "city": "SHED NO.36 AMRIT IND. ESTATE DUDHESHWAR ROAD DUDHESHWAR TAVDIPURA AHMADABAD CITY AHMEDABAD GJ 380004 IN"
        },
        "email": "artoneprintpack@gmail.com",
        "name": "SOUMENDU DUTTA"
      },
      {
        "company": "ADDRESS MAKER LIVING REALTY PRIVATE LIMITED",
        "attributes": {
          "city": "NO.6/A, 2ND FLOOR,KABRA EXCELSIOR, 7TH CROSS KORAMANGALA BANGALORE SOUTH BANGALORE KA 560034 IN"
        },
        "email": "pawan.sawhney@addressmaker.in",
        "name": "PAWAN SAWHNEY"
      },
      {
        "company": "ADDRICH FINANCIAL INTERMEDIATION AND SERVICES PRIVATE LIMITED",
        "attributes": {
          "city": "OFFICE NO. 606, QUANTAM IT PARK, PLOT NO. B-68, WAGLE I.E. THANE THANE MH 400604 IN"
        },
        "email": "prasenjitmukherjeein@yahoo.co.in",
        "name": "RAJEEV RAMBABU AGARWAL"
      },
      {
        "company": "ADDTECH INFINIUM PRIVATE LIMITED",
        "attributes": {
          "city": "35-B-88 EPDP COLONY CHITRANJAN PARK CHITTRANJAN PARK NEW DELHI SOUTH DELHI DL 110019 IN"
        },
        "email": "MTMUKRSH672@GMAIL.COM",
        "name": "MUKESH KUMAR THAKUR"
      },
      {
        "company": "ADDTECH INSIGHTS PRIVATE LIMITED",
        "attributes": {
          "city": "D1203, S NO 18/19 SHRI NIWAS LIVIANO, THITE NGR VIMAN NAGAR PUNE PUNE MH 411014 IN"
        },
        "email": "priyanka.sheffield@gmail.com",
        "name": "PRATIBHA DURGESH NADIG"
      },
      {
        "company": "ADDUPS ENTERPRISE PRIVATE LIMITED",
        "attributes": {
          "city": "H.NO- 1258 NEAR G BLOCK SEC-9 VIJAY NAGAR GHAZIABAD GHAZIABAD GHAZIABAD UP 201001 IN"
        },
        "email": "shubham8895@gmail.com",
        "name": "SHUBHAM AGGARWAL"
      },
      {
        "company": "ADDVALUE WELLNESS GYM SERVICES PRIVATE LIMITED",
        "attributes": {
          "city": "384/2,PLOT NO.-1,100 FEET ROAD, VILLAGE GHITORNI GADAIPUR NEW DELHI SOUTH WEST DELHI DL 110030 IN"
        },
        "email": "addvaluewellness@gmail.com",
        "name": "PUNEET SINGH NINDRA"
      },
      {
        "company": "ADDVEYNOW SOLUTIONS PRIVATE LIMITED",
        "attributes": {
          "city": "PLOT NO. 198 &AMP; 199, SRINIVASA RESIDENCY, BACHUPALLY QUTUBULLAPUR HYDERABAD TG 500090 IN"
        },
        "email": "nk9392322@gmail.com",
        "name": "SAILAJA GOPISETTY"
      },
      {
        "company": "ADDWAY TELECOMMUNICATIONS PRIVATE LIMITED",
        "attributes": {
          "city": "C/O RAJENDRA SHIRIVAS GHAS MANDI MEWATI MOHALLA HAZIRA CHOWK GIRD GWALIOR MP 474003 IN"
        },
        "email": "rishirajsharmaazad@gmail.com",
        "name": "RAJENDRA KUMAR SHIRIVAS"
      },
      {
        "company": "ADDWISE TECH INNOVATIONS PRIVATE LIMITED",
        "attributes": {
          "city": "D.NO:24-9-11 ,FLAT NO 202 SAI MEENAKSHI TOWERS GANDHINAGARAM (VIJAYAWADA) VIJAYAWADA (URBAN) KRISHNA AP 520003 IN"
        },
        "email": "addwisetechinnovations@gmail.com",
        "name": "JYOTHIRMAYI MANTHI"
      },
      {
        "company": "ADDWORD PROJECTS PRIVATE LIMITED",
        "attributes": {
          "city": "MOUZA KHAMAR BISHNUPUR LANGOLPOTA, RAJARHAT RAJARHAT BISHNUPUR BISHNUPUR NORTH 24 PARGANAS WB 700135 IN"
        },
        "email": "bishnupur.2024.33@gmail.com",
        "name": "RAM KUMAR VYAS"
      },
      {
        "company": "ADDWRAP GLOBAL PRIVATE LIMITED",
        "attributes": {
          "city": "36,37,38 PANCHRATNA IND ESTATE CHANGODAR SANAND AHMEDABAD GJ 382213 IN"
        },
        "email": "accounts.global@addwrap.com",
        "name": "SWAPNIL ANILBHAI PATEL"
      },
      {
        "company": "ADDY NATURAL PRODUCTS PRIVATE LIMITED",
        "attributes": {
          "city": "11/283 AROOKIAPURAM MAIN ROAD SANKARAPERI TUTICORIN TUTICORIN TN 628002 IN"
        },
        "email": "addypetspvt@gmail.com",
        "name": "ASHISH TYAGI"
      },
      {
        "company": "ADEA TECH PRIVATE LIMITED",
        "attributes": {
          "city": "F-06, GOLDEN LOTUS APT., VINAYAKA NAGAR, GUNJUR VARTUR BANGALORE NORTH BANGALORE KA 560087 IN"
        },
        "email": "adeatech464@gmail.com",
        "name": "ASHOK KUMAR"
      },
      {
        "company": "ADEBA REALTY PRIVATE LIMITED",
        "attributes": {
          "city": "HD-102, WEWORK LATITUDE 9TH FLOOR, RMZ LATITUDE ANANDNAGAR (BANGALORE) BANGALORE NORTH BANGALORE KA 560024 IN"
        },
        "email": "rohitmenon1@outlook.com",
        "name": "SANTHOSH GOPINATHAN NAIR"
      },
      {
        "company": "ADEEMATA MAHILA FARMER PRODUCER COMPANY LIMITED",
        "attributes": {
          "city": "VTC-TENDRA BANEI TENDRA BONAIGARH SUNDERGARH OR 770051 IN"
        },
        "email": "gitanjalip278@gmail.com",
        "name": "SABITRI KISAN"
      },
      {
        "company": "ADEEMM TRADING & SERVICES PRIVATE LIMITED",
        "attributes": {
          "city": "FLAT NO.5, RAINBOW ROOF, PHASE-IIANOOP SHAHAR ROAD ALIGARH DAIRY FARM ALIGARH ALIGARH UP 202122 IN"
        },
        "email": "adeemm.trd.ser@gmail.com",
        "name": "NAGMA KHANAM"
      },
      {
        "company": "ADEEMM TRADING & SERVICES PRIVATE LIMITED",
        "attributes": {
          "city": "FLAT NO.5, RAINBOW ROOF, PHASE-IIANOOP SHAHAR ROAD ALIGARH DAIRY FARM ALIGARH ALIGARH UP 202122 IN"
        },
        "email": "adeemm.trd.ser@gmail.com",
        "name": "NAGMA KHANAM"
      },
      {
        "company": "ADEEP LEISURE PRIVATE LIMITED",
        "attributes": {
          "city": "HOTEL CLARKS GRAND 6, PARK ROAD GORAKHPUR GORAKHPUR GORAKHPUR UP 273001 IN"
        },
        "email": "amitbathwal2014@gmail.com",
        "name": "MANISHA BATHWAL"
      },
      {
        "company": "ADEEP STEELS INDUSTRIES PRIVATE LIMITED",
        "attributes": {
          "city": "C/O MANJIT SINGH WORKSHOP ROAD OPP BUS STAND YAMUNA NAGAR RAILWAY STATION YAMUNA NAGAR YAMUNA NAGAR HR 135001 IN"
        },
        "email": "Adeep80his@gmail.com",
        "name": "MEGHA KAPOOR"
      },
      {
        "company": "ADELANTE ENGINEERING PRIVATE LIMITED",
        "attributes": {
          "city": "4TH FLOOR,SPECTRUM TOWER MINDSPACE CHINCHOLI BUNDE MALAD MALAD WEST MUMBAI MH 400064 IN"
        },
        "email": "varindersingh12121985@gmail.com",
        "name": "VARINDER SINGH UPPAL"
      },
      {
        "company": "ADELAVIE BEAUTY PRIVATE LIMITED",
        "attributes": {
          "city": "F-4 &AMP; F-5 3/F KH. NO. 58 GALI NO-1,SHASTRI PARK GARHI MANDU EAST DELHI EAST DELHI DL 110053 IN"
        },
        "email": "dhananjay.pandey.1244@gmail.com",
        "name": "ROHIT JAIN"
      },
      {
        "company": "ADELIX PRIVATE LIMITED",
        "attributes": {
          "city": "18-40-121 SUNDRAIAH NAGAR WARD-18, TADEPALLI KAZA MANGALAGIRI HO GUNTUR AP 522508 IN"
        },
        "email": "lokeshgoduguluri7@gmail.com",
        "name": "LAKSHMI NARASIMHA LOKESH GODUGULURI"
      },
      {
        "company": "ADELIZA JEWELRY & LIFESTYLE (OPC) PRIVATE LIMITED",
        "attributes": {
          "city": "48/1C B T ROAD SINTHEE KOLKATA KOLKATA WB 700050 IN"
        },
        "email": "adelizadocs@gmail.com"
      },
      {
        "company": "ADELMIRA LIFESTYLE PRIVATE LIMITED",
        "attributes": {
          "city": "1005,FIRST FLR, BIJWASAN, NR CENTURY PUBLIC SCL SOUTH WEST DELHI SOUTH WEST DELHI SOUTH WEST DELHI DL 110061 IN"
        },
        "email": "mail.adelmira@gmail.com",
        "name": "VINIT RANA"
      },
      {
        "company": "ADELPHI GLOBALCONSULTECH PRIVATE LIMITED",
        "attributes": {
          "city": "98 ANAND NAGAR, SIRSI ROAD JHOTWARA JAIPUR JAIPUR RJ 302012 IN"
        },
        "email": "SHYAMKSCHOUHAN@GMAIL.COM",
        "name": "SHYAM KUMAR SINGH CHOUHAN"
      },
      {
        "company": "ADELPHOS WELFARE FOUNDATION",
        "attributes": {
          "city": "NEAR WANGCHA GAS AGENCY LONGDING HELIPAD ROAD LONGDING LONGDING TIRAP AR 792131 IN"
        },
        "email": "adelphoswelfare@gmail.com",
        "name": "DAVID ARANGHAM"
      },
      {
        "company": "ADELWAIS WEALTH ADVISORY SERVICES PRIVATE LIMITED",
        "attributes": {
          "city": "CTS NO. 495/96, SHANIWAR SADASHIV PETH PUNE CITY PUNE MH 411030 IN"
        },
        "email": "nitu.hr1980@gmail.com",
        "name": "NITU PRASAD"
      },
      {
        "company": "ADEM PHARMA PRIVATE LIMITED",
        "attributes": {
          "city": "SHOP NO 1 TRANSPORT NAGAR NEAR LEMON TREE HOTEL, INDUSTRIAL AREA (LUCKNOW) LUCKNOW LUCKNOW UP 226009 IN"
        },
        "email": "mskhan142208@gmail.com",
        "name": "MOHAMMAD SAMEER KHAN"
      },
      {
        "company": "ADEN CULTURAL CONSULTANTS PRIVATE LIMITED",
        "attributes": {
          "city": "OFFICE NO 840 8TH FLOOR TRICITY TRADE TOWER ZIRAKPUR RAJPURA MOHALI PB 140603 IN"
        },
        "email": "adenculturalconsultants@gmail.com",
        "name": "SUNIL KUMAR"
      },
      {
        "company": "ADENHAUS INTERIOR DESIGN PRIVATE LIMITED",
        "attributes": {
          "city": "BUILDING NO.CC 49/1622B6 MBS SQUARE VYTTILA ERNAKULAM ERNAKULAM KL 682019 IN"
        },
        "email": "adenhaus2023@gmail.com",
        "name": "MOHIYIDDIN ABDULRAHMAN KOLLIYIL"
      },
      {
        "company": "ADENINE SCIENTIFIC PRIVATE LIMITED",
        "attributes": {
          "city": "PL5B/5/10, SECTOR 1, KHANDA COLONY, NEW PANVEL KHANDA COLONY PANVEL RAIGARH(MH) MH 410206 IN"
        },
        "email": "nileshvs@rocketmail.com",
        "name": "NILESH VINAYAK SALUNKHE"
      },
      {
        "company": "ADENYA MANPOWER & SECURITY SERVICES (OPC) PRIVATE LIMITED",
        "attributes": {
          "city": "C/O RANJIT KUMAR TIWARI VILL-MUSEPUR, BIHTA MUSEPUR BIHTA PATNA BR 801103 IN"
        },
        "email": "ranjittiwary226@gmail.com"
      },
      {
        "company": "ADEPTICA AI PRIVATE LIMITED",
        "attributes": {
          "city": "B-34-2237, NEW CHANDER NAGAR SATSANG ROAD LUDHIANA LUDHIANA PB 141001 IN"
        },
        "email": "ASTROYAMIRAJ@GMAIL.COM",
        "name": "JASKAMAL SINGH"
      },
      {
        "company": "ADEPTIFY TECHNOLOGIES PRIVATE LIMITED",
        "attributes": {
          "city": "F NO 6, 22/1A PLOT NO 24 ANAND NIKETAN SOCIETY KOTHRUD PUNE CITY PUNE MH 411038 IN"
        },
        "email": "Satish.kshirsagar@gmail.com"
      },
      {
        "company": "ADEPTINNOVA TECHNOLOGY SOLUTIONS PRIVATE LIMITED",
        "attributes": {
          "city": "25 H BLOCK. 15 MAIN ROAD ANNA NAGAR WEST ANNA NAGAR (CHENNAI) EGMORE NUNGAMBAKKAM CHENNAI TN 600040 IN"
        },
        "email": "adeptinnovatechnologyprivateli@gmail.com",
        "name": ". AMIRTHAVALLI"
      },
      {
        "company": "ADERFIA PHARMACEUTICAL PRIVATE LIMITED",
        "attributes": {
          "city": "D.NO.126, METTU VILLAGE CHITTAMURU MANDAL METTU VAKADU NELLORE AP 524413 IN"
        },
        "email": "nithish.dnk15@gmail.com",
        "name": "SANDESH DONEPARTHI"
      },
      {
        "company": "ADERFIA PROPERTIES PRIVATE LIMITED",
        "attributes": {
          "city": "R-302, SECOND FLOOR GREATER KAILASH-1 GREATER KAILASH NEW DELHI SOUTH DELHI DL 110048 IN"
        },
        "email": "abhishek.ganguli@aderfiaventures.com",
        "name": "ABHIJIT GANGULI"
      },
      {
        "company": "ADESH FABRICRAFT INDUSTRIES PRIVATE LIMITED",
        "attributes": {
          "city": "24 ROHTAK ROAD PARK AREA KAROL BAGH RAJENDER NAGAR NEW DELHI CENTRAL DELHI DL 110060 IN"
        },
        "email": "rkakjain4572@gmail.com",
        "name": "NIDHI JAIN"
      },
      {
        "company": "ADEVOLVE CONNECT PRIVATE LIMITED",
        "attributes": {
          "city": "UNIT NO.630 TO 637 A JMD MEGAPOLIS SOHANA RD DLF QE DLF QE GURGAON HR 122002 IN"
        },
        "email": "divyaditya451@gmail.com",
        "name": "KETAN DUTTA"
      },
      {
        "company": "ADF GLOBAL EXPORTS PRIVATE LIMITED",
        "attributes": {
          "city": "STREET NO 6C, ZONE-2 WARD 52 NEW ADARSH NAGAR DURG DURG DURG CT 491001 IN"
        },
        "email": "rajeshkd@zohomail.in",
        "name": "GAYATRI DEVI DEWANGAN"
      },
      {
        "company": "ADFC NIRMAN PRIVATE LIMITED",
        "attributes": {
          "city": "C/O BASANTI MAJI, KUNTALA APPT, KALAYANPUR HOUSING KANYAPUR BARABONI BARDHAMAN WB 713341 IN"
        },
        "email": "akash.maji02@gmail.com",
        "name": "JYOTSNA MONDAL"
      },
      {
        "company": "ADFINE MEDIA PRIVATE LIMITED",
        "attributes": {
          "city": "HOUSE NO 197 NAI ANAJ MANDI REWARI REWARI REWARI HR 123401 IN"
        },
        "email": "adfinemedia@outlook.com",
        "name": ". ABHISHEK"
      },
      {
        "company": "ADFINITY TECHWAVE PRIVATE LIMITED",
        "attributes": {
          "city": "PLOT NO.20/774, SECTOR-11 CDA AVINAB BIDANASI CUTTACK SADAR CUTTACK OR 753014 IN"
        },
        "email": "mailme.yogamaya@gmail.com",
        "name": "ADITYA SANKAR MOHAPATRA"
      },
      {
        "company": "ADFLUENCER MEDIA'S PRIVATE LIMITED",
        "attributes": {
          "city": "404, 4A WING, VERSOVA SKYLARK TOWER,LOKHANDWALA ANDHERI MUMBAI MUMBAI MH 400053 IN"
        },
        "email": "adfluencermedias@gmail.com",
        "name": "DIA JAGTAP"
      },
      {
        "company": "ADG BUSINESS CONSULTANTS PRIVATE LIMITED",
        "attributes": {
          "city": "P.N. S-9, MADHUVAN COLONY TONK PHATAK BARKAT NAGAR JAIPUR JAIPUR RJ 302015 IN"
        },
        "email": "dineshgupta0182@gmail.com",
        "name": "MONIKA GUPTA"
      },
      {
        "company": "ADG CAPFLOW PRIVATE LIMITED",
        "attributes": {
          "city": "SR. NO. 35/2/1 PL NO. 3 FL NO. 803, SHRIRAM CHAND BANER GAON HAVELI PUNE MH 411045 IN"
        },
        "email": "shrikant@peocitsoft.com",
        "name": "ASHWINI SHRIKANT MULAY"
      },
      {
        "company": "ADG LIFE SCIENCE (OPC) PRIVATE LIMITED",
        "attributes": {
          "city": "424, 9TH BLOCK, 4TH MAIN ROAD, 3RD CROSS 2ND STAGE NAGARBHAVI BANGALORE NORTH BANGALORE KA 560072 IN"
        },
        "email": "abhayadg33@gmail.com"
      },
      {
        "company": "ADG NETWORK PRIVATE LIMITED",
        "attributes": {
          "city": "S.NO.40/6/9/A TAJANE WASTI, PUNAWALE PUNE CITY PUNE MH 411033 IN"
        },
        "email": "adgnetworkprivatelimited@gmail.com"
      },
      {
        "company": "ADG PROJECTS PRIVATE LIMITED",
        "attributes": {
          "city": "2140/59, NAIWALA GURUDWARA ROAD, KAROL BAG KAROL BAGH NEW DELHI CENTRAL DELHI DL 110005 IN"
        },
        "email": "vivek@adg.org.in",
        "name": "VIVEK KUMAR"
      },
      {
        "company": "ADGE MEDIA AGENCY PRIVATE LIMITED",
        "attributes": {
          "city": "8,1,332/3/B/49 AZIZ BAGH TOLI CHOWKI GOLCONDA HYDERABAD TG 500008 IN"
        },
        "email": "Sulemanmasoodltd@gmail.com",
        "name": "MOHAMMED ALMAS"
      },
      {
        "company": "ADGENIUS DIGITAL MEDIA PRIVATE LIMITED",
        "attributes": {
          "city": "VIVEK DHAM, VISHAL NAGAR VILLAGE KAKKOWAL BASTI JODHEWAL LUDHIANA LUDHIANA PB 141007 IN"
        },
        "email": "ADGENIUSDIGITALMEDIAPRIVATELIM@GMAIL.COM",
        "name": "NARESH DUBB"
      },
      {
        "company": "ADGENUITY TECH PRIVATE LIMITED",
        "attributes": {
          "city": "B2/103, MANTRA MAJESTICA SASANE NGR KALEPADAL HADAPSAR PUNE PUNE MH 411028 IN"
        },
        "email": "jpranjalkar@gmail.com",
        "name": "PRATIK PRADIP HARIDAS"
      },
      {
        "company": "ADGES VENTURE PRIVATE LIMITED",
        "attributes": {
          "city": "10/1/A, ASGAR MISTRY LANE NORTH SIDE, 3RD FLOOR GOBINDA KHATICK ROAD KOLKATA KOLKATA WB 700046 IN"
        },
        "email": "geraldinemodak@yahoo.com",
        "name": "GERALDINE MODAK"
      },
      {
        "company": "ADGNITO TECHNOLOGIES (INDIA) PRIVATE LIMITED",
        "attributes": {
          "city": "2ND FLOOR SHANTA BUILDING 201, 301, 18TH JUNE RD PANAJI TISWADI NORTH GOA GA 403001 IN"
        },
        "email": "ankush@roziroti.work",
        "name": "VIVEK RAJALINGAM PILLAMARAPU"
      },
      {
        "company": "ADGOTECH INFOSYSTEMS PRIVATE LIMITED",
        "attributes": {
          "city": "FLAT NO. 3D, GUNA APPT LAKHIMINAGAR HATIGAON ASSAM SACHIVALAYA GMC KAMRUP AS 781006 IN"
        },
        "email": "nibedita.khukchi@gmail.com",
        "name": "NIBEDITA ADHIKARY"
      },
      {
        "company": "ADGS ASSOCIATE PRIVATE LIMITED",
        "attributes": {
          "city": "C/O HARS VILA, SCOTER PARKING KE PASS,WARD NO11 TARANAGAR TARANAGAR CHURU RJ 331304 IN"
        },
        "email": "Akdayama99@gmail.com",
        "name": "GAJARAJ SINGH RAJVI"
      },
      {
        "company": "ADGU HEALTHCARE PRIVATE LIMITED",
        "attributes": {
          "city": "#263, ST NO-10 NORTH ESTATE BATHINDA BATHINDA BATHINDA PB 151001 IN"
        },
        "email": "adguhospitals@gmail.com",
        "name": "MOHIT GARG"
      },
      {
        "company": "ADHANA DAIRY PRIVATE LIMITED",
        "attributes": {
          "city": "SC-307 SHASTRI NAGAR, GHAZIABAD SHASTRI NAGAR GHAZIABAD GHAZIABAD UP 201002 IN"
        },
        "email": "adhanatanisha0025@gmail.com",
        "name": ". RUCHI"
      },
      {
        "company": "ADHAND DEVELOPERS PRIVATE LIMITED",
        "attributes": {
          "city": "KHASRA NO. 511 BEHIND VEDEHI MANDIE MAHWA DAUSA DAUSA RJ 321608 IN"
        },
        "email": "Pawanadhanadausa@gmail.com",
        "name": "VIMALA DEVI"
      },
      {
        "company": "ADHAR GLOBAL CARE PRIVATE LIMITED",
        "attributes": {
          "city": "SHOP NO. 04, MASTAN NAGAR TILAK RD NR MANGLA SCHOOL THANE EAST THANE THANE MH 400603 IN"
        },
        "email": "sasingh195@gmail.com",
        "name": "SONAL ANIL SINGH"
      },
      {
        "company": "ADHARA WOMEN FOUNDATION",
        "attributes": {
          "city": "NO456,PERIYAR RAMASAMY ST P.N.PUDHUR, VADAVALLI, VADAVALLI COIMBATORE NORTH COIMBATORE TN 641041 IN"
        },
        "email": "mprabu837@gmail.com",
        "name": "KANAGARAJ MANIKANDA PRABU"
      },
      {
        "company": "ADHARAV ONE ENTERPRISES PRIVATE LIMITED",
        "attributes": {
          "city": "3/160 VAIBHAV KHAND GOMATI NAGAR GOMTINAGAR LUCKNOW LUCKNOW UP 226010 IN"
        },
        "email": "saurabhmishradeoria@gmail.com",
        "name": ". DEEPAK"
      },
      {
        "company": "ADHARBHOOT SERVICES PRIVATE LIMITED",
        "attributes": {
          "city": "GROUND FLOOR-1B, GORAKHNATH COMPOUND, B.C. ROAD PHULWARI PATNA BR 800001 IN"
        },
        "email": "Adharbhoot19@gmail.com",
        "name": "ARVIND KUMAR JAIN"
      },
      {
        "company": "ADHARRTI SOLUTIONS PRIVATE LIMITED",
        "attributes": {
          "city": "FLAT NO:T5-707, TOWER 5, GLS ARAWALI HOMES SOHNA SOHNA SOHNA GURGAON HR 122103 IN"
        },
        "email": "p.kumar1@yahoo.com",
        "name": "PRITY KUMARI"
      },
      {
        "company": "ADHARVA LIFE SCIENCES PRIVATE LIMITED",
        "attributes": {
          "city": "301, H BLOCK,SANJANA COURTYARD,KANDLAKOYAVILL MEDCHAL HYD HYDERABAD TG 501401 IN"
        },
        "email": "koteswarkarthik@gmail.com",
        "name": "KOTESWAR KARTHIK YELLEPEDDI"
      },
      {
        "company": "ADHAT AGRO PRIVATE LIMITED",
        "attributes": {
          "city": "KHEWAT NO 496 529 GALI 7 KADIPUR ENCLAVE SEC 10 RAILWARY ROAD RAILWAY ROAD GURGAON HR 122006 IN"
        },
        "email": "abhimanyu99sihag@gmail.com",
        "name": "ABHIMANYU ."
      },
      {
        "company": "ADHAV PATIL FARMER PRODUCER COMPANY LIMITED",
        "attributes": {
          "city": "C/O RAJENDRA ADHAV AT MUDDALWADI PAITHAN PAITHAN AURANGABAD MH 431107 IN"
        },
        "email": "adhavpatilfpc@gmail.com",
        "name": "BHARAT UTTAM BHALEKAR"
      },
      {
        "company": "ADHAVAN INFRA & LIAISON PRIVATE LIMITED",
        "attributes": {
          "city": "NARAYAN BAGH DABLA JAISALMER JAISALMER JAISALMER RJ 345001 IN"
        },
        "email": "bhrkaran@gmail.com",
        "name": "DILIP SINGH RAJAWAT"
      },
      {
        "company": "ADHAVAN PACKAGING PRIVATE LIMITED",
        "attributes": {
          "city": "PLOT NO 146, GK PL VASANTH NAGAR KPHB COLONY TIRUMALAGIRI HYDERABAD TG 500085 IN"
        },
        "email": "bonthu.anjaneyulu@gmail.com",
        "name": "KALYANI MAGANTI"
      },
      {
        "company": "ADHAVAN TECNO PARK INDIA PRIVATE LIMITED",
        "attributes": {
          "city": "FLAT NO.74,ANANDHA NAGAR BYEPASS ROAD TIRPATHUR AMBUR VANIYAMBADI VELLORE TN 635802 IN"
        },
        "email": "info.vaagaiinfosys@gmail.com",
        "name": "GANDHIRAJAN SHANKAR"
      },
      {
        "company": "ADHAWK INFINITY (OPC) PRIVATE LIMITED",
        "attributes": {
          "city": "C/O KALPANA GOHAIN HOPKINSON RD, LUCHUMIERE MEGHALAYA SECRETARIAT SHILLONG EAST KHASI HILLS ML 793001 IN"
        },
        "email": "reshav.gohain@gmail.com"
      },
      {
        "company": "ADHEERA TRADING PRIVATE LIMITED",
        "attributes": {
          "city": "DHANI BADIYALI KHORI SHAHPURA JAIPUR JAIPUR RJ 303103 IN"
        },
        "email": "yadavdeepak09993@gmail.com",
        "name": "MANGAL CHAND YADAV"
      },
      {
        "company": "ADHEERAJ FARMER PRODUCER COMPANY LIMITED",
        "attributes": {
          "city": "C/O AKSHAY VIJAYAPPA SAKHARE, BELKHED TELHARA (AKOLA) AKOLA AKOLA MH 444108 IN"
        },
        "email": "ashishsakhare72@gmail.com",
        "name": "SOMANATH VAIJANATH KALAMKAR"
      },
      {
        "company": "ADHERA HOMES PRIVATE LIMITED",
        "attributes": {
          "city": "PLOTNO.6,ARTHI INDUSTRIAL ESTATE, KUNDRATHUR ROAD, MUGALIVAKKAM SRIPERUMBUDUR KANCHIPURAM TN 600125 IN"
        },
        "email": "adherahomes@gmail.com",
        "name": "SUBRAMANIAN AISHWARYA"
      },
      {
        "company": "ADHESIVE SOLUTIONS INDIA PRIVATE LIMITED",
        "attributes": {
          "city": "BEHIND SAYYAD TEMPLE, RAJENDRA PARK, RAILWARY ROAD RAILWAY ROAD GURGAON HR 122006 IN"
        },
        "email": "adhesivesolutions10y@gmail.com",
        "name": ". RAJNI"
      },
      {
        "company": "ADHI & DATHAN (OPC) PRIVATE LIMITED",
        "attributes": {
          "city": "TC 35/2578-9, PUTHENVILA VEEDU, NEAR CPT JUNCTION, VATTIYOORKAVU THIRUVANANTHAPURAM THIRUVANANTHAPURAM KL 695013 IN"
        },
        "email": "Adhidathan@gmail.com"
      },
      {
        "company": "ADHI NUTS PRIVATE LIMITED",
        "attributes": {
          "city": "NO. 88/13, WEST STREET ODAI STREET, NADUKUPPAM KADAMBULIYUR PANRUTI CUDDALORE TN 607103 IN"
        },
        "email": "rtcl.org@gmail.com",
        "name": "YANAPUSA KEERTHI REDDY"
      },
      {
        "company": "ADHIAIKYAM UDYOG PRIVATE LIMITED",
        "attributes": {
          "city": "NO 405 4TH CROSS SOUTH AVENUE LAYOUT BANNERGHATTA BANGALORE SOUTH BANGALORE KA 560083 IN"
        },
        "email": "mdivyamurthy@gmail.com",
        "name": "MUNIPALLI SATHYAMURTHY DIVYA"
      },
      {
        "company": "ADHIBHASH LANGUAGE AND DEVELOPMENT SERVICES PRIVATE LIMITED",
        "attributes": {
          "city": "902 F BESTECH PARK VIEW, GRANDSPA, NARSINGHPUR NARSINGHPUR GURGAON HR 122004 IN"
        },
        "email": "unsciil51@gmail.com",
        "name": "RAJARSHI SINGH"
      },
      {
        "company": "ADHIGAM SOFTWARE PRIVATE LIMITED",
        "attributes": {
          "city": "12-1-161/35 BANDLAGUDA,ANAND NAGAR GSI(SR) BANDLAGUDA HAYATHNAGAR HYDERABAD TG 500068 IN"
        },
        "email": "adhigamsoftwarepvtltd@rediffmail.com",
        "name": "RAVINDER TERALA"
      },
      {
        "company": "ADHIKA HOME HEALTH CARE PRIVATE LIMITED",
        "attributes": {
          "city": "NO. 50/1 GROUND, 1ST &AMP; 2 PARVATHI NIVASA 1ST MAIN J P NAGAR BANGALORE SOUTH BANGALORE KA 560078 IN"
        },
        "email": "adhikahomehealthcare@gmail.com",
        "name": "VIJAYA SHANTHI MUNIRAJU"
      },
      {
        "company": "ADHILLIANCE PROJECTS PRIVATE LIMITED",
        "attributes": {
          "city": "PLOT NO-32 SACHITANAND NAGAR DIGHORI NAKA NAGPUR NAGPUR MH 440024 IN"
        },
        "email": "aspl.hrsolution@gmail.com",
        "name": "MANGESH SUBHASHRAO MANKAWADE"
      },
      {
        "company": "ADHIMAHARUDRA CORPORATE PRIVATE LIMITED",
        "attributes": {
          "city": "OFFICE NO 81, 2ND FLOOR PRESTIGE POINT CTS NO 283 SHUKRAWAR PETH (PUNE) PUNE CITY PUNE MH 411002 IN"
        },
        "email": "shrinivas.gone@yahoo.com",
        "name": "SHRINIWAS RAMDAS GONE"
      },
      {
        "company": "ADHIPA TECHNOLOGIES PRIVATE LIMITED",
        "attributes": {
          "city": "GROUND FLR, KALYANI CLY, NEAR SATYA GAS GODAM, ANISABAD PHULWARI PATNA BR 800002 IN"
        },
        "email": "sau.kum0227@gmail.com",
        "name": "NEELU DEVI"
      },
      {
        "company": "ADHIPATHI PROJECT PRIVATE LIMITED",
        "attributes": {
          "city": "4A/125H ETTYAPURAM ROAD TUTICORIN CENTRAL BUS STAND THOOTHUKKUDI TUTICORIN TN 628002 IN"
        },
        "email": "adhipathioffice@gmail.com",
        "name": "JOHN PETTER JANSI RANI"
      },
      {
        "company": "ADHIPRO ELECTRO PRIVATE LIMITED",
        "attributes": {
          "city": "HOUSE NO 54, BEHIND KILOL SCHOOL, JAMALPURA, SHAHAJAHANABAD HUZUR BHOPAL MP 462001 IN"
        },
        "email": "adhipro2024@gmail.com",
        "name": "PRATIK SAHU"
      },
      {
        "company": "ADHIRAJ KRUSHI PRODUCER COMPANY LIMITED",
        "attributes": {
          "city": "C/O. ARUN RAUT,AT SONWADI FATA, HIWARKHED HIVERKHED RUPRAO TELHARA AKOLA MH 444103 IN"
        },
        "email": "dhirajraut4272@gmail.com",
        "name": "AMOL GAJANAN ADHAU"
      },
      {
        "company": "ADHIRAJ TOUR AND TRAVELS PRIVATE LIMITED",
        "attributes": {
          "city": "B1-2351, PURVANCHAL ROYAL SECTOR CHI-5 KASNA MAICHA GAUTAM BUDDHA NAGAR UP 201310 IN"
        },
        "email": "ramashankar96@gmail.com",
        "name": "RAMA SHANKAR SINGH"
      },
      {
        "company": "ADHIRATHA INFRASTRUCTURE PRIVATE LIMITED",
        "attributes": {
          "city": "7, GRANT LANE BOWBAZAR (KOLKATA) KOLKATA KOLKATA WB 700012 IN"
        },
        "email": "ajroy2024@rediffmail.com",
        "name": "AJAY KUMAR AGARWAL"
      },
      {
        "company": "ADHIRATHI FINANCIAL ADVISORY & SERVICES PRIVATE LIMITED",
        "attributes": {
          "city": "3RD FLOOR 7, GRANT LANE BOWBAZAR (KOLKATA) KOLKATA KOLKATA WB 700012 IN"
        },
        "email": "ajayagarwal01274@gmail.com",
        "name": "AJAY KUMAR AGARWAL"
      },
      {
        "company": "ADHIRIT OVERSEAS PRIVATE LIMITED",
        "attributes": {
          "city": "H.NO-1088 NEAR BUS STAND WELTUR VELTUR KUHI NAGPUR MH 441210 IN"
        },
        "email": "adhiritoverseas.pvt.ltd@gmail.com",
        "name": "VIKAS WATUJI PADOLE"
      },
      {
        "company": "ADHISAM TRAINING AND SERVICES (OPC) PRIVATE LIMITED",
        "attributes": {
          "city": "92,UTTARPARA PO &AMP; PS ALIPURDUAR ALIPURDUAR ALIPURDUAR - I JALPAIGURI WB 736121 IN"
        },
        "email": "subrato.adhikary15@gmail.com"
      },
      {
        "company": "ADHISATTVAM ORGANIC FARMS PRIVATE LIMITED",
        "attributes": {
          "city": "KHASRA NO. 92/86/6 DESURIYA KHAROLON MANDORE JODHPUR JODHPUR RJ 342304 IN"
        },
        "email": "Kanaramdeora11@gmail.com",
        "name": ". KANARAM"
      },
      {
        "company": "ADHISHA AGRO FARMER PRODUCER COMPANY LIMITED",
        "attributes": {
          "city": "C/O DIVYA RATNESH KUMAR DUBEY, VEDAMANPUR PARSIPUR GYANPUR SANT RAVIDAS NAGAR UP 221402 IN"
        },
        "email": "ratneshincometax1@gmail.com",
        "name": "DIVYA RATNESH KUMAR DUBEY"
      },
      {
        "company": "ADHISHREE HERBS PRIVATE LIMITED",
        "attributes": {
          "city": "PLOT NO 45 KH NO 154 GF EXTN LAL DORA POOTH KHURD POOTH KHURD DELHI NORTH WEST DELHI DL 110039 IN"
        },
        "email": "dabaspriya.vp@gmail.com",
        "name": ". NAINIKA"
      },
      {
        "company": "ADHISHTHANAM FARMER PRODUCER COMPANY LIMITED",
        "attributes": {
          "city": "C/O RAJENDRA 86 KAINTHA KAITHA HAMIRPUR HAMIRPUR UP 210431 IN"
        },
        "email": "ffbpr4806e@gmail.com",
        "name": ". RAJENDRA"
      },
      {
        "company": "ADHITA XPOBOX PRIVATE LIMITED",
        "attributes": {
          "city": "53, MAHAVIR NAGAR, PRATAP GARH (CHITTORGARH) PARTABGARH CHITTORGARH RJ 312605 IN"
        },
        "email": "adhitaexpobox@gmail.com",
        "name": "KESHAV BAHETI"
      },
      {
        "company": "ADHITHIS GREENWEAVE PRIVATE LIMITED",
        "attributes": {
          "city": "304/VII SREE NIVAS PUNNAPRA PUNNAPRA NORTH AMBALAPUZHA ALAPPUZHA KL 688014 IN"
        },
        "email": "greenweavepvt.ltd@gmail.com",
        "name": "ARUN RAMACHANDRAN NAIR"
      },
      {
        "company": "ADHIVASI NEELAMBARI HERBAL ESSENCE (OPC) PRIVATE LIMITED",
        "attributes": {
          "city": "C/O DARMA,1 PAVSHIRAJPURA NELLURPALA DODDAHUNSUR NALLURPALA HUNSUR MYSORE KA 571105 IN"
        },
        "email": "bharath8940503210@gmail.com"
      },
      {
        "company": "ADHIYAGYA EXOTIC FOODS (OPC) PRIVATE LIMITED",
        "attributes": {
          "city": "C/O MUKUL KUMAR, SHOP-1 JALAN COMPLEX,GANDHI CHOK KISHANGANJ KISHANGANJ KISHANGANJ BR 855107 IN"
        },
        "email": "mukulkmr731@gmail.com"
      },
      {
        "company": "ADHIYAN FOODS (OPC) PRIVATE LIMITED",
        "attributes": {
          "city": "4/356A,BUSINESS ARCADE PALACODE MAIN ROAD DHARMAPURI DHARMAPURI DHARMAPURI TN 636701 IN"
        },
        "email": "adhiyanfoods23@gmail.com"
      },
      {
        "company": "ADHOKSHAJA ENTERPRISES PRIVATE LIMITED",
        "attributes": {
          "city": "HOUSE NO. 731 CHOW MANDI ROORKEE ROORKEE HARIDWAR UR 247667 IN"
        },
        "email": "ishujatt24@gmail.com",
        "name": ". ARVIND"
      },
      {
        "company": "ADHOKSHAJA VEDA YAGYA PARIRAKSHANA FOUNDATION",
        "attributes": {
          "city": "HOUSE NO 504 F, VITTHAL PURAM, UMDA ROAD BHILAI EAST DURG DURG CT 490021 IN"
        },
        "email": "vasishta.adhokshaja@gmail.com",
        "name": "AMAN TAMRAKAR"
      },
      {
        "company": "ADHOMELT INDUSTRIES PRIVATE LIMITED",
        "attributes": {
          "city": "FIRST FLOOR, NO. 25, LANE NO. 4, FRIENDS COLONY JALANDHAR CITY JALANDHAR - I JALANDHAR PB 144001 IN"
        },
        "email": "abhishek.chugh.81@gmail.com"
      },
      {
        "company": "ADHOOT BUSINESS SOLUTIONS PRIVATE LIMITED",
        "attributes": {
          "city": "H.NO 1209 TQ JAFRABAD JALNA JALNA JALNA MH 431203 IN"
        },
        "email": "vikaschavan090696@gmail.com",
        "name": "SURESH KESHAV FADAT"
      },
      {
        "company": "ADHRIT MICROSERVICES TECHNOLOGIES (OPC) PRIVATE LIMITED",
        "attributes": {
          "city": "5-36/I/PR/302 PURNA RESI SHANTHI NGR,MADEENAGUDA MIYAPUR SERILINGAMPALLY K.V.RANGAREDDY TG 500049 IN"
        },
        "email": "adhritteck@gmail.com"
      },
      {
        "company": "ADHRIT WORLD PRIVATE LIMITED",
        "attributes": {
          "city": "HIG-31, ARVIND VIHAR BAG MUNGALIA HUZUR BHOPAL MP 462043 IN"
        },
        "email": "myadhritworld@gmail.com",
        "name": "CHINMAYI SHRIVASTAVA"
      },
      {
        "company": "ADHRITH CREATIONS PRIVATE LIMITED",
        "attributes": {
          "city": "SY NO.238/E,JANA CHAITANA COLONY, MANIKONDA RANGAREDDY RANGAREDDY RANGAREDDY TG 500089 IN"
        },
        "email": "saiprakashselvaraj@gmail.com",
        "name": "AKSHAY REDDY MAGHAM"
      },
      {
        "company": "ADHRITH REAL HOMES PRIVATE LIMITED",
        "attributes": {
          "city": "C/O K. N. BHARGAV, BEHIND GAANESH AUTOM, AJMER AJMER AJMER RJ 305001 IN"
        },
        "email": "ankurdutta412@gmail.com",
        "name": "ANKUR DUTTA"
      },
      {
        "company": "ADHRITYAM TECHNOLOGY PRIVATE LIMITED",
        "attributes": {
          "city": "C/O NETRAPAL HARIZAN BASTI SADAPUR NOIDA SECTOR 45 NOIDA GAUTAM BUDDHA NAGAR UP 201303 IN"
        },
        "email": "alakhud21@gmail.com"
      },
      {
        "company": "ADHRY CONSULTANTS PRIVATE LIMITED",
        "attributes": {
          "city": "NO.10/2-A NAKLIKKATTU TOWER ALLAPRA KUNNATHUNAD ERNAKULAM KL 683556 IN"
        },
        "email": "mahirssrm@gmail.com",
        "name": "SARATH SIVAN NAKLIKKATTU SIVAN"
      },
      {
        "company": "ADHRYSA FARMS PRIVATE LIMITED",
        "attributes": {
          "city": "MATRACHHAYA, 2ND FLOOR H NO 95, SECTOR-2 VIDHYADHAR NAGAR JAIPUR JAIPUR RJ 302039 IN"
        },
        "email": "abhilasha.kanoongo36@gmail.com",
        "name": "RAJESHWAR DAYAL KHANDELWAL"
      },
      {
        "company": "ADHRYSA INTERNATIONAL PRIVATE LIMITED",
        "attributes": {
          "city": "MATRACHHAYA, 2ND FLOOR H NO 95, SECTOR-2 VIDHYADHAR NAGAR JAIPUR JAIPUR RJ 302039 IN"
        },
        "email": "minaljn18@gmail.com",
        "name": "RAJESHWAR DAYAL KHANDELWAL"
      },
      {
        "company": "ADHRYSA LIFESCIENCES PRIVATE LIMITED",
        "attributes": {
          "city": "MATRACHHAYA, 2ND FLOOR H NO 95, SECTOR-2 VIDHYADHAR NAGAR JAIPUR JAIPUR RJ 302039 IN"
        },
        "email": "santoshkhandelwal1504@gmail.com",
        "name": "RAJESHWAR DAYAL KHANDELWAL"
      },
      {
        "company": "ADHRYSA RETAIL PRIVATE LIMITED",
        "attributes": {
          "city": "MATRACHHAYA, 2ND FLOOR H NO 95, SECTOR-2 VIDHYADHAR NAGAR JAIPUR JAIPUR RJ 302039 IN"
        },
        "email": "abhilasha.kanoongo36@gmail.com",
        "name": "RAJESHWAR DAYAL KHANDELWAL"
      },
      {
        "company": "ADHUMAL FOODS AND BEVERAGES PRIVATE LIMITED",
        "attributes": {
          "city": "TEMBHURNI, MADHA MAIN RD, KOSHTI GALLI, TEMBHURNI (SOLAPUR) MADHA SOLAPUR MH 413211 IN"
        },
        "email": "anshikaglobalfoods@gmail.com",
        "name": "SAGAR KISAN DHUMAL"
      },
      {
        "company": "ADHUNATAN ADVISORS PRIVATE LIMITED",
        "attributes": {
          "city": "5A-36, NIT FARIDABAD, FARIDABAD NIT FARIDABAD FARIDABAD HR 121001 IN"
        },
        "email": "adhyant.advisors@gmail.com",
        "name": "PATRA ANJALI"
      },
      {
        "company": "ADHUNIK NATURALS FMCG PRIVATE LIMITED",
        "attributes": {
          "city": "779, SECOND FLOOR, NEAR SEC 40 MARKET GURGAON ARJUN NAGAR GURGAON HR 122001 IN"
        },
        "email": "anfmcg1@gmail.com",
        "name": "SANJAY CHAUHAN"
      },
      {
        "company": "ADHVA JEWELS PRIVATE LIMITED",
        "attributes": {
          "city": "24,FLR5,PT59/67,KAMLARAM BLDG, MIRZA ST,ZAVERI BZR MUMBAI MUMBAI MUMBAI MH 400003 IN"
        },
        "email": "bhaviksolanki84@gmail.com",
        "name": "CHINTAN RAMANKUMAR SOLANKI"
      },
      {
        "company": "ADHVAIYA BIOTECH PRIVATE LIMITED",
        "attributes": {
          "city": "X-10,FIRST MAIN ROAD, THIRUMALAI NAGAR, KANCHIPURAM KANCHIPURAM KANCHIPURAM TN 600064 IN"
        },
        "email": "BALAJIWORLDWIDE@GMAIL.COM",
        "name": "SUGAVANAM BALAJI"
      },
      {
        "company": "ADHVAYA EDTECH SOLUTIONS PRIVATE LIMITED",
        "attributes": {
          "city": "PLOT NO. 06, SY. NO. 203 TNGOS COLONY, MANIKONDA J GACHIBOWLI SERI LINGAMPALLY K.V.RANGAREDDY TG 500032 IN"
        },
        "email": "Anudeep3060@gmail.com",
        "name": "ANUPA SHEKAR"
      },
      {
        "company": "ADHVIK OFFSHORE PRIVATE LIMITED",
        "attributes": {
          "city": "C/O KAWALJEET SINGH WALIA MIG4/304 CHITRAKOT PARISA RAIPUR RAIPUR RAIPUR CT 492001 IN"
        },
        "email": "appi.walia@gmail.com",
        "name": "APPI SINGH WALIA"
      },
      {
        "company": "ADHVIK POLYCHEM PRIVATE LIMITED",
        "attributes": {
          "city": "HN187D, UNITN126, PLTN43, 1 FLR,LSCROAD43,PITAMPURA RANI BAGH DELHI NORTH WEST DELHI DL 110034 IN"
        },
        "email": "vikasprasad02@gmail.com",
        "name": "SONA DEVI"
      },
      {
        "company": "ADHVIKA FORGE TECH PRIVATE LIMITED",
        "attributes": {
          "city": "NO.74, 1ST FLOOR DODDABELE CROSS, NEAR NIC KENGERI BANGALORE SOUTH BANGALORE RURAL KA 560060 IN"
        },
        "email": "asamitsingh74@gmail.com"
      },
      {
        "company": "ADHYA DIGITAL SOLUTIONS PRIVATE LIMITED",
        "attributes": {
          "city": "IN F/O KISHORI CEMENT SHO RJPM. LKO RAJAJIPURAM LUCKNOW LUCKNOW UP 226017 IN"
        },
        "email": "singh.amar981@gmail.com",
        "name": "SHIKHA TOMAR"
      },
      {
        "company": "ADHYA MULTISPECIALITY HEALTHCARE PRIVATE LIMITED",
        "attributes": {
          "city": "DOOR NO.4-5-27/6 3RD LINE, VIDYANAGAR KORITEPADU(GUNTUR) GUNTUR GUNTUR AP 522007 IN"
        },
        "email": "gandhian2050@gmail.com",
        "name": "JAYAPALA REDDY VELAGALA"
      },
      {
        "company": "ADHYA PRAKASH TRANSPORTER PRIVATE LIMITED",
        "attributes": {
          "city": "C/O- DILIP KUMAR SINGH BABA PATH, HURHURU, SADAR HAZARIBAGH HAZARIBAGH HAZARIBAG JH 825301 IN"
        },
        "email": "AMIT.KR262@GMAIL.COM",
        "name": "SAGAR SINGH"
      },
      {
        "company": "ADHYA YASHMIKA FOUNDATION",
        "attributes": {
          "city": "C/O MUNIYALLAPA, H.NO 24 KAITHOTA, IMMADIHALLI, WHITEFIELD BANGALORE SOUTH BANGALORE KA 560066 IN"
        },
        "email": "Mrameshm159@gmail.com",
        "name": "RAMESH MUNIYELLAPPA"
      },
      {
        "company": "ADHYAADITYA POWER DYNAMICS PRIVATE LIMITED",
        "attributes": {
          "city": "C/O DHARTI AUTOMOBILES,VI JAY PLOT 13 GONDAL ROAD RAJKOT VIVEKANANDNAGAR RAJKOT RAJKOT GJ 360002 IN"
        },
        "email": "lakhanibro@gmail.com",
        "name": "DINESHBHAI LAKHANI MAHENDRABHAI"
      },
      {
        "company": "ADHYAGUARD SECURITY SOLUTIONS PRIVATE LIMITED",
        "attributes": {
          "city": "NO.11,1ST FLOOR,HENNUR SARASWATHI VIDYALAYA ROAD HORAMAVU BANGALORE NORTH BANGALORE KA 560043 IN"
        },
        "email": "Chandru.asfms@gmail.com",
        "name": "GOPYA NAYAK VEENA"
      },
      {
        "company": "ADHYANICS COACHING INSTITUTE (OPC) PRIVATE LIMITED",
        "attributes": {
          "city": "C/O MUKTINATH SINGH, NEAR KISHAN VIDYALAYA, KURAICH SASARAM SASARAM ROHTAS BR 821115 IN"
        },
        "email": "sushantsaurabh23@gmail.com"
      },
      {
        "company": "ADHYANSH RETAIL PRIVATE LIMITED",
        "attributes": {
          "city": "BAHADER KE ROAD, DYING COMPLEX LUDHIANA BHARAT NAGAR CHOWK LUDHIANA PB 141001 IN"
        },
        "email": "bognerclothing@gmail.com",
        "name": "AMIT MARRIA"
      },
      {
        "company": "ADHYARTHA VENTURES PRIVATE LIMITED",
        "attributes": {
          "city": "6-5-279/74/72 NEW BOHIGUDA SECUNDERABAD SECUNDERABAD HYDERABAD TG 500003 IN"
        },
        "email": "arthi.b46@gmail.com",
        "name": "BALU ARTHI"
      },
      {
        "company": "ADHYASTE INDIA PRIVATE LIMITED",
        "attributes": {
          "city": "PLOT NO 30 ICRISAT COLONY,PATANCHERU AMEENPUR RAMACHANDRAPURAM MEDAK TG 502032 IN"
        },
        "email": "2023bowbow@gmail.com",
        "name": "ANJUM BEGUM"
      },
      {
        "company": "ADHYATMA TECHNOLOGY PRIVATE LIMITED",
        "attributes": {
          "city": "#16 KRUTHI, 1ST C MAIN, 5 KATHRIGUPPE BSK 3RD STAGE KATHRIGUPPE BANGALORE SOUTH BANGALORE KA 560085 IN"
        },
        "email": "pratik.kanodia@hotmail.com",
        "name": "PRATIK KANODIA"
      },
      {
        "company": "ADHYAVIK ORGANICS PRIVATE LIMITED",
        "attributes": {
          "city": "26A, HIG FLATS, KALKA KALKA R.S. KALKA PANCHKULA HR 133302 IN"
        },
        "email": "adhya120423@gmail.com",
        "name": "DEEPTI SHARMA"
      },
      {
        "company": "ADHYAY AGROTECH FED PRODUCER COMPANY LIMITED",
        "attributes": {
          "city": "C/O ARUN KUMAR PANDAY UMA SHANKER PANDAY PIRU PIRO BHOJPUR BR 802207 IN"
        },
        "email": "arunkumarpiro2023@gmail.com",
        "name": "SANTOSH KUMAR"
      },
      {
        "company": "ADHYAYA RESORTS AND SPA PRIVATE LIMITED",
        "attributes": {
          "city": "DOOR NO.G-754,BRIGADE PANORAMA,ANCHEPALAYA, KENGERI BANGALORE SOUTH BANGALORE RURAL KA 560060 IN"
        },
        "email": "Sandeeo.vs007@gmail.com",
        "name": "VAGALE SRINIVAS SANDEEP"
      },
      {
        "company": "ADHYAYANINDIA TECHNOLOGIES PRIVATE LIMITED",
        "attributes": {
          "city": "C/O DEEPSIKHA ROY VILL-KARIMPUR PO-KARIMPUR KARIMPUR KARIMPUR I NADIA WB 741152 IN"
        },
        "email": "info.adhyayanindia@gmail.com",
        "name": "PRANAB KUMAR ROY"
      },
      {
        "company": "ADHYNAM EDUCARE (OPC) PRIVATE LIMITED",
        "attributes": {
          "city": "S-171 GROUND FLOOR SHARA SHOPPING CENTER GHAZIPUR (LUCKNOW) LUCKNOW LUCKNOW UP 226016 IN"
        },
        "email": "myself.raviyadav@gmail.com"
      },
      {
        "company": "ADHYUDHA VENTURES PRIVATE LIMITED",
        "attributes": {
          "city": "PLOT NO 48/P VIMANPURI COLONY KUTBULLAPUR HYD HYDERABAD TG 500055 IN"
        },
        "email": "ajeeshnair.g@gmail.com",
        "name": "AJEESH KUMAR GOPINATHAN"
      },
      {
        "company": "ADI AGRO CHEMICAL PRIVATE LIMITED",
        "attributes": {
          "city": "F NO D-3, DISHA ALANKAR, CANNOUGHT PLACE, CIDCO AURANGABAD (MH) AURANGABAD AURANGABAD MH 431001 IN"
        },
        "email": "jadhavishwar1976@gmail.com",
        "name": "AMOL DNYANESHWAR MAWAL"
      },
      {
        "company": "ADI BODH FOUNDATION",
        "attributes": {
          "city": "KAMESHWAR SAHU PLOT NO-33 3RD FLOOR SEC-12A DWARKA N.S.I.T. DWARKA NEW DELHI SOUTH WEST DELHI DL 110078 IN"
        },
        "email": "rupal@itenmedia.in",
        "name": "ABHISHEK BHATNAGAR"
      },
      {
        "company": "ADI COOL INDIA PRIVATE LIMITED",
        "attributes": {
          "city": "A 3 BY 1 BASANT VIHAR UJJAIN M.L.NAGAR UJJAIN UJJAIN MP 456010 IN"
        },
        "email": "adicool24x7@gmail.com",
        "name": "ANKIT SINGH"
      },
      {
        "company": "ADI IMPEX VENTURES PRIVATE LIMITED",
        "attributes": {
          "city": "FLAT-6A, BLOCK-E, SWAGAT SKYLINE,NARAYANPUR RAJARHAT GOPALPUR RAJARHAT NORTH 24 PARGANAS WB 700136 IN"
        },
        "email": "kaziamiruz@gmail.com"
      },
      {
        "company": "ADI PARASHAKTI INFOTECH PRIVATE LIMITED",
        "attributes": {
          "city": "C/O MOHINI DEVI SINDHI BABA COMPLEX ROOPNAGAR KISHANGARH AJMER RJ 305814 IN"
        },
        "email": "adiparashaktiinfotech@gmail.com",
        "name": "SUSILA DEVI"
      },
      {
        "company": "ADI SHAKTI CREATIONS (OPC) PRIVATE LIMITED",
        "attributes": {
          "city": "CC54/2593-5, 1ST FLOOR BOSE NAGAR KADAVANTHARA ERNAKULAM ERNAKULAM KL 682020 IN"
        },
        "email": "menonsamyuktha@gmail.com"
      },
      {
        "company": "ADI SHAKTI SOCIAL DEVELOPMENT FOUNDATION",
        "attributes": {
          "city": "C/O SEEMA DEVI,PLOT 335 MUSTAFAPUR,DANAPUR KHAGAUL DINAPUR-CUM-KHAGAUL PATNA BR 801105 IN"
        },
        "email": "SANJAY.RAJ.BHARTI@GMAIL.COM",
        "name": "SEEMA DEVI"
      },
      {
        "company": "ADI SHAKTI TEXOFIN PRIVATE LIMITED",
        "attributes": {
          "city": "H-703, M.I.A., BASNI 2ND PHASE JODHPUR CITY CIRCLE JODHPUR MARUDHAR IND AREA JODHPUR JODHPUR RJ 342005 IN"
        },
        "email": "adishaktijdp@gmail.com",
        "name": "ANAND KOTHARI"
      },
      {
        "company": "ADI SHAKYAMUNI INFRASTRUCTURE PRIVATE LIMITED",
        "attributes": {
          "city": "PLOT NO.07 BESIDE SAWITRIBAI FULE HI RUKHMINI NAGAR AMRAVATI AMRAVATI MH 444606 IN"
        },
        "email": "adishakyamuniinfrapvtltd@gmail.com",
        "name": "JITENDRA KASHIRAM PARDHI"
      },
      {
        "company": "ADI SHANKRACHARYA GOURAKSHAN FOUNDATION",
        "attributes": {
          "city": "495/3, WARD NO: 35, JAWAHAR SINGH KI PAIGAH, LASHKAR GIRD GWALIOR MP 474001 IN"
        },
        "email": "gourakshanbharat@gmail.com",
        "name": "ADHEESH RAJ BHALLA"
      },
      {
        "company": "ADI SIGNATURE DEVELOPERS PRIVATE LIMITED",
        "attributes": {
          "city": "F.NO.203,2ND FLOOR SHRI KRISHNA FORT GANESHPUR INDUSTRIA AREA CHINHAT LUCKNOW LUCKNOW UP 226019 IN"
        },
        "email": "aditya1978aditya@gmail.com",
        "name": "AKHIL BANSAL"
      },
      {
        "company": "ADI TANTRA INDIA PRIVATE LIMITED",
        "attributes": {
          "city": "E/E-4/1, BAGUIATI HATIYAR ROAD, JYANGRA KALITALA JYANGRA D B NAGAR NORTH 24 PARGANAS WB 700059 IN"
        },
        "email": "aditantra12@hotmail.com",
        "name": "SURAJIT JANA"
      },
      {
        "company": "ADI YOGI AYURVEDA PRIVATE LIMITED",
        "attributes": {
          "city": "FIRST FLOOR, H NO 456/22 DURGA COLONY ROHTAK TOWN ROHTAK ROHTAK HR 124001 IN"
        },
        "email": "ushanahar48@gmail.com",
        "name": "USHA RANI"
      },
      {
        "company": "ADI-MAHEK REALTORS PRIVATE LIMITED",
        "attributes": {
          "city": "62/59 HARIPADA DUTTA LANE TOLLYGUNGE KOLKATA KOLKATA WB 700033 IN"
        },
        "email": "chandanb1980@gmail.com",
        "name": "SUSMIT NEOGY"
      },
      {
        "company": "ADIADI POWER PRIVATE LIMITED",
        "attributes": {
          "city": "HNO.01/1673, HIRAPUR ROAD MOHABA BAZAR TATIBANDH DHARSIWA RAIPUR CT 492099 IN"
        },
        "email": "adityaagrawal871@gmail.com",
        "name": "SATYANARAYAN AGRAWAL"
      },
      {
        "company": "ADIASU ESTCON PRIVATE LIMITED",
        "attributes": {
          "city": "PLOT NO - 516/1680 SUB-85 &AMP; 86,SAMPARK VIHAR PATIA GDS BHUBANESWAR KHORDA OR 751024 IN"
        },
        "email": "abhomespvtltd@gmail.com",
        "name": "ARTABANDHU JENA"
      },
      {
        "company": "ADIBA & K MINERALS PRIVATE LIMITED",
        "attributes": {
          "city": "SHOP NO 11, SPARK PLAZA TELEBANDHA RAIPUR RAIPUR RAIPUR CT 492001 IN"
        },
        "email": "adibakmineral@gmail.com",
        "name": "VIJAY KUMAR SINGHAL"
      },
      {
        "company": "ADIBH HEALTHCARE PRIVATE LIMITED",
        "attributes": {
          "city": "SHOP NO. G-13 FANTASIAMULTIPLEXCOMPLEX SANPADA THANE THANE MH 400703 IN"
        },
        "email": "nanditas@adibhhealthcare.com",
        "name": "SANTOSH KISHOR GAIKWAD"
      },
      {
        "company": "ADIBHUMI INFRABULLS INDIA PRIVATE LIMITED",
        "attributes": {
          "city": "ROOM NO. 1101 , 11 FLOOR SHANTINIKETAN BUILDING 8 RABINDRA NAGAR (KOLKATA) KOLKATA KOLKATA WB 700018 IN"
        },
        "email": "adityachakraborty5@gmail.com",
        "name": "ADITYA CHAKRABORTY"
      },
      {
        "company": "ADIBHUT STUDY OVERSEAS PRIVATE LIMITED",
        "attributes": {
          "city": "NAHAR SINGH COMPLEX AIRPORT RANI BAGH SATWARI MANDAL JAMMU JAMMU JK 180003 IN"
        },
        "email": "deepaksharma198383@gmail.com",
        "name": "SHAGUN MEHTA"
      },
      {
        "company": "ADIBITA SOCIAL SERVICE FOUNDATION",
        "attributes": {
          "city": "S/O ASHOK,UDAYNARAYANPUR HOWRAH UDAYNARAYANPUR DOMJUR HOWRAH WB 711226 IN"
        },
        "email": "kunalganguly78@gmail.com",
        "name": "KUNAL GANGULY"
      },
      {
        "company": "ADICOMP INDIA PRIVATE LIMITED",
        "attributes": {
          "city": "PLOT NO. R 960, 1 TTC INDUSTRIAL AREA, MIDC, GHANSOLI RABALE THANE MH 400701 IN"
        },
        "email": "ravindra.kulkarni@adicomp.com",
        "name": "KETANKUMAR VINODKUMAR PARIKH"
      },
      {
        "company": "ADIDA EVENTS PRIVATE LIMITED",
        "attributes": {
          "city": "1/6979 F/F PVT NO-1 PLOT NO-31 SHIVAJI PARK SHAHDARA SHAHDARA SHAHDARA DL 110032 IN"
        },
        "email": "Tarun.chadha97@gmail.com",
        "name": "TARUN CHADDA"
      },
      {
        "company": "ADIDAM MOTORS PRIVATE LIMITED",
        "attributes": {
          "city": "FL NO-B-802, SR NO-25 (P) SATYAM RAJYOG DHANORI PUNE CITY PUNE MH 411015 IN"
        },
        "email": "adidammotors@gmail.com",
        "name": "MAHARSHI GANESHPRASAD SHARMA"
      },
      {
        "company": "ADIDEV COASTLINE TRADING (OPC) PRIVATE LIMITED",
        "attributes": {
          "city": "GHANTILODI, KUMARJALINA BHOGARAI KUMARJALINA BHOGRAI BALESWAR OR 756036 IN"
        },
        "email": "mail2abhijitmohanty@gmail.com"
      },
      {
        "company": "ADIDEV ENVIROSAVE PROJECTS PRIVATE LIMITED",
        "attributes": {
          "city": "HOUSE NO. 900 SECTOR-3 NEAR VAISH PUBLIC SCHOOL ROHTAK ROHTAK ROHTAK HR 124001 IN"
        },
        "email": "amannandal111@gmail.com",
        "name": "SUMIT NANDAL"
      },
      {
        "company": "ADIDEV MEDISURGE (OPC) PRIVATE LIMITED",
        "attributes": {
          "city": "C/O SHOMLAL SHAH BILOUJI MANGALAM ROAD WAIDHAN SINGRAULI SINGRAULI MP 486886 IN"
        },
        "email": "AAA.ANUJ1612@OUTLOOK.COM"
      },
      {
        "company": "ADIDEV TOURS & TRAVELS PRIVATE LIMITED",
        "attributes": {
          "city": "PLOT NO GA-215, NILADRI VIHAR SAILASHREE VIHAR BHUBANESWAR KHORDA OR 751021 IN"
        },
        "email": "adidevtourstravel@gmail.com"
      },
      {
        "company": "ADIDEVSHIVAY ENTERPRISE PRIVATE LIMITED",
        "attributes": {
          "city": "HOUSE NO. 11, H.I.G MR 5 ROAD SANDIPANI NAGAR UJJAIN UJJAIN UJJAIN MP 456001 IN"
        },
        "email": "info@apnatailors.com",
        "name": "DEEPIKA GAURAV GUPTA"
      },
      {
        "company": "ADIDHAN VENTURES PRIVATE LIMITED",
        "attributes": {
          "city": "4 MANIBA FLATS, NR.PRASHANT CINEMA, MAHESANA I E MAHESANA MAHESANA GJ 384002 IN"
        },
        "email": "adidhanventure@gmail.com",
        "name": "DAHYALAL BANSILAL PRAJAPATI"
      },
      {
        "company": "ADIDHANA FORTUNE FOUNDATION",
        "attributes": {
          "city": "85/544,PRATAP NAGAR, SANGANER, PRATAP NAGAR HOUSING BOARD JAIPUR JAIPUR RJ 302033 IN"
        },
        "email": "adidhana.foundation@gmail.com",
        "name": "AKANKSHA SINHA"
      },
      {
        "company": "ADIEM BRILLIANCE PRIVATE LIMITED",
        "attributes": {
          "city": "PLOT NO W, W-BLOCK, UPPAL SOUTHEND, NURSARY SCHOOL GURGAON BASAI ROAD GURGAON HR 122001 IN"
        },
        "email": "shukla.yasha@gmail.com",
        "name": "NITIN THAKUR"
      },
      {
        "company": "ADIFALDHARA FARMER PRODUCER COMPANY LIMITED",
        "attributes": {
          "city": "H.NO-1691, MOTA FALIYA VILL-FALDHARA FALDHARA VALSAD VALSAD GJ 396007 IN"
        },
        "email": "Kamleshpatel9583@gmail.com",
        "name": "RAMILABEN HITENDRABHAI PATEL"
      },
      {
        "company": "ADIGEBHATTA NATIVEINDIANFOODS PRIVATE LIMITED",
        "attributes": {
          "city": "# 350 A04 IST FLOOR AREHALLI ITTAMADU MAIN RO CHIKKALASANDRA BANGALORE SOUTH BANGALORE KA 560061 IN"
        },
        "email": "akash.manohar360@gmail.com",
        "name": "AKASH MANOHAR HERANJAL"
      },
      {
        "company": "ADIGRANTH AGRO (INDIA) PRIVATE LIMITED",
        "attributes": {
          "city": "# 34, SECTOR -3 URBAN ESTATE KURUKSHETRA THANESAR KURUKSHETRA HR 136118 IN"
        },
        "email": "adadirgranth2028@gmail.com"
      },
      {
        "company": "ADIGROW HEALTHCARE SERVICES PRIVATE LIMITED",
        "attributes": {
          "city": "SR NO.1595/2 FL NO-C-102 AASHRITHA HAVELI CHIKHALI HAVELI PUNE MH 411062 IN"
        },
        "email": "adigrowhealthcarepvt.ltd@gmail.com",
        "name": "MINAKSHI GOPAL SHRIMANGALE"
      },
      {
        "company": "ADIGURU FOREX AND TRAVELS PRIVATE LIMITED",
        "attributes": {
          "city": "GR-FR 9/70/A NETAJI NAGAR REGENT ESTATE KOLKATA KOLKATA WB 700092 IN"
        },
        "email": "dipanjanmitra07@gmail.com",
        "name": "DIPANJAN MITRA"
      },
      {
        "company": "ADIGURVE FARMER PRODUCER COMPANY LIMITED",
        "attributes": {
          "city": "2535 NH 3 UMARANE DEOLA UMRANA DEOLA NASHIK MH 423110 IN"
        },
        "email": "adigurvefpc@gmail.com",
        "name": "REKHA HEMANT DEORE"
      },
      {
        "company": "ADIHAR TECH SOLUTIONS PRIVATE LIMITED",
        "attributes": {
          "city": "PNO-542,542/AA/,542 GOPALANAGAR,VASANTH NAGAR JNTU KUKAT PALLY TIRUMALAGIRI HYDERABAD TG 500085 IN"
        },
        "email": "ahadmin@adihartech.com",
        "name": ". DONEPUDI KRISHNA KUMARI"
      },
      {
        "company": "ADIIAN SOLAR PRIVATE LIMITED",
        "attributes": {
          "city": "C/O MAQSHUD KHAN NAI ABADI DADRI DADRI GAUTAM BUDDHA NAGAR UP 203207 IN"
        },
        "email": "suhailsaifi2279@gmail.com",
        "name": "SUHAIL SAIFI"
      },
      {
        "company": "ADIJAI BROTHERS PRIVATE LIMITED",
        "attributes": {
          "city": "J-20, F- FLOOR, SURAJPURA SHAHID BHAGAT SINGH COLON SHIV BARI BIKANER BIKANER RJ 334001 IN"
        },
        "email": "adijaibrothers.roc@gmail.com",
        "name": "MUKESH MADERNA"
      },
      {
        "company": "ADIJAY WELLNESS PRIVATE LIMITED",
        "attributes": {
          "city": "PLOT NO. 115, INDUSTRIAL AREA PHASE 1 IND AREA CHANDIGARH CHANDIGARH CHANDIGARH CH 160002 IN"
        },
        "email": "edenchd@gmail.com",
        "name": "ADITI BANSAL"
      },
      {
        "company": "ADIJYOTI INDUSTRIES (OPC) PRIVATE LIMITED",
        "attributes": {
          "city": "PLOT NO. 42 JAHIRPUR, KURSI ROAD KALYANPUR (LUCKNOW) LUCKNOW LUCKNOW UP 226022 IN"
        },
        "email": "vivekverma4385@gmail.com"
      },
      {
        "company": "ADIKAILASH FOUNDATION",
        "attributes": {
          "city": "C/O SUNIL CHANDRA SATI VILLAGE KHAIRNA GARAMPANI KOSYA KUTAULI NAINITAL UR 263135 IN"
        },
        "email": "kpant6013@gmail.com",
        "name": "KISHOR KUMAR"
      },
      {
        "company": "ADIKE RESORT PRIVATE LIMITED",
        "attributes": {
          "city": "DAMBADAHALLI MUGTHIHALLI POST MUGTHIHALLI CHIKMAGALUR CHICKMAGALUR KA 577133 IN"
        },
        "email": "preetham555movies@gmail.com",
        "name": "SHIVARAMAIAH ."
      },
      {
        "company": "ADIKRISHI AGRO TECH PRIVATE LIMITED",
        "attributes": {
          "city": "C/O R UNIT NO 3/22 , 3RD FLOOR SUHHATA MALL CITY CENTRE DURGAPUR MC BARDHAMAN WB 713216 IN"
        },
        "email": "adikrishi.agrotech@gmail.com",
        "name": "MONISANKAR HAZRA"
      },
      {
        "company": "ADIL MALIK MANPOWER SUPPLIER AND SECURITY SERVICES PRIVATE LIMITED",
        "attributes": {
          "city": "C/O MR.MOHAMMAD QASIM DAR DAR RADIOS COMPLEX RAMBAG BATAMALOO SRINAGAR SRINAGAR JK 190009 IN"
        },
        "email": "naseerahmad.am@gmail.com",
        "name": "NASEER AHMAD BHAT"
      },
      {
        "company": "ADIL VISION PRIVATE LIMITED",
        "attributes": {
          "city": "R.NO. 4, CHEETA CAMP, B - NEAR BASHIRAHMED BEEFSHOP MUMBAI MUMBAI MUMBAI MH 400088 IN"
        },
        "email": "adilvisionprivatelimited@gmail.com",
        "name": "SAMEER KHAN"
      },
      {
        "company": "ADILAKHSMI ENIGINEERING PRIVATE LIMITED",
        "attributes": {
          "city": "C-34, VIVEKANAND ROAD BAGUNNAGAR, BARIDIH BARIDIH COLONY BARIDIH COLONY EAST SINGHBHUM JH 831017 IN"
        },
        "email": "prathikkumar910@gmail.com",
        "name": "PRATHIK KUMAR"
      },
      {
        "company": "ADILAKSH TECHNOLOGIES PRIVATE LIMITED",
        "attributes": {
          "city": "98/50/1, SECOND FLOOR, 2ND MAIN ROAD,GEF BLOCK, RAJAJINAGAR BANGALORE NORTH BANGALORE KA 560010 IN"
        },
        "email": "hrithiksinghvi.s@gmail.com",
        "name": "HRITHIK SINGHVI"
      },
      {
        "company": "ADILAKSHMI INFRATECH PRIVATE LIMITED",
        "attributes": {
          "city": "A-15, D.B.CITY, SACHIN TENDULKAR MARG, R.K PURI GWALIOR GIRD GWALIOR MP 474011 IN"
        },
        "email": "katare.ramkumar1965@gmail.com",
        "name": "RAM KUMAR KATARE"
      },
      {
        "company": "ADILAX PROJECTS PRIVATE LIMITED",
        "attributes": {
          "city": "C/O - MADHABANANDA SAHOO RANDIA, MADHAB NAGAR RANDIAHAT BHADRAK BHADRAK OR 756135 IN"
        },
        "email": "paladitya1989@yahoo.com",
        "name": "ADITYA KUMAR PAL"
      },
      {
        "company": "ADILOP TECHNOLOGY PRIVATE LIMITED",
        "attributes": {
          "city": "PLOT 70,FLAT 203,ROAD 5 AYYAPPA SOCIETY, MADHAPUR MADHAPUR SHAIKPET HYDERABAD TG 500081 IN"
        },
        "email": "adiloptechnology@gmail.com",
        "name": "VIVEK POLINA"
      },
      {
        "company": "ADIMA TECHNOLOGIES PRIVATE LIMITED",
        "attributes": {
          "city": "PLOT NO.-1173/P,2ND FLOOR VENKATA RAMANA COLONY KPHB COLONY TIRUMALAGIRI HYDERABAD TG 500085 IN"
        },
        "email": "peddinti.ashok@adimatechnologies.com",
        "name": "ASHOK PEDDINTI"
      },
      {
        "company": "ADIMAA OVERSEAS INDIA PRIVATE LIMITED",
        "attributes": {
          "city": "605, THE CORPORATE PARK SECTOR 18. NAVI MUMBAI THANE THANE THANE MH 400705 IN"
        },
        "email": "adityasingh01r@gmail.com",
        "name": "MASUM ALI UNIYA"
      },
      {
        "company": "ADIMAYA SERVICES PRIVATE LIMITED",
        "attributes": {
          "city": "C/O-LAXMAN MOHANRAOJADHAV AT POST-MUKINDPURTAL-NEWA NEVASA NEVASA AHMED NAGAR MH 414603 IN"
        },
        "email": "rahul.dane995@gmail.com",
        "name": "RAHUL SANJAY DANE"
      },
      {
        "company": "ADIMED HEALTHCARE PRIVATE LIMITED",
        "attributes": {
          "city": "T-21, SECTOR-11 NOIDA NOIDA GAUTAM BUDDHA NAGAR UP 201301 IN"
        },
        "email": "ipsitachakravorty@rediffmail.com",
        "name": "IPSITA CHAKRAVORTY"
      },
      {
        "company": "ADIMURTI AGRITECH PRIVATE LIMITED",
        "attributes": {
          "city": "1122/11F, SKA GREEN ARCH, SECTOR-16B, GREATER NOIDA GAUTAM BUDDHA NAGAR GAUTAM BUDDHA NAGAR GAUTAM BUDDHA NAGAR UP 201318 IN"
        },
        "email": "agarwal.ankit@live.in",
        "name": "ANKIT AGARWAL"
      },
      {
        "company": "ADINA JEWELS PRIVATE LIMITED",
        "attributes": {
          "city": "204, DIAMONDA, S.V ROAD A WING DAHISAR DAHISAR WEST MUMBAI MH 400068 IN"
        },
        "email": "arjunsinghsisodiya00@gmail.com",
        "name": "DILIP SHANKARLAL JAIN"
      },
      {
        "company": "ADINARAYANA HOTELS AND RESORTS PRIVATE LIMITED",
        "attributes": {
          "city": "C/O BHANWARLAL MANGILAL KHERADIWADA UDAIPUR CITY GIRWA UDAIPUR RJ 313001 IN"
        },
        "email": "manojverma25@gmail.com",
        "name": "MANOJ VERMA"
      },
      {
        "company": "ADINATH CHARITABLE FOUNDATION",
        "attributes": {
          "city": "FLAT NO. 2, SHREE SAI RESIDENCY, OSMANPURA AURANGABAD AURANGABAD MH 431005 IN"
        },
        "email": "sandeepburad@gmail.com"
      },
      {
        "company": "ADINATH FARMER PRODUCER COMPANY LIMITED",
        "attributes": {
          "city": "FLAT NO.13, SHREE TIRUMAL PARAS APARTMENT ANANDVALI SAWARKAR NAGAR NASHIK NASHIK MH 422013 IN"
        },
        "email": "shivi.mails@gmail.com",
        "name": "SHITAL SHUBHAM BORASTE"
      },
      {
        "company": "ADINATH JEWELGEMS GLOBAL PRIVATE LIMITED",
        "attributes": {
          "city": "7-2-685,686,SRI ADINATH JEWELLERS, POT MARKET SECUNDERABAD HYDERABAD HYDERABAD TG 500003 IN"
        },
        "email": "sriadinathjewellers1@gmail.com",
        "name": "MUKESH BHAGWATILAL SURANA"
      },
      {
        "company": "ADINAV HEALTHCARE PRIVATE LIMITED",
        "attributes": {
          "city": "THANNICKAL HOUSE KALLINGAL KULATHOOR PO KULATHUR (THIRUVANANTHAPURAM) THIRUVANANTHAPURAM THIRUVANANTHAPURAM KL 695583 IN"
        },
        "email": "iamanilkumar1972@gmail.com",
        "name": ". ANIL KUMAR"
      },
      {
        "company": "ADINAY COMMERCIAL PRIVATE LIMITED",
        "attributes": {
          "city": "OLD38/1, 18-21/2, NEW 8 A.K COLONY JAYANAGAR SAMPANGIRAMNAGAR BANGALORE SOUTH BANGALORE KA 560027 IN"
        },
        "email": "adinaycommercialprivatelimited@gmail.com",
        "name": "NILESH KUMAR TIBREWALA"
      },
      {
        "company": "ADINGRA SWARNA KRISHNA PHARMACEUTICAL PRIVATE LIMITED",
        "attributes": {
          "city": "MOOL CHAND SONI, KHASRA NO 151 SHANTI VIHAR VIKAS NAGAR LUCKNOW LUCKNOW UP 226022 IN"
        },
        "email": "Utkldip@gmail.com",
        "name": "RANU SONI"
      },
      {
        "company": "ADINOVUS TECHNOLOGIES PRIVATE LIMITED",
        "attributes": {
          "city": "D.NO.2-10 MUDINEPALLI MUDINEPALLI KRISHNA AP 521325 IN"
        },
        "email": "krishnahari6622@gmail.com",
        "name": "SRIKANTH KALAVAGUNTA"
      },
      {
        "company": "ADINS INTERNATIONAL PRIVATE LIMITED",
        "attributes": {
          "city": "PLOT NO. 1 JAGAT KHERA ROAD KALLI PACCHIM MOHANLALGANJ LUCKNOW UP 226301 IN"
        },
        "email": "ng18122002@gmail.com",
        "name": "SACHIN MAURYA"
      },
      {
        "company": "ADINTI PROJECT JUNCTION PRIVATE LIMITED",
        "attributes": {
          "city": "KHATA NO 148, PLOT NO 401 MANGALAM BIHAR COLONY DAUDPUR (PATB.O DINAPUR-CUM-KHAGAUL PATNA BR 801503 IN"
        },
        "email": "dhruvprajapati25800@gmail.com",
        "name": "PRABHAT KUMAR"
      },
      {
        "company": "ADIONA ADVENTURE GEARS PRIVATE LIMITED",
        "attributes": {
          "city": "1Q-E5 FERNHILL GARDENS AP SECTOR 6 HSR LAYOUT HSR LAYOUT BANGALORE SOUTH BANGALORE KA 560102 IN"
        },
        "email": "kvaideeshsubbaraj@gmail.com",
        "name": "KANAPPAN RAJINI"
      },
      {
        "company": "ADIPADMA DATA ANALYTICAL AND CONSULTANCY PRIVATE LIMITED",
        "attributes": {
          "city": "FLAT NO.402 PUSHPAK CHSL BHASKAR COLONY, NAUPADA NAUPADA (THANE) THANE THANE MH 400602 IN"
        },
        "email": "gadgilumesh@gmail.com",
        "name": "UMESH BHIKAJI GADGIL"
      },
      {
        "company": "ADIPRIYA HEALTH CARE PRIVATE LIMITED",
        "attributes": {
          "city": "AT-GOUDAPATANA, CHHATIA KAITHA DARPAN CUTTACK OR 754023 IN"
        },
        "email": "ajayaksingh1973@gmail.com",
        "name": "PRIYAJEET TARAI"
      },
      {
        "company": "ADIPRIYANSH CONSULTING PRIVATE LIMITED",
        "attributes": {
          "city": "PLOT NO.-GI-54 VSS NAGAR DEBIDWAR JAJPUR JAJAPUR OR 755007 IN"
        },
        "email": "hrsproutbbsr@gmail.com",
        "name": "PANKAJINI ROUT"
      },
      {
        "company": "ADIPUR SWITCHGEAR & ENCLOSURES (OPC) PRIVATE LIMITED",
        "attributes": {
          "city": "SHOP NO-403, ROONGTA FUTUREX APPT,NR RD CIRCLE CIDCO COLONY (NASHIK) NASHIK NASHIK MH 422009 IN"
        },
        "email": "ava241175@gmail.com"
      },
      {
        "company": "ADIPURUSH INDUSTRIES PRIVATE LIMITED",
        "attributes": {
          "city": "C/O SUNEETA DEVI MOH. LUHARI DARVAJA ALIGANJ ALIGANJ (ETAH) ALIGANJ ETAH UP 207247 IN"
        },
        "email": "ankitdeep3030@gmail.com",
        "name": ". ANKITDEEP"
      },
      {
        "company": "ADIPURUSHAYA RAM RESORTS PRIVATE LIMITED",
        "attributes": {
          "city": "C/O DEVENDRA SINGH 817 K MEERAPUR ALLAHABAD CITY ALLAHABAD ALLAHABAD UP 211003 IN"
        },
        "email": "Udaypratapsingh50@gmail.com",
        "name": "VINAY PRATAP SINGH"
      },
      {
        "company": "ADIQUE MIDWAY FASHION ASSIST PRIVATE LIMITED",
        "attributes": {
          "city": "B-32 GROUND FLOOR SECTOR 64 NOIDA NOIDA GAUTAM BUDDHA NAGAR UP 201301 IN"
        },
        "email": "sakshijha658@gmail.com",
        "name": "AMIT KUMAR JHA"
      },
      {
        "company": "ADIR BHARAT INFRASTRUCTURE LIMITED",
        "attributes": {
          "city": "EAST TOWER 11ES1C MANICASADONA,,NEWTOWN, NEW TOWN NEW TOWN NORTH 24 PARGANAS WB 700156 IN"
        },
        "email": "RAY@THEADIBHARAT.COM",
        "name": "BIJOY KRISHNA BANIK"
      },
      {
        "company": "ADIRA INTERNATIONAL PRIVATE LIMITED",
        "attributes": {
          "city": "54. GF, VISHAT RESIDENCY, OPP. PRIYANKA CHOKDI, BHESTAN SURAT SURAT GJ 395023 IN"
        },
        "email": "adityasrai0529@gmail.com",
        "name": "SUNIL HEMANTKUMAR MEHTA"
      },
      {
        "company": "ADIRAA HI-LUXURY RESORTS PRIVATE LIMITED",
        "attributes": {
          "city": "103 A/D GANDHI NAGAR GANDHINAGAR JAMMU JAMMU JK 180004 IN"
        },
        "email": "sharmashivali0181@gmail.com",
        "name": "DEEPAK SHARMA"
      },
      {
        "company": "ADIRAH METAL TRADING PRIVATE LIMITED",
        "attributes": {
          "city": "A-407, FLR-4, PLOT-1/431, 432, KHAPRADEO CHS LTD, PAREL MUMBAI MUMBAI MH 400012 IN"
        },
        "email": "Adirahmetals@gmail.com",
        "name": "ADITYA ABHIMANYU MISHRA"
      },
      {
        "company": "ADIRAJ MICROCARE FOUNDATION",
        "attributes": {
          "city": "C/O POOJA SHARMA, PEETAL MORADABAD MORADABAD MORADABAD UP 244001 IN"
        },
        "email": "puneet.pandit.188@gmail.com",
        "name": "VIRANDRA KUMAR SHARMA"
      },
      {
        "company": "ADIRAJ PACKAGING INDUSTRIES LIMITED",
        "attributes": {
          "city": "PLOT NO 90 PHASE-1, HSIIDC INDUSTRIAL AREA BARI GANAUR SONIPAT HR 131101 IN"
        },
        "email": "adirajind@yahoo.com",
        "name": "YASH JAIN"
      },
      {
        "company": "ADIRAMA PRODUCTS PRIVATE LIMITED",
        "attributes": {
          "city": "HOUSE NO. 286 WARD NO. 9 VILLAGE KANDWALA AMARKOT KANDWALA AMARKOT ABOHAR FIROZPUR PB 152116 IN"
        },
        "email": "saharanraman01@gmail.com",
        "name": "RAMAN KUMAR SAHARAN"
      },
      {
        "company": "ADIRASVAAN FOOD TECHNOLOGY PRIVATE LIMITED",
        "attributes": {
          "city": "1 B1/A 5 FIRST FLOORMOHAN CO OPERATIVE INDUSTRIAL BADARPUR (SOUTH DELHI) NEW DELHI SOUTH DELHI DL 110044 IN"
        },
        "email": "kaushlendra150292@gmail.com",
        "name": "PRANJAL AGRAWAL"
      },
      {
        "company": "ADIREVCYCLE PRIVATE LIMITED",
        "attributes": {
          "city": "H. NO. 9-4-86/114, SALARJUNG COLONY TOLI CHOWKI GOLCONDA HYDERABAD TG 500008 IN"
        },
        "email": "adirevcycle@gmail.com",
        "name": "LAKSHMANARAYA SASTRY VEDALA"
      },
      {
        "company": "ADIRGHA TECH SERVICES PRIVATE LIMITED",
        "attributes": {
          "city": "1005 LODHA SUPREMUS, SAKI VIHAR ROAD, OPP MTNL BLDG MUMBAI MUMBAI MUMBAI MH 400072 IN"
        },
        "email": "ajit@contactabc.com",
        "name": "SUMIT KUMAR SRIVASTAVA"
      },
      {
        "company": "ADIRISHI ADVISORY SERVICES PRIVATE LIMITED",
        "attributes": {
          "city": "BLDG NO.BD 10, RADHE KRISHNA INDUSTRIAL PARK SHANTINAGAR E.D. BHIWANDI THANE MH 421302 IN"
        },
        "email": "kavita.k1@gmail.com",
        "name": "VISHNU PARSRAM KOTWANI"
      },
      {
        "company": "ADIS GROW X BUSINESS (OPC) PRIVATE LIMITED",
        "attributes": {
          "city": "NO.23(P),24,29,32(P) MUNNE, KOLAL MARATHAHALLI COLONY BANGALORE NORTH BANGALORE KA 560037 IN"
        },
        "email": "info@growxbusiness.com"
      },
      {
        "company": "ADIS INDIA PLACEMENT PRIVATE LIMITED",
        "attributes": {
          "city": "SR.NO.21/2B FL.NO. D-1003 SIGNATURE PARK DANGECHOWK THERGAON PUNE CITY PUNE MH 411033 IN"
        },
        "email": "Adisjobsplacement@gmail.com",
        "name": "JAGDISH PRAKASH YADAV"
      },
      {
        "company": "ADISHAA STYLING PRIVATE LIMITED",
        "attributes": {
          "city": "KH. NO. 408, 3RD FLOOR A BLOCK, GALI NO.8 MAHIPALPUR NEW DELHI SOUTH WEST DELHI DL 110037 IN"
        },
        "email": "vidhansha.sehrawat@gmail.com",
        "name": "VIDHANSHA SEHRAWAT"
      },
      {
        "company": "ADISHAKTI ENERGY PRIVATE LIMITED",
        "attributes": {
          "city": "P. NO. 2-3, JAGDAMBA COLONY, VAISHALI NAGAR, VAISHALI NAGAR JAIPUR JAIPUR RJ 302021 IN"
        },
        "email": "Abhinav1work@gmail.com",
        "name": "ABHINAV SINGH"
      },
      {
        "company": "ADISHI INDUSTRIES PRIVATE LIMITED",
        "attributes": {
          "city": "OFFICE NO. GS-203, SECOND FLOOR, GRAND MALL MG ROAD DLF QE DLF QE GURGAON HR 122002 IN"
        },
        "email": "adityagupta0003@gmail.com",
        "name": "SANJAY GUPTA"
      },
      {
        "company": "ADISHIV IMPEX PRIVATE LIMITED",
        "attributes": {
          "city": "104 /B,KAIVALYADHAM-1, NR.HARI OM FLATS,VEJALPUR MANEKBAG AHMADABAD CITY AHMEDABAD GJ 380015 IN"
        },
        "email": "adishivimpex@gmail.com",
        "name": "HARDIK SHAILESHKUMAR MEHTA"
      },
      {
        "company": "ADISHMA PRARMBH WELFARE FOUNDATION",
        "attributes": {
          "city": "P. NO. 85 1ST FLOOR BLK-C EXTENTION BADLI (NORTH WEST DELHI) DELHI NORTH WEST DELHI DL 110042 IN"
        },
        "email": "adishmaprarmbhwelfarefoundatio@gmail.com",
        "name": "VIJAYLAXMI SARAF"
      },
      {
        "company": "ADISHREE AGRO PRODUCER COMPANY LIMITED",
        "attributes": {
          "city": "C/O SUNANDHA J SONAWANE AT ARAI SATANA 423301 ARAI SATANA NASHIK MH 423301 IN"
        },
        "email": "sunandajibhau1959@gmail.com",
        "name": "SUNANDA JIBHAU SOANAWANE"
      },
      {
        "company": "ADISOL SOLUTION PRIVATE LIMITED",
        "attributes": {
          "city": "FLAT D-144 COSMOPOLIS ROAD DUMDUMA HOUSING BOARD COLONY BHUBANESWAR KHORDA OR 751019 IN"
        },
        "email": "deviduttam@gmail.com",
        "name": "DEVIDUTTA MOHANTY"
      },
      {
        "company": "ADISSHRE ENERGIES PRIVATE LIMITED",
        "attributes": {
          "city": "17/7, MALL ROAD, PHILKHANA FILKHANA KANPUR NAGAR UP 208001 IN"
        },
        "email": "adisshre.energies@gmail.com",
        "name": "VIJAY KUMAR GUPTA"
      },
      {
        "company": "ADISSIA DEVELOPERS PRIVATE LIMITED",
        "attributes": {
          "city": "NO .16 A1, GROUND FLOOR, HUZUR ROAD COIMBATORE RACECOURSE COIMBATORE SOUTH COIMBATORE TN 641018 IN"
        },
        "email": "vc.mani93@gmail.com",
        "name": "CELIA ROSHINI ARUL NAYAGAM"
      },
      {
        "company": "ADISWA SERVICES PRIVATE LIMITED",
        "attributes": {
          "city": "AT..GUT NO.73/2,PLOT 16A RK CITY, NANADURBAR NANDURBAR NANDURBAR NANDURBAR MH 425412 IN"
        },
        "email": "adiswa23@gmail.com",
        "name": "MAHENDRA SITARAM AHIRE"
      },
      {
        "company": "ADIT SAMPANN PRIVATE LIMITED",
        "attributes": {
          "city": "FLAT NO 22 G/F SEC 34 ROHINI KHERAKHUD VILLAGE BAWANA DELHI NORTH WEST DELHI DL 110039 IN"
        },
        "email": "jogijaswant95@gmail.com",
        "name": "JASWANT JOGI"
      },
      {
        "company": "ADIT SKILLS ACADEMY PRIVATE LIMITED",
        "attributes": {
          "city": "KHASRA NO 3867 VPO-SISWAR,MDB PHULPARAS PHULPARAS MADHUBANI BR 847409 IN"
        },
        "email": "aditskillsacademy@gmail.com",
        "name": "ABHISHEK ANAND"
      },
      {
        "company": "ADITAIYO GREEN ENERGIES PRIVATE LIMITED",
        "attributes": {
          "city": "MIG II/107 C S PUR SAILASHREE VIHAR BHUBANESWAR KHORDA OR 751021 IN"
        },
        "email": "aditaiyogreen@gmail.com",
        "name": "PARTHA SARATHI DAS"
      },
      {
        "company": "ADITHA VM ENGICON PRIVATE LIMITED",
        "attributes": {
          "city": "C/O SRI PRAMESHWAR SINGH BELA GOLA RAMNAGAR (WEST CHAMPARAN) BETTIAH WEST CHAMPARAN BR 845106 IN"
        },
        "email": "Aniketbhardwaj845103@gmail.com",
        "name": "NITI PANDEY"
      },
      {
        "company": "ADITHI NUTHANAPATHI INFRA PROJECTS PRIVATE LIMITED",
        "attributes": {
          "city": "R S NO 242/K PLOT NO 88 HATALAGGERI ROAD GADAG GADAG GADAG KA 582101 IN"
        },
        "email": "adithi.n030903@gmail.com",
        "name": "NUTHANAPATI BHASKARABABU"
      },
      {
        "company": "ADITHYA DIE CAST PRIVATE LIMITED",
        "attributes": {
          "city": "1 SIDCO INDUSTRIAL ESTATE KAKKALUR KAKALUR IND ESTATE TIRUVALLUR TIRUVALLUR TN 602003 IN"
        },
        "email": "adithyadiecast@gmail.com",
        "name": "GANESAN JAYACHANDRAN"
      },
      {
        "company": "ADITHYA HRUDAY ENERGY PRIVATE LIMITED",
        "attributes": {
          "city": "20 MYLAI RANGANATHAN ST., CRESENT PARK, T.NAGAR THYGARAYANAGAR CHENNAI CHENNAI TN 600017 IN"
        },
        "email": "adityahrudaysolar@gmail.com",
        "name": "CHANDRASEKAR KARTHIK SIVAPRAKASAM"
      },
      {
        "company": "ADITHYAPOWER AGRO PRODUCTS PRIVATE LIMITED",
        "attributes": {
          "city": "16, INDRA SAGAR APT, AKASHWANI CHOWK, NAGPUR GPO NAGPUR NAGPUR MH 440001 IN"
        },
        "email": "adithyapower.in@gmail.com",
        "name": "NILIMA DEVENDRA KUMAR SINGH"
      },
      {
        "company": "ADITI BHAVNIKA PRIVATE LIMITED",
        "attributes": {
          "city": "68/29 CHURCH LANE ALLAHAB ALLAHABAD ALLAHABAD ALLAHABAD UP 211001 IN"
        },
        "email": "gsgsons@gmail.com",
        "name": "CHHATRA PATI SINGH"
      },
      {
        "company": "ADITI RUDRA WEALTH BRIDGE PRIVATE LIMITED",
        "attributes": {
          "city": "NO.316/H, STILT FLOOR,11T NAGARABHAVI 2ND STAGE, VI NAGARBHAVI BANGALORE NORTH BANGALORE KA 560072 IN"
        },
        "email": "Arun.suninfrastructure@gmail.com",
        "name": "BANGALORE SOMANNA ARUN"
      },
      {
        "company": "ADITI WEALTH BRIDGE PRIVATE LIMITED",
        "attributes": {
          "city": "NO.316/H, STILT FLOOR, 11 NAGARABHAVI 2ND STAGEVINA NAGARBHAVI BANGALORE NORTH BANGALORE KA 560072 IN"
        },
        "email": "info@suninfrastructure.in",
        "name": "BANGALORE SOMANNA ARUN"
      },
      {
        "company": "ADITINFINITE PRIVATE LIMITED",
        "attributes": {
          "city": "BHOPASING NAIK CHOWK NAIK NAGAR SHRIRAMPUR CT SOOT GIRNI PUSAD YAVATMAL MH 445215 IN"
        },
        "email": "shailendra.aditinfinite@gmail.com",
        "name": "SMITA SHAILENDRA AHER"
      },
      {
        "company": "ADITIPURV.CONSTRUCTION PRIVATE LIMITED",
        "attributes": {
          "city": "FLAT NO A 02 YASHODA RESIDENCY AMBEGAON BK HAVELI PUNE MH 411046 IN"
        },
        "email": "garandek94@gmail.com",
        "name": "KASHILING DASU GARANDE"
      },
      {
        "company": "ADITON INVESTMENT CONSULTANTS PRIVATE LIMITED",
        "attributes": {
          "city": "H N 89, GATE NO 1, RAJAT GRAH COLONY, NAINWA ROAD BUNDI BUNDI BUNDI RJ 323001 IN"
        },
        "email": "aditya@aditoninvestments.com",
        "name": "ADITYA SONI"
      },
      {
        "company": "ADITRACO TECHNOLOGIES PRIVATE LIMITED",
        "attributes": {
          "city": "FLORA ORCHIDS, PLOT NO 45 &AMP; 46, ROAD NUMBER - 4 GACHIBOWLI SERI LINGAMPALLY K.V.RANGAREDDY TG 500032 IN"
        },
        "email": "ch.veerendrasinha@gmail.com",
        "name": "VENKATA THEERTHA MASARAPU"
      },
      {
        "company": "ADITREE INDIA BUSINESS MANAGEMENT SOLUTIONS PRIVATE LIMITED",
        "attributes": {
          "city": "41-C, MAHAVEER NAGAR A, PATRAKAR COLONY ROAD, MANSAROVAR JAIPUR JAIPUR RJ 302020 IN"
        },
        "email": "nehasharda73@gmail.com",
        "name": "SUDHANSHU PAREEK"
      },
      {
        "company": "ADITRI TRIDEV HERBS PRIVATE LIMITED",
        "attributes": {
          "city": "1-1-301/6/B, BAPU NAGAR ASHOKNAGAR (HYDERABAD) MUSHEERABAD HYDERABAD TG 500020 IN"
        },
        "email": "Adi03dev@gmail.com",
        "name": "PAKU RAJA LIKITHA SAI"
      },
      {
        "company": "ADITRRY DIES AND PATTERNS MANUFACTURING PRIVATE LIMITED",
        "attributes": {
          "city": "M/S ADITYA INDUSTIRES D-47 FIVE STAR MIDC KAGAL KAGAL KAGAL KOLHAPUR MH 416216 IN"
        },
        "email": "aditrry.pattern@gmail.com",
        "name": "PRADIP PATIL"
      },
      {
        "company": "ADITUS HEALTHTECH PRIVATE LIMITED",
        "attributes": {
          "city": "10/1, MADAN MOHAN MALVIYA MARG, LUCKNOW G.P.O. LUCKNOW LUCKNOW UP 226001 IN"
        },
        "email": "prasad.vedaang@gmail.com",
        "name": "SURESH PRASAD RASTOGI"
      },
      {
        "company": "ADITWAM ROZGAAR SAATHI TECHNOLOGIES PRIVATE LIMITED",
        "attributes": {
          "city": "C/O RAVINDRA PANJIYARA NEAR GOVT MIDDLE SCHOOL DUDHARI BANKA BANKA BR 813102 IN"
        },
        "email": "anishkushwaha885@gmail.com",
        "name": "ANISH KUMAR"
      },
      {
        "company": "ADITYA AQUA SOL PRIVATE LIMITED",
        "attributes": {
          "city": "FLAT.NO.204,DHARANI HOMES SRI VENKATESWARA COLONY BADANGPET HYDERABAD HYDERABAD TG 500058 IN"
        },
        "email": "maccha.aditya@gmail.com",
        "name": "AADITYA MACHHA"
      },
      {
        "company": "ADITYA AUTO INDUSTRIES OVERSEAS LIMITED",
        "attributes": {
          "city": "HOUSE NO.47,MEZZANINE FLR NARAINA INDL AREA PH-1 NARAINA INDUSTRIAL ESTATE NEW DELHI SOUTH WEST DELHI DL 110028 IN"
        },
        "email": "neetu.rajput@adityagroup.co",
        "name": "NEETU RAJPUT"
      },
      {
        "company": "ADITYA BIRLA LIFESTYLE BRANDS LIMITED",
        "attributes": {
          "city": "PIRAMAL AGASTYA BLDG 'A' 401,403,501,502, LBS ROAD KURLA MUMBAI MUMBAI MH 400070 IN"
        },
        "email": "rajeev.agrawal@abfrl.adityabirla.com",
        "name": "ANIL KUMAR MALIK"
      },
      {
        "company": "ADITYA BRIGHT BEVERAGES PRIVATE LIMITED",
        "attributes": {
          "city": "C/O S SUBHASH PRASAD SAO PUSHPAK NAGAR, JUNWANI I E BHILAI DURG DURG CT 490026 IN"
        },
        "email": "adityabrightbeveragespvtltd@gmail.com",
        "name": "GOPAL PODDAR"
      },
      {
        "company": "ADITYA CAPITAL & FINANCIAL SERVICES PRIVATE LIMITED",
        "attributes": {
          "city": "PLOT NO. 57, 3RD FLOOR PA NCHSATI CIRCLE, SADULGANJ BIKANER BIKANER BIKANER RJ 334001 IN"
        },
        "email": "Hemantasopa@gmail.com",
        "name": "HEMANT ASOPA"
      },
      {
        "company": "ADITYA CATALYST PRIVATE LIMITED",
        "attributes": {
          "city": "260/21 KELAHANDI HANDI POST HANDI CHIKMAGALUR CHICKMAGALUR KA 577111 IN"
        },
        "email": "mohithbp95@gmail.com",
        "name": "HEREKOLALE SHANTHAMLLE GOWDA PRABHAVATHI"
      },
      {
        "company": "ADITYA DEV BHOOMI HEIGHTS INFRA PRIVATE LIMITED",
        "attributes": {
          "city": "C/O RAMA SHANKAR SHUKLA DHANIDHARA BALLIA, BERUARBARI BANSDIH BALLIA UP 277304 IN"
        },
        "email": "divyaprakashshukla78@gmail.com",
        "name": "SANJEEV KUMAR PANDEY"
      },
      {
        "company": "ADITYA EARTH SURVEY PRIVATE LIMITED",
        "attributes": {
          "city": "SHOP NO S-8 FRIST MALL INFORNT OF S P OFFICE BHARATPUR CITY BHARATPUR BHARATPUR RJ 321001 IN"
        },
        "email": "palsingh.brij@gmail.com",
        "name": "BRIJENDRA PAL SINGH"
      },
      {
        "company": "ADITYA FORTUNE PRIVATE LIMITED",
        "attributes": {
          "city": "SHOP NO.1, WARD NO-28, OP. SBI BANK, NORTH MARKE RATANGARH RATANGARH CHURU RJ 331022 IN"
        },
        "email": "adityafortune58@gmail.com",
        "name": "SEEMA DEVI PODDAR"
      },
      {
        "company": "ADITYA GIGAFIBER PRIVATE LIMITED",
        "attributes": {
          "city": "SR NO 279 &AMP; 283, FLAT NO C301 SAI SHRUSHTI SUS SUS HAVELI PUNE MH 411021 IN"
        },
        "email": "dilipjadhav195555@gmail.com",
        "name": "ANUSAYA DILIP JADHAV"
      },
      {
        "company": "ADITYA GLOBAL CORPORATION PRIVATE LIMITED",
        "attributes": {
          "city": "WARD NO.26 LALLAN TOLA SAMAN REWA REWA HUZUR REWA MP 486001 IN"
        },
        "email": "theadityachaturvedi@gmail.com",
        "name": "ADITYA CHATURVEDI"
      },
      {
        "company": "ADITYA GOLD REFINERY PRIVATE LIMITED",
        "attributes": {
          "city": "SY.NO: 103, PLOT NO -7&AMP;14 TSIIC -IALA-IP-KOTHUR KOTHUR KOTHUR MAHABUB NAGAR TG 509228 IN"
        },
        "email": "adityacadcam@gmail.com",
        "name": "ADITYA SUNIL PAWAR"
      },
      {
        "company": "ADITYA GOYAL WEALTH PRIVATE LIMITED",
        "attributes": {
          "city": "FLAT NO. 81, THAKORBHAI TOWER, LAW GARDEN ELLISBRIDGE AHMADABAD CITY AHMEDABAD GJ 380006 IN"
        },
        "email": "adityagoyal1998@yahoo.com",
        "name": "ADITYA PRAKASH GOYAL"
      },
      {
        "company": "ADITYA GRAINS PROCESSING EQUIPMENTS PRIVATE LIMITED",
        "attributes": {
          "city": "AG- 20, 21 RADHE BUSINESS EMPIRE ASLALI DASKROI AHMEDABAD GJ 382427 IN"
        },
        "email": "adityatraders@rocketmail.com",
        "name": "DEEPAK BIHARILAL AGRAWAL"
      },
      {
        "company": "ADITYA HERBOZONE PRIVATE LIMITED",
        "attributes": {
          "city": "VISHNU KUMAR SHARMA, WARD NO 36,VASUNDHRA COLONY GANGAPUR BAZAR GANGAPUR SAWAI MADHOPUR RJ 322201 IN"
        },
        "email": "rajkumarsharmaadvocate1@gmail.com"
      }
      
]);

const csvFilePath = 'output.csv';
jsonToCsv(jsonData, csvFilePath);
