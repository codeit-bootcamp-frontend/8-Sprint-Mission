import '@/page/Market/components/layout/DropdownList.css';
import { ProductSortOption } from '@/types/product';

interface DropdownMenuProps {
  onSortSelection: (sortOption: ProductSortOption) => void;
}

function DropdownList({ onSortSelection }: DropdownMenuProps) {
  return (
    <div className='dropdownList'>
      <div className='dropdownItem' onClick={() => onSortSelection('recent')}>
        최신순
      </div>
      <div className='dropdownItem' onClick={() => onSortSelection('favorite')}>
        인기순
      </div>
    </div>
  );
}
export default DropdownList;
