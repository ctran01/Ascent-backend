'use strict';
const bcrypt = require('bcryptjs');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    const users = await queryInterface.bulkInsert('Users',
    [
      {
      username: 'Demo',
      email: 'demo@email.com',
      hashed_password: bcrypt.hashSync('password'),
      }
  
      ],
        {returning:true});

    
    const areas = await queryInterface.bulkInsert('Areas', 
    [
      {
        name: 'Austin Area',
        description: "Have you ever thought to yourself: 'Gosh, I'd love to live in a city with great live music, tacos for breakfast, over 100 boulder problems and sport routes less than a mile from your office, spring fed pools at a year round 65 degrees, eccentric locals, thirty million college students, traffic as far as the eye can see at all times, homeless people at every light, 400 days a year of 100+ degree weather and 85% humidity, rain only on the weekends, all the crags are secret, or on on private land, or are prone to collapsing on a massive scale at any given time, and/or made of a rock type that has a frictional coefficient approaching -infinity, and everything is graded V4 and 5.10-'????Well look no further than Austin, Texas!",
        image_url: 'https://cdn2.apstatic.com/photos/climb/116192886_medium_1545104464_topo.jpg',
        user_id: 1
      },
      {
        name: 'Reimers Ranch',
        description: "Located approximately 30 miles southwest of Austin, Reimer's Ranch provides an excellent selection of pocketed limestone sport climbs ranging from 5.5 to 5.14. The majority of the walls overlook the Pedernales river a short distance away which provides an excellent post-climb cool down in the summer.In the past, climbers would usually be greeted by Milton Reimer or his wife, Joy, at the gate. For two dollars a person, one gained access to excellent climbing in a beautiful locale. The entry ticket contained the rules ('No naked parties, no beer drinkin', etc.).",
        image_url: 'https://cdn2.apstatic.com/photos/climb/115388742_medium_1538701176.jpg',
        user_id: 1
      },
      {
        name: 'Sand Rock Climbing',
        description: "A long-time Alabama climbing institution, Sand Rock has had a colorful and sometimes dubious history. For many years, it seemed that lowlifes were in direct competition with climbers. Sand Rock was a destination for ATV riders, drunken late-night partiers and other examples of southern stereotypes. Broken beer bottles and overturned portapotties were common sights, and the cliffs were despoiled with spray-painted graffiti.",
        image_url: 'https://cdn2.apstatic.com/photos/climb/106102749_medium_1558648168.jpg',
        user_id: 1
      },
      {
        name: 'Diamond Rock Climbing',
        description: "This is one of the most prominent pieces of stone Archangel Valley. from base to peak, the Diamond is nearly 600 ft in height and contains one of Hatcher's most classic lines, Toto (5.10, Grade III). Along with Toto, there are various other stellar lines here, including Festoon (5.9+) Ruby Shoes (5.7) and Grit Your Teeth (5.10).",
        image_url: 'https://cdn2.apstatic.com/photos/climb/109357535_medium_1494347924.jpg',
        user_id: 1
      },
      {
        name: 'Cochise Stronghold Rock Climbing',
        description: "Cochise Stronghold is a spectacular landscape of rugged canyons and towering granite domes. While there is something for everyone in this vast area, those seeking traditional, multi pitch climbing will have a special appreciation for climbing in the Dragoon Mountains. Still, Cochise offers more sport climbing than its reputation, or any current guide, suggests (though not enough to put it in the category of a sport climbing destination). There is also a great deal of multi-pitch 'sport' climbing although virtually all of these climbs require an occasional gear placement or chickenhead tie-off. Many of these routes on the larger domes are not documented in any guide--though increasingly, they are showing up on this site--and therefore care must be taken not to get off route.",
        image_url: 'https://cdn2.apstatic.com/photos/climb/107423530_medium_1494188231.jpg',
        user_id: 1
      },
      {
        name: 'El Capitan Rock Climbing',
        description: "The Captain. How can you properly describe 3000 feet of beautiful granite loaded with awesome routes? El Cap is probably the most recognized chunk of rock in the world to rock climbers. Climbers come from across the globe to challenge themselves on the 3000 foot walls of El Capitan. It's an awe-inspiring thing that first time you go to the Valley and stand at the base of El Cap, looking up. So much rock, so little time...",
        image_url: 'https://cdn2.apstatic.com/photos/climb/105952604_medium_1558029257.jpg',
        user_id: 1
      },
      {
        name: 'Quartz Mountain Climbing',
        description: "Also known as Baldy Peak. Winter spot sees shade only early in the morning and then sees sun almost all day long. World class granite will test your friction skills and the bold routes will test your nerve. RX climbing at it's best. The locals are a very friendly tight knit community who all seem to share a kinship with the 'rock in the farmers wheatfield'. So please be sure to pack out all your trash, avoid impacting any sensitive areas, and leave your hammer-n-nails or your drills at home. All the climbing is clean and the locals can do all their own bolting, but they might need help and I am not sure exactly who would clear such activity.",
        image_url: 'https://cdn2.apstatic.com/photos/climb/112308864_medium_1494297625.jpg',
        user_id: 1
      },
      {
        name: 'Sandia Mountains Rock Climbing',
        description: "Because of the approaches to the climbing areas here, you will typically find solitude while climbing in the Sandias. Due to high elevation and nature of these mountains, conditions can vary. While one can climb at any time of the year, the best time seems to be between May through October. West and Southwest facing walls, such as Muralla Grande, can be warm and dry even on winter days. Watch for thunderstorms during the summer months.",
        image_url: 'https://cdn2.apstatic.com/photos/climb/116289851_medium_1547054454.jpg',
        user_id: 1
      },
      {
        name: "Sam's Throne & Surroundings Climbing",
        description: "The true origin of Ozark climbing stems from this area. Aesthetically pleasing faces loom over an exposed ridge littered with beautiful pines below.",
        image_url: 'https://cdn2.apstatic.com/photos/climb/111150054_medium_1494341379.jpg',
        user_id: 1
      },

      
    ], {returning:true})

    const routes = await queryInterface.bulkInsert('Routes',
    [
      {
        name: 'Diving for Rocks',
        type: 'Sport',
        grade: '5.10d',
        description: 'The crux is getting from the 2nd to 3rd bolt. The "easiest" way to do it is probably to lunge, but it can be done static as well. I reccommend doing it both ways for the full effect! After the crux, it is easier, but you still gotta hang on. Some of the rock up top can be a bit dusty.',
        image_url: 'https://cdn2.apstatic.com/photos/climb/107950637_smallMed_1494252887.jpg',
        longitude: -97.7999,
        latitude: 30.2453,
        area_id: 1,
        user_id: 1
      },
      {
        name: 'Lick the Window',
        type: 'Sport',
        grade: '5.10c',
        description: 'Crux is low with a very fun move below the first bolt. Fun climbing to the anchors after crux.',
        image_url: 'https://cdn2.apstatic.com/photos/climb/107122190_smallMed_1494167699.jpg',
        longitude: -97.7999,
        latitude: 30.2453,
        area_id: 1,
        user_id: 1
      },
      {
        name: "Scott's Pelotas",
        type: 'Sport',
        grade: '5.8',
        description: 'Located on the left side of Dead Cats Wall, and just right of a large, orange buttress with a bolted route that climbs through a large bulge (Marios Route, 5.12a). There are some thin, somewhat tricky moves right off the ground that lead to easier climbing above.',
        image_url: 'https://cdn2.apstatic.com/photos/climb/109022812_smallMed_1494303065_topo.jpg',
        longitude: -98.122,
        latitude: 30.334,
        area_id: 2,
        user_id: 1
      },
      {
        name: "Knob Wall",
        type: 'Sport',
        grade: '5.10d',
        description: "Knob Wall is a great route to take neophyte climbers. Like the name says, it's easy climbing on plentiful jugs, and it's a nice long route with a great view of the valley below. Knob Wall is also a good choice for new trad leaders, who can sew it up with gear and learn how to sling horns as well.",
        image_url: 'https://cdn2.apstatic.com/photos/climb/116240091_smallMed_1546638589.jpg',
        latitude: 	34.18,
        longitude:  -85.817,
        area_id: 3,
        user_id: 1
      },
      {
        name: "T-Roofic Detour",
        type: 'Trad',
        grade: '5.6',
        description: "One of the best 5.10s at Reimer's. Start on a tufa with good holds and climb to a ledge and the first bolt. Step right onto the main face, and then continue up and right to the second bolt. Head straight up from the second bolt and climb through the rocky overhangs. There are a couple of sketchy moves just below the anchor, but they are not bad. T-Roofic is a well bolted route - each clip protects a tough move. You don't really realize how much the route overhangs until you rap. Fun route, not to be missed.",
        image_url: 'https://cdn2.apstatic.com/photos/climb/116240091_smallMed_1546638589.jpg',
        longitude: -98.122,
        latitude: 30.334,
        area_id: 2,
        user_id: 1
      },
      {
        name: "Toto",
        type: 'Trad',
        grade: '5.10a',
        description: "This route is the gem of Archangel Valley if offers great climbing into the 5.10 range. It begins on the right side of the diamond feature directly across from the American Alpine Club outhouse. The climb begins at the Steve Garvey memorial plaque on the right side of the diamond, although variations exist. Pitch 1: 5.7. Follow the crack system up and slightly left to a bolted belay. Gear to 3-4 inches will be plenty. ",
        image_url: 'https://cdn2.apstatic.com/photos/climb/109704238_smallMed_1560714621_topo.jpg',
        latitude: 	64.737,
        longitude: 30.334,
        area_id: 4,
        user_id: 1
      },
      {
        name: "What's my Line?",
        type: 'Trad',
        grade: '5.6a',
        description: "Cochise Stronghold is a spectacular landscape of rugged canyons and towering granite domes. While there is something for everyone in this vast area, those seeking traditional, multi pitch climbing will have a special appreciation for climbing in the Dragoon Mountains. Still, Cochise offers more sport climbing than its reputation, or any current guide, suggests (though not enough to put it in the category of a sport climbing destination). There is also a great deal of multi-pitch 'sport' climbing although virtually all of these climbs require an occasional gear placement or chickenhead tie-off. Many of these routes on the larger domes are not documented in any guide--though increasingly, they are showing up on this site--and therefore care must be taken not to get off route.",
        image_url: 'https://cdn2.apstatic.com/photos/climb/106316005_smallMed_1494096929.jpg',
        latitude: 	31.921,
        longitude: -109.987,
        area_id: 5,
        user_id: 1
      },

      {
        name: "La Cosita, Left",
        type: 'Trad',
        grade: '5.7a',
        description: "This climbs the flared chimney and jamcrack on the left side of La Cosita. A 5.9 variation can be done by liebacking the flake to the left.",
        image_url: 'https://cdn2.apstatic.com/photos/climb/117894715_smallMed_1571166084.jpg',
        latitude: 	37.731,
        longitude: -119.636,
        area_id: 6,
        user_id: 1
      },
      {
        name: "The Nose",
        type: 'Trad',
        grade: '5.9 C2',
        description: "El Capitan is home to numerous classic routes but 'The Nose' is the mega classic of them all. Towering nearly 3000' this route offers 31 pitches of superb climbing right up the middle of the wall. Often referred to as the 'best rock climb in the world' it is obvious why this route is one of the most sought after big walls in the valley and the world. Most of the pitches on this route are outstanding but with classics such as the 'Stovelegs', 'King Swing' and 'Great Roof' you'll wish it would never end. Although this is a great climb the route is still very demanding, sustained and exposed and not to be taken lightly.",
        image_url: 'https://cdn2.apstatic.com/photos/climb/111184613_smallMed_1494342297.jpg',
        latitude: 	37.731,
        longitude: -119.636,
        area_id: 6,
        user_id: 1
      },
      {
        name: "Moby Dick",
        type: 'Trad',
        grade: '5.10 a',
        description: "While it starts with a powerful, thin and technical finger crack, most of your time will be spent with the widening fist crack above. For those with small hands, the upper section will be off-width, but for those with larger hands, enjoy! The crux is right off the ground and pro is thin early on. Watch you ankles falling right off the ground: the base is littered with rocks.",
        image_url: 'https://cdn2.apstatic.com/photos/climb/109565558_smallMed_1494353836.jpg',
        latitude: 	37.731,
        longitude: -119.636,
        area_id: 6,
        user_id: 1
      },
      {
        name: "Munge Lunge",
        type: 'Boulder',
        grade: 'V3+',
        description: "While it starts with a powerful, thin and technical finger crack, most of your time will be spent with the widening fist crack above. For those with small hands, the upper section will be off-width, but for those with larger hands, enjoy! The crux is right off the ground and pro is thin early on. Watch you ankles falling right off the ground: the base is littered with rocks.",
        image_url: 'https://cdn2.apstatic.com/photos/climb/111162573_smallMed_1494341753.jpg',
        latitude: 34.891,
        longitude: -99.301,
        area_id: 7,
        user_id: 1
      },
      {
        name: "Flake n' Bake",
        type: 'Trad',
        grade: '5.5',
        description: "Nice, mellow, south facing route (gets plenty of sun in winter) to take aspiring leaders or new climbers on. Looking up you'll see two obvious wavy cracks heading up to a roof. If you have more time to kill you can even set up a top rope and choose one of the four variations of the first pitch (crack 1, crack 2, slab only, or left facing dihedral crack.)",
        image_url: 'https://cdn2.apstatic.com/photos/climb/105957908_smallMed_1558029951.jpg',
        latitude: 35.211,
        longitude: -106.45,
        area_id: 8,
        user_id: 1
      },
      {
        name: "Red Faced Lizard",
        type: 'Sport',
        grade: '5.9',
        description: "Balance up the friction slab.",
        image_url: 'https://cdn2.apstatic.com/photos/climb/113438932_smallMed_1502116093.jpg',
        latitude: 35.858,
        longitude: -93.044,
        area_id: 9,
        user_id: 1
      },

      
    ])

    return queryInterface.bulkInsert('Followers',
    [
      {
        followable_type: 'route',
        followable_id: 1,  //id of route 
        user_id: 1
      },
      {
        followable_type: 'area',
        followable_id: 1,  //id of route 
        user_id: 1
      }
    ])
    },



  down: async (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   await queryInterface.bulkDelete('Followers',null,{});
   await queryInterface.bulkDelete('Routes', null, {});
   await queryInterface.bulkDelete('Areas',null, {});
   return queryInterface.bulkDelete('Users',null, {});
  }
};
