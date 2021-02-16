const db = require("../db/connection");
const Listing = require("../models/listing");
const User = require("../models/user");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

// ben1, damion1, daniel1, vinny1

const main = async () => {
  // Add users to database
  const user1 = new User({
    username: "Benjamin",
    email: "ben@ben.com",
    password_digest:
      "2b$11$KF.y9Q9uGxrdXtsGUAsR.uaifffYIMll1DDdB3lptd63uwEcSUrS2",
    listings: [],
  });
  await user1.save();

  const user2 = new User({
    username: "Damion",
    email: "damion@damion.com",
    password_digest:
      "$2b$11$QXT/xsTAnITwnSDQz3NFa.mhfYJ.iKjmYbzXhdwBpVLljrUKvxKeq",
    listings: [],
  });
  await user2.save();

  const user3 = new User({
    username: "Daniel",
    email: "dan@dan.com",
    password_digest:
      "$2b$11$mhLJetTHxMobSRY8e09Jiu93v1Bu72xPk5.o1VRcKSWYziNOx.GVO",
    listings: [],
  });
  await user3.save();

  const user4 = new User({
    username: "Vinny",
    email: "vinny@vinny.com",
    password_digest:
      "$2b$11$ScWViumW7sRjNSeg6mwO5uf5gwx98RKsmj/m10sEGgVVt/5MdPglW",
    listings: [],
  });
  await user4.save();

  // Add listings

  const listings = [
    {
      name: "Coral Island",
      imgURL:
        "https://images.pexels.com/photos/1268860/pexels-photo-1268860.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500ps://images.unsplash.com/photo-1573521193826-58c7dc2e13e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      description:
        "This unique 13-acre island is located in the Abaco Islands in the Bahamas and takes its name from its interesting shape and the amount of bonefish in this region. Two luxury owner’s suites and six additional suites can accommodate up to 16 people. The entire complex is hurricane-proof. All communication services (telephone, fax, and internet) are provided.",
      price: "8.2 Million USD",
      userId: user1,
    },
    {
      name: "Kakatoa Island",
      imgURL:
        "https://images.pexels.com/photos/2382681/pexels-photo-2382681.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      description:
        "An entire 55 acre private island including Key West styled development for sale in The Bahamas. After several years spent diligently gaining the necessary government approvals, duty exemptions and lanning permissions, the freehold of this pristine island is now offered for sale.",
      price: "1.7 Million USD",
      userId: user2,
    },
    {
      name: "Shell Island",
      imgURL:
        "https://images.pexels.com/photos/1139040/pexels-photo-1139040.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      description:
        "Rarely are Private Islands offered for sale in The Bahamas, given its proximity and easy access from the US mainland. Most are kept within the family or privately traded. We are proud to offer not just one – but a grouping of select islands that assure privacy and ease of ownership with new construction and infrastructure already in place at the northern tip of the Abaco Islands.",

      price: "2.3 Million USD",
      userId: user3,
    },
    {
      name: "Crystal Cove",
      imgURL:
        "https://images.pexels.com/photos/34223/mont-saint-michel-france-normandy-europe.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      description:
        "This iconic peninsula known as Big Point is located at the very western end of the settlement of Great Guana Cay, in the Abacos. With elevations over 30 feet, this 10-plus acre property forms a portion of the very popular Harbour settlement, and also features a quiet sandy beach on the protected anchorage of Fishers Bay to the north.",
      price: "1.5 Million USD",
      userId: user4,
    },
    {
      name: "General Assembly Island",
      imgURL:
        "https://images.pexels.com/photos/1483053/pexels-photo-1483053.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      description:
        "A haven of beauty and tranquility, this 250 acre tropical island is located at the south end of the Berry Islands chain, just 30 minutes by air from Nassau. The island is well protected on all sides by neighboring islands and sand banks. ",
      price: "3 Million USD",
      userId: user1,
    },
    {
      name: "Isle Delfino",
      imgURL:
        "https://images.pexels.com/photos/3417784/pexels-photo-3417784.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      description:
        "Rarely does an island with the attributes of Cave Cay become available. Stunning natural beauty, a protected and private, deep-water harbour and marina with floating cement dock system and 35 dock slips, plus a 2,800 ft. private airstrip make this the perfect private island.",
      price: "60 Million USD",
      userId: user2,
    },
    {
      name: "Yoshi Island",
      imgURL:
        "https://images.pexels.com/photos/1456289/pexels-photo-1456289.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      description:
        "Easily accessible just 4 miles from Chub Cay which has a 5,000 ft airstrip, restaurant, marina, fuel and customs and immigration. Most suited to a private family estate, Cat Cay has a beautiful sandy beach and untouched tropical plants and foliage.",
      price: "2.8 Million USD",
      userId: user3,
    },
    {
      name: "Donkey Kong Island",
      imgURL:
        "https://images.pexels.com/photos/1021073/pexels-photo-1021073.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      description:
        "An unparalleled offering of two tropical islands comprising 83+ acres located just 35 miles northwest of Nassau, and accessible by private boat or seaplane. Fringed with pristine white powder beaches and turquoise waters, these island gems offer hidden coves and pristine reefs and are a natural bird sanctuary cloaked with lush native vegetation.",
      price: "26 Million USD",
      userId: user4,
    },
    {
      name: "Wumpa Island",
      imgURL:
        "https://images.pexels.com/photos/3948080/pexels-photo-3948080.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      description:
        "Located in the crystal-clear majestic waters of the Exumas, Lumber Cay is a 30-acre private island featuring lush native vegetation, elevations and sandy white beach. Situated a mere 700 feet from popular Staniel Cay, Lumber Cay is easily accessible via Staniel Cay’s 3,000-ft. airstrip and 18-slip marina. ",
      price: "8.6 Milliion USD",
      userId: user1,
    },
    {
      name: "Riptide Island",
      imgURL:
        "https://images.pexels.com/photos/1450351/pexels-photo-1450351.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      description:
        "Located in the exquisite Abaco region of The Bahamas and home to calm waters, warm breezes and panoramic beauty, this 120-mile-long chain of islands are arguably the best boating, diving, fishing and sailing paradises in the world. Jwycesska is just 122 miles from Palm Beach, 26 miles from Grand Bahama and just 20 miles from Walkers Cay, recently acquired by superyacht owner, Carl Allen.",
      price: "17.9 Million USD",
      userId: user2,
    },
    {
      name: "Ben Island",
      imgURL:
        "https://images.pexels.com/photos/5043636/pexels-photo-5043636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      description:
        "This magnificent 257-acre jewel set only 5 miles from the mainland of Great Exuma. The island is surrounded by crystal clear water and ever-changing views of sandbars, reefs, and sky. The island boasts a 2500-foot white sandy beach, two smaller beaches and fabulous fishing, diving, and boating only a stone's throw from shore. ",
      price: "30 Million USD",
      userId: user3,
    },
    {
      name: "Vinny's Cove",
      imgURL:
        "https://images.pexels.com/photos/1456284/pexels-photo-1456284.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      description:
        "Vinny's Cove is a peaceful and secluded private island located just off the southeast coast of San Salvador, and is surrounded by crystal clear turquoise waters forming a wonderful protected area between the beaches of San Salvador and High Cay – an ideal playground for water-sports including kite-boarding, sailing or jet skiing.",
      price: "24 Million USD",
      userId: user4,
    },
    {
      name: "Damion Island",
      imgURL:
        "https://images.pexels.com/photos/457884/pexels-photo-457884.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      description:
        "Nestled approximately 40 miles northwest of Nassau, Bahamas, exists a very special place, called Damion Island. The spectacular island boasts beaches, coves, ponds, high ridges and bluffs. Neptune's Nest is also known as Devil's Cay. Brilliantly named to discourage pirates of days gone by from landing on the island and stealing hidden treasure.",
      price: "27.5 Million USD",
      userId: user1,
    },
  ];

  await Listing.insertMany(listings);
  console.log("Created Listings!");

  // Update each user in the database with their posts
  user1.listings = await Listing.find({ userId: user1 });
  await user1.save();
  user2.listings = await Listing.find({ userId: user2 });
  await user2.save();
  user3.listings = await Listing.find({ userId: user3 });
  await user3.save();
  user4.listings = await Listing.find({ userId: user4 });
  await user4.save();
};
const run = async () => {
  await main();
  db.close();
};

run();
