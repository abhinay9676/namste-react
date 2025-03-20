import React from "react";
import ReactDOM from "react-dom";



const Header=()=>{
    return(
        <div className="header">
            <div className="logo">
            <img src="https://i.pinimg.com/originals/3d/a0/00/3da000e71ddc31ec29da41266b182ade.jpg" alt="photu" width="100" height="100"/>
            </div>
            <div className="nav-items">
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Cart</li>
              </ul>
            </div>
        </div>
    )
}

const RestaurantCard=(props)=>{
    const { resData } = props;

    const { name,cloudinaryImageId,costForTwo,cuisines,avgRating} = resData?.info;
    return(
        <div className="res-card">
         <div className="res-logo">
           <img
             className="res-logo"
             alt="res-logo"
            src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.info.cloudinaryImageId}
           />
           <div className="res-details">
           <h3>{resData?.info?.name}</h3>
           <h4>{resData?.info?.cuisines.join(", ")}</h4>
           <h4>{resData?.info?.avgRating}</h4>
            <h5>{resData?.info?.costForTwo}</h5> 
           </div>
           
           
         </div>
        </div>
    )
}

const resList = [
    {
        "info": {
          "id": "806685",
          "name": "Burger King",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/13/a3fdd982-fa2e-4e9b-a340-8628a4d8f668_806685.jpg",
          "locality": "Satavahana Nagar",
          "areaName": "Gandhinagar",
          "costForTwo": "₹350 for two",
          "cuisines": [
            "Burgers",
            "American"
          ],
          "avgRating": 4.3,
          "parentId": "166",
          "avgRatingString": "4.3",
          "totalRatingsString": "3.8K+",
          "sla": {
            "deliveryTime": 22,
            "lastMileTravel": 3.8,
            "serviceability": "SERVICEABLE",
            "slaString": "20-25 mins",
            "lastMileTravelString": "3.8 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2025-03-20 23:59:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "Rxawards/_CATEGORY-Burger.png",
                "description": "Delivery!"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "Delivery!",
                      "imageId": "Rxawards/_CATEGORY-Burger.png"
                    }
                  }
                ]
              },
              "textBased": {

              },
              "textExtendedBadges": {

              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "60% OFF",
            "subHeader": "UPTO ₹120"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "lottie": {

              },
              "video": {

              }
            }
          },
          "reviewsSummary": {

          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {

          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          "context": "seo-data-a6c92a8b-d8b4-4b98-a752-93711e646a69"
        },
        "cta": {
          "link": "https://www.swiggy.com/city/ahmedabad/burger-king-satavahana-nagar-gandhinagar-rest806685",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "168122",
          "name": "McDonald's",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/20/46cffcb0-1af5-4b82-a976-da64bde7d8da_168122.jpg",
          "locality": "Gandhinagar",
          "areaName": "GANDHINAGAR",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "Burgers",
            "Beverages",
            "Cafe",
            "Desserts"
          ],
          "avgRating": 4.5,
          "parentId": "630",
          "avgRatingString": "4.5",
          "totalRatingsString": "22K+",
          "sla": {
            "deliveryTime": 19,
            "lastMileTravel": 3.9,
            "serviceability": "SERVICEABLE",
            "slaString": "15-20 mins",
            "lastMileTravelString": "3.9 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2025-03-21 03:45:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "Rxawards/_CATEGORY-Burger.png",
                "description": "Delivery!"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "Delivery!",
                      "imageId": "Rxawards/_CATEGORY-Burger.png"
                    }
                  }
                ]
              },
              "textBased": {

              },
              "textExtendedBadges": {

              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹179"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "lottie": {

              },
              "video": {

              }
            }
          },
          "reviewsSummary": {

          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {

          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "4.3",
              "ratingCount": "9.0K+"
            },
            "source": "GOOGLE",
            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          "context": "seo-data-a6c92a8b-d8b4-4b98-a752-93711e646a69"
        },
        "cta": {
          "link": "https://www.swiggy.com/city/ahmedabad/mcdonalds-gandhinagar-rest168122",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "765053",
          "name": "KFC",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/b5dea3ed-788d-4679-9d54-07e09f25a1d9_765053.JPG",
          "locality": "Kudasan",
          "areaName": "Gandhinagar",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "Burgers",
            "Fast Food",
            "Rolls & Wraps"
          ],
          "avgRating": 4.3,
          "parentId": "547",
          "avgRatingString": "4.3",
          "totalRatingsString": "2.4K+",
          "sla": {
            "deliveryTime": 15,
            "lastMileTravel": 3,
            "serviceability": "SERVICEABLE",
            "slaString": "10-15 mins",
            "lastMileTravelString": "3.0 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2025-03-21 04:00:00",
            "opened": true
          },
          "badges": {

          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {

              },
              "textBased": {

              },
              "textExtendedBadges": {

              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹179"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "lottie": {

              },
              "video": {

              }
            }
          },
          "reviewsSummary": {

          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {

          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          "context": "seo-data-a6c92a8b-d8b4-4b98-a752-93711e646a69"
        },
        "cta": {
          "link": "https://www.swiggy.com/city/ahmedabad/kfc-kudasan-gandhinagar-rest765053",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "36981",
          "name": "Domino's Pizza",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/13/36d0a86f-3f38-45f2-bc0c-5297c95c89d6_36981.JPG",
          "locality": "Gandhinagar",
          "areaName": "Sector 11",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "Pizzas",
            "Italian",
            "Pastas",
            "Desserts"
          ],
          "avgRating": 4.4,
          "parentId": "2456",
          "avgRatingString": "4.4",
          "totalRatingsString": "5.4K+",
          "sla": {
            "deliveryTime": 25,
            "lastMileTravel": 2.8,
            "serviceability": "SERVICEABLE",
            "slaString": "20-25 mins",
            "lastMileTravelString": "2.8 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2025-03-21 02:00:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png",
                "description": "Delivery!"
              },
              {
                "imageId": "Rxawards/_CATEGORY-Pizza.png",
                "description": "Delivery!"
              },
              {
                "imageId": "v1695133679/badges/Pure_Veg111.png",
                "description": "pureveg"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "Delivery!",
                      "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png"
                    }
                  },
                  {
                    "attributes": {
                      "description": "Delivery!",
                      "imageId": "Rxawards/_CATEGORY-Pizza.png"
                    }
                  },
                  {
                    "attributes": {
                      "description": "pureveg",
                      "imageId": "v1695133679/badges/Pure_Veg111.png"
                    }
                  }
                ]
              },
              "textBased": {

              },
              "textExtendedBadges": {

              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹89"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "lottie": {

              },
              "video": {

              }
            }
          },
          "reviewsSummary": {

          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {

          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "4.8",
              "ratingCount": "1.8K+"
            },
            "source": "GOOGLE",
            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          "context": "seo-data-a6c92a8b-d8b4-4b98-a752-93711e646a69"
        },
        "cta": {
          "link": "https://www.swiggy.com/city/ahmedabad/dominos-pizza-gandhinagar-sector-11-rest36981",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "45527",
          "name": "Faasos - Wraps, Rolls & Shawarma",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/28/82c74d44-9887-4117-be8e-3b5050763ffb_45527.JPG",
          "locality": "Near Aashka Multispeciality Hospital",
          "areaName": "Gandhinagar",
          "costForTwo": "₹200 for two",
          "cuisines": [
            "Kebabs",
            "Fast Food",
            "Snacks",
            "American",
            "Healthy Food",
            "Desserts",
            "Beverages"
          ],
          "avgRating": 4.4,
          "parentId": "21809",
          "avgRatingString": "4.4",
          "totalRatingsString": "21K+",
          "sla": {
            "deliveryTime": 27,
            "lastMileTravel": 4.1,
            "serviceability": "SERVICEABLE",
            "slaString": "25-30 mins",
            "lastMileTravelString": "4.1 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2025-03-20 23:59:00",
            "opened": true
          },
          "badges": {
            "textExtendedBadges": [
              {
                "iconId": "guiltfree/GF_Logo_android_3x",
                "shortDescription": "options available",
                "fontColor": "#7E808C"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {

              },
              "textBased": {

              },
              "textExtendedBadges": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "",
                      "fontColor": "#7E808C",
                      "iconId": "guiltfree/GF_Logo_android_3x",
                      "shortDescription": "options available"
                    }
                  }
                ]
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹89"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "lottie": {

              },
              "video": {

              }
            }
          },
          "reviewsSummary": {

          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {

          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          "context": "seo-data-a6c92a8b-d8b4-4b98-a752-93711e646a69"
        },
        "cta": {
          "link": "https://www.swiggy.com/city/ahmedabad/faasos-wraps-rolls-and-shawarma-near-aashka-multispeciality-hospital-gandhinagar-rest45527",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "318342",
          "name": "La Pino'z Pizza",
          "cloudinaryImageId": "rpe90k61q1mftqvop5e3",
          "locality": "Gandhinagar",
          "areaName": "Sector 11",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "Pizzas",
            "Pastas",
            "Italian",
            "Desserts",
            "Beverages"
          ],
          "avgRating": 4.4,
          "veg": true,
          "parentId": "4961",
          "avgRatingString": "4.4",
          "totalRatingsString": "4.1K+",
          "sla": {
            "deliveryTime": 24,
            "lastMileTravel": 2.4,
            "serviceability": "SERVICEABLE",
            "slaString": "20-25 mins",
            "lastMileTravelString": "2.4 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2025-03-20 23:00:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png",
                "description": "Delivery!"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "Delivery!",
                      "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png"
                    }
                  }
                ]
              },
              "textBased": {

              },
              "textExtendedBadges": {

              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹99"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "lottie": {

              },
              "video": {

              }
            }
          },
          "reviewsSummary": {

          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {

          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          "context": "seo-data-a6c92a8b-d8b4-4b98-a752-93711e646a69"
        },
        "cta": {
          "link": "https://www.swiggy.com/city/ahmedabad/la-pinoz-pizza-gandhinagar-sector-11-rest318342",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "156086",
          "name": "The Good Bowl",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/15/38b55e8a-29ee-42df-9db9-f354a4e002a6_156086.jpg",
          "locality": "Near Aashka Multispeciality Hospital",
          "areaName": "Gandhinagar",
          "costForTwo": "₹200 for two",
          "cuisines": [
            "Biryani",
            "Pastas",
            "Punjabi",
            "Desserts",
            "Beverages"
          ],
          "avgRating": 4.5,
          "parentId": "7918",
          "avgRatingString": "4.5",
          "totalRatingsString": "4.1K+",
          "sla": {
            "deliveryTime": 21,
            "lastMileTravel": 4.5,
            "serviceability": "SERVICEABLE",
            "slaString": "20-25 mins",
            "lastMileTravelString": "4.5 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2025-03-20 23:59:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Kebab.png",
                "description": "Delivery!"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "Delivery!",
                      "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Kebab.png"
                    }
                  }
                ]
              },
              "textBased": {

              },
              "textExtendedBadges": {

              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹89"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "lottie": {

              },
              "video": {

              }
            }
          },
          "reviewsSummary": {

          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {

          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          "context": "seo-data-a6c92a8b-d8b4-4b98-a752-93711e646a69"
        },
        "cta": {
          "link": "https://www.swiggy.com/city/ahmedabad/the-good-bowl-near-aashka-multispeciality-hospital-gandhinagar-rest156086",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "453130",
          "name": "Natural Ice Cream",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/8/4c318b6a-25e6-440c-bb36-01f51122c6cd_453130.JPG",
          "locality": "Gandhinagar (Swagat Rainforest)",
          "areaName": "Gandhinagar RK",
          "costForTwo": "₹150 for two",
          "cuisines": [
            "Ice Cream",
            "Desserts"
          ],
          "avgRating": 4.8,
          "veg": true,
          "parentId": "2093",
          "avgRatingString": "4.8",
          "totalRatingsString": "511",
          "sla": {
            "deliveryTime": 21,
            "lastMileTravel": 4.5,
            "serviceability": "SERVICEABLE",
            "slaString": "20-25 mins",
            "lastMileTravelString": "4.5 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2025-03-20 23:59:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "Green%20Dot%20Awards/Best%20In%20Ice%20cream.png",
                "description": "Delivery!"
              },
              {
                "imageId": "Rxawards/_CATEGORY-Ice-creams.png",
                "description": "Delivery!"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "Delivery!",
                      "imageId": "Green%20Dot%20Awards/Best%20In%20Ice%20cream.png"
                    }
                  },
                  {
                    "attributes": {
                      "description": "Delivery!",
                      "imageId": "Rxawards/_CATEGORY-Ice-creams.png"
                    }
                  }
                ]
              },
              "textBased": {

              },
              "textExtendedBadges": {

              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "10% OFF",
            "subHeader": "UPTO ₹40"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "lottie": {

              },
              "video": {

              }
            }
          },
          "reviewsSummary": {

          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {

          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          "context": "seo-data-a6c92a8b-d8b4-4b98-a752-93711e646a69"
        },
        "cta": {
          "link": "https://www.swiggy.com/city/ahmedabad/natural-ice-cream-gandhinagar-swagat-rainforest-gandhinagar-rk-rest453130",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "62992",
          "name": "LunchBox - Meals and Thalis",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/16/92861e7e-3b37-494f-9b2c-3c452ceabfa6_62992.jpg",
          "locality": "Near Aashka Multispeciality Hospital",
          "areaName": "Gandhinagar",
          "costForTwo": "₹200 for two",
          "cuisines": [
            "Thalis",
            "North Indian",
            "Biryani"
          ],
          "avgRating": 4.3,
          "parentId": "4925",
          "avgRatingString": "4.3",
          "totalRatingsString": "12K+",
          "sla": {
            "deliveryTime": 27,
            "lastMileTravel": 4.5,
            "serviceability": "SERVICEABLE",
            "slaString": "25-30 mins",
            "lastMileTravelString": "4.5 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2025-03-20 23:59:00",
            "opened": true
          },
          "badges": {
            "textExtendedBadges": [
              {
                "iconId": "guiltfree/GF_Logo_android_3x",
                "shortDescription": "options available",
                "fontColor": "#7E808C"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {

              },
              "textBased": {

              },
              "textExtendedBadges": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "",
                      "fontColor": "#7E808C",
                      "iconId": "guiltfree/GF_Logo_android_3x",
                      "shortDescription": "options available"
                    }
                  }
                ]
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹139"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "lottie": {

              },
              "video": {

              }
            }
          },
          "reviewsSummary": {

          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {

          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          "context": "seo-data-a6c92a8b-d8b4-4b98-a752-93711e646a69"
        },
        "cta": {
          "link": "https://www.swiggy.com/city/ahmedabad/lunchbox-meals-and-thalis-near-aashka-multispeciality-hospital-gandhinagar-rest62992",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "45320",
          "name": "Subway",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/21/99dcf1df-2790-4c65-859f-e0380cb74dcc_45320.JPG",
          "locality": "Super Mall 1",
          "areaName": "Infocity",
          "costForTwo": "₹350 for two",
          "cuisines": [
            "sandwich",
            "Salads",
            "wrap",
            "Healthy Food"
          ],
          "avgRating": 4.3,
          "parentId": "2",
          "avgRatingString": "4.3",
          "totalRatingsString": "7.8K+",
          "sla": {
            "deliveryTime": 22,
            "lastMileTravel": 1.7,
            "serviceability": "SERVICEABLE",
            "slaString": "20-25 mins",
            "lastMileTravelString": "1.7 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2025-03-20 23:59:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Salad.png",
                "description": "Delivery!"
              }
            ]
          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {

          },
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "Delivery!",
                      "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Salad.png"
                    }
                  }
                ]
              },
              "textBased": {

              },
              "textExtendedBadges": {

              }
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "lottie": {

              },
              "video": {

              }
            }
          },
          "reviewsSummary": {

          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {

          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          "context": "seo-data-a6c92a8b-d8b4-4b98-a752-93711e646a69"
        },
        "cta": {
          "link": "https://www.swiggy.com/city/ahmedabad/subway-super-mall-1-infocity-rest45320",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "198360",
          "name": "The Biryani Life",
          "cloudinaryImageId": "unodkhc8mlzvfgcp2k0x",
          "locality": "Near Aashka Multispeciality Hospital",
          "areaName": "Gandhinagar",
          "costForTwo": "₹200 for two",
          "cuisines": [
            "Biryani",
            "Mughlai",
            "Lucknowi",
            "Hyderabadi",
            "Kebabs",
            "Desserts",
            "Beverages"
          ],
          "avgRating": 4.3,
          "parentId": "8496",
          "avgRatingString": "4.3",
          "totalRatingsString": "4.2K+",
          "sla": {
            "deliveryTime": 21,
            "lastMileTravel": 4.5,
            "serviceability": "SERVICEABLE",
            "slaString": "20-25 mins",
            "lastMileTravelString": "4.5 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2025-03-20 23:59:00",
            "opened": true
          },
          "badges": {

          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {

              },
              "textBased": {

              },
              "textExtendedBadges": {

              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹159"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "lottie": {

              },
              "video": {

              }
            }
          },
          "reviewsSummary": {

          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {

          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          "context": "seo-data-a6c92a8b-d8b4-4b98-a752-93711e646a69"
        },
        "cta": {
          "link": "https://www.swiggy.com/city/ahmedabad/the-biryani-life-near-aashka-multispeciality-hospital-gandhinagar-rest198360",
          "type": "WEBLINK"
        }
      },
]
    
        
          
         



const Body=()=>{
    return(
        <div className="body">
            <div className="search">
              <h2> search</h2>
            </div>
            <div className="res-container">
             { resList.map((restaurant=>(<RestaurantCard resData={restaurant}/>)))};
              
            </div>

        </div>
    )
}

const AppLayout =()=>{
   return <div className="App">
      <Header/>
      <Body/>
    </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);