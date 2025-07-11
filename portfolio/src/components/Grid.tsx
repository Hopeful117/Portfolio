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
    className="flex ml-4 w-auto h-screen mt-10"
    columnClassName="pl-4 flex flex-col space-y-4"
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