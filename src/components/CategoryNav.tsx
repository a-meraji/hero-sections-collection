interface CategoryNavProps {
  categories: Array<{
    name: string;
    components: Array<{
      component: React.ReactNode;
      name: string;
      file: string;
    }>;
  }>;
  currentCategory: number;
  onCategoryChange: (index: number) => void;
}

const CategoryNav = ({ categories, currentCategory, onCategoryChange }: CategoryNavProps) => {
  return (
    <nav className="w-full bg-white/80 backdrop-blur-sm py-4 sticky top-0 z-50 border-b">
      <div className="container mx-auto flex flex-wrap justify-center gap-4">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => onCategoryChange(index)}
            className={`px-4 py-2 rounded-full transition-colors ${
              currentCategory === index
                ? 'bg-black text-white'
                : 'bg-white text-black border border-black'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default CategoryNav;