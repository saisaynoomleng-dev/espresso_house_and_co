import { formatCurrency } from '@/lib/utils';
import { ALL_MENU_ITEMS_QUERYResult } from '@/sanity/types';

const TextMenuCard = (
  props: NonNullable<ALL_MENU_ITEMS_QUERYResult>[number],
) => {
  const { name, ingredients, price } = props;
  return (
    <div className="flex justify-between py-3 border-b border-brand-black/10">
      <div className="flex flex-col gap-y-2">
        <p className="font-semibod">{name}</p>
        <p className="text-brand-black/70 text-fs-200">{ingredients}</p>
      </div>
      <div>
        {price && <p className="font-medium">{formatCurrency(price)}</p>}
      </div>
    </div>
  );
};

export default TextMenuCard;
