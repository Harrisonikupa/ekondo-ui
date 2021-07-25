import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabankService {
  stateLocalGovernmentData: any[] = [];
  gender: any[] = [];
  maritalStatus: any[] = [];
  countryNationality: any[] = [];

  messages: any = {};
  constructor() {
    this.stateLocalGovernmentData = [
      {
        state: 'Abia',
        lgas: [
          'Aba North',
          'Aba South',
          'Arochukwu',
          'Bende',
          'Ikawuno',
          'Ikwuano',
          'Isiala-Ngwa North',
          'Isiala-Ngwa South',
          'Isuikwuato',
          'Umu Nneochi',
          'Obi Ngwa',
          'Obioma Ngwa',
          'Ohafia',
          'Ohaozara',
          'Osisioma',
          'Ugwunagbo',
          'Ukwa West',
          'Ukwa East',
          'Umuahia North',
          'Umuahia South'
        ]
      },
      {
        state: 'Adamawa',
        lgas: [
          'Demsa',
          'Fufore',
          'Ganye',
          'Girei',
          'Gombi',
          'Guyuk',
          'Hong',
          'Jada',
          'Lamurde',
          'Madagali',
          'Maiha',
          'Mayo-Belwa',
          'Michika',
          'Mubi-North',
          'Mubi-South',
          'Numan',
          'Shelleng',
          'Song',
          'Toungo',
          'Yola North',
          'Yola South'
        ]
      },
      {
        state: 'Akwa Ibom',
        lgas: [
          'Abak',
          'Eastern-Obolo',
          'Eket',
          'Esit-Eket',
          'Essien-Udim',
          'Etim-Ekpo',
          'Etinan',
          'Ibeno',
          'Ibesikpo-Asutan',
          'Ibiono-Ibom',
          'Ika',
          'Ikono',
          'Ikot-Abasi',
          'Ikot-Ekpene',
          'Ini',
          'Itu',
          'Mbo',
          'Mkpat-Enin',
          'Nsit-Atai',
          'Nsit-Ibom',
          'Nsit-Ubium',
          'Obot-Akara',
          'Okobo',
          'Onna',
          'Oron',
          'Oruk Anam',
          'Udung-Uko',
          'Ukanafun',
          'Urue-Offong/Oruko',
          'Uruan',
          'Uyo'
        ]
      },
      {
        state: 'Anambra',
        lgas: [
          'Aguata',
          'Anambra East',
          'Anambra West',
          'Anaocha',
          'Awka North',
          'Awka South',
          'Ayamelum',
          'Dunukofia',
          'Ekwusigo',
          'Idemili-North',
          'Idemili-South',
          'Ihiala',
          'Njikoka',
          'Nnewi-North',
          'Nnewi-South',
          'Ogbaru',
          'Onitsha-North',
          'Onitsha-South',
          'Orumba-North',
          'Orumba-South'
        ]
      },
      {
        state: 'Bauchi',
        lgas: [
          'Alkaleri',
          'Bauchi',
          'Bogoro',
          'Damban',
          'Darazo',
          'Dass',
          'Gamawa',
          'Ganjuwa',
          'Giade',
          'Itas\/Gadau',
          'Jama\'Are',
          'Katagum',
          'Kirfi',
          'Misau',
          'Ningi',
          'Shira',
          'Tafawa-Balewa',
          'Toro',
          'Warji',
          'Zaki'
        ]
      },
      {
        state: 'Benue',
        lgas: [
          'Ado',
          'Agatu',
          'Apa',
          'Buruku',
          'Gboko',
          'Guma',
          'Gwer-East',
          'Gwer-West',
          'Katsina-Ala',
          'Konshisha',
          'Kwande',
          'Logo',
          'Makurdi',
          'Ogbadibo',
          'Ohimini',
          'Oju',
          'Okpokwu',
          'Otukpo',
          'Tarka',
          'Ukum',
          'Ushongo',
          'Vandeikya'
        ]
      },
      {
        state: 'Borno',
        lgas: [
          'Abadam',
          'Askira-Uba',
          'Bama',
          'Bayo',
          'Biu',
          'Chibok',
          'Damboa',
          'Dikwa',
          'Gubio',
          'Guzamala',
          'Gwoza',
          'Hawul',
          'Jere',
          'Kaga',
          'Kala\/Balge',
          'Konduga',
          'Kukawa',
          'Kwaya-Kusar',
          'Mafa',
          'Magumeri',
          'Maiduguri',
          'Marte',
          'Mobbar',
          'Monguno',
          'Ngala',
          'Nganzai',
          'Shani'
        ]
      },
      {
        state: 'Bayelsa',
        lgas: [
          'Brass',
          'Ekeremor',
          'Kolokuma\/Opokuma',
          'Nembe',
          'Ogbia',
          'Sagbama',
          'Southern-Ijaw',
          'Yenagoa'
        ]
      },
      {
        state: 'Cross River',
        lgas: [
          'Abi',
          'Akamkpa',
          'Akpabuyo',
          'Bakassi',
          'Bekwarra',
          'Biase',
          'Boki',
          'Calabar-Municipal',
          'Calabar-South',
          'Etung',
          'Ikom',
          'Obanliku',
          'Obubra',
          'Obudu',
          'Odukpani',
          'Ogoja',
          'Yakurr',
          'Yala'
        ]
      },
      {
        state: 'Delta',
        lgas: [
          'Aniocha North',
          'Aniocha-North',
          'Aniocha-South',
          'Bomadi',
          'Burutu',
          'Ethiope-East',
          'Ethiope-West',
          'Ika-North-East',
          'Ika-South',
          'Isoko-North',
          'Isoko-South',
          'Ndokwa-East',
          'Ndokwa-West',
          'Okpe',
          'Oshimili-North',
          'Oshimili-South',
          'Patani',
          'Sapele',
          'Udu',
          'Ughelli-North',
          'Ughelli-South',
          'Ukwuani',
          'Uvwie',
          'Warri South-West',
          'Warri North',
          'Warri South'
        ]
      },
      {
        state: 'Ebonyi',
        lgas: [
          'Abakaliki',
          'Afikpo-North',
          'Afikpo South (Edda)',
          'Ebonyi',
          'Ezza-North',
          'Ezza-South',
          'Ikwo',
          'Ishielu',
          'Ivo',
          'Izzi',
          'Ohaukwu',
          'Onicha'
        ]
      },
      {
        state: 'Edo',
        lgas: [
          'Akoko Edo',
          'Egor',
          'Esan-Central',
          'Esan-North-East',
          'Esan-South-East',
          'Esan-West',
          'Etsako-Central',
          'Etsako-East',
          'Etsako-West',
          'Igueben',
          'Ikpoba-Okha',
          'Oredo',
          'Orhionmwon',
          'Ovia-North-East',
          'Ovia-South-West',
          'Owan East',
          'Owan-West',
          'Uhunmwonde'
        ]
      },
      {
        state: 'Ekiti',
        lgas: [
          'Ado-Ekiti',
          'Efon',
          'Ekiti-East',
          'Ekiti-South-West',
          'Ekiti-West',
          'Emure',
          'Gbonyin',
          'Ido-Osi',
          'Ijero',
          'Ikere',
          'Ikole',
          'Ilejemeje',
          'Irepodun\/Ifelodun',
          'Ise-Orun',
          'Moba',
          'Oye'
        ]
      },
      {
        state: 'Enugu',
        lgas: [
          'Aninri',
          'Awgu',
          'Enugu-East',
          'Enugu-North',
          'Enugu-South',
          'Ezeagu',
          'Igbo-Etiti',
          'Igbo-Eze-North',
          'Igbo-Eze-South',
          'Isi-Uzo',
          'Nkanu-East',
          'Nkanu-West',
          'Nsukka',
          'Oji-River',
          'Udenu',
          'Udi',
          'Uzo-Uwani'
        ]
      },
      {
        state: 'Federal Capital Territory',
        lgas: [
          'Abuja',
          'Kwali',
          'Kuje',
          'Gwagwalada',
          'Bwari',
          'Abaji'
        ]
      },
      {
        state: 'Gombe',
        lgas: [
          'Akko',
          'Balanga',
          'Billiri',
          'Dukku',
          'Funakaye',
          'Gombe',
          'Kaltungo',
          'Kwami',
          'Nafada',
          'Shongom',
          'Yamaltu\/Deba'
        ]
      },
      {
        state: 'Imo',
        lgas: [
          'Aboh-Mbaise',
          'Ahiazu-Mbaise',
          'Ehime-Mbano',
          'Ezinihitte',
          'Ideato-North',
          'Ideato-South',
          'Ihitte\/Uboma',
          'Ikeduru',
          'Isiala-Mbano',
          'Isu',
          'Mbaitoli',
          'Ngor-Okpala',
          'Njaba',
          'Nkwerre',
          'Nwangele',
          'Obowo',
          'Oguta',
          'Ohaji-Egbema',
          'Okigwe',
          'Onuimo',
          'Orlu',
          'Orsu',
          'Oru-East',
          'Oru-West',
          'Owerri-Municipal',
          'Owerri-North',
          'Owerri-West'
        ]
      },
      {
        state: 'Jigawa',
        lgas: [
          'Auyo',
          'Babura',
          'Biriniwa',
          'Birnin-Kudu',
          'Buji',
          'Dutse',
          'Gagarawa',
          'Garki',
          'Gumel',
          'Guri',
          'Gwaram',
          'Gwiwa',
          'Hadejia',
          'Jahun',
          'Kafin-Hausa',
          'Kaugama',
          'Kazaure',
          'Kiri kasama',
          'Maigatari',
          'Malam Madori',
          'Miga',
          'Ringim',
          'Roni',
          'Sule-Tankarkar',
          'Taura',
          'Yankwashi'
        ]
      },
      {
        state: 'Kebbi',
        lgas: [
          'Aleiro',
          'Arewa-Dandi',
          'Argungu',
          'Augie',
          'Bagudo',
          'Birnin-Kebbi',
          'Bunza',
          'Dandi',
          'Fakai',
          'Gwandu',
          'Jega',
          'Kalgo',
          'Koko-Besse',
          'Maiyama',
          'Ngaski',
          'Sakaba',
          'Shanga',
          'Suru',
          'Wasagu/Danko',
          'Yauri',
          'Zuru'
        ]
      },
      {
        state: 'Kaduna',
        lgas: [
          'Birnin-Gwari',
          'Chikun',
          'Giwa',
          'Igabi',
          'Ikara',
          'Jaba',
          'Jema\'A',
          'Kachia',
          'Kaduna-North',
          'Kaduna-South',
          'Kagarko',
          'Kajuru',
          'Kaura',
          'Kauru',
          'Kubau',
          'Kudan',
          'Lere',
          'Makarfi',
          'Sabon-Gari',
          'Sanga',
          'Soba',
          'Zangon-Kataf',
          'Zaria'
        ]
      },
      {
        state: 'Kano',
        lgas: [
          'Ajingi',
          'Albasu',
          'Bagwai',
          'Bebeji',
          'Bichi',
          'Bunkure',
          'Dala',
          'Dambatta',
          'Dawakin-Kudu',
          'Dawakin-Tofa',
          'Doguwa',
          'Fagge',
          'Gabasawa',
          'Garko',
          'Garun-Mallam',
          'Gaya',
          'Gezawa',
          'Gwale',
          'Gwarzo',
          'Kabo',
          'Kano-Municipal',
          'Karaye',
          'Kibiya',
          'Kiru',
          'Kumbotso',
          'Kunchi',
          'Kura',
          'Madobi',
          'Makoda',
          'Minjibir',
          'Nasarawa',
          'Rano',
          'Rimin-Gado',
          'Rogo',
          'Shanono',
          'Sumaila',
          'Takai',
          'Tarauni',
          'Tofa',
          'Tsanyawa',
          'Tudun-Wada',
          'Ungogo',
          'Warawa',
          'Wudil'
        ]
      },
      {
        state: 'Kogi',
        lgas: [
          'Adavi',
          'Ajaokuta',
          'Ankpa',
          'Dekina',
          'Ibaji',
          'Idah',
          'Igalamela-Odolu',
          'Ijumu',
          'Kabba\/Bunu',
          'Kogi',
          'Lokoja',
          'Mopa-Muro',
          'Ofu',
          'Ogori\/Magongo',
          'Okehi',
          'Okene',
          'Olamaboro',
          'Omala',
          'Oyi',
          'Yagba-East',
          'Yagba-West'
        ]
      },
      {
        state: 'Katsina',
        lgas: [
          'Bakori',
          'Batagarawa',
          'Batsari',
          'Baure',
          'Bindawa',
          'Charanchi',
          'Dan-Musa',
          'Dandume',
          'Danja',
          'Daura',
          'Dutsi',
          'Dutsin-Ma',
          'Faskari',
          'Funtua',
          'Ingawa',
          'Jibia',
          'Kafur',
          'Kaita',
          'Kankara',
          'Kankia',
          'Katsina',
          'Kurfi',
          'Kusada',
          'Mai-Adua',
          'Malumfashi',
          'Mani',
          'Mashi',
          'Matazu',
          'Musawa',
          'Rimi',
          'Sabuwa',
          'Safana',
          'Sandamu',
          'Zango'
        ]
      },
      {
        state: 'Kwara',
        lgas: [
          'Asa',
          'Baruten',
          'Edu',
          'Ekiti (Araromi/Opin)',
          'Ilorin-East',
          'Ilorin-South',
          'Ilorin-West',
          'Isin',
          'Kaiama',
          'Moro',
          'Offa',
          'Oke-Ero',
          'Oyun',
          'Pategi'
        ]
      },
      {
        state: 'Lagos',
        lgas: [
          'Agege',
          'Ajeromi-Ifelodun',
          'Alimosho',
          'Amuwo-Odofin',
          'Apapa',
          'Badagry',
          'Epe',
          'Eti-Osa',
          'Ibeju-Lekki',
          'Ifako-Ijaiye',
          'Ikeja',
          'Ikorodu',
          'Kosofe',
          'Lagos-Island',
          'Lagos-Mainland',
          'Mushin',
          'Ojo',
          'Oshodi-Isolo',
          'Shomolu',
          'Surulere',
          'Yewa-South'
        ]
      },
      {
        state: 'Nasarawa',
        lgas: [
          'Akwanga',
          'Awe',
          'Doma',
          'Karu',
          'Keana',
          'Keffi',
          'Kokona',
          'Lafia',
          'Nasarawa',
          'Nasarawa-Eggon',
          'Obi',
          'Wamba',
          'Toto'
        ]
      },
      {
        state: 'Niger',
        lgas: [
          'Agaie',
          'Agwara',
          'Bida',
          'Borgu',
          'Bosso',
          'Chanchaga',
          'Edati',
          'Gbako',
          'Gurara',
          'Katcha',
          'Kontagora',
          'Lapai',
          'Lavun',
          'Magama',
          'Mariga',
          'Mashegu',
          'Mokwa',
          'Moya',
          'Paikoro',
          'Rafi',
          'Rijau',
          'Shiroro',
          'Suleja',
          'Tafa',
          'Wushishi'
        ]
      },
      {
        state: 'Ogun',
        lgas: [
          'Abeokuta-North',
          'Abeokuta-South',
          'Ado-Odo\/Ota',
          'Ewekoro',
          'Ifo',
          'Ijebu-East',
          'Ijebu-North',
          'Ijebu-North-East',
          'Ijebu-Ode',
          'Ikenne',
          'Imeko-Afon',
          'Ipokia',
          'Obafemi-Owode',
          'Odeda',
          'Odogbolu',
          'Ogun-Waterside',
          'Remo-North',
          'Shagamu',
          'Yewa North'
        ]
      },
      {
        state: 'Ondo',
        lgas: [
          'Akoko North-East',
          'Akoko North-West',
          'Akoko South-West',
          'Akoko South-East',
          'Akure-North',
          'Akure-South',
          'Ese-Odo',
          'Idanre',
          'Ifedore',
          'Ilaje',
          'Ile-Oluji-Okeigbo',
          'Irele',
          'Odigbo',
          'Okitipupa',
          'Ondo West',
          'Ondo-East',
          'Ose',
          'Owo'
        ]
      },
      {
        state: 'Osun',
        lgas: [
          'Atakumosa West',
          'Atakumosa East',
          'Ayedaade',
          'Ayedire',
          'Boluwaduro',
          'Boripe',
          'Ede South',
          'Ede North',
          'Egbedore',
          'Ejigbo',
          'Ife North',
          'Ife South',
          'Ife-Central',
          'Ife-East',
          'Ifelodun',
          'Ila',
          'Ilesa-East',
          'Ilesa-West',
          'Irepodun',
          'Irewole',
          'Isokan',
          'Iwo',
          'Obokun',
          'Odo-Otin',
          'Ola Oluwa',
          'Olorunda',
          'Oriade',
          'Orolu',
          'Osogbo'
        ]
      },
      {
        state: 'Oyo',
        lgas: [
          'Afijio',
          'Akinyele',
          'Atiba',
          'Atisbo',
          'Egbeda',
          'Ibadan North',
          'Ibadan North-East',
          'Ibadan North-West',
          'Ibadan South-East',
          'Ibadan South-West',
          'Ibarapa-Central',
          'Ibarapa-East',
          'Ibarapa-North',
          'Ido',
          'Ifedayo',
          'Irepo',
          'Iseyin',
          'Itesiwaju',
          'Iwajowa',
          'Kajola',
          'Lagelu',
          'Ogo-Oluwa',
          'Ogbomosho-North',
          'Ogbomosho-South',
          'Olorunsogo',
          'Oluyole',
          'Ona-Ara',
          'Orelope',
          'Ori-Ire',
          'Oyo-West',
          'Oyo-East',
          'Saki-East',
          'Saki-West',
          'Surulere'
        ]
      },
      {
        state: 'Plateau',
        lgas: [
          'Barkin-Ladi',
          'Bassa',
          'Bokkos',
          'Jos-East',
          'Jos-North',
          'Jos-South',
          'Kanam',
          'Kanke',
          'Langtang-North',
          'Langtang-South',
          'Mangu',
          'Mikang',
          'Pankshin',
          'Qua\'an Pan',
          'Riyom',
          'Shendam',
          'Wase'
        ]
      },
      {
        state: 'Rivers',
        lgas: [
          'Abua\/Odual',
          'Ahoada-East',
          'Ahoada-West',
          'Akuku Toru',
          'Andoni',
          'Asari-Toru',
          'Bonny',
          'Degema',
          'Eleme',
          'Emuoha',
          'Etche',
          'Gokana',
          'Ikwerre',
          'Khana',
          'Obio\/Akpor',
          'Ogba-Egbema-Ndoni',
          'Ogba\/Egbema\/Ndoni',
          'Ogu\/Bolo',
          'Okrika',
          'Omuma',
          'Opobo\/Nkoro',
          'Oyigbo',
          'Port-Harcourt',
          'Tai'
        ]
      },
      {
        state: 'Sokoto',
        lgas: [
          'Binji',
          'Bodinga',
          'Dange-Shuni',
          'Gada',
          'Goronyo',
          'Gudu',
          'Gwadabawa',
          'Illela',
          'Kebbe',
          'Kware',
          'Rabah',
          'Sabon Birni',
          'Shagari',
          'Silame',
          'Sokoto-North',
          'Sokoto-South',
          'Tambuwal',
          'Tangaza',
          'Tureta',
          'Wamako',
          'Wurno',
          'Yabo'
        ]
      },
      {
        state: 'Taraba',
        lgas: [
          'Ardo-Kola',
          'Bali',
          'Donga',
          'Gashaka',
          'Gassol',
          'Ibi',
          'Jalingo',
          'Karim-Lamido',
          'Kurmi',
          'Lau',
          'Sardauna',
          'Takum',
          'Ussa',
          'Wukari',
          'Yorro',
          'Zing'
        ]
      },
      {
        state: 'Yobe',
        lgas: [
          'Bade',
          'Bursari',
          'Damaturu',
          'Fika',
          'Fune',
          'Geidam',
          'Gujba',
          'Gulani',
          'Jakusko',
          'Karasuwa',
          'Machina',
          'Nangere',
          'Nguru',
          'Potiskum',
          'Tarmuwa',
          'Yunusari',
          'Yusufari'
        ]
      },
      {
        state: 'Zamfara',
        lgas: [
          'Anka',
          'Bakura',
          'Birnin Magaji/Kiyaw',
          'Bukkuyum',
          'Bungudu',
          'Gummi',
          'Gusau',
          'Isa',
          'Kaura-Namoda',
          'Kiyawa',
          'Maradun',
          'Maru',
          'Shinkafi',
          'Talata-Mafara',
          'Tsafe',
          'Zurmi'
        ]
      }
    ];
    this.countryNationality = [
      {
          "country": "Afghanistan",
          "nationality": "Afghan"
      },
      {
          "country": "Åland Islands",
          "nationality": "Åland Island"
      },
      {
          "country": "Albania",
          "nationality": "Albanian"
      },
      {
          "country": "Algeria",
          "nationality": "Algerian"
      },
      {
          "country": "American Samoa",
          "nationality": "American Samoan"
      },
      {
          "country": "Andorra",
          "nationality": "Andorran"
      },
      {
          "country": "Angola",
          "nationality": "Angolan"
      },
      {
          "country": "Anguilla",
          "nationality": "Anguillan"
      },
      {
          "country": "Antarctica",
          "nationality": "Antarctic"
      },
      {
          "country": "Antigua and Barbuda",
          "nationality": "Antiguan or Barbudan"
      },
      {
          "country": "Argentina",
          "nationality": "Argentine"
      },
      {
          "country": "Armenia",
          "nationality": "Armenian"
      },
      {
          "country": "Aruba",
          "nationality": "Aruban"
      },
      {
          "country": "Australia",
          "nationality": "Australian"
      },
      {
          "country": "Austria",
          "nationality": "Austrian"
      },
      {
          "country": "Azerbaijan",
          "nationality": "Azerbaijani, Azeri"
      },
      {
          "country": "Bahamas",
          "nationality": "Bahamian"
      },
      {
          "country": "Bahrain",
          "nationality": "Bahraini"
      },
      {
          "country": "Bangladesh",
          "nationality": "Bangladeshi"
      },
      {
          "country": "Barbados",
          "nationality": "Barbadian"
      },
      {
          "country": "Belarus",
          "nationality": "Belarusian"
      },
      {
          "country": "Belgium",
          "nationality": "Belgian"
      },
      {
          "country": "Belize",
          "nationality": "Belizean"
      },
      {
          "country": "Benin",
          "nationality": "Beninese, Beninois"
      },
      {
          "country": "Bermuda",
          "nationality": "Bermudian, Bermudan"
      },
      {
          "country": "Bhutan",
          "nationality": "Bhutanese"
      },
      {
          "country": "Bolivia (Plurinational State of)",
          "nationality": "Bolivian"
      },
      {
          "country": "Bonaire, Sint Eustatius and Saba",
          "nationality": "Bonaire"
      },
      {
          "country": "Bosnia and Herzegovina",
          "nationality": "Bosnian or Herzegovinian"
      },
      {
          "country": "Botswana",
          "nationality": "Motswana, Botswanan"
      },
      {
          "country": "Bouvet Island",
          "nationality": "Bouvet Island"
      },
      {
          "country": "Brazil",
          "nationality": "Brazilian"
      },
      {
          "country": "British Indian Ocean Territory",
          "nationality": "BIOT"
      },
      {
          "country": "Brunei Darussalam",
          "nationality": "Bruneian"
      },
      {
          "country": "Bulgaria",
          "nationality": "Bulgarian"
      },
      {
          "country": "Burkina Faso",
          "nationality": "Burkinabé"
      },
      {
          "country": "Burundi",
          "nationality": "Burundian"
      },
      {
          "country": "Cabo Verde",
          "nationality": "Cabo Verdean"
      },
      {
          "country": "Cambodia",
          "nationality": "Cambodian"
      },
      {
          "country": "Cameroon",
          "nationality": "Cameroonian"
      },
      {
          "country": "Canada",
          "nationality": "Canadian"
      },
      {
          "country": "Cayman Islands",
          "nationality": "Caymanian"
      },
      {
          "country": "Central African Republic",
          "nationality": "Central African"
      },
      {
          "country": "Chad",
          "nationality": "Chadian"
      },
      {
          "country": "Chile",
          "nationality": "Chilean"
      },
      {
          "country": "China",
          "nationality": "Chinese"
      },
      {
          "country": "Christmas Island",
          "nationality": "Christmas Island"
      },
      {
          "country": "Cocos (Keeling) Islands",
          "nationality": "Cocos Island"
      },
      {
          "country": "Colombia",
          "nationality": "Colombian"
      },
      {
          "country": "Comoros",
          "nationality": "Comoran, Comorian"
      },
      {
          "country": "Congo (Republic of the)",
          "nationality": "Congolese"
      },
      {
          "country": "Congo (Democratic Republic of the)",
          "nationality": "Congolese"
      },
      {
          "country": "Cook Islands",
          "nationality": "Cook Island"
      },
      {
          "country": "Costa Rica",
          "nationality": "Costa Rican"
      },
      {
          "country": "Côte d'Ivoire",
          "nationality": "Ivorian"
      },
      {
          "country": "Croatia",
          "nationality": "Croatian"
      },
      {
          "country": "Cuba",
          "nationality": "Cuban"
      },
      {
          "country": "Curaçao",
          "nationality": "Curaçaoan"
      },
      {
          "country": "Cyprus",
          "nationality": "Cypriot"
      },
      {
          "country": "Czech Republic",
          "nationality": "Czech"
      },
      {
          "country": "Denmark",
          "nationality": "Danish"
      },
      {
          "country": "Djibouti",
          "nationality": "Djiboutian"
      },
      {
          "country": "Dominica",
          "nationality": "Dominican"
      },
      {
          "country": "Dominican Republic",
          "nationality": "Dominican"
      },
      {
          "country": "Ecuador",
          "nationality": "Ecuadorian"
      },
      {
          "country": "Egypt",
          "nationality": "Egyptian"
      },
      {
          "country": "El Salvador",
          "nationality": "Salvadoran"
      },
      {
          "country": "Equatorial Guinea",
          "nationality": "Equatorial Guinean, Equatoguinean"
      },
      {
          "country": "Eritrea",
          "nationality": "Eritrean"
      },
      {
          "country": "Estonia",
          "nationality": "Estonian"
      },
      {
          "country": "Ethiopia",
          "nationality": "Ethiopian"
      },
      {
          "country": "Falkland Islands (Malvinas)",
          "nationality": "Falkland Island"
      },
      {
          "country": "Faroe Islands",
          "nationality": "Faroese"
      },
      {
          "country": "Fiji",
          "nationality": "Fijian"
      },
      {
          "country": "Finland",
          "nationality": "Finnish"
      },
      {
          "country": "France",
          "nationality": "French"
      },
      {
          "country": "French Guiana",
          "nationality": "French Guianese"
      },
      {
          "country": "French Polynesia",
          "nationality": "French Polynesian"
      },
      {
          "country": "French Southern Territories",
          "nationality": "French Southern Territories"
      },
      {
          "country": "Gabon",
          "nationality": "Gabonese"
      },
      {
          "country": "Gambia",
          "nationality": "Gambian"
      },
      {
          "country": "Georgia",
          "nationality": "Georgian"
      },
      {
          "country": "Germany",
          "nationality": "German"
      },
      {
          "country": "Ghana",
          "nationality": "Ghanaian"
      },
      {
          "country": "Gibraltar",
          "nationality": "Gibraltar"
      },
      {
          "country": "Greece",
          "nationality": "Greek, Hellenic"
      },
      {
          "country": "Greenland",
          "nationality": "Greenlandic"
      },
      {
          "country": "Grenada",
          "nationality": "Grenadian"
      },
      {
          "country": "Guadeloupe",
          "nationality": "Guadeloupe"
      },
      {
          "country": "Guam",
          "nationality": "Guamanian, Guambat"
      },
      {
          "country": "Guatemala",
          "nationality": "Guatemalan"
      },
      {
          "country": "Guernsey",
          "nationality": "Channel Island"
      },
      {
          "country": "Guinea",
          "nationality": "Guinean"
      },
      {
          "country": "Guinea-Bissau",
          "nationality": "Bissau-Guinean"
      },
      {
          "country": "Guyana",
          "nationality": "Guyanese"
      },
      {
          "country": "Haiti",
          "nationality": "Haitian"
      },
      {
          "country": "Heard Island and McDonald Islands",
          "nationality": "Heard Island or McDonald Islands"
      },
      {
          "country": "Vatican City State",
          "nationality": "Vatican"
      },
      {
          "country": "Honduras",
          "nationality": "Honduran"
      },
      {
          "country": "Hong Kong",
          "nationality": "Hong Kong, Hong Kongese"
      },
      {
          "country": "Hungary",
          "nationality": "Hungarian, Magyar"
      },
      {
          "country": "Iceland",
          "nationality": "Icelandic"
      },
      {
          "country": "India",
          "nationality": "Indian"
      },
      {
          "country": "Indonesia",
          "nationality": "Indonesian"
      },
      {
          "country": "Iran",
          "nationality": "Iranian, Persian"
      },
      {
          "country": "Iraq",
          "nationality": "Iraqi"
      },
      {
          "country": "Ireland",
          "nationality": "Irish"
      },
      {
          "country": "Isle of Man",
          "nationality": "Manx"
      },
      {
          "country": "Israel",
          "nationality": "Israeli"
      },
      {
          "country": "Italy",
          "nationality": "Italian"
      },
      {
          "country": "Jamaica",
          "nationality": "Jamaican"
      },
      {
          "country": "Japan",
          "nationality": "Japanese"
      },
      {
          "country": "Jersey",
          "nationality": "Channel Island"
      },
      {
          "country": "Jordan",
          "nationality": "Jordanian"
      },
      {
          "country": "Kazakhstan",
          "nationality": "Kazakhstani, Kazakh"
      },
      {
          "country": "Kenya",
          "nationality": "Kenyan"
      },
      {
          "country": "Kiribati",
          "nationality": "I-Kiribati"
      },
      {
          "country": "Korea (Democratic People's Republic of)",
          "nationality": "North Korean"
      },
      {
          "country": "Korea (Republic of)",
          "nationality": "South Korean"
      },
      {
          "country": "Kuwait",
          "nationality": "Kuwaiti"
      },
      {
          "country": "Kyrgyzstan",
          "nationality": "Kyrgyzstani, Kyrgyz, Kirgiz, Kirghiz"
      },
      {
          "country": "Lao People's Democratic Republic",
          "nationality": "Lao, Laotian"
      },
      {
          "country": "Latvia",
          "nationality": "Latvian"
      },
      {
          "country": "Lebanon",
          "nationality": "Lebanese"
      },
      {
          "country": "Lesotho",
          "nationality": "Basotho"
      },
      {
          "country": "Liberia",
          "nationality": "Liberian"
      },
      {
          "country": "Libya",
          "nationality": "Libyan"
      },
      {
          "country": "Liechtenstein",
          "nationality": "Liechtenstein"
      },
      {
          "country": "Lithuania",
          "nationality": "Lithuanian"
      },
      {
          "country": "Luxembourg",
          "nationality": "Luxembourg, Luxembourgish"
      },
      {
          "country": "Macao",
          "nationality": "Macanese, Chinese"
      },
      {
          "country": "Macedonia (the former Yugoslav Republic of)",
          "nationality": "Macedonian"
      },
      {
          "country": "Madagascar",
          "nationality": "Malagasy"
      },
      {
          "country": "Malawi",
          "nationality": "Malawian"
      },
      {
          "country": "Malaysia",
          "nationality": "Malaysian"
      },
      {
          "country": "Maldives",
          "nationality": "Maldivian"
      },
      {
          "country": "Mali",
          "nationality": "Malian, Malinese"
      },
      {
          "country": "Malta",
          "nationality": "Maltese"
      },
      {
          "country": "Marshall Islands",
          "nationality": "Marshallese"
      },
      {
          "country": "Martinique",
          "nationality": "Martiniquais, Martinican"
      },
      {
          "country": "Mauritania",
          "nationality": "Mauritanian"
      },
      {
          "country": "Mauritius",
          "nationality": "Mauritian"
      },
      {
          "country": "Mayotte",
          "nationality": "Mahoran"
      },
      {
          "country": "Mexico",
          "nationality": "Mexican"
      },
      {
          "country": "Micronesia (Federated States of)",
          "nationality": "Micronesian"
      },
      {
          "country": "Moldova (Republic of)",
          "nationality": "Moldovan"
      },
      {
          "country": "Monaco",
          "nationality": "Monégasque, Monacan"
      },
      {
          "country": "Mongolia",
          "nationality": "Mongolian"
      },
      {
          "country": "Montenegro",
          "nationality": "Montenegrin"
      },
      {
          "country": "Montserrat",
          "nationality": "Montserratian"
      },
      {
          "country": "Morocco",
          "nationality": "Moroccan"
      },
      {
          "country": "Mozambique",
          "nationality": "Mozambican"
      },
      {
          "country": "Myanmar",
          "nationality": "Burmese"
      },
      {
          "country": "Namibia",
          "nationality": "Namibian"
      },
      {
          "country": "Nauru",
          "nationality": "Nauruan"
      },
      {
          "country": "Nepal",
          "nationality": "Nepali, Nepalese"
      },
      {
          "country": "Netherlands",
          "nationality": "Dutch, Netherlandic"
      },
      {
          "country": "New Caledonia",
          "nationality": "New Caledonian"
      },
      {
          "country": "New Zealand",
          "nationality": "New Zealand, NZ"
      },
      {
          "country": "Nicaragua",
          "nationality": "Nicaraguan"
      },
      {
          "country": "Niger",
          "nationality": "Nigerien"
      },
      {
          "country": "Nigeria",
          "nationality": "Nigerian"
      },
      {
          "country": "Niue",
          "nationality": "Niuean"
      },
      {
          "country": "Norfolk Island",
          "nationality": "Norfolk Island"
      },
      {
          "country": "Northern Mariana Islands",
          "nationality": "Northern Marianan"
      },
      {
          "country": "Norway",
          "nationality": "Norwegian"
      },
      {
          "country": "Oman",
          "nationality": "Omani"
      },
      {
          "country": "Pakistan",
          "nationality": "Pakistani"
      },
      {
          "country": "Palau",
          "nationality": "Palauan"
      },
      {
          "country": "Palestine, State of",
          "nationality": "Palestinian"
      },
      {
          "country": "Panama",
          "nationality": "Panamanian"
      },
      {
          "country": "Papua New Guinea",
          "nationality": "Papua New Guinean, Papuan"
      },
      {
          "country": "Paraguay",
          "nationality": "Paraguayan"
      },
      {
          "country": "Peru",
          "nationality": "Peruvian"
      },
      {
          "country": "Philippines",
          "nationality": "Philippine, Filipino"
      },
      {
          "country": "Pitcairn",
          "nationality": "Pitcairn Island"
      },
      {
          "country": "Poland",
          "nationality": "Polish"
      },
      {
          "country": "Portugal",
          "nationality": "Portuguese"
      },
      {
          "country": "Puerto Rico",
          "nationality": "Puerto Rican"
      },
      {
          "country": "Qatar",
          "nationality": "Qatari"
      },
      {
          "country": "Réunion",
          "nationality": "Réunionese, Réunionnais"
      },
      {
          "country": "Romania",
          "nationality": "Romanian"
      },
      {
          "country": "Russian Federation",
          "nationality": "Russian"
      },
      {
          "country": "Rwanda",
          "nationality": "Rwandan"
      },
      {
          "country": "Saint Barthélemy",
          "nationality": "Barthélemois"
      },
      {
          "country": "Saint Helena, Ascension and Tristan da Cunha",
          "nationality": "Saint Helenian"
      },
      {
          "country": "Saint Kitts and Nevis",
          "nationality": "Kittitian or Nevisian"
      },
      {
          "country": "Saint Lucia",
          "nationality": "Saint Lucian"
      },
      {
          "country": "Saint Martin (French part)",
          "nationality": "Saint-Martinoise"
      },
      {
          "country": "Saint Pierre and Miquelon",
          "nationality": "Saint-Pierrais or Miquelonnais"
      },
      {
          "country": "Saint Vincent and the Grenadines",
          "nationality": "Saint Vincentian, Vincentian"
      },
      {
          "country": "Samoa",
          "nationality": "Samoan"
      },
      {
          "country": "San Marino",
          "nationality": "Sammarinese"
      },
      {
          "country": "Sao Tome and Principe",
          "nationality": "São Toméan"
      },
      {
          "country": "Saudi Arabia",
          "nationality": "Saudi, Saudi Arabian"
      },
      {
          "country": "Senegal",
          "nationality": "Senegalese"
      },
      {
          "country": "Serbia",
          "nationality": "Serbian"
      },
      {
          "country": "Seychelles",
          "nationality": "Seychellois"
      },
      {
          "country": "Sierra Leone",
          "nationality": "Sierra Leonean"
      },
      {
          "country": "Singapore",
          "nationality": "Singaporean"
      },
      {
          "country": "Sint Maarten (Dutch part)",
          "nationality": "Sint Maarten"
      },
      {
          "country": "Slovakia",
          "nationality": "Slovak"
      },
      {
          "country": "Slovenia",
          "nationality": "Slovenian, Slovene"
      },
      {
          "country": "Solomon Islands",
          "nationality": "Solomon Island"
      },
      {
          "country": "Somalia",
          "nationality": "Somali, Somalian"
      },
      {
          "country": "South Africa",
          "nationality": "South African"
      },
      {
          "country": "South Georgia and the South Sandwich Islands",
          "nationality": "South Georgia or South Sandwich Islands"
      },
      {
          "country": "South Sudan",
          "nationality": "South Sudanese"
      },
      {
          "country": "Spain",
          "nationality": "Spanish"
      },
      {
          "country": "Sri Lanka",
          "nationality": "Sri Lankan"
      },
      {
          "country": "Sudan",
          "nationality": "Sudanese"
      },
      {
          "country": "Suriname",
          "nationality": "Surinamese"
      },
      {
          "country": "Svalbard and Jan Mayen",
          "nationality": "Svalbard"
      },
      {
          "country": "Swaziland",
          "nationality": "Swazi"
      },
      {
          "country": "Sweden",
          "nationality": "Swedish"
      },
      {
          "country": "Switzerland",
          "nationality": "Swiss"
      },
      {
          "country": "Syrian Arab Republic",
          "nationality": "Syrian"
      },
      {
          "country": "Taiwan, Province of China",
          "nationality": "Chinese, Taiwanese"
      },
      {
          "country": "Tajikistan",
          "nationality": "Tajikistani"
      },
      {
          "country": "Tanzania, United Republic of",
          "nationality": "Tanzanian"
      },
      {
          "country": "Thailand",
          "nationality": "Thai"
      },
      {
          "country": "Timor-Leste",
          "nationality": "Timorese"
      },
      {
          "country": "Togo",
          "nationality": "Togolese"
      },
      {
          "country": "Tokelau",
          "nationality": "Tokelauan"
      },
      {
          "country": "Tonga",
          "nationality": "Tongan"
      },
      {
          "country": "Trinidad and Tobago",
          "nationality": "Trinidadian or Tobagonian"
      },
      {
          "country": "Tunisia",
          "nationality": "Tunisian"
      },
      {
          "country": "Turkey",
          "nationality": "Turkish"
      },
      {
          "country": "Turkmenistan",
          "nationality": "Turkmen"
      },
      {
          "country": "Turks and Caicos Islands",
          "nationality": "Turks and Caicos Island"
      },
      {
          "country": "Tuvalu",
          "nationality": "Tuvaluan"
      },
      {
          "country": "Uganda",
          "nationality": "Ugandan"
      },
      {
          "country": "Ukraine",
          "nationality": "Ukrainian"
      },
      {
          "country": "United Arab Emirates",
          "nationality": "Emirati, Emirian, Emiri"
      },
      {
          "country": "United Kingdom of Great Britain and Northern Ireland",
          "nationality": "British, UK"
      },
      {
          "country": "United States Minor Outlying Islands",
          "nationality": "American"
      },
      {
          "country": "United States of America",
          "nationality": "American"
      },
      {
          "country": "Uruguay",
          "nationality": "Uruguayan"
      },
      {
          "country": "Uzbekistan",
          "nationality": "Uzbekistani, Uzbek"
      },
      {
          "country": "Vanuatu",
          "nationality": "Ni-Vanuatu, Vanuatuan"
      },
      {
          "country": "Venezuela (Bolivarian Republic of)",
          "nationality": "Venezuelan"
      },
      {
          "country": "Vietnam",
          "nationality": "Vietnamese"
      },
      {
          "country": "Virgin Islands (British)",
          "nationality": "British Virgin Island"
      },
      {
          "country": "Virgin Islands (U.S.)",
          "nationality": "U.S. Virgin Island"
      },
      {
          "country": "Wallis and Futuna",
          "nationality": "Wallis and Futuna, Wallisian or Futunan"
      },
      {
          "country": "Western Sahara",
          "nationality": "Sahrawi, Sahrawian, Sahraouian"
      },
      {
          "country": "Yemen",
          "nationality": "Yemeni"
      },
      {
          "country": "Zambia",
          "nationality": "Zambian"
      },
      {
          "country": "Zimbabwe",
          "nationality": "Zimbabwean"
      }
  ];
    this.gender = ['male', 'female'];
    this.maritalStatus = ['single', 'married', 'divorced', 'widowed', 'separated']

    this.messages = {
      requiredField: 'This field is required',
      validEmail: 'Input a valid email address',
      validNumber: 'Input a number',
      passwordMismatch: 'Password mismatch'
    }
  }


  getStates() {
    let states: any = [];
    this.stateLocalGovernmentData.forEach(state => {
      states.push(state.state);
    });
    return states;
  }

  getGenders() {
    return this.gender;
  }

  getMaritalStatuses() {
    return this.maritalStatus;
  }

  getLocalGovernmentByState(state: string) {
    let localGovernment = this.stateLocalGovernmentData.filter(s => s.state.toUpperCase() === state);
    return localGovernment[0].lgas;
  }

  getCountries() {
    let countries: any = [];
    this.countryNationality.forEach(country => {
      countries.push(country.country);
    })

    return countries;
  }

  getNationalities() {
    let nationalities: any = [];
    this.countryNationality.forEach(nationality => {
      nationalities.push(nationality.nationality);
    })

    return nationalities;
  }
}
