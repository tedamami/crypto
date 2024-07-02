import React from 'react';
import { Asset } from '../pages/api/assets';
type AssetCardProps = {
  asset: Asset;
};

const AssetCard: React.FC<AssetCardProps> = ({ asset }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
   
    </div>
  );
};

export default AssetCard;