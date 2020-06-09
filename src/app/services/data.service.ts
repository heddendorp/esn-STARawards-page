import { Injectable } from '@angular/core';
import { map, share } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  categories: Observable<Category[]>;

  constructor() {
    this.categories = of(CATEGORIES).pipe(share());
  }

  public getCategories(): Observable<Category[]> {
    return this.categories;
  }

  public getCategoryById(id: string): Observable<Category> {
    return this.categories.pipe(
      map((categories) => categories.find((c) => c.id === id))
    );
  }
}

export interface Category {
  id: string;
  title: string;
  public: boolean;
  first: Array<Entry>;
  second: Array<Entry>;
  third: Array<Entry>;
  honorable: Array<Entry>;
  noCard?: boolean;
}

interface Entry {
  project: string;
  organizer: string;
  type?: string;
  picture?: string;
  longText?: string;
}

const CATEGORIES: Category[] = [
  {
    title: 'Network Award',
    public: false,
    noCard: true,
    id: 'network',
    first: [
      {
        project: 'Camp of Future',
        type: 'project',
        picture: 'turkey.jpg',
        organizer: 'ESN CAG, ESN Turkey',
        longText: `"As TPÖÇG Local Project Team and ESN ÇAĞ, our biggest dream is to leave a mark in people's hearts. So, we decided to do something for children living in disadvantaged areas. The main objective of the project is to create 'equal opportunities in education' for students in disadvantaged areas.
The first region we identified for this was Mersin Mut's Yalnızcabağ village, where students study in primary and secondary schools. Afterwards, they go to different regions to study in boarding schools. The fact that the students who do not leave the village until the age of 13 or 14, go to different regions leads to many orientation and psychological problems. We started preparing this project to solve their orientation problems and to ensure equal opportunities in education.
The project took place between the 17th and 20th of December. Together with 15 trainers and 1 psychologist, we trained a total of 78 children.
- Children were educated under 4 main headings. These issues being: gender mainstreaming, health, social media and children's rights.
- We designed 10 workshops for children, including science, painting, imagination, letter writing, creative writing, plant, environment, puppet making, bag design and drama workshops for these purposes.
- We wanted to introduce different educational models to children. For this purpose, we provided training for expressing emotions and coping with self-esteem and anxiety with the non-formal education model.
- We organised many book collection campaigns, and also opened a library for the kids. We prepared a memorial corner for the library.
- On the last day of the project, we opened an exhibition for children's activities. And we invited their parents to school. We showed the parents the library and the exhibition."`,
      },
    ],
    second: [],
    third: [],
    honorable: [
      {
        project: 'Christmas With Portuguese Families',
        type: 'project',
        picture: 'portugal.jpg',
        organizer: 'ESN Portugal',
        longText: `"Christmas with Portuguese Families gives international students, who weren't able to go home for the holidays, the opportunity to experience a true and traditional Portuguese experience with Portuguese families in their homes. Even people with different religious beliefs get together for this cultural exchange. It is enriching on every level.
By experiencing the Christmas season in Portuguese homes, international students get the chance to learn about Portuguese traditions, from gastronomy to songs and from beliefs to decorations. At the same time, Portuguese families learn about the holiday traditions of countries from all over the world through the exchange happening with international students.
By comparing traditions, both parties can learn and experience new things and become more understanding and global citizens.
The project is managed by ESN Portugal, working together with the local sections in the promotion of the project to the international students and their Higher Education Institutions. Higher Education Institutions without local ESN sections were also contacted to give international students from all over the country the opportunity. A few local sections already developed this type of initiative in previous years; however, by centralising the project, it became possible to have a greater reach, impact and to improve cooperation between sections.
The project was vastly promoted in the media. At the end of the project, feedback forms were sent to the participants to improve the project in the future."`,
      },
    ],
  },
  {
    title: 'cooperationSTAR',
    public: true,
    id: 'cooperation',
    first: [
      {
        project: 'ESN Brno United',
        organizer: 'ESN MUNI Brno, ESN MENDELU and ESN VUT Brno',
        longText: `ESN Brno United includes three sections: ESN MUNI Brno, ESN MENDELU and ESN VUT Brno, all located in Brno, Czech Republic. Their cooperation dates back to 2011 when they started organising a traditional Czech ball for the international students in Brno. Since then, they have been organising many events of all kinds together such as sports, culture, mobility, educational, parties, etc. There are various reasons for this cooperation, for example, they want to connect the international students from their city or even to share the  best practices and create a stronger team in terms of advocacy with their universities and also the city.`,
        picture: 'brno.jpg',
      },
    ],
    second: [
      {
        project: 'ESN FINT and ESN INTO Tampere',
        organizer: 'ESN FINT and ESN INTO',
        longText: `ESN FINT and ESN INTO Tampere, the two sections in Tampere, have organised parties almost since the sections were founded. During 2019 due to the merger of the two universities in Tampere, the University of Tampere and Tampere University of Technology, many events and services had to be organised together and thus harmonised across campuses, for example, Orientation Week activities, the Starting Kit Service and the Welcome Bags project. After the universities merged, ESN INTO and ESN FINT cooperated more freely. During the Spring of 2019, they negotiated together about university funding for international associations’ and organised the Spring cottage weekend.`,
        picture: 'tampere.jpg',
      },
    ],
    third: [
      {
        project: 'ESN a Milano Unita',
        organizer:
          'ESN Milano Bocconi, ESN Milano IULM, ESN Milano Statale, ESN Milano Unicatt, ESN Milano-Bicocca, ESN Politecnico Milano',
        longText: `This cooperation that falls under the name of "ESN a Milano Unita" involves all six Sections from Milano: ESN Milano Bocconi, ESN Milano IULM, ESN Milano Statale, ESN Milano Unicatt, ESN Milano -Bicocca and ESN Politecnico Milano. "ESN a Milano Unita" was born in 2012, and is long-term cooperation. Their cooperation started when new groups of students began to join ESN at the beginning of the 00s, to then evolve into a structured section cooperation in 2012.  In 2012, when ESN Milano Unicatt was officially admitted in the Network of ESN Italy, ESN a Milano Unita became a thing. Since then they have collaborated in countless successful events for their Erasmus students and for the Network too, for instance, AGM Milano 2014 or SWEP Milano 2017.`,
        picture: 'milano.jpg',
      },
    ],
    honorable: [
      {
        project: 'French-German Cooperation Committee (FGCoopCom)',
        organizer: 'ESN France and ESN Germany',
        picture: 'france_germany.jpg',
        longText: `The cooperation started with the creation of the first training event between ESN France and ESN Germany organised in 2013 by an ESNer from ESN Strasbourg. The event was called ISM (International Section Meeting) and since then the "tradition" has been launched with the creation of the – future called – French-German Section Meeting (FGSM). In 2015, both French and German NRs launched an open call in order to create a binational committee which would have taken care of the FGSM and the other projects (Buddy Sections Programme).`,
      },
    ],
  },
  {
    title: 'cultureSTAR',
    public: true,
    id: 'culture',
    first: [
      {
        project: 'Erasmus Cultural Meeting 2019',
        organizer: 'ESN Italy',
        type: 'Event',
        longText: `The Incontro Culturale Erasmus (ICE) is a national event organised in Rome and is one of ESN Italy's most significant events, focused on their culture.
Every year they organise it with the same purpose: to enhance the experience of more than 3000 International Students and ESNers by allowing them to live three amazing days in the heart of Italy.
For ESN Italy, ICE is also the occasion to promote the Erasmus+ programme by highlighting the beauty of multiculturalism, spreading European values and boosting the European identity during the event with both formal events, such as the opening conference, and informal events, like the flag parade, taking place in the city centre.
ESN Italy collaborated with many institutional partners during the event. Specifically, the project was supported by the European Parliament, the Representation of the European Commission in Italy, the Erasmus+/INDIRE National Agency, the Youth National Agency, the Italian Youth Council, the Municipality of Rome and the Metropolitan City of Rome, among others.`,
        picture: 'italy.jpg',
      },
    ],
    second: [
      {
        project:
          'ESN Estonia x Võrumaa Youth Council: youth participation and culture',
        organizer: 'ESN Estonia',
        type: 'Project',
        longText: `Võrumaa Youth Council is a local organisation that represents youth in Võru county and is a member of the Estonian National Youth Council.
As  last year was an election year, ESN Estonia wanted to focus more on youth participation and to show international students how young people can participate at a local level and at the same time help local youth council members to learn about other country's possibilities and best practices.
They organised a two-day event in Võru because it's located in South Estonia, near the Latvian border, which is not a usual destination for the international students. The volunteers wanted to meet locals, so half of the programme was about culture.`,
        picture: 'estonia.jpg',
      },
    ],
    third: [
      {
        project: 'Project UE Libre (Optional educational unit)',
        organizer: 'ESN Besançon',
        type: 'Project',
        longText: `Project UE libre (Optional educational unit) was initiated under the motive of Social Erasmus. As part of the innovative project led by the CROUS (Student Residence) of Besancon and in connection with the CLA (Center for Applied Linguistics), a third European credit system of the Optional educational unit on the cultural engagement of international students was born. This programme coordinated by an ESN association is unique in France and includes 40 to 60 international students per year: half of them were enrolled in the CLA, the other half in the other departments of the University of Franche-Comte. So far, 157 students have taken part in this project and 363 activities have been organised in conjunction with the partners. The project has been recognised at European level; which places the city of Besancon as the capital of intercultural engagement. Each student prepares and participates in at least 5 engagement activities in connection with 3 diverse audiences. Activities in this project include a variety of activities promoting an intercultural experience.`,
        picture: 'besancon.jpg',
      },
    ],
    honorable: [
      {
        project: 'Discover Europe',
        organizer: 'ESN Poland',
        type: 'Project',
        longText: `Discover Europe is one of the biggest pan-European student photo contests with a sixteen-year-long tradition. Its aim is to showcase different sides of Europe and promote its culture among young people through photography. The contest is divided into three categories - Citizen of Europe, Discover Architecture and Discover Nature. Each one describes the diversity in the world and shows new perspectives of everyday life. Supporting young artists and stimulating intercultural dialogue between Polish and international students has always been one of the most important premises of the contest.`,
        picture: 'poland.jpg',
      },
    ],
  },
  {
    title: 'educationSTAR',
    public: true,
    id: 'education',
    first: [
      {
        project: '(EX)Change Your Lives',
        organizer: 'ESN Novi Sad',
        type: 'Event',
        longText: `The three-day long seminar (Ex)Change Your Lives gathered over 50 participants from various cities and countries to discuss the inclusivity of students with disabilities in exchange programmes as well as empowering volunteers of the Erasmus Student Network. At a time of transition in Serbia, from a partner to a programme country, support for volunteers is not only crucial in providing support to incoming students, but also to outgoing students who are facing an entirely new set of problems. Engaging in discussions about student mobility in the framework of social inclusion was the focus in a series of discussions, workshops, and small sessions all dedicated to educating the participants on topics such as mobility, education, volunteering, inclusivity, etc. The main event was a panel discussion that engaged a conversation between volunteers with different levels of knowledge and experience and students with disabilities.`,
        picture: 'novisad.jpg',
      },
    ],
    second: [
      {
        project:
          'The contribution of ESN Spain to a better-funded Erasmus+ programme',
        organizer: 'ESN Spain',
        type: 'Project',
        longText: `As the academic year of 2019/2020 is a crucial time for the future of the Erasmus+ programme, with the discussions about the next long term budget going on, and considering the different elements which are involved in shaping the programme both at a European and national level, the Education Department of ESN Spain wanted to contribute to achieve a better funded programme.
Under this advocacy project, they came up with a number of actions which will target different Spanish decision makers at a European and National level, in order to ensure Spain’s support to a better funded future Erasmus programme and to increase the co-funding which Spain and the autonomous communities give to the programme, a crucial aspect to ensure its outreach and inclusivity.
Under this project, ESN Spain undertook different kinds of actions, such as meetings with the education attachees of the permanent representation of Spain before the EU; signing a common position paper with the National Students’ Union and with the Spanish Conference of Rectors directed at the President of Spain`,
        picture: 'spain.jpg',
      },
    ],
    third: [
      {
        project: 'Glocal Conference and Training',
        organizer: 'ESN Portugal',
        type: 'Event',
        longText: `Glocal Conference and Training aimed at training the volunteers of ESN and youth of Castelo Branco on the topic of Global Citizenship at the local level. The event took place in the Higher Education Institution of Castelo Branco. It was a one-day event that counted with various externals talking about Global Citizenship, such as the Portuguese National Agency Erasmus+ Education and Training, Junior Enterprises (JE) Portugal and SPEAK Portugal. Additionally, the event counted with workshops under the local phase of the Eduk8 Workplan 2019 with the topic of Media Literacy.
The activities were a workshop on Media Literacy, a workshop on Social Media, and a debate with the National Agency Erasmus+ Education and Training, SPEAK Portugal, Junior Enterprises Portugal and the participants about the role of Erasmus+ and NGOs glocally.
Both workshops were developed by Eduk8, adapted for the participants and provided by one trainer of ESN Portugal’s pool of trainers.`,
        picture: 'portugal.jpg',
      },
    ],
    honorable: [],
  },
  {
    title: 'employabilitySTAR',
    public: true,
    id: 'employability',
    first: [
      {
        project: 'International Student Employability',
        organizer: 'ESN FINT',
        type: 'Project',
        longText: `The core idea of the International Student Employability project was to improve job opportunities for international students in Tampere and help local companies to reach international talents.
Originally, a team was formed to develop the ErasmusIntern platform by promoting it among potential employees. Тhe team contacted local companies to involve them in the participation of the project (i.e. to place their opportunities on ErasmusIntern platform or to participate in employability events).
Тhe team implemented a research survey to identify real student experiences, pains and needs first hand. It allowed correcting project goals and tackling employability problems more effectively.However, after contacting several companies in Tampere, the team identified more opportunities in the field of international students employability in the offline space.`,
        picture: 'fint.jpg',
      },
    ],
    second: [
      {
        project: 'Career Mixers',
        organizer: 'ESN Utrecht',
        type: 'Programme',
        longText: `Career mixers consist of various events focused on the employability of international students in the Netherlands. Through informative fairs, workshops and dinners ESN Utrecht informed participants about the job market in the Netherlands, provided them with tools and taught them skills, as well as created an environment to get in contact with professionals and (international) alumni. Each of the mixers continue where the previous career mixer stopped in a creative successive programme.
The aim of the career mixers is to get participants familiar with the Dutch job market and help them in the process of finding a job, as well as connecting them to alumni and professionals.
`,
        picture: 'utrecht.jpg',
      },
    ],
    third: [
      {
        project:
          'Conference: “International mobility and employability: advantages and disadvantages of an abroad experience”',
        organizer: 'ESN Milano IULM',
        type: 'Event',
        longText: `The main aim of the International mobility and employability conference was to promote the Erasmus+ programme.
ESN Milano IULM wanted to promote the Erasmus+ grant among students and inform them about the benefits of going abroad for a study/work/voluntary experience.
The main topic was the relationship between international mobility and employability, but topics such as personal growth, strong points of Italian students in an international environment or Social Responsibility perspectives in the financial world were also tackled.
Every speaker in the event made a 15 minute-long speech, and then a Q&A session was held.`,
        picture: 'milano.jpg',
      },
    ],
    honorable: [
      {
        project: 'ESN Robotics 101 Ekethon',
        organizer: 'ESN TalTech IC',
        type: 'Event',
        longText: `The aim of the ESN Robotics 101 Ekethon event was to provide hands-on experience to a wide spectre of students, networking - establishing new acquaintances while creating something meaningful, elimination of the rivalship between technical and non-technical students, and creation of real devices supporting environmental sustainability.
All students were actively contributing and gained unforgettable experiences including midnight visits to the robotics labs.`,
        picture: 'taltech.jpg',
      },
    ],
  },
  {
    title: 'environmentSTAR',
    public: true,
    id: 'environment',
    first: [
      {
        project: 'Zero Waste month',
        organizer: 'ESN Strasbourg',
        type: 'Project',
        picture: 'strasbourg.jpg',
        longText: `Zero Waste Month was a series of connected activities carried out during November 2019. ESN Strasbourg organised five events, starting with the screening of the film “Tomorrow” which talks about different positive alternatives for a life which respects the planet, followed by a flea-market, a conference on how to sort out your waste and two activities where rubbish and cigarette butts were collected on the street.
The main objective was to make international students aware of the zero-waste lifestyle, to integrate them and to spread awareness on how waste is sorted out in their host city. We also aimed to enable them to dress economically and ecologically and to get to know the different associations/departments of the city that work for the environment.
ESN Strasbourg worked on the project with various partners and used their venues for the activities.`,
      },
    ],
    second: [
      {
        project: 'Think Reusable - Save the Earth with ESN-EYE',
        organizer: 'ESN-EYE Lodz',
        type: 'Project',
        picture: 'lodz.jpg',
        longText: `The project was focused on raising awareness about ‘zero-waste ideas’ and “being eco-friendly” among local and exchange students. Within two weeks full of events, ESN-EYE Lodz presented ‘reusable thinking’ and eco-friendly habits that should be introduced into everyday life. They organised various activities such as plant-based and zero-waste cooking, creating textile and eco-bags, remaking old clothes or manufacturing homemade gifts and beauty products.
The main objective of the project was to raise awareness about the planet’s condition. The volunteers wanted to show how everyday activities can significantly change our influence on the planet.
During the project, ESN-EYE Lodz collaborated with two NGOs, the University and one company as well as Viva!, which is an International Movement Foundation for animals.`,
      },
    ],
    third: [
      {
        project: 'ZeroWaste November',
        organizer: 'ESN Rijeka',
        type: 'Campaign',
        picture: 'rijeka.jpg',
        longText: `ZeroWaste November was a one-month long social media campaign where helpful tips and advice were posted daily. They encouraged their followers to use alternative products instead of single-use ones, suggested ways of recycling and creating DIY products and explained general concepts related to sustainability and zero-waste.
The campaign aimed to raise awareness about excessive waste, how to minimise personal waste and positively influence the audience of social media pages of ESN Rijeka with the overall goal of improving the environment on a local level.
During the campaign, ESN Rijeka collaborated with Špajza - a specialised store selling zero-waste products and groceries in bulk and Riperaj, which is a space where people can go and fix their household items by themselves.`,
      },
    ],
    honorable: [
      {
        project: 'Starting Kit Service',
        organizer: 'ESN FINT and ESN INTO Tampere',
        type: 'Project',
        picture: 'tampere.jpg',
        longText: `Starting Kit Service is a lending service which provides kitchen and bedroom items for incoming international students of Tampere University in the spirit of recycling and environmental sustainability. Student housing in Tampere does not include kitchen and bedroom necessities like frying pans or bed linen. Very few would bring such items with them from their home country, so each new student would have to buy these items for short-term use, maybe even for just one semester’s exchange.
A small service fee is charged for the starting kits (5€) in addition to the deposit (20€). The deposit is ultimately returned to the student once the items are returned in their initial condition (clean and dry). ESN volunteers help new international students to find the necessities they need and handle the lending service while advising the new students during their first days on the campus.`,
      },
      {
        project: 'NP1: Sustainability',
        organizer: 'ESN EPF Lausanne and ESN Uni Lausanne',
        type: 'Event',
        picture: 'lausanne.jpg',
        longText: `NP1: Sustainability was a National Platform organised with the lowest carbon footprint possible. To reach their goal, they supported green mobility by refunding train tickets for all participants, used only used or recycled materials, and the accommodation was provided in a local bunker.
Their main aim was to reduce the event's carbon footprint as much as possible and to raise awareness among participants about sustainability in its multiple forms.
During the platform, the sections collaborated with a company that promotes tap water as opposed to bottled water: Wasser für Wasser.`,
      },
      {
        project: 'ESN Green',
        organizer: 'ESN Porto',
        type: 'Project',
        picture: 'porto.jpg',
        longText: `At the end of the Summer of 2018, ESN Porto concluded that many of their activities were not environmentally friendly and relied mostly on plastic and disposable materials. This lack of Green Attitude was put to an end when a working group called ESN Green was born. They started it by organising an ESN Green Week! A week dedicated to sustainable development and filled with activities to spread awareness about the topic. They organised events such as planting trees, veggie workshops, cleaning the beach, debates and much more. Each semester had a week with this green mark. They even created Instagram challenges with the catchphrase “Be Green, Keep Porto Clean”, by encouraging their students to use this slogan on their Instagram and share pictures while being “green” - recycling, biking, hiking and so on.`,
      },
      {
        project: 'EcoMarathon',
        organizer: 'ESN UNWE',
        type: 'Event',
        picture: 'unwe.jpg',
        longText: `EcoMarathon is an event organised in the form of a seminar with presentations and open discussion. It is called а marathon because they go through different countries in the scope of the event. More specifically, this event is about getting to know how common environmental challenges and problems are tackled in different corners around the world.
The event was organised for the first time in 2017, and since then it has become a tradition to have one edition each semester. The main aim of the activity is to encourage international students to learn more about ecology and sustainability.
For the event, ESN UNWE collaborated with the University to obtain a suitable venue and with the University's ecology club called Eco Club UNWE.`,
      },
    ],
  },
  {
    title: 'fundraisingSTAR',
    public: true,
    id: 'fundraising',
    first: [
      {
        project: 'South Eastern European Platform Baku',
        organizer: 'ESN Azerbaijan',
        type: 'Event',
        longText: `ESN Azerbaijan put a lot of effort into the organisation of SEEP which is one of the five regional platforms of ESN. In less than four months the OC managed not only to find sponsors and organise the event but to build a team as well.
The OC managed to fundraise a total of 7,200 euro in cash, free sim cards and internet for the participants, free transportation and a city tour, promo materials and local sweets for the welcome bags. Their main partner Zeytun Baghlari provided the event with a VR set in which participants were able to play games and earn rewards from them, they also hired a professional cook who prepared their traditional meals for the International dinner.
Of course, such an event would not have been the same without Responsible party, who provided coffee breaks, promo materials and photo booths during “HalloweenSEEP”.`,
        picture: 'azerbaijan.jpg',
      },
    ],
    second: [
      {
        project: 'Network Exchange Forum Milano Statale 2019',
        organizer: 'ESN Milano Statale',
        type: 'Event',
        longText: `ESN Milano Statale collaborated with several partners for the organisation of Network Exchange Forum (NETx Milan 2019). The Network Exchange Forum Milan 2019 promoted growth in the field of human resources management, providing knowledge for Vice-presidents and helping to spread ideas. The event resulted in more prepared, better equipped, and higher capable HR managers that are aware of the regional differences in our network and the main issues we are addressing to expand and manage the quality of our countries and Sections.
The event received patronage from the representation of European Commission in Italy and the Italian Youth National Agency (ANG). AIDP (Associazione Italiana Direttori del Personale) hosted a panel during the event with five HR experts. The OC also collaborated with Eurosender, Universita degli Studi di Milano and various associations such as  Ecozema and RECUP which helped the event to be more sustainable. They managed to fundraise almost 7,000 euros in cash.`,
        picture: 'milano.jpg',
      },
    ],
    third: [
      {
        project:
          'Fundraising to launch the Secretariat and to improve events for the international students',
        organizer: 'ESN Italy',
        type: 'Activity',
        longText: `During 2019, the National Board of ESN Italy worked hard in the field of fundraising, both from private and public partners and grants, to have the financial sustainability to launch its Secretariat. The objectives of this effort were to increase the national budget and to diversify the types of incomes, that before were mainly internal (ESNcards, membership fees, etc.). In this way, the association could save some reserves which gave it the possibility to open a Secretariat and to be sure it was going to be financed for at least the first year, while in the meantime looking for new projects.
Being more precise, in 2019 ESN Italy managed to triple its budget, by receiving a total amount of around 20,000 euros from Institutions like the National Agency and the Rectors Conference, about 15,000 euros from private partners and most of all-around 80,000 euros from grants by ESAA and the European Commission.`,
        picture: 'italy.jpg',
      },
    ],
    honorable: [
      {
        project: 'ESNcard Party',
        organizer: 'ESN Cracow UNITED',
        type: 'Event',
        longText: `ESNcard Party is an event in which ESN Cracow United promotes their local ESNcard partners. Each semester around 600 people attend this project. During the event unusual attractions such as a rodeo bull, a UV dance floor and several hundred glow sticks are provided.
A paper wall with logos of their partners is specially prepared for the event, where people take pictures with special gadgets promoting the partners.`,
        picture: 'cracow.jpg',
      },
    ],
  },
  {
    title: 'healthSTAR',
    public: true,
    id: 'health',
    first: [
      {
        project: 'National Erasmus Games 2019',
        organizer: 'ESN GEG Genova',
        type: 'Event',
        longText: `Three days, three sports, over 300 people, National Erasmus Games 2019 was a successful event for ESN Italy. Thanks to the support of ESAA, garagErasmus, Responsible Party, Cariparma Foundation and many other important commercial and institutional partners, they managed not only to promote an active and healthier lifestyle but also to show how sport can connect cultures. The event had as a primary purpose to bring together, in one city, students from all over the world through sports tournaments and cultural visits of the host city with the task of facilitating integration by reducing cultural diversity. The finals took place on the last day of the event, followed by the awards ceremony for the best teams that received trophies, medals and tickets to participate in the international phase of the event i.e. International Erasmus Games in Paris.`,
        picture: 'italy.jpg',
      },
    ],
    second: [
      {
        project: 'Shape Challenge with ESN-EYE',
        organizer: 'ESN-EYE Lodz',
        type: 'Event',
        longText: `Due to the lack of sports motivation and unwillingness to take up sports activities, ESN-EYE Lodz decided to face the challenge and find a way to encourage students to work out. So, they came up with an idea to create a competition that did not require any special equipment and could have been done anywhere at any time. It involved using a path tracking application, for example, Endomondo, in order to create a shape on the map during the activity. More importantly, there were no restrictions on the type of activity. It could have been either running, walking, cycling, or any other type of sport during which the GPS could be used. As a result, people were choosing their preferred activities, as well as the shapes they wanted to create. Thanks to that, not only did they have fun, but also improve their mental and physical health.`,
        picture: 'lodz.jpg',
      },
    ],
    third: [
      {
        project: 'ESN Gent: Silent Disco Yoga',
        organizer: 'ESN Gent',
        type: 'Activity',
        longText: `The main aim of this activity was to create awareness about mental well-being through a spiritual workout through the combination of music and yoga. Physical and mental sensations of Yoga are magnified through wireless headphones. They help you to completely focus inward and pay attention to your own practice.The activity was held at the studio of a professional spiritual yoga instructor.`,
        picture: 'gent.jpg',
      },
      {
        project: `Autumn Erasmus Games '19`,
        organizer: 'ESN LSU',
        type: 'Event',
        longText: `Autumn Erasmus Games '19 was a national sports competition event of ESN Lithuania. They managed to gather international students from 10 sections of ESN Lithuania, from 3 different cities.The aim of the event was to raise awareness of the importance of regular physical activity and to engage students in physical activity and promote it for regular engagement on a daily basis.`,
        picture: 'lsu.jpg',
      },
    ],
    honorable: [
      {
        project: 'Meet our mascot',
        organizer: 'ESN VU Amsterdam',
        type: 'Event',
        longText: `A few days before exams started at VU University Amsterdam, ESN VU Amsterdam decided to do something fun for their students by introducing them to their new mascot, "Adam the alpaca". They reached an alpaca farm and brought alpacas on campus so people could get to know real alpacas. This helped students to take a break from studying and enjoy the company of alpacas.`,
        picture: 'amsterdam.jpg',
      },
      {
        project: 'The ESN Malta Sports Programme',
        organizer: 'ESN Malta',
        type: 'Programme',
        longText: `The ESN Malta Sports Programme is one of the most developed and oldest programmes that ESN Malta offers to all their members, international and local students. Thanks to these sports programmes their members get to keep fit and healthy during their time in Malta by being able to participate in a number of different sporting activities, such as football, volleyball, basketball, surfing, diving.`,
        picture: 'malta.jpg',
      },
    ],
  },
  {
    title: 'hrSTAR',
    public: true,
    id: 'hr',
    first: [
      {
        project: 'Internal Buddy System Thessaloniki: The Game of the Crown',
        organizer: 'ESN AUTH, ESN UOM THESSALONIKI, ESN IHU THESSALONIKI',
        longText: `The internal buddy system is an initiative that was cooperatively created by the three sections of ESN Thessaloniki (ESN AUTH, ESN UOM THESSALONIKI, ESN IHU THESSALONIKI) in order to achieve better bonding and training between all our members. The idea behind this project was to create a whole story titled "The Game of the Crown" based on a special and fun concept which had a "royal" character.  Every two weeks, a new chapter of the story was given, which was accompanied by a task that volunteers had to fulfil before the next chapter was published. During this practice, the members were divided into groups of two "buddies" that had to cooperate and do the tasks, which were focused on bonding and training. After the fulfilment of each task, the story of the game kept on unfolding more and more with the aim of creating, in the end, a whole booklet that would be named "a Thesserasmus medieval novel", which would serve as a reminder of the things volunteers achieved while doing the tasks given.`,
        picture: 'thessaloniki.jpg',
      },
    ],
    second: [
      {
        project: 'HR Community Management by HR Committee in ESN Poland',
        organizer: 'ESN Poland',
        longText: `The initiative of the HR Committee is centred around the HR Community of ESN Poland and focuses on enhancing the community spirit and engagement by sharing best practices, motivating their members and sharing training opportunities, both in online and offline worlds. The Committee uses three main channels of communication: a Facebook group - ESN Poland HRelp Desk, a Messenger chat ‘ESN Local HR’ and the mailing list. There are several sub-projects going on at the same time to cater to everyone’s needs: "Coffee with HRs" online calls - monthly calls with the HR Community, "#LocalBoards" - a series of posts focusing on HR-related problems of Local Boards with proposed solutions, "Best practices sharing" - a series where the HR Committee members introduce a topic, asking the members of the community to share their practices from their own sections and "Training Opportunities for ESN Poland" - the HR Committee also prepares a monthly summary of Training Opportunities for the entirity of ESN Poland.`,
        picture: 'poland.jpg',
      },
    ],
    third: [
      {
        project: 'Section Reference tasks guide',
        organizer: 'ESN Bulgaria',
        longText: `The section reference tasks is a guide for what a stable and quality section within the network is doing or should be doing. This is a reference or a frame - the section is free to modify all of them according to their realities and needs. These tasks help the sections to create an action plan or train the local members to know what a local section should be focusing on. These tasks also serve as evaluation criteria for the ESN BG awards during the National Platform in June 2019. The document is based on the results from the Open Space from NBM in Bratislava and the Quality Assurance criteria for countries along with some things which they adapted to their reality in order to motivate their sections and give them help and ideas for their future goals.`,
        picture: 'bulgaria.jpg',
      },
    ],
    honorable: [
      {
        project: 'Be a hero, become a Mentor!',
        organizer: 'ESN UL Lodz',
        longText: `In the context of recruiting mentors, ESN UL Lodz decided to work together with the International Student Office in order to reach more local students and involve them in their actions. Special training, workshops and interviews were conducted. After the workshops, mentors received red hoodies - the symbol of being a mentor. Mentors helped during the Orientation Weeks, participated in several events organised by the section and the International Office; Thanks to their contribution, they were awarded official diplomas and some small gifts from the University.`,
        picture: 'lodz.jpg',
      },
      {
        project: 'Training plan of ESN Spain',
        organizer: 'ESN Barcelona UPF',
        longText: `Spain together with the Spanish Network Care Team started a process to create a plan to describe the training path for their local volunteers. Specifically, they created a training plan that could fit all of their volunteers' needs. This document focuses on non-formal and informal education and how their volunteers can learn and improve different competences.`,
        picture: 'spain.jpg',
      },
    ],
  },
  {
    title: 'itSTAR',
    public: true,
    id: 'it',
    first: [
      {
        project: 'Fiesta',
        organizer: 'ESN VUT Brno',
        longText: `The goal of this project is to develop a new information system. It implements solutions that encourage a higher-level of integration of new international students with the Brno University of Technology. The main purpose of the developed system is to improve the communication between incoming students and ESN members who take care of the students. Currently, the information system successfully cooperates with the Brno University of Technology, Mendel University in Brno and Masaryk University. In the next phase, they expect the involvement of other Czech and foreign universities.`,
        picture: 'brno.jpg',
      },
    ],
    second: [
      {
        project: 'Erasmus Manager',
        organizer: 'ESN AUTH, ESN UOM Thessaloniki, ESN IHU Thessaloniki',
        longText: `This project's idea is an easier and convenient way to manage the local sections’ ESNcards sales & invoicing. The aim is to provide the incoming exchange students with the opportunity to get their ESNcard before their arrival in Thessaloniki. The local sections operate legally in Greece with a VAT number and they are obliged to issue invoices for each payment they receive, thus the system handles this process itself, providing help to the volunteers which had to do it manually for hundreds of payments in previous years. Their future goal is to add the role of "Events registrations management".`,
        picture: 'thessaloniki.jpg',
      },
    ],
    third: [
      {
        project: 'Pretix Online Payment System',
        organizer: 'ESN Germany',
        longText: `Through an initiative of ESN Freiburg, the German IT team set up an online payment system for all German ESN sections. The sections can sell their event tickets online and offer vouchers, discounts and the option to pay manually. The IT team decided on the installation of the Pretix system and hosted it on an ESN Germany server. Like this, the IT team provides all sections with a central online payment platform maintained by ESN Germany.`,
        picture: 'germany.jpg',
      },
    ],
    honorable: [],
  },
  {
    title: 'mobilitySTAR',
    public: true,
    id: 'mobility',
    first: [
      {
        project: 'Internationalisation and Mobility Conference',
        organizer: 'ESN Serbia',
        type: 'Project',
        longText: `The project Internationalisation on Mobility was envisioned as the first student-organised conference about  the topic of student mobility in Higher Education. It consisted of two parts, the first one of which was conducting two national researches - Erasmus in Serbia where all three sections of ESN Serbia disseminated a survey about the experience of Erasmus students in Serbia. The survey gathered information about administrative barriers (visa, resident permits, etc), their academic and everyday experience and Student Mobility: motivation, barriers, and benefits - the survey was focused on the general student population in Serbia, targeting both mobile and non-mobile students.
Both of the research surveys were designed and evaluated by ESN members with social sciences research backgrounds in order to achieve professional-level output.
The second part of the project was a two-day conference where the results were debated with relevant stakeholders. The event gathered students, alumni of mobility programmes, academic and administrative staff to discuss the trends and issues of mobility programmes in Serbia.`,
        picture: 'serbia.jpg',
      },
    ],
    second: [
      {
        project: 'Erasmus in Estonian high schools',
        organizer: 'ESN Estonia',
        type: 'Programme',
        longText: `The main aim of Erasmus in Schools was to promote exchange studies through current Erasmus and international students or Estonians that have done Erasmus in local high schools.
Before the visits, ESN Estonia promoted this opportunity among their members and international students and 2 informative sessions with short training took place both in Tallinn and Tartu.
Each participant had a coordinator that helped with everything needed - gave all information regarding the visit, arranged the visit, etc. Participants also received a special reusable cloth "Erasmus in Schools" bag full of promo materials; checklist with all important information and reminders with what they have to do; Erasmus scholarship information and feedback form; and a document with tips for participants to help them prepare and be ready for the visit.`,
        picture: 'estonia.jpg',
      },
      {
        project: 'Accessible Experiences Conference',
        organizer: 'ESN Turkey',
        type: 'Initiative',
        longText: `Accessible Experiences Conference is a project that was initiated in 2017 for the first time and is taken out every year in order to encourage people with physical obstacles to take part in the mobility programmes. It is a series of connected conferences since 2018 and the 3rd Accessible Experiences Conference has been organised this year.
The aim of this project is to encourage people with physical obstacles to meet people that have the same obstacles and have experienced mobility programmes which is followed by informative sessions, presentations and discussion sessions on ways to improve the quantity and quality of the participation from disadvantaged backgrounds.
As the aim is spreading the perspective about the mobility programmes of people with physical obstacles; which is the common belief of people not being able to and not being appropriate physically to participate in mobility programmes, which is wrong.`,
        picture: 'turkey.jpg',
      },
    ],
    third: [
      {
        project: '#ErasmusDays',
        organizer: 'ESN Debrecen',
        type: 'Activity',
        longText: `Over the course of four days ESN Debrecen organised a set of activities under the scope of the Mobility Cause. They started off with a Mobility Café, where the NA of the Erasmus+ Programme in Hungary, the colleague of the IRO and former Erasmus students shared information and experiences about  the scholarship for studies. The Erasmus Days continued with a Mobility Fair on the next day, which ESN Debrecen had organised for the 21st time. 18 mobility organisations were present with their own stands, flyers, games and gadgets, and there were official presentations of ESN as well. On the last two days the volunteers organised Erasmus Breakfast events on four campuses in total, where free snacks, biscuits, coffee and tea were offered to the students who could ask about mobility programmes while enjoying a free breakfast on their way to class.`,
        picture: 'debrecen.jpg',
      },
    ],
    honorable: [
      {
        project: 'ERASMUS yourself!',
        organizer: 'ESN Zagreb',
        type: 'Programme',
        longText: `The ERASMUS yourself! programme was designed to encourage outgoing mobility of the University of Zagreb students. During the winter semester, 14 events took place – workshops, presentations, panels and info desks for information sharing and consultations. The focus was on the Erasmus+ programme and the possibilities of going to study or work abroad in order to increase student mobility and to achieve a higher percentage of European Commission objectives in the field of education and mobility.`,
        picture: 'zagreb.jpg',
      },
    ],
  },
  {
    title: 'socialinclusionSTAR',
    public: true,
    id: 'socialinclusion',
    first: [
      {
        project: 'Ludàlia and ESN: towards a bidirectional normalization',
        organizer:
          'ESN UAB Barcelona, ESN UPC Barcelona, ESN Barcelona UB, ESN Barcelona UPF',
        type: 'Project',
        longText: `The sections from Barcelona started two years ago in collaboration with the foundation “Ludàlia”. Ludàlia organises activities and events for people with intellectual disabilities in search of normalisation of free time and culture for this minority group. The collaboration with Ludàlia was mainly aimed to promote social inclusion, bidirectional learning, the demystification of stereotypes and to create a safe environment between groups based on equality, respect and mutual acceptance.`,
        picture: 'barcelona.jpg',
      },
    ],
    second: [
      {
        project:
          'Visibility of the structural male chauvinist violence during international mobilities',
        organizer: 'ESN UCM, ESN UAH, ESN URJC, ESN UC3M, ESN UAM, ESN UAX',
        type: 'Initiative',
        longText: `The purpose of this initiative was to create a short film in order to raise awareness and give visibility to the physical and psychological violence that women suffer on a daily basis, especially during international mobilities. The key piece of this project has been the participation of international students of different backgrounds and cultures by sharing their personal experiences regarding gender inequality and sexism. The aim was to empower other women and start an open conversation about such a serious matter.`,
        picture: 'ucm.jpg',
      },
      {
        project: 'Social Tuesday',
        organizer: 'ESN Granada',
        type: 'Initiative',
        longText: `This project is mainly composed of 3 activities which take place on the three first Tuesdays of the month. It aims to make a circle of social activities with the objective of creating a long-term influence on different sectors of the local society through international students. These three activities are: visiting and doing activities with the elderly at the daycare centre, helping and volunteering at an animal shelter and doing several activities with children at risk of social exclusion.`,
        picture: 'granada.jpg',
      },
    ],
    third: [
      {
        project: 'International students theatre',
        organizer: 'ESN Besançon',
        type: 'Programme',
        longText: `International students and ESNers meet up every week during the second semester to do theatre exercises and practice a play led by two volunteers, who have a theater background. During the weekly workshop, they prepare a play written by the two coordinators to be played in a local theatre at the end of the workshop. During each session, there is a relaxation, warming-up, theatre exercises, improvisations and scene rehearsals. The main aim is to help international students improve their French and especially French pronunciation through theatre.`,
        picture: 'besancon.jpg',
      },
    ],
    honorable: [
      {
        project: 'ESN Makes a Family',
        organizer: 'ESN Trabzon',
        type: 'Initiative',
        longText: `This initiative started with the purpose of raising money and then giving a scholarship to a student. Nevertheless, when ESN Trabzon found that a family of three children was in need, their main focus was changed and they decided to become their family. To do this, they helped them with their education by giving them free private lessons and took them to the cinema. They are also providing a monthly scholarship to them.`,
        picture: 'trabzon.jpg',
      },
      {
        project: 'SID Sign Language Campaign',
        organizer: 'ESN Stockholm',
        longText: `For this campaign, ESN Stockholm wanted to spread awareness about communication with hearing impairments, however, they thought that simply creating events for this goal would not be enough. SID events are great initiatives but they reach a rather small audience as it is limited to the people who are available to attend the physical event. Therefore, they decided that an online campaign would be a better option as it is available to everyone and not limited to a specific time or place.`,
        picture: 'stockholm.jpg',
      },
    ],
  },
  {
    title: 'trainingSTAR',
    public: true,
    id: 'training',
    first: [
      {
        project: 'Social Inclusion Weekend Vaasa 2019',
        organizer: 'ESN Finland',
        type: 'Event',
        longText: `Social Inclusion Weekend Vaasa 2019 was a national training event with a comprehensive focus on the cause of Social Inclusion. The idea was to train and motivate Local Social Inclusion Coordinators with the help of an agenda consisting of team building activities, presentations, workshops and a social programme. The social programme of the event also had a subtext of training and educating - the participants had the opportunity to attend a Dinner in the Dark, in order to get a first hand-experience of participating in a typical Social Inclusion Event.
The side idea of the training, besides the strong focus on Social Inclusion, was to create an event inspired by non formal-education and international Eduk8-events. Another part of the Eduk8-idea was also noticeable in the fact that the team of trainers consisted of two experienced trainers (part of the Eduk8-pool) and three new trainers who had all just completed Eduk8 Starter.
Thanks to a successful funding and an ESAA-grant, the participants enjoyed the event without a participation fee.`,
        picture: 'finland.jpg',
      },
    ],
    second: [
      {
        project: 'Awareness Of The Disability',
        organizer: 'ESN CAG',
        type: 'Project',
        longText: `Awareness of disability is a project that is still being developed. The training will last four months. During the training 20 volunteers will be provided with basic training on body language, sign language, first aid, psychological first aid, communication with people with disabilities, communication with children, privacy training, children rights, rights of the people with disabilities, introduction of Braille alphabet and discrimination and prejudice towards people with disabilities.
The aim of the training is to help bring people with disabilities into society and to develop various motor skills by doing various activities with them.
As the scope of the project, the target audience is young people - students, hearing-impaired individuals and visually impaired individuals.`,
        picture: 'cag.jpg',
      },
    ],
    third: [
      {
        project: 'Education Training 2019',
        organizer: 'ESN Romania',
        type: 'Event',
        longText: `The Education Training was a 2 day intensive learning-oriented event, organised for ESN volunteers. More specifically it was a non-formal learning event, with an agenda built around the concept of education in ESN, bringing together information about Erasmus+ mobility opportunities, collaboration with HEIs, stakeholders and how to interact with them.
The second part of the event focused on soft skills development, but building around the same core idea. The set of workshops aimed to improve soft skills that are considered to be helpful when communicating with different stakeholders when promoting mobility. The workshops were chosen and designed to help participants to actively use the information received to implement the hard skills gained.
The focal point was education and, particularly, the role ESN has in this field. The aim of the training was to develop both hard and soft skills, to discuss, to simulate real life cases and to take advantage of a perfect networking opportunity.`,
        picture: 'romania.jpg',
      },
    ],
    honorable: [
      {
        project: 'National Training Plan 2020',
        organizer: 'ESN Portugal',
        type: 'Project/Strategy',
        longText: `The National Training Plan is developed every year as the strategy for the training of the volunteers of ESN Portugal. It encloses all the National Training Events, the local workshops and the Training Needs Analysis.
The Training Needs are collected every year by the training team and are analysed. The needs are collected from a score of 1(not knowledgeable) to 7(fully knowledgeable) in different topics from writing a specific grant to working with photoshop. The Training Team analyses the results by area and by section. The analysis helps ESN Portugal prepare the training plan, which consists of national training events and local training sessions.`,
        picture: 'portugal.jpg',
      },
      {
        project: 'COM 101 Training Webinar',
        organizer: 'ESN Turkey',
        type: 'Project',
        longText: `COM 101 Training Webinar was a wide range of online training programmes about hard skills that are necessary for Communication Managers and anyone willing and motivated to learn more about graphic design, video editing, content writing and social media management. Participants were able to learn the basics of the specified topics while they were getting encouraged to do and improve themselves more on these topics in the future.`,
        picture: 'turkey.jpg',
      },
    ],
  },
  {
    title: 'visibilitySTAR',
    public: true,
    id: 'visibility',
    first: [
      {
        project:
          'From #StavoltaVoto (#ThisTimeImVoting) to #StavoltaHoVotato (#ThisTimeIVoted)',
        organizer: 'ESN Italy',
        longText: `The main aim of this campaign was informative, as ESN Italy wanted Erasmus students to be aware of the possibility to vote from abroad during their mobility period. Therefore, they were able to run the campaign successfully thanks to the collaboration with the Liaison Office of the European Parliament in Italy. Besides that, they promoted the importance of voting and a video was released with international students in Italy explaining their reasons for voting. In the end, on the 26th of May, they asked their volunteers to tag them on Instagram while going to vote or right after.`,
        picture: 'italy.jpg',
      },
    ],
    second: [
      {
        project: `International Volunteers' Day`,
        organizer: 'ESN Spain',
        longText: `The aim of the campaign was to spread how ESN impacts society and the people that volunteer in the association. A bunch of volunteers participated in a video and explained how and why they joined ESN and what they have got from and felt during their experience. Apart from that, they also explained what ESN gives to society and how they can improve their professional skills within the association. The core idea was mainly to show what ESN brings to people and society by making the volunteers the main characters of the campaign.`,
        picture: 'spain.jpg',
      },
    ],
    third: [
      {
        project:
          'This is Me in Sign Language - 14th National Platform of ESN Croatia, ESN Rijeka',
        organizer: 'ESN Croatia',
        longText: `During the 14th National Platform of ESN Croatia, members of ESN Croatia made a sign language video as a contribution during Social Inclusion Days. The main goal of this activity was to raise awareness about inclusive communication and create a positive image of sign languages while bringing us closer together. The result was increased awareness of including different kinds of communication than the ones we are used to, and even a few encouraged members of ESN Croatia continued to learn sign language.`,
        picture: 'croatia.jpg',
      },
    ],
    honorable: [
      {
        organizer: 'ESN Utrecht',
        project: 'ESN deck of playing cards',
        longText: `During last Summer, ESN Utrecht started to rethink the concept of their goodie bags, that they hand out during Introduction day. The main goal of giving out goodie bags was to create more visibility for ESN and to promote their partners. However, they wanted to give something more to the international students, goodies that were longer lasting and would actually be useful during their exchange. The conclusion of their brainstorming was a deck of playing cards, which turned out to be their most effective campaign.`,
        picture: 'utrecht.jpg',
      },
    ],
  },
];
