// I willl put all hardcoded codde into it.(config.js)

export const IMG_CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

export const FETCH_MENU_URL = "https://cors-handlers.vercel.app/api/?url=https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Fmenu%2Fpl%3Fpage-type%3DREGULAR_MENU%26complete-menu%3Dtrue%26lat%3D28.7494933%26lng%3D77.11836120000001%26restaurantId%3D";

// export const restaurantList = [
//     {
//       info: {
//         id: "10576",
//         name: "Pizza Hut",
//         cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
//         locality: "Koramangala",
//         areaName: "Koramangala",
//         costForTwo: "₹350 for two",
//         cuisines: ["Pizzas"],
//         avgRating: 4,
//         parentId: "721",
//         avgRatingString: "4.0",
//         totalRatingsString: "10K+",
//         sla: {
//           deliveryTime: 26,
//           lastMileTravel: 0.7,
//           serviceability: "SERVICEABLE",
//           slaString: "25-30 mins",
//           lastMileTravelString: "0.7 km",
//           iconType: "ICON_TYPE_EMPTY",
//         },
//         availability: {
//           nextCloseTime: "2024-02-24 04:00:00",
//           opened: true,
//         },
//         badges: {},
//         isOpen: true,
//         type: "F",
//         badgesV2: {
//           entityBadges: {
//             imageBased: {},
//             textBased: {},
//             textExtendedBadges: {},
//           },
//         },
//         aggregatedDiscountInfoV3: {
//           header: "20% OFF",
//           subHeader: "UPTO ₹50",
//         },
//         orderabilityCommunication: {
//           title: {},
//           subTitle: {},
//           message: {},
//           customIcon: {},
//         },
//         differentiatedUi: {
//           displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           differentiatedUiMediaDetails: {
//             mediaType: "ADS_MEDIA_ENUM_IMAGE",
//             lottie: {},
//             video: {},
//           },
//         },
//         reviewsSummary: {},
//         displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         restaurantOfferPresentationInfo: {},
//       },
//       analytics: {
//         context: "seo-data-daf0a510-738b-420e-82eb-b841d6ce454d",
//       },
//       cta: {
//         link: "https://www.swiggy.com/restaurants/pizza-hut-koramangala-bangalore-10576",
//         text: "RESTAURANT_MENU",
//         type: "WEBLINK",
//       },
//       widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
//     },
//     {
//       info: {
//         id: "737964",
//         name: "Wow! Momo",
//         cloudinaryImageId: "64fd45fd9f44c1737bc446e470bed666",
//         locality: "KORAMANGALA LAYOUT EXTENSION",
//         areaName: "KORAMANGALA",
//         costForTwo: "₹300 for two",
//         cuisines: [
//           "Tibetan",
//           "Healthy Food",
//           "Asian",
//           "Chinese",
//           "Snacks",
//           "Continental",
//           "Desserts",
//           "Beverages",
//         ],
//         avgRating: 4.4,
//         parentId: "1776",
//         avgRatingString: "4.4",
//         totalRatingsString: "100+",
//         sla: {
//           deliveryTime: 25,
//           lastMileTravel: 0.1,
//           serviceability: "SERVICEABLE",
//           slaString: "20-25 mins",
//           lastMileTravelString: "0.1 km",
//           iconType: "ICON_TYPE_EMPTY",
//         },
//         availability: {
//           nextCloseTime: "2024-02-24 01:00:00",
//           opened: true,
//         },
//         badges: {},
//         isOpen: true,
//         type: "F",
//         badgesV2: {
//           entityBadges: {
//             imageBased: {},
//             textBased: {},
//             textExtendedBadges: {},
//           },
//         },
//         aggregatedDiscountInfoV3: {
//           header: "60% OFF",
//           subHeader: "UPTO ₹120",
//         },
//         orderabilityCommunication: {
//           title: {},
//           subTitle: {},
//           message: {},
//           customIcon: {},
//         },
//         differentiatedUi: {
//           displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           differentiatedUiMediaDetails: {
//             mediaType: "ADS_MEDIA_ENUM_IMAGE",
//             lottie: {},
//             video: {},
//           },
//         },
//         reviewsSummary: {},
//         displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         restaurantOfferPresentationInfo: {},
//       },
//       analytics: {
//         context: "seo-data-daf0a510-738b-420e-82eb-b841d6ce454d",
//       },
//       cta: {
//         link: "https://www.swiggy.com/restaurants/wow-momo-layout-extension-koramangala-bangalore-737964",
//         text: "RESTAURANT_MENU",
//         type: "WEBLINK",
//       },
//       widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
//     },
//     {
//       info: {
//         id: "692058",
//         name: "BOOM Sandwich - Sub of India",
//         cloudinaryImageId: "96aaf72372ad1b0297b7cc304ced7e33",
//         locality: "6TH BLOCK",
//         areaName: "Koramangala",
//         costForTwo: "₹250 for two",
//         cuisines: ["Snacks", "Indian", "Desserts"],
//         avgRating: 4.2,
//         parentId: "401169",
//         avgRatingString: "4.2",
//         totalRatingsString: "50+",
//         sla: {
//           deliveryTime: 29,
//           lastMileTravel: 0.6,
//           serviceability: "SERVICEABLE",
//           slaString: "29 mins",
//           lastMileTravelString: "0.6 km",
//           iconType: "ICON_TYPE_EMPTY",
//         },
//         availability: {
//           nextCloseTime: "2024-02-24 02:00:00",
//           opened: true,
//         },
//         badges: {
//           textExtendedBadges: [
//             {
//               iconId: "guiltfree/GF_Logo_android_3x",
//               shortDescription: "options available",
//               fontColor: "#7E808C",
//             },
//           ],
//         },
//         isOpen: true,
//         type: "F",
//         badgesV2: {
//           entityBadges: {
//             imageBased: {},
//             textBased: {},
//             textExtendedBadges: {
//               badgeObject: [
//                 {
//                   attributes: {
//                     description: "",
//                     fontColor: "#7E808C",
//                     iconId: "guiltfree/GF_Logo_android_3x",
//                     shortDescription: "options available",
//                   },
//                 },
//               ],
//             },
//           },
//         },
//         aggregatedDiscountInfoV3: {
//           header: "50% OFF",
//           subHeader: "UPTO ₹100",
//         },
//         orderabilityCommunication: {
//           title: {},
//           subTitle: {},
//           message: {},
//           customIcon: {},
//         },
//         differentiatedUi: {
//           displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           differentiatedUiMediaDetails: {
//             mediaType: "ADS_MEDIA_ENUM_IMAGE",
//             lottie: {},
//             video: {},
//           },
//         },
//         reviewsSummary: {},
//         displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         restaurantOfferPresentationInfo: {},
//       },
//       analytics: {
//         context: "seo-data-daf0a510-738b-420e-82eb-b841d6ce454d",
//       },
//       cta: {
//         link: "https://www.swiggy.com/restaurants/boom-sandwich-sub-of-india-6th-block-koramangala-bangalore-692058",
//         text: "RESTAURANT_MENU",
//         type: "WEBLINK",
//       },
//       widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
//     },
//     {
//       info: {
//         id: "712380",
//         name: "Chicago Pizza",
//         cloudinaryImageId: "80f040545552605e33eba09f8fa30be9",
//         locality: "khb colony",
//         areaName: "Koramangala",
//         costForTwo: "₹500 for two",
//         cuisines: ["Pizzas", "Fast Food", "Italian"],
//         avgRating: 4.1,
//         parentId: "60277",
//         avgRatingString: "4.1",
//         totalRatingsString: "100+",
//         sla: {
//           deliveryTime: 26,
//           lastMileTravel: 0.7,
//           serviceability: "SERVICEABLE",
//           slaString: "25-30 mins",
//           lastMileTravelString: "0.7 km",
//           iconType: "ICON_TYPE_EMPTY",
//         },
//         availability: {
//           nextCloseTime: "2024-02-24 01:00:00",
//           opened: true,
//         },
//         badges: {},
//         isOpen: true,
//         type: "F",
//         badgesV2: {
//           entityBadges: {
//             imageBased: {},
//             textBased: {},
//             textExtendedBadges: {},
//           },
//         },
//         aggregatedDiscountInfoV3: {
//           header: "₹125 OFF",
//           subHeader: "ABOVE ₹499",
//           discountTag: "FLAT DEAL",
//         },
//         orderabilityCommunication: {
//           title: {},
//           subTitle: {},
//           message: {},
//           customIcon: {},
//         },
//         differentiatedUi: {
//           displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           differentiatedUiMediaDetails: {
//             mediaType: "ADS_MEDIA_ENUM_IMAGE",
//             lottie: {},
//             video: {},
//           },
//         },
//         reviewsSummary: {},
//         displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         restaurantOfferPresentationInfo: {},
//       },
//       analytics: {
//         context: "seo-data-daf0a510-738b-420e-82eb-b841d6ce454d",
//       },
//       cta: {
//         link: "https://www.swiggy.com/restaurants/chicago-pizza-khb-colony-koramangala-bangalore-712380",
//         text: "RESTAURANT_MENU",
//         type: "WEBLINK",
//       },
//       widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
//     },
//   ];
