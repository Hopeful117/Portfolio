import Masonry from 'react-masonry-css';

const breakpointColumnsObj = {
  default: 3,
  1100: 2,
  700: 1
};
export interface MasonryProps<T>{
    items: T[]
}
function PortfolioMasonry<T>({ items,renderItem } : {  items: T[];
    renderItem: (item: T) => React.ReactNode;
}){return(
  <Masonry
    breakpointCols={breakpointColumnsObj}
    className="flex w-auto md:h-screen mt-10 mr-5 ml-5"
    columnClassName="flex flex-col md:space-y-4 md:m-5 gap-10"
  >
    {items.map((item,index) => (
    
    <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden transition-transform hover:scale-[1.02]"
        >
     {renderItem(item)}
       
      </div>
    ))}
  </Masonry>
);
}

export default PortfolioMasonry