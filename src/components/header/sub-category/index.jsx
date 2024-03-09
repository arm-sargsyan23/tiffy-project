/* components */
import SubCategoryForBigDisplays from "../../../feuturese/header/sub-category-for-big-displays";
import SubCategoryForSmallDisplays from "../../../feuturese/header/sub-category-for-small-displays";

export default function MenuForSubCategory({ menuForSubCategory, setMenuForSubCategory, setNavBar }) {
  const categories = [
    {
      id: 1,
      title: "Одежда",
      subCategories: [
        { subTitle: "Electronics", subId: 1, categoryId: 1 },
        { subTitle: "Technology", subId: 2, categoryId: 1 },
        { subTitle: "Software", subId: 3, categoryId: 1 },
        { subTitle: "Software", subId: 4, categoryId: 1 },
        { subTitle: "Software", subId: 5, categoryId: 1 },
        { subTitle: "Software", subId: 6, categoryId: 1 },
        { subTitle: "Software", subId: 7, categoryId: 1 },
        { subTitle: "Software", subId: 8, categoryId: 1 },
        { subTitle: "Software", subId: 9, categoryId: 1 },
        { subTitle: "Software", subId: 10, categoryId: 1 }
      ]
    },
    {
      id: 2,
      title: "Обувь",
      subCategories: [
        { subTitle: "Apparel", subId: 11, categoryId: 2 },
        { subTitle: "Footwear", subId: 12, categoryId: 2 },
        { subTitle: "Sports Equipment", subId: 13, categoryId: 2 },
        { subTitle: "Sports Equipment", subId: 14, categoryId: 2 },
        { subTitle: "Sports Equipment", subId: 15, categoryId: 2 },
        { subTitle: "Sports Equipment", subId: 16, categoryId: 2 },
        { subTitle: "Sports Equipment", subId: 17, categoryId: 2 },
        { subTitle: "Sports Equipment", subId: 18, categoryId: 2 },
        { subTitle: "Sports Equipment", subId: 19, categoryId: 2 }
      ]
    },
    {
      id: 3,
      title: "Сумки",
      subCategories: [
        { subTitle: "Soft Drinks", subId: 20, categoryId: 3 },
        { subTitle: "Beverages", subId: 21, categoryId: 3 },
        { subTitle: "Soft Drinks", subId: 22, categoryId: 3 },
        { subTitle: "Soft Drinks", subId: 23, categoryId: 3 },
        { subTitle: "Soft Drinks", subId: 24, categoryId: 3 },
        { subTitle: "Soft Drinks", subId: 25, categoryId: 3 },
        { subTitle: "Soft Drinks", subId: 26, categoryId: 3 }
      ]
    },
    {
      id: 4,
      title: "Аксессуары",
      subCategories: [
        { subTitle: "Software", subId: 27, categoryId: 4 },
        { subTitle: "Internet Services", subId: 28, categoryId: 4 },
        { subTitle: "Technology", subId: 29, categoryId: 4 },
        { subTitle: "Technology", subId: 30, categoryId: 4 },
        { subTitle: "Technology", subId: 31, categoryId: 4 },
        { subTitle: "Technology", subId: 32, categoryId: 4 }
      ]
    },
    {
      id: 5,
      title: "Бренды",
      subCategories: [
        { subTitle: "Walmart", subId: 33, categoryId: 5 },
        { subTitle: "Target", subId: 34, categoryId: 5 },
        { subTitle: "Zara", subId: 35, categoryId: 5 },
        { subTitle: "H&M", subId: 36, categoryId: 5 },
        { subTitle: "McDonald's", subId: 37, categoryId: 5 },
        { subTitle: "IKEA", subId: 38, categoryId: 5 },
        { subTitle: "Subway", subId: 39, categoryId: 5 },
        { subTitle: "KFC", subId: 40, categoryId: 5 },
        { subTitle: "Taco Bell", subId: 41, categoryId: 5 },
        { subTitle: "Pizza Hut", subId: 42, categoryId: 5 },
        { subTitle: "CVS", subId: 43, categoryId: 5 },
        { subTitle: "Domino's", subId: 44, categoryId: 5 },
        { subTitle: "Walgreens", subId: 45, categoryId: 5 },
        { subTitle: "Dollar General", subId: 46, categoryId: 5 },
        { subTitle: "Dollar Tree", subId: 47, categoryId: 5 },
        { subTitle: "Costco", subId: 48, categoryId: 5 },
        { subTitle: "Lowe's", subId: 49, categoryId: 5 },
        { subTitle: "7-Eleven", subId: 50, categoryId: 5 },
        { subTitle: "Dunlin'", subId: 51, categoryId: 5 },
        { subTitle: "Burger King", subId: 52, categoryId: 5 },
        { subTitle: "Wendy's", subId: 53, categoryId: 5 },
        { subTitle: "Chipotle", subId: 54, categoryId: 5 },
        { subTitle: "Forever 21", subId: 55, categoryId: 5 },
        { subTitle: "Old Navy", subId: 56, categoryId: 5 },
        { subTitle: "Gap", subId: 57, categoryId: 5 },
        { subTitle: "Sears", subId: 58, categoryId: 5 },
        { subTitle: "JCPenney", subId: 59, categoryId: 5 },
        { subTitle: "Dollar Tree", subId: 60, categoryId: 5 }
      ]
    }
  ];

  function handleSubCategoriesActive() {
    setMenuForSubCategory({ isActive: false, name: menuForSubCategory.name });
    setSubCategoriesActiveForPhone(null);
    setNavBar(false);
  }

  return (
    <div className="w-full bg-white top-[129px] sm:top-[83px] 2md:top-[138px] lg:top-[83px] z-50 absolute">
      <div
        className={`grid justify-items-center transition-all duration-300 ease-in-out overflow-hidden ${menuForSubCategory?.isActive ? "grid-rows-[calc(100vh-129px)] sm:grid-rows-[calc(100vh-83px)] 2md:grid-rows-[60vh]" : "grid-rows-[0px]"}`}
      >
        {/* responsivetion for 2md and higher */}
        <SubCategoryForBigDisplays categories={categories} handleSubCategoriesActive={handleSubCategoriesActive} />

        {/* responsivetion for md and less */}
        <SubCategoryForSmallDisplays
          categories={categories}
          handleSubCategoriesActive={handleSubCategoriesActive}
          setMenuForSubCategory={setMenuForSubCategory}
          menuForSubCategory={menuForSubCategory}
        />
      </div>
    </div>
  );
}
