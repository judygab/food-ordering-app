import Text from './elements/Text';

const ProductDetailCard = () => {
  return (
    <div className="p-4 rounded-lg bg-slate-50">
      <div className="flex items-center justify-between">
        <div className="">
          <Text variant="title" className={'text-black'}>
            Chicken Rice Box
          </Text>
          <div className="h-2"></div>
          <Text variant="paragraph" className={'text-gray-500'}>
            Tartufi are a frozen delicacy hailing from Southern Italy; a cocoa
            and hazelnut nib crumb encases a layer of smooth and rich dark
            chocolate gelato, with a core of nutty hazelnut gelato.
          </Text>
          <div className="h-2"></div>

          <div className="flex items-center justify-between">
            <Text variant="subtitle" className={'text-black'}>
              $12.00
            </Text>
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <img
            className="w-40 h-40 rounded-xl object-cover"
            src="https://images.unsplash.com/photo-1594007654729-407eedc4be65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=728&q=80"
            alt=""
            srcset=""
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailCard;
