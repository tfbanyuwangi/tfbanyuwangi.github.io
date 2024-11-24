const informations = [/* {
    image: 'https://www.stevenvanbelleghem.com/content/uploads/2023/11/Heavy-rains-lash-Delhi-NCR-traffic-snarls-at-many-places.jpg',
    title: 'Urgensi aktivasi bus trans Banyuwangi',
    date: '12 Januari 2024',
    by: 'Radar Banyuwangi',
    url: 'https://radarbanyuwangi.jawapos.com/read/2024/01/12/286/259/urgensi-aktivasi-bus',
}, {
    image: 'https://www.stevenvanbelleghem.com/content/uploads/2023/11/Heavy-rains-lash-Delhi-NCR-traffic-snarls-at-many-places.jpg',
    title: 'Pemerintah Banyuwangi akan mengaktifkan BTS',
    date: '10 Februari 2024',
    by: 'Radar Banyuwangi',
    url: 'https://radarbanyuwangi.jawapos.com/read/2024/01/12/286/259/urgensi-aktivasi-bus',
}, {
    image: 'https://www.stevenvanbelleghem.com/content/uploads/2023/11/Heavy-rains-lash-Delhi-NCR-traffic-snarls-at-many-places.jpg',
    title: 'Banyuwangi semakin macet karena transportasi pribadi',
    date: '12 Maret 2024',
    by: 'Radar Banyuwangi',
    url: 'https://radarbanyuwangi.jawapos.com/read/2024/01/12/286/259/urgensi-aktivasi-bus',
} */]

const map = 'https://drive.google.com/drive/folders/1bzeDRJVVVmMw3LFAMqG25jVtd8h-4J20?usp=sharing'

const telegram = 'https://t.me/tf_malang'

const email = 'fdtbanyuwangi@gmail.com'

const url = 'https://tfbanyuwangi.github.io/'

const twitter = 'https://twitter.com/tf_banyuwangi'

const instagram = 'https://www.instagram.com/tf_banyuwangi/'

const contacts = [ {
    name: 'Telegram',
    href: telegram,
    icon: 'mdi mdi-forum',
    text: telegram
}, {
    name: 'Email',
    href: `mailto:${email}`,
    icon: 'mdi mdi-email-multiple-outline',
    text: email
}]

const socials = [{
    name: 'Web page',
    href: url,
    icon: 'mdi mdi-web',
},/*  {
    name: 'Facebook',
    href: 'https://www.facebook.com/internationalaffairsUM',
    icon: 'mdi mdi-facebook',
}, */ {
    name: 'Instagram',
    href: instagram,
    icon: 'mdi mdi-instagram',
}, /* {
    name: 'YouTube',
    href: 'https://www.youtube.com/channel/UC1XP5w9EUyHGsKdZJU-awcQ/',
    icon: 'mdi mdi-youtube',
}, */ {
    name: 'Twitter',
    href: twitter,
    icon: 'mdi mdi-twitter',
}]

const links = [{
    url: url,
    name: 'Situs',
    icon: 'mdi-open-in-new'
}, {
    url: telegram,
    name: 'FDTBW Telegram',
    icon: 'mdi-forum',
}, {
    url: map,
    name: 'Peta Transportasi Banyuwangi',
    icon: 'mdi-map',
}, {
    url: twitter,
    name: 'Twitter / X',
    icon: 'mdi-twitter',
}/* , {
    url: instagram,
    name: 'Instagram',
    icon: 'mdi-instagram',
} */]

const terminuses = [
    'Terminal Brawijaya',
    'Terminal Blambangan',
    'Terminal Sasak Perot',
    'Terminal Sritanjung',
    'Stasiun Banyuwangi Kota',
    'Giri',
    'Argopuro',
    'Taman Blambangan',
]

