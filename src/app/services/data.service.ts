import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  categories = [
    {
      title: 'cooperationSTAR',
      first: [
        {
          project: 'ESN Brno United',
          organizer: 'SN MUNI Brno, ESN MENDELU and ESN VUT Brno',
        },
      ],
      second: [
        {
          project: 'ESN FINT and ESN INTO Tampere',
          organizer: 'ESN FINT and ESN INTO',
        },
      ],
      third: [
        {
          project: 'ESN a Milano Unita',
          organizer: 'ESN Milano Bocconi. ESN Milano IULM, ESN Milano',
        },
        {
          project: 'Statale',
          organizer:
            'ESN Milano Unicatt, ESN Milano-Bicocca, ESN Politecnico Milano',
        },
      ],
    },
    {
      title: 'cultureSTAR',
      first: [
        {
          project: 'Incontro Culturale Erasmus (ICE) 2019',
          organizer: 'ESN Italy',
        },
      ],
      second: [
        {
          project:
            'ESN Estonia x Võrumaa Youth Council: youth participation and culture',
          organizer: 'ESN Estonia',
        },
      ],
      third: [
        {
          project: 'Project UE Libre (Optional educational unit)',
          organizer: 'ESN Besançon',
        },
      ],
    },
    {
      title: 'educationSTAR',
      first: [
        {
          project: '(EX)Change Your Lives',
          organizer: 'ESN Novi Sad',
        },
      ],
      second: [
        {
          project:
            'The contribution of ESN Spain to a better-funded Erasmus+ programme',
          organizer: 'ESN Spain',
        },
      ],
      third: [
        {
          project: 'Glocal Conference and Training',
          organizer: 'ESN Portugal',
        },
      ],
    },
    {
      title: 'employabilitySTAR',
      first: [
        {
          project: 'International Student Employability',
          organizer: 'ESN FINT',
        },
      ],
      second: [
        {
          project: 'Career Mixers',
          organizer: 'ESN Utrecht',
        },
      ],
      third: [
        {
          project:
            'Conference: “International mobility and employability: advantages and disadvantages of an abroad experience”',
          organizer: 'ESN Milano IULM',
        },
      ],
    },
    {
      title: 'environmentSTAR',
      first: [
        {
          project: 'Zero Waste month',
          organizer: 'ESN Strasbourg',
        },
      ],
      second: [
        {
          project: 'Think Reusable - Save the Earth with ESN-EYE',
          organizer: 'ESN-EYE Lodz',
        },
      ],
      third: [
        {
          project: 'ZeroWaste November',
          organizer: 'ESN Rijeka',
        },
      ],
    },
    {
      title: 'fundraisingSTAR',
      first: [
        {
          project: 'South Eastern European Platform Baku',
          organizer: 'ESN Azerbaijan',
        },
      ],
      second: [
        {
          project: 'Network Exchange Forum Milano Statale 2019',
          organizer: 'ESN Milano Statale',
        },
      ],
      third: [
        {
          project:
            'Fundraising to launch the Secretariat and to improve events for the international students',
          organizer: 'ESN GEG Genova',
        },
      ],
    },
    {
      title: 'healthSTAR',
      first: [
        {
          project: 'National Erasmus Games 2019',
          organizer: 'ESN Italy',
        },
      ],
      second: [
        {
          project: 'Shape Challenge with ESN-EYE',
          organizer: 'ESN-EYE Lodz',
        },
      ],
      third: [
        {
          project: 'ESN Gent: Silent Disco Yoga',
          organizer: 'ESN Gent',
        },
        {
          project: "Autumn Erasmus Games '19",
          organizer: 'ESN Lithuania',
        },
      ],
    },
    {
      title: 'hrSTAR',
      first: [
        {
          project: 'Internal Buddy System Thessaloniki: The Game of the Crown',
          organizer: 'ESN AUTH, ESN UOM THESSALONIKI, ESN IHU THESSALONIKI',
        },
      ],
      second: [
        {
          project: 'HR Community Management by HR Committee in ESN Poland',
          organizer: 'ESN Poland',
        },
      ],
      third: [
        {
          project: 'Section Reference tasks guide',
          organizer: 'ESN Bulgaria',
        },
      ],
    },
    {
      title: 'itSTAR',
      first: [
        {
          project: 'Fiesta',
          organizer: 'ESN VUT Brno',
        },
      ],
      second: [
        {
          project: 'Erasmus Manager',
          organizer: 'ESN AUTH, ESN UOM Thessaloniki, ESN IHU Thessaloniki',
        },
      ],
      third: [
        {
          project: 'Pretix Online Payment System',
          organizer: 'ESN Germany',
        },
      ],
    },
    {
      title: 'mobilitySTAR',
      first: [
        {
          project: 'Internationalisation and Mobility Conference',
          organizer: 'ESN Serbia',
        },
      ],
      second: [
        {
          project: 'ESN TU IC -Erasmus in Estonian high schools',
          organizer: 'ESN Estonia',
        },
        {
          project: 'ESN Arel - Accessible Experiences Conference',
          organizer: 'ESN Turkey',
        },
      ],
      third: [
        {
          project: '#ErasmusDays',
          organizer: 'ESN Debrecen',
        },
      ],
    },
    {
      title: 'socialinclusionSTAR',
      first: [
        {
          project: 'Ludàlia and ESN: towards a bidirectional normalization',
          organizer:
            'ESN UAB Barcelona, ESN UPC Barcelona, ESN Barcelona UB, ESN Barcelona UPF',
        },
        {
          project:
            'Visibility of the structural male chauvinist violence during international mobilities',
          organizer: 'ESN UCM, ESN UAH, ESN URJC, ESN UC3M, ESN UAM, ESN UAX',
        },
      ],
      second: [
        {
          project: 'Social Tuesday',
          organizer: 'ESN Granada',
        },
      ],
      third: [
        {
          project: 'International students theatre',
          organizer: 'ESN Besançon',
        },
      ],
    },
    {
      title: 'trainingSTAR',
      first: [
        {
          project: 'Social Inclusion Weekend Vaasa 2019',
          organizer: 'ESN Finland',
        },
      ],
      second: [
        {
          project: 'Awareness Of The Disability',
          organizer: 'ESN CAG',
        },
      ],
      third: [
        {
          project: 'Education Training 2019',
          organizer: 'ESN Romania',
        },
      ],
    },
    {
      title: 'visibilitySTAR',
      first: [
        {
          project:
            'From #StavoltaVoto (#ThisTimeImVoting) to #StavoltaHoVotato (#ThisTimeIVoted)',
          organizer: 'ESN Italy',
        },
      ],
      second: [
        {
          project: "International Volunteers' Day",
          organizer: 'ESN Spain',
        },
      ],
      third: [
        {
          project:
            'This is Me in Sign Language - 14th National Platform of ESN Croatia, ESN Rijeka',
          organizer: 'ESN Croatia',
        },
      ],
    },
  ];

  constructor() {}

  public getCategories() {
    return this.categories;
  }
}