const lines = [{
    id: 1,
    from: terminuses[0],
    to: terminuses[1],
    color: '#5E4C93',
}, {
    id: 2,
    from: terminuses[0],
    to: terminuses[1],
    color: '#AC3673',
}, {
    id: 3,
    from: terminuses[2],
    to: terminuses[7],
    color: '#E50F72',
}, {
    id: 4,
    from: terminuses[0],
    to: terminuses[1],
    color: '#0079C3',
}, {
    id: 5,
    from: terminuses[1],
    to: terminuses[2],
    color: '#F49E0C',
}, {
    id: 6,
    from: terminuses[1],
    to: terminuses[3],
    color: '#A35039',
}, {
    id: 7,
    from: terminuses[4],
    to: terminuses[6],
    color: '#AAB912',
}, {
    id: 8,
    from: terminuses[0],
    to: terminuses[2],
    color: '#666565',
}, {
    id: 9,
    from: terminuses[1],
    to: terminuses[5],
    color: '#E62129',
}, {
    id: 12,
    from: terminuses[1],
    to: terminuses[3],
    color: '#5FA776',
}]

const wayfindings = [{
    id: 'CD327272-A341-4490-8364-6E376CA04F2C',
    title: 'Pertigaan Bundaran',
    lat: -8.212978,
    lng: 114.350350,
    directions: [{
        rtl: false,
        color: 'secondary',
        rotate: 90,
        contents: [{
            type: 'arrow',
        }, {
            type: 'box',
            context: 'bus',
        }, {
            type: 'walk',
            distance: 35,
        }, {
            type: 'multilang',
            id: 'Halte Angkutan Kota Bundaran Sepeda B',
            en: 'Bundaran Sepeda B Microbuses Stop',
        }, {
            type: 'lines',
            served: [3, 4, 7]
        }]
    }, {
        rtl: true,
        color: 'secondary',
        rotate: 180,
        contents: [{
            type: 'arrow',
        }, {
            type: 'box',
            context: 'bus',
        }, {
            type: 'walk',
            distance: 40,
        }, {
            type: 'multilang',
            id: 'Perhentian Angkutan Kota Bundaran Sepeda A',
            en: 'Bundaran Sepeda A Microbuses Stop',
        }, {
            type: 'lines',
            served: [3, 4, 5, 7, 8]
        }]
    }]
}, {
    id: '02FCFD02-8B46-40DD-A6D9-612EE8B92937',
    title: 'Crosswalk STIKOM',
    lat: -8.221550,
    lng: 114.368061,
    directions: [{
        rtl: false,
        color: 'primary',
        rotate: 90,
        contents: [{
            type: 'arrow',
        }, {
            type: 'box',
            context: 'museum',
        }, {
            type: 'multilang',
            id: 'Museum Blambangan',
            en: 'Blambangan Museum',
        }]
    }, {
        rtl: false,
        color: 'primary',
        rotate: 90,
        contents: [{
            type: 'arrow',
        }, {
            type: 'box',
            context: 'school',
        }, {
            type: 'multilang',
            id: 'SMPN 1 Banyuwangi',
            en: 'Junior High School 1 Banyuwangi',
        }]
    }, {
        rtl: false,
        color: 'secondary',
        rotate: 90,
        contents: [{
            type: 'arrow',
        }, {
            type: 'box',
            context: 'bus',
        }, {
            type: 'walk',
            distance: 20,
        }, {
            type: 'multilang',
            id: 'Halte Angkutan Kota STIKOM A',
            en: 'STIKOM A Microbuses Stop',
        }, {
            type: 'lines',
            served: [1, 8]
        }]
    }, {
        rtl: true,
        color: 'secondary',
        rotate: 180,
        contents: [{
            type: 'arrow',
        }, {
            type: 'box',
            context: 'bus',
        }, {
            type: 'walk',
            distance: 15,
        }, {
            type: 'multilang',
            id: 'Perhentian Angkutan Kota STIKOM B',
            en: 'STIKOM B Microbuses Stop',
        }, {
            type: 'lines',
            served: [1, 5]
        }]
    }],
}, {
    id: 'B681B371-81D4-4F0F-A76D-DDDEA2716BCA',
    title: 'Halte STIKOM A',
    lat: -8.221479,
    lng: 114.368117,
    directions: [{
        rtl: false,
        color: 'primary',
        rotate: 0,
        contents: [{
            type: 'arrow',
        }, {
            type: 'box',
            context: 'school',
        }, {
            type: 'multilang',
            id: 'STIKOM PGRI',
            en: 'STIKOM PGRI',
        }]
    }, {
        rtl: true,
        color: 'primary',
        rotate: 180,
        contents: [{
            type: 'arrow',
        }, {
            type: 'box',
            context: 'museum',
        }, {
            type: 'multilang',
            id: 'Museum Blambangan',
            en: 'Blambangan Museum',
        }]
    }, {
        rtl: true,
        color: 'primary',
        rotate: 180,
        contents: [{
            type: 'arrow',
        }, {
            type: 'box',
            context: 'school',
        }, {
            type: 'multilang',
            id: 'SMPN 1 Banyuwangi',
            en: 'Junior High School 1 Banyuwangi',
        }, {
            type: 'walk',
            distance: 100,
        }]
    }, {
        rtl: false,
        color: 'secondary',
        rotate: 0,
        contents: [{
            type: 'arrow',
        }, {
            type: 'box',
            context: 'bus',
        }, {
            type: 'multilang',
            id: 'Perhentian Angkutan Kota STIKOM B',
            en: 'STIKOM B Microbuses Stop',
        }, {
            type: 'lines',
            served: [1, 5]
        }]
    }],
    stops: [{
        line: lines[0],
        towards: terminuses[1],
    }, {
        line: lines[7],
        towards: terminuses[2],
    }]
}, {
    id: '0F7E0240-E32A-4955-9FB8-6448A6EFFF8A',
    title: 'Halte SDN 4 Penganjuran B',
    lat: -8.219642,
    lng: 114.368927,
    directions: [{
        rtl: false,
        color: 'primary',
        rotate: 0,
        contents: [{
            type: 'arrow',
        }, {
            type: 'box',
            context: 'school',
        }, {
            type: 'multilang',
            id: 'STIKOM PGRI',
            en: 'STIKOM PGRI',
        }]
    }, {
        rtl: true,
        color: 'primary',
        rotate: 180,
        contents: [{
            type: 'arrow',
        }, {
            type: 'box',
            context: 'museum',
        }, {
            type: 'multilang',
            id: 'Museum Blambangan',
            en: 'Blambangan Museum',
        }]
    }, {
        rtl: true,
        color: 'primary',
        rotate: 180,
        contents: [{
            type: 'arrow',
        }, {
            type: 'box',
            context: 'school',
        }, {
            type: 'multilang',
            id: 'SMPN 1 Banyuwangi',
            en: 'Junior High School 1 Banyuwangi',
        }, {
            type: 'walk',
            distance: 100,
        }]
    }, {
        rtl: false,
        color: 'secondary',
        rotate: 0,
        contents: [{
            type: 'arrow',
        }, {
            type: 'box',
            context: 'bus',
        }, {
            type: 'multilang',
            id: 'Perhentian Angkutan Kota STIKOM B',
            en: 'STIKOM B Microbuses Stop',
        }, {
            type: 'lines',
            served: [1, 5]
        }]
    }],
    stops: [{
        line: lines[0],
        towards: terminuses[1],
    }, {
        line: lines[7],
        towards: terminuses[2],
    }]
}, {
    id: '2CB7AFC3-1C7D-480F-8033-E3ABF6199CE2',
    title: 'Exit SMEA',
    lat: -8.211940,
    lng: 114.350425,
    directions: [{
        rtl: false,
        color: 'secondary',
        rotate: 0,
        contents: [{
            type: 'arrow',
        }, {
            type: 'box',
            context: 'bus',
        }, {
            type: 'walk',
            distance: 35,
        }, {
            type: 'multilang',
            id: 'Halte Angkutan Kota Bundaran Sepeda B',
            en: 'Bundaran Sepeda B Microbuses Stop',
        }, {
            type: 'lines',
            served: [3, 4, 7]
        }]
    }, {
        rtl: false,
        color: 'secondary',
        rotate: 0,
        contents: [{
            type: 'arrow',
        }, {
            type: 'box',
            context: 'bus',
        }, {
            type: 'walk',
            distance: 40,
        }, {
            type: 'multilang',
            id: 'Perhentian Angkutan Kota Bundaran Sepeda A',
            en: 'Bundaran Sepeda A Microbuses Stop',
        }, {
            type: 'lines',
            served: [3, 4, 5, 7, 8]
        }]
    }],
}, {
    id: 'D4C90703-7BAF-4B43-9CDF-B39860253CD9',
    title: 'Halte Bundaran B',
    lat: -8.213122,
    lng: 114.350672,
    directions: [{
        rtl: false,
        color: 'primary',
        rotate: 0,
        contents: [{
            type: 'arrow',
        }, {
            type: 'box',
            context: 'school',
        }, {
            type: 'multilang',
            id: 'Universitas Airlangga',
            en: 'Airlangga University',
        }, {
            type: 'walk',
            distance: 140,
        }]
    }, {
        rtl: false,
        color: 'primary',
        rotate: 0,
        contents: [{
            type: 'arrow',
        }, {
            type: 'box',
            context: 'school',
        }, {
            type: 'multilang',
            id: 'SMAN 1 Giri',
            en: 'Public Highschool 1 Giri',
        }, {
            type: 'walk',
            distance: 160,
        }]
    }, {
        rtl: true,
        color: 'primary',
        rotate: 180,
        contents: [{
            type: 'arrow',
        }, {
            type: 'box',
            context: 'social',
        }, {
            type: 'multilang',
            id: 'Dinas Sosial',
            en: 'Social Services',
        }, {
            type: 'walk',
            distance: 120,
        }]
    }, {
        rtl: true,
        color: 'primary',
        rotate: 180,
        contents: [{
            type: 'arrow',
        }, {
            type: 'box',
            context: 'school',
        }, {
            type: 'multilang',
            id: 'SDN Mojopanggung',
            en: 'Mojopanggung Elementary School',
        }, {
            type: 'walk',
            distance: 150,
        }]
    }],
    stops: [{
        line: lines[2],
        towards: terminuses[7],
    }, {
        line: lines[3],
        towards: terminuses[0],
    }, {
        line: lines[6],
        towards: terminuses[6],
    }]
}, {
    id: '8543E63F-0D19-48BD-B2EF-AA73B849F047',
    title: 'Perhentian Bundaran A',
    lat: -8.213228,
    lng: 114.350626,
    directions: [{
        rtl: false,
        color: 'primary',
        rotate: 90,
        contents: [{
            type: 'arrow',
        }, {
            type: 'box',
            context: 'school',
        }, {
            type: 'multilang',
            id: 'SMAN 1 Giri',
            en: 'Public Highschool 1 Giri',
        }, {
            type: 'walk',
            distance: 170,
        }]
    }, {
        rtl: false,
        color: 'primary',
        rotate: 90,
        contents: [{
            type: 'arrow',
        }, {
            type: 'box',
            context: 'school',
        }, {
            type: 'multilang',
            id: 'SLB YKPTI',
            en: 'YKPTI Special School',
        }, {
            type: 'walk',
            distance: 220,
        }]
    }, {
        rtl: true,
        color: 'primary',
        rotate: 180,
        contents: [{
            type: 'arrow',
        }, {
            type: 'box',
            context: 'school',
        }, {
            type: 'multilang',
            id: 'Universitas Airlangga',
            en: 'Airlangga University',
        }, {
            type: 'walk',
            distance: 150,
        }]
    }, {
        rtl: true,
        color: 'primary',
        rotate: 180,
        contents: [{
            type: 'arrow',
        }, {
            type: 'box',
            context: 'school',
        }, {
            type: 'multilang',
            id: 'SMKN 1 Banyuwangi',
            en: 'Vocational High School 1 Banyuwangi',
        }, {
            type: 'walk',
            distance: 200,
        }]
    }],
    stops: [{
        line: lines[2],
        towards: terminuses[2],
    }, {
        line: lines[3],
        towards: terminuses[1],
    }, {
        line: lines[4],
        towards: terminuses[2],
    }, {
        line: lines[6],
        towards: terminuses[4],
    }, {
        line: lines[7],
        towards: terminuses[2],
    }]
}].map((wayfinding) => {
    wayfinding.route = `/wayfindings/${wayfinding.id}`
    return wayfinding
})

export { informations, map, contacts, socials, links, wayfindings, lines }